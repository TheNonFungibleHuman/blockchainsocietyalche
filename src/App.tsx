import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Moon, Sun, ArrowRight, CheckCircle2, Code2, Cpu, Globe, Layers, Shield, Zap, Rocket } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen selection:bg-[var(--accent)] selection:text-[var(--accent-fg)] overflow-hidden">
      <Navbar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      
      <main>
        <HeroSection />
        <RevealSection />
        <JourneySection />
        <ProofSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

function Navbar({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 px-[5vw] py-6 flex justify-between items-center mix-blend-difference text-white"
    >
      <a href="#" aria-label="Home" className="flex items-center gap-3 group">
        <Logo className="w-10 h-10 text-[var(--accent)] group-hover:rotate-90 transition-transform duration-1000 ease-in-out" />
      </a>
      
      <button 
        onClick={toggleDark}
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </motion.nav>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex items-center px-[5vw] pt-24 pb-12 overflow-hidden">
      {/* Background abstract elements */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-1/4 right-[10vw] w-[40vw] h-[40vw] rounded-full border border-[var(--border)] opacity-20 pointer-events-none"
      />
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-1/4 left-[5vw] w-[20vw] h-[20vw] rounded-full border border-[var(--border)] opacity-20 pointer-events-none"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end w-full">
        <div className="lg:col-span-8">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] leading-[1.1] tracking-tighter text-balance"
          >
            The internet is being rebuilt. <br />
            <span className="text-[var(--muted)] italic">Are you going to watch,</span> <br />
            or are you going to build?
          </motion.h1>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8 lg:pb-[2vw]">
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
            className="font-sans text-lg md:text-xl text-[var(--muted)] leading-relaxed text-balance"
          >
            You've heard the buzzwords. Blockchain. Crypto. Web3. Smart Contracts. It sounds like a secret club hidden behind a wall of jargon. <strong className="text-[var(--fg)] font-medium">It isn't.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.5 }}
            className="flex flex-col items-start gap-4"
          >
            <motion.a 
              href="https://forms.gle/hFLnk9EQAiepCSzS7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-4 bg-[var(--fg)] text-[var(--bg)] px-8 py-5 rounded-none overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-[var(--accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              <span className="relative font-mono text-sm uppercase tracking-widest font-semibold group-hover:text-[var(--accent-fg)] transition-colors duration-500">
                Learn More
              </span>
              <ArrowRight className="relative w-4 h-4 group-hover:text-[var(--accent-fg)] group-hover:translate-x-1 transition-all duration-500" />
            </motion.a>
            
            <div className="flex flex-col gap-3 mt-2">
              <div className="font-mono text-xs text-[var(--muted)] flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                100% Free. Zero experience required. 8 Weeks to Career-Ready.
              </div>
              <div className="font-mono text-xs text-[var(--fg)] flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full border border-[var(--fg)]" />
                Applications close April 30th, 2026 — Program starts May 3rd, 2026.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RevealSection() {
  return (
    <section className="relative px-[5vw] py-32 md:py-48 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Welcome to Blocknauts 1.0.
          </h2>
          <div className="flex items-center gap-4 font-mono text-sm text-[var(--muted)] uppercase tracking-widest">
            <Logo className="w-6 h-6 text-[var(--accent)] shrink-0" />
            <p>Brought to you by The Blockchain Society ALCHE.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
          >
            <p className="font-sans text-xl md:text-2xl leading-relaxed text-[var(--muted)]">
              The traditional web is broken. Trust is centralized, data is exploited, and the financial system leaves billions behind, unincluded. <span className="text-[var(--fg)]">The Blockchain is built to fix these ...</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="font-sans text-lg leading-relaxed text-[var(--muted)]">
              ... But right now, the barrier to entry feels high, so we are changing that. We built Blocknauts 1.0 for the complete beginner.
            </p>
            <div className="glass-panel p-6 border-l-4 border-l-[var(--accent)]">
              <p className="font-mono text-sm leading-relaxed">
                No trading advice. No get-rich-quick schemes. Just a pure, 8-week live bootcamp designed to take you from "I don't get what consensus mechanisms are" to pitching your own blockchain product.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const weeks = [
  {
    num: "01",
    title: "The Foundation",
    subtitle: "What is blockchain and why does it exist?",
    desc: "Before you can understand blockchain, you need to understand the problem it was built to solve; trust, centralization, and the broken internet of value.",
    icon: Globe
  },
  {
    num: "02",
    title: "How Blockchain Actually Works",
    subtitle: "Transactions, wallets, consensus, and mechanics.",
    desc: "Now that you understand the structure, you understand the machine. Learn how money actually moves, who holds the keys, and how blockchains reach agreement.",
    icon: Cpu
  },
  {
    num: "03",
    title: "The Programmable Blockchain",
    subtitle: "Ethereum's great addition.",
    desc: "Bitcoin proved decentralized money works. Ethereum asked: What if the blockchain could run any program? This is where blockchain becomes a platform.",
    icon: Code2
  },
  {
    num: "04",
    title: "DeFi, DAOs & The New Finance",
    subtitle: "What it does with all that programmability.",
    desc: "Where theory becomes a working system. DeFi is finance rebuilt on smart contracts. DAOs are organizations rebuilt on governance tokens.",
    icon: Layers
  },
  {
    num: "05",
    title: "Identity, Social, AI & Web3",
    subtitle: "Who are you on the blockchain?",
    desc: "Web3 isn't just finance. Zoom out to see the full ecosystem; decentralized identity, social media, AI, and the real-world infrastructure of the Internet of Value. You will understand Web3 as a complete paradigm shift.",
    icon: Shield
  },
  {
    num: "06",
    title: "Careers & Your Path Forward",
    subtitle: "You know the world. Now find your place in it.",
    desc: "Step back and ask: Where do I go from here? Connect everything you've learned to the real world from industries being transformed, careers available, and your own specialization path.",
    icon: Zap
  },
  {
    num: "07-08",
    title: "Portfolio Project",
    subtitle: "Design, document, and pitch.",
    desc: "You graduate with a Blockchain Product Proof of Concept (PoC), which is a designed, documented, and pitched concept that demonstrates your blockchain thinking.",
    icon: Rocket
  }
];

function JourneySection() {
  return (
    <section className="px-[5vw] py-32 md:py-48 bg-[var(--fg)] text-[var(--bg)]">
      <div className="mb-24 md:mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="font-serif text-5xl md:text-7xl tracking-tighter"
        >
          Your 8-Week <br />
          <span className="text-[var(--accent)] italic">Launchpad.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24">
        {weeks.map((week, i) => (
          <motion.div
            key={week.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: i * 0.1 }}
            className="group relative flex flex-col"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--bg)]/20">
              <span className="font-mono text-2xl text-[var(--accent)]">{week.num}</span>
              <week.icon className="w-6 h-6 text-[var(--bg)]/40 group-hover:text-[var(--accent)] transition-colors duration-500" />
            </div>
            
            <h3 className="font-sans text-2xl font-medium mb-2">{week.title}</h3>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--bg)]/60 mb-6">
              {week.subtitle}
            </p>
            <p className="font-sans text-[var(--bg)]/80 leading-relaxed mt-auto">
              {week.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProofSection() {
  const deliverables = [
    {
      title: "A Portfolio Project",
      desc: "A real Web3 product concept designed and pitched by you."
    },
    {
      title: "On-Chain Verification",
      desc: "A digital certificate minted on the blockchain proving you were here and you did the work."
    },
    {
      title: "A Career Roadmap",
      desc: "Clear next steps for entering the Web3 workforce."
    },
    {
      title: "The Network",
      desc: "A community of fellow explorers and builders."
    }
  ];

  return (
    <section className="px-[5vw] py-32 md:py-48">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="font-serif text-5xl md:text-6xl tracking-tighter mb-8"
          >
            Don't just learn. <br />
            <span className="italic text-[var(--muted)]">Leave with proof.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
            className="font-sans text-lg text-[var(--muted)] leading-relaxed max-w-md"
          >
            By Week 8, you are presenting a designed, documented Proof of Concept (PoC) in DeFi, NFTs, Social Impact, or Real World Assets.
          </motion.p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8">
          <div className="font-mono text-sm uppercase tracking-widest text-[var(--muted)] mb-4">
            What you walk away with:
          </div>
          
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: i * 0.1 }}
              whileHover={{ x: -10 }}
              className="glass-panel p-8 md:p-10 flex flex-col sm:flex-row gap-6 sm:items-start group transition-all duration-500 hover:border-[var(--accent)]"
            >
              <div className="mt-1 shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-500" />
              </div>
              <div>
                <h4 className="font-sans text-xl font-medium mb-3">{item.title}</h4>
                <p className="font-sans text-[var(--muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative px-[5vw] py-32 md:py-48 overflow-hidden flex flex-col items-center justify-center text-center border-t border-[var(--border)]">
      {/* Background radial gradient for subtle depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--border)_0%,transparent_70%)] opacity-20 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 text-balance">
          The next era of the internet <br />
          <span className="italic text-[var(--muted)]">isn't waiting.</span>
        </h2>
        
        <div className="flex flex-col items-center gap-6 mb-16">
          <p className="font-mono text-sm md:text-base uppercase tracking-widest text-[var(--muted)]">
            8 Weeks. Live sessions. Zero cost. No barriers.
          </p>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 text-[var(--fg)] font-mono text-xs uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
            </span>
            Applications close April 30th • Starts May 3rd
          </div>
        </div>

        <motion.a 
          href="https://forms.gle/hFLnk9EQAiepCSzS7"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center justify-center bg-[var(--fg)] text-[var(--bg)] px-10 py-6 rounded-none overflow-hidden w-full sm:w-auto"
        >
          <span className="absolute inset-0 w-full h-full bg-[var(--accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          <span className="relative font-mono text-sm md:text-base uppercase tracking-widest font-semibold group-hover:text-[var(--accent-fg)] transition-colors duration-500">
            Claim Your Spot in Blocknauts 1.0
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-[5vw] py-12 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-3 font-mono text-xs text-[var(--muted)] uppercase tracking-widest">
        <Logo className="w-5 h-5 text-[var(--accent)] shrink-0" />
        <span>© {new Date().getFullYear()} The Blockchain Society ALCHE.</span>
      </div>
      <div className="flex gap-6 font-mono text-xs text-[var(--muted)] uppercase tracking-widest">
        <a href="#" className="hover:text-[var(--fg)] transition-colors">Twitter</a>
        <a href="#" className="hover:text-[var(--fg)] transition-colors">Discord</a>
        <a href="#" className="hover:text-[var(--fg)] transition-colors">Terms</a>
      </div>
    </footer>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2">
      {[...Array(12)].map((_, i) => {
        const angle = (i * Math.PI) / 6;
        const cx = 50 + Math.cos(angle) * 16;
        const cy = 50 + Math.sin(angle) * 16;
        return <circle key={i} cx={cx} cy={cy} r={28} />
      })}
    </svg>
  );
}

