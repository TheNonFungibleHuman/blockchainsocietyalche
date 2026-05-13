import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Blocknauts from './components/Blocknauts';
import Course from './components/Course';
import Leaderboard from './components/Leaderboard';
import Resources from './components/Resources';
import AcademyHub from './components/AcademyHub';
import Profile from './components/Profile';
import Settings from './components/Settings';
import NotFound from './components/NotFound';
import { ThemeProvider } from './contexts/ThemeContext';
import { useAuth } from './contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Sparkles, AlertCircle, RefreshCcw } from 'lucide-react';
import { ErrorBoundary } from 'react-error-boundary';

declare global {
  interface Window {
    gtag: (command: string, id: string, config?: any) => void;
  }
}

// Analytics Tracker Component
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const gaId = import.meta.env.VITE_PUBLIC_GA_ID || 'G-VJJR6M3KP7';
    if (window.gtag) {
      window.gtag('config', gaId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-8">
        <AlertCircle size={40} className="text-red-500" />
      </div>
      <h1 className="text-4xl font-serif mb-4">Something went wrong</h1>
      <p className="text-zinc-500 max-w-md mb-10 leading-relaxed">
        The mission encountered a critical failure. This has been logged, but you might need to restart the session.
      </p>
      <pre className="bg-zinc-900/50 p-4 rounded-xl text-xs font-mono text-red-400 mb-10 max-w-full overflow-auto border border-white/5">
        {error.message}
      </pre>
      <button
        onClick={() => {
          resetErrorBoundary();
          window.location.href = '/';
        }}
        className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-all"
      >
        <RefreshCcw size={18} />
        Initialize Restart
      </button>
    </div>
  );
}

function LoadingScreen() {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Initializing genesis block...",
    "Synchronizing distributed ledger...",
    "Validating smart contract protocols...",
    "Securing your digital vault...",
    "Broadcasting to the peer network...",
    "Confirming cryptographic signatures...",
    "Connecting to the Internet of Value..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      {/* Background stars/glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      
      {/* Animated Rocket Area */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-10 text-white flex flex-col items-center"
      >
        <div className="relative mb-8">
           <Rocket size={48} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
           <motion.div
             animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
             transition={{ duration: 1.5, repeat: Infinity }}
             className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-orange-500"
           >
             <Sparkles size={16} />
           </motion.div>
        </div>
      </motion.div>

      {/* Text Context */}
      <div className="mt-12 text-center relative z-10 px-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-white text-lg font-serif italic h-8"
          >
            {messages[messageIndex]}
          </motion.p>
        </AnimatePresence>
        
        {/* Loading Bar */}
        <div className="w-48 h-1 bg-zinc-900 rounded-full mt-8 mx-auto overflow-hidden border border-white/5 relative">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { loading } = useAuth();
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider>
        <AnimatePresence>
          {loading && <LoadingScreen />}
        </AnimatePresence>
        <BrowserRouter>
          <AnalyticsTracker />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blocknauts" element={<Blocknauts />} />
            <Route path="/learn" element={<AcademyHub />} />
            <Route path="/learn/course" element={<Course />} />
            <Route path="/learn/leaderboard" element={<Leaderboard />} />
            <Route path="/learn/resources" element={<Resources />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
