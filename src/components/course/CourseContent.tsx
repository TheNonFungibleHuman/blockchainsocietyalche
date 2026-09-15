import { lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, Shield, ArrowRight } from '@phosphor-icons/react';
import Quiz from './Quiz';
import RichTextRenderer from './RichTextRenderer';
import DemoFallback from './DemoFallback';
import type { QuizStates } from './types';

const NetworkDemo = lazy(() => import('../NetworkDemo'));
const CexDexDemo = lazy(() => import('../demos/CexDexDemo'));
const TransactionLifecycleDemo = lazy(() => import('../demos/TransactionLifecycleDemo'));
const ConsensusSimulator = lazy(() => import('../demos/ConsensusSimulator'));
const IncentiveDesignLab = lazy(() => import('../demos/IncentiveDesignLab'));
const EscrowSimulator = lazy(() => import('../demos/EscrowSimulator'));
const TokenSupplySimulator = lazy(() => import('../demos/TokenSupplySimulator'));
const NFTMetadataInspector = lazy(() => import('../demos/NFTMetadataInspector'));
const BridgeFlowSimulator = lazy(() => import('../demos/BridgeFlowSimulator'));
const CareerPathFinder = lazy(() => import('../demos/CareerPathFinder'));

interface CourseContentProps {
  pageData: any;
  moduleData: any;
  userXP: number;
  videoLoading: boolean;
  setVideoLoading: (loading: boolean) => void;
  quizStates: QuizStates;
  handleUpdateQuizState: (moduleId: string, newState: any) => void;
  handleFinishQuiz: (moduleId: string) => Promise<void>;
  handleReviewRedirect: (pageId: string) => void;
  handleNext: () => void;
}

export default function CourseContent({
  pageData,
  moduleData,
  userXP,
  videoLoading,
  setVideoLoading,
  quizStates,
  handleUpdateQuizState,
  handleFinishQuiz,
  handleReviewRedirect,
  handleNext,
}: CourseContentProps) {
  return (
    <div className="flex-1">
      {pageData?.type === 'interactive' ? (
        <Suspense fallback={<DemoFallback />}>
        {pageData.componentId === 'SolscanIframe' ? (
          <div className="w-full h-[600px] border border-white/5 rounded-xl overflow-hidden flex flex-col bg-zinc-950">
            <div className="p-4 bg-[#080808] border-b border-white/5 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-sm mb-1 text-white">Live Blockchain Explorer</h3>
                <p className="text-xs text-zinc-400">Inspect real-time transactions happening on the Solana blockchain.</p>
              </div>
              <a
                href="https://solscan.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Open Solscan <ArrowRight size={14} />
              </a>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center" />
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-blue-500" />
            </div>
            <h4 className="text-lg font-medium mb-2 text-white">Security Restriction</h4>
            <p className="text-sm text-zinc-400 max-w-md mb-6">
              For security reasons, Solscan (like most financial platforms) prevents its website from being embedded inside other applications to protect users from clickjacking attacks.
            </p>
            <a
              href="https://solscan.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-medium rounded-xl hover:border-blue-500 transition-colors"
            >
              Open Explorer in New Tab
            </a>
          </div>
        ) : pageData.componentId === 'CexDexDemo' ? (
          <CexDexDemo />
        ) : pageData.componentId === 'TransactionLifecycleDemo' ? (
          <TransactionLifecycleDemo />
        ) : pageData.componentId === 'ConsensusSimulator' ? (
          <ConsensusSimulator />
        ) : pageData.componentId === 'IncentiveDesignLab' ? (
          <IncentiveDesignLab />
        ) : pageData.componentId === 'EscrowSimulator' ? (
          <EscrowSimulator />
        ) : pageData.componentId === 'token-supply-simulator' ? (
          <TokenSupplySimulator />
        ) : pageData.componentId === 'nft-metadata-inspector' ? (
          <NFTMetadataInspector />
        ) : pageData.componentId === 'bridge-flow-simulator' ? (
          <BridgeFlowSimulator />
        ) : pageData.componentId === 'CareerPathFinder' ? (
          <CareerPathFinder />
        ) : (
          <NetworkDemo />
        )}
        </Suspense>
      ) : pageData?.type === 'quiz' && moduleData ? (
        <Quiz
          questions={pageData.questions || []}
          userXP={userXP}
          onReviewRedirect={handleReviewRedirect}
          onComplete={handleNext}
          onFinishQuiz={() => handleFinishQuiz(moduleData.id)}
          quizState={quizStates[moduleData.id] || { currentQ: 0, attempts: {}, finished: false }}
          updateQuizState={(newState) => handleUpdateQuizState(moduleData.id, newState)}
        />
      ) : pageData?.type === 'video' ? (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className={`w-full rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl relative ${pageData.isWelcome ? "" : "aspect-video"}`}
               style={pageData.isWelcome ? { paddingBottom: '46.5%', position: 'relative' } : {}}>
            <AnimatePresence>
              {videoLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 bg-zinc-900 flex flex-col items-center justify-center gap-4 text-white"
                >
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 border-2 border-zinc-800 rounded-full" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-emerald-500 border-t-transparent rounded-full"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-500">Initializing Video Feed...</p>
                </motion.div>
              )}
            </AnimatePresence>
            <iframe
              key={pageData.videoUrl || pageData.youtubeId}
              width="100%"
              height="100%"
              src={pageData.videoUrl || `https://www.youtube.com/embed/${pageData.youtubeId}?rel=0`}
              title={pageData.title}
              frameBorder="0"
              allow={pageData.videoUrl ? "clipboard-write; encrypted-media; picture-in-picture" : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setVideoLoading(false)}
              className={pageData.isWelcome ? "absolute inset-0 w-full h-full z-0" : "relative z-0"}
            ></iframe>
          </div>
          <div className="bg-zinc-905/30 p-6 rounded-2xl border border-white/5">
            <h3 className="font-medium mb-2 flex items-center gap-2 text-white">
              <PlayCircle size={20} className="text-blue-500" /> {pageData.isWelcome ? 'Official Onboarding' : 'Tutorial Information'}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {pageData.isWelcome
                ? "This video is the official introduction and onboarding into the course. Watch the video carefully to understand the foundations of what it means to take the Blockchain 101 course, a guide to this LMS, and to unlock the full curriculum."
                : "This introductory video covers the key concepts you'll be exploring in this module. If you prefer to watch videos, this can serve as the course content before you attempt the quiz. The course content on the pages are more explanatory and you can go through if you prefer to read or go deeper into the subject"}
            </p>
          </div>
        </div>
      ) : (
        <div className="prose prose-zinc prose-invert prose-lg max-w-none">
          <RichTextRenderer value={pageData?.content} />
        </div>
      )}
    </div>
  );
}
