import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wallet, 
  ArrowsLeftRight, 
  Globe, 
  Clock, 
  CheckCircle, 
  Cpu, 
  Key, 
  Broadcast,
  Database,
  ArrowRight,
  ShieldCheck,
  HardDrive
} from '@phosphor-icons/react';

type Stage = 'idle' | 'creation' | 'broadcast' | 'mempool' | 'validation' | 'inclusion' | 'confirmation' | 'success';

export default function TransactionLifecycleDemo() {
  const [stage, setStage] = useState<Stage>('idle');
  const [recipient, setRecipient] = useState('0x71C...49a1');
  const [amount, setAmount] = useState('0.5');
  const [fee, setFee] = useState<'low' | 'medium' | 'high'>('medium');

  const stages: Stage[] = ['creation', 'broadcast', 'mempool', 'validation', 'inclusion', 'confirmation', 'success'];

  const nextStage = () => {
    const currentIndex = stages.indexOf(stage);
    if (currentIndex < stages.length - 1) {
      setStage(stages[currentIndex + 1]);
    } else if (stage === 'idle') {
      setStage('creation');
    }
  };

  const reset = () => {
    setStage('idle');
  };

  const myTxIndex = fee === 'high' ? 2 : fee === 'medium' ? 9 : 14;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[600px]">
      {/* Header */}
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex items-center justify-between">
        <div>
          <h3 className="font-serif text-xl font-medium">Tracing a Transaction</h3>
          <p className="text-sm text-zinc-500">Trace your data through the global network</p>
        </div>
        <div className="flex gap-1">
          {stages.map((s, i) => (
            <div 
              key={s} 
              className={`h-1.5 w-8 rounded-full transition-all duration-500 ${
                stages.indexOf(stage) >= i ? 'bg-blue-500' : 'bg-zinc-200 dark:bg-zinc-800'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Stage Area */}
      <div className="flex-1 p-8 relative flex flex-col items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {stage === 'idle' && (
            <motion.div 
              key="idle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-6 max-w-md"
            >
              <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <ArrowsLeftRight size={40} className="text-blue-500" />
              </div>
              <h4 className="text-2xl font-serif">The Life of a Transaction</h4>
              <p className="text-zinc-500 px-4">
                You're about to send a transaction. We'll slow down time so you can see exactly what happens across the entire network.
              </p>
              <button 
                onClick={nextStage}
                className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-medium shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto cursor-pointer"
              >
                Start Tracing <ArrowRight weight="bold" />
              </button>
            </motion.div>
          )}

          {stage === 'creation' && (
            <motion.div 
              key="creation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -100 }}
              className="w-full max-w-md space-y-6"
            >
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Wallet className="text-blue-500" size={24} />
                  <span className="font-medium">My Wallet</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1 block">To Address</label>
                    <input
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="w-full p-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl text-sm font-mono truncate outline-none focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1 block">Amount</label>
                    <div className="flex items-end gap-2">
                      <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        inputMode="decimal"
                        className="p-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl text-lg font-medium flex-1 outline-none focus:border-blue-500"
                      />
                      <span className="text-zinc-500 font-medium pb-3">ETH</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1 block">Priority (Gas Fee)</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['low', 'medium', 'high'] as const).map(f => (
                        <button 
                          key={f}
                          onClick={() => setFee(f)}
                          className={`p-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                            fee === f 
                              ? 'bg-blue-500 border-blue-500 text-white shadow-md' 
                              : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500'
                          }`}
                        >
                          {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/50 flex items-start gap-3">
                <Key className="text-blue-500 mt-0.5" size={18} />
                <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
                  When you hit send, your wallet will use your <strong>Private Key</strong> to "sign" this data. This proves you own the funds without revealing your key.
                </p>
              </div>

              <button 
                onClick={nextStage}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-medium shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Sign & Send <Broadcast weight="bold" />
              </button>
            </motion.div>
          )}

          {stage === 'broadcast' && (
            <motion.div 
              key="broadcast"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center justify-center py-12"
            >
              <div className="relative w-64 h-64">
                {/* Central Node (Me) */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 m-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-500/50"
                >
                  <Wallet size={32} className="text-white" />
                </motion.div>

                {/* Network Nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <div 
                    key={angle}
                    className="absolute inset-0 m-auto transition-all"
                    style={{ transform: `rotate(${angle}deg) translateY(-100px)` }}
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="w-8 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center shadow-sm"
                    >
                      <Globe size={16} className="text-zinc-500" />
                    </motion.div>
                  </div>
                ))}

                {/* Broadcasting Pings */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <motion.div 
                    key={`ping-${angle}`}
                    className="absolute inset-0 m-auto w-1 h-32 bg-gradient-to-t from-blue-500 to-transparent origin-bottom"
                    style={{ transform: `rotate(${angle}deg)` }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: [0, 1, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5, 
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>

              <div className="mt-8 text-center max-w-sm">
                <h4 className="text-lg font-medium mb-2">Broadcasting to the Network</h4>
                <p className="text-sm text-zinc-500">
                  Your signed transaction is now traveling to thousands of nodes across the globe via the P2P network.
                </p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
                  <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest">Live Broadcast</span>
                </div>
              </div>

              <button 
                onClick={nextStage}
                className="mt-12 px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all cursor-pointer"
              >
                Go to Mempool
              </button>
            </motion.div>
          )}

          {stage === 'mempool' && (
            <motion.div 
              key="mempool"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full flex flex-col space-y-6"
            >
              <div className="text-center mb-4">
                <h4 className="text-lg font-medium">The Mempool (Waiting Room)</h4>
                <p className="text-sm text-zinc-500">Your transaction is waiting along with thousands of others.</p>
              </div>

              <div className="grid grid-cols-4 gap-4 p-4 bg-zinc-100/50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                {/* Random Transactions */}
                {Array.from({ length: 16 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    layoutId={`tx-${i}`}
                    className={`h-16 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                      i === myTxIndex 
                        ? 'bg-blue-600 border-blue-500 shadow-xl shadow-blue-500/20' 
                        : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700'
                    }`}
                  >
                    <div className="w-6 h-1 rounded-full ${
                       i % 3 === 0 ? 'bg-red-500' : i % 3 === 1 ? 'bg-orange-500' : 'bg-emerald-500'
                    }" />
                    <span className={`text-[8px] font-mono ${i === myTxIndex ? 'text-blue-100' : 'text-zinc-400'}`}>TX-{(i * 137) % 1000}</span>
                    {i === myTxIndex && <span className="text-[6px] uppercase font-bold text-white tracking-widest">Yours</span>}
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Clock size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">Position</div>
                    <div className="text-sm font-medium">#{myTxIndex + 1} of 16 in queue</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">Gas Selection</div>
                  <div className="text-sm font-medium capitalize text-blue-500">{fee} Priority</div>
                </div>
              </div>

              <button 
                onClick={nextStage}
                className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl font-medium shadow-lg transition-all cursor-pointer"
              >
                Wait for Validation
              </button>
            </motion.div>
          )}

          {stage === 'validation' && (
            <motion.div 
              key="validation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center"
            >
              <div className="flex items-center gap-12 mb-8 relative">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <ArrowsLeftRight size={32} className="text-white" />
                  </div>
                  <span className="text-xs font-medium">Your Transaction</span>
                </div>
                
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 100 }}
                  className="h-0.5 bg-zinc-200 dark:bg-zinc-800 relative"
                >
                  <motion.div 
                    animate={{ left: ['0%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4"
                  >
                    <ArrowsLeftRight size={16} className="text-blue-500" />
                  </motion.div>
                </motion.div>

                <div className="flex flex-col items-center gap-2">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: ['0 0 0px rgba(59, 130, 246, 0)', '0 0 20px rgba(59, 130, 246, 0.3)', '0 0 0px rgba(59, 130, 246, 0)']
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-24 h-24 bg-zinc-900 dark:bg-zinc-800 rounded-3xl flex flex-col items-center justify-center border border-zinc-700 p-2 text-center"
                  >
                    <Cpu size={32} className="text-blue-500 mb-1" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-blue-400">Validator</span>
                    <span className="text-[8px] font-mono text-zinc-500">Node #8392</span>
                  </motion.div>
                </div>
              </div>

              <div className="w-full max-w-sm space-y-3">
                <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-500" />
                    <span className="text-xs">Signature Verification</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-500">PASSED</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Database size={16} className="text-emerald-500" />
                    <span className="text-xs">Balance Check</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-500">PASSED</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <ArrowsLeftRight size={16} className="text-emerald-500" />
                    <span className="text-xs">Nonce Sequence</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-500">PASSED</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center">
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  Validator has picked your transaction for the next block!
                </p>
              </div>

              <button 
                onClick={nextStage}
                className="mt-8 w-full py-4 bg-emerald-600 text-white rounded-xl font-medium shadow-lg transition-all cursor-pointer"
              >
                Include in Block
              </button>
            </motion.div>
          )}

          {stage === 'inclusion' && (
            <motion.div 
              key="inclusion"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="w-full flex flex-col items-center"
            >
              <div className="mb-8 text-center">
                <h4 className="text-lg font-medium">Packing the Block</h4>
                <p className="text-sm text-zinc-500">Your transaction is bundled with 1,842 others.</p>
              </div>

              <div className="relative w-48 h-48 bg-zinc-50 dark:bg-zinc-900 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-3xl p-4 flex flex-wrap gap-1 content-start overflow-hidden">
                {/* Visual transactions "falling" into block */}
                {Array.from({ length: 40 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className={`w-3 h-3 rounded-sm ${i === 22 ? 'bg-blue-500 scale-125 z-10' : 'bg-zinc-200 dark:bg-zinc-800'}`}
                  />
                ))}
                
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent" />
                
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="px-3 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-[10px] font-mono shadow-sm">
                    BLOCK #19,482,921
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center max-w-xs">
                <p className="text-xs text-zinc-500">
                  The block header is being hashed. A <strong>Proof of Stake</strong> or <strong>Proof of Work</strong> algorithm is finalizing the block's legitimacy.
                </p>
              </div>

              <button 
                onClick={nextStage}
                className="mt-8 w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl font-medium shadow-lg cursor-pointer"
              >
                Add to Blockchain
              </button>
            </motion.div>
          )}

          {stage === 'confirmation' && (
            <motion.div 
              key="confirmation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center"
            >
              <div className="flex gap-4 items-center">
                {/* Existing Block */}
                <div className="w-24 h-24 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl flex flex-col items-center justify-center opacity-50">
                  <Database size={24} className="text-zinc-400 mb-1" />
                  <span className="text-[8px] font-mono text-zinc-500">#19482920</span>
                </div>
                
                <div className="w-8 h-0.5 bg-zinc-300 dark:bg-zinc-700" />

                {/* New Block */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="w-32 h-32 bg-blue-600 rounded-3xl flex flex-col items-center justify-center shadow-xl shadow-blue-500/40 relative"
                >
                  <motion.div 
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-white/20 rounded-3xl"
                  />
                  <ShieldCheck size={40} className="text-white mb-2 relative z-10" />
                  <span className="text-[10px] font-mono text-blue-100 relative z-10">Mined Block</span>
                  <span className="text-[10px] font-mono text-white font-bold relative z-10">#19482921</span>
                </motion.div>

                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  className="h-0.5 bg-zinc-300 dark:bg-zinc-700"
                />

                {/* Future Block Placeholder */}
                <div className="w-16 h-16 bg-zinc-50 dark:bg-zinc-900 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
                </div>
              </div>

              <div className="mt-12 text-center max-w-sm">
                <h4 className="text-lg font-medium mb-2">Immutable Confirmation</h4>
                <p className="text-sm text-zinc-500">
                  The block is now linked cryptographically to the one before it. The network consensus has updated everyone's ledger simultaneously.
                </p>
              </div>

              <button 
                onClick={nextStage}
                className="mt-12 w-full py-4 bg-emerald-600 text-white rounded-xl font-medium shadow-lg cursor-pointer"
              >
                View Results
              </button>
            </motion.div>
          )}

          {stage === 'success' && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full flex flex-col items-center text-center space-y-6"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12 }}
                className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30"
              >
                <CheckCircle size={64} weight="fill" className="text-white" />
              </motion.div>
              
              <div>
                <h4 className="text-3xl font-serif mb-2">Transaction Confirmed</h4>
                <p className="text-zinc-500">Your funds have safely reached their destination.</p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 w-full max-w-md text-left space-y-4">
                <div className="flex justify-between">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Status</span>
                  <span className="text-xs font-bold text-emerald-500">Success</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Block</span>
                  <span className="text-xs font-mono">19,482,921</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Gas Used</span>
                  <span className="text-xs font-mono">21,000</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Transaction Hash</span>
                  <span className="text-xs font-mono bg-white dark:bg-zinc-800 p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 truncate">
                    0xfa83921...c82910fa
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={reset}
                  className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all cursor-pointer"
                >
                  Restart Demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer / Context */}
      <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="flex gap-4 items-center">
          <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
            {stage === 'creation' && <Key size={20} className="text-blue-500" />}
            {stage === 'broadcast' && <Globe size={20} className="text-blue-500" />}
            {stage === 'mempool' && <Clock size={20} className="text-blue-500" />}
            {stage === 'validation' && <Cpu size={20} className="text-blue-500" />}
            {stage === 'inclusion' && <HardDrive size={20} className="text-blue-500" />}
            {stage === 'confirmation' && <Database size={20} className="text-blue-500" />}
            {stage === 'success' && <ShieldCheck size={20} className="text-emerald-500" />}
            {stage === 'idle' && <ArrowsLeftRight size={20} className="text-blue-500" />}
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
            {stage === 'idle' && "Click start to begin your journey through the blockchain pipeline."}
            {stage === 'creation' && "A transaction starts with a cryptographic signature. This proves you authorized the spend."}
            {stage === 'broadcast' && "Gossip protocol: Transactions spread like rumors until every node knows about them."}
            {stage === 'mempool' && "In a decentralized system, there is no 'first come first serve'. High fees cut the line."}
            {stage === 'validation' && "Nodes aren't just storing data; they are auditing it. Every rule is checked."}
            {stage === 'inclusion' && "Space is limited. Only 12-15mb exists in every Ethereum block. Every byte counts."}
            {stage === 'confirmation' && "Once a block is hashed, changing even one transaction would break the entire chain."}
            {stage === 'success' && "The ledger is updated. The transaction is now part of the permanent history of the world."}
          </p>
        </div>
      </div>
    </div>
  );
}
