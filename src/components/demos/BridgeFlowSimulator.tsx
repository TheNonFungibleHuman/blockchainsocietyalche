import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Shield, Zap, Info, Loader2, CheckCircle2, Coins, Server, ArrowDown } from 'lucide-react';

type Stage = 'initiate' | 'lock' | 'mint' | 'complete';

export default function BridgeFlowSimulator() {
  const [stage, setStage] = useState<Stage>('initiate');
  const [ethOnL1, setEthOnL1] = useState(10);
  const [wethOnL2, setWethOnL2] = useState(0);
  const [bridgeBalance, setBridgeBalance] = useState(1000);
  const [isBridging, setIsBridging] = useState(false);
  const [direction, setDirection] = useState<'l1-to-l2' | 'l2-to-l1'>('l1-to-l2');
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const reset = () => {
    setStage('initiate');
    setIsBridging(false);
  };

  const handleBridge = async () => {
    setIsBridging(true);

    const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

    // Stage 1: Initiate (Wait 1s)
    await sleep(1000);
    if (!isMountedRef.current) return;
    setStage('lock');

    // Update balances for Lock
    if (direction === 'l1-to-l2') {
      setEthOnL1(prev => prev - 1);
      setBridgeBalance(prev => prev + 1);
    } else {
      setWethOnL2(prev => prev - 1);
    }

    // Stage 2: Lock/Burn (Wait 1.5s)
    await sleep(1500);
    if (!isMountedRef.current) return;
    setStage('mint');

    // Stage 3: Mint/Unlock (Wait 1.5s)
    if (direction === 'l1-to-l2') {
      setWethOnL2(prev => prev + 1);
    } else {
      setEthOnL1(prev => prev + 1);
      setBridgeBalance(prev => prev - 1);
    }

    await sleep(1500);
    if (!isMountedRef.current) return;
    setStage('complete');
    setIsBridging(false);
  };

  return (
    <div className="bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden font-sans">
      <div className="p-6 md:p-8 border-b border-white/5 bg-gradient-to-br from-zinc-900 to-black">
        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
          <Zap className="text-yellow-500" /> Bridge Flow Simulator
        </h3>
        <p className="text-sm text-zinc-400">Visualize the "Lock-and-Mint" mechanism that connects L1 and L2.</p>
      </div>

      <div className="p-6 md:p-8 space-y-12">
        {/* Network Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Ethereum L1 */}
          <div className={`p-6 rounded-2xl border-2 transition-all ${stage === 'lock' && direction === 'l1-to-l2' ? 'border-blue-500 bg-blue-500/5' : 'border-white/5 bg-white/[0.02]'}`}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Layer 1</span>
              <Shield size={16} className="text-blue-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-4">Ethereum</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-white/5">
                <span className="text-xs text-zinc-400">Your ETH</span>
                <span className="font-mono font-bold text-white">{ethOnL1} ETH</span>
              </div>
            </div>
          </div>

          {/* The Bridge (Centralizing Layer) */}
          <div className="relative flex flex-col items-center gap-4">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
               <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
            
            <div className={`w-20 h-20 rounded-2xl border-2 flex items-center justify-center transition-all ${isBridging ? 'border-yellow-500/50 bg-yellow-500/10 animate-pulse' : 'border-white/10 bg-white/5'}`}>
              <Server className={isBridging ? 'text-yellow-500' : 'text-zinc-600'} size={32} />
            </div>
            
            <div className="bg-zinc-900/80 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
              Bridge Smart Contract
            </div>
            
            <div className="text-center">
               <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Locked Value</div>
               <div className="text-sm font-mono text-white font-bold">{bridgeBalance} ETH</div>
            </div>
          </div>

          {/* Base L2 */}
          <div className={`p-6 rounded-2xl border-2 transition-all ${stage === 'mint' && direction === 'l1-to-l2' ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/5 bg-white/[0.02]'}`}>
             <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Layer 2</span>
              <Zap size={16} className="text-emerald-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-4">Base</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-white/5">
                <span className="text-xs text-zinc-400">Your WETH</span>
                <span className="font-mono font-bold text-white">{wethOnL2} WETH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animation & Guidance */}
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 min-h-[140px] flex flex-col items-center justify-center text-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {stage === 'initiate' && (
              <motion.div 
                key="init"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <p className="text-sm text-zinc-400 max-w-md">
                  Ready to scale? Move your ETH from the expensive Layer 1 to a high-speed Layer 2.
                </p>
                <div className="flex gap-3 justify-center">
                  <button 
                    onClick={() => { setDirection('l1-to-l2'); handleBridge(); }}
                    disabled={isBridging}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
                  >
                    Bridge 1 ETH to Base <ArrowRight size={14} />
                  </button>
                  {wethOnL2 > 0 && (
                     <button 
                        onClick={() => { setDirection('l2-to-l1'); handleBridge(); }}
                        disabled={isBridging}
                        className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2"
                      >
                        Bridge back to L1 <ArrowLeft size={14} />
                      </button>
                  )}
                </div>
              </motion.div>
            )}

            {stage === 'lock' && (
              <motion.div 
                key="lock"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <Coins size={24} />
                   </div>
                   <motion.div 
                      animate={{ x: [0, 100], opacity: [1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-blue-400"
                   >
                     <ArrowRight size={24} />
                   </motion.div>
                </div>
                <h5 className="text-blue-400 font-bold">Step 1: Locking Asset</h5>
                <p className="text-xs text-zinc-500">Your ETH is being locked into the bridge smart contract on Ethereum.</p>
              </motion.div>
            )}

            {stage === 'mint' && (
              <motion.div 
                key="mint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="flex items-center gap-4">
                   <motion.div 
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="text-emerald-400"
                   >
                     <ArrowRight size={24} />
                   </motion.div>
                   <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 ring-4 ring-emerald-500/10">
                     <Zap size={24} />
                   </div>
                </div>
                <h5 className="text-emerald-400 font-bold">Step 2: Minting Representative</h5>
                <p className="text-xs text-zinc-500">A "Wrapped" version of your ETH is being minted on the Base L2.</p>
              </motion.div>
            )}

            {stage === 'complete' && (
              <motion.div 
                key="complete"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                   <CheckCircle2 size={32} />
                </div>
                <div>
                   <h5 className="text-white font-bold mb-1">Bridging Successful!</h5>
                   <p className="text-xs text-zinc-500">Total fees saved vs L1: <span className="text-emerald-400 font-bold">$24.50</span></p>
                </div>
                <button 
                  onClick={reset}
                  className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all"
                >
                  Confirm & Finish
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Comparison Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
              <div className="flex items-center gap-2 mb-2 text-blue-400">
                <Info size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">L1 Environment</span>
              </div>
              <ul className="text-[11px] text-zinc-400 space-y-2">
                <li className="flex justify-between"><span>Max Security:</span> <span className="text-white">Inherited</span></li>
                <li className="flex justify-between"><span>Standard Tx Fee:</span> <span className="text-white">$15 - $150</span></li>
                <li className="flex justify-between"><span>Throughput:</span> <span className="text-white">~15 TPS</span></li>
              </ul>
           </div>
           <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
              <div className="flex items-center gap-2 mb-2 text-emerald-400">
                <Zap size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">L2 Environment (Base)</span>
              </div>
              <ul className="text-[11px] text-zinc-400 space-y-2">
                <li className="flex justify-between"><span>Security:</span> <span className="text-white">Anchored to L1</span></li>
                <li className="flex justify-between"><span>Standard Tx Fee:</span> <span className="text-white">&lt; $0.05</span></li>
                <li className="flex justify-between"><span>Throughput:</span> <span className="text-white">~2,000+ TPS</span></li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
