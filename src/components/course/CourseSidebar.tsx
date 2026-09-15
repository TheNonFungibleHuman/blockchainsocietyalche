import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Circle, PlayCircle, LockKey, CaretRight, CaretLeft, CaretDown, Trophy, List } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import type { PageRef } from './types';

interface CourseSidebarProps {
  course: any;
  isOpen: boolean;
  isCollapsed: boolean;
  progressPercentage: number;
  activeModule: string | null;
  activePage: string;
  completedPages: string[];
  expandedParts: string[];
  allPages: PageRef[];
  isPageLocked: (index: number) => boolean;
  onTogglePart: (partId: string) => void;
  onSelectPage: (partId: string | null, moduleId: string | null, pageId: string) => void;
  onCloseMobile: () => void;
  onCollapseDesktop: () => void;
}

export default function CourseSidebar({
  course,
  isOpen,
  isCollapsed,
  progressPercentage,
  activeModule,
  activePage,
  completedPages,
  expandedParts,
  allPages,
  isPageLocked,
  onTogglePart,
  onSelectPage,
  onCloseMobile,
  onCollapseDesktop,
}: CourseSidebarProps) {
  return (
    <aside className={`fixed inset-y-0 left-0 z-[70] w-85 bg-[#080808] border-r border-white/5 transform transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) md:relative ${isCollapsed ? 'md:-ml-85 opacity-0' : 'md:ml-0 opacity-100'} ${isOpen ? 'translate-x-[0px]' : '-translate-x-full md:translate-x-0'} flex flex-col h-full overflow-y-auto`}>
      <div className="p-8 border-b border-white/5 sticky top-0 z-10 bg-[#080808]/95 backdrop-blur-xl">
        {/* Sidebar Toggle/Back Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/learn" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-white transition-all cursor-pointer group">
            <CaretLeft weight="bold" className="group-hover:-translate-x-1 transition-transform" /> Back
          </Link>

          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                onCloseMobile();
              } else {
                onCollapseDesktop();
              }
            }}
            className="p-2 rounded-xl hover:bg-white/5 text-zinc-500 hover:text-white transition-all cursor-pointer"
            title="Collapse Sidebar"
          >
            <List size={22} />
          </button>
        </div>

        <div className="mb-6">
          <div className="text-[10px] font-bold text-zinc-400 mb-1 uppercase tracking-widest">Enrollment 01</div>
          <h2 className="font-serif text-2xl tracking-tight leading-tight text-white">{course.title}</h2>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
            <span className="text-zinc-400">Sync Status</span>
            <span className="text-white">{progressPercentage}%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-accent-gradient h-full rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        {/* Introduction Section */}
        {course.introduction?.map((page: any, idx: number) => {
          const isActive = activePage === page.id && activeModule === null;
          const isCompleted = completedPages.includes(page.id);
          const isLocked = isPageLocked(idx);
          return (
            <button
              key={page.id}
              onClick={() => {
                if (isLocked) return;
                onSelectPage(null, null, page.id);
              }}
              disabled={isLocked}
              className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                isLocked ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
              } ${
                isActive
                  ? 'bg-blue-900/30 text-white font-bold border-2 border-blue-500/50 shadow-lg'
                  : 'hover:bg-zinc-800/50 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {isLocked ? (
                <LockKey size={18} weight="bold" className="text-zinc-400 shrink-0" />
              ) : isCompleted ? (
                <CheckCircle size={18} weight="fill" className="text-emerald-500 shrink-0" />
              ) : isActive ? (
                <CaretRight size={18} weight="bold" className="text-blue-500 shrink-0" />
              ) : (
                <PlayCircle size={18} weight="bold" className="text-zinc-400 shrink-0" />
              )}
              <span className="text-sm font-medium truncate">{page.title}</span>
            </button>
          );
        })}

        {/* Course Parts */}
        {course.parts.map((part) => {
          const isExpanded = expandedParts.includes(part.id);
          return (
            <div key={part.id} className="mb-2">
              <button
                onClick={() => onTogglePart(part.id)}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors text-left cursor-pointer"
              >
                <span className="font-medium text-sm">{part.title}</span>
                <CaretDown className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 pr-2 py-2 flex flex-col gap-1 border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 mt-1">
                      {part.modules.map((module) => (
                        <div key={module.id} className="mb-2">
                          <div className="text-xs font-semibold text-zinc-400 mb-1 pl-2">
                            {module.title}
                          </div>
                          {module.pages.map((page) => {
                            const globalPageId = `${module.id}-${page.id}`;
                            const isCompleted = completedPages.includes(globalPageId) || (module.id === 'module-1.1' && completedPages.includes(page.id));
                            const isActive = activeModule === module.id && activePage === page.id;

                            // Enhanced Locking Logic
                            const pageIdx = allPages.findIndex(p => p.moduleId === module.id && p.pageId === page.id);
                            const isLocked = isPageLocked(pageIdx);

                            return (
                              <button
                                key={page.id}
                                onClick={() => {
                                  if (isLocked) return;
                                  onSelectPage(part.id, module.id, page.id);
                                }}
                                disabled={isLocked}
                                className={`w-full flex items-center gap-3 p-2 rounded-lg text-left transition-all ${isLocked ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'} ${
                                  isActive
                                    ? 'bg-blue-900/30 text-white font-medium hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-red-500/10'
                                    : isLocked
                                      ? 'text-zinc-600'
                                      : 'hover:bg-zinc-800/50 text-zinc-400 hover:text-zinc-200 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-red-500/5'
                                }`}
                              >
                                {isLocked ? (
                                  <LockKey size={16} weight="bold" className="text-zinc-400 dark:text-zinc-600 shrink-0" />
                                ) : isCompleted ? (
                                  <CheckCircle size={16} weight="fill" className="text-emerald-500 shrink-0" />
                                ) : isActive ? (
                                  <CaretRight size={16} weight="bold" className="text-blue-500 shrink-0" />
                                ) : page.type === 'video' ? (
                                  <PlayCircle size={16} weight="bold" className="text-zinc-400 shrink-0" />
                                ) : page.type === 'quiz' ? (
                                  <Trophy size={16} weight="bold" className="text-zinc-400 shrink-0" />
                                ) : (
                                  <Circle size={16} weight="bold" className="text-zinc-300 dark:text-zinc-700 shrink-0" />
                                )}
                                <span className="text-xs truncate">{page.title}</span>
                              </button>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
