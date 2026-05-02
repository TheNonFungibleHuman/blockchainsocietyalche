import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, ArrowsClockwise, Info } from '@phosphor-icons/react';

export default function HashDemo() {
  const [input, setInput] = useState('Hello World');
  const [hash, setHash] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const computeHash = async (text: string) => {
    setIsLoading(true);
    // Use the Web Crypto API for real SHA-256 hashing
    const msgBuffer = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    setHash(hashHex);
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      computeHash(input);
    }, 100);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="w-full my-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col gap-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <Fingerprint size={24} weight="bold" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-medium">Interactive Hashing Demo</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">See how data turns into a unique digital fingerprint.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2 ml-1">Input Data</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all min-h-[100px] resize-none"
            placeholder="Type something here..."
          />
        </div>

        <div className="relative">
          <div className="absolute -top-3 left-4 px-2 bg-zinc-50 dark:bg-zinc-900 text-[10px] font-bold uppercase tracking-widest text-blue-500 z-10">
            SHA-256 Hash Output
          </div>
          <div className="w-full bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-6 font-mono text-xs break-all relative overflow-hidden min-h-[80px] flex items-center">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-zinc-400"
                >
                  <ArrowsClockwise className="animate-spin" size={16} />
                  Computing...
                </motion.div>
              ) : (
                <motion.div
                  key={hash}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-zinc-800 dark:text-zinc-200"
                >
                  {hash}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="bg-blue-500/5 border border-blue-500/10 rounded-2xl p-4 flex items-start gap-3 max-w-full overflow-hidden">
        <Info size={20} className="text-blue-500 shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-normal">
          <strong className="text-blue-600 dark:text-blue-400 block mb-1">Observe the Avalanche Effect:</strong>
          <p className="break-words w-full">
            Try changing just one character in your input. Notice how the entire hash string changes completely, even for the smallest edit. This property ensures that even the tiniest tampering with data is immediately obvious.
          </p>
        </div>
      </div>
    </div>
  );
}
