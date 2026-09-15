import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Desktop, CheckCircle, Warning, Broadcast, Info, ShieldCheck } from '@phosphor-icons/react';

interface Node {
  id: number;
  type: 'full' | 'light';
  status: 'idle' | 'verifying' | 'accepted' | 'rejected';
  x: number;
  y: number;
}

export default function ConsensusDemo() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [blockType, setBlockType] = useState<'honest' | 'fraudulent'>('honest');
  const [propagationStep, setPropagationStep] = useState(-1);

  // Initialize nodes in a circular layout
  useEffect(() => {
    const newNodes: Node[] = [];
    const count = 12;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      newNodes.push({
        id: i,
        type: i % 4 === 0 ? 'light' : 'full',
        status: 'idle',
        x: 50 + Math.cos(angle) * 38, // Slightly wider radius
        y: 50 + Math.sin(angle) * 38,
      });
    }
    setNodes(newNodes);
  }, []);

  const startBroadcast = (type: 'honest' | 'fraudulent') => {
    if (isBroadcasting) return;
    setBlockType(type);
    setIsBroadcasting(true);
    setPropagationStep(0);
    
    // Reset nodes
    setNodes(prev => prev.map(n => ({ ...n, status: 'idle' })));
  };

  useEffect(() => {
    if (propagationStep >= 0 && propagationStep < nodes.length) {
      const timer = setTimeout(() => {
        setNodes(prev => prev.map((node, idx) => {
          if (idx === propagationStep) {
            return { 
              ...node, 
              status: blockType === 'honest' ? 'accepted' : (idx === 0 ? 'accepted' : 'rejected') 
            };
          }
          return node;
        }));
        setPropagationStep(prev => prev + 1);
      }, 250);
      return () => clearTimeout(timer);
    } else if (propagationStep >= nodes.length) {
      const timer = setTimeout(() => {
        setIsBroadcasting(false);
        setPropagationStep(-1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [propagationStep, nodes.length, blockType]);

  const getNodeTooltip = (node: Node) => {
    if (node.status === 'idle') {
      return node.type === 'full' ? 'Full Node: Waiting for data' : 'Light Node: Waiting for headers';
    }
    if (blockType === 'honest') {
      return node.status === 'accepted' 
        ? 'Verified: Block hash matches my local chain history.' 
        : 'Verifying: Checking cryptographic signatures...';
    } else {
      if (node.id === 0) return 'Originator: Attempting to broadcast tampered data.';
      return node.status === 'rejected'
        ? 'Rejected: This block attempts to rewrite history. Majority disagrees.'
        : 'Verifying: Detecting discrepancy in previous hash...';
    }
  };

  return (
    <div className="w-full my-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col gap-8 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <Globe size={24} weight="bold" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-medium">The Network in Action</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Watch how nodes reach consensus or reject fraud.</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => startBroadcast('honest')}
            disabled={isBroadcasting}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all disabled:opacity-50 shadow-lg shadow-green-600/10"
          >
            <Broadcast size={16} />
            Honest Block
          </button>
          <button
            onClick={() => startBroadcast('fraudulent')}
            disabled={isBroadcasting}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all disabled:opacity-50 shadow-lg shadow-red-600/10"
          >
            <Warning size={16} />
            Broadcast Fraud
          </button>
        </div>
      </div>

      <div className="relative aspect-square max-w-[500px] mx-auto w-full bg-white dark:bg-black/20 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-inner flex items-center justify-center overflow-visible">
        {/* Central Hub - Perfectly Centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
          <AnimatePresence>
            {isBroadcasting && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                className={`absolute w-20 h-20 rounded-full border-2 ${blockType === 'honest' ? 'border-green-500' : 'border-red-500'}`}
              />
            )}
          </AnimatePresence>
          <div className={`relative bg-white dark:bg-zinc-800 p-5 rounded-full border-2 transition-colors duration-500 shadow-2xl ${
            isBroadcasting ? (blockType === 'honest' ? 'border-green-500' : 'border-red-500') : 'border-zinc-200 dark:border-zinc-700'
          }`}>
            <ShieldCheck size={40} className={isBroadcasting ? (blockType === 'honest' ? 'text-green-500' : 'text-red-500') : 'text-zinc-400'} />
            
            {/* Pulse for central node */}
            {isBroadcasting && (
              <motion.div 
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 1, repeat: Infinity }}
                className={`absolute inset-0 rounded-full ${blockType === 'honest' ? 'bg-green-500' : 'bg-red-500'}`}
              />
            )}
          </div>
        </div>

        {/* Nodes */}
        {nodes.map((node, idx) => (
          <motion.div
            key={node.id}
            className="absolute"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: idx * 0.05 }}
          >
            <div
              tabIndex={0}
              role="img"
              aria-label={`${node.type === 'full' ? 'Full node' : 'Light node'}: ${getNodeTooltip(node)}`}
              className="relative -translate-x-1/2 -translate-y-1/2 group outline-none rounded-2xl focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className={`p-3 rounded-2xl border-2 transition-all duration-500 shadow-sm cursor-help ${
                node.status === 'accepted' ? 'bg-green-500/10 border-green-500 text-green-600 scale-110 shadow-green-500/20' :
                node.status === 'rejected' ? 'bg-red-500/10 border-red-500 text-red-600 scale-110 shadow-red-500/20' :
                'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-400'
              }`}>
                {node.type === 'full' ? <Desktop size={20} weight="bold" /> : <Globe size={16} weight="bold" />}
              </div>
              
              {/* Enhanced Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 pointer-events-none z-50 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0">
                <div className="bg-zinc-900 dark:bg-zinc-800 text-white text-[10px] py-2 px-3 rounded-xl shadow-2xl border border-zinc-800 dark:border-zinc-700 min-w-[140px] text-center leading-tight">
                  <div className="font-bold mb-1 text-zinc-400 uppercase tracking-widest text-[8px]">
                    {node.type === 'full' ? 'Full Node' : 'Light Node'}
                  </div>
                  {getNodeTooltip(node)}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-zinc-900 dark:border-t-zinc-800" />
                </div>
              </div>

              {/* Status Indicator */}
              <AnimatePresence>
                {node.status !== 'idle' && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute -top-1 -right-1 z-10"
                  >
                    {node.status === 'accepted' ? 
                      <CheckCircle size={18} weight="fill" className="text-green-500 bg-white dark:bg-zinc-900 rounded-full shadow-sm" /> :
                      <Warning size={18} weight="fill" className="text-red-500 bg-white dark:bg-zinc-900 rounded-full shadow-sm" />
                    }
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 dark:opacity-20">
          {nodes.map((node, i) => (
            <line
              key={`hub-${i}`}
              x1="50%"
              y1="50%"
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}
        </svg>
      </div>

      <div className="bg-zinc-200/50 dark:bg-zinc-800/50 rounded-2xl p-5 border border-zinc-200 dark:border-zinc-700 flex items-start gap-3">
        <Info size={20} className="text-zinc-500 shrink-0 mt-0.5" />
        <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <p>
            <strong>Consensus in Action:</strong> Hover over or Tab to each node during or after a broadcast to see its internal reasoning. In an <strong>Honest Broadcast</strong>, nodes reach agreement because the data matches their rules. In a <strong>Fraudulent Broadcast</strong>, nodes detect the discrepancy and automatically reject the block, protecting the network's integrity.
          </p>
        </div>
      </div>
    </div>
  );
}
