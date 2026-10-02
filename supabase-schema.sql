-- LUMPIA BU ERNI — schema CMS sederhana (Supabase, auto-RLS ON)

create table if not exists public.menu_items (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text default '',
  price_idr integer not null default 0,
  category text not null default 'Gorengan',   -- e.g. Lumpia, Sosis, Pisang, Minuman
  is_available boolean not null default true,
  is_featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  message text not null,
  rating integer not null default 5 check (rating between 1 and 5),
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  whatsapp text not null,
  note text default '',
  total_idr integer not null default 0,
  status text not null default 'baru' check (status in ('baru','dikonfirmasi','selesai','batal')),
  created_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  menu_item_id uuid references public.menu_items(id) on delete set null,
  item_name text not null,
  qty integer not null default 1,
  price_idr integer not null default 0
);

-- RLS (auto-RLS ON means everything is locked by default; open only what the public site needs)
alter table public.menu_items enable row level security;
alter table public.testimonials enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- public read for published content
create policy "public read menu" on public.menu_items for select using (true);
create policy "public read testimonials" on public.testimonials for select using (is_published);

-- anyone can submit an order (insert-only), no read without auth
create policy "public submit order" on public.orders for insert with check (true);
create policy "public submit order item" on public.order_items for insert with check (true);

-- admin (authenticated) full access — future /admin login via Supabase auth
create policy "admin all menu" on public.menu_items for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin all testimonial" on public.testimonials for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin read orders" on public.orders for select using (auth.role() = 'authenticated');
create policy "admin update orders" on public.orders for update using (auth.role() = 'authenticated');
create policy "admin read order items" on public.order_items for select using (auth.role() = 'authenticated');

-- seed data menu Lumpia Bu Erni
insert into public.menu_items (name, description, price_idr, category, is_featured, sort_order)
values
  ('Lumpia Bu Erni', 'Lumpia specialty rumahan: isian rebung, telur, ayam cincang — kulit crispy, sambal pedas rumahan.', 8000, 'Gorengan', true, 0),
  ('Lumpia Mini (isi 5)', 'Ukuran mini, cocok buat camilan/reuni arisan.', 15000, 'Gorengan', false, 1),
  ('Sosis Solo', 'Sosis solo klasik daging cincang, kuah pedas khas.', 10000, 'Gorengan', false, 2),
  ('Pisang Goreng Kipas', 'Pisang kepok goreng crispy, taburan gula.', 8000, 'Gorengan', false, 3),
  ('Es Teh Jumbo', 'Es teh manis 650ml.', 4000, 'Minuman', false, 4)
on conflict do nothing;

insert into public.testimonials (customer_name, message, rating)
values
  ('Ibu Rina', 'Lumpianya crispy banget, sambalnya juara. Anak-anak doyan semua!', 5),
  ('Pak Dedi', 'Langganan tiap jumat, sosis solo-nya enak, harga ramah kantong.', 5)
on conflict do nothing;
