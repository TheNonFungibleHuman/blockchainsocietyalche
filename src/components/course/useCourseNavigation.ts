import { useEffect, useMemo, useRef, useState } from 'react';
import type { UserProfile } from '../../lib/lmsApi';
import type { PageRef, QuizStates } from './types';

interface UseCourseNavigationArgs {
  course: any;
  profile: UserProfile | null;
  completedPages: string[];
  quizStates: QuizStates;
  markPageComplete: (moduleId: string | null, pageId: string) => Promise<void>;
  handleFinishWelcome: () => Promise<void>;
  setVideoLoading: (loading: boolean) => void;
}

export function useCourseNavigation({
  course,
  profile,
  completedPages,
  quizStates,
  markPageComplete,
  handleFinishWelcome,
  setVideoLoading,
}: UseCourseNavigationArgs) {
  // Navigation State
  const [activePart, setActivePart] = useState<string | null>(course.introduction?.[0] ? null : course.parts[0].id);
  const [activeModule, setActiveModule] = useState<string | null>(course.introduction?.[0] ? null : course.parts[0].modules[0].id);
  const [activePage, setActivePage] = useState<string>(course.introduction?.[0]?.id || course.parts[0].modules[0].pages[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const hasResumed = useRef(false);

  // UI State
  const [expandedParts, setExpandedParts] = useState<string[]>([course.parts[0].id]);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Flattened pages for robust forward/back navigation
  const allPages = useMemo<PageRef[]>(() => {
    const introPages = course.introduction?.map((page: any) => ({ partId: null, moduleId: null, pageId: page.id })) || [];
    const mainPages = course.parts?.flatMap((p: any) =>
      p.modules?.flatMap((m: any) =>
        m.pages?.map((page: any) => ({ partId: p.id, moduleId: m.id, pageId: page.id })) || []
      ) || []
    ) || [];
    return [...introPages, ...mainPages];
  }, [course]);

  // Derived Data
  const currentPartData = useMemo(() => course.parts.find((p: any) => p.id === activePart), [course, activePart]);
  const currentModuleData = useMemo(() => currentPartData?.modules.find((m: any) => m.id === activeModule), [currentPartData, activeModule]);
  const currentPageData = useMemo(() => {
    if (!activeModule) {
      return course.introduction?.find((p: any) => p.id === activePage);
    }
    return currentModuleData?.pages.find((p: any) => p.id === activePage);
  }, [currentModuleData, activeModule, activePage, course]);

  const currentIndex = allPages.findIndex(p => p.moduleId === activeModule && p.pageId === activePage);
  const publishedPartIds = useMemo(() => new Set(course.parts.map((part: any) => part.id)), [course]);

  // Scroll to top and handle video loading on page change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }

    // Only trigger video loading if it's a video page
    if (currentPageData?.type === 'video') {
      setVideoLoading(true);
    }
  }, [activePage, activeModule, currentPageData?.type, setVideoLoading]);

  // Resume logic: Jump to the most recently completed page if we haven't already
  useEffect(() => {
    if (!hasResumed.current && completedPages.length > 0) {
      hasResumed.current = true;

      let maxIndex = -1;
      allPages.forEach((page, index) => {
        const globalId = page.moduleId ? `${page.moduleId}-${page.pageId}` : page.pageId;
        if (completedPages.includes(globalId) || completedPages.includes(page.pageId)) {
          maxIndex = index;
        }
      });

      if (maxIndex !== -1) {
        const lastPage = allPages[maxIndex];
        // Determine the first page ID to check if we are still at the start
        const firstPageId = course.introduction?.[0]?.id || course.parts[0].modules[0].pages[0].id;

        if (activePage === firstPageId) {
          setActivePart(lastPage.partId);
          setActiveModule(lastPage.moduleId);
          setActivePage(lastPage.pageId);

          // Expand the part containing the page
          if (lastPage.partId && !expandedParts.includes(lastPage.partId)) {
            setExpandedParts(prev => [...prev, lastPage.partId]);
          }
        }
      }
    }
  }, [completedPages, allPages, activePage, expandedParts, course]);

  const isPageLocked = (pageIndex: number) => {
    if (pageIndex <= 0) return false;

    if (profile?.isTester) return false;

    const page = allPages[pageIndex];

    // Only allow navigation into published course parts.
    if (page.partId && !publishedPartIds.has(page.partId)) {
      return true;
    }

    // 2. Welcome Video Lock Check
    // We check both the Supabase profile and the immediate local completedPages state
    // index 0 is always the welcome video intro
    const welcomePage = allPages[0];
    const welcomeGlobalId = welcomePage.moduleId ? `${welcomePage.moduleId}-${welcomePage.pageId}` : welcomePage.pageId;
    const hasWatchedWelcome = !!profile?.welcomeWatched || completedPages.includes(welcomeGlobalId) || completedPages.includes(welcomePage.pageId);

    if (pageIndex > 0 && !hasWatchedWelcome) {
      return true;
    }

    // 3. Sequential lock: Previous page must be completed
    const prevPage = allPages[pageIndex - 1];
    const prevGlobalId = prevPage.moduleId ? `${prevPage.moduleId}-${prevPage.pageId}` : prevPage.pageId;
    let isPrevCompleted = completedPages.includes(prevGlobalId) || completedPages.includes(prevPage.pageId);

    // Fallback: If the previous page is in a module whose quiz is already finished, treat it as completed
    if (!isPrevCompleted && prevPage.moduleId && quizStates[prevPage.moduleId]?.finished) {
      isPrevCompleted = true;
    }

    if (!isPrevCompleted) return true;

    return false;
  };

  const togglePart = (partId: string) => {
    setExpandedParts(prev =>
      prev.includes(partId) ? prev.filter(id => id !== partId) : [...prev, partId]
    );
  };

  const selectPage = (partId: string | null, moduleId: string | null, pageId: string) => {
    setActivePart(partId);
    setActiveModule(moduleId);
    setActivePage(pageId);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const handleNext = async () => {
    // Unlock course if this was the welcome video
    if (currentPageData?.isWelcome) {
      handleFinishWelcome();
    }

    await markPageComplete(activeModule, activePage);

    if (currentIndex < allPages.length - 1) {
      const nextIndex = currentIndex + 1;

      if (!profile?.isTester) {
        const nextPage = allPages[nextIndex];
        if (nextPage.partId && !publishedPartIds.has(nextPage.partId)) {
          return;
        }
      }

      const next = allPages[nextIndex];
      setActivePart(next.partId);
      setActiveModule(next.moduleId);
      setActivePage(next.pageId);

      // Auto-expand the part if we navigated into a new one
      if (next.partId && !expandedParts.includes(next.partId)) {
        setExpandedParts(prev => [...prev, next.partId]);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prev = allPages[currentIndex - 1];
      setActivePart(prev.partId);
      setActiveModule(prev.moduleId);
      setActivePage(prev.pageId);

      if (prev.partId && !expandedParts.includes(prev.partId)) {
        setExpandedParts(currentExpanded => [...currentExpanded, prev.partId]);
      }
    }
  };

  const handleReviewRedirect = (pageId: string) => {
    const target = allPages.find(p => p.pageId === pageId);
    if (target) {
      setActivePart(target.partId);
      setActiveModule(target.moduleId);
      setActivePage(target.pageId);
    }
  };

  return {
    activePart,
    activeModule,
    activePage,
    isSidebarOpen,
    setIsSidebarOpen,
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    expandedParts,
    scrollRef,
    allPages,
    currentModuleData,
    currentPageData,
    currentIndex,
    isPageLocked,
    togglePart,
    selectPage,
    handleNext,
    handlePrev,
    handleReviewRedirect,
  };
}
