import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ShieldWarning, Cpu, Coins, Gavel, CheckCircle, XCircle, ChartBar, Info, ArrowRight, User, Users, Database } from '@phosphor-icons/react';

type Mechanism = 'pow' | 'pos';
type Strategy = 'honest' | 'fraudulent' | null;

export default function ConsensusSimulator() {
  const [mechanism, setMechanism] = useState<Mechanism>('pow');
  const [strategy, setStrategy] = useState<Strategy>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationProgress, setSimulationProgress] = useState(0);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    details: string[];
    stats: {
      cost: string;
      probability: string;
      outcome: string;
    };
  } | null>(null);

  const reset = () => {
    setStrategy(null);
    setIsSimulating(false);
    setSimulationProgress(0);
    setResult(null);
  };

  const runSimulation = () => {
    if (!strategy) return;
    setIsSimulating(true);
    setSimulationProgress(0);
  };

  useEffect(() => {
    if (isSimulating && simulationProgress < 100) {
      const timer = setTimeout(() => {
        setSimulationProgress(prev => Math.min(prev + 2, 100));
      }, 30);
      return () => clearTimeout(timer);
    } else if (isSimulating && simulationProgress === 100) {
      setIsSimulating(false);
      
      // Calculate result
      if (mechanism === 'pow') {
        if (strategy === 'honest') {
          setResult({
            success: true,
            message: "Block Accepted!",
            details: [
              "You burned electricity to solve the nonce puzzle.",
              "Other nodes verified your proof in milliseconds.",
              "You earned 3.125 BTC + transaction fees."
            ],
            stats: {
              cost: "$$$ (Electricity)",
              probability: "High (51% attack threshold)",
              outcome: "Net Profit"
            }
          });
        } else {
          setResult({
            success: false,
            message: "Submission Rejected!",
            details: [
              "You attempted to double-spend, but your block violated history.",
              "The honest majority ignored your block.",
              "You wasted thousands of dollars in electricity for nothing."
            ],
            stats: {
              cost: "$$$ (Wasted Energy)",
              probability: "0.0001% (unless you have 51% power)",
              outcome: "Total Loss"
            }
          });
        }
      } else {
        // PoS
        if (strategy === 'honest') {
          setResult({
            success: true,
            message: "Block Finalized!",
            details: [
              "You were randomly selected as the slot proposer.",
              "Attestations from 66%+ of stake confirmed your block.",
              "You earned staking rewards (APY)."
            ],
            stats: {
              cost: "Low (Minimal electricity)",
              probability: "Guaranteed (by protocol rotation)",
              outcome: "Steady Gain"
            }
          });
        } else {
          setResult({
            success: false,
            message: "SLASHED!",
            details: [
              "You proposed conflicting blocks in the same slot.",
              "The network detected malicious behaviour.",
              "Your 32 ETH stake was partially or fully destroyed (Slashing)."
            ],
            stats: {
              cost: "$$$$ (Collateral Loss)",
              probability: "Impossible to hide",
              outcome: "Financial Ruin"
            }
          });
        }
      }
    }
  }, [isSimulating, simulationProgress, mechanism, strategy]);

  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-xl font-sans">
      {/* Header */}
      <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Gavel className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="font-serif text-xl">Consensus Simulator</h3>
        </div>
        <p className="text-sm text-zinc-500">Test how different network rules respond to your behaviour.</p>
      </div>

      <div className="p-6 md:p-8">
        {!isSimulating && !result ? (
          <div className="space-y-8">
            {/* Step 1: Select Mechanism */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 block">1. Choose Mechanism</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setMechanism('pow')}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${mechanism === 'pow' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' : 'border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700'}`}
                >
                  <div className={`p-3 rounded-xl ${mechanism === 'pow' ? 'bg-orange-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'}`}>
                    <Cpu size={24} weight="bold" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold">Proof of Work</span>
                    <span className="text-xs text-zinc-500">Security via energy (Bitcoin)</span>
                  </div>
                </button>

                <button
                  onClick={() => setMechanism('pos')}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${mechanism === 'pos' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : 'border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700'}`}
                >
                  <div className={`p-3 rounded-xl ${mechanism === 'pos' ? 'bg-emerald-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'}`}>
                    <Coins size={24} weight="bold" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold">Proof of Stake</span>
                    <span className="text-xs text-zinc-500">Security via capital (Ethereum)</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Select Strategy */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 block">2. Select Your Strategy</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setStrategy('honest')}
                  className={`flex flex-col gap-2 p-6 rounded-2xl border-2 transition-all text-left cursor-pointer ${strategy === 'honest' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg' : 'border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700'}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck size={20} className={strategy === 'honest' ? 'text-blue-500' : 'text-zinc-400'} weight="fill" />
                    <span className="font-bold">Honest Node</span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">Follow the protocol rules, validate transactions correctly, and aim for legitimate rewards.</p>
                </button>

                <button
                  onClick={() => setStrategy('fraudulent')}
                  className={`flex flex-col gap-2 p-6 rounded-2xl border-2 transition-all text-left cursor-pointer ${strategy === 'fraudulent' ? 'border-red-500 bg-red-50 dark:bg-red-900/20 shadow-lg' : 'border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700'}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldWarning size={20} className={strategy === 'fraudulent' ? 'text-red-500' : 'text-zinc-400'} weight="fill" />
                    <span className="font-bold">Malicious Actor</span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">Attempt a double-spend attack or propose conflicting blocks to cheat the system.</p>
                </button>
              </div>
            </div>

            <button
              onClick={runSimulation}
              disabled={!strategy}
              className="w-full py-4 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-black font-bold disabled:opacity-30 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer disabled:cursor-not-allowed"
            >
              Exectute Transaction <ArrowRight weight="bold" />
            </button>
          </div>
        ) : isSimulating ? (
          <div className="py-12 space-y-8">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-zinc-100 dark:border-zinc-800 flex items-center justify-center transition-all duration-300">
                  <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin" />
                  <span className="text-xl font-bold font-mono">{Math.floor(simulationProgress)}%</span>
                </div>
              </div>
            </div>

            <div className="max-w-xs mx-auto space-y-4">
              <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${simulationProgress}%` }}
                />
              </div>
              <p className="text-center text-sm font-medium animate-pulse text-zinc-600 dark:text-zinc-400">
                {mechanism === 'pow' 
                  ? "Miners racing to solve nonce..." 
                  : "Randomly selecting validator slot..."}
              </p>
            </div>

            {/* Simulation Visualizer */}
            <div className="grid grid-cols-5 gap-4 max-w-sm mx-auto">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: simulationProgress > (i * 20) ? 1.1 : 1,
                    opacity: simulationProgress > (i * 20) ? 1 : 0.3,
                    backgroundColor: simulationProgress > (i * 20) ? (strategy === 'honest' ? '#10b981' : '#ef4444') : '#d1d5db'
                  }}
                  className="h-10 rounded-lg flex items-center justify-center text-white"
                >
                  <Database size={16} />
                </motion.div>
              ))}
            </div>
          </div>
        ) : result && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Outcome Card */}
            <div className={`p-8 rounded-3xl border ${result.success ? 'bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800/50' : 'bg-red-50/50 dark:bg-red-900/10 border-red-200 dark:border-red-800/50'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full ${result.success ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-red-500 text-white shadow-lg shadow-red-500/30'}`}>
                  {result.success ? <CheckCircle size={32} weight="fill" /> : <XCircle size={32} weight="fill" />}
                </div>
                <div>
                  <h4 className={`text-2xl font-bold ${result.success ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400'}`}>
                    {result.message}
                  </h4>
                  <p className="text-sm opacity-70">Simulation Result for {mechanism.toUpperCase()} Simulation</p>
                </div>
              </div>

              <div className="space-y-4">
                {result.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${result.success ? 'bg-emerald-500' : 'bg-red-500'}`} />
                    <p className="text-sm dark:text-zinc-300">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">Simulated Cost</span>
                <span className="font-bold text-zinc-900 dark:text-white">{result.stats.cost}</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">Success Probability</span>
                <span className="font-bold text-zinc-900 dark:text-white">{result.stats.probability}</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">Final Outcome</span>
                <span className="font-bold text-zinc-900 dark:text-white">{result.stats.outcome}</span>
              </div>
            </div>

            <button
              onClick={reset}
              className="w-full py-4 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              Reset Simulation
            </button>
          </motion.div>
        )}
      </div>

      {/* Footer Info */}
      <div className="p-6 bg-zinc-50 dark:bg-zinc-800/30 border-t border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
        <Info size={20} className="text-blue-500 shrink-0" />
        <p className="text-xs text-zinc-500 leading-relaxed">
          <strong>Key Takeaway:</strong> {mechanism === 'pow' 
            ? "In Proof of Work, the cost of an attack is the external energy required to redo the work. Dishonest behavior is economically irrational because it costs more to attack than the rewards it would yield."
            : "In Proof of Stake, the cost of an attack is the internal capital (stake) provided as collateral. Slashing mechanisms ensure that any attempt to cheat results in immediate financial loss for the validator."}
        </p>
      </div>
    </div>
  );
}
