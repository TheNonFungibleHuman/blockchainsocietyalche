import { randomUUID } from 'node:crypto';
import { createClient } from '@sanity/client';
import { courseData } from '../src/data/courseData';

/**
 * Migrates the static course data (src/data/courseData) into Sanity.
 *
 * Usage:
 *   SANITY_PROJECT_ID=... SANITY_WRITE_TOKEN=... npm run seed:sanity
 *   npm run seed:sanity -- --dry-run   # validate locally without writing
 */

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;
const isDryRun = process.argv.includes('--dry-run');

// Every object inside a Sanity array requires a unique `_key`.
const key = () => randomUUID();

interface Span {
  _key: string;
  _type: 'span';
  text: string;
  marks?: string[];
}

interface Block {
  _key: string;
  _type: 'block';
  style?: string;
  listItem?: 'bullet' | 'number';
  level?: number;
  children: Span[];
}

interface CodeBlock {
  _key: string;
  _type: 'codeBlock';
  language?: string;
  code: string;
}

type PortableText = (Block | CodeBlock)[];

/** Parses inline **bold**, *italic*, _italic_ and `code` into portable-text spans. */
function parseInline(text: string): Span[] {
  const spans: Span[] = [];
  const regex = /(\*\*([^*]+)\*\*)|(`([^`]+)`)|(\*([^*]+)\*)|(_([^_]+)_)/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text))) {
    if (match.index > last) {
      spans.push({ _key: key(), _type: 'span', text: text.slice(last, match.index) });
    }
    if (match[1] !== undefined) {
      spans.push({ _key: key(), _type: 'span', text: match[2], marks: ['strong'] });
    } else if (match[3] !== undefined) {
      spans.push({ _key: key(), _type: 'span', text: match[4], marks: ['code'] });
    } else if (match[5] !== undefined) {
      spans.push({ _key: key(), _type: 'span', text: match[6], marks: ['em'] });
    } else if (match[7] !== undefined) {
      spans.push({ _key: key(), _type: 'span', text: match[8], marks: ['em'] });
    }
    last = regex.lastIndex;
  }

  if (last < text.length) {
    spans.push({ _key: key(), _type: 'span', text: text.slice(last) });
  }

  return spans;
}

/** Converts the markdown used in the course data into Sanity portable text. */
function markdownToBlocks(markdown: string): PortableText {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: PortableText = [];
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ _key: key(), _type: 'block', style: 'normal', children: parseInline(paragraph.join(' ')) });
      paragraph = [];
    }
  };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    const fenceMatch = /^\s*(~~~|```)\s*([a-zA-Z0-9-]*)\s*$/.exec(line);
    if (fenceMatch) {
      flushParagraph();
      const language = fenceMatch[2] || '';
      const codeLines: string[] = [];
      i += 1;
      while (i < lines.length && !/^\s*(~~~|```)\s*$/.test(lines[i])) {
        codeLines.push(lines[i]);
        i += 1;
      }
      blocks.push({ _key: key(), _type: 'codeBlock', language, code: codeLines.join('\n') });
      i += 1; // skip the closing fence
      continue;
    }

    const headingMatch = /^(#{1,6})\s+(.*)$/.exec(line);
    if (headingMatch) {
      flushParagraph();
      const style = `h${headingMatch[1].length}`;
      blocks.push({ _key: key(), _type: 'block', style, children: parseInline(headingMatch[2]) });
      i += 1;
      continue;
    }

    const bulletMatch = /^\s*[-*+]\s+(.*)$/.exec(line);
    if (bulletMatch) {
      flushParagraph();
      blocks.push({ _key: key(), _type: 'block', style: 'normal', listItem: 'bullet', level: 1, children: parseInline(bulletMatch[1]) });
      i += 1;
      continue;
    }

    const numberMatch = /^\s*\d+\.\s+(.*)$/.exec(line);
    if (numberMatch) {
      flushParagraph();
      blocks.push({ _key: key(), _type: 'block', style: 'normal', listItem: 'number', level: 1, children: parseInline(numberMatch[1]) });
      i += 1;
      continue;
    }

    if (line.trim() === '') {
      flushParagraph();
      i += 1;
      continue;
    }

    paragraph.push(line.trim());
    i += 1;
  }

  flushParagraph();
  return blocks;
}

function mapPage(page: any): Record<string, unknown> {
  const pageType = page.type || 'content';
  const result: Record<string, unknown> = {
    _key: key(),
    _type: 'page',
    pageId: page.id,
    title: page.title,
    pageType,
  };

  if (pageType === 'content') {
    result.content = markdownToBlocks(page.content || '');
  } else if (pageType === 'video') {
    if (page.videoUrl) result.videoUrl = page.videoUrl;
    if (page.youtubeId) result.youtubeId = page.youtubeId;
    if (page.isWelcome !== undefined) result.isWelcome = page.isWelcome;
  } else if (pageType === 'quiz') {
    result.questions = (page.questions || []).map((q: any) => ({
      _key: key(),
      _type: 'quizQuestion',
      id: q.id,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      hintPageId: q.hintPageId,
    }));
  } else if (pageType === 'interactive') {
    result.componentId = page.componentId;
  }

  return result;
}

function buildCourseDocument() {
  const introduction = ((courseData as any).introduction || []).map(mapPage);
  const parts = (courseData.parts as any[]).map((part) => ({
    _key: key(),
    _type: 'part',
    partId: part.id,
    title: part.title,
    description: part.description,
    modules: part.modules.map((module: any) => ({
      _key: key(),
      _type: 'module',
      moduleId: module.id,
      title: module.title,
      pages: module.pages.map(mapPage),
    })),
  }));

  const doc = {
    _id: `course-${courseData.id}`,
    _type: 'course',
    title: courseData.title,
    slug: { _type: 'slug', current: courseData.id },
    courseId: courseData.id,
    description: courseData.description,
    introduction,
    parts,
  };

  return { doc, introduction, parts };
}

async function main() {
  const { doc, introduction, parts } = buildCourseDocument();
  const pageCount =
    introduction.length +
    parts.reduce((acc, part) => acc + part.modules.reduce((a, m) => a + m.pages.length, 0), 0);

  if (isDryRun) {
    console.log(`Dry run: built course "${doc.title}" (${doc.courseId})`);
    console.log(`  intro pages: ${introduction.length}`);
    console.log(`  parts: ${parts.length}`);
    console.log(`  total pages: ${pageCount}`);

    // Spot-check a content page's converted blocks.
    let samplePage: any;
    outer: for (const part of parts) {
      for (const module of part.modules) {
        for (const page of module.pages) {
          if (page.pageType === 'content' && page.content?.length) {
            samplePage = page;
            break outer;
          }
        }
      }
    }
    if (samplePage) {
      const blocks = samplePage.content as any[];
      console.log(`  sample page: ${samplePage.pageId} (${blocks.length} blocks)`);
      console.log(`  first block: ${JSON.stringify(blocks[0]).slice(0, 120)}`);
    }

    // Spot-check a code block anywhere in the course.
    let codeBlock: any;
    outer: for (const part of parts) {
      for (const module of part.modules) {
        for (const page of module.pages) {
          for (const block of page.content || []) {
            if (block._type === 'codeBlock') {
              codeBlock = block;
              break outer;
            }
          }
        }
      }
    }
    if (codeBlock) {
      console.log(`  code block: ${JSON.stringify({ language: codeBlock.language, code: codeBlock.code.slice(0, 60) })}`);
    }
    return;
  }

  if (!projectId || !token) {
    console.error('Missing SANITY_PROJECT_ID or SANITY_WRITE_TOKEN. Set both and re-run.');
    process.exit(1);
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  });

  await client.createOrReplace(doc);
  console.log(`Seeded course "${doc.title}" (${doc.courseId}) with ${pageCount} pages.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
