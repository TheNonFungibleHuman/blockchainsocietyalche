import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, User, Mail, Shield, Check, Loader2, Globe } from 'lucide-react';
import Navbar from './Navbar';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { COUNTRIES } from '../constants/countries';

export default function Settings() {
  const { user, profile, loading } = useAuth();
  const [displayName, setDisplayName] = useState('');
  const [country, setCountry] = useState('Global');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    if (profile?.displayName) {
      setDisplayName(profile.displayName);
    }
    if (profile?.country) {
      setCountry(profile.country);
    }
  }, [profile]);

  if (loading) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  const handleSave = async () => {
    if (!user || !displayName.trim()) return;
    
    setIsSaving(true);
    setSaveSuccess(false);
    
    try {
      const userRef = doc(db, 'users', user.uid);
      const publicRef = doc(db, 'public_profiles', user.uid);
      
      await updateDoc(userRef, { 
        displayName: displayName.trim(),
        country: country
      });
      await updateDoc(publicRef, { 
        displayName: displayName.trim(),
        country: country
      });
      
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error("Failed to update profile", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-6 md:px-8 pt-12 pb-24 relative">
        {/* Geometric Gradient Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <SettingsIcon className="w-6 h-6 text-zinc-300" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif tracking-tight">Settings</h1>
            </div>
            
            <button 
              onClick={handleSave}
              disabled={isSaving || (displayName === profile?.displayName && country === profile?.country)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 cursor-pointer ${
                saveSuccess 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-white text-black hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              {isSaving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : saveSuccess ? (
                <Check className="w-4 h-4" />
              ) : null}
              {saveSuccess ? 'Saved' : 'Save Changes'}
            </button>
          </div>
          
          <div className="space-y-6">
            {/* Account Settings */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8">
              <h2 className="text-xl font-serif mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-zinc-400" /> Account Details
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Display Name</label>
                  <input 
                    type="text" 
                    value={displayName} 
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your display name"
                  />
                  <p className="text-xs text-zinc-500 mt-2">This is how you'll appear on the global leaderboard.</p>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Region / Country</label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <select 
                      value={country} 
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Global">Global</option>
                      {COUNTRIES.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <p className="text-xs text-zinc-500 mt-2">Your country will be displayed next to your name on the leaderboard.</p>
                </div>
                
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input 
                      type="email" 
                      disabled
                      value={profile?.email || ''} 
                      className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none opacity-70 cursor-not-allowed"
                    />
                  </div>
                  <p className="text-xs text-zinc-500 mt-2">Email is linked to your Google account and cannot be changed.</p>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8">
              <h2 className="text-xl font-serif mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-zinc-400" /> Security
              </h2>
              
              <div className="space-y-4">
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  You are currently authenticated via Google. Password management and two-factor authentication are handled by your Google account settings.
                </p>
                <button 
                  disabled
                  className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-500 cursor-not-allowed text-sm font-medium"
                >
                  Change Password
                </button>
              </div>
            </div>
            
          </div>
        </motion.div>
      </main>
    </div>
  );
}
