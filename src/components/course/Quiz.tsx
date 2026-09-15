import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle, X as XIcon } from '@phosphor-icons/react';

interface QuizProps {
  questions: any[];
  userXP: number;
  onReviewRedirect: (id: string) => void;
  onComplete: () => void;
  onFinishQuiz: () => Promise<void>;
  quizState: { currentQ: number; attempts: Record<string, number>; finished: boolean };
  updateQuizState: (state: any) => void;
}

export default function Quiz({
  questions,
  userXP,
  onReviewRedirect,
  onComplete,
  onFinishQuiz,
  quizState,
  updateQuizState,
}: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  const { currentQ, attempts, finished } = quizState;

  if (finished) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full border border-white/5 rounded-3xl p-12 bg-zinc-900/50 text-center">
        <div className="w-24 h-24 bg-emerald-950/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/20">
          <Trophy size={48} weight="duotone" />
        </div>
        <h3 className="text-4xl font-serif mb-4 text-white">Module Complete!</h3>
        <p className="text-zinc-300 mb-10 text-lg">You've successfully passed the quiz and earned XP.</p>
        <button onClick={onComplete} className="px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-medium transition-all shadow-lg shadow-blue-500/25 hover:scale-105 cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 hover:text-white">
          Continue to Next Module
        </button>
      </motion.div>
    );
  }

  const question = questions[currentQ];

  const handleSubmit = () => {
    const qAttempts = attempts[question.id] || 0;

    if (selected === question.correctAnswer) {
      setStatus('correct');
      updateQuizState({ attempts: { ...attempts, [question.id]: qAttempts + 1 } });
    } else {
      setStatus('incorrect');
      updateQuizState({ attempts: { ...attempts, [question.id]: qAttempts + 1 } });
    }
  };

  const handleNextQ = () => {
    if (currentQ < questions.length - 1) {
      updateQuizState({ currentQ: currentQ + 1 });
      setSelected(null);
      setStatus('idle');
    } else {
      updateQuizState({ finished: true });
      onFinishQuiz();
    }
  };

  return (
    <div className="w-full border border-white/10 rounded-3xl p-8 md:p-10 bg-[#0a0a0a]/60 backdrop-blur-xl shadow-2xl">
      <div className="flex justify-between items-center mb-10">
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Objective {currentQ + 1} of {questions.length}</span>
        <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
          <Trophy size={16} className="text-blue-500" />
          <span className="text-sm font-mono font-bold text-blue-500">
            {userXP} XP
          </span>
        </div>
      </div>

      <h3 className="font-serif text-2xl md:text-3xl font-medium mb-10 leading-snug text-white">{question.question}</h3>

      <div className="space-y-4 mb-10">
        {question.options.map((opt: string, idx: number) => (
          <button
            key={idx}
            onClick={() => status === 'idle' && setSelected(idx)}
            disabled={status !== 'idle'}
            className={`w-full text-left p-6 rounded-2xl border transition-all cursor-pointer group relative overflow-hidden ${
              selected === idx 
                ? status === 'idle' 
                  ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]' 
                  : status === 'correct'
                    ? 'border-emerald-500 bg-emerald-500/10'
                    : 'border-red-500 bg-red-500/10'
                : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
            }`}
          >
            {selected === idx && status === 'idle' && (
              <motion.div layoutId="quiz-select" className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
            )}
            <div className="flex items-center gap-4 relative z-10">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border transition-colors ${
                selected === idx
                  ? status === 'idle'
                    ? 'bg-blue-500 border-transparent text-white'
                    : status === 'correct'
                      ? 'bg-emerald-500 border-transparent text-white'
                      : 'bg-red-500 border-transparent text-white'
                  : 'bg-white/5 border-white/10 text-zinc-500 group-hover:text-white group-hover:border-white/20'
              }`}>
                {String.fromCharCode(65 + idx)}
              </div>
              <span className={`text-lg transition-colors ${selected === idx ? 'text-white font-medium' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                {opt}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="min-h-[80px]">
        {status === 'idle' ? (
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className="w-full py-5 rounded-2xl bg-white text-black font-bold disabled:opacity-20 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-98 transition-all text-lg cursor-pointer hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Authenticate Response
          </button>
        ) : status === 'correct' ? (
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-emerald-400">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle size={28} weight="fill" />
              </div>
              <div>
                <span className="block font-bold text-lg">Signature Verified</span>
                <span className="text-sm opacity-60">
                  {attempts[question.id] === 1 ? 'Correct answer recorded' : 'Protocol confirmed (Retake complete)'}
                </span>
              </div>
            </div>
            <button onClick={handleNextQ} className="px-8 py-4 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 cursor-pointer">
              {currentQ < questions.length - 1 ? 'Proceed to Next Task' : 'Finalize Session'}
            </button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex flex-col items-center sm:items-stretch gap-6">
            <div className="flex items-center gap-4 text-red-400">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <XIcon size={24} weight="bold" />
              </div>
              <div>
                <span className="block font-bold text-lg text-red-400">Verification Failed</span>
                <p className="text-sm opacity-60">
                  Almost! don't worry, learning takes time. Review the concept and try again.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:justify-end">
              <button onClick={() => onReviewRedirect(question.hintPageId)} className="px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 text-sm font-bold hover:bg-white/10 transition-colors cursor-pointer">
                Review Concept
              </button>
              <button onClick={() => { setSelected(null); setStatus('idle'); }} className="px-6 py-3 rounded-xl bg-red-500 text-white text-sm font-bold hover:bg-red-400 transition-colors shadow-lg shadow-red-500/20 cursor-pointer">
                Try Access Again
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
