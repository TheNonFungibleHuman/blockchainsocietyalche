import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Blocknauts from './components/Blocknauts';
import Course from './components/Course';
import Leaderboard from './components/Leaderboard';
import Resources from './components/Resources';
import AcademyHub from './components/AcademyHub';
import Profile from './components/Profile';
import Settings from './components/Settings';
import { ThemeProvider } from './contexts/ThemeContext';
import { useAuth } from './contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Sparkles, Globe, Orbit } from 'lucide-react';

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
    <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Stars/Glow */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] animate-pulse delay-700" />
      
      {/* Animated Orbit */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-dashed border-zinc-800 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 border border-zinc-800/50 rounded-full"
        />
        
        {/* Floating Astronaut Area */}
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
          className="relative z-10 text-white"
        >
          <div className="relative">
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

        {/* Orbiting Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full blur-sm" />
        </motion.div>
      </div>

      {/* Text Context */}
      <div className="mt-12 text-center relative z-10 px-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-white text-lg font-serif italic"
          >
            {messages[messageIndex]}
          </motion.p>
        </AnimatePresence>
        
        {/* Loading Bar */}
        <div className="w-48 h-1 bg-zinc-900 rounded-full mt-8 mx-auto overflow-hidden border border-white/5">
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
    <ThemeProvider>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blocknauts" element={<Blocknauts />} />
          <Route path="/learn" element={<AcademyHub />} />
          <Route path="/learn/course" element={<Course />} />
          <Route path="/learn/leaderboard" element={<Leaderboard />} />
          <Route path="/learn/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
