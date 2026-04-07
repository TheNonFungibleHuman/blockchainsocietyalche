import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[var(--accent)] selection:text-[var(--accent-fg)] overflow-hidden relative font-sans">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://ik.imagekit.io/hanneeeffff/ascii-art.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 flex flex-row justify-between items-center px-6 md:px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2 md:gap-4 text-[var(--fg)]">
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1.5" className="opacity-80 md:w-12 md:h-12">
          <circle cx="50" cy="30" r="20" />
          <circle cx="64.1" cy="35.9" r="20" />
          <circle cx="70" cy="50" r="20" />
          <circle cx="64.1" cy="64.1" r="20" />
          <circle cx="50" cy="70" r="20" />
          <circle cx="35.9" cy="64.1" r="20" />
          <circle cx="30" cy="50" r="20" />
          <circle cx="35.9" cy="35.9" r="20" />
        </svg>
        <div className="hidden md:flex font-serif tracking-[0.12em] uppercase items-baseline leading-[23px] w-[340px] -ml-[11px]">
          <span className="text-lg">T</span><span className="text-xs">HE</span>
          <span className="text-lg ml-2">B</span><span className="text-xs">LOCKCHAIN</span>
          <span className="text-lg ml-2">S</span><span className="text-xs">OCIETY</span>
          <span className="text-lg ml-2">A</span><span className="text-xs">LCHE</span>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors">Research</a>
        
        <div className="relative group py-2">
          <button className="text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors flex items-center gap-1">
            Learn <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-[var(--border)] bg-black/80 backdrop-blur-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
            <Link to="/blocknauts" className="px-4 py-3 text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] hover:bg-white/10 transition-colors">Blocknauts</Link>
            <a href="#" className="px-4 py-3 text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] hover:bg-white/10 transition-colors">Glossary</a>
          </div>
        </div>
        
        <a href="#" className="text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors">About</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="liquid-glass rounded-full px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm text-[var(--fg)] hover:scale-[1.03] transition-transform">
          Join Us
        </button>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-[var(--fg)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8 animate-in fade-in duration-300">
          <button 
            className="absolute top-8 right-8 p-2 text-[var(--fg)]"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <a href="#" className="text-2xl font-serif text-[var(--fg)]" onClick={() => setIsMenuOpen(false)}>Research</a>
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm uppercase tracking-widest text-[var(--muted-fg)]">Learn</span>
            <Link to="/blocknauts" className="text-2xl font-serif text-[var(--fg)]" onClick={() => setIsMenuOpen(false)}>Blocknauts</Link>
            <a href="#" className="text-2xl font-serif text-[var(--fg)]" onClick={() => setIsMenuOpen(false)}>Glossary</a>
          </div>
          <a href="#" className="text-2xl font-serif text-[var(--fg)]" onClick={() => setIsMenuOpen(false)}>About</a>
          
          <button className="liquid-glass rounded-full px-10 py-4 text-lg text-[var(--fg)] mt-4">
            Join Us
          </button>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <main className="flex-1 flex flex-col items-center justify-start text-center px-6 pt-32 md:pt-48 pb-20">
      <h1 className="text-[45px] leading-[49px] -mt-[72px] tracking-tight max-w-6xl font-playfair text-[var(--fg)] animate-fade-rise">
        For Blockchain <span className="italic">Builders, Thinkers, and Tinkerers</span>
      </h1>
      
      <p className="text-[var(--muted-fg)] text-[13px] max-w-2xl mt-6 leading-relaxed animate-fade-rise-delay">
        Cultivating a vibrant, inclusive community of blockchain builders from ALCHE to the world. We equip students and individuals with blockchain education, skills, research, and networks to be able to innovate, create and lead in the blockchain space in Mauritius, across Africa, and beyond.
      </p>
      
      <button className="liquid-glass rounded-full px-8 py-3 text-sm text-[var(--fg)] mt-10 hover:scale-[1.03] transition-transform cursor-pointer animate-fade-rise-delay-2">
        Join the Society
      </button>
    </main>
  );
}
