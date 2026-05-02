import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bank, Database, BookOpen, Wallet, Globe, ArrowsLeftRight, LockKey, Lightning } from '@phosphor-icons/react';

export default function CexDexDemo() {
  const [step, setStep] = useState(0);

  const steps = [
    { title: "Setup & Custody", desc: "Where are the funds actually held?" },
    { title: "Routing the Trade", desc: "How is the price decided and match made?" },
    { title: "Settlement", desc: "How does the final trade execute?" }
  ];

  return (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 md:p-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-zinc-200 dark:bg-zinc-800">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 to-red-500"
          initial={{ width: '33%' }}
          animate={{ width: `${(step + 1) * 33.33}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-serif text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          {steps[step].title}
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {steps[step].desc}
        </p>
      </div>

      {/* Main Split Layout */}
      <div className="flex flex-col xl:flex-row gap-6 flex-1 min-h-[400px]">
        
        {/* CEX COLUMN */}
        <div className="flex-1 flex flex-col bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
          <div className="bg-zinc-100 dark:bg-zinc-950 p-4 border-b border-zinc-200 dark:border-zinc-800">
            <h3 className="font-semibold flex items-center gap-2">
              <Bank size={20} className="text-blue-500" />
              Centralised Exchange (CEX)
            </h3>
          </div>
          
          <div className="p-6 flex-1 flex flex-col items-center justify-center gap-6 relative">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div 
                  key="cex-step0" 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center text-center gap-4 w-full"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <LockKey size={32} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium">Exchange Hot Wallet</div>
                    <div className="text-xs text-zinc-500 mt-1">The exchange holds your private keys. You have an IOU in their database.</div>
                  </div>
                  <div className="w-full bg-zinc-50 dark:bg-zinc-800 p-3 rounded-lg flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Your Account Balance</span>
                    <span className="font-medium">1.0 ETH</span>
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div 
                  key="cex-step1" 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center text-center gap-4 w-full"
                >
                  <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <BookOpen size={32} className="text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div>
                    <div className="font-medium">Internal Order Book</div>
                    <div className="text-xs text-zinc-500 mt-1">Matching engine looks for a buyer willing to pay ~3000 USDC for your ETH.</div>
                  </div>
                  <div className="w-full bg-zinc-50 dark:bg-zinc-800 rounded-lg p-2 text-xs flex flex-col gap-1 text-left font-mono">
                    <div className="text-red-500">Sell 1.2 ETH @ 3001</div>
                    <div className="bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold p-1 rounded">Match: Sell 1.0 ETH @ 3000</div>
                    <div className="text-green-500">Buy 0.5 ETH @ 2999</div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="cex-step2" 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center text-center gap-4 w-full"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center relative">
                    <Database size={32} className="text-green-600 dark:text-green-400" />
                    <Lightning size={16} weight="fill" className="text-yellow-500 absolute -top-1 -right-1" />
                  </div>
                  <div>
                    <div className="font-medium">Database Updated</div>
                    <div className="text-xs text-zinc-500 mt-1">No transaction happens on the blockchain. The CEX simply updates its internal ledger.</div>
                  </div>
                  <div className="w-full flex justify-between gap-2 mt-2">
                    <div className="bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 p-2 rounded w-1/2 text-sm font-medium">
                      - 1.0 ETH
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-400 p-2 rounded w-1/2 text-sm font-medium">
                      + 3000 USDC
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* VS DIVIDER */}
        <div className="flex items-center justify-center xl:w-8">
          <div className="bg-zinc-200 dark:bg-zinc-800 text-zinc-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
            VS
          </div>
        </div>

        {/* DEX COLUMN */}
        <div className="flex-1 flex flex-col bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
          <div className="bg-zinc-100 dark:bg-zinc-950 p-4 border-b border-zinc-200 dark:border-zinc-800">
            <h3 className="font-semibold flex items-center gap-2">
              <Globe size={20} className="text-red-500" />
              Decentralised Exchange (DEX)
            </h3>
          </div>
          
          <div className="p-6 flex-1 flex flex-col items-center justify-center gap-6 relative">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div 
                  key="dex-step0" 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center text-center gap-4 w-full"
                >
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <Wallet size={32} className="text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <div className="font-medium">Self-Custody Wallet</div>
                    <div className="text-xs text-zinc-500 mt-1">You hold your private keys. The funds sit directly on the blockchain under your control.</div>
                  </div>
                  <div className="w-full bg-zinc-50 dark:bg-zinc-800 p-3 rounded-lg flex items-center justify-between text-sm border border-zinc-200 dark:border-zinc-700">
                    <span className="text-zinc-500">0x71...976F</span>
                    <span className="font-medium">1.0 ETH</span>
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div 
                  key="dex-step1" 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center text-center gap-4 w-full"
                >
                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <ArrowsLeftRight size={32} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium">Liquidity Pool (Smart Contract)</div>
                    <div className="text-xs text-zinc-500 mt-1">Code algorithms calculate the price instantly based on the ratio of ETH:USDC in the pool.</div>
                  </div>
                  <div className="w-full flex items-center justify-center gap-4 text-sm mt-2">
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg flex-1 border border-zinc-200 dark:border-zinc-700">
                      ETH Pool
                    </div>
                    <span className="text-zinc-400 font-mono">X * Y = K</span>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 rounded-lg flex-1 border border-blue-200 dark:border-blue-800 text-center font-medium">
                      ~3000 USDC
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="dex-step2" 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center text-center gap-4 w-full"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Globe size={32} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium">On-Chain Settlement</div>
                    <div className="text-xs text-zinc-500 mt-1">Both tokens are swapped simultaneously in a verifiable blockchain transaction + Gas fee.</div>
                  </div>
                  <div className="w-full flex flex-col gap-2 mt-2">
                    <div className="bg-zinc-50 dark:bg-zinc-800 p-2 rounded text-xs font-mono text-zinc-500 text-left truncate border border-zinc-200 dark:border-zinc-700">
                      Tx: 0x8aef9...ddc9 → SUCCESS
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 p-2 rounded w-1/2 text-sm font-medium">
                        - 1.0 ETH
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-400 p-2 rounded w-1/2 text-sm font-medium">
                        + 3000 USDC
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      <div className="mt-8 flex items-center justify-end border-t border-zinc-200 dark:border-zinc-800 pt-6">
        <button
          onClick={() => setStep(s => (s + 1) % 3)}
          className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black font-medium rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors cursor-pointer"
        >
          {step === 2 ? 'Run Simulation Again' : 'Next Step'}
        </button>
      </div>

    </div>
  );
}
