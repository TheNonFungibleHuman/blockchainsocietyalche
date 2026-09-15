import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const keyFile = process.env.SUPABASE_SERVICE_ROLE_KEY_FILE!;
const serviceRoleKey = readFileSync(keyFile, 'utf8').trim();

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function count(table: string) {
  const { count, error } = await supabase.from(table).select('*', { count: 'exact', head: true });
  if (error) throw error;
  return count;
}

async function main() {
  console.log('profiles:', await count('profiles'));
  console.log('course_progress:', await count('course_progress'));
  console.log('module_progress:', await count('module_progress'));
  console.log('quiz_state:', await count('quiz_state'));
  console.log('xp_events:', await count('xp_events'));
  console.log('leaderboard view rows:', await count('leaderboard'));

  const { count: adminCount } = await supabase
    .from('profiles')
    .select('*', { count: 'exact', head: true })
    .eq('role', 'admin');
  const { count: testerCount } = await supabase
    .from('profiles')
    .select('*', { count: 'exact', head: true })
    .eq('is_tester', true);

  console.log('admins:', adminCount);
  console.log('testers:', testerCount);
}

main().catch((e) => {
  console.error('Verification failed:', e);
  process.exit(1);
});
