-- Profiles table
create table public.profiles (
  id uuid references auth.users not null primary key,
  username text,
  karma_score integer default 0,
  city text
);

-- Enable RLS for profiles
alter table public.profiles enable row level security;

-- Profile policies
create policy "Public profiles are viewable by everyone." on public.profiles
  for select using (true);

create policy "Users can update own profile." on public.profiles
  for update using (auth.uid() = id);

-- Components table
create table public.components (
  id uuid primary key default gen_random_uuid(),
  mpn text unique,
  name text,
  category text,
  msrp integer,
  specs jsonb
);

-- Enable RLS for components
alter table public.components enable row level security;

-- Components policies
create policy "Components are viewable by everyone." on public.components
  for select using (true);

-- Prices table
create table public.prices (
  id uuid primary key default gen_random_uuid(),
  component_id uuid references public.components not null,
  store_name text,
  price integer,
  is_in_stock boolean,
  last_updated timestamp with time zone default timezone('utc'::text, now()),
  source text -- 'scraper' or 'community'
);

-- Enable RLS for prices
alter table public.prices enable row level security;

-- Prices policies
create policy "Prices are viewable by everyone." on public.prices
  for select using (true);

create policy "Authenticated users can insert prices." on public.prices
  for insert with check (auth.role() = 'authenticated');
