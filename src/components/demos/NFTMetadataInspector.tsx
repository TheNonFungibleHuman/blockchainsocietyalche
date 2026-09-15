import { useState } from 'react';

import { Search, Shield, Ticket, GraduationCap, Server, Database, Globe, ExternalLink } from 'lucide-react';

interface NFTExample {
  id: string;
  name: string;
  type: 'art' | 'ticket' | 'credential';
  storage: 'on-chain' | 'ipfs' | 'centralized';
  image: string;
  metadata: Record<string, unknown>;
}

const EXAMPLES: NFTExample[] = [
  {
    id: '1',
    name: 'Genesis Bloom #42',
    type: 'art',
    storage: 'ipfs',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    metadata: {
      "name": "Genesis Bloom #42",
      "description": "A programmatic exploration of digital organic growth.",
      "image": "ipfs://QmXoyp...7VfW",
      "attributes": [
        { "trait_type": "Flower", "value": "Lotus" },
        { "trait_type": "Hue", "value": "Ultraviolet" }
      ],
      "compiler": "Genesis Engine v4"
    }
  },
  {
    id: '2',
    name: 'Devcon 7 VI P Pass',
    type: 'ticket',
    storage: 'on-chain',
    image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=400&h=400&fit=crop',
    metadata: {
      "id": "7788",
      "event": "Devcon 7",
      "tier": "VIP",
      "owner_verified": true,
      "gate_access_code": "0x44...ff",
      "data_source": "Stored directly in Smart Contract (0x...)"
    }
  },
  {
    id: '3',
    name: 'BSc Blockchain Science',
    type: 'credential',
    storage: 'centralized',
    image: 'https://images.unsplash.com/photo-152305085306e-8c3d3e7d9f3f?w=400&h=400&fit=crop',
    metadata: {
      "student": "Jane Doe",
      "degree": "BSc Blockchain Science",
      "issuer": "Block University",
      "date": "2024-05-15",
      "verification_link": "https://uni-records.com/verify/jane-doe-123",
      "warning": "Media server managed by University IT Dept."
    }
  }
];

export default function NFTMetadataInspector() {
  const [selectedId, setSelectedId] = useState<string>(EXAMPLES[0].id);
  const selected = EXAMPLES.find(e => e.id === selectedId)!;

  return (
    <div className="bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden font-sans">
      <div className="p-6 md:p-8 border-b border-white/5 bg-gradient-to-br from-zinc-900 to-black">
        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
          <Search className="text-blue-500" /> NFT Metadata Inspector
        </h3>
        <p className="text-sm text-zinc-400">Select an NFT to see where the data actually lives and how it's structured.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Gallery */}
        <div className="p-6 border-b lg:border-b-0 lg:border-r border-white/5 space-y-6">
          <div className="grid grid-cols-3 gap-3">
            {EXAMPLES.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                  selectedId === item.id ? 'border-blue-500 scale-95' : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-1 right-1">
                  {item.type === 'art' && <Globe size={14} className="text-white" />}
                  {item.type === 'ticket' && <Ticket size={14} className="text-white" />}
                  {item.type === 'credential' && <GraduationCap size={14} className="text-white" />}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/5 overflow-hidden relative">
            <div className="relative z-10">
               <div className="mb-4 aspect-square rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                 <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
               </div>
               <h4 className="text-lg font-bold text-white mb-1">{selected.name}</h4>
               <div className="flex gap-2 flex-wrap">
                 <span className="px-2 py-1 bg-white/5 text-zinc-400 text-[10px] font-bold uppercase rounded-md flex items-center gap-1">
                   {selected.type === 'art' && <Globe size={10} />}
                   {selected.type === 'ticket' && <Ticket size={10} />}
                   {selected.type === 'credential' && <GraduationCap size={10} />}
                   {selected.type}
                 </span>
                 <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md flex items-center gap-1 ${
                   selected.storage === 'on-chain' ? 'bg-emerald-500/10 text-emerald-400' :
                   selected.storage === 'ipfs' ? 'bg-blue-500/10 text-blue-400' :
                   'bg-amber-500/10 text-amber-400'
                 }`}>
                   {selected.storage === 'on-chain' ? <Shield size={10} /> :
                    selected.storage === 'ipfs' ? <Database size={10} /> :
                    <Server size={10} />}
                   {selected.storage} storage
                 </span>
               </div>
            </div>
          </div>
        </div>

        {/* Inspector */}
        <div className="bg-black p-6 md:p-8 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
              <Database size={12} /> Live Metadata JSON
            </h5>
            <div className="px-2 py-1 bg-white/5 rounded text-[10px] text-zinc-500 font-mono">
              ERC-721 Standard
            </div>
          </div>

          <div className="flex-1 bg-zinc-900/50 rounded-2xl border border-white/5 p-6 font-mono text-sm overflow-auto max-h-[400px]">
             <pre className="text-blue-400">
               {JSON.stringify(selected.metadata, null, 2)}
             </pre>
          </div>

          <div className="mt-6 space-y-4">
            <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-1">Storage Context</h5>
            <div className={`p-4 rounded-xl border flex gap-4 ${
              selected.storage === 'on-chain' ? 'bg-emerald-500/5 border-emerald-500/10' :
              selected.storage === 'ipfs' ? 'bg-blue-500/5 border-blue-500/10' :
              'bg-amber-500/5 border-amber-500/10'
            }`}>
              {selected.storage === 'on-chain' && (
                <>
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 h-fit">
                    <Shield size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400 font-bold mb-1">Ultra-Permanent</p>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Every byte is stored in the blockchain state. Impossible to lose or change as long as the network exists. High gas cost.
                    </p>
                  </div>
                </>
              )}
              {selected.storage === 'ipfs' && (
                <>
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 h-fit">
                    <Globe size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-400 font-bold mb-1">Decentralized Storage</p>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Content-addressed storage. If a file is altered, the link breaks, ensuring authenticity. Requires "pinning" by nodes.
                    </p>
                  </div>
                </>
              )}
              {selected.storage === 'centralized' && (
                <>
                  <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 h-fit">
                    <Server size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-amber-400 font-bold mb-1">Centralized Risk</p>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Stored on a private server. If the server goes down or the project lapses, the NFT points to a broken link.
                    </p>
                  </div>
                </>
              )}
            </div>
            <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 border border-white/5">
              <ExternalLink size={14} /> View on Explorer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
