# Security Specification: Blocknauts LMS

The active backend is Supabase Auth + Postgres + Row Level Security. This spec documents the invariants the schema, RLS policies, and RPC functions must enforce.

## Data Invariants

- A `profiles.id` value must match the authenticated Supabase Auth user ID.
- `xp` must never be directly supplied by the browser.
- Total `profiles.xp` must be derived from `xp_events`.
- XP must be a non-negative integer.
- XP may only be awarded for server-known, published course pages/modules in `course_pages` / `course_modules`.
- A user must not be able to create duplicate XP awards for the same source.
- `role` and `is_tester` must not be editable by standard users.
- Public leaderboard data must not expose email addresses.
- Course progress must be user-owned.
- Profile display fields must be bounded in size.

## Denied Attack Payloads / Behaviors

1. Self-promotion: standard user tries to set `role = 'admin'`.
2. Tester bypass: standard user tries to set `is_tester = true`.
3. XP injection: browser tries to update `profiles.xp` directly.
4. Fake XP source: browser calls `complete_page` with an unknown page ID.
5. Duplicate XP: browser completes the same page/quiz repeatedly for repeated rewards.
6. Identity theft: user tries to write progress for another `user_id`.
7. Email tampering: user tries to modify `profiles.email` through profile settings.
8. Large profile payload: display name or country exceeds the configured length bounds.
9. Leaderboard PII leak: unauthenticated/public leaderboard response includes email.
10. Unauthorized delete: user deletes profile/progress rows directly.
11. Admin data scrape: standard user reads all private profiles or all progress rows.
12. Quiz state tamper for another user.

## Defensive Design

- Enable RLS on every public table.
- Do not create direct user insert/update/delete policies for trusted state tables.
- Route trusted writes through `SECURITY DEFINER` RPC functions:
  - `update_profile`
  - `complete_page`
  - `finish_quiz`
  - `save_quiz_state`
  - `record_quiz_attempt`
  - `mark_welcome_watched`
- Validate page/module IDs against the seeded course catalog before awarding XP.
- Store every XP award in `xp_events` with a uniqueness constraint on `(user_id, course_id, source_type, source_id)`.
- Recalculate total XP from `xp_events` instead of trusting the client.
- Exclude testers from the `leaderboard` view.
- Keep service-role keys out of frontend code and `VITE_` env vars.

## Tests to Add

- User can read own profile.
- User cannot read another private profile.
- User cannot directly update own `xp`.
- User cannot directly update own `role`.
- User cannot directly update own `is_tester`.
- User can update display name/country through `update_profile`.
- User can complete a valid published page.
- Unknown page completion is rejected.
- Repeating page completion does not repeat XP.
- Quiz completion awards XP once.
- Tester XP remains zero and tester is absent from leaderboard.
- Leaderboard rows do not include email.
