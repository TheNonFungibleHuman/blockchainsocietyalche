import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Loader2, CheckCircle2, Shield } from 'lucide-react';
import { signInWithGoogle, signInWithMagicLink } from '../lib/lmsApi';

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export default function SignInModal({
  open,
  onClose,
  title = 'Sign in to Blocknauts',
  subtitle = 'Track your course progress, earn XP, and claim badges as you learn.',
}: SignInModalProps) {
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState<'google' | 'magic' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [magicSent, setMagicSent] = useState(false);

  const reset = () => {
    setEmail('');
    setBusy(null);
    setError(null);
    setMagicSent(false);
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  const handleGoogle = async () => {
    setBusy('google');
    setError(null);
    try {
      await signInWithGoogle();
      handleClose();
    } catch (err: any) {
      if (err?.code === 'auth/cancelled-popup-request' || err?.code === 'auth/popup-closed-by-user') {
        return;
      }
      setError(err?.message || 'Failed to sign in with Google.');
    } finally {
      setBusy(null);
    }
  };

  const handleMagicLink = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) {
      setError('Enter your email address.');
      return;
    }
    setBusy('magic');
    setError(null);
    try {
      await signInWithMagicLink(email);
      setMagicSent(true);
    } catch (err: any) {
      setError(err?.message || 'Failed to send the magic link.');
    } finally {
      setBusy(null);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-500/20 to-red-500/20 opacity-50 pointer-events-none" />

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10 cursor-pointer"
              aria-label="Close sign in"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 pt-12 flex flex-col items-center text-center relative z-10">
              <h3 className="text-2xl font-serif mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">{subtitle}</p>

              {magicSent ? (
                <div className="w-full p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    We sent a magic link to <span className="text-white font-medium">{email}</span>. Check your inbox and click the link to sign in.
                  </p>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="w-full p-3 mb-6 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs text-left flex items-start gap-2">
                      <Shield className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleMagicLink} className="w-full space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-black/50 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={busy !== null}
                      className="w-full py-3.5 bg-white/10 border border-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {busy === 'magic' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />}
                      Email me a magic link
                    </button>
                  </form>

                  <div className="flex items-center gap-3 w-full my-6">
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">or</span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <button
                    onClick={handleGoogle}
                    disabled={busy !== null}
                    className="w-full py-3.5 bg-white text-black rounded-xl font-medium hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {busy === 'google' ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.16-3.16C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                    )}
                    Continue with Google
                  </button>
                </>
              )}

              <p className="text-xs text-zinc-500 mt-6">
                By continuing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
