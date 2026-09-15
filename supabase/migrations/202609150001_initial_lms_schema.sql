-- Blocknauts / ALCHE LMS backend foundation
-- Apply in Supabase SQL editor or with `supabase db push`.

create extension if not exists pgcrypto;

-- ================================================================
-- Tables
-- ================================================================

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'Blocknaut',
  avatar_url text,
  email text,
  country text not null default 'Global',
  role text not null default 'user',
  is_tester boolean not null default false,
  welcome_watched boolean not null default false,
  xp integer not null default 0,
  xp_updated_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint profiles_xp_non_negative check (xp >= 0),
  constraint profiles_role_check check (role in ('user', 'admin')),
  constraint profiles_display_name_length check (char_length(display_name) between 1 and 100),
  constraint profiles_country_length check (char_length(country) between 1 and 100)
);

create table if not exists public.courses (
  id text primary key,
  title text not null,
  description text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.course_modules (
  course_id text not null references public.courses(id) on delete cascade,
  module_id text not null,
  part_id text,
  title text not null,
  position integer not null,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  primary key (course_id, module_id),
  constraint course_modules_position_non_negative check (position >= 0)
);

create table if not exists public.course_pages (
  course_id text not null references public.courses(id) on delete cascade,
  -- Intro/onboarding pages should use the reserved module_id 'intro'.
  module_id text not null,
  page_id text not null,
  title text not null,
  page_type text not null default 'content',
  position integer not null,
  xp_value integer not null default 10,
  is_required boolean not null default true,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  primary key (course_id, module_id, page_id),
  foreign key (course_id, module_id)
    references public.course_modules(course_id, module_id)
    on delete cascade
    deferrable initially deferred,

  constraint course_pages_position_non_negative check (position >= 0),
  constraint course_pages_xp_non_negative check (xp_value >= 0),
  constraint course_pages_type_check check (page_type in ('content', 'video', 'quiz', 'interactive'))
);

create table if not exists public.course_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id text not null,
  module_id text not null,
  page_id text not null,
  completed_at timestamptz not null default now(),

  unique (user_id, course_id, module_id, page_id),
  foreign key (course_id, module_id, page_id)
    references public.course_pages(course_id, module_id, page_id)
    on delete cascade
    deferrable initially deferred
);

create table if not exists public.module_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id text not null,
  module_id text not null,
  completed_at timestamptz not null default now(),

  unique (user_id, course_id, module_id),
  foreign key (course_id, module_id)
    references public.course_modules(course_id, module_id)
    on delete cascade
    deferrable initially deferred
);

create table if not exists public.quiz_state (
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id text not null,
  module_id text not null,
  current_question_index integer not null default 0,
  attempts jsonb not null default '{}',
  finished boolean not null default false,
  updated_at timestamptz not null default now(),

  primary key (user_id, course_id, module_id),
  foreign key (course_id, module_id)
    references public.course_modules(course_id, module_id)
    on delete cascade
    deferrable initially deferred,
  constraint quiz_state_current_question_non_negative check (current_question_index >= 0)
);

create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id text not null,
  module_id text not null,
  question_id text not null,
  selected_answer text,
  is_correct boolean not null default false,
  attempt_number integer not null default 1,
  attempted_at timestamptz not null default now(),

  foreign key (course_id, module_id)
    references public.course_modules(course_id, module_id)
    on delete cascade
    deferrable initially deferred,
  constraint quiz_attempts_attempt_positive check (attempt_number > 0)
);

create table if not exists public.xp_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id text not null references public.courses(id) on delete cascade,
  source_type text not null,
  source_id text not null,
  amount integer not null,
  awarded_at timestamptz not null default now(),

  unique (user_id, course_id, source_type, source_id),
  constraint xp_events_amount_positive check (amount > 0),
  constraint xp_events_source_type_check check (
    source_type in ('page_complete', 'quiz_complete', 'module_complete', 'manual_adjustment')
  )
);

create table if not exists public.admin_audit_log (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id) on delete set null,
  action text not null,
  target_table text,
  target_id text,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create index if not exists course_progress_user_course_idx
  on public.course_progress (user_id, course_id);

create index if not exists quiz_attempts_user_module_idx
  on public.quiz_attempts (user_id, course_id, module_id);

create index if not exists xp_events_user_course_idx
  on public.xp_events (user_id, course_id);

create index if not exists profiles_leaderboard_idx
  on public.profiles (is_tester, xp desc, xp_updated_at asc, created_at asc);

-- ================================================================
-- Auth / admin helpers
-- ================================================================

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  );
$$;

