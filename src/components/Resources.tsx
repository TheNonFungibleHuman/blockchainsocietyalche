import { useState, useEffect } from 'react';
import { Folder, BookOpen, Library, PlayCircle, Search, BookMarked, MonitorPlay } from 'lucide-react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

export default function Resources() {
  // Set light mode for this specific page to match the design
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    return () => {
      document.documentElement.classList.add('dark');
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-zinc-900 font-sans selection:bg-orange-200">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-24">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-2 text-orange-500 font-medium mb-6">
            <Folder className="w-5 h-5" />
            <span>Course Resources</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-6 text-zinc-900">
            Your Web3 Learning Toolkit
          </h1>
          
          <p className="text-xl text-zinc-600 leading-relaxed max-w-3xl">
            Access glossaries, recommended reading, and video materials to accelerate your learning and master blockchain concepts.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-zinc-200 mb-16"></div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Marketing Glossary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow group cursor-pointer flex flex-col h-full"
          >
            <div className="flex flex-col gap-6 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <BookOpen className="w-7 h-7 text-amber-800" />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-zinc-900 mb-2">Glossary</h2>
                <p className="text-zinc-500 leading-relaxed">
                  Master the language of web3. From traditional concepts to crypto-native innovations.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] rounded-2xl p-8 text-center mb-6 flex-grow flex flex-col justify-center">
              <div className="text-5xl font-serif text-amber-800 mb-2">54+</div>
              <div className="text-zinc-500 text-sm">Terms defined & explained</div>
            </div>

            <div className="bg-[#FAF7F2] rounded-xl p-4 flex items-center gap-3 text-zinc-600 text-sm">
              <Search className="w-4 h-4 text-amber-800" />
              <span>Marketing & crypto terms</span>
            </div>
          </motion.div>

          {/* Card 2: Books */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow group cursor-pointer flex flex-col h-full"
          >
            <div className="flex flex-col gap-6 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Library className="w-7 h-7 text-orange-500" />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-zinc-900 mb-2">Books</h2>
                <p className="text-zinc-500 leading-relaxed">
                  Essential reading for blockchain enthusiasts. Deep dives into decentralization and economics.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] rounded-2xl p-8 text-center mb-6 flex-grow flex flex-col justify-center">
              <div className="text-5xl font-serif text-orange-500 mb-2">12+</div>
              <div className="text-zinc-500 text-sm">Books reviewed & compared</div>
            </div>

            <div className="bg-[#FAF7F2] rounded-xl p-4 flex items-center gap-3 text-zinc-600 text-sm">
              <BookMarked className="w-4 h-4 text-orange-500" />
              <span>Curated reading lists</span>
            </div>
          </motion.div>

          {/* Card 3: Videos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow group cursor-pointer flex flex-col h-full"
          >
            <div className="flex flex-col gap-6 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <PlayCircle className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-zinc-900 mb-2">Videos</h2>
                <p className="text-zinc-500 leading-relaxed">
                  Watch and learn. Visual explanations of complex blockchain architectures and smart contracts.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] rounded-2xl p-8 text-center mb-6 flex-grow flex flex-col justify-center">
              <div className="text-5xl font-serif text-blue-600 mb-2">20+</div>
              <div className="text-zinc-500 text-sm">Video tutorials & lectures</div>
            </div>

            <div className="bg-[#FAF7F2] rounded-xl p-4 flex items-center gap-3 text-zinc-600 text-sm">
              <MonitorPlay className="w-4 h-4 text-blue-600" />
              <span>Interactive visual learning</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
