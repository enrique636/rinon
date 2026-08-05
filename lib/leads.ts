export type Lead = {
  id: string;
  created_at: string;
  nombre: string;
  telefono: string;
  email: string | null;
  comuna: string;
  servicio: string;
  mensaje: string;
  contacto_preferido: string;
  pagina_origen: string;
  estado: string;
};

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase no está configurado");
  return { url: url.replace(/\/$/, ""), key };
}

function getHeaders(key: string) {
  return { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" };
}

export async function createLead(data: Omit<Lead, "id" | "created_at" | "estado">) {
  const config = getSupabaseConfig();
  const response = await fetch(`${config.url}/rest/v1/leads`, {
    method: "POST",
    headers: { ...getHeaders(config.key), Prefer: "return=minimal" },
    body: JSON.stringify({ ...data, estado: "nuevo" }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`No fue posible guardar el contacto (${response.status})`);
}

export async function listLeads(): Promise<Lead[]> {
  const config = getSupabaseConfig();
  const response = await fetch(`${config.url}/rest/v1/leads?select=*&order=created_at.desc&limit=500`, {
    headers: getHeaders(config.key),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`No fue posible cargar los contactos (${response.status})`);
  return response.json() as Promise<Lead[]>;
}

export function isLeadsConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}
