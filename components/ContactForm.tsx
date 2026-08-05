"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { SITE_CONFIG } from "@/lib/config";

const services = [
  "Comprar camarotes o camas metálicas",
  "Servicio de pintura electrostática",
  "Estructuras metálicas",
  "Portones, rejas o cierres perimetrales",
  "Otro",
];

const regions = [
  "Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo",
  "Valparaíso", "Metropolitana de Santiago", "O’Higgins", "Maule", "Ñuble",
  "Biobío", "La Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes",
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
        <p className="text-gray-500 text-sm mt-2">Déjanos tus datos y selecciona lo que necesitas. Te responderemos directamente por WhatsApp.</p>
      </div>

      <div className="hidden" aria-hidden="true"><label>Sitio web<input name="empresa_web" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="text-sm font-medium text-gray-700">Nombre *<input name="nombre" required minLength={2} autoComplete="name" className="mt-1.5 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" /></label>
        <label className="text-sm font-medium text-gray-700">WhatsApp *<input name="telefono" required inputMode="tel" autoComplete="tel" placeholder="+56 9 1234 5678" className="mt-1.5 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" /></label>
        <label className="text-sm font-medium text-gray-700 sm:col-span-2">Región *
          <select name="comuna" required defaultValue="" autoComplete="address-level1" className="mt-1.5 w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="" disabled>Selecciona tu región</option>{regions.map((region) => <option key={region}>{region}</option>)}
          </select>
        </label>
      </div>

      <label className="text-sm font-medium text-gray-700 block">Servicio que necesitas *
        <select name="servicio" required defaultValue="" className="mt-1.5 w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="" disabled>Selecciona un servicio</option>{services.map((service) => <option key={service}>{service}</option>)}
        </select>
      </label>
      <label className="text-sm font-medium text-gray-700 block">Cuéntanos un poco más <span className="font-normal text-gray-400">(opcional)</span>
        <textarea name="mensaje" rows={4} placeholder="Por ejemplo: qué necesitas, cantidades, medidas aproximadas, comuna y cualquier duda." className="mt-1.5 w-full border border-gray-300 rounded-xl px-4 py-3 resize-y focus:outline-none focus:ring-2 focus:ring-green-500" />
      </label>
      <label className="flex items-start gap-3 text-xs text-gray-500"><input type="checkbox" name="acepta_privacidad" required className="mt-0.5" /><span>Acepto que Rinon.cl use estos datos únicamente para responder mi solicitud. Consulta nuestra <Link href="/politica-de-privacidad" className="underline text-gray-700">política de privacidad</Link>.</span></label>
      <button disabled={status === "sending"} className="w-full bg-gray-900 hover:bg-black disabled:bg-gray-400 text-white font-bold rounded-xl py-3.5 transition-colors">{status === "sending" ? "Enviando…" : "Enviar consulta"}</button>
      {message && <p role="status" className={`text-sm rounded-lg p-3 ${status === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-700"}`}>{message}</p>}
      <p className="text-center text-xs text-gray-400">También puedes escribir directamente al WhatsApp {SITE_CONFIG.telefono}.</p>
    </form>
  );
}
