import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const keyFile = process.env.SUPABASE_SERVICE_ROLE_KEY_FILE;
const serviceRoleKey = keyFile
  ? readFileSync(keyFile, 'utf8').trim()
  : process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Set SUPABASE_URL and either SUPABASE_SERVICE_ROLE_KEY or SUPABASE_SERVICE_ROLE_KEY_FILE.');
  process.exit(1);
}

// Emails to flag as testers (excluded from the public leaderboard).
const TESTER_EMAILS = ['haryormeekun99@gmail.com'];

const COURSE_ID = 'blockchain-101';

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const authUsers: any[] = JSON.parse(readFileSync('.migration-data/firebase-auth-users.json', 'utf8')).users;
const firestoreUsers: any[] = JSON.parse(readFileSync('.migration-data/firestore/users.json', 'utf8'));

function normEmail(email: string | null | undefined) {
  return (email || '').trim().toLowerCase();
}

function toIso(value: string | number | null | undefined): string | null {
  if (!value) return null;
  if (typeof value === 'number') {
    const d = new Date(value);
    return Number.isFinite(d.getTime()) ? d.toISOString() : null;
  }
  return value;
}

async function listExistingUsersByEmail() {
  const { data, error } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 });
  if (error) throw error;
  const map = new Map<string, string>();
  for (const u of data.users) {
    if (u.email) map.set(normEmail(u.email), u.id);
  }
  return map;
}

async function upsertAuthUser(user: any, existingByEmail: Map<string, string>) {
  const email = user.email;
  if (!email) return null;

  const existingId = existingByEmail.get(normEmail(email));
  if (existingId) return existingId;

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    email_confirm: true,
    user_metadata: {
      full_name: user.displayName || null,
      avatar_url: user.photoURL || null,
      firebase_uid: user.uid,
    },
  });

  if (error) {
    console.error(`Failed to import auth user ${email}:`, error.message);
    return null;
  }

  existingByEmail.set(normEmail(email), data.user.id);
  return data.user.id;
}

