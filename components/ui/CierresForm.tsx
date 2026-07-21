"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/config";

const WA = `https://wa.me/${SITE_CONFIG.whatsapp.numero}`;
const getWA = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

const TIPOS_PROYECTO = [
  "Obra en construcción",
  "Bodega / Galpón",
  "Industria",
  "Condominio",
  "Estacionamiento",
  "Terreno / Parcela",
  "Faena minera / forestal",
  "Otro",
];

export function CierresForm() {
  const [form, setForm] = useState({
    nombre: "", empresa: "", telefono: "", email: "",
    ciudad: "", tipo: "", metros: "", instalacion: "", comentarios: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, quiero cotizar un cierre perimetral:\n\nNombre: ${form.nombre}\nEmpresa: ${form.empresa || "—"}\nTeléfono: ${form.telefono}\nEmail: ${form.email || "—"}\nCiudad/comuna: ${form.ciudad}\nTipo de proyecto: ${form.tipo}\nMetros aprox.: ${form.metros}\nNecesita instalación: ${form.instalacion}\n\n${form.comentarios ? "Comentarios: " + form.comentarios : ""}`;
    window.open(getWA(msg), "_blank");
  };

  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div id="cotizar" className="mb-14">
      <div className="bg-slate-900 rounded-2xl p-8 md:p-10">
        <h2 className="text-2xl font-bold text-white mb-2">Cotiza tu cierre perimetral</h2>
        <p className="text-slate-400 text-sm mb-8">Completa el formulario y te respondemos por WhatsApp en el día.</p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required placeholder="Nombre *" value={form.nombre} onChange={e => set("nombre", e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-400" />
          <input placeholder="Empresa (opcional)" value={form.empresa} onChange={e => set("empresa", e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-400" />
          <input required placeholder="Teléfono *" value={form.telefono} onChange={e => set("telefono", e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-400" />
          <input placeholder="Email" value={form.email} onChange={e => set("email", e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-400" />
          <input required placeholder="Ciudad / Comuna *" value={form.ciudad} onChange={e => set("ciudad", e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-400" />
          <select required value={form.tipo} onChange={e => set("tipo", e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-400 text-white">
            <option value="">Tipo de proyecto *</option>
            {TIPOS_PROYECTO.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
          <input placeholder="Metros lineales aprox." value={form.metros} onChange={e => set("metros", e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-400" />
          <select value={form.instalacion} onChange={e => set("instalacion", e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-400 text-white">
            <option value="">¿Necesita instalación?</option>
            <option value="Sí, con instalación">Sí, con instalación</option>
            <option value="No, solo fabricación y despacho">No, solo fabricación y despacho</option>
          </select>
          <textarea placeholder="Comentarios, detalles del terreno, tipo de suelo, referencia..."
            value={form.comentarios} onChange={e => set("comentarios", e.target.value)}
            rows={3} className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-400 resize-none" />
          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-full text-base transition-colors">
              Enviar cotización por WhatsApp
            </button>
            <p className="text-slate-500 text-xs text-center mt-3">Al enviar se abre WhatsApp con tus datos ya escritos — solo confirma el mensaje.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
