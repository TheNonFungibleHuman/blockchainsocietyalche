import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Terminal, 
  BookOpen, 
  Coins, 
  Users, 
  ShieldAlert, 
  FileText, 
  TrendingUp, 
  Briefcase, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  ChevronRight,
  UserCheck
} from 'lucide-react';

interface Question {
  id: number;
  text: string;
  category: string;
  options: {
    label: string;
    score: Record<string, number>;
    icon: any;
  }[];
}

export default function CareerPathFinder() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    tech: 0,
    econ: 0,
    ops: 0,
    edu: 0
  });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      text: "What is your primary interest when exploring blockchain?",
      category: "interests",
      options: [
        {
          label: "Coding, smart contracts, and building applications",
          score: { tech: 3, econ: 1 },
          icon: Code
        },
        {
          label: "Designing token economics, incentives, and modeling",
          score: { econ: 3, tech: 1 },
          icon: Coins
        },
        {
          label: "Coordinating projects, marketing, operations, or product-management",
          score: { ops: 3, edu: 1 },
          icon: TrendingUp
        },
        {
          label: "Explaining tech, writing documentation, and onboarding communities",
          score: { edu: 3, ops: 1 },
          icon: BookOpen
        }
      ]
    },
    {
      id: 2,
      text: "What preferred working environment or task sounds most exciting?",
      category: "tasks",
      options: [
        {
          label: "Auditing protocols line-by-line and securing code templates",
          score: { tech: 3 },
          icon: ShieldAlert
        },
        {
          label: "Creating spreadsheet simulations of fee flows, inflation, and burns",
          score: { econ: 3 },
          icon: Coins
        },
        {
          label: "Conducting user research, prioritizing roadmaps, and cross-team execution",
          score: { ops: 3 },
          icon: UserCheck
        },
        {
          label: "Writing in-depth tutorials, hosting development workshops, and teaching",
          score: { edu: 3 },
          icon: FileText
        }
      ]
    },
    {
      id: 3,
      text: "What is your typical educational background or professional skillset?",
      category: "background",
      options: [
        {
          label: "Software Engineering, computer science, or self-taught web developer",
          score: { tech: 3 },
          icon: Terminal
        },
        {
          label: "Finance, quantitative economics, corporate auditing, or pure mathematics",
          score: { econ: 3 },
          icon: TrendingUp
        },
        {
          label: "Business management, marketing, operations, legal counseling, or project management",
          score: { ops: 3 },
          icon: Briefcase
        },
        {
          label: "Communications, journalism, technical writing, teaching, or content creation",
          score: { edu: 3 },
          icon: BookOpen
        }
      ]
    },
    {
      id: 4,
      text: "What is your ideal workspace and career risk appetite?",
      category: "risk",
      options: [
        {
          label: "Working for established L1/L2 foundations or VC-funded crypto companies",
          score: { tech: 2, ops: 2 },
          icon: Briefcase
        },
        {
          label: "Contributing to multiple decentralized DAOs on-chain through bounties",
          score: { tech: 1, ops: 1, edu: 2, econ: 2 },
          icon: Users
        }
      ]
    }
  ];

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const currentOpt = questions[currentQuestion].options[selectedOption];
    setScores(prev => {
      const copy = { ...prev };
      Object.entries(currentOpt.score).forEach(([cat, val]) => {
        copy[cat] = (copy[cat] || 0) + val;
      });
      return copy;
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setScores({ tech: 0, econ: 0, ops: 0, edu: 0 });
    setSelectedOption(null);
    setShowResult(false);
  };

  const getWinner = () => {
    let maxScore = -1;
    let winner = 'tech';
    Object.entries(scores).forEach(([cat, s]) => {
      if (s > maxScore) {
        maxScore = s;
        winner = cat;
      }
    });

    const clusters: Record<string, {
      title: string;
      match: string;
      examples: string;
      skills: string[];
      actions: string[];
      color: string;
      gradient: string;
      icon: any;
    }> = {
      tech: {
        title: "Technical Builder & Security Cluster",
        match: "Smart Contract Developer / Auditor / Protocol Researcher",
        examples: "Solidity Developer, Spearbit Auditor, L1 Protocol Researcher, ZK-Proof Engineer",
        skills: [
          "Deep understanding of EVM, Solidity, or Rust for smart contracts",
          "Adversarial thinking regarding security (reentrancy, storage collisions)",
          "Proficiency in development frameworks (Foundry, Hardhat)",
          "Appreciation of account abstraction and chain mechanics"
        ],
        actions: [
          "Complete the high-yield Speedrun Ethereum interactive modules",
          "Participate in a competitive code review on Code4rena or Sherlock platforms",
          "Build, document, and deploy a custom token vault to an on-chain testnet"
        ],
        color: "zinc",
        gradient: "from-blue-500 to-indigo-600",
        icon: Code
      },
      econ: {
        title: "Quantitative Economist Cluster",
        match: "Tokenomics Designer / Quantitative Analyst",
        examples: "Tokenomics Consultant, Economic Risk Modeling Researcher, DeFi Arbitrage Strategist",
        skills: [
          "Game theory & decentralized incentive design matrix",
          "Quantitative financial modeling, Excel macros, or Python simulations",
          "Practical understanding of inflation, sink-and-faucet token loops",
          "Designing liquid rewards and staking structures"
        ],
        actions: [
          "Model a simulated custom reward faucet spreadsheet for a hypothetical game DAO",
          "Draft a post on Mirror reviewing three historical token emission failures",
          "Deep dive into the veToken economics of Curve and the stablecoin design of MakerDAO"
        ],
        color: "emerald",
        gradient: "from-emerald-500 to-teal-600",
        icon: Coins
      },
      ops: {
        title: "Web3 Operator Cluster",
        match: "Product Manager / Growth Lead / Web3 Lawyer",
        examples: "DeFi Operations Lead, On-ramp/Off-ramp Specialist, Marketing Analyst",
        skills: [
          "Frictionless user onboarding empathy and UX optimization",
          "Direct knowledge of on-chain mechanics (sequencing times, gas constraints)",
          "Navigating the shifting regulatory patchwork (e.g. MiCA, regional sandboxes)",
          "Aligning developer actions with user and market feedback"
        ],
        actions: [
          "Conduct a UX friction audit on an L2 dApp using friends as mystery testers",
          "Join an active DAO and participate as an operational scribe or governance coordinator",
          "Write a spec outlining the ideal responsive dashboard layout for a cross-chain wallet"
        ],
        color: "amber",
        gradient: "from-amber-500 to-orange-600",
        icon: TrendingUp
      },
      edu: {
        title: "Educator & Community Steward Cluster",
        match: "Technical Writer / Community Manager / DAO Contributor",
        examples: "Developer Relations (DevRel), Discord Steward, Educational Researcher",
        skills: [
          "Explaining complex technical architecture in intuitive terms",
          "Emotional intelligence, conflict resolution, audience engagement",
          "Documentation layout, developer tool documentation, and grant-writing",
          "Coordinating decentralized governance discussions in forums"
        ],
        actions: [
          "Write an absolute beginner's explainer on zero-knowledge rollups and publish to Warpcast",
          "Draft a technical documentation template for an open-source smart contract repository",
          "Set up automated Discord integration bots for a study group space"
        ],
        color: "purple",
        gradient: "from-purple-500 to-pink-600",
        icon: BookOpen
      }
    };

    return clusters[winner] || clusters.tech;
  };

  const activeWinner = getWinner();

  return (
    <div id="career-path-finder" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden my-6">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="text-center py-12 space-y-6"
          >
            <div className="mx-auto w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-zinc-100 tracking-tight">
              Web3 Career Path Finder
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto leading-relaxed">
              Answer a few quick questions about your natural strengths, preferred work tasks, and background to uncover which role cluster aligns with your journey in the decentralized ecosystem.
            </p>
            <button
              onClick={() => setStarted(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Career Assessment
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="pt-6 text-xs text-zinc-500 flex items-center justify-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-zinc-600 animate-pulse" />
              Produces a customized cluster with actionable first steps.
            </div>
          </motion.div>
        ) : !showResult ? (
          <motion.div 
            key="quiz-stepper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Header & Progress Indicator */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-zinc-500">
                <span className="font-mono text-zinc-400">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="font-medium text-blue-400">{Math.round(((currentQuestion) / questions.length) * 100)}% complete</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-500 h-full transition-all duration-300" 
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-xl md:text-2xl font-medium text-zinc-100 font-serif leading-snug">
              {questions[currentQuestion].text}
            </h3>

            {/* Answer Cards */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {questions[currentQuestion].options.map((opt, idx) => {
                const Icon = opt.icon;
                const isSelected = selectedOption === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    className={`flex items-start text-left gap-4 p-4 rounded-xl border transition-all duration-200 group ${
                      isSelected 
                        ? 'bg-blue-600/15 border-blue-500 text-zinc-100 shadow-md shadow-blue-500/5' 
                        : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:bg-zinc-800/30'
                    }`}
                  >
                    <div className={`mt-0.5 p-2 rounded-lg transition-colors ${
                      isSelected ? 'bg-blue-500 text-white' : 'bg-zinc-800 text-zinc-400 group-hover:text-zinc-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 py-1 font-medium text-sm md:text-base leading-relaxed">
                      {opt.label}
                    </div>
                    <div className="self-center pr-1 flex items-center justify-center">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                        isSelected ? 'border-blue-500 bg-blue-500 text-white' : 'border-zinc-700'
                      }`}>
                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-white animate-scale-in" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer buttons */}
            <div className="flex justify-end pt-4">
              <button
                disabled={selectedOption === null}
                onClick={handleNext}
                className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-medium text-sm shadow transition-all duration-200 ${
                  selectedOption !== null 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white hover:translate-x-0.5' 
                    : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                }`}
              >
                {currentQuestion === questions.length - 1 ? "Calculate Results" : "Next Question"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="results"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="space-y-6 py-2"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <div className={`p-2.5 rounded-xl bg-gradient-to-r ${activeWinner.gradient} text-white shadow-md`}>
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase font-mono tracking-widest font-semibold">Your Match Profile</div>
                  <h3 className="text-lg md:text-xl font-bold text-zinc-100 font-serif">
                    {activeWinner.title}
                  </h3>
                </div>
              </div>
              <button 
                onClick={handleReset}
                className="p-2 text-zinc-500 hover:text-zinc-300 bg-zinc-800/20 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all"
                title="Restart Assessment"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Main Result Card */}
            <div className="bg-zinc-800/30 rounded-xl p-5 border border-zinc-800 space-y-4">
              <div>
                <span className="text-xs text-zinc-400 font-mono font-semibold block mb-0.5">Primary Archetypes:</span>
                <span className="text-base md:text-lg font-bold text-zinc-100 block">
                  {activeWinner.match}
                </span>
                <span className="text-xs text-zinc-500 block mt-1">
                  <strong>Example Roles:</strong> {activeWinner.examples}
                </span>
              </div>
            </div>

            {/* Double grid containing lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Core Skill Priorities */}
              <div className="bg-zinc-950/20 border border-zinc-800/50 rounded-xl p-5 space-y-3">
                <h4 className="text-xs font-semibold uppercase text-zinc-400 font-mono tracking-wider flex items-center gap-1.5 border-b border-zinc-800 pb-2">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  Skill Priorities
                </h4>
                <ul className="space-y-2.5">
                  {activeWinner.skills.map((skill, index) => (
                    <li key={index} className="flex gap-2.5 text-zinc-300 text-sm leading-relaxed">
                      <span className="text-zinc-600 font-mono font-bold mt-0.5 text-xs">{index + 1}.</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actionable Next Steps */}
              <div className="bg-zinc-950/20 border border-zinc-800/50 rounded-xl p-5 space-y-3">
                <h4 className="text-xs font-semibold uppercase text-zinc-400 font-mono tracking-wider flex items-center gap-1.5 border-b border-zinc-800 pb-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Practical First Actions
                </h4>
                <ul className="space-y-2.5">
                  {activeWinner.actions.map((action, index) => (
                    <li key={index} className="flex gap-2 text-zinc-300 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Retake and back to course action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                Build on-chain proof-of-work to kickstart your Web3 footprint!
              </span>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 px-4 py-2 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-zinc-300 transition-all cursor-pointer font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retake Assessment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
