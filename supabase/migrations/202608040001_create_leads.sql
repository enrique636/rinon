create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
  nombre text not null check (char_length(nombre) between 2 and 100), telefono text not null check (char_length(telefono) between 8 and 30),
  email text, comuna text not null, servicio text not null, mensaje text not null, contacto_preferido text not null default 'WhatsApp',
  pagina_origen text not null default '/contacto', estado text not null default 'nuevo' check (estado in ('nuevo', 'contactado', 'cotizado', 'cerrado'))
);
alter table public.leads enable row level security;
revoke all on table public.leads from anon, authenticated;
grant usage on schema public to service_role;
grant select, insert, update on table public.leads to service_role;
create index if not exists leads_created_at_idx on public.leads (created_at desc);
