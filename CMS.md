# Content Management (Sanity)

Course content is authored in a headless **Sanity** CMS, then read by the learner app. Supabase continues to own auth, progress, XP, and the course catalog used to validate completion against fake page IDs.

## How it fits together

```
Learner app (this repo)                 Sanity Studio (hosted or local)
  /learn/course/:slug                    author content, images, quizzes, videos
  reads published content  ←───────────  click Publish
  (Supabase: auth/progress/XP)           (drafts, live preview, version history)
  /api/sanity-webhook  ←────────────────  Sanity "publish" webhook → re-sync catalog
```

- **Content** lives in Sanity (`Course → Part → Module → Page`).
- **Progress/XP/locks** stay in Supabase (unchanged).
- Stable IDs (`courseId`, `partId`, `moduleId`, `pageId`) link the two and **must match** the Supabase catalog.

## Hosted Studio (no local dev)

Deploy the Studio to Sanity's hosting and access it at `https://vaiyu1ge.sanity.studio`:

```bash
cd studio
npm install
npx sanity login        # one-time browser login
npm run deploy          # prints the hosted Studio URL
```

The project ID (`vaiyu1ge`) is already configured in `studio/sanity.config.ts` / `sanity.cli.ts`; `SANITY_STUDIO_PROJECT_ID` overrides it if needed.

## Tokens

Create **two** API tokens at https://www.sanity.io/manage → API → Tokens:

| Token | Permission | Used for |
|-------|-----------|----------|
| Write token | Editor | `seed:sanity`, `sync:catalog` (keep secret) |
| Viewer token | Viewer (read-only) | live draft preview (`VITE_SANITY_READ_TOKEN`) |

## Learner app env (`.env.local`)

```
VITE_SANITY_PROJECT_ID=vaiyu1ge
VITE_SANITY_DATASET=production
VITE_SANITY_READ_TOKEN=your-viewer-token   # for live preview
```

## Authoring workflow

1. Open the Studio, edit a Course (or add Parts/Modules/Pages inline).
2. Each **Page** has a type: `content` (rich text + inline images), `video`, `quiz`, or `interactive` (a `componentId` placeholder for a live demo).
3. **Preview** before publishing via the **Presentation** tool.
4. **Publish** to make it live (and auto-sync the catalog via the webhook).

## Live draft preview (instant)

The Studio's **Presentation** tool iframes the learner app at `/learn/course/{slug}?preview=true`. When that param is present (and `VITE_SANITY_READ_TOKEN` is set), the reader uses `@sanity/preview-kit` (`LiveQueryProvider` + `useLiveQuery`) to stream draft content **live** — edits appear in the iframe as you type.

- `previewUrl` is configurable via `SANITY_STUDIO_PREVIEW_URL` (default `http://localhost:3000`). Set it to your deployed learner-app URL when it's on Vercel.

## Keeping the Supabase catalog in sync

Two options:

**Manual** (generate a migration file):
```bash
SANITY_PROJECT_ID=vaiyu1ge npm run sync:catalog -- --dry-run
SANITY_PROJECT_ID=vaiyu1ge npm run sync:catalog   # writes supabase/migrations/*_sync_catalog_from_sanity.sql
```

**Automatic** (webhook): deploy the repo to Vercel, set these secrets, and add a Sanity webhook to `POST https://<your-app>/api/sanity-webhook`:

```
SANITY_WEBHOOK_SECRET=your-random-secret
SANITY_PROJECT_ID=vaiyu1ge
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

In Sanity, create the webhook (API → Webhooks) for the "publish" event, pointing at `/api/sanity-webhook?secret=your-random-secret` (or send `x-sanity-webhook-secret` as a header).

## What's wired

- ✅ Sanity Studio schema (`studio/schemaTypes/`).
- ✅ Hosted Studio deploy (`sanity deploy`).
- ✅ Presentation tool + instant live preview (`@sanity/preview-kit`).
- ✅ Frontend fetch layer (`src/lib/sanity.ts`, `src/lib/courseContent.ts`).
- ✅ Portable-text renderer (`RichTextRenderer.tsx`) with inline images + demo code blocks.
- ✅ Reader wired to fetch by slug, with loading/error states.
- ✅ AcademyHub catalog lists courses from Sanity (`getCourses`).
- ✅ Seed migration (`scripts/seed-sanity.ts`) + catalog sync (`scripts/sync-catalog.ts`).
- ✅ Auto-sync webhook (`api/sanity-webhook.ts`) — deploy to Vercel to activate.
