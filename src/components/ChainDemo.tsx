import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkBreak, Link as LinkIcon, Warning, CheckCircle, ArrowsClockwise, Info, ArrowClockwise } from '@phosphor-icons/react';
import { sha256Hex } from '../lib/hash';

interface Block {
  index: number;
  data: string;
  timestamp: string;
  prevHash: string;
  hash: string;
}

const INITIAL_BLOCKS: Block[] = [
  {
    index: 1,
    data: 'Alice -> Bob (5 coins)',
    timestamp: '2024-01-01T10:00:00Z',
    prevHash: '0000000000000000000000000000000000000000000000000000000000000000',
    hash: 'a3f9b2c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2'
  },
  {
    index: 2,
    data: 'Bob -> Carol (3 coins)',
    timestamp: '2024-01-01T10:05:00Z',
    prevHash: 'a3f9b2c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2',
    hash: 'b7d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2'
  },
  {
    index: 3,
    data: 'Carol -> Dave (1 coin)',
    timestamp: '2024-01-01T10:10:00Z',
    prevHash: 'b7d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2',
    hash: 'c1e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8'
  }
];

export default function ChainDemo() {
  const [blocks, setBlocks] = useState<Block[]>(INITIAL_BLOCKS);
  const [computedHashes, setComputedHashes] = useState<string[]>(INITIAL_BLOCKS.map(b => b.hash));
  const updateRequestId = useRef(0);

  const computeHash = async (index: number, data: string, prevHash: string) => {
    const block = INITIAL_BLOCKS[index];
    const content = `${block.index}${block.timestamp}${data}${prevHash}`;
    return sha256Hex(content);
  };

  const updateChain = async (changedIndex: number, newBlocks: Block[]) => {
    const requestId = ++updateRequestId.current;
    const newHashes = [...computedHashes];

    for (let i = changedIndex; i < newBlocks.length; i++) {
      const prevHash = i === 0 ? INITIAL_BLOCKS[0].prevHash : newHashes[i - 1];
      newHashes[i] = await computeHash(i, newBlocks[i].data, prevHash);
    }

    if (requestId !== updateRequestId.current) return;

    setComputedHashes(newHashes);
    setBlocks(newBlocks);
  };

  const handleDataChange = (index: number, newData: string) => {
    const newBlocks = blocks.map((b, i) => i === index ? { ...b, data: newData } : b);
    updateChain(index, newBlocks);
  };

  const repairChain = () => {
    setBlocks(INITIAL_BLOCKS);
    setComputedHashes(INITIAL_BLOCKS.map(b => b.hash));
  };

  const isBlockValid = (index: number) => {
    return blocks[index].data === INITIAL_BLOCKS[index].data && 
           (index === 0 || computedHashes[index-1] === INITIAL_BLOCKS[index-1].hash);
  };

  return (
    <div className="w-full my-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col gap-8 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400">
            <LinkBreak size={24} weight="bold" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-medium">Break the Chain</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Tamper with data and watch the ripple effect invalidate the history.</p>
          </div>
        </div>
        <button
          onClick={repairChain}
          className="flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-xl text-xs font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg"
        >
          <ArrowClockwise size={16} weight="bold" />
          Restore Truth
        </button>
      </div>

      <div className="flex flex-col gap-12 relative">
        {blocks.map((block, idx) => {
          const valid = isBlockValid(idx);
          const currentPrevHash = idx === 0 ? block.prevHash : computedHashes[idx - 1];
          const currentHash = computedHashes[idx];

          return (
            <div key={block.index} className="relative">
              {/* Connection Line */}
              {idx < blocks.length - 1 && (
                <div className="absolute left-1/2 -bottom-12 w-0.5 h-12 -translate-x-1/2 flex flex-col items-center justify-center">
                  <div className={`w-full h-full ${isBlockValid(idx + 1) ? 'bg-green-500/30' : 'bg-red-500/30'} transition-colors`} />
                  <div className={`absolute p-1 rounded-full ${isBlockValid(idx + 1) ? 'bg-green-500 text-white' : 'bg-red-500 text-white'} z-10 shadow-lg`}>
                    {isBlockValid(idx + 1) ? <LinkIcon size={12} weight="bold" /> : <LinkBreak size={12} weight="bold" />}
                  </div>
                </div>
              )}

              <motion.div 
                layout
                className={`bg-white dark:bg-zinc-900 border-2 ${valid ? 'border-zinc-200 dark:border-zinc-800' : 'border-red-500/50 dark:border-red-500/30'} rounded-2xl p-5 shadow-sm relative overflow-hidden transition-colors`}
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${valid ? 'bg-zinc-300 dark:bg-zinc-700' : 'bg-red-500'}`} />
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Block #{block.index}</span>
                      {block.index === 1 && (
                        <span className="text-[8px] font-bold uppercase px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600">Genesis</span>
                      )}
                    </div>
                    <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase px-2 py-1 rounded-full ${valid ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}`}>
                      {valid ? <CheckCircle size={12} /> : <Warning size={12} />}
                      {valid ? 'Valid' : 'Tampered / Broken'}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1">Data (Transactions)</label>
                        <input
                          type="text"
                          value={block.data}
                          onChange={(e) => handleDataChange(idx, e.target.value)}
                          className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1">Previous Hash</label>
                        <div className={`px-2 py-1.5 rounded-lg font-mono text-[9px] break-all border transition-colors ${idx > 0 && currentPrevHash !== INITIAL_BLOCKS[idx].prevHash ? 'bg-red-500/5 text-red-600 border-red-500/20' : 'bg-zinc-100 dark:bg-black/50 text-zinc-500 border-zinc-200 dark:border-zinc-800'}`}>
                          {currentPrevHash}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-end">
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1">Block Hash</label>
                      <div className={`px-3 py-3 rounded-lg font-mono text-[10px] break-all border-2 transition-colors ${valid ? 'bg-green-500/5 text-green-600 border-green-500/10' : 'bg-red-500/5 text-red-600 border-red-500/20 font-bold'}`}>
                        {currentHash}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="bg-zinc-200/50 dark:bg-zinc-800/50 rounded-2xl p-5 border border-zinc-200 dark:border-zinc-700 flex items-start gap-3">
        <Info size={20} className="text-zinc-500 shrink-0 mt-0.5" />
        <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <p>
            <strong>The Ripple Effect:</strong> Notice how the <strong>Previous Hash</strong> of each block is literally the <strong>Block Hash</strong> of the one before it. If you change Block 1, its hash changes. This makes Block 2's "Previous Hash" incorrect, which changes Block 2's own hash, breaking Block 3. Click <strong>"Restore Truth"</strong> to revert all blocks to their original, valid state.
          </p>
        </div>
      </div>
    </div>
  );
}
