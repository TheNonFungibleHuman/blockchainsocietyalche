import { writeFileSync } from 'node:fs';
import { courseData } from '../src/data/courseData';

const OUTFILE = 'supabase/migrations/202609150002_seed_blockchain_101_course.sql';
const INTRO_MODULE_ID = 'intro';

type CoursePage = {
  id: string;
  title: string;
  type?: string;
  isWelcome?: boolean;
  questions?: unknown[];
};

type CourseModule = {
  id: string;
  title: string;
  pages: CoursePage[];
};

type CoursePart = {
  id: string;
  title: string;
  description?: string;
  modules: CourseModule[];
};

function sqlString(value: unknown) {
  if (value === null || value === undefined) return 'null';
  return `'${String(value).replaceAll("'", "''")}'`;
}

function pageType(page: CoursePage) {
  const type = page.type || 'content';
  return ['content', 'video', 'quiz', 'interactive'].includes(type) ? type : 'content';
}

function pageXp(page: CoursePage) {
  if (page.type !== 'quiz') return 0;
  return Math.max((page.questions?.length || 0) * 10, 10);
}

const statements: string[] = [
  '-- Generated from src/data/courseData.ts by scripts/generate-supabase-course-seed.ts',
  '-- Re-run this script whenever stable course/module/page IDs change.',
  '',
  `insert into public.courses (id, title, description, is_published) values (${sqlString(courseData.id)}, ${sqlString(courseData.title)}, ${sqlString(courseData.description)}, true) on conflict (id) do update set title = excluded.title, description = excluded.description, is_published = excluded.is_published, updated_at = now();`,
  '',
  `insert into public.course_modules (course_id, module_id, part_id, title, position, is_published) values (${sqlString(courseData.id)}, ${sqlString(INTRO_MODULE_ID)}, null, 'Course Introduction', 0, true) on conflict (course_id, module_id) do update set part_id = excluded.part_id, title = excluded.title, position = excluded.position, is_published = excluded.is_published, updated_at = now();`,
];

let modulePosition = 1;
for (const part of courseData.parts as CoursePart[]) {
  for (const module of part.modules) {
    statements.push(
      `insert into public.course_modules (course_id, module_id, part_id, title, position, is_published) values (${sqlString(courseData.id)}, ${sqlString(module.id)}, ${sqlString(part.id)}, ${sqlString(module.title)}, ${modulePosition}, true) on conflict (course_id, module_id) do update set part_id = excluded.part_id, title = excluded.title, position = excluded.position, is_published = excluded.is_published, updated_at = now();`,
    );
    modulePosition += 1;
  }
}

statements.push('');

let pagePosition = 0;
for (const page of ((courseData as any).introduction || []) as CoursePage[]) {
  statements.push(
    `insert into public.course_pages (course_id, module_id, page_id, title, page_type, position, xp_value, is_required, is_published) values (${sqlString(courseData.id)}, ${sqlString(INTRO_MODULE_ID)}, ${sqlString(page.id)}, ${sqlString(page.title)}, ${sqlString(pageType(page))}, ${pagePosition}, ${pageXp(page)}, true, true) on conflict (course_id, module_id, page_id) do update set title = excluded.title, page_type = excluded.page_type, position = excluded.position, xp_value = excluded.xp_value, is_required = excluded.is_required, is_published = excluded.is_published, updated_at = now();`,
  );
  pagePosition += 1;
}

for (const part of courseData.parts as CoursePart[]) {
  for (const module of part.modules) {
    for (const page of module.pages) {
      statements.push(
        `insert into public.course_pages (course_id, module_id, page_id, title, page_type, position, xp_value, is_required, is_published) values (${sqlString(courseData.id)}, ${sqlString(module.id)}, ${sqlString(page.id)}, ${sqlString(page.title)}, ${sqlString(pageType(page))}, ${pagePosition}, ${pageXp(page)}, true, true) on conflict (course_id, module_id, page_id) do update set title = excluded.title, page_type = excluded.page_type, position = excluded.position, xp_value = excluded.xp_value, is_required = excluded.is_required, is_published = excluded.is_published, updated_at = now();`,
      );
      pagePosition += 1;
    }
  }
}

writeFileSync(OUTFILE, `${statements.join('\n')}\n`, 'utf8');
console.log(`Wrote ${OUTFILE} with ${pagePosition} pages and ${modulePosition} modules.`);
