import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, BookOpen, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SignInModal from './SignInModal';
import { useAuth } from '../contexts/AuthContext';
import { courseData } from '../data/courseData';

export default function AcademyHub() {
  const { user, profile } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      <div className="fixed inset-0 noise-overlay z-50 pointer-events-none" />
      <Navbar />
      
      {/* Auth Modal */}
      <SignInModal
        open={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        title="Save Your Progress"
        subtitle="Create a free account to track your course progress, earn XP, and claim exclusive blockchain badges as you learn."
      />

      <main className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-32 relative">
        {/* Animated Flowy Gradient Background */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[160px] animate-pulse -z-10 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-600/20 rounded-full blur-[160px] animate-pulse delay-700 -z-10 mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-purple-600/10 rounded-full blur-[140px] -z-10 mix-blend-screen pointer-events-none" />

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-8">
            <Sparkles size={12} className="text-blue-400" />
            Empowering the next generation of builders
          </div>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight mb-8">
            Master the <br/>
            <span className="text-accent-gradient">
              Internet of Value.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed text-balance">
            Interactive, deep-dive curriculum designed to transform beginners into sovereign Web3 natives through hands-on simulations.
          </p>
        </motion.div>

        {/* Jump Back In (Logged In State) */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8 flex items-center gap-4">
              Current Mission
              <div className="h-px flex-1 bg-zinc-800" />
            </h2>
            <div className="liquid-glass rounded-[2rem] p-1 md:p-1.5 overflow-hidden group">
              <div className="bg-[#0a0a0a]/80 backdrop-blur-3xl rounded-[1.8rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl" />
                
                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-4">
                    <span className="text-blue-400 font-bold border border-blue-500/30 px-2 py-0.5 rounded">CORE</span>
                    <span>•</span>
                    <span className="uppercase tracking-widest">Blockchain 101</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif mb-8">{courseData.title}</h3>
                  
                  {/* Progress Bar */}
                  <div className="w-full max-w-lg">
                    <div className="flex justify-between text-xs font-mono mb-3">
                      <span className="text-zinc-500 uppercase tracking-widest">Sync Progress</span>
                      <span className="text-white">{progressPercentage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-accent-gradient rounded-full" 
                      />
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/learn/course"
                    className="relative z-10 shrink-0 flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-black font-bold text-sm tracking-wide hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all cursor-pointer group/btn overflow-hidden"
                  >
                    <span className="relative z-10">{progressPercentage > 0 ? 'Resume Mission' : 'Initiate Sequence'}</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Course Catalog */}
        <div className="relative">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-12 flex items-center gap-4">
            Curriculum
            <div className="h-px flex-1 bg-zinc-800" />
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/learn/course" onClick={handleCourseClick} className="group block h-full">
                <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all duration-500 h-full flex flex-col premium-shadow group-hover:-translate-y-2 relative">
                  <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="h-56 bg-zinc-900/40 relative overflow-hidden p-8 flex flex-col justify-between">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-red-600/20 group-hover:scale-110 transition-transform duration-1000" />
                    <div className="relative z-10 flex justify-between items-start">
                      <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-[10px] font-bold uppercase tracking-widest text-blue-400">
                        Beginner
                      </div>
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500"
                      >
                        <PlayCircle className="w-6 h-6" />
                      </motion.div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-zinc-500 mb-1 uppercase tracking-[0.2em]">ALCHE-01</div>
                      <h3 className="text-3xl font-serif">Blockchain 101</h3>
                    </div>
                  </div>
                  
                  <div className="p-8 pb-10 flex-1 flex flex-col justify-between relative z-10">
                    <p className="text-zinc-400 text-sm leading-relaxed mb-10 text-balance">
                      The atomic unit of Web3. Understand trust, hash functions, and why distributed consensus changes everything.
                    </p>
                    <div className="flex items-center gap-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest border-t border-white/5 pt-6">
                      <div className="flex items-center gap-2 group-hover:text-white transition-colors">
                        <BookOpen size={14} className="text-blue-500" /> 6 Parts
                      </div>
                      <div className="flex items-center gap-2 group-hover:text-white transition-colors">
                        <Trophy size={14} className="text-orange-500" /> 500 XP
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-full"
            >
              <div className="bg-zinc-950/40 border border-white/5 rounded-[2.5rem] overflow-hidden h-full flex flex-col relative group grayscale">
                <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                  <div className="px-5 py-2.5 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-500 transform -rotate-3">
                    In Development
                  </div>
                </div>
                <div className="h-56 bg-zinc-900/20 relative overflow-hidden p-8 flex flex-col justify-end">
                   <div className="text-[10px] font-bold text-zinc-700 mb-1 uppercase tracking-[0.2em]">DEFI-01</div>
                   <h3 className="text-3xl font-serif text-zinc-600">DeFi Fundamentals</h3>
                </div>
                <div className="p-8 pb-10 flex-1 flex flex-col opacity-40">
                  <p className="text-zinc-600 text-sm leading-relaxed mb-10">
                    Deep dive into liquidity protocols, automated market makers, and the future of open finance.
                  </p>
                  <div className="h-px bg-zinc-900 w-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
