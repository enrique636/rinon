alter table public.analytics_events
  add column if not exists city text not null default '',
  add column if not exists region text not null default '',
  add column if not exists country text not null default '';

create index if not exists analytics_events_region_idx on public.analytics_events (region);
