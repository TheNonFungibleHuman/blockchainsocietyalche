import { writeFileSync } from 'node:fs';
import { createClient } from '@sanity/client';
import { generateCatalogSql, type CourseCatalog } from './catalogSql';

/**
 * Generates the Supabase catalog SQL from published Sanity content, so XP
 * validation stays in sync with the pages/modules you author in the CMS.
 *
 * Usage:
 *   SANITY_PROJECT_ID=... npm run sync:catalog -- --dry-run
 *   SANITY_PROJECT_ID=... npm run sync:catalog            # writes a migration file
 */

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || 'production';
const isDryRun = process.argv.includes('--dry-run');

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

function timestamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

async function main() {
  if (!projectId) {
    console.error('Missing SANITY_PROJECT_ID. Set it and re-run.');
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: false });
  const courses = await client.fetch<CourseCatalog[]>(QUERY);

  if (courses.length === 0) {
    console.log('No published courses found in Sanity.');
    return;
  }

  const sql = courses.map((course) => generateCatalogSql(course)).join('\n');

  if (isDryRun) {
    console.log(`Dry run: ${courses.length} course(s) found.`);
    for (const course of courses) {
      const pages = (course.introduction?.length || 0) + course.parts.reduce((a, p) => a + p.modules.reduce((b, m) => b + m.pages.length, 0), 0);
      console.log(`  - ${course.id}: ${pages} pages, ${course.parts.length} parts`);
    }
    return;
  }

  const outfile = `supabase/migrations/${timestamp()}_sync_catalog_from_sanity.sql`;
  writeFileSync(outfile, sql, 'utf8');
  console.log(`Wrote ${outfile} (${courses.length} course(s)).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
