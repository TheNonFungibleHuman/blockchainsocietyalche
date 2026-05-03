import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, TrendUp, Globe, CaretLeft } from '@phosphor-icons/react';
import Navbar from './Navbar';
import { db } from '../firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchLeaderboard = async () => {
    try {
      const q = query(collection(db, 'public_profiles'), orderBy('xp', 'desc'), limit(50));
      const snapshot = await getDocs(q);
      const TESTER_UID = 'yCaaPHKI26Yk4OroKR9hbvzB9Qe2';
      
      const filteredDocs = snapshot.docs.filter(doc => doc.id !== TESTER_UID);
      
      const users = filteredDocs.map((doc, index) => {
        const data = doc.data();
        const fullName = data.displayName || 'Blocknaut';
        const firstName = fullName.split(' ')[0];
        
        const xp = data.xp || 0;
        const isUser = user?.uid === doc.id;
        
        return {
          id: doc.id,
          name: firstName,
          country: data.country || "Global",
          xp: xp,
          rank: index + 1,
          trend: "up", // Mock trend
          isUser: isUser,
          photoURL: data.photoURL
        };
      });
      setLeaderboard(users);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, [user]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      <div className="fixed inset-0 noise-overlay z-50 pointer-events-none" />
      <Navbar />
      
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 md:px-8 pt-20 pb-32 relative">
        {/* Animated Flowy Gradient Background */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[160px] animate-pulse -z-10 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-600/10 rounded-full blur-[160px] animate-pulse delay-1000 -z-10 mix-blend-screen pointer-events-none" />

        <div className="mb-12">
          <Link to="/learn" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-white transition-all cursor-pointer group">
            <CaretLeft weight="bold" className="group-hover:-translate-x-1 transition-transform" /> Back
          </Link>
        </div>

        <div className="text-center mb-24 relative">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-white text-black mb-10 shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:bg-accent-gradient hover:text-white transition-all group cursor-pointer"
          >
            <Trophy size={48} weight="fill" className="group-hover:scale-110 transition-transform" />
          </motion.div>
          <div className="text-[10px] font-bold text-zinc-500 mb-4 uppercase tracking-[0.4em]">Strategic Standings</div>
          <h1 className="font-serif text-6xl md:text-8xl tracking-tight leading-none mb-8">Global Rankings</h1>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg leading-relaxed text-balance">
            Validated proof of expertise within the Blocknauts ecosystem
          </p>
        </div>

        <div className="liquid-glass rounded-[3rem] p-1 overflow-hidden premium-shadow">
          <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[2.8rem] p-4 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
            
            <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-8 py-6 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-white/5 mb-6">
              <div className="w-16 text-center">Rank</div>
              <div>Blocknaut</div>
              <div className="w-24 text-center hidden sm:block">Sector</div>
              <div className="w-32 text-right">Validated XP</div>
            </div>

            <div className="flex flex-col gap-3">
              {loading ? (
                <div className="py-32 flex flex-col items-center justify-center gap-6">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-2 border-white/5 rounded-2xl" />
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-blue-500 border-t-transparent rounded-2xl"
                    />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 animate-pulse">Gathering Operatives...</p>
                </div>
              ) : leaderboard.length === 0 ? (
                <div className="py-32 text-center text-zinc-500 font-serif italic text-xl">No operatives detected in sector.</div>
              ) : (
                leaderboard.map((u, i) => (
                  <motion.div
                    key={u.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className={`grid grid-cols-[auto_1fr_auto_auto] gap-4 items-center px-8 py-5 rounded-[1.5rem] transition-all relative group overflow-hidden ${
                      u.isUser 
                        ? 'bg-blue-500/10 border border-blue-500/20' 
                        : 'hover:bg-white/[0.03] border border-transparent hover:border-white/5'
                    }`}
                  >
                    {u.isUser && (
                      <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
                    )}
                    
                    <div className="w-16 flex justify-center relative z-10">
                      {u.rank === 1 ? (
                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shadow-lg shadow-yellow-500/5">
                          <Medal size={24} weight="fill" className="text-yellow-500" />
                        </div>
                      ) : u.rank === 2 ? (
                        <div className="w-10 h-10 rounded-xl bg-zinc-400/10 border border-zinc-400/20 flex items-center justify-center shadow-lg shadow-zinc-400/5">
                          <Medal size={24} weight="fill" className="text-zinc-400" />
                        </div>
                      ) : u.rank === 3 ? (
                        <div className="w-10 h-10 rounded-xl bg-amber-700/10 border border-amber-700/20 flex items-center justify-center shadow-lg shadow-amber-700/5">
                          <Medal size={24} weight="fill" className="text-amber-700" />
                        </div>
                      ) : (
                        <span className="text-lg font-mono font-medium text-zinc-600 group-hover:text-zinc-400 transition-colors">{u.rank.toString().padStart(2, '0')}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-6 relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center font-bold text-sm overflow-hidden group-hover:scale-105 transition-transform">
                        {u.photoURL ? (
                          <img src={u.photoURL} alt={u.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        ) : (
                          <span className="text-zinc-600">{u.name.charAt(0)}</span>
                        )}
                      </div>
                      <span className={`font-medium tracking-tight text-lg ${u.isUser ? 'text-white' : 'text-zinc-300 group-hover:text-white transition-colors'}`}>
                        {u.name} {u.isUser && <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-blue-500">You</span>}
                      </span>
                    </div>
  
                    <div className="w-24 text-center text-[10px] font-bold text-zinc-600 hidden sm:flex items-center justify-center gap-2 relative z-10">
                      <Globe size={14} className="opacity-30" />
                      <span className="uppercase tracking-widest">{u.country}</span>
                    </div>
  
                    <div className="w-32 text-right flex items-center justify-end gap-3 relative z-10">
                      <span className="font-serif text-3xl tabular-nums">{u.xp}</span>
                      <div className="flex flex-col items-end">
                        <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest leading-none mb-1">Status</span>
                        {u.trend === 'up' && <TrendUp size={14} weight="bold" className="text-emerald-500 animate-bounce" />}
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
