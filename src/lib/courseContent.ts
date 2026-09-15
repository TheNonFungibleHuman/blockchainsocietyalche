import { sanityClient } from './sanity';

export interface QuizQuestionContent {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  hintPageId: string;
}

export interface PageContent {
  id: string;
  title: string;
  type: string;
  content?: unknown[];
  videoUrl?: string;
  youtubeId?: string;
  isWelcome?: boolean;
  questions?: QuizQuestionContent[];
  componentId?: string;
}

export interface ModuleContent {
  id: string;
  title: string;
  pages: PageContent[];
}

export interface PartContent {
  id: string;
  title: string;
  description?: string;
  modules: ModuleContent[];
}

export interface CourseContent {
  id: string;
  title: string;
  description: string;
  introduction: PageContent[];
  parts: PartContent[];
}

const PAGE_PROJECTION = `{
  "id": pageId,
  title,
  "type": pageType,
  content,
  videoUrl,
  youtubeId,
  isWelcome,
  questions,
  componentId
}`;

export const COURSE_BY_SLUG_QUERY = `
  *[_type == "course" && slug.current == $slug][0]{
    "id": courseId,
    title,
    description,
    "introduction": introduction[]${PAGE_PROJECTION},
    "parts": parts[]{
      "id": partId,
      title,
      description,
      "modules": modules[]{
        "id": moduleId,
        title,
        "pages": pages[]${PAGE_PROJECTION}
      }
    }
  }
`;

const COURSES_QUERY = `
  *[_type == "course"] | order(title asc){
    "id": courseId,
    title,
    description,
    "slug": slug.current
  }
`;

export async function getCourseBySlug(slug: string): Promise<CourseContent | null> {
  return sanityClient.fetch<CourseContent | null>(COURSE_BY_SLUG_QUERY, { slug });
}

export async function getCourses(): Promise<{ id: string; title: string; description: string; slug: string }[]> {
  return sanityClient.fetch(COURSES_QUERY);
}
