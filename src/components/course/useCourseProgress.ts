import { useEffect, useState } from 'react';
import { completePage, finishQuiz, getCourseProgress, getLeaderboard, markWelcomeWatched, saveQuizState } from '../../lib/lmsApi';
import type { AppUser, UserProfile } from '../../lib/lmsApi';
import type { QuizStates, RightPaneTab } from './types';

interface UseCourseProgressArgs {
  user: AppUser | null;
  profile: UserProfile | null;
  authLoading: boolean;
  refreshProfile: () => Promise<void>;
  rightPaneTab: RightPaneTab;
  courseId: string;
}

export function useCourseProgress({ user, profile, authLoading, refreshProfile, rightPaneTab, courseId }: UseCourseProgressArgs) {
  // Progress & Gamification State (local state synced with Supabase)
  const [completedPages, setCompletedPages] = useState<string[]>([]);
  const [userXP, setUserXP] = useState(0);
  const [quizStates, setQuizStates] = useState<QuizStates>({});
  const [videoLoading, setVideoLoading] = useState(true);

  // Leaderboard Data
  const [leaderboard, setLeaderboard] = useState<any[]>([]);

  // Sync XP with the Supabase profile on load, with a demo-mode fallback for guests.
  useEffect(() => {
    if (profile) {
      if (userXP !== profile.xp) setUserXP(profile.xp || 0);
    } else if (!authLoading && !user) {
      // Fallback for unauthenticated users (demo mode)
      if (userXP === 0) setUserXP(140);
    }
  }, [profile, user, authLoading]);

  // Load the active course's progress from Supabase.
  useEffect(() => {
    if (!user) {
      setCompletedPages([]);
      setQuizStates({});
      return;
    }

    let cancelled = false;
    getCourseProgress(user.id, courseId)
      .then(({ completedPages: pages, quizStates: quizzes }) => {
        if (cancelled) return;
        setCompletedPages(pages);
        setQuizStates(quizzes);
      })
      .catch(error => console.error('Failed to load course progress', error));

    return () => {
      cancelled = true;
    };
  }, [user, courseId]);

  // Fetch Leaderboard Data
  useEffect(() => {
    if (rightPaneTab === 'leaderboard') {
      getLeaderboard(user?.id, 10)
        .then(setLeaderboard)
        .catch(error => console.error('Error fetching leaderboard', error));
    }
  }, [rightPaneTab, user?.id]);

  const refreshTrustedProfile = async () => {
    try {
      await refreshProfile();
    } catch (error) {
      console.error('Failed to refresh profile', error);
    }
  };

  const handleUpdateQuizState = (moduleId: string, newState: any) => {
    setQuizStates(prev => {
      const nextModuleState = { ...(prev[moduleId] || { currentQ: 0, attempts: {}, finished: false }), ...newState };
      const updated = {
        ...prev,
        [moduleId]: nextModuleState
      };

      saveQuizState(courseId, moduleId, nextModuleState).catch(error => {
        console.error('Failed to save quiz state', error);
      });

      return updated;
    });
  };

  const handleFinishQuiz = async (moduleId: string) => {
    try {
      const result = await finishQuiz(courseId, moduleId);
      if (result?.total_xp !== undefined) {
        setUserXP(result.total_xp);
      }
      await refreshTrustedProfile();
    } catch (error) {
      console.error('Failed to finish quiz', error);
    }
  };

  const handleFinishWelcome = async () => {
    if (!user) return;
    try {
      await markWelcomeWatched();
      await refreshTrustedProfile();
    } catch (error) {
      console.error('Error setting welcomeWatched', error);
    }
  };

  const markPageComplete = async (moduleId: string | null, pageId: string) => {
    const globalPageId = moduleId ? `${moduleId}-${pageId}` : pageId;

    // Support legacy completion format (just pageId) for backwards compatibility
    const isAlreadyCompleted = completedPages.includes(globalPageId) || completedPages.includes(pageId);

    if (!isAlreadyCompleted) {
      const newCompleted = [...completedPages, globalPageId];
      setCompletedPages(newCompleted);
      try {
        const result = await completePage(courseId, moduleId, pageId);
        if (result?.total_xp !== undefined) {
          setUserXP(result.total_xp);
        }
        refreshTrustedProfile();
      } catch (error) {
        console.error('Failed to persist page completion', error);
      }
    }
  };

  return {
    completedPages,
    userXP,
    quizStates,
    videoLoading,
    setVideoLoading,
    leaderboard,
    handleUpdateQuizState,
    handleFinishQuiz,
    handleFinishWelcome,
    markPageComplete,
  };
}
