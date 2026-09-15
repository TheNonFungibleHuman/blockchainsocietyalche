# Blocknauts Sanity Studio

This is the headless CMS (admin UI) for authoring course content.

**Deployed:** https://blockchain-cms.vercel.app (Vercel project with Root Directory = `studio`).

## Run locally

```bash
npm install
npm run dev   # → http://localhost:3333
```

The project ID is hardcoded in `sanity.config.ts` / `sanity.cli.ts` (`vaiyu1ge`); `SANITY_STUDIO_PROJECT_ID` overrides it if needed.

## Authoring model

- **Course** → ordered **Parts** → ordered **Modules** → ordered **Pages**.
- A **Page** is one of four types (`content`, `video`, `quiz`, `interactive`), selected via the "Page Type" radio.
- `pageId` / `moduleId` / `partId` / `courseId` are stable IDs that **must match the Supabase course catalog** (used for XP + progress validation). Don't change them arbitrarily after publishing.

## Seeding existing content

Run the migration from the repo root (see `scripts/seed-sanity.ts`):

```bash
SANITY_PROJECT_ID=your-project-id SANITY_WRITE_TOKEN=your-token npm run seed:sanity
```
