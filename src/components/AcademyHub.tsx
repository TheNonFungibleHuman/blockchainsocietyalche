import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, BookOpen, Trophy, ArrowRight, Sparkles, X, Shield, UserCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useAuth } from '../contexts/AuthContext';
import { courseData } from '../data/courseData';
import { signInWithGoogle } from '../firebase';

export default function AcademyHub() {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Calculate overall progress
  const allPages = useMemo(() => {
    return courseData.parts?.flatMap(p => 
      p.modules?.flatMap(m => 
        m.pages?.map(page => ({ partId: p.id, moduleId: m.id, pageId: page.id })) || []
      ) || []
    ) || [];
  }, []);

  const completedPagesCount = profile?.completedPages?.length || 0;
  const progressPercentage = allPages.length > 0 ? Math.round((completedPagesCount / allPages.length) * 100) : 0;

  const handleCourseClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      setShowAuthModal(true);
    }
  };

  const handleSignIn = async () => {
    setAuthError(null);
    try {
      await signInWithGoogle();
      setShowAuthModal(false);
      navigate('/learn/course');
    } catch (error: any) {
      if (error.code === 'auth/cancelled-popup-request' || error.code === 'auth/popup-closed-by-user') {
        return;
      }
      if (error.code === 'auth/unauthorized-domain') {
        setAuthError("This domain is not authorized for OAuth. Please add it in the Firebase Console.");
      } else {
        setAuthError(error.message || "Failed to sign in. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      
      {/* Auth Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-500/20 to-red-500/20 opacity-50 pointer-events-none" />
              
              <button 
                onClick={() => setShowAuthModal(false)}
                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 pt-12 flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Trophy className="w-8 h-8 text-orange-400" />
                </div>
                
                <h3 className="text-2xl font-serif mb-2">Save Your Progress</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Create a free account to track your course progress, earn XP, and claim exclusive blockchain badges as you learn.
                </p>

                {authError && (
                  <div className="w-full p-3 mb-6 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs text-left flex items-start gap-2">
                    <Shield className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{authError}</span>
                  </div>
                )}

                <button 
                  onClick={handleSignIn}
                  className="w-full py-4 bg-white text-black rounded-xl font-medium hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 hover:text-white"
                >
                  <UserCircle className="w-5 h-5" />
                  Continue with Google
                </button>
                
                <p className="text-xs text-zinc-500 mt-6">
                  By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-24 relative">
        {/* Geometric Gradient Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-6">
            Master the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
              Internet of Value.
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Comprehensive, interactive courses designed to take you from blockchain beginner to Web3 native.
          </p>
        </motion.div>

        {/* Jump Back In (Logged In State) */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-serif mb-6">Jump Back In</h2>
            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 text-sm text-zinc-400 mb-3">
                  <span className="text-blue-400 font-medium">Course</span>
                  <span>•</span>
                  <span>Blockchain 101</span>
                </div>
                <h3 className="text-3xl font-serif mb-4">{courseData.title}</h3>
                
                {/* Progress Bar */}
                <div className="w-full max-w-md">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-400">Progress</span>
                    <span className="text-white font-mono">{progressPercentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-black rounded-full overflow-hidden border border-white/10">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-red-500 rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }} />
                  </div>
                </div>
              </div>

              <Link 
                to="/learn/course"
                className="relative z-10 shrink-0 flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 hover:text-white"
              >
                {progressPercentage > 0 ? 'Resume Course' : 'Start Course'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}

        {/* Course Catalog */}
        <div>
          <h2 className="text-2xl font-serif mb-6">Available Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course Card 1 */}
            <Link to="/learn/course" onClick={handleCourseClick} className="group block">
              <div className="bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors h-full flex flex-col">
                <div className="h-48 bg-black relative overflow-hidden p-6 flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-red-600/20 group-hover:scale-105 transition-transform duration-700" />
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium">
                      Beginner
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <PlayCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="relative z-10 text-2xl font-serif mt-auto">Blockchain 101</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                    The foundation. Understand trust, centralization, and the problem the internet of value was built to solve.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4" /> 6 Parts
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Trophy className="w-4 h-4" /> 500 XP
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Coming Soon Card */}
            <div className="bg-zinc-900/20 border border-white/5 rounded-3xl overflow-hidden h-full flex flex-col relative">
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-sm font-medium">
                  Coming Soon
                </div>
              </div>
              <div className="h-48 bg-black/50 relative overflow-hidden p-6 opacity-50">
                <h3 className="relative z-10 text-2xl font-serif mt-auto pt-24">DeFi Fundamentals</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col opacity-50">
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-1">
                  Deep dive into decentralized finance, liquidity pools, and automated market makers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
