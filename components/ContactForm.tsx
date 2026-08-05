"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { SITE_CONFIG } from "@/lib/config";

const services = [
  "Camarotes y camas metálicas", "Cierres y cercos perimetrales", "Rejas de seguridad",
  "Portones metálicos", "Pintura electrostática", "Estructuras metálicas a medida", "Otro servicio",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, acepta_privacidad: form.get("acepta_privacidad") === "on", pagina_origen: window.location.pathname }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "No fue posible enviar la consulta.");
      setStatus("success");
      setMessage("Recibimos tu consulta. Te contactaremos lo antes posible.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Ocurrió un error.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-5">
      <div>
        <p className="text-green-700 font-semibold text-sm mb-1">Cotización sin compromiso</p>
        <h2 className="text-2xl font-bold text-gray-900">Cuéntanos qué necesitas</h2>
        <p className="text-gray-500 text-sm mt-2">Déjanos tus datos y la información principal del trabajo para responderte con mayor precisión.</p>
      </div>

      <div className="hidden" aria-hidden="true"><label>Sitio web<input name="empresa_web" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="text-sm font-medium text-gray-700">Nombre y apellido *<input name="nombre" required minLength={2} autoComplete="name" className="mt-1.5 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" /></label>
        <label className="text-sm font-medium text-gray-700">Teléfono / WhatsApp *<input name="telefono" required inputMode="tel" autoComplete="tel" placeholder="+56 9 1234 5678" className="mt-1.5 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" /></label>
        <label className="text-sm font-medium text-gray-700">Correo electrónico<input name="email" type="email" autoComplete="email" className="mt-1.5 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" /></label>
        <label className="text-sm font-medium text-gray-700">Comuna o ciudad *<input name="comuna" required autoComplete="address-level2" className="mt-1.5 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" /></label>
      </div>

      <label className="text-sm font-medium text-gray-700 block">Servicio que necesitas *
        <select name="servicio" required defaultValue="" className="mt-1.5 w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="" disabled>Selecciona un servicio</option>{services.map((service) => <option key={service}>{service}</option>)}
        </select>
      </label>
      <label className="text-sm font-medium text-gray-700 block">Tu consulta *
        <textarea name="mensaje" required minLength={5} rows={5} placeholder="Describe medidas aproximadas, cantidad, ubicación, plazo y cualquier duda." className="mt-1.5 w-full border border-gray-300 rounded-xl px-4 py-3 resize-y focus:outline-none focus:ring-2 focus:ring-green-500" />
      </label>
      <fieldset><legend className="text-sm font-medium text-gray-700 mb-2">¿Cómo prefieres que te contactemos?</legend><div className="flex flex-wrap gap-4 text-sm text-gray-600">{["WhatsApp", "Llamada", "Correo"].map((option) => <label key={option} className="flex items-center gap-2"><input type="radio" name="contacto_preferido" value={option} defaultChecked={option === "WhatsApp"} />{option}</label>)}</div></fieldset>
      <label className="flex items-start gap-3 text-xs text-gray-500"><input type="checkbox" name="acepta_privacidad" required className="mt-0.5" /><span>Acepto que Rinon.cl use estos datos únicamente para responder mi solicitud. Consulta nuestra <Link href="/politica-de-privacidad" className="underline text-gray-700">política de privacidad</Link>.</span></label>
      <button disabled={status === "sending"} className="w-full bg-gray-900 hover:bg-black disabled:bg-gray-400 text-white font-bold rounded-xl py-3.5 transition-colors">{status === "sending" ? "Enviando…" : "Enviar consulta"}</button>
      {message && <p role="status" className={`text-sm rounded-lg p-3 ${status === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-700"}`}>{message}</p>}
      <p className="text-center text-xs text-gray-400">También puedes escribir directamente al WhatsApp {SITE_CONFIG.telefono}.</p>
    </form>
  );
}
