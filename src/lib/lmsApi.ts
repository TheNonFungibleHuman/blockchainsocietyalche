import { supabase } from './supabase';

export const COURSE_ID = 'blockchain-101';
export const INTRO_MODULE_ID = 'intro';

export interface AppUser {
  id: string;
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  xp: number;
  xpUpdatedAt?: number;
  completedPages: string[];
  completedModules: string[];
  quizStates: string;
  createdAt: string;
  country?: string;
  welcomeWatched?: boolean;
  role?: 'user' | 'admin';
  isTester?: boolean;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  displayName: string;
  country: string;
  xp: number;
  xpUpdatedAt: string | null;
  rank: number;
  photoURL: string | null;
  isUser: boolean;
  trend: 'up';
}

interface ProfileRow {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
  email: string | null;
  country: string | null;
  role: 'user' | 'admin';
  is_tester: boolean;
  welcome_watched: boolean;
  xp: number;
  xp_updated_at: string | null;
  created_at: string;
}

interface CourseProgressRow {
  module_id: string;
  page_id: string;
}

interface ModuleProgressRow {
  module_id: string;
}

interface QuizStateRow {
  module_id: string;
  current_question_index: number;
  finished: boolean;
  attempts?: Record<string, number> | null;
}

function toEpochMillis(value: string | null): number | undefined {
  if (!value) return undefined;
  const time = new Date(value).getTime();
  return Number.isFinite(time) ? time : undefined;
}

function toCompletedPageId(row: CourseProgressRow) {
  return row.module_id === INTRO_MODULE_ID ? row.page_id : `${row.module_id}-${row.page_id}`;
}

function mapProfile(row: ProfileRow, completedPages: string[], completedModules: string[], quizStates: Record<string, unknown>): UserProfile {
  return {
    uid: row.id,
    displayName: row.display_name || 'Blocknaut',
    email: row.email || '',
    photoURL: row.avatar_url || '',
    xp: row.is_tester ? 0 : row.xp || 0,
    xpUpdatedAt: toEpochMillis(row.xp_updated_at),
    completedPages,
    completedModules,
    quizStates: JSON.stringify(quizStates),
    createdAt: row.created_at,
    country: row.country || 'Global',
    welcomeWatched: row.welcome_watched,
    role: row.role,
    isTester: row.is_tester,
  };
}

export function mapSupabaseUser(user: import('@supabase/supabase-js').User): AppUser {
  return {
    id: user.id,
    uid: user.id,
    email: user.email ?? null,
    displayName: user.user_metadata?.full_name || user.user_metadata?.name || user.email || 'Blocknaut',
    photoURL: user.user_metadata?.avatar_url || user.user_metadata?.picture || null,
  };
}

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin,
    },
  });

  if (error) throw error;
  return data;
}

export async function signInWithMagicLink(email: string) {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email.trim(),
    options: {
      emailRedirectTo: window.location.origin,
    },
  });

  if (error) throw error;
  return data;
}

export async function logOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentProfile(userId: string): Promise<UserProfile | null> {
  const [profileResult, progressResult, modulesResult, quizResult] = await Promise.all([
    supabase
      .from('profiles')
      .select('id, display_name, avatar_url, email, country, role, is_tester, welcome_watched, xp, xp_updated_at, created_at')
      .eq('id', userId)
      .maybeSingle(),
    supabase
      .from('course_progress')
      .select('module_id, page_id')
      .eq('user_id', userId)
      .eq('course_id', COURSE_ID),
    supabase
      .from('module_progress')
      .select('module_id')
      .eq('user_id', userId)
      .eq('course_id', COURSE_ID),
    supabase
      .from('quiz_state')
      .select('module_id, current_question_index, finished, attempts')
      .eq('user_id', userId)
      .eq('course_id', COURSE_ID),
  ]);

  if (profileResult.error) throw profileResult.error;
  if (!profileResult.data) return null;
  if (progressResult.error) throw progressResult.error;
  if (modulesResult.error) throw modulesResult.error;
  if (quizResult.error) throw quizResult.error;

  const completedPages = ((progressResult.data || []) as CourseProgressRow[]).map(toCompletedPageId);
  const completedModules = ((modulesResult.data || []) as ModuleProgressRow[]).map(row => row.module_id);
  const quizStates = ((quizResult.data || []) as QuizStateRow[]).reduce<Record<string, unknown>>((acc, row) => {
    acc[row.module_id] = {
      currentQ: row.current_question_index,
      attempts: row.attempts || {},
      finished: row.finished,
    };
    return acc;
  }, {});

  return mapProfile(profileResult.data as ProfileRow, completedPages, completedModules, quizStates);
}

export async function updateProfile(displayName: string, country: string) {
  const { data, error } = await supabase.rpc('update_profile', {
    p_display_name: displayName,
    p_country: country,
  });

  if (error) throw error;
  return data;
}

export async function completePage(moduleId: string | null, pageId: string) {
  const { data, error } = await supabase.rpc('complete_page', {
    p_course_id: COURSE_ID,
    p_module_id: moduleId || INTRO_MODULE_ID,
    p_page_id: pageId,
  });

  if (error) throw error;
  return data?.[0] as { awarded_xp: number; total_xp: number } | undefined;
}

export async function markWelcomeWatched() {
  const { error } = await supabase.rpc('mark_welcome_watched');
  if (error) throw error;
}

export async function saveQuizState(
  moduleId: string,
  state: { currentQ?: number; attempts?: Record<string, number>; finished?: boolean },
) {
  const { error } = await supabase.rpc('save_quiz_state', {
    p_course_id: COURSE_ID,
    p_module_id: moduleId,
    p_current_question_index: state.currentQ ?? 0,
    p_attempts: state.attempts || {},
    p_finished: state.finished ?? false,
  });

  if (error) throw error;
}

export async function finishQuiz(moduleId: string) {
  const { data, error } = await supabase.rpc('finish_quiz', {
    p_course_id: COURSE_ID,
    p_module_id: moduleId,
  });

  if (error) throw error;
  return data?.[0] as { awarded_xp: number; total_xp: number } | undefined;
}

export async function getLeaderboard(currentUserId?: string | null, limit = 70): Promise<LeaderboardEntry[]> {
  const { data, error } = await supabase
    .from('leaderboard')
    .select('id, display_name, avatar_url, country, xp, xp_updated_at, rank')
    .order('rank', { ascending: true })
    .limit(limit);

  if (error) throw error;

  return (data || []).map((row: any) => {
    const displayName = row.display_name || 'Blocknaut';
    return {
      id: row.id,
      name: displayName.split(' ')[0],
      displayName,
      country: row.country || 'Global',
      xp: row.xp || 0,
      xpUpdatedAt: row.xp_updated_at || null,
      rank: row.rank || 0,
      photoURL: row.avatar_url || null,
      isUser: currentUserId === row.id,
      trend: 'up',
    };
  });
}
