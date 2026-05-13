import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10"
      >
        <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 mx-auto">
          <Compass size={48} className="text-blue-500 animate-[spin_10s_linear_infinite]" />
        </div>
        
        <h1 className="text-7xl font-serif mb-4 tracking-tighter">404</h1>
        <p className="text-zinc-500 text-xl mb-12 max-w-sm mx-auto leading-relaxed">
          You've drifted outside the known blockchain sectors. This area is uncharted.
        </p>
        
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Return to Mission Control
        </button>
      </motion.div>

      {/* Floating Debris Decor */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-[20%] w-2 h-2 bg-white/20 rounded-full blur-[1px]" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-[15%] w-3 h-3 bg-blue-500/10 rounded-full blur-[2px]" 
      />
    </div>
  );
};

export default NotFound;
