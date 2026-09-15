import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;
const roleKeyFile = process.env.SUPABASE_SERVICE_ROLE_KEY_FILE;
const serviceRoleKey = roleKeyFile
  ? readFileSync(roleKeyFile, 'utf8').trim()
  : process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !anonKey || !serviceRoleKey) {
  throw new Error(
    'Missing Supabase env vars. Set SUPABASE_URL, SUPABASE_ANON_KEY, and ' +
      'SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_SERVICE_ROLE_KEY_FILE).',
  );
}

export const SUPABASE_URL = url;
export const SUPABASE_ANON_KEY = anonKey;

// Service-role client for setup/teardown (bypasses RLS).
export const admin = createClient(url, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// A fresh anon client for simulating a signed-in browser user.
export function createAnonClient() {
  return createClient(url, anonKey);
}
