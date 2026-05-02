import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cube, Clock, List, Hash, Fingerprint, Info } from '@phosphor-icons/react';

export default function BlockDemo() {
  const [data, setData] = useState('Payment: Alice -> Bob ($20)');
  const [nonce, setNonce] = useState('0');
  const [timestamp, setTimestamp] = useState(new Date().toISOString());
  const [prevHash, setPrevHash] = useState('0000000000000000000000000000000000000000000000000000000000000000');
  const [hash, setHash] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const computeHash = async () => {
    setIsLoading(true);
    const content = `1${timestamp}${data}${prevHash}${nonce}`;
    const msgBuffer = new TextEncoder().encode(content);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    setHash(hashHex);
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      computeHash();
    }, 100);
    return () => clearTimeout(timer);
  }, [data, nonce, timestamp, prevHash]);

  return (
    <div className="w-full my-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
          <Cube size={24} weight="bold" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-medium">Build a Block</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">See what's inside a single block and how its hash is generated.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Block Structure */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
          
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Block #1</span>
              <div className="flex items-center gap-2 text-[10px] font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Sealed Package
              </div>
            </div>

            <div className="space-y-4">
              {/* Transactions */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <List size={14} className="text-zinc-400" />
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Transactions</label>
                </div>
                <textarea
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all min-h-[80px] resize-none font-mono"
                />
              </div>

              {/* Timestamp */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={14} className="text-zinc-400" />
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Timestamp</label>
                  </div>
                  <input
                    type="text"
                    value={timestamp}
                    onChange={(e) => setTimestamp(e.target.value)}
                    className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-2 text-[10px] focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-mono"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Hash size={14} className="text-zinc-400" />
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Nonce</label>
                  </div>
                  <input
                    type="number"
                    value={nonce}
                    onChange={(e) => setNonce(e.target.value)}
                    className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-2 text-[10px] focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-mono"
                  />
                </div>
              </div>

              {/* Previous Hash */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Fingerprint size={14} className="text-zinc-400" />
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Previous Hash</label>
                </div>
                <input
                  type="text"
                  value={prevHash}
                  onChange={(e) => setPrevHash(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-2 text-[10px] focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-mono truncate"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hash Visualization */}
        <div className="flex flex-col justify-center gap-6">
          <div className="relative">
            <div className="absolute -top-3 left-4 px-2 bg-zinc-50 dark:bg-zinc-900 text-[10px] font-bold uppercase tracking-widest text-purple-500 z-10">
              Block Hash
            </div>
            <div className="w-full bg-white dark:bg-black border-2 border-purple-500/30 dark:border-purple-500/20 rounded-2xl p-6 font-mono text-sm break-all relative overflow-hidden shadow-xl shadow-purple-500/5">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-zinc-400 text-xs"
                  >
                    Recalculating hash...
                  </motion.div>
                ) : (
                  <motion.div
                    key={hash}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-purple-600 dark:text-purple-400 font-bold leading-relaxed"
                  >
                    {hash}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="bg-zinc-200/50 dark:bg-zinc-800/50 rounded-2xl p-5 border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-2 mb-3">
              <Info size={16} className="text-zinc-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">How it works</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              The block's hash is a unique fingerprint of <strong>everything</strong> inside it. If you change even one character in the transactions or adjust the nonce by 1, the entire hash changes completely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
