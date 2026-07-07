import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos para Canchas — Malla y Reja para Recintos Deportivos",
  description: "Cercos perimetrales para canchas de fútbol, tenis, básquetbol y recintos deportivos en Chile. Malla tipo olímpica, reja tubular y paneles. Fabricante directo con instalación incluida.",
  keywords: ["cercos para canchas","cerco para cancha de futbol","malla para cancha deportiva","cerco perimetral cancha","cierre cancha de tenis","reja para recinto deportivo","cerco cancha basquetbol","malla olimpica cancha chile","cerco deportivo precio","fabricante cercos canchas chile"],
  alternates: { canonical: "https://dumar.cl/cercos-para-canchas" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosParaCanchasPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Cercos para Canchas</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Malla olímpica · Reja tubular · Recintos deportivos</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos para Canchas y Recintos Deportivos</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Un cerco deportivo tiene exigencias distintas: debe contener el balón, resistir golpes de cuerpo y durar en exterior sin mantenimiento frecuente. Fabricamos cercos de malla y reja para canchas de fútbol, tenis, básquetbol, multicancha y recintos municipales.</p>
          <a href={wa("Hola, necesito cotizar cerco para cancha deportiva. Tipo de cancha: [FÚTBOL / TENIS / BÁSQUETBOL / MULTICANCHA]. Perímetro aproximado: [METROS] ml. Altura del cerco: [ALTURA] m. Ubicación: [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco para cancha</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de cerco según deporte</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Deporte</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Altura estándar</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Tipo recomendado</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Fútbol (cancha completa)", "2,50–4,00 m", "Malla olímpica galvanizada sobre postes"],
                  ["Fútbol (patio colegio)", "2,00–2,50 m", "Reja tubular o malla olímpica"],
                  ["Tenis", "3,00–4,00 m", "Malla olímpica galvanizada — fondo y laterales"],
                  ["Básquetbol / vóleibol", "2,00–3,00 m", "Malla o reja tubular, sin obstruir visibilidad"],
                  ["Multicancha", "2,00–3,00 m", "Reja tubular o malla tipo olímpica"],
                ].map(([dep, alt, tipo]) => (
                  <tr key={dep} className="border-t border-gray-100">
                    <td className="p-3 text-gray-700">{dep}</td>
                    <td className="p-3 text-gray-500">{alt}</td>
                    <td className="p-3 text-gray-500">{tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-para-colegios", label: "Cercos para colegios", desc: "Establecimientos educacionales" },
            { href: "/cierres-perimetrales", label: "Tipos de cierres", desc: "Guía para elegir el correcto" },
            { href: "/cierre-perimetral-industrial", label: "Cierre perimetral mayor", desc: "Proyectos de gran perímetro" },
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "Para canchas en exterior con lluvia" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza el cerco de tu cancha</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo de cancha, perímetro y altura. Para proyectos grandes coordinamos visita técnica.</p>
          <a href={wa("Hola, necesito cerco para cancha. Tipo: [FÚTBOL / TENIS / MULTICANCHA]. Perímetro: [METROS] ml. Altura: [ALTURA] m. Ubicación: [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
