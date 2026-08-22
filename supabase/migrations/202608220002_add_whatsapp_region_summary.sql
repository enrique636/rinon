-- Requiere que analytics_events tenga una columna de timestamp llamada created_at
-- (misma convención usada en la tabla leads). Si tu tabla usa otro nombre, ajusta
-- la referencia a created_at más abajo antes de ejecutar.
create or replace function public.rinon_whatsapp_by_region(p_days integer)
returns table (region text, city text, page_path text, contacts bigint)
language sql
stable
as $$
  select
    coalesce(nullif(region, ''), 'Desconocida') as region,
    coalesce(nullif(city, ''), 'Desconocida') as city,
    page_path,
    count(distinct visitor_id) as contacts
  from public.analytics_events
  where event_name = 'contact_whatsapp'
    and created_at >= now() - (p_days || ' days')::interval
  group by region, city, page_path
  order by contacts desc
  limit 50;
$$;

grant execute on function public.rinon_whatsapp_by_region(integer) to service_role;
