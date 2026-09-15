import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Storefront, 
  FileCode, 
  Wallet, 
  CheckCircle, 
  ArrowRight, 
  Info,
  Clock,
  ShieldCheck,
  Receipt
} from '@phosphor-icons/react';

interface CodeLine {
  text: string;
  tooltip: string;
  stages: number[]; // which simulator stages this line is active for
}

const ESCROW_CODE: CodeLine[] = [
  { text: "// SPDX-License-Identifier: MIT", tooltip: "This line tells the network which version of Solidity this contract is written in. Think of it like specifying which version of an app you need to run a file.", stages: [0] },
  { text: "pragma solidity ^0.8.0;", tooltip: "This line tells the network which version of Solidity this contract is written in. Think of it like specifying which version of an app you need to run a file.", stages: [0] },
  { text: "", tooltip: "", stages: [] },
  { text: "contract Escrow {", tooltip: "This declares the contract. Everything inside the curly braces is the contract's code. \"Escrow\" is just the name we gave it — like naming a file.", stages: [0] },
  { text: "    address public buyer;", tooltip: "An address is a unique identifier on the blockchain, like an account number. This line creates a slot in the contract's memory to store the buyer's address.", stages: [0] },
  { text: "    address public seller;", tooltip: "Same as above, but for the seller. The contract needs to know both parties before anything can happen.", stages: [0] },
  { text: "    uint public depositAmount;", tooltip: "unint means unsigned integer — a positive whole number. This stores the amount the buyer is expected to deposit, set once at deployment and never changed.", stages: [0] },
  { text: "    enum State { AwaitingDeposit, Funded, Delivered, Complete }", tooltip: "An enum is a list of named stages. This contract can only ever be in one of these four states at a time. It starts at AwaitingDeposit and moves forward — never backward.", stages: [0] },
  { text: "    State public contractState;", tooltip: "This creates the contract's current state variable. Every action the contract takes will check and update this value. It is stored permanently on the blockchain after every change.", stages: [0] },
  { text: "", tooltip: "", stages: [] },
  { text: "    constructor(address _seller, uint _depositAmount) {", tooltip: "The constructor runs exactly once — when the contract is deployed. It sets up the contract with the seller's address and the deposit amount. After this, these values are locked in.", stages: [0] },
  { text: "        buyer = msg.sender;", tooltip: "msg.sender is the address that deployed the contract. By writing this, we are saying: whoever deployed this contract is the buyer. The blockchain knows who sent every transaction.", stages: [0] },
  { text: "        seller = _seller;", tooltip: "The seller's address was passed in when the contract was deployed. This line stores it in the contract's memory.", stages: [0] },
  { text: "        depositAmount = _depositAmount;", tooltip: "Same for the deposit amount. Once stored here, the contract will check every deposit against this number.", stages: [0] },
  { text: "        contractState = State.AwaitingDeposit;", tooltip: "The contract starts in the AwaitingDeposit stage. Nothing else can happen until the buyer sends the correct funds.", stages: [0] },
  { text: "    }", tooltip: "", stages: [0] },
  { text: "", tooltip: "", stages: [] },
  { text: "    function deposit() external payable {", tooltip: "This is a function — a block of code the contract can execute when someone calls it. \"external\" means it can only be called from outside the contract. \"payable\" means it can receive ETH when called.", stages: [1] },
  { text: "        require(msg.sender == buyer, \"Only the buyer can deposit.\");", tooltip: "\"require\" is a gatekeeper. If the condition inside is not true, the function stops immediately and nothing happens. Here it checks: is the person calling this function the buyer? If not, the transaction is rejected with the message shown.", stages: [1] },
  { text: "        require(msg.value == depositAmount, \"Incorrect deposit amount.\");", tooltip: "msg.value is the amount of ETH sent with this transaction. This line checks that the buyer sent exactly the right amount — not more, not less. If it doesn't match, the transaction stops.", stages: [1] },
  { text: "        require(contractState == State.AwaitingDeposit, \"Deposit already made.\");", tooltip: "This checks that the contract is still in the right stage. You cannot deposit twice. Once the state moves forward, this gate closes permanently.", stages: [1] },
  { text: "        contractState = State.Funded;", tooltip: "All three checks passed. The contract updates its state to Funded. The ETH is now locked inside the contract's address — neither the buyer nor the seller can touch it directly.", stages: [1] },
  { text: "    }", tooltip: "", stages: [1] },
  { text: "", tooltip: "", stages: [] },
  { text: "    function confirmDelivery() external {", tooltip: "This function is called by the seller to confirm that delivery has happened. It takes no payment — it only updates the contract's state.", stages: [2] },
  { text: "        require(msg.sender == seller, \"Only the seller can confirm delivery.\");", tooltip: "Only the seller's address can call this function. If anyone else tries, the transaction is rejected immediately.", stages: [2] },
  { text: "        require(contractState == State.Funded, \"Funds not yet deposited.\");", tooltip: "Delivery cannot be confirmed unless the contract is already in the Funded state. The sequence is enforced by code.", stages: [2] },
  { text: "        contractState = State.Delivered;", tooltip: "The contract moves to the Delivered state. Payment can now be released. Nothing else can happen first.", stages: [2] },
  { text: "    }", tooltip: "", stages: [2] },
  { text: "", tooltip: "", stages: [] },
  { text: "    function releasePayment() external {", tooltip: "This function releases the locked ETH to the seller. It can only run after delivery has been confirmed.", stages: [3] },
  { text: "        require(contractState == State.Delivered, \"Delivery not confirmed yet.\");", tooltip: "The contract checks its own state before doing anything. If delivery was not confirmed, this function stops here. The funds stay locked until the correct sequence is followed.", stages: [3] },
  { text: "        contractState = State.Complete;", tooltip: "The state updates to Complete before the transfer happens. This is a security pattern — updating state before sending funds prevents a type of attack called reentrancy, where a malicious contract tries to call this function repeatedly before it finishes.", stages: [3] },
  { text: "        payable(seller).transfer(address(this).balance);", tooltip: "This is the line that actually moves the money. \"address(this).balance\" is the total ETH the contract holds. \"payable(seller).transfer(...)\" sends all of it to the seller's address. This happens automatically — no bank, no intermediary, no approval needed.", stages: [3] },
  { text: "    }", tooltip: "", stages: [3] },
  { text: "}", tooltip: "", stages: [] }
];

