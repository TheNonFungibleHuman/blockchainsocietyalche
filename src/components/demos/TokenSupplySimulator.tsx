import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Info, RefreshCw, TrendingUp, TrendingDown, Coins } from 'lucide-react';

export default function TokenSupplySimulator() {
  const [totalSupply, setTotalSupply] = useState(1000000000); // 1 Billion
  const [annualBurnRate, setAnnualBurnRate] = useState(2); // 2%
  const [vestingYears, setVestingYears] = useState(4); // 4 years
  const [airdropPercentage, setAirdropPercentage] = useState(10); // 10%
  const [stakingYield, setStakingYield] = useState(5); // 5% inflation/rewards

  const data = useMemo(() => {
    const years = 10;
    const chartData = [];
    let circulating = (airdropPercentage / 100) * totalSupply;
    let currentTotal = totalSupply;

    for (let year = 0; year <= years; year++) {
      // Vesting: assume team/investors (90% - airdrop) unlock linearly over vestingYears
      const vestingAmount = year <= vestingYears 
        ? ((totalSupply * (1 - airdropPercentage / 100)) / vestingYears) * year 
        : (totalSupply * (1 - airdropPercentage / 100));
      
      const currentCirculating = (airdropPercentage / 100) * totalSupply + vestingAmount;
      
      // Burns and Staking Yield affect the total and circulating over time
      if (year > 0) {
        const burnEffect = currentTotal * (annualBurnRate / 100);
        const yieldEffect = currentTotal * (stakingYield / 100);
        currentTotal = currentTotal - burnEffect + yieldEffect;
      }

      chartData.push({
        year: `Year ${year}`,
        total: Math.round(currentTotal),
        circulating: Math.round(Math.min(currentCirculating, currentTotal)),
        scarcity: Math.round((currentTotal - Math.min(currentCirculating, currentTotal)) / currentTotal * 100)
      });
    }
    return chartData;
  }, [totalSupply, annualBurnRate, vestingYears, airdropPercentage, stakingYield]);

  const stats = useMemo(() => {
    const startTotal = data[0].total;
    const endTotal = data[data.length - 1].total;
    const change = ((endTotal - startTotal) / startTotal) * 100;
    return {
      finalSupply: endTotal,
      percentageChange: change.toFixed(1),
      isDeflationary: change < 0
    };
  }, [data]);

  return (
    <div className="bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden font-sans">
      <div className="p-6 md:p-8 border-b border-white/5 bg-gradient-to-br from-zinc-900 to-black">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Coins className="text-yellow-500" /> Tokenomics Simulator
            </h3>
            <p className="text-sm text-zinc-400 mt-1">Project the future of your economy by adjusting core levers.</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => {
                setTotalSupply(1000000000);
                setAnnualBurnRate(2);
                setVestingYears(4);
                setAirdropPercentage(10);
                setStakingYield(5);
              }}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2"
            >
              <RefreshCw size={14} /> Reset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="space-y-6 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                  Total Supply <Info size={12} />
                </label>
                <span className="text-sm font-mono text-white">{(totalSupply / 1000000).toFixed(0)}M</span>
              </div>
              <input 
                type="range" 
                min="10000000" 
                max="10000000000" 
                step="10000000"
                value={totalSupply} 
                onChange={(e) => setTotalSupply(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                   Vesting Period <Info size={12} />
                </label>
                <span className="text-sm font-mono text-white">{vestingYears} Years</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                step="1"
                value={vestingYears} 
                onChange={(e) => setVestingYears(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                  Burn Rate (Annual) <TrendingDown size={12} className="text-red-500" />
                </label>
                <span className="text-sm font-mono text-white">{annualBurnRate}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="20" 
                step="0.5"
                value={annualBurnRate} 
                onChange={(e) => setAnnualBurnRate(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                  Staking Yield <TrendingUp size={12} className="text-blue-500" />
                </label>
                <span className="text-sm font-mono text-white">{stakingYield}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="50" 
                step="1"
                value={stakingYield} 
                onChange={(e) => setStakingYield(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                  Initial Airdrop <Info size={12} />
                </label>
                <span className="text-sm font-mono text-white">{airdropPercentage}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="50" 
                step="5"
                value={airdropPercentage} 
                onChange={(e) => setAirdropPercentage(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>
          </div>

          {/* Visualization */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Final Supply (Year 10)</div>
                <div className="text-2xl font-mono font-bold text-white">
                  {(stats.finalSupply / 1000000).toFixed(1)}M
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">10-Year Trajectory</div>
                <div className={`text-2xl font-mono font-bold flex items-center gap-2 ${stats.isDeflationary ? 'text-red-400' : 'text-blue-400'}`}>
                  {stats.percentageChange}% {stats.isDeflationary ? <TrendingDown size={20} /> : <TrendingUp size={20} />}
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-4 min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorCirc" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis 
                    dataKey="year" 
                    stroke="#ffffff30" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <YAxis 
                    stroke="#ffffff30" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false}
                    tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#09090b', borderColor: '#ffffff10', borderRadius: '12px' }}
                    itemStyle={{ fontSize: '12px' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="total" 
                    stroke="#3b82f6" 
                    fillOpacity={1} 
                    fill="url(#colorTotal)" 
                    name="Total Supply"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="circulating" 
                    stroke="#10b981" 
                    fillOpacity={1} 
                    fill="url(#colorCirc)" 
                    name="Circulating Supply"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2 text-blue-400">
                  <div className="w-2 h-2 rounded-full bg-blue-400" /> Total Supply
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" /> Circulating Supply
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-start gap-4">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
            <Info size={16} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-1">Understanding the Chart</h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              <strong>Total Supply</strong> changes based on annual burn rates (deflation) and staking yields (inflation). 
              <strong> Circulating Supply</strong> represents how much of that total is actually available to trade. 
              The gap between the two is the **locked supply** (tokens still in vesting).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
