import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  CurrencyCircleDollar, 
  TrendUp, 
  TrendDown, 
  Info, 
  ShieldCheck,
  Skull
} from '@phosphor-icons/react';

export default function IncentiveDesignLab() {
  const [blockReward, setBlockReward] = useState(6.25);
  const [feeRate, setFeeRate] = useState(20); // as a percentage of block reward for simplicity
  const [participationCost, setParticipationCost] = useState(4); // thousands of dollars/energy units

  const stats = useMemo(() => {
    const totalIncome = blockReward + (blockReward * (feeRate / 100));
    const profit = totalIncome - participationCost;
    
    // Calculate network health
    // High profit + reasonable cost = High participation
    // Low profit or extreme cost = Centralization or drop-off
    let health = 100;
    let healthStatus = "Stable & Decentralized";
    let healthColor = "text-emerald-500";

    if (profit <= 0) {
      health = 10;
      healthStatus = "Network Collapse (Nodes quitting)";
      healthColor = "text-red-500";
    } else if (participationCost > 8) {
      health = 40;
      healthStatus = "Highly Centralized (Too expensive)";
      healthColor = "text-orange-500";
    } else if (feeRate > 150) {
      health = 60;
      healthStatus = "Unstable Fees (Users leaving)";
      healthColor = "text-yellow-500";
    } else if (profit > 10) {
      health = 95;
      healthStatus = "Robust Participation";
      healthColor = "text-emerald-500";
    } else if (profit > 0) {
      // Slim but positive margins are sustainable, just not robust.
      health = 80;
      healthStatus = "Thin Margins (Participation at risk)";
      healthColor = "text-yellow-500";
    }

    // Cheating scenario logic
    // If block reward is low, honest profit is low. 
    // If the "cheat" reward (stealing a large tx) is > profit * hurdle, cheating is "rational"
    const cheatPayoff = 15; // fixed size of a potential theft attempt
    const honestProfit = profit;
    const doesCheatingPay = cheatPayoff > (honestProfit * 2);

    return {
      profit,
      health,
      healthStatus,
      healthColor,
      doesCheatingPay,
      totalIncome
    };
  }, [blockReward, feeRate, participationCost]);

  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-xl font-sans">
      {/* Header */}
      <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-purple-500/10 rounded-lg">
            <CurrencyCircleDollar className="w-5 h-5 text-purple-500" />
          </div>
          <h3 className="font-serif text-xl">Incentive Design Lab</h3>
        </div>
        <p className="text-sm text-zinc-500">Find the economic equilibrium that keeps a blockchain secure.</p>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Block Reward Size</label>
              <span className="font-mono font-bold text-lg">{blockReward.toFixed(2)} COIN</span>
            </div>
            <input 
              type="range" min="0" max="25" step="0.25"
              value={blockReward}
              onChange={(e) => setBlockReward(parseFloat(e.target.value))}
              className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <p className="text-[10px] text-zinc-400 mt-2 italic">The "new money" minted per block.</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Transaction Fee Rate (%)</label>
              <span className="font-mono font-bold text-lg">{feeRate}%</span>
            </div>
            <input 
              type="range" min="0" max="300" step="5"
              value={feeRate}
              onChange={(e) => setFeeRate(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <p className="text-[10px] text-zinc-400 mt-2 italic">Fees paid by users to have transactions included.</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Participation Cost (Hardware/Stake)</label>
              <span className="font-mono font-bold text-lg text-red-500">-{participationCost} Units</span>
            </div>
            <input 
              type="range" min="1" max="15" step="0.5"
              value={participationCost}
              onChange={(e) => setParticipationCost(parseFloat(e.target.value))}
              className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
            <p className="text-[10px] text-zinc-400 mt-2 italic">The "barrier to entry" for nodes.</p>
          </div>
        </div>

        {/* Real-time Feedback */}
        <div className="space-y-6">
          {/* Output Panel 1: Profit & Health */}
          <div className="bg-zinc-50 dark:bg-zinc-800/30 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">Projected Profit</span>
                <div className="flex items-center gap-2">
                  <span className={`text-2xl font-bold ${stats.profit > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                    {stats.profit.toFixed(2)}
                  </span>
                  {stats.profit > 0 ? <TrendUp size={20} className="text-emerald-500" /> : <TrendDown size={20} className="text-red-500" />}
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-zinc-400 block mb-1">Network Health</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold font-mono">{stats.health}%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-500 italic">{stats.healthStatus}</span>
              </div>
              <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full ${stats.health > 70 ? 'bg-emerald-500' : stats.health > 40 ? 'bg-orange-500' : 'bg-red-500'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${stats.health}%` }}
                />
              </div>
            </div>
          </div>

          {/* Output Panel 2: The Attack Test */}
          <div className={`p-6 rounded-2xl border transition-colors ${stats.doesCheatingPay ? 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800/50' : 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800/50'}`}>
            <div className="flex items-center gap-3 mb-4">
              {stats.doesCheatingPay ? (
                <div className="p-2 bg-red-500 text-white rounded-lg">
                  <Skull size={20} weight="bold" />
                </div>
              ) : (
                <div className="p-2 bg-emerald-500 text-white rounded-lg">
                  <ShieldCheck size={20} weight="bold" />
                </div>
              )}
              <h4 className="font-bold">Bad Actor Scenario</h4>
            </div>
            
            <p className="text-sm mb-4 leading-relaxed opacity-80">
              {stats.doesCheatingPay 
                ? "SECURITY COMPROMISED: Honest rewards are so low that it is economically rational to attempt a double-spend. The network is at risk of collapse."
                : "SECURITY ROBUST: The cost of failing an attack (losing rewards/energy) is much higher than the potential gain. Dishonesty results in a net loss."}
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <span className={stats.doesCheatingPay ? 'text-red-500' : 'text-emerald-600 dark:text-emerald-400'}>
                Decision: {stats.doesCheatingPay ? "CHEAT" : "FOLLOW RULES"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-6 bg-zinc-50 dark:bg-zinc-800/30 border-t border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
        <Info size={20} className="text-purple-500 shrink-0" />
        <p className="text-xs text-zinc-500 leading-relaxed">
          <strong>Designer's Note:</strong> In early stages, high **Block Rewards** are needed to attract nodes. As the network matures, **Transaction Fees** must scale up to replace rewards. If **Participation Costs** are too high, only a few rich entities can run nodes, leading to <em>centralization</em>.
        </p>
      </div>
    </div>
  );
}
