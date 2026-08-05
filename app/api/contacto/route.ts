import { createLead } from "@/lib/leads";

export const runtime = "nodejs";
const attempts = new Map<string, number[]>();

function clean(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((time) => now - time < 3_600_000);
  recent.push(now);
  attempts.set(ip, recent);
  return recent.length > 8;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) return Response.json({ error: "Demasiados intentos. Intenta más tarde." }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return Response.json({ error: "Solicitud inválida." }, { status: 400 }); }
  if (clean(body.empresa_web, 100)) return Response.json({ ok: true });

  const nombre = clean(body.nombre, 100);
  const telefono = clean(body.telefono, 30).replace(/[^\d+ ()-]/g, "");
  const email = clean(body.email, 160);
  const comuna = clean(body.comuna, 100);
  const servicio = clean(body.servicio, 160);
  const mensaje = clean(body.mensaje, 2000);
  const contactoPreferido = clean(body.contacto_preferido, 30) || "WhatsApp";
  const paginaOrigen = clean(body.pagina_origen, 300) || "/contacto";

  if (nombre.length < 2 || telefono.replace(/\D/g, "").length < 8 || !comuna || !servicio || mensaje.length < 5) {
    return Response.json({ error: "Completa nombre, teléfono, comuna, servicio y consulta." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ error: "El correo no es válido." }, { status: 400 });
  if (body.acepta_privacidad !== true) return Response.json({ error: "Debes aceptar el uso de tus datos." }, { status: 400 });

  try {
    await createLead({ nombre, telefono, email: email || null, comuna, servicio, mensaje, contacto_preferido: contactoPreferido, pagina_origen: paginaOrigen });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Error al guardar contacto", error);
    return Response.json({ error: "No pudimos guardar tu consulta. Escríbenos por WhatsApp." }, { status: 503 });
  }
}
