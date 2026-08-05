import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, isValidAdminToken } from "@/lib/admin-auth";
import { isLeadsConfigured, listLeads } from "@/lib/leads";

export const metadata: Metadata = { title: "Administración de contactos", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const query = await searchParams;
  const authenticated = isValidAdminToken((await cookies()).get(ADMIN_COOKIE)?.value);
  if (!authenticated) return <main className="min-h-[70vh] flex items-center justify-center p-4"><form method="post" action="/api/admin/login" className="w-full max-w-sm border border-gray-200 rounded-2xl p-7 shadow-sm"><p className="text-sm text-gray-500">Rinon.cl</p><h1 className="text-2xl font-bold mt-1 mb-6">Administración</h1><label className="text-sm font-medium">Contraseña<input type="password" name="password" required autoComplete="current-password" className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3" /></label>{query.error && <p className="text-red-600 text-sm mt-3">Contraseña incorrecta.</p>}<button className="w-full bg-gray-900 text-white font-bold rounded-xl py-3 mt-5">Ingresar</button></form></main>;

  let leads = [] as Awaited<ReturnType<typeof listLeads>>;
  let loadError = "";
  if (isLeadsConfigured()) { try { leads = await listLeads(); } catch { loadError = "No fue posible cargar los contactos."; } }
  return <main className="max-w-7xl mx-auto px-4 py-10"><header className="flex items-center justify-between gap-4 mb-8"><div><p className="text-sm text-gray-500">Rinon.cl</p><h1 className="text-3xl font-bold">Contactos recibidos</h1><p className="text-gray-500 mt-1">{leads.length} consultas guardadas</p></div><form method="post" action="/api/admin/logout"><button className="border border-gray-300 rounded-lg px-4 py-2 text-sm">Cerrar sesión</button></form></header>
    {!isLeadsConfigured() && <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-4 mb-6">Falta conectar Supabase para comenzar a guardar y mostrar contactos.</div>}{loadError && <div className="bg-red-50 text-red-700 rounded-xl p-4 mb-6">{loadError}</div>}
    <div className="overflow-x-auto border border-gray-200 rounded-2xl"><table className="w-full text-sm"><thead className="bg-gray-50 text-left"><tr>{["Fecha", "Cliente", "WhatsApp", "Región", "Solicitud", "Detalles"].map((h) => <th key={h} className="p-3 font-semibold">{h}</th>)}</tr></thead><tbody>{leads.map((lead) => <tr key={lead.id} className="border-t border-gray-100 align-top"><td className="p-3 whitespace-nowrap">{new Intl.DateTimeFormat("es-CL", { dateStyle: "short", timeStyle: "short", timeZone: "America/Santiago" }).format(new Date(lead.created_at))}</td><td className="p-3 font-medium">{lead.nombre}</td><td className="p-3"><a href={`https://wa.me/${lead.telefono.replace(/\D/g, "")}`} className="text-green-700 underline">{lead.telefono}</a></td><td className="p-3">{lead.comuna}</td><td className="p-3">{lead.servicio}</td><td className="p-3 min-w-72 whitespace-pre-wrap">{lead.mensaje || "—"}</td></tr>)}{leads.length === 0 && <tr><td colSpan={6} className="p-10 text-center text-gray-400">Aún no hay contactos para mostrar.</td></tr>}</tbody></table></div>
  </main>;
}
