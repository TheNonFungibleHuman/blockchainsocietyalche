import { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookBookmark, FileText, Trophy, List, LockKey, CaretRight } from '@phosphor-icons/react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { LiveQueryProvider, useLiveQuery } from '@sanity/preview-kit';
import Navbar from './Navbar';
import NotFound from './NotFound';
import { useAuth } from '../contexts/AuthContext';
import { DEFAULT_COURSE_SLUG } from '../data/courseData';
import { getCourseBySlug, COURSE_BY_SLUG_QUERY, type CourseContent as CourseContentData } from '../lib/courseContent';
import { sanityClient, sanityReadToken } from '../lib/sanity';
import { useCourseProgress } from './course/useCourseProgress';
import { useCourseNavigation } from './course/useCourseNavigation';
import CourseSidebar from './course/CourseSidebar';
import CourseRightPane from './course/CourseRightPane';
import CourseContent from './course/CourseContent';
import type { RightPaneTab } from './course/types';

function CourseLoading() {
  return (
    <div className="h-screen bg-[#050505] text-white flex flex-col items-center justify-center gap-4">
      <div className="w-8 h-8 border-2 border-zinc-200 dark:border-zinc-800 border-t-blue-500 rounded-full animate-spin" />
      <p className="text-xs text-zinc-500 italic font-serif">Loading course…</p>
    </div>
  );
}

function CourseError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="h-screen bg-[#050505] text-white flex flex-col items-center justify-center gap-4 px-6 text-center">
      <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center">
        <LockKey size={28} className="text-zinc-500" />
      </div>
      <h2 className="font-serif text-2xl text-white">Couldn't load this course</h2>
      <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
        We couldn't reach the content service. Check your connection and try again.
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform cursor-pointer"
        >
          Try Again
        </button>
        <Link to="/learn" className="px-6 py-3 border border-white/10 text-zinc-300 font-bold rounded-2xl hover:border-white/30 transition-colors cursor-pointer">
          Back to Academy
        </Link>
      </div>
    </div>
  );
}

export default function Course() {
  const { courseSlug } = useParams();
  const [searchParams] = useSearchParams();
  const slug = courseSlug ?? DEFAULT_COURSE_SLUG;
  const preview = searchParams.get('preview') === 'true';
  const [course, setCourse] = useState<CourseContentData | null>(null);
  const [status, setStatus] = useState<'loading' | 'error' | 'ready'>('loading');
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    getCourseBySlug(slug)
      .then((data) => {
        if (cancelled) return;
        setCourse(data);
        setStatus('ready');
      })
      .catch(() => {
        if (cancelled) return;
        setCourse(null);
        setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, [slug, retryKey]);

  if (status === 'loading') return <CourseLoading />;
  if (status === 'error') return <CourseError onRetry={() => setRetryKey((k) => k + 1)} />;
  if (!course) return <NotFound />;

  // Live draft preview: when ?preview=true and a viewer token is set, subscribe
  // to Sanity live updates so edits appear in the Studio's Presentation iframe.
  if (preview && sanityReadToken) {
    return (
      <Suspense fallback={<CourseLoading />}>
        <LiveQueryProvider client={sanityClient} token={sanityReadToken}>
          <LiveCourse initialCourse={course} slug={slug} />
        </LiveQueryProvider>
      </Suspense>
    );
  }

  return <CourseReader course={course} />;
}

function LiveCourse({ initialCourse, slug }: { initialCourse: CourseContentData; slug: string }) {
  const [liveCourse] = useLiveQuery<CourseContentData | null>(initialCourse, COURSE_BY_SLUG_QUERY, { slug });
  return liveCourse ? <CourseReader course={liveCourse} /> : <NotFound />;
}

function CourseReader({ course }: { course: any }) {
  const { user, profile, loading: authLoading, refreshProfile } = useAuth();
  const courseId: string = course.id;

  // UI State
  const [rightPaneTab, setRightPaneTab] = useState<RightPaneTab>(null);

  const {
    completedPages,
    userXP,
    quizStates,
    videoLoading,
    setVideoLoading,
    leaderboard,
    handleUpdateQuizState,
    handleFinishQuiz,
    handleFinishWelcome,
    markPageComplete,
  } = useCourseProgress({ user, profile, authLoading, refreshProfile, rightPaneTab, courseId });

  const {
    activeModule,
    activePage,
    isSidebarOpen,
    setIsSidebarOpen,
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    expandedParts,
    scrollRef,
    allPages,
    currentModuleData,
    currentPageData,
    currentIndex,
    isPageLocked,
    togglePart,
    selectPage,
    handleNext,
    handlePrev,
    handleReviewRedirect,
  } = useCourseNavigation({
    course,
    profile,
    completedPages,
    quizStates,
    markPageComplete,
    handleFinishWelcome,
    setVideoLoading,
  });

  if (authLoading) {
    return null;
  }

  // Calculate overall progress
  const progressPercentage = Math.round((completedPages.length / allPages.length) * 100);

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
        <CourseSidebar
          course={course}
          isOpen={isSidebarOpen}
          isCollapsed={isSidebarCollapsed}
          progressPercentage={progressPercentage}
          activeModule={activeModule}
          activePage={activePage}
          completedPages={completedPages}
          expandedParts={expandedParts}
          allPages={allPages}
          isPageLocked={isPageLocked}
          onTogglePart={togglePart}
          onSelectPage={selectPage}
          onCloseMobile={() => setIsSidebarOpen(false)}
          onCollapseDesktop={() => setIsSidebarCollapsed(true)}
        />

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

              <div className="flex flex-col overflow-hidden text-white">
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 leading-none mb-1.5 truncate">
                   {activeModule ? currentModuleData?.title : 'Core Orientation'}
                 </span>
                 <span className="font-serif text-lg truncate max-w-[150px] sm:max-w-xs md:max-w-md leading-none text-white">
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
            {isPageLocked(currentIndex) ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 rounded-3xl bg-zinc-900 border border-white/5 flex items-center justify-center shadow-2xl relative group">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                  <LockKey size={40} weight="fill" className="text-zinc-500 relative z-10" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl tracking-tight text-white">Strategic Hold</h2>
                  <p className="text-zinc-400 max-w-md mx-auto text-sm leading-relaxed">
                    This sector is currently restricted. Complete all preceding modules and await further authorization. 
                  </p>
                </div>
                <button 
                  onClick={handlePrev}
                  className="px-8 py-3 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform cursor-pointer"
                >
                  Return to Active Sector
                </button>
              </div>
            ) : (
              <>
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
                  <h1 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.1] mb-8 text-white">
                    {currentPageData?.title}
                  </h1>
                </motion.div>

                <CourseContent
                  pageData={currentPageData}
                  moduleData={currentModuleData}
                  userXP={userXP}
                  videoLoading={videoLoading}
                  setVideoLoading={setVideoLoading}
                  quizStates={quizStates}
                  handleUpdateQuizState={handleUpdateQuizState}
                  handleFinishQuiz={handleFinishQuiz}
                  handleReviewRedirect={handleReviewRedirect}
                  handleNext={handleNext}
                />

                {/* Navigation Footer (Hidden on Quiz pages as Quiz handles its own completion) */}
                {currentPageData?.type !== 'quiz' && (
                  <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <button
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                      className="px-6 py-3 rounded-full text-sm font-medium text-zinc-400 hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
              </>
            )}
          </div>
        </main>

        {/* RIGHT PANE: Context Drawer */}
        <CourseRightPane tab={rightPaneTab} onClose={() => setRightPaneTab(null)} leaderboard={leaderboard} />

      </div>
    </div>
  );
}
