import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { admin, createAnonClient } from './helpers/supabase';

const COURSE_ID = 'blockchain-101';
const PASSWORD = 'TestPassword123!';

let userA: { id: string; email: string };
let userB: { id: string; email: string };
let clientA: ReturnType<typeof createAnonClient>;
let clientB: ReturnType<typeof createAnonClient>;
let contentPage: { module_id: string; page_id: string } | null = null;
let quizModuleId: string | null = null;
const createdIds: string[] = [];

beforeAll(async () => {
  // Resolve one content page and one quiz module from the published catalog.
  const { data: pages, error } = await admin
    .from('course_pages')
    .select('module_id, page_id, page_type')
    .eq('course_id', COURSE_ID);
  if (error) throw error;

  contentPage = (pages ?? []).find((p: any) => p.page_type !== 'quiz') ?? null;
  quizModuleId = (pages ?? []).find((p: any) => p.page_type === 'quiz')?.module_id ?? null;

  const suffix = `${Date.now()}${Math.floor(Math.random() * 10000)}`;
  const emailA = `mig-a-${suffix}@example.com`;
  const emailB = `mig-b-${suffix}@example.com`;

  const { data: a, error: ea } = await admin.auth.admin.createUser({
    email: emailA,
    password: PASSWORD,
    email_confirm: true,
  });
  if (ea || !a.user) throw ea ?? new Error('Failed to create user A');

  const { data: b, error: eb } = await admin.auth.admin.createUser({
    email: emailB,
    password: PASSWORD,
    email_confirm: true,
  });
  if (eb || !b.user) throw eb ?? new Error('Failed to create user B');

  userA = { id: a.user.id, email: emailA };
  userB = { id: b.user.id, email: emailB };
  createdIds.push(userA.id, userB.id);

  clientA = createAnonClient();
  clientB = createAnonClient();

  const sa = await clientA.auth.signInWithPassword({ email: emailA, password: PASSWORD });
  if (sa.error) throw sa.error;
  const sb = await clientB.auth.signInWithPassword({ email: emailB, password: PASSWORD });
  if (sb.error) throw sb.error;
});

afterAll(async () => {
  // Deleting auth users cascades to profiles and all child progress/XP rows.
  for (const id of createdIds) {
    await admin.auth.admin.deleteUser(id).catch(() => {});
  }
});

describe('profiles RLS', () => {
  it('lets a user read their own profile', async () => {
    const { data, error } = await clientA
      .from('profiles')
      .select('*')
      .eq('id', userA.id)
      .maybeSingle();
    expect(error).toBeNull();
    expect(data).not.toBeNull();
  });

  it('prevents reading another user private profile', async () => {
    const { data } = await clientB
      .from('profiles')
      .select('*')
      .eq('id', userA.id)
      .maybeSingle();
    expect(data).toBeNull();
  });

  it('prevents a user from updating their own xp directly', async () => {
    // PostgREST no-ops an RLS-blocked UPDATE (204, 0 rows) rather than erroring,
    // so assert the value is unchanged.
    await clientA.from('profiles').update({ xp: 99999 }).eq('id', userA.id);
    const { data } = await clientA.from('profiles').select('xp').eq('id', userA.id).single();
    expect(data?.xp).toBe(0);
  });

  it('prevents a user from self-promoting to admin', async () => {
    await clientA.from('profiles').update({ role: 'admin' }).eq('id', userA.id);
    const { data } = await clientA.from('profiles').select('role').eq('id', userA.id).single();
    expect(data?.role).toBe('user');
  });

  it('prevents a user from setting is_tester', async () => {
    await clientA.from('profiles').update({ is_tester: true }).eq('id', userA.id);
    const { data } = await clientA.from('profiles').select('is_tester').eq('id', userA.id).single();
    expect(data?.is_tester).toBe(false);
  });
});

describe('trusted RPC functions', () => {
  it('updates display name and country through update_profile', async () => {
    const { error } = await clientA.rpc('update_profile', {
      p_display_name: 'Test Bloknaut',
      p_country: 'Mauritius',
    });
    expect(error).toBeNull();

    const { data } = await clientA
      .from('profiles')
      .select('display_name, country')
      .eq('id', userA.id)
      .single();
    expect(data?.display_name).toBe('Test Bloknaut');
    expect(data?.country).toBe('Mauritius');
  });

  it('records page completion idempotently', async () => {
    expect(contentPage).not.toBeNull();

    const first = await clientA.rpc('complete_page', {
      p_course_id: COURSE_ID,
      p_module_id: contentPage!.module_id,
      p_page_id: contentPage!.page_id,
    });
    expect(first.error).toBeNull();

    const second = await clientA.rpc('complete_page', {
      p_course_id: COURSE_ID,
      p_module_id: contentPage!.module_id,
      p_page_id: contentPage!.page_id,
    });
    expect(second.error).toBeNull();

    const { count } = await admin
      .from('course_progress')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userA.id)
      .eq('page_id', contentPage!.page_id);
    expect(count).toBe(1);
  });

  it('rejects completing an unknown page', async () => {
    const { error } = await clientA.rpc('complete_page', {
      p_course_id: COURSE_ID,
      p_module_id: 'module-1.1',
      p_page_id: 'definitely-not-a-real-page',
    });
    expect(error).not.toBeNull();
  });

  it('awards quiz XP exactly once', async () => {
    expect(quizModuleId).not.toBeNull();

    const first = await clientA.rpc('finish_quiz', {
      p_course_id: COURSE_ID,
      p_module_id: quizModuleId!,
    });
    expect(first.error).toBeNull();
    expect((first.data as any)?.[0]?.awarded_xp).toBeGreaterThan(0);

    const second = await clientA.rpc('finish_quiz', {
      p_course_id: COURSE_ID,
      p_module_id: quizModuleId!,
    });
    expect(second.error).toBeNull();
    expect((second.data as any)?.[0]?.awarded_xp).toBe(0);
  });
});

describe('leaderboard', () => {
  it('excludes testers and does not expose email', async () => {
    await admin.from('profiles').update({ is_tester: true }).eq('id', userB.id);

    const { data, error } = await clientA.from('leaderboard').select('*');
    expect(error).toBeNull();

    const rows = (data ?? []) as any[];
    expect(rows.some((r) => r.id === userB.id)).toBe(false);

    if (rows.length > 0) {
      expect(Object.keys(rows[0])).not.toContain('email');
    }
  });
});