create or replace function public.recalculate_user_xp(p_user_id uuid)
returns void
language sql
security definer
set search_path = public
as $$
  update public.profiles
  set
    xp = case
      when is_tester then 0
      else coalesce((
        select sum(amount)
        from public.xp_events
        where user_id = p_user_id
      ), 0)
    end,
    xp_updated_at = now(),
    updated_at = now()
  where id = p_user_id;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    email,
    display_name,
    avatar_url
  )
  values (
    new.id,
    new.email,
    coalesce(nullif(new.raw_user_meta_data->>'full_name', ''), 'Blocknaut'),
    new.raw_user_meta_data->>'avatar_url'
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- ================================================================
-- Trusted write APIs
-- ================================================================

create or replace function public.update_profile(
  p_display_name text,
  p_country text
)
returns public.profiles
language plpgsql
security definer
set search_path = public
as $$
declare
  v_profile public.profiles;
begin
  if auth.uid() is null then
    raise exception 'Not authenticated';
  end if;

  if char_length(trim(coalesce(p_display_name, ''))) < 1
     or char_length(trim(p_display_name)) > 100 then
    raise exception 'Invalid display name';
  end if;

  if char_length(trim(coalesce(p_country, ''))) < 1
     or char_length(trim(p_country)) > 100 then
    raise exception 'Invalid country';
  end if;

  update public.profiles
  set
    display_name = trim(p_display_name),
    country = trim(p_country),
    updated_at = now()
  where id = auth.uid()
  returning * into v_profile;

  return v_profile;
end;
$$;

create or replace function public.mark_welcome_watched()
returns void
language sql
security definer
set search_path = public
as $$
  update public.profiles
  set welcome_watched = true,
      updated_at = now()
  where id = auth.uid();
$$;

create or replace function public.complete_page(
  p_course_id text,
  p_module_id text,
  p_page_id text
)
returns table (
  awarded_xp integer,
  total_xp integer
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_module_id text := coalesce(nullif(p_module_id, ''), 'intro');
  v_page public.course_pages%rowtype;
  v_progress_row_count integer := 0;
  v_xp_row_count integer := 0;
begin
  if v_user_id is null then
    raise exception 'Not authenticated';
  end if;

  select * into v_page
  from public.course_pages
  where course_id = p_course_id
    and module_id = v_module_id
    and page_id = p_page_id
    and is_published = true;

  if not found then
    raise exception 'Unknown or unpublished course page';
  end if;

  insert into public.course_progress (user_id, course_id, module_id, page_id)
  values (v_user_id, p_course_id, v_module_id, p_page_id)
  on conflict do nothing;

  get diagnostics v_progress_row_count = row_count;

  if v_progress_row_count > 0 and v_page.xp_value > 0 then
    insert into public.xp_events (user_id, course_id, source_type, source_id, amount)
    values (
      v_user_id,
      p_course_id,
      'page_complete',
      v_module_id || ':' || p_page_id,
      v_page.xp_value
    )
    on conflict do nothing;

    get diagnostics v_xp_row_count = row_count;
  end if;

  perform public.recalculate_user_xp(v_user_id);

  return query
  select
    case when v_xp_row_count > 0 then v_page.xp_value else 0 end,
    profiles.xp
  from public.profiles
  where profiles.id = v_user_id;
end;
$$;

create or replace function public.save_quiz_state(
  p_course_id text,
  p_module_id text,
  p_current_question_index integer,
  p_attempts jsonb default '{}',
  p_finished boolean default false
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Not authenticated';
  end if;

  if p_current_question_index < 0 then
    raise exception 'Invalid current question index';
  end if;

  insert into public.quiz_state (
    user_id,
    course_id,
    module_id,
    current_question_index,
    attempts,
    finished,
    updated_at
  )
  values (
    auth.uid(),
    p_course_id,
    p_module_id,
    p_current_question_index,
    coalesce(p_attempts, '{}'),
    p_finished,
    now()
  )
  on conflict (user_id, course_id, module_id) do update
  set
    current_question_index = excluded.current_question_index,
    attempts = excluded.attempts,
    finished = excluded.finished,
    updated_at = now();
end;
$$;

create or replace function public.record_quiz_attempt(
  p_course_id text,
  p_module_id text,
  p_question_id text,
  p_selected_answer text,
  p_is_correct boolean,
  p_attempt_number integer
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Not authenticated';
  end if;

  if p_attempt_number < 1 then
    raise exception 'Invalid attempt number';
  end if;

  insert into public.quiz_attempts (
    user_id,
    course_id,
    module_id,
    question_id,
    selected_answer,
    is_correct,
    attempt_number
  )
  values (
    auth.uid(),
    p_course_id,
    p_module_id,
    p_question_id,
    p_selected_answer,
    p_is_correct,
    p_attempt_number
  );
end;
$$;

create or replace function public.finish_quiz(
  p_course_id text,
  p_module_id text
)
returns table (
  awarded_xp integer,
  total_xp integer
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_quiz_page public.course_pages%rowtype;
  v_xp_row_count integer := 0;
begin
  if v_user_id is null then
    raise exception 'Not authenticated';
  end if;

  select * into v_quiz_page
  from public.course_pages
  where course_id = p_course_id
    and module_id = p_module_id
    and page_type = 'quiz'
    and is_published = true
  order by position desc
  limit 1;

  if not found then
    raise exception 'Unknown or unpublished quiz module';
  end if;

  insert into public.quiz_state (
    user_id,
    course_id,
    module_id,
    current_question_index,
    finished,
    updated_at
  )
  values (v_user_id, p_course_id, p_module_id, 0, true, now())
  on conflict (user_id, course_id, module_id) do update
  set finished = true,
      updated_at = now();

  insert into public.xp_events (user_id, course_id, source_type, source_id, amount)
  values (v_user_id, p_course_id, 'quiz_complete', p_module_id, greatest(v_quiz_page.xp_value, 1))
  on conflict do nothing;

  get diagnostics v_xp_row_count = row_count;

  perform public.recalculate_user_xp(v_user_id);

  return query
  select
    case when v_xp_row_count > 0 then greatest(v_quiz_page.xp_value, 1) else 0 end,
    profiles.xp
  from public.profiles
  where profiles.id = v_user_id;
end;
$$;

-- ================================================================
-- Views
-- ================================================================

create or replace view public.leaderboard as
select
  id,
  display_name,
  avatar_url,
  country,
  xp,
  xp_updated_at,
  rank() over (order by xp desc, xp_updated_at asc, created_at asc) as rank
from public.profiles
where is_tester = false;

create or replace view public.user_course_summary as
select
  p.id as user_id,
  p.display_name,
  p.email,
  p.country,
  p.xp,
  count(distinct cp.id) as completed_pages,
  count(distinct mp.id) as completed_modules
from public.profiles p
left join public.course_progress cp on cp.user_id = p.id
left join public.module_progress mp on mp.user_id = p.id
group by p.id;

-- ================================================================
-- RLS policies
-- ================================================================

alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.course_modules enable row level security;
alter table public.course_pages enable row level security;
alter table public.course_progress enable row level security;
alter table public.module_progress enable row level security;
alter table public.quiz_state enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.xp_events enable row level security;
alter table public.admin_audit_log enable row level security;

create policy "Profiles are readable by owner"
  on public.profiles for select
  using (id = auth.uid());

create policy "Profiles are readable by admins"
  on public.profiles for select
  using (public.is_admin());

create policy "Published courses are readable"
  on public.courses for select
  using (is_published = true or public.is_admin());

create policy "Published modules are readable"
  on public.course_modules for select
  using (is_published = true or public.is_admin());

create policy "Published pages are readable"
  on public.course_pages for select
  using (is_published = true or public.is_admin());

create policy "Course progress readable by owner"
  on public.course_progress for select
  using (user_id = auth.uid());

create policy "Course progress readable by admins"
  on public.course_progress for select
  using (public.is_admin());

create policy "Module progress readable by owner"
  on public.module_progress for select
  using (user_id = auth.uid());

create policy "Module progress readable by admins"
  on public.module_progress for select
  using (public.is_admin());

create policy "Quiz state readable by owner"
  on public.quiz_state for select
  using (user_id = auth.uid());

create policy "Quiz state readable by admins"
  on public.quiz_state for select
  using (public.is_admin());

create policy "Quiz attempts readable by owner"
  on public.quiz_attempts for select
  using (user_id = auth.uid());

create policy "Quiz attempts readable by admins"
  on public.quiz_attempts for select
  using (public.is_admin());

create policy "XP events readable by owner"
  on public.xp_events for select
  using (user_id = auth.uid());

create policy "XP events readable by admins"
  on public.xp_events for select
  using (public.is_admin());

create policy "Admin audit log readable by admins"
  on public.admin_audit_log for select
  using (public.is_admin());

-- No direct user insert/update/delete policies are intentionally created for
-- progress, quiz, XP, role, or tester fields. Trusted writes go through the
-- SECURITY DEFINER RPC functions above.

-- ================================================================
-- API grants
-- ================================================================

grant usage on schema public to anon, authenticated;

grant select on public.leaderboard to anon, authenticated;
grant select on public.courses to anon, authenticated;
grant select on public.course_modules to anon, authenticated;
grant select on public.course_pages to anon, authenticated;
grant select on public.profiles to authenticated;
grant select on public.course_progress to authenticated;
grant select on public.module_progress to authenticated;
grant select on public.quiz_state to authenticated;
grant select on public.quiz_attempts to authenticated;
grant select on public.xp_events to authenticated;

grant execute on function public.update_profile(text, text) to authenticated;
grant execute on function public.mark_welcome_watched() to authenticated;
grant execute on function public.complete_page(text, text, text) to authenticated;
grant execute on function public.save_quiz_state(text, text, integer, jsonb, boolean) to authenticated;
grant execute on function public.record_quiz_attempt(text, text, text, text, boolean, integer) to authenticated;
grant execute on function public.finish_quiz(text, text) to authenticated;
