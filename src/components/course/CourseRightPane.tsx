import { motion, AnimatePresence } from 'framer-motion';
import { BookBookmark, FileText, Trophy, X as XIcon } from '@phosphor-icons/react';
import type { RightPaneTab } from './types';

interface CourseRightPaneProps {
  tab: RightPaneTab;
  onClose: () => void;
  leaderboard: any[];
}

export default function CourseRightPane({ tab, onClose, leaderboard }: CourseRightPaneProps) {
  return (
    <AnimatePresence>
      {tab && (
        <motion.aside
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: window.innerWidth < 768 ? '100%' : 350, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          className="fixed md:relative inset-y-0 right-0 z-50 md:z-auto md:shrink-0 border-l border-white/5 bg-[#080808] overflow-hidden flex flex-col shadow-2xl md:shadow-none"
        >
          <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#080808]">
            <h3 className="font-medium capitalize flex items-center gap-2 text-white">
              {tab === 'glossary' && <BookBookmark className="text-blue-500" />}
              {tab === 'resources' && <FileText className="text-blue-500" />}
              {tab === 'leaderboard' && <Trophy className="text-orange-500" />}
              {tab}
            </h3>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-white/5 text-zinc-400 transition-colors cursor-pointer"
            >
              <XIcon size={16} />
            </button>
          </div>

          <div className="p-6 overflow-y-auto flex-1">
            {tab === 'glossary' && (
              <div className="space-y-6">
                <div className="text-center p-4 text-sm text-zinc-500">
                  Glossary terms for this module will appear here.
                </div>
              </div>
            )}

            {tab === 'resources' && (
              <div className="space-y-4">
                <div className="text-center p-4 text-sm text-zinc-500">
                  Additional resources for this module will appear here.
                </div>
              </div>
            )}

            {tab === 'leaderboard' && (
              <div className="space-y-4">
                {leaderboard.length > 0 ? leaderboard.map((user) => (
                  <div key={user.rank} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-medium w-4 ${user.rank <= 3 ? 'text-orange-500' : 'text-zinc-400'}`}>{user.rank}</span>
                      <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium overflow-hidden text-white">
                        {user.photoURL ? <img src={user.photoURL} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" /> : user.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-white">{user.name}</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">{user.xp} XP</span>
                  </div>
                )) : (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <div className="w-8 h-8 border-2 border-zinc-200 dark:border-zinc-800 border-t-blue-500 rounded-full animate-spin" />
                    <p className="text-xs text-zinc-500 italic font-serif">Contacting ground control...</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
