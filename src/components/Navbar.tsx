import { useState } from 'react';
import { ChevronDown, Menu, X, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo, GeometricText } from './Logo';
import { useAuth } from '../contexts/AuthContext';
import { signInWithGoogle, logOut } from '../firebase';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const { user, profile } = useAuth();
  const location = useLocation();
  
  // Only show the focused "Cockpit" navbar on specific course pages, NOT the Academy Hub (/learn)
  const isCoursePage = ['/learn/course', '/learn/leaderboard', '/learn/resources'].includes(location.pathname);

  const handleSignIn = async () => {
    setAuthError(null);
    try {
      await signInWithGoogle();
    } catch (error: any) {
      if (error.code === 'auth/cancelled-popup-request' || error.code === 'auth/popup-closed-by-user') {
        // Ignore user cancellation
        return;
      }
      console.error("Failed to sign in", error);
      if (error.code === 'auth/unauthorized-domain') {
        setAuthError("This domain is not authorized for OAuth. Please add it in the Firebase Console.");
      } else {
        setAuthError(error.message || "Failed to sign in. Please try again.");
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Failed to sign out", error);
    }
  };

  return (
    <nav className="relative z-50 flex flex-row justify-between items-center px-6 md:px-8 py-6 max-w-7xl mx-auto w-full">
      {authError && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded-lg text-sm flex items-center gap-2 shadow-lg backdrop-blur-md z-50">
          <span>{authError}</span>
          <button onClick={() => setAuthError(null)} className="p-1 hover:bg-red-500/20 rounded-md transition-colors cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      <div className="flex items-center gap-2 md:gap-4 text-[var(--fg)]">
        <Link to="/" aria-label="Home" className="flex items-center gap-4 group cursor-pointer">
          <Logo className="w-10 h-10 stroke-[var(--fg)] animate-[spin_10s_linear_infinite] shrink-0" />
          <div className="hidden md:block overflow-hidden whitespace-nowrap">
            <span className="font-serif tracking-[0.12em] uppercase text-sm">
              <GeometricText text="THE BLOCKCHAIN SOCIETY ALCHE" />
            </span>
          </div>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {!isCoursePage && (
          <>
            {/* Homepage / Exploration Navbar */}
            <div className="relative group py-2">
              <button className="text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors flex items-center gap-1 cursor-pointer">
                Programs <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-[var(--border)] bg-black/80 backdrop-blur-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
                <Link to="/blocknauts" className="px-4 py-3 text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] hover:bg-white/10 transition-colors cursor-pointer">Blocknauts</Link>
              </div>
            </div>

            <a href="#" className="text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors cursor-pointer">About</a>

            <div className="relative group py-2">
              <button className="text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors flex items-center gap-1 cursor-pointer">
                Learn <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-[var(--border)] bg-black/80 backdrop-blur-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
                <a href="#" className="px-4 py-3 text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] hover:bg-white/10 transition-colors cursor-pointer">Blog</a>
                <a href="#" className="px-4 py-3 text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] hover:bg-white/10 transition-colors cursor-pointer">Games</a>
                <a href="#" className="px-4 py-3 text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] hover:bg-white/10 transition-colors cursor-pointer">Glossary</a>
                <Link to="/learn" className="px-4 py-3 text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] hover:bg-white/10 transition-colors cursor-pointer">Academy</Link>
              </div>
            </div>

            {location.pathname === '/learn' && (
              <Link to="/learn/leaderboard" className="text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors cursor-pointer">Leaderboard</Link>
            )}
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <div className="relative group">
            {/* Profile Dropdown */}
            <button className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/20 border border-[var(--border)] flex items-center justify-center text-[var(--fg)] hover:bg-black/40 transition-colors cursor-pointer overflow-hidden">
              {profile?.photoURL ? (
                <img src={profile.photoURL} alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                <User className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 rounded-xl border border-[var(--border)] bg-black/80 backdrop-blur-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
              <div className="px-4 py-3 border-b border-[var(--border)]">
                <p className="text-sm font-medium text-white truncate">{profile?.displayName || 'My Profile'}</p>
                <p className="text-xs text-zinc-400 mt-1">
                  {user?.email?.toLowerCase() === 'haryormeekun99@gmail.com' ? 0 : (profile?.xp || 0)} XP
                </p>
              </div>
              <Link to="/learn" className="px-4 py-3 text-sm text-[var(--muted-fg)] hover:text-white hover:bg-white/10 transition-colors cursor-pointer">My Dashboard</Link>
              <Link to="/profile" className="px-4 py-3 text-sm text-[var(--muted-fg)] hover:text-white hover:bg-white/10 transition-colors cursor-pointer">My Profile</Link>
              <Link to="/settings" className="px-4 py-3 text-sm text-[var(--muted-fg)] hover:text-white hover:bg-white/10 transition-colors cursor-pointer">Settings</Link>
              <button onClick={handleSignOut} className="px-4 py-3 text-sm text-left text-red-400 hover:text-red-300 hover:bg-white/10 transition-colors cursor-pointer">Sign Out</button>
            </div>
          </div>
        ) : (
          <>
            <button onClick={handleSignIn} className="hidden md:block text-sm font-medium text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors cursor-pointer">
              Sign In
            </button>
            <button onClick={handleSignIn} className="liquid-glass rounded-full px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm text-[var(--fg)] hover:scale-[1.03] transition-all cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 hover:text-white">
              Join
            </button>
          </>
        )}
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-[var(--fg)] cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8 animate-in fade-in duration-300">
          <button 
            className="absolute top-8 right-8 p-2 text-[var(--fg)] cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          {!isCoursePage ? (
            <>
              <div className="flex flex-col items-center gap-4">
                <span className="text-sm uppercase tracking-widest text-[var(--muted-fg)]">Programs</span>
                <Link to="/blocknauts" className="text-2xl font-serif text-[var(--fg)] cursor-pointer" onClick={() => setIsMenuOpen(false)}>Blocknauts</Link>
              </div>
              
              <a href="#" className="text-2xl font-serif text-[var(--fg)] cursor-pointer" onClick={() => setIsMenuOpen(false)}>About</a>

              <div className="flex flex-col items-center gap-4">
                <span className="text-sm uppercase tracking-widest text-[var(--muted-fg)]">Learn</span>
                <a href="#" className="text-2xl font-serif text-[var(--fg)] cursor-pointer" onClick={() => setIsMenuOpen(false)}>Blog</a>
                <a href="#" className="text-2xl font-serif text-[var(--fg)] cursor-pointer" onClick={() => setIsMenuOpen(false)}>Games</a>
                <a href="#" className="text-2xl font-serif text-[var(--fg)] cursor-pointer" onClick={() => setIsMenuOpen(false)}>Glossary</a>
                <Link to="/learn" className="text-2xl font-serif text-[var(--fg)] cursor-pointer" onClick={() => setIsMenuOpen(false)}>Academy</Link>
                {location.pathname === '/learn' && (
                  <Link to="/learn/leaderboard" className="text-2xl font-serif text-[var(--fg)] cursor-pointer" onClick={() => setIsMenuOpen(false)}>Leaderboard</Link>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/learn" className="text-2xl font-serif text-[var(--fg)] cursor-pointer" onClick={() => setIsMenuOpen(false)}>Back to Academy</Link>
            </>
          )}
          
          {user ? (
            <div className="flex flex-col items-center gap-4 mt-4 pt-8 border-t border-[var(--border)] w-full max-w-[200px]">
              <Link to="/learn" className="text-xl font-serif text-[var(--fg)] cursor-pointer" onClick={() => setIsMenuOpen(false)}>My Dashboard</Link>
              <Link to="/profile" className="text-xl font-serif text-[var(--fg)] cursor-pointer" onClick={() => setIsMenuOpen(false)}>My Profile</Link>
              <Link to="/settings" className="text-xl font-serif text-[var(--fg)] cursor-pointer" onClick={() => setIsMenuOpen(false)}>Settings</Link>
              <button onClick={() => { handleSignOut(); setIsMenuOpen(false); }} className="text-xl font-serif text-red-400 cursor-pointer">Sign Out</button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 mt-4 pt-8 border-t border-[var(--border)] w-full max-w-[200px]">
              <button onClick={() => { handleSignIn(); setIsMenuOpen(false); }} className="text-xl font-serif text-[var(--fg)] cursor-pointer">Sign In</button>
              <button onClick={() => { handleSignIn(); setIsMenuOpen(false); }} className="liquid-glass rounded-full px-10 py-4 text-lg text-[var(--fg)] mt-2 cursor-pointer">
                Join
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
