import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, User, Shield } from 'lucide-react';
import Navbar from './Navbar';
import { useAuth } from '../contexts/AuthContext';
import { getLeaderboard } from '../lib/lmsApi';
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
      // PLUS tie-breaking with xpUpdatedAt for those with same XP
      const fetchRank = async () => {
        try {
          const leaderboard = await getLeaderboard(user?.id, 500);
          const currentUser = leaderboard.find(entry => entry.id === user?.id);
          setGlobalRank(currentUser?.rank || null);
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
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      <div className="fixed inset-0 noise-overlay z-50 pointer-events-none" />
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 md:px-8 pt-20 pb-32 relative">
        {/* Animated Flowy Gradient Background */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[160px] animate-pulse -z-10 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-red-600/10 rounded-full blur-[160px] animate-pulse delay-700 -z-10 mix-blend-screen pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div>
              <div className="text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-[0.3em]">Operative Intelligence</div>
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight">Mission Profile</h1>
            </div>
          </div>
          
          {/* Profile Header */}
          <div className="liquid-glass rounded-[2.5rem] p-1 mb-12">
            <div className="bg-[#0a0a0a]/80 backdrop-blur-3xl rounded-[2.3rem] p-10 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gradient opacity-5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] p-1 bg-gradient-to-br from-white/20 to-transparent">
                   <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-zinc-900 flex items-center justify-center relative">
                    {profile?.photoURL ? (
                      <img src={profile.photoURL} alt={profile.displayName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      <User className="w-16 h-16 text-zinc-700" />
                    )}
                   </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center shadow-lg border-2 border-[#0a0a0a]">
                  <Shield size={20} className="text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left relative z-10">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <h2 className="text-4xl md:text-5xl font-serif">{profile?.displayName}</h2>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Verified operative</div>
                </div>
                <p className="text-zinc-500 font-mono text-sm tracking-tight">{profile?.email}</p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-8">
                   <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Affiliation</span>
                      <span className="text-xs font-bold text-white">Blocknauts Academy</span>
                   </div>
                   <div className="w-px h-8 bg-zinc-800" />
                   <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Status</span>
                      <span className="text-xs font-bold text-emerald-500 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active
                      </span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="group bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex items-center gap-8 premium-shadow hover:hover:border-white/10 transition-all">
              <div className="w-20 h-20 rounded-3xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 transition-colors">
                <Star className="w-10 h-10 text-blue-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-600 mb-2 uppercase tracking-[0.2em]">Validated Experience</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-5xl font-serif text-white">
                    {profile?.isTester ? 0 : (profile?.xp || 0)}
                  </p>
                  <span className="text-sm font-bold text-zinc-600 uppercase tracking-widest font-sans">XP</span>
                </div>
              </div>
            </div>
            
            <div className="group bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex items-center gap-8 premium-shadow hover:border-white/10 transition-all">
              <div className="w-20 h-20 rounded-3xl bg-orange-500/5 border border-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500/10 transition-colors">
                <Trophy className="w-10 h-10 text-orange-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-600 mb-2 uppercase tracking-[0.2em]">Strategic Standing</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-zinc-600 font-sans mr-[-4px]">#</span>
                  <p className="text-5xl font-serif text-white">
                    {globalRank !== null ? globalRank : '--'}
                  </p>
                  <span className="text-sm font-bold text-zinc-600 uppercase tracking-widest font-sans ml-2">Global</span>
                </div>
              </div>
            </div>
          </div>

          {/* Badges Section */}
          <div className="mb-8 flex items-center gap-4">
             <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">Proof of Achievement</h3>
             <div className="h-px flex-1 bg-zinc-900" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {badges.map((badge, idx) => (
              <motion.div 
                key={badge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                className={`p-10 rounded-[2.5rem] border transition-all relative overflow-hidden group ${
                  badge.earned 
                    ? 'bg-[#0a0a0a] border-white/10 hover:border-white/20 premium-shadow' 
                    : 'bg-zinc-950/20 border-white/5 opacity-40 grayscale'
                }`}
              >
                {badge.earned && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gradient opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity" />
                )}
                
                <div className="w-16 h-16 rounded-[1.2rem] bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {badge.icon}
                </div>
                <div>
                   <h4 className="font-serif text-2xl mb-3 tracking-tight">{badge.name}</h4>
                   <p className="text-zinc-500 text-sm leading-relaxed">{badge.description}</p>
                </div>
                
                {badge.earned && (
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Authenticated</span>
                    <Medal size={16} className="text-emerald-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
