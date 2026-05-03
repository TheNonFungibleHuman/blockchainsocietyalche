import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, User } from 'lucide-react';
import Navbar from './Navbar';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, where, getCountFromServer } from 'firebase/firestore';
import { db } from '../firebase';
import { Navigate } from 'react-router-dom';

export default function Profile() {
  const { user, profile, loading } = useAuth();
  const [globalRank, setGlobalRank] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (profile?.xp !== undefined) {
      // Calculate rank by counting how many users have strictly more XP
      const fetchRank = async () => {
        try {
          const q = query(collection(db, 'public_profiles'), where('xp', '>', profile.xp));
          const snapshot = await getCountFromServer(q);
          setGlobalRank(snapshot.data().count + 1);
        } catch (error) {
          console.error("Failed to fetch rank", error);
        }
      };
      fetchRank();
    }
  }, [profile]);

  if (loading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  // Mock badges based on XP
  const badges = [
    { id: 'genesis', name: 'Genesis Explorer', description: 'Joined the ALCHE Academy', icon: <Star className="w-6 h-6 text-blue-400" />, earned: true },
    { id: 'first_quiz', name: 'Quiz Ace', description: 'Aced the first module quiz', icon: <Medal className="w-6 h-6 text-orange-400" />, earned: (profile?.xp || 0) > 0 },
    { id: 'blockchain_101', name: 'Blockchain Scholar', description: 'Completed Blockchain 101', icon: <Trophy className="w-6 h-6 text-yellow-400" />, earned: (profile?.xp || 0) >= 500 },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 md:px-8 pt-12 pb-24 relative">
        {/* Geometric Gradient Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-8">My Profile</h1>
          
          {/* Profile Header */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-red-600/5 pointer-events-none" />
            
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-zinc-800 overflow-hidden bg-zinc-800 flex items-center justify-center shrink-0 relative z-10">
              {profile?.photoURL ? (
                <img src={profile.photoURL} alt={profile.displayName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                <User className="w-12 h-12 text-zinc-500" />
              )}
            </div>
            
            <div className="flex-1 text-center md:text-left relative z-10">
              <h2 className="text-3xl font-serif mb-2">{profile?.displayName}</h2>
              <p className="text-zinc-400">{profile?.email}</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <Star className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-400 mb-1 uppercase tracking-wider">Total XP</p>
                <p className="text-4xl font-mono text-white">
                  {user?.email?.toLowerCase() === 'haryormeekun99@gmail.com' ? 0 : (profile?.xp || 0)}
                </p>
              </div>
            </div>
            
            <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <Trophy className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-400 mb-1 uppercase tracking-wider">Global Rank</p>
                <p className="text-4xl font-mono text-white">
                  {globalRank !== null ? `#${globalRank}` : '--'}
                </p>
              </div>
            </div>
          </div>

          {/* Badges Section */}
          <h3 className="text-2xl font-serif mb-6">Earned Badges</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {badges.map((badge) => (
              <div 
                key={badge.id} 
                className={`p-6 rounded-3xl border transition-all ${
                  badge.earned 
                    ? 'bg-zinc-900/60 border-white/20 hover:border-white/40' 
                    : 'bg-zinc-900/20 border-white/5 opacity-50 grayscale'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  {badge.icon}
                </div>
                <h4 className="font-medium text-lg mb-2">{badge.name}</h4>
                <p className="text-sm text-zinc-400">{badge.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