async function main() {
  mkdirSync('.migration-data', { recursive: true });

  const profileByEmail = new Map<string, any>();
  for (const doc of firestoreUsers) {
    const email = normEmail(doc.data?.email);
    if (email) profileByEmail.set(email, doc);
  }

  const { data: catalog, error: catalogError } = await supabase
    .from('course_pages')
    .select('module_id, page_id');
  if (catalogError) throw catalogError;

  const pageLookup = new Map<string, { module_id: string; page_id: string }>();
  for (const row of catalog || []) {
    pageLookup.set(row.page_id, row);
    pageLookup.set(`${row.module_id}-${row.page_id}`, row);
  }

  const idMapping: Record<string, string> = {};
  let authProcessed = 0;
  let profileCount = 0;
  let progressInserted = 0;
  let progressSkipped = 0;
  let moduleInserted = 0;
  let quizInserted = 0;
  let xpEventsInserted = 0;

  const existingByEmail = await listExistingUsersByEmail();

  for (const user of authUsers) {
    const email = user.email;
    const supabaseUserId = await upsertAuthUser(user, existingByEmail);
    if (!supabaseUserId) continue;

    idMapping[user.uid] = supabaseUserId;
    authProcessed += 1;

    const firestoreDoc = profileByEmail.get(normEmail(email));
    if (!firestoreDoc) continue;

    const d = firestoreDoc.data;
    const isTester = TESTER_EMAILS.includes(normEmail(email));
    const xp = typeof d.xp === 'number' && d.xp >= 0 ? d.xp : 0;
    const fallbackTimestamp = toIso(d.createdAt) || new Date().toISOString();
    const xpUpdatedAt = toIso(d.xpUpdatedAt) || fallbackTimestamp;

    // Profile
    const profileRow = {
      id: supabaseUserId,
      display_name: d.displayName || user.displayName || 'Blocknaut',
      email: d.email || email,
      avatar_url: d.photoURL || user.photoURL || null,
      country: d.country || 'Global',
      role: d.role === 'admin' ? 'admin' : 'user',
      is_tester: isTester,
      welcome_watched: Boolean(d.welcomeWatched),
      xp: isTester ? 0 : xp,
      xp_updated_at: xpUpdatedAt,
      created_at: fallbackTimestamp,
      updated_at: new Date().toISOString(),
    };

    const { error: profileError } = await supabase.from('profiles').upsert(profileRow, { onConflict: 'id' });
    if (profileError) {
      console.error(`Profile insert failed for ${email}:`, profileError.message);
      continue;
    }
    profileCount += 1;

    // XP audit trail
    if (!isTester && xp > 0) {
      const { error: xpError } = await supabase.from('xp_events').upsert(
        {
          user_id: supabaseUserId,
          course_id: COURSE_ID,
          source_type: 'manual_adjustment',
          source_id: 'firebase-migration',
          amount: xp,
          awarded_at: xpUpdatedAt,
        },
        { onConflict: 'user_id, course_id, source_type, source_id' },
      );
      if (!xpError) xpEventsInserted += 1;
    }

    // Completed pages
    const completedPages: string[] = Array.isArray(d.completedPages) ? d.completedPages : [];
    const progressRows: any[] = [];
    for (const entry of completedPages) {
      const resolved = pageLookup.get(entry);
      if (!resolved) {
        progressSkipped += 1;
        continue;
      }
      progressRows.push({
        user_id: supabaseUserId,
        course_id: COURSE_ID,
        module_id: resolved.module_id,
        page_id: resolved.page_id,
        completed_at: xpUpdatedAt,
      });
    }
    if (progressRows.length) {
      const { error } = await supabase
        .from('course_progress')
        .upsert(progressRows, { onConflict: 'user_id, course_id, module_id, page_id' });
      if (!error) progressInserted += progressRows.length;
    }

    // Completed modules
    const completedModules: string[] = Array.isArray(d.completedModules) ? d.completedModules : [];
    const moduleRows = completedModules.map((moduleId) => ({
      user_id: supabaseUserId,
      course_id: COURSE_ID,
      module_id: moduleId,
      completed_at: xpUpdatedAt,
    }));
    if (moduleRows.length) {
      const { error } = await supabase
        .from('module_progress')
        .upsert(moduleRows, { onConflict: 'user_id, course_id, module_id' });
      if (!error) moduleInserted += moduleRows.length;
    }

    // Quiz states
    let parsed: Record<string, any> = {};
    if (typeof d.quizStates === 'string' && d.quizStates) {
      try {
        parsed = JSON.parse(d.quizStates);
      } catch {
        parsed = {};
      }
    }
    const quizRows = Object.entries(parsed).map(([moduleId, state]) => ({
      user_id: supabaseUserId,
      course_id: COURSE_ID,
      module_id: moduleId,
      current_question_index: state?.currentQ ?? 0,
      attempts: state?.attempts ?? {},
      finished: Boolean(state?.finished),
      updated_at: new Date().toISOString(),
    }));
    if (quizRows.length) {
      const { error } = await supabase
        .from('quiz_state')
        .upsert(quizRows, { onConflict: 'user_id, course_id, module_id' });
      if (!error) quizInserted += quizRows.length;
    }
  }

  writeFileSync(
    '.migration-data/supabase-id-mapping.json',
    JSON.stringify({ generatedAt: new Date().toISOString(), idMapping }, null, 2),
  );

  console.log('=== Migration summary ===');
  console.log(`Auth users processed: ${authProcessed}`);
  console.log(`Profiles upserted: ${profileCount}`);
  console.log(`XP events created: ${xpEventsInserted}`);
  console.log(`Course progress rows: ${progressInserted} (${progressSkipped} unresolved skipped)`);
  console.log(`Module progress rows: ${moduleInserted}`);
  console.log(`Quiz state rows: ${quizInserted}`);
  console.log(`ID mapping written to ./.migration-data/supabase-id-mapping.json`);
}

main().catch((error) => {
  console.error('Import failed:', error);
  process.exit(1);
});
