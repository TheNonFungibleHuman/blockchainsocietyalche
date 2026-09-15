# Blocknauts / ALCHE — Web3 Bootcamp LMS

An interactive learning platform and landing site for **ALCHE**, the blockchain society of The African Leadership College of Higher Education (Pamplemousses, Mauritius). It combines a cinematic landing page, a Blocknauts bootcamp page, and a gamified self-paced course called **Blockchain 101**.

Built with React 19, TypeScript, Vite, Tailwind CSS, and Supabase. Auth, profiles, progress, quiz state, XP events, and leaderboard data are handled by Supabase Auth + Postgres + Row Level Security.

## Features

- Marketing pages for the society and Blocknauts bootcamp.
- Academy hub at `/learn`.
- Interactive course reader at `/learn/course`.
- Google OAuth sign-in via Supabase Auth.
- Supabase-backed profiles, country/region settings, progress tracking, quiz state, and XP.
- Leaderboard powered by a Postgres `leaderboard` view instead of client-side ranking hacks.
- Interactive blockchain simulations for hashing, blocks, chains, consensus, networks, tokens, NFTs, bridges, escrow, careers, and transaction lifecycle.
- PostHog and Google Analytics support.

## Tech Stack

| Layer | Choices |
| --- | --- |
| Framework | React 19, React Router 7, TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | lucide-react, Phosphor Icons |
| 3D / visuals | three, `@react-three/fiber`, `@react-three/drei`, Recharts |
| Content | `react-markdown`, static course data |
| Backend | Supabase Auth + Postgres + RLS + RPC functions |
| Hosting | Vercel |

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The dev server runs with Vite on http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite on port 3000 |
| `npm run build` | Build the production app to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Type-check with `tsc --noEmit` |
| `npm run clean` | Remove `dist/` |
| `npm run generate:supabase-course-seed` | Regenerate the course catalog seed migration from `src/data/courseData.ts` |

## Environment Variables

Create `.env.local` in the project root:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_PUBLIC_POSTHOG_PROJECT_TOKEN=
VITE_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
VITE_PUBLIC_GA_ID=G-VJJR6M3KP7
```

Only `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are required for auth/backend features. Do **not** put Supabase service-role keys in the frontend.

## Supabase Setup

Apply the migrations in order:

```txt
supabase/migrations/202609150001_initial_lms_schema.sql
supabase/migrations/202609150002_seed_blockchain_101_course.sql
```

The first migration creates:

- `profiles`
- `courses`
- `course_modules`
- `course_pages`
- `course_progress`
- `module_progress`
- `quiz_state`
- `quiz_attempts`
- `xp_events`
- `admin_audit_log`
- `leaderboard` view
- secure RPC functions such as `complete_page`, `finish_quiz`, `update_profile`, and `mark_welcome_watched`

The second migration seeds the valid course/module/page IDs from `src/data/courseData.ts`. This is important because XP can only be awarded for server-known, published pages/quizzes.

If course IDs, module IDs, or page IDs change, regenerate the seed migration:

```bash
npm run generate:supabase-course-seed
```

## Data Integrity Model

The frontend no longer writes trusted fields like `xp`, `role`, or `is_tester` directly. Instead:

- profile edits go through `update_profile`
- page completion goes through `complete_page`
- quiz completion goes through `finish_quiz`
- XP is stored as auditable rows in `xp_events`
- total XP is recalculated from `xp_events`
- testers are excluded from the `leaderboard` view

This prevents browser-side XP injection and role tampering.

## Project Structure

```txt
src/
├── App.tsx
├── main.tsx
├── index.css
├── contexts/
│   ├── AuthContext.tsx        # Supabase session + profile state
│   └── ThemeContext.tsx
├── lib/
│   ├── supabase.ts            # Supabase client
│   └── lmsApi.ts              # Auth/profile/progress/leaderboard API helpers
├── data/
│   └── courseData.ts          # Static Blockchain 101 content
└── components/
    ├── AcademyHub.tsx
    ├── Course.tsx
    ├── Leaderboard.tsx
    ├── Profile.tsx
    ├── Settings.tsx
    └── demos/
```

## Deployment

The app is a static SPA. `vercel.json` rewrites all routes to `/index.html` so deep links and refreshes work with React Router. Add the Supabase and analytics env vars to Vercel before deploying.

## Notes for Contributors

- Keep course IDs, module IDs, and page IDs stable; user progress and XP events depend on them.
- If you change course structure, regenerate the Supabase seed migration.
- Do not add direct client writes for XP, role, tester status, or admin fields.
- Prefer adding new backend writes as Supabase RPC functions with RLS-aware validation.
