export interface PageRef {
  partId: string | null;
  moduleId: string | null;
  pageId: string;
}

export interface QuizState {
  currentQ: number;
  attempts: Record<string, number>;
  finished: boolean;
}

export type QuizStates = Record<string, QuizState>;

export type RightPaneTab = 'glossary' | 'resources' | 'leaderboard' | null;
