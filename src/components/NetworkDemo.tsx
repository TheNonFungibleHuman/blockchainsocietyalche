import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Line, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Warning, CheckCircle, XCircle } from '@phosphor-icons/react';

interface Node {
  id: number;
  position: THREE.Vector3;
  label: string;
  type: 'server' | 'peer';
}

const NUM_NODES = 8;
const RADIUS = 2.8; // Reduced from 3.2 for better containment

const getNodes = (isCentralized: boolean): Node[] => {
  const nodes: Node[] = [];
  
  if (isCentralized) {
    nodes.push({ id: 0, position: new THREE.Vector3(0, 0, 0), label: 'Central Server', type: 'server' });
    for (let i = 0; i < NUM_NODES - 1; i++) {
      const angle = (i / (NUM_NODES - 1)) * Math.PI * 2;
      nodes.push({
        id: i + 1,
        position: new THREE.Vector3(Math.cos(angle) * RADIUS, Math.sin(angle) * RADIUS, 0),
        label: `User ${i + 1}`,
        type: 'peer'
      });
    }
  } else {
    for (let i = 0; i < NUM_NODES; i++) {
      const angle = (i / NUM_NODES) * Math.PI * 2;
      nodes.push({
        id: i,
        position: new THREE.Vector3(Math.cos(angle) * RADIUS, Math.sin(angle) * RADIUS, 0),
        label: 'P2P Node',
        type: 'peer'
      });
    }
  }
  return nodes;
};

const getEdges = (isCentralized: boolean, nodes: Node[]) => {
  const edges: { source: number; target: number }[] = [];
  if (isCentralized) {
    for (let i = 1; i < nodes.length; i++) {
      edges.push({ source: 0, target: i });
    }
  } else {
    for (let i = 0; i < nodes.length; i++) {
      edges.push({ source: i, target: (i + 1) % nodes.length });
      edges.push({ source: i, target: (i + 2) % nodes.length });
    }
  }
  return edges;
};