enum Stage {
  NotDeployed = 0,
  AwaitingDeposit = 1,
  Funded = 2,
  Delivered = 3,
  Complete = 4
}

export default function EscrowSimulator() {
  const [stage, setStage] = useState<Stage>(Stage.NotDeployed);
  const [logs, setLogs] = useState<{ time: string, text: string }[]>([]);
  const [balances, setBalances] = useState({ buyer: 10, seller: 0, contract: 0 });

  const addLog = (text: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs(prev => [{ time, text }, ...prev]);
  };

  const handleAction = () => {
    switch (stage) {
      case Stage.NotDeployed:
        setStage(Stage.AwaitingDeposit);
        addLog("Contract deployed. Buyer, seller, and deposit amount locked in. Contract state: Awaiting deposit.");
        break;
      case Stage.AwaitingDeposit:
        setBalances(prev => ({ ...prev, buyer: prev.buyer - 1, contract: prev.contract + 1 }));
        setStage(Stage.Funded);
        addLog("Buyer deposited 1 ETH. Funds locked in contract. Contract state: Funded.");
        break;
      case Stage.Funded:
        setStage(Stage.Delivered);
        addLog("Seller confirmed delivery. Contract state: Delivered. Release of funds now available.");
        break;
      case Stage.Delivered:
        setBalances(prev => ({ ...prev, contract: 0, seller: prev.seller + 1 }));
        setStage(Stage.Complete);
        addLog("Payment released to seller. Contract state: Complete. All conditions met and enforced by code.");
        break;
      default:
        // Reset for another loop
        setStage(Stage.NotDeployed);
        setBalances({ buyer: 10, seller: 0, contract: 0 });
        setLogs([]);
    }
  };

  const buttonLabel = useMemo(() => {
    switch (stage) {
      case Stage.NotDeployed: return "Deploy Contract";
      case Stage.AwaitingDeposit: return "Buyer Deposits 1 ETH";
      case Stage.Funded: return "Seller Confirms Delivery";
      case Stage.Delivered: return "Release Payment to Seller";
      case Stage.Complete: return "Reset Demo";
    }
  }, [stage]);

  const activeStage = useMemo(() => {
    if (stage === Stage.NotDeployed) return -1;
    return stage - 1; // Stage enum is shifted by 1 relative to the internal logic of the prompt's steps
  }, [stage]);

  return (
    <div className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row lg:h-[750px] min-h-[600px]">
      
      {/* Left Panel: Code */}
      <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col bg-[#111111] h-[400px] lg:h-full">
        <div className="p-4 border-b border-zinc-800 bg-[#1a1a1a] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileCode size={20} className="text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Escrow.sol</span>
          </div>
          <div className="text-[10px] text-zinc-500 font-mono italic">Hover or focus the icons for explanations</div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 lg:p-6 font-mono text-[12px] lg:text-[13px] leading-relaxed scrollbar-thin scrollbar-thumb-zinc-800">
          {ESCROW_CODE.map((line, idx) => {
            const isActive = line.stages.includes(activeStage);
            const isDimmed = activeStage !== -1 && !isActive;

            return (
              <div 
                key={idx} 
                className={`group relative flex gap-2 lg:gap-4 transition-all duration-300 py-0.5 ${isActive ? 'bg-emerald-500/10 -mx-2 px-2 border-l-2 border-emerald-500' : ''} ${isDimmed ? 'opacity-30' : 'opacity-100'}`}
              >
                <div className="w-6 text-zinc-600 text-right shrink-0 select-none text-[11px]">{idx + 1}</div>
                <div className={`flex-1 whitespace-pre leading-normal ${isActive ? 'text-emerald-400 font-bold' : 'text-zinc-300'}`}>
                  {line.text}
                </div>
                
                {line.tooltip && (
                  <div className="relative shrink-0 flex items-center">
                    <span
                      tabIndex={0}
                      role="img"
                      aria-label={line.tooltip}
                      className="outline-none rounded focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-help"
                    >
                      <Info size={14} className="text-zinc-600 group-hover:text-emerald-400 group-focus-within:text-emerald-400 transition-colors" />
                    </span>
                    <div className="absolute bottom-full right-0 mb-2 z-50 pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity whitespace-normal">
                      <div className="bg-zinc-800 text-zinc-100 text-[11px] p-3 rounded-lg border border-zinc-700 w-48 sm:w-56 lg:w-64 shadow-2xl">
                        <div className="flex items-center gap-2 mb-1 text-emerald-400 font-bold uppercase tracking-tighter text-[9px]">
                          <Info size={12} />
                          Line Explanation
                        </div>
                        {line.tooltip}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Panel: Interaction */}
      <div className="w-full lg:w-1/2 flex flex-col bg-zinc-950 min-h-[500px]">
        <div className="p-4 border-b border-zinc-800 bg-zinc-900/50 flex items-center gap-2">
          <Receipt size={20} className="text-blue-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Interaction Lab</span>
        </div>

        <div className="flex-1 p-4 lg:p-8 flex flex-col overflow-y-auto">
          {/* Actor Cards */}
          <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-6 lg:mb-12">
            {[
              { id: 'Buyer', icon: User, balance: balances.buyer, color: 'text-blue-400', bg: 'bg-blue-400/5', border: 'border-blue-400/20' },
              { id: 'Contract', icon: FileCode, balance: balances.contract, color: 'text-emerald-400', bg: 'bg-emerald-400/5', border: 'border-emerald-400/20' },
              { id: 'Seller', icon: Storefront, balance: balances.seller, color: 'text-purple-400', bg: 'bg-purple-400/5', border: 'border-purple-400/20' }
            ].map(actor => (
              <div key={actor.id} className={`${actor.bg} ${actor.border} border p-2 lg:p-4 rounded-xl lg:rounded-2xl flex flex-col items-center text-center`}>
                <div className={`p-1.5 lg:p-2 rounded-full ${actor.bg} border ${actor.border} mb-2 lg:mb-3`}>
                  <actor.icon className={`w-4 h-4 lg:w-5 lg:h-5 ${actor.color}`} />
                </div>
                <div className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">{actor.id}</div>
                <div className={`text-sm lg:text-xl font-mono font-bold ${actor.color}`}>{actor.balance} ETH</div>
              </div>
            ))}
          </div>

          {/* Status Display */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-4 lg:p-6 rounded-xl lg:rounded-2xl mb-6 lg:mb-8 flex flex-col items-center justify-center text-center min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={stage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center"
              >
                {stage === Stage.NotDeployed && <Clock className="w-10 h-10 lg:w-12 lg:h-12 text-zinc-600 mb-3 lg:mb-4" />}
                {stage === Stage.AwaitingDeposit && <Wallet className="w-10 h-10 lg:w-12 lg:h-12 text-blue-400 mb-3 lg:mb-4" />}
                {stage === Stage.Funded && <ShieldCheck className="w-10 h-10 lg:w-12 lg:h-12 text-emerald-400 mb-3 lg:mb-4" />}
                {stage === Stage.Delivered && <ArrowRight className="w-10 h-10 lg:w-12 lg:h-12 text-purple-400 mb-3 lg:mb-4" />}
                {stage === Stage.Complete && <CheckCircle className="w-10 h-10 lg:w-12 lg:h-12 text-emerald-500 mb-3 lg:mb-4" />}
                
                <h4 className="text-base lg:text-lg font-serif mb-1 lg:mb-2">
                  {stage === Stage.NotDeployed ? "Contract Not Deployed" : 
                   stage === Stage.AwaitingDeposit ? "Awaiting Deposit" :
                   stage === Stage.Funded ? "Funds Locked in Contract" :
                   stage === Stage.Delivered ? "Item Delivered" : "Transaction Complete"}
                </h4>
                <p className="text-[10px] lg:text-xs text-zinc-500 max-w-[240px]">
                  {stage === Stage.NotDeployed ? "Click below to initialize the escrow agreement on the blockchain." : 
                   stage === Stage.AwaitingDeposit ? "The buyer must send the specified amount to the smart contract address." :
                   stage === Stage.Funded ? "The funds are safe. Now the seller can safely send the items." :
                   stage === Stage.Delivered ? "Delivery confirmed. The seller can now withdraw their payment." : "The code has executed all conditions and the funds have been moved."}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleAction}
            className="w-full py-3 lg:py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-[0.98] mb-6 lg:mb-8 text-sm lg:text-base cursor-pointer"
          >
            {buttonLabel}
          </button>

          {/* Transaction Log */}
          <div className="h-[120px] lg:h-auto lg:flex-1 bg-black rounded-xl border border-zinc-800 p-4 font-mono text-[9px] lg:text-[10px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-zinc-800">
             <div className="flex items-center gap-2 text-zinc-500 mb-3 border-b border-zinc-800 pb-2">
               <Receipt size={12} />
               <span className="font-bold uppercase tracking-widest">Transaction Log</span>
             </div>
             {logs.length === 0 ? (
               <div className="text-zinc-700 italic">No activity yet. Deploy the contract to start.</div>
             ) : (
               <div className="space-y-2">
                 {logs.map((log, i) => (
                   <motion.div 
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={i} 
                    className="flex gap-3"
                   >
                     <span className="text-emerald-500/50 shrink-0">[{log.time}]</span>
                     <span className="text-zinc-400">{log.text}</span>
                   </motion.div>
                 ))}
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
