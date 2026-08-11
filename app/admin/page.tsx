import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, isValidAdminToken } from "@/lib/admin-auth";
import { getAnalyticsSummary, isAnalyticsConfigured, type AnalyticsSummary } from "@/lib/analytics";
import { isLeadsConfigured, listLeads } from "@/lib/leads";

export const metadata: Metadata = { title: "Administración | Rinon.cl", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

const periods = {
  hoy: { label: "Hoy", days: 1, bucket: "hour" as const },
  semana: { label: "7 días", days: 7, bucket: "day" as const },
  mes: { label: "30 días", days: 30, bucket: "day" as const },
  ano: { label: "12 meses", days: 365, bucket: "month" as const },
};

function emptySummary(): AnalyticsSummary {
  return { totals: { views: 0, visitors: 0, whatsapp: 0, phone: 0, leads: 0 }, series: [], topPages: [] };
}

function StatCard({ label, value, note }: { label: string; value: number; note: string }) {
  return <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><p className="text-sm text-gray-500">{label}</p><p className="mt-2 text-3xl font-bold text-gray-950">{value.toLocaleString("es-CL")}</p><p className="mt-1 text-xs text-gray-400">{note}</p></div>;
}

function ActivityChart({ data }: { data: AnalyticsSummary["series"] }) {
  const max = Math.max(1, ...data.map((item) => item.views));
  if (!data.length) return <div className="flex h-56 items-center justify-center text-sm text-gray-400">Los gráficos aparecerán cuando comiencen a llegar visitas.</div>;
  return <div className="flex h-64 items-end gap-2 overflow-x-auto border-b border-gray-200 pt-6">{data.map((item) => {
    const date = new Date(item.bucket);
    const label = data.length > 40 ? new Intl.DateTimeFormat("es-CL", { month: "short" }).format(date) : new Intl.DateTimeFormat("es-CL", { day: "2-digit", month: "short" }).format(date);
    return <div key={item.bucket} className="group flex h-full min-w-8 flex-1 flex-col items-center justify-end" title={`${label}: ${item.views} vistas, ${item.visitors} personas, ${item.contacts} contactos`}><div className="w-full max-w-12 rounded-t-md bg-emerald-500 transition hover:bg-emerald-600" style={{ height: `${Math.max(6, (item.views / max) * 88)}%` }} /><span className="mt-2 text-[10px] text-gray-500">{label}</span></div>;
  })}</div>;
}

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ error?: string; periodo?: string }> }) {
  const query = await searchParams;
  const authenticated = isValidAdminToken((await cookies()).get(ADMIN_COOKIE)?.value);
  if (!authenticated) return <main className="flex min-h-[70vh] items-center justify-center p-4"><form method="post" action="/api/admin/login" className="w-full max-w-sm rounded-2xl border border-gray-200 p-7 shadow-sm"><p className="text-sm text-gray-500">Rinon.cl</p><h1 className="mt-1 mb-6 text-2xl font-bold">Administración</h1><label className="text-sm font-medium">Contraseña<input type="password" name="password" required autoComplete="current-password" className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3" /></label>{query.error && <p className="mt-3 text-sm text-red-600">Contraseña incorrecta.</p>}<button className="mt-5 w-full rounded-xl bg-gray-900 py-3 font-bold text-white">Ingresar</button></form></main>;

  const periodKey = query.periodo && query.periodo in periods ? query.periodo as keyof typeof periods : "mes";
  const period = periods[periodKey];
  let leads = [] as Awaited<ReturnType<typeof listLeads>>;
  let analytics = emptySummary();
  let loadError = "";

  try {
    [leads, analytics] = await Promise.all([
      isLeadsConfigured() ? listLeads() : Promise.resolve([]),
      isAnalyticsConfigured() ? getAnalyticsSummary(period.days, period.bucket) : Promise.resolve(emptySummary()),
    ]);
  } catch { loadError = "No fue posible cargar toda la información del panel."; }

  const contacts = analytics.totals.whatsapp + analytics.totals.phone + analytics.totals.leads;
  return <main className="mx-auto max-w-7xl px-4 py-10">
    <header className="mb-8 flex items-start justify-between gap-4"><div><p className="text-sm text-gray-500">Rinon.cl</p><h1 className="text-3xl font-bold">Panel de actividad</h1><p className="mt-1 text-gray-500">Visitas, interés en productos y consultas comerciales.</p></div><form method="post" action="/api/admin/logout"><button className="rounded-lg border border-gray-300 px-4 py-2 text-sm">Cerrar sesión</button></form></header>
    {loadError && <div className="mb-6 rounded-xl bg-red-50 p-4 text-red-700">{loadError}</div>}
    <nav className="mb-6 flex flex-wrap gap-2" aria-label="Periodo de estadísticas">{Object.entries(periods).map(([key, item]) => <Link key={key} href={`/admin?periodo=${key}`} className={`rounded-full px-4 py-2 text-sm font-semibold ${periodKey === key ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>{item.label}</Link>)}</nav>
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"><StatCard label="Personas" value={analytics.totals.visitors} note="visitantes anónimos" /><StatCard label="Páginas vistas" value={analytics.totals.views} note="contenido revisado" /><StatCard label="Contactos" value={contacts} note="acciones comerciales" /><StatCard label="WhatsApp" value={analytics.totals.whatsapp} note="clics registrados" /><StatCard label="Formularios" value={analytics.totals.leads} note="envíos completados" /></section>
    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><div className="flex items-end justify-between gap-3"><div><p className="text-sm font-semibold text-emerald-700">Actividad</p><h2 className="text-xl font-bold">Visitas durante {period.label.toLowerCase()}</h2></div><p className="text-xs text-gray-400">Pasa sobre una barra para ver el detalle</p></div><ActivityChart data={analytics.series} /></section>
    <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><h2 className="text-xl font-bold">Páginas y productos más vistos</h2><p className="mb-4 text-sm text-gray-500">Qué contenido despierta más interés.</p><div className="space-y-3">{analytics.topPages.map((page, index) => <div key={page.path} className="flex items-center gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold">{index + 1}</span><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{page.path === "/" ? "Página principal" : page.path.replaceAll("-", " ")}</p><div className="mt-1 h-1.5 rounded-full bg-gray-100"><div className="h-full rounded-full bg-emerald-500" style={{ width: `${Math.max(4, (page.views / Math.max(1, analytics.topPages[0]?.views ?? 1)) * 100)}%` }} /></div></div><span className="text-sm font-bold">{page.views}</span></div>)}{!analytics.topPages.length && <p className="py-8 text-center text-sm text-gray-400">Aún no hay páginas vistas registradas.</p>}</div></section>
      <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"><div className="p-5"><h2 className="text-xl font-bold">Contactos recibidos</h2><p className="text-sm text-gray-500">{leads.length} consultas guardadas</p></div><div className="overflow-x-auto"><table className="w-full text-sm"><thead className="bg-gray-50 text-left"><tr>{["Fecha", "Cliente", "WhatsApp", "Región", "Solicitud", "Detalles"].map((h) => <th key={h} className="p-3 font-semibold">{h}</th>)}</tr></thead><tbody>{leads.map((lead) => <tr key={lead.id} className="border-t border-gray-100 align-top"><td className="p-3 whitespace-nowrap">{new Intl.DateTimeFormat("es-CL", { dateStyle: "short", timeStyle: "short", timeZone: "America/Santiago" }).format(new Date(lead.created_at))}</td><td className="p-3 font-medium">{lead.nombre}</td><td className="p-3"><a href={`https://wa.me/${lead.telefono.replace(/\D/g, "")}`} className="text-green-700 underline">{lead.telefono}</a></td><td className="p-3">{lead.comuna}</td><td className="p-3">{lead.servicio}</td><td className="min-w-72 p-3 whitespace-pre-wrap">{lead.mensaje || "—"}</td></tr>)}{leads.length === 0 && <tr><td colSpan={6} className="p-10 text-center text-gray-400">Aún no hay contactos para mostrar.</td></tr>}</tbody></table></div></section>
    </div>
    <p className="mt-6 text-xs text-gray-400">Las estadísticas se registran de forma anónima únicamente cuando el visitante acepta las cookies.</p>
  </main>;
}
