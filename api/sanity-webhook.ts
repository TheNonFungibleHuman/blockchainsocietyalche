import { createClient } from '@sanity/client';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

/**
 * Vercel serverless function triggered by a Sanity "publish" webhook.
 * Re-syncs the Supabase course catalog so XP/progress validation matches
 * the pages/modules currently published in Sanity.
 *
 * Deployed at: POST /api/sanity-webhook
 * Secrets (set in Vercel): SANITY_WEBHOOK_SECRET, SANITY_PROJECT_ID,
 *                          SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 */

const PAGE = `{ "id": pageId, title, "type": pageType, questions }`;

const QUERY = `*[_type == "course"]{
  "id": courseId,
  title,
  description,
  "introduction": introduction[]${PAGE},
  "parts": parts[]{
    "id": partId,
    title,
    description,
    "modules": modules[]{
      "id": moduleId,
      title,
      "pages": pages[]${PAGE}
    }
  }
}`;

const INTRO_MODULE_ID = 'intro';

function pageType(page: { type?: string }) {
  const type = page.type || 'content';
  return ['content', 'video', 'quiz', 'interactive'].includes(type) ? type : 'content';
}

function pageXp(page: { type?: string; questions?: unknown[] }) {
  if (page.type !== 'quiz') return 0;
  return Math.max((page.questions?.length || 0) * 10, 10);
}

export default async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const secret = request.headers.get('x-sanity-webhook-secret') || url.searchParams.get('secret');
  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'content-type': 'application/json' } });
  }

  const sanityProjectId = process.env.SANITY_PROJECT_ID;
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!sanityProjectId || !supabaseUrl || !supabaseServiceKey) {
    return new Response(JSON.stringify({ error: 'Missing server configuration' }), { status: 500, headers: { 'content-type': 'application/json' } });
  }

  const sanity = createClient({
    projectId: sanityProjectId,
    dataset: process.env.SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
  });

  const supabase = createSupabaseClient(supabaseUrl, supabaseServiceKey, { auth: { persistSession: false } });

  const courses = await sanity.fetch<any[]>(QUERY);
  let totalPages = 0;

  for (const course of courses) {
    await supabase.from('courses').upsert(
      { id: course.id, title: course.title, description: course.description || '', is_published: true },
      { onConflict: 'id' },
    );

    const modules: any[] = [
      { course_id: course.id, module_id: INTRO_MODULE_ID, part_id: null, title: 'Course Introduction', position: 0, is_published: true },
    ];
    const pages: any[] = [];

    let modulePosition = 1;
    for (const part of course.parts || []) {
      for (const module of part.modules || []) {
        modules.push({
          course_id: course.id,
          module_id: module.id,
          part_id: part.id,
          title: module.title,
          position: modulePosition,
          is_published: true,
        });
        modulePosition += 1;
      }
    }

    let pagePosition = 0;
    for (const page of course.introduction || []) {
      pages.push({
        course_id: course.id,
        module_id: INTRO_MODULE_ID,
        page_id: page.id,
        title: page.title,
        page_type: pageType(page),
        position: pagePosition,
        xp_value: pageXp(page),
        is_required: true,
        is_published: true,
      });
      pagePosition += 1;
    }

    for (const part of course.parts || []) {
      for (const module of part.modules || []) {
        for (const page of module.pages || []) {
          pages.push({
            course_id: course.id,
            module_id: module.id,
            page_id: page.id,
            title: page.title,
            page_type: pageType(page),
            position: pagePosition,
            xp_value: pageXp(page),
            is_required: true,
            is_published: true,
          });
          pagePosition += 1;
        }
      }
    }

    const { error: modulesError } = await supabase.from('course_modules').upsert(modules, { onConflict: 'course_id,module_id' });
    if (modulesError) throw modulesError;

    const { error: pagesError } = await supabase.from('course_pages').upsert(pages, { onConflict: 'course_id,module_id,page_id' });
    if (pagesError) throw pagesError;

    totalPages += pagePosition;
  }

  return new Response(JSON.stringify({ ok: true, courses: courses.length, pages: totalPages }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
