"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/lib/config";

const STORAGE_KEY = "cc_popup_dismissed";
const SESSION_KEY = "cc_page_views";

function buildWAMessage(data: Record<string, string>) {
  return [
    "Hola, quiero cotizar un camarote con escritorio.",
    data.nombre ? `Nombre: ${data.nombre}` : "",
    data.comuna ? `Comuna: ${data.comuna}` : "",
    data.tipo ? `Tipo: ${data.tipo}` : "",
    data.cantidad ? `Cantidad: ${data.cantidad}` : "",
    data.fecha ? `Fecha estimada: ${data.fecha}` : "",
    data.comentarios ? `Comentarios: ${data.comentarios}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function LeadCapturePopup() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<"form" | "done">("form");
  const [form, setForm] = useState({
    nombre: "",
    comuna: "",
    tipo: "",
    cantidad: "1",
    fecha: "",
    comentarios: "",
  });

  useEffect(() => {
    // Track page views in session
    const views = parseInt(sessionStorage.getItem(SESSION_KEY) || "0", 10) + 1;
    sessionStorage.setItem(SESSION_KEY, String(views));

    // Don't show if already dismissed in this browser
    if (localStorage.getItem(STORAGE_KEY)) return;

    // Show after 25 seconds OR after 3 page views
    const timer = setTimeout(() => setVisible(true), 25000);
    if (views >= 3) {
      clearTimeout(timer);
      setTimeout(() => setVisible(true), 1500);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  const handleSend = () => {
    const msg = buildWAMessage(form);
    const url = `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setStep("done");
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={handleDismiss}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {step === "form" ? (
          <>
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-2xl">📚</span>
                <h2 className="text-lg font-bold text-gray-900 mt-1">¿Buscas un camarote con escritorio?</h2>
                <p className="text-gray-500 text-sm">Te cotizamos en minutos por WhatsApp.</p>
              </div>
              <button onClick={handleDismiss} className="text-gray-400 hover:text-gray-600 text-xl font-light ml-4 flex-shrink-0">✕</button>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-gray-700 block mb-1">Nombre</label>
                  <input value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} placeholder="Tu nombre" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-400" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700 block mb-1">Comuna</label>
                  <input value={form.comuna} onChange={(e) => setForm({ ...form, comuna: e.target.value })} placeholder="Tu comuna" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-400" />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">¿Qué modelo te interesa?</label>
                <select value={form.tipo} onChange={(e) => setForm({ ...form, tipo: e.target.value })} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-400 bg-white">
                  <option value="">Selecciona...</option>
                  <option>Camarote con Escritorio (estándar)</option>
                  <option>Camarote con Escritorio Premium</option>
                  <option>Camarote con Escritorio Metálico</option>
                  <option>Camarote con Escritorio a Medida</option>
                  <option>Cama Alta con Escritorio</option>
                  <option>No sé, necesito asesoría</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-gray-700 block mb-1">Cantidad</label>
                  <select value={form.cantidad} onChange={(e) => setForm({ ...form, cantidad: e.target.value })} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-400 bg-white">
                    {["1", "2", "3", "4", "5", "6-10", "10+"].map((n) => <option key={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700 block mb-1">¿Cuándo lo necesitas?</label>
                  <select value={form.fecha} onChange={(e) => setForm({ ...form, fecha: e.target.value })} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-400 bg-white">
                    <option value="">Selecciona...</option>
                    <option>Esta semana</option>
                    <option>Este mes</option>
                    <option>En 1-2 meses</option>
                    <option>Sin urgencia</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">Comentarios (opcional)</label>
                <textarea value={form.comentarios} onChange={(e) => setForm({ ...form, comentarios: e.target.value })} placeholder="Medidas de la pieza, uso, dudas..." rows={2} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-400 resize-none" />
              </div>

              <button onClick={handleSend} className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.5l5.773-1.517A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.669-.492-5.214-1.355l-.374-.222-3.426.9.917-3.35-.244-.388A9.961 9.961 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                Enviar cotización por WhatsApp
              </button>
              <button onClick={handleDismiss} className="w-full text-gray-400 text-xs py-1 hover:text-gray-600">No por ahora</button>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <span className="text-5xl block mb-3">✅</span>
            <h2 className="text-lg font-bold text-gray-900 mb-2">¡Listo! Te esperamos en WhatsApp</h2>
            <p className="text-gray-500 text-sm mb-4">Responderemos tu cotización en minutos durante horario hábil.</p>
            <button onClick={handleDismiss} className="text-sm text-gray-500 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
}
