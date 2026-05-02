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

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const q = query(collection(db, 'public_profiles'), orderBy('xp', 'desc'), limit(50));
        const snapshot = await getDocs(q);
        const users = snapshot.docs.map((doc, index) => {
          const data = doc.data();
          const fullName = data.displayName || 'Blocknaut';
          const firstName = fullName.split(' ')[0];
          return {
            id: doc.id,
            name: firstName,
            country: data.country || "Global",
            xp: data.xp || 0,
            rank: index + 1,
            trend: "up", // Mock trend
            isUser: user?.uid === doc.id,
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

    fetchLeaderboard();
  }, [user]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500 font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 md:px-8 py-12">
        <div className="mb-8">
          <Link to="/learn" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer group">
            <CaretLeft weight="bold" className="group-hover:-translate-x-1 transition-transform" /> Back to Academy
          </Link>
        </div>

        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-900 dark:bg-white mb-6 shadow-2xl hover:bg-gradient-to-tr hover:from-orange-500 hover:to-red-500 transition-all group cursor-pointer"
          >
            <Trophy size={40} weight="fill" className="text-white dark:text-black group-hover:text-white" />
          </motion.div>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight leading-none mb-4">Global Rankings</h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
            Compete with blockchain builders worldwide. Earn XP by completing modules, passing quizzes, and helping others.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900/50 rounded-[2.5rem] p-4 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-6 py-4 text-xs font-medium text-zinc-400 uppercase tracking-wider border-b border-zinc-100 dark:border-zinc-800/50 mb-4">
            <div className="w-12 text-center">Rank</div>
            <div>Builder</div>
            <div className="w-24 text-center">Region</div>
            <div className="w-24 text-right">Total XP</div>
          </div>

          <div className="flex flex-col gap-2">
            {loading ? (
              <div className="py-20 text-center text-zinc-500">Loading rankings...</div>
            ) : leaderboard.length === 0 ? (
              <div className="py-20 text-center text-zinc-500">No rankings available yet.</div>
            ) : (
              leaderboard.map((u, i) => (
                <motion.div
                  key={u.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, type: 'spring', stiffness: 100, damping: 20 }}
                  className={`grid grid-cols-[auto_1fr_auto_auto] gap-4 items-center px-6 py-4 rounded-2xl transition-all cursor-pointer ${
                    u.isUser 
                      ? 'bg-blue-500/10 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-red-500/10' 
                      : 'hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-red-500/5'
                  }`}
                >
                  <div className="w-12 flex justify-center">
                    {u.rank === 1 ? (
                      <Medal size={28} weight="fill" className="text-yellow-500" />
                    ) : u.rank === 2 ? (
                      <Medal size={28} weight="fill" className="text-zinc-400" />
                    ) : u.rank === 3 ? (
                      <Medal size={28} weight="fill" className="text-amber-700" />
                    ) : (
                      <span className="text-lg font-mono font-medium text-zinc-400">{u.rank}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-medium text-sm overflow-hidden border border-zinc-200 dark:border-zinc-700">
                      {u.photoURL ? (
                        <img src={u.photoURL} alt={u.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      ) : (
                        u.name.charAt(0)
                      )}
                    </div>
                    <span className={`font-medium ${u.isUser ? 'text-blue-700 dark:text-blue-400' : ''}`}>
                      {u.name} {u.isUser && "(You)"}
                    </span>
                  </div>

                  <div className="w-24 text-center text-sm font-medium text-zinc-500 flex items-center justify-center gap-1">
                    <Globe size={14} className="opacity-50" />
                    {u.country}
                  </div>

                  <div className="w-24 text-right flex items-center justify-end gap-2">
                    <span className="font-mono font-medium">{u.xp.toLocaleString()}</span>
                    {u.trend === 'up' && <TrendUp size={16} weight="bold" className="text-emerald-500" />}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
