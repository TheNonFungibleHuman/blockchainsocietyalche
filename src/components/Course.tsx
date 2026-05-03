import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Circle, BookOpen, PlayCircle, LockKey, CaretRight, CaretLeft, CaretDown, BookBookmark, Trophy, FileText, X as XIcon, ArrowRight, Shield, List } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { courseData } from '../data/courseData';
import Navbar from './Navbar';
import { useAuth } from '../contexts/AuthContext';
import { doc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import CexDexDemo from './demos/CexDexDemo';
import TransactionLifecycleDemo from './demos/TransactionLifecycleDemo';
import ConsensusSimulator from './demos/ConsensusSimulator';
import IncentiveDesignLab from './demos/IncentiveDesignLab';
import EscrowSimulator from './demos/EscrowSimulator';

export default function Course() {
  const { user, profile, loading: authLoading } = useAuth();

  // Navigation State
  const [activePart, setActivePart] = useState<string | null>((courseData as any).introduction?.[0] ? null : courseData.parts[0].id);
  const [activeModule, setActiveModule] = useState<string | null>((courseData as any).introduction?.[0] ? null : courseData.parts[0].modules[0].id);
  const [activePage, setActivePage] = useState<string>((courseData as any).introduction?.[0]?.id || courseData.parts[0].modules[0].pages[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  // Progress & Gamification State (Local state synced with Firebase)
  const [completedPages, setCompletedPages] = useState<string[]>([]);
  const [userXP, setUserXP] = useState(0); 
  const [quizStates, setQuizStates] = useState<Record<string, { currentQ: number, attempts: Record<string, number>, finished: boolean }>>({});
  const [videoLoading, setVideoLoading] = useState(true);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Flattened pages for robust forward/back navigation
  const allPages = useMemo(() => {
    const introPages = (courseData as any).introduction?.map(page => ({ partId: null, moduleId: null, pageId: page.id })) || [];
    const mainPages = courseData.parts?.flatMap(p => 
      p.modules?.flatMap(m => 
        m.pages?.map(page => ({ partId: p.id, moduleId: m.id, pageId: page.id })) || []
      ) || []
    ) || [];
    return [...introPages, ...mainPages];
  }, []);

  // Derived Data
  const currentPartData = useMemo(() => courseData.parts.find(p => p.id === activePart), [activePart]);
  const currentModuleData = useMemo(() => currentPartData?.modules.find(m => m.id === activeModule), [currentPartData, activeModule]);
  const currentPageData = useMemo(() => {
    if (!activeModule) {
      return (courseData as any).introduction?.find(p => p.id === activePage);
    }
    return currentModuleData?.pages.find(p => p.id === activePage);
  }, [currentModuleData, activeModule, activePage]);

  const currentIndex = allPages.findIndex(p => p.moduleId === activeModule && p.pageId === activePage);

  // Scroll to top and handle video loading on page change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
    
    // Only trigger video loading if it's a video page
    if (currentPageData?.type === 'video') {
      setVideoLoading(true);
    }
  }, [activePage, activeModule, currentPageData?.type]);

  // Sync local state with Firebase profile on load
  useEffect(() => {
    if (profile) {
      setCompletedPages(profile.completedPages || []);
      
      // Hardcode XP to 0 for tester account
      if (user?.email?.toLowerCase() === 'haryormeekun99@gmail.com') {
        setUserXP(0);
        if (profile.xp !== 0) {
          updateFirebaseProfile({ xp: 0 });
        }
      } else {
        setUserXP(profile.xp || 0);
      }

      try {
        if (profile.quizStates) {
          setQuizStates(JSON.parse(profile.quizStates));
        }
      } catch (e) {
        console.error("Failed to parse quiz states", e);
      }
    } else {
      // Fallback for unauthenticated users (demo mode)
      setUserXP(140);
    }
  }, [profile, user?.email]);

  // Helper to update Firebase
  const updateFirebaseProfile = async (updates: any) => {
    if (!user) return;

    // Prevent XP updates for the tester account, always force to 0
    const isTester = user.email?.toLowerCase() === 'haryormeekun99@gmail.com';
    if (isTester) {
      updates.xp = 0;
    }

    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, updates);
      
      // If XP changed (or if it's the tester), update public profile
      if (updates.xp !== undefined) {
        const publicRef = doc(db, 'public_profiles', user.uid);
        await setDoc(publicRef, { 
          xp: updates.xp,
          displayName: profile?.displayName || user.displayName || 'Blocknaut',
          photoURL: profile?.photoURL || user.photoURL || '',
          country: profile?.country || 'Global'
        }, { merge: true });
      }
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  const handleSetUserXP = (updater: number | ((prev: number) => number)) => {
    if (user?.email?.toLowerCase() === 'haryormeekun99@gmail.com') {
      setUserXP(0);
      // Also force update public profile to 0 if it's currently something else
      updateFirebaseProfile({ xp: 0 });
      return;
    }
    setUserXP(prev => {
      const newXP = typeof updater === 'function' ? updater(prev) : updater;
      updateFirebaseProfile({ xp: newXP });
      return newXP;
    });
  };

  const handleUpdateQuizState = (moduleId: string, newState: any) => {
    setQuizStates(prev => {
      const updated = {
        ...prev,
        [moduleId]: { ...(prev[moduleId] || { currentQ: 0, attempts: {}, finished: false }), ...newState }
      };
      updateFirebaseProfile({ quizStates: JSON.stringify(updated) });
      return updated;
    });
  };
  
  // UI State
  const [isDark, setIsDark] = useState(true);
  const [expandedParts, setExpandedParts] = useState<string[]>([courseData.parts[0].id]);
  const [rightPaneTab, setRightPaneTab] = useState<'glossary' | 'resources' | 'leaderboard' | null>(null);

  // Sync dark mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  if (authLoading) {
    return null;
  }

  const handleFinishWelcome = async () => {
    if (!user) return;
    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, { welcomeWatched: true });
    } catch (error) {
      console.error("Error setting welcomeWatched", error);
    }
  };

  const isPageLocked = (pageIndex: number) => {
    if (pageIndex <= 0) return false;
    
    // Global bypass for testing account
    if (user?.email?.toLowerCase() === 'haryormeekun99@gmail.com') {
      return false;
    }
    
    const page = allPages[pageIndex];
    
    // 1. Check Part 2+ restriction for non-testers
    // Only haryormeekun99@gmail.com can see Part 2 and beyond
    if (page.partId && page.partId !== 'part-1') {
      if (user?.email?.toLowerCase() !== 'haryormeekun99@gmail.com') {
        return true;
      }
    }

    // 2. Welcome Video Lock
    // Everything except the first page is locked until welcome video is watched
    if (pageIndex > 0 && profile && !profile.welcomeWatched) {
      return true;
    }

    // 3. Strict sequential lock: prev page must be completed
    const prevPage = allPages[pageIndex - 1];
    const prevGlobalId = prevPage.moduleId ? `${prevPage.moduleId}-${prevPage.pageId}` : prevPage.pageId;
    const isPrevCompleted = completedPages.includes(prevGlobalId) || completedPages.includes(prevPage.pageId);
    
    if (!isPrevCompleted) return true;

    return false;
  };

  const togglePart = (partId: string) => {
    setExpandedParts(prev => 
      prev.includes(partId) ? prev.filter(id => id !== partId) : [...prev, partId]
    );
  };

  const handleNext = () => {
    const globalPageId = activeModule ? `${activeModule}-${activePage}` : activePage;
    // Support legacy completion format (just pageId) for backwards compatibility
    const isAlreadyCompleted = completedPages.includes(globalPageId) || completedPages.includes(activePage);
    
    // Unlock course if this was the welcome video
    if ((currentPageData as any)?.isWelcome) {
      handleFinishWelcome();
    }

    if (!isAlreadyCompleted) {
      const newCompleted = [...completedPages, globalPageId];
      setCompletedPages(newCompleted);
      updateFirebaseProfile({ completedPages: newCompleted });
    }
    if (currentIndex < allPages.length - 1) {
      const next = allPages[currentIndex + 1];
      setActivePart(next.partId);
      setActiveModule(next.moduleId);
      setActivePage(next.pageId);
      
      // Auto-expand the part if we navigated into a new one
      if (next.partId && !expandedParts.includes(next.partId)) {
        setExpandedParts(prev => [...prev, next.partId]);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prev = allPages[currentIndex - 1];
      setActivePart(prev.partId);
      setActiveModule(prev.moduleId);
      setActivePage(prev.pageId);
      
      if (prev.partId && !expandedParts.includes(prev.partId)) {
        setExpandedParts(currentExpanded => [...currentExpanded, prev.partId]);
      }
    }
  };

  const handleReviewRedirect = (pageId: string) => {
    const target = allPages.find(p => p.pageId === pageId);
    if (target) {
      setActivePart(target.partId);
      setActiveModule(target.moduleId);
      setActivePage(target.pageId);
    }
  };

  // Calculate overall progress
  const progressPercentage = Math.round((completedPages.length / allPages.length) * 100);

  // Fetch Leaderboard Data
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  useEffect(() => {
    if (rightPaneTab === 'leaderboard') {
      import('firebase/firestore').then(({ collection, query, orderBy, limit, getDocs }) => {
        const q = query(collection(db, 'public_profiles'), orderBy('xp', 'desc'), limit(10));
        getDocs(q).then(snapshot => {
          const users = snapshot.docs.map((doc, index) => {
            const data = doc.data();
            const fullName = data.displayName || 'Blocknaut';
            const firstName = fullName.split(' ')[0];
            
            let xp = data.xp || 0;
            // Force XP to 0 for tester account
            if (doc.id === user?.uid && user?.email?.toLowerCase() === 'haryormeekun99@gmail.com') {
              xp = 0;
            }

            return {
              rank: index + 1,
              name: firstName,
              xp: xp,
              photoURL: data.photoURL,
              country: data.country || 'Global'
            };
          });
          setLeaderboard(users);
        }).catch(err => console.error("Error fetching leaderboard", err));
      });
    }
  }, [rightPaneTab]);

  return (
    <div className="h-screen bg-[#050505] text-white transition-colors duration-500 font-sans flex flex-col overflow-hidden relative">
       <div className="fixed inset-0 noise-overlay z-0 pointer-events-none" />
      <Navbar />
      
      {/* 3-Pane Cockpit Layout */}
      <div className="flex-1 w-full flex overflow-hidden border-t border-white/5 relative z-10">
        
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-md" 
            onClick={() => setIsSidebarOpen(false)} 
          />
        )}

        {/* LEFT PANE: Progress Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-[70] w-85 bg-[#080808] border-r border-white/5 transform transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) md:relative ${isSidebarCollapsed ? 'md:-ml-85 opacity-0' : 'md:ml-0 opacity-100'} ${isSidebarOpen ? 'translate-x-[0px]' : '-translate-x-full md:translate-x-0'} flex flex-col h-full overflow-y-auto`}>
          <div className="p-8 border-b border-white/5 sticky top-0 z-10 bg-[#080808]/95 backdrop-blur-xl">
            {/* Sidebar Toggle/Back Header */}
            <div className="flex items-center justify-between mb-8">
              <Link to="/learn" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-white transition-all cursor-pointer group">
                <CaretLeft weight="bold" className="group-hover:-translate-x-1 transition-transform" /> Back
              </Link>

              <button 
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setIsSidebarOpen(false);
                  } else {
                    setIsSidebarCollapsed(true);
                  }
                }}
                className="p-2 rounded-xl hover:bg-white/5 text-zinc-500 hover:text-white transition-all cursor-pointer"
                title="Collapse Sidebar"
              >
                <List size={22} />
              </button>
            </div>
            
            <div className="mb-6">
               <div className="text-[10px] font-bold text-zinc-500 mb-1 uppercase tracking-widest">Enrollment 01</div>
               <h2 className="font-serif text-2xl tracking-tight leading-tight">{courseData.title}</h2>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                <span className="text-zinc-500">Sync Status</span>
                <span className="text-white">{progressPercentage}%</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-accent-gradient h-full rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                />
              </div>
            </div>
          </div>

          <div className="p-4 flex flex-col gap-2">
            {/* Introduction Section */}
            {(courseData as any).introduction?.map((page: any, idx: number) => {
              const isActive = activePage === page.id && activeModule === null;
              const isCompleted = completedPages.includes(page.id);
              const isLocked = isPageLocked(idx);
              return (
                <button
                  key={page.id}
                  onClick={() => {
                    if (isLocked) return;
                    setActivePart(null);
                    setActiveModule(null);
                    setActivePage(page.id);
                    setIsSidebarOpen(false);
                  }}
                  disabled={isLocked}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                    isLocked ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
                  } ${
                    isActive 
                      ? 'bg-blue-500/10 dark:bg-blue-900/30 text-zinc-900 dark:text-white font-bold border-2 border-blue-500/50 shadow-lg' 
                      : 'hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {isLocked ? (
                    <LockKey size={18} weight="bold" className="text-zinc-400 shrink-0" />
                  ) : isCompleted ? (
                    <CheckCircle size={18} weight="fill" className="text-emerald-500 shrink-0" />
                  ) : isActive ? (
                    <CaretRight size={18} weight="bold" className="text-blue-500 shrink-0" />
                  ) : (
                    <PlayCircle size={18} weight="bold" className="text-zinc-400 shrink-0" />
                  )}
                  <span className="text-sm font-medium truncate">{page.title}</span>
                </button>
              );
            })}

            {/* Course Parts */}
            {courseData.parts.map((part) => {
              const isExpanded = expandedParts.includes(part.id);
              return (
                <div key={part.id} className="mb-2">
                  <button 
                    onClick={() => togglePart(part.id)}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors text-left cursor-pointer"
                  >
                    <span className="font-medium text-sm">{part.title}</span>
                    <CaretDown className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pr-2 py-2 flex flex-col gap-1 border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 mt-1">
                          {part.modules.map((module) => (
                            <div key={module.id} className="mb-2">
                              <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1 pl-2">
                                {module.title}
                              </div>
                              {module.pages.map((page) => {
                                const globalPageId = `${module.id}-${page.id}`;
                                const isCompleted = completedPages.includes(globalPageId) || (module.id === 'module-1.1' && completedPages.includes(page.id));
                                const isActive = activeModule === module.id && activePage === page.id;
                                
                                // Enhanced Locking Logic
                                const pageIdx = allPages.findIndex(p => p.moduleId === module.id && p.pageId === page.id);
                                const isLocked = isPageLocked(pageIdx);

                                return (
                                  <button
                                    key={page.id}
                                    onClick={() => {
                                      if (isLocked) return;
                                      setActivePart(part.id);
                                      setActiveModule(module.id);
                                      setActivePage(page.id);
                                      setIsSidebarOpen(false); // Close sidebar on mobile after selection
                                    }}
                                    disabled={isLocked}
                                    className={`w-full flex items-center gap-3 p-2 rounded-lg text-left transition-all ${isLocked ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'} ${
                                      isActive 
                                        ? 'bg-blue-500/10 dark:bg-blue-900/30 text-zinc-900 dark:text-white font-medium hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-red-500/10' 
                                        : isLocked 
                                          ? 'text-zinc-400 dark:text-zinc-600'
                                          : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-red-500/5'
                                    }`}
                                  >
                                    {isLocked ? (
                                      <LockKey size={16} weight="bold" className="text-zinc-400 dark:text-zinc-600 shrink-0" />
                                    ) : isCompleted ? (
                                      <CheckCircle size={16} weight="fill" className="text-emerald-500 shrink-0" />
                                    ) : isActive ? (
                                      <CaretRight size={16} weight="bold" className="text-blue-500 shrink-0" />
                                    ) : page.type === 'video' ? (
                                      <PlayCircle size={16} weight="bold" className="text-zinc-400 shrink-0" />
                                    ) : page.type === 'quiz' ? (
                                      <Trophy size={16} weight="bold" className="text-zinc-400 shrink-0" />
                                    ) : (
                                      <Circle size={16} weight="bold" className="text-zinc-300 dark:text-zinc-700 shrink-0" />
                                    )}
                                    <span className="text-xs truncate">{page.title}</span>
                                  </button>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </aside>

        {/* CENTER PANE: Main Content */}
        <main ref={scrollRef} className="flex-1 overflow-y-auto relative bg-[#050505] flex flex-col selection:bg-blue-500/30">
          
          {/* Desktop/Mobile Header */}
          <div className="flex items-center justify-between px-8 h-20 border-b border-white/5 bg-[#050505]/80 backdrop-blur-3xl sticky top-0 z-20">
            <div className="flex items-center gap-4 overflow-hidden">
              <button 
                onClick={() => setIsSidebarCollapsed(false)} 
                className={`hidden p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer ${isSidebarCollapsed ? 'md:flex' : 'md:hidden'}`}
                title="Open Sidebar"
              >
                <List size={24} />
              </button>
              
              {!isSidebarOpen && (
                <button 
                  onClick={() => setIsSidebarOpen(true)} 
                  className="md:hidden p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer"
                  title="Open Sidebar"
                >
                  <List size={22} />
                </button>
              )}

              <div className="flex flex-col overflow-hidden">
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 leading-none mb-1.5 truncate">
                   {activeModule ? currentModuleData?.title : 'Core Orientation'}
                 </span>
                 <span className="font-serif text-lg truncate max-w-[150px] sm:max-w-xs md:max-w-md leading-none">
                   {currentPageData?.title}
                 </span>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
              <div className="flex bg-white/5 rounded-2xl p-1 border border-white/5">
                <button 
                  onClick={() => setRightPaneTab(rightPaneTab === 'glossary' ? null : 'glossary')}
                  className={`p-2.5 rounded-xl transition-all cursor-pointer ${rightPaneTab === 'glossary' ? 'bg-white text-black shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                  title="Glossary"
                >
                  <BookBookmark size={18} weight={rightPaneTab === 'glossary' ? 'fill' : 'bold'} />
                </button>
                <button 
                  onClick={() => setRightPaneTab(rightPaneTab === 'resources' ? null : 'resources')}
                  className={`p-2.5 rounded-xl transition-all cursor-pointer ${rightPaneTab === 'resources' ? 'bg-white text-black shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                  title="Resources"
                >
                  <FileText size={18} weight={rightPaneTab === 'resources' ? 'fill' : 'bold'} />
                </button>
              </div>
              
              <button 
                onClick={() => setRightPaneTab(rightPaneTab === 'leaderboard' ? null : 'leaderboard')}
                className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl text-[10px] font-bold tracking-[0.1em] border transition-all cursor-pointer group ${rightPaneTab === 'leaderboard' ? 'bg-accent-gradient border-transparent text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 border-white/10 text-zinc-400 h-10 hover:border-white/20 hover:text-white'}`}
              >
                <Trophy size={16} className={`transition-transform group-hover:scale-110 ${rightPaneTab === 'leaderboard' ? 'text-white' : 'text-orange-500'}`} weight="fill" /> 
                {userXP} <span className="hidden sm:inline">XP</span>
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-8 py-20 min-h-full flex flex-col w-full relative z-10">
            <motion.div 
              key={activePage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gradient mb-4 block">
                {activeModule ? currentModuleData?.title : 'Core Orientation'}
              </span>
              <h1 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.1] mb-8">
                {currentPageData?.title}
              </h1>
            </motion.div>

            <div className="flex-1">
              {currentPageData?.type === 'interactive' ? (
                (currentPageData as any).componentId === 'SolscanIframe' ? (
                  <div className="w-full h-[600px] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden flex flex-col bg-zinc-50 dark:bg-zinc-900/50">
                    <div className="p-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-sm mb-1">Live Blockchain Explorer</h3>
                        <p className="text-xs text-zinc-500">Inspect real-time transactions happening on the Solana blockchain.</p>
                      </div>
                      <a 
                        href="https://solscan.io/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        Open Solscan <ArrowRight size={14} />
                      </a>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4">
                        <Shield className="w-8 h-8 text-blue-500" />
                      </div>
                      <h4 className="text-lg font-medium mb-2">Security Restriction</h4>
                      <p className="text-sm text-zinc-500 max-w-md mb-6">
                        For security reasons, Solscan (like most financial platforms) prevents its website from being embedded inside other applications to protect users from clickjacking attacks.
                      </p>
                      <a 
                        href="https://solscan.io/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-medium rounded-xl hover:border-blue-500 transition-colors"
                      >
                        Open Explorer in New Tab
                      </a>
                    </div>
                  </div>
                ) : (currentPageData as any).componentId === 'CexDexDemo' ? (
                  <CexDexDemo />
                ) : (currentPageData as any).componentId === 'TransactionLifecycleDemo' ? (
                  <TransactionLifecycleDemo />
                ) : (currentPageData as any).componentId === 'ConsensusSimulator' ? (
                  <ConsensusSimulator />
                ) : (currentPageData as any).componentId === 'IncentiveDesignLab' ? (
                  <IncentiveDesignLab />
                ) : (currentPageData as any).componentId === 'EscrowSimulator' ? (
                  <EscrowSimulator />
                ) : (
                  <NetworkDemo />
                )
              ) : currentPageData?.type === 'quiz' ? (
                <Quiz 
                  moduleId={currentModuleData.id}
                  questions={currentPageData.questions || []} 
                  userXP={userXP} 
                  setUserXP={handleSetUserXP} 
                  onReviewRedirect={handleReviewRedirect}
                  onComplete={handleNext}
                  quizState={quizStates[currentModuleData.id] || { currentQ: 0, attempts: {}, finished: false }}
                  updateQuizState={(newState) => handleUpdateQuizState(currentModuleData.id, newState)}
                />
              ) : currentPageData?.type === 'video' ? (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="aspect-video w-full rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl relative">
                    <AnimatePresence>
                      {videoLoading && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 z-10 bg-zinc-900 flex flex-col items-center justify-center gap-4 text-white"
                        >
                          <div className="relative w-12 h-12">
                            <div className="absolute inset-0 border-2 border-zinc-800 rounded-full" />
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0 border-2 border-emerald-500 border-t-transparent rounded-full"
                            />
                          </div>
                          <p className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-500">Initializing Video Feed...</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <iframe 
                      key={(currentPageData as any).youtubeId}
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube-nocookie.com/embed/${(currentPageData as any).youtubeId}?autoplay=0&origin=${window.location.origin}`} 
                      title={currentPageData.title}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      onLoad={() => setVideoLoading(false)}
                      className="relative z-0"
                    ></iframe>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                       <PlayCircle size={20} className="text-blue-500" /> {(currentPageData as any).isWelcome ? 'Official Onboarding' : 'Tutorial Information'}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {(currentPageData as any).isWelcome 
                        ? "This video is the official introduction and onboarding into the course. Watch the video carefully to understand the foundations of what it means to take the Blockchain 101 course, a guide to this LMS, and to unlock the full curriculum."
                        : "This introductory video covers the key concepts you'll be exploring in this module. If you prefer to watch videos, this can serve as the course content before you attempt the quiz. The course content on the pages are more explanatory and you can go through if you prefer to read or go deeper into the subject"}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="prose prose-zinc dark:prose-invert prose-lg max-w-none">
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal pl-6 mb-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="leading-relaxed">
                          {children}
                        </li>
                      ),
                      h3: ({ children }) => (
                        <h3 className="font-bold text-xl mb-4 mt-8 text-zinc-900 dark:text-white">
                          {children}
                        </h3>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-zinc-900 dark:text-white">
                          {children}
                        </strong>
                      ),
                      pre: ({ children }) => <div className="not-prose">{children}</div>,
                      code: ({ node, className, children, ...props }: any) => {
                        const match = /language-([a-zA-Z0-9-]+)/.exec(className || '');
                        const isBlock = match || String(children).includes('\n');
                        
                        if (isBlock && match && match[1] === 'interactive-hash') {
                          return <HashDemo />;
                        }
                        if (isBlock && match && match[1] === 'interactive-network') {
                          return <NetworkDemo />;
                        }
                        if (isBlock && match && match[1] === 'interactive-block') {
                          return <BlockDemo />;
                        }
                        if (isBlock && match && match[1] === 'interactive-chain') {
                          return <ChainDemo />;
                        }
                        if (isBlock && match && match[1] === 'interactive-consensus') {
                          return <ConsensusDemo />;
                        }
                        if (isBlock) {
                          return (
                            <pre className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl overflow-x-auto mb-6">
                              <code className={className} {...props}>
                                {children}
                              </code>
                            </pre>
                          );
                        }
                        return (
                          <code className="bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 text-sm font-mono px-1.5 py-0.5 rounded break-words" {...props}>
                            {children}
                          </code>
                        );
                      }
                    }}
                  >
                    {currentPageData?.content || ''}
                  </ReactMarkdown>
                </div>
              )}
            </div>

            {/* Navigation Footer (Hidden on Quiz pages as Quiz handles its own completion) */}
            {currentPageData?.type !== 'quiz' && (
              <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="px-6 py-3 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === allPages.length - 1}
                  className="px-8 py-3 rounded-full text-sm font-medium bg-zinc-900 dark:bg-white text-white dark:text-black transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2 shadow-lg shadow-blue-500/20 cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 hover:text-white"
                >
                  Continue <CaretRight weight="bold" />
                </button>
              </div>
            )}
          </div>
        </main>

        {/* RIGHT PANE: Context Drawer */}
        <AnimatePresence>
          {rightPaneTab && (
            <motion.aside 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 350, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="shrink-0 border-l border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 overflow-hidden flex flex-col"
            >
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-white dark:bg-zinc-900">
                <h3 className="font-medium capitalize flex items-center gap-2">
                  {rightPaneTab === 'glossary' && <BookBookmark className="text-blue-500" />}
                  {rightPaneTab === 'resources' && <FileText className="text-blue-500" />}
                  {rightPaneTab === 'leaderboard' && <Trophy className="text-orange-500" />}
                  {rightPaneTab}
                </h3>
                <button 
                  onClick={() => setRightPaneTab(null)}
                  className="p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors cursor-pointer"
                >
                  <XIcon size={16} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto flex-1">
                {rightPaneTab === 'glossary' && (
                  <div className="space-y-6">
                    <div className="text-center p-4 text-sm text-zinc-500">
                      Glossary terms for this module will appear here.
                    </div>
                  </div>
                )}
                
                {rightPaneTab === 'resources' && (
                  <div className="space-y-4">
                    <div className="text-center p-4 text-sm text-zinc-500">
                      Additional resources for this module will appear here.
                    </div>
                  </div>
                )}

                {rightPaneTab === 'leaderboard' && (
                  <div className="space-y-4">
                    {leaderboard.length > 0 ? leaderboard.map((user) => (
                      <div key={user.rank} className="flex items-center justify-between p-3 rounded-lg hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className={`text-sm font-medium w-4 ${user.rank <= 3 ? 'text-orange-500' : 'text-zinc-500'}`}>{user.rank}</span>
                          <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-xs font-medium overflow-hidden">
                            {user.photoURL ? <img src={user.photoURL} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" /> : user.name.charAt(0)}
                          </div>
                          <span className="text-sm font-medium">{user.name}</span>
                        </div>
                        <span className="text-xs font-mono text-zinc-500">{user.xp} XP</span>
                      </div>
                    )) : (
                      <div className="flex flex-col items-center justify-center py-12 gap-4">
                         <div className="w-8 h-8 border-2 border-zinc-200 dark:border-zinc-800 border-t-blue-500 rounded-full animate-spin" />
                         <p className="text-xs text-zinc-500 italic font-serif">Contacting ground control...</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

import NetworkDemo from './NetworkDemo';
import HashDemo from './HashDemo';
import BlockDemo from './BlockDemo';
import ChainDemo from './ChainDemo';
import ConsensusDemo from './ConsensusDemo';

// ==========================================
// STEP 4: QUIZ & XP ENGINE
// ==========================================
function Quiz({ 
  moduleId,
  questions, 
  userXP, 
  setUserXP, 
  onReviewRedirect, 
  onComplete,
  quizState,
  updateQuizState
}: { 
  moduleId: string,
  questions: any[], 
  userXP: number, 
  setUserXP: any, 
  onReviewRedirect: (id: string) => void, 
  onComplete: () => void,
  quizState: { currentQ: number, attempts: Record<string, number>, finished: boolean },
  updateQuizState: (state: any) => void
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  const { currentQ, attempts, finished } = quizState;

  if (finished) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full border border-zinc-200 dark:border-zinc-800 rounded-3xl p-12 bg-zinc-50 dark:bg-zinc-900/50 text-center">
        <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/20">
          <Trophy size={48} weight="duotone" />
        </div>
        <h3 className="text-4xl font-serif mb-4">Module Complete!</h3>
        <p className="text-zinc-500 mb-10 text-lg">You've successfully passed the quiz and earned XP.</p>
        <button onClick={onComplete} className="px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-medium transition-all shadow-lg shadow-blue-500/25 hover:scale-105 cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 hover:text-white">
          Continue to Next Module
        </button>
      </motion.div>
    );
  }

  const question = questions[currentQ];

  const handleSubmit = () => {
    const qAttempts = attempts[question.id] || 0;
    const isFirstAttempt = qAttempts === 0;

    if (selected === question.correctAnswer) {
      setStatus('correct');
      if (isFirstAttempt) {
        setUserXP((prev: number) => prev + 10);
      }
      updateQuizState({ attempts: { ...attempts, [question.id]: qAttempts + 1 } });
    } else {
      setStatus('incorrect');
      if (isFirstAttempt && userXP >= 20) {
        setUserXP((prev: number) => prev - 10);
      }
      updateQuizState({ attempts: { ...attempts, [question.id]: qAttempts + 1 } });
    }
  };

  const handleNextQ = () => {
    if (currentQ < questions.length - 1) {
      updateQuizState({ currentQ: currentQ + 1 });
      setSelected(null);
      setStatus('idle');
    } else {
      updateQuizState({ finished: true });
    }
  };

  return (
    <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-10 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="flex justify-between items-center mb-10">
        <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Question {currentQ + 1} of {questions.length}</span>
        <div className="flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 px-4 py-1.5 rounded-full">
          <Trophy size={16} className="text-orange-500" />
          <span className="text-sm font-mono font-medium text-orange-600 dark:text-orange-400">
            {userXP} XP
          </span>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-10 leading-relaxed">{question.question}</h3>

      <div className="space-y-4 mb-10">
        {question.options.map((opt: string, idx: number) => (
          <button
            key={idx}
            onClick={() => status === 'idle' && setSelected(idx)}
            disabled={status !== 'idle'}
            className={`w-full text-left p-5 rounded-2xl border-2 transition-all cursor-pointer ${
              selected === idx 
                ? status === 'idle' 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md' 
                  : status === 'correct'
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                    : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {status === 'idle' ? (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="w-full py-4 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-black font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transition-all text-lg cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 hover:text-white"
        >
          Submit Answer
        </button>
      ) : status === 'correct' ? (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-emerald-700 dark:text-emerald-400">
            <CheckCircle size={32} weight="fill" />
            <div>
              <span className="block font-bold text-lg">Correct!</span>
              <span className="text-sm opacity-80">
                {attempts[question.id] === 1 ? '+10 XP added to your profile' : 'Good job! (No XP for retakes)'}
              </span>
            </div>
          </div>
          <button onClick={handleNextQ} className="px-8 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20 cursor-pointer">
            {currentQ < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-red-700 dark:text-red-400 font-bold text-lg">
              <XIcon size={24} weight="bold" />
              <span>Incorrect {attempts[question.id] === 1 && userXP >= 20 ? '(-10 XP)' : ''}</span>
            </div>
            <p className="text-sm text-red-600 dark:text-red-300 max-w-md">
              Almost! Don't worry, learning takes time. To understand why, take a quick look back at the concept.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button onClick={() => onReviewRedirect(question.hintPageId)} className="px-6 py-3 rounded-xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
              Review Concept
            </button>
            <button onClick={() => { setSelected(null); setStatus('idle'); }} className="px-6 py-3 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20 cursor-pointer">
              Try Again
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
