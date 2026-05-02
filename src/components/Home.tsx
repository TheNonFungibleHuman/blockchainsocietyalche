import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo, GeometricText } from './Logo';
import Navbar from './Navbar';

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

function Hero() {
  return (
    <main className="flex-1 flex flex-col items-center justify-start text-center px-6 pt-32 md:pt-48 pb-20">
      <h1 className="text-[45px] leading-[49px] -mt-[72px] tracking-tight max-w-6xl font-playfair text-[var(--fg)] animate-fade-rise">
        For Blockchain <span className="italic">Builders, Thinkers, and Tinkerers</span>
      </h1>
      
      <p className="text-[var(--muted-fg)] text-[13px] max-w-2xl mt-6 leading-relaxed animate-fade-rise-delay">
        Cultivating a vibrant, inclusive community of blockchain builders from The African Leadership College Of Higher Education, Pamplemousses, Mauritius, to the world. We empower students and individuals with blockchain education, skills, research, and networks to be able to innovate, create and lead in the blockchain space in Mauritius, across Africa, and beyond.
      </p>
      
      <button className="liquid-glass rounded-full px-8 py-3 text-sm text-[var(--fg)] mt-10 hover:scale-[1.03] transition-transform cursor-pointer animate-fade-rise-delay-2">
        Join the Society
      </button>
    </main>
  );
}