function Packet({ start, end, isActive }: { start: THREE.Vector3, end: THREE.Vector3, isActive: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  const [offset] = useState(() => Math.random());
  const speed = 0.4;

  useFrame((state) => {
    if (!ref.current || !isActive) return;
    const t = (state.clock.elapsedTime * speed + offset) % 1;
    ref.current.position.lerpVectors(start, end, t);
  });

  if (!isActive) return null;

  return (
    <Sphere ref={ref} args={[0.06, 8, 8]}>
      <meshBasicMaterial color="#60a5fa" transparent opacity={0.8} />
    </Sphere>
  );
}

function ResponsiveCamera() {
  const { camera, size } = useThree();
  
  useEffect(() => {
    if (size.width < 600) {
      camera.position.z = 10;
    } else {
      camera.position.z = 8;
    }
    camera.updateProjectionMatrix();
  }, [size.width, camera]);
  
  return null;
}

function NetworkScene({ isCentralized, offlineNodes, toggleNode }: { isCentralized: boolean, offlineNodes: number[], toggleNode: (id: number) => void }) {
  const nodes = useMemo(() => getNodes(isCentralized), [isCentralized]);
  const edges = useMemo(() => getEdges(isCentralized, nodes), [isCentralized, nodes]);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const isMainServerDown = isCentralized && offlineNodes.includes(0);

  return (
    <group>
      <ResponsiveCamera />
      {edges.map((edge, idx) => {
        const startNode = nodes.find(n => n.id === edge.source);
        const endNode = nodes.find(n => n.id === edge.target);
        if (!startNode || !endNode) return null;
        
        const isSourceOffline = offlineNodes.includes(edge.source);
        const isTargetOffline = offlineNodes.includes(edge.target);
        const isEdgeActive = !isMainServerDown && !isSourceOffline && !isTargetOffline;

        return (
          <group key={`edge-${idx}`}>
            <Line
              points={[startNode.position, endNode.position]}
              color={isEdgeActive ? '#3b82f6' : '#ef4444'}
              lineWidth={isEdgeActive ? 1.2 : 0.8}
              transparent
              opacity={isEdgeActive ? 0.3 : 0.1}
            />
            <Packet start={startNode.position} end={endNode.position} isActive={isEdgeActive} />
          </group>
        );
      })}

      {nodes.map((node) => {
        const isOffline = offlineNodes.includes(node.id);
        const isEffectivelyOffline = isMainServerDown || isOffline;
        const isHovered = hoveredNode === node.id;
        
        const color = isOffline ? '#ef4444' : (isMainServerDown ? '#71717a' : (node.type === 'server' ? '#8b5cf6' : '#10b981'));
        const scale = node.type === 'server' ? 1.1 : 1;
        const sphereSize = 0.25 * scale;

        return (
          <group key={`node-${node.id}`} position={node.position}>
            <Sphere 
              args={[sphereSize, 32, 32]} 
              onClick={(e) => {
                e.stopPropagation();
                toggleNode(node.id);
              }}
              onPointerOver={() => {
                document.body.style.cursor = 'pointer';
                setHoveredNode(node.id);
              }}
              onPointerOut={() => {
                document.body.style.cursor = 'auto';
                setHoveredNode(null);
              }}
            >
              <meshStandardMaterial 
                color={color} 
                emissive={color}
                emissiveIntensity={isEffectivelyOffline ? 0.1 : 0.4}
                roughness={0.3}
                metalness={0.7}
              />
            </Sphere>
            
            {isHovered && (
              <Html distanceFactor={8} position={[0, 0.5, 0]} center>
                <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-1.5 rounded-md shadow-lg whitespace-nowrap pointer-events-none scale-90 origin-bottom">
                  <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-400 mb-0.5">
                    {node.type === 'server' ? 'Authority' : 'Peer'}
                  </p>
                  <p className="text-[10px] font-medium text-zinc-900 dark:text-zinc-100">
                    {isOffline ? 'Offline' : (isMainServerDown ? 'Disconnected' : 'Active')}
                  </p>
                </div>
              </Html>
            )}

            <Text
              position={[0, -0.5, 0]}
              fontSize={0.15}
              color={isEffectivelyOffline ? '#71717a' : '#a1a1aa'}
              anchorX="center"
              anchorY="middle"
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
            >
              {node.label}
            </Text>
          </group>
        );
      })}
    </group>
  );
}

export default function NetworkDemo() {
  const [isCentralized, setIsCentralized] = useState(true);
  const [offlineNodes, setOfflineNodes] = useState<number[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleToggleMode = (centralized: boolean) => {
    setIsCentralized(centralized);
    setOfflineNodes([]);
    setShowSuccess(false);
  };

  const toggleNode = (id: number) => {
    setOfflineNodes(prev => {
      const isCurrentlyOffline = prev.includes(id);
      if (isCurrentlyOffline) return prev.filter(n => n !== id);
      
      const newOffline = [...prev, id];
      if (!isCentralized) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
      return newOffline;
    });
  };

  const isMainServerDown = isCentralized && offlineNodes.includes(0);

  return (
    <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-3xl p-4 md:p-8 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col items-center overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-xl md:text-2xl font-medium mb-1">Network Architecture</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Click nodes to simulate failures.</p>
        </div>
        <div className="flex bg-zinc-200/50 dark:bg-zinc-800/50 p-1 rounded-full border border-zinc-200 dark:border-zinc-700">
          <button 
            onClick={() => handleToggleMode(true)} 
            className={`px-4 md:px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${isCentralized ? 'bg-white dark:bg-zinc-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
          >
            Centralized
          </button>
          <button 
            onClick={() => handleToggleMode(false)} 
            className={`px-4 md:px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${!isCentralized ? 'bg-white dark:bg-zinc-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
          >
            Decentralized
          </button>
        </div>
      </div>

      <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 relative">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <NetworkScene 
            isCentralized={isCentralized} 
            offlineNodes={offlineNodes} 
            toggleNode={toggleNode} 
          />
        </Canvas>
        
        <AnimatePresence>
          {showSuccess && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-2 shadow-lg shadow-green-500/20 z-20 whitespace-nowrap"
            >
              <CheckCircle size={14} weight="bold" />
              Network Resilient: Routing around failure
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end pointer-events-none">
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 p-2 rounded-lg max-w-[140px] md:max-w-[200px]">
            <div className="flex items-center gap-1.5 mb-1">
              <Info size={12} className="text-blue-500" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Guide</span>
            </div>
            <p className="text-[9px] text-zinc-600 dark:text-zinc-400 leading-tight">
              Kill nodes to see how data reacts.
            </p>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 bg-white/80 dark:bg-zinc-900/80 px-2 py-1 rounded-full border border-zinc-200 dark:border-zinc-800">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-tight">Simulation Live</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className={`p-4 rounded-xl border transition-all ${isCentralized ? 'bg-blue-500/5 border-blue-500/20' : 'bg-zinc-100 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-800 opacity-50'}`}>
          <div className="flex items-center gap-2 mb-2">
            <Warning size={16} weight="bold" className="text-blue-500" />
            <h4 className="font-bold text-xs uppercase tracking-wide">Centralized</h4>
          </div>
          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
            One server holds the "truth." If it fails, the entire network dies. It is a single point of failure.
          </p>
          {isMainServerDown && (
            <div className="mt-3 p-2 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2">
              <XCircle size={14} className="text-red-500" />
              <span className="text-[9px] font-bold text-red-600 uppercase tracking-wider">Network Offline</span>
            </div>
          )}
        </div>

        <div className={`p-4 rounded-xl border transition-all ${!isCentralized ? 'bg-green-500/5 border-green-500/20' : 'bg-zinc-100 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-800 opacity-50'}`}>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle size={16} weight="bold" className="text-green-500" />
            <h4 className="font-bold text-xs uppercase tracking-wide">Decentralized</h4>
          </div>
          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
            No boss. Every node is a peer with equal authority. Killing one node doesn't stop the network.
          </p>
          {!isCentralized && offlineNodes.length > 0 && (
            <div className="mt-3 p-2 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2">
              <CheckCircle size={14} className="text-green-500" />
              <span className="text-[9px] font-bold text-green-600 uppercase tracking-wider">Resilient Mesh</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
