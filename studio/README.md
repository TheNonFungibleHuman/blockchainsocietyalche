# Blocknauts Sanity Studio

This is the headless CMS (admin UI) for authoring course content.

## Setup (one time)

1. Create a Sanity project at https://www.sanity.io (free tier is fine).
2. Note your **Project ID**.
3. Create `.env` in this `studio/` directory:

   ```
   SANITY_STUDIO_PROJECT_ID=your-project-id
   ```

4. Install and run:

   ```bash
   cd studio
   npm install
   npm run dev
   ```

   The Studio opens at `http://localhost:3333` by default.

## Authoring model

- **Course** → ordered **Parts** → ordered **Modules** → ordered **Pages**.
- A **Page** is one of four types (`content`, `video`, `quiz`, `interactive`), selected via the "Page Type" radio.
- `pageId` / `moduleId` / `partId` / `courseId` are stable IDs that **must match the Supabase course catalog** (used for XP + progress validation). Don't change them arbitrarily after publishing.

## Seeding existing content

Run the migration from the repo root (see `scripts/seed-sanity.ts`):

```bash
SANITY_PROJECT_ID=your-project-id SANITY_WRITE_TOKEN=your-token npm run seed:sanity
```
