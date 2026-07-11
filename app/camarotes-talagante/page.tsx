import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Talagante — Alojamiento Agrícola y Temporeros | Rinon.cl",
  description:
    "Camarotes metálicos para Talagante e Isla de Maipo. Alojamiento de temporeros y trabajadores agrícolas. Fabricante directo con despacho nacional.",
  keywords: [
    "camarotes talagante",
    "camarotes trabajadores talagante",
    "camas temporeros talagante",
    "camarotes isla de maipo",
    "alojamiento agricola talagante",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-talagante" },
};

export default function CamarotesTalagantePage() {
  const wa = getWhatsAppUrl("Hola, necesito cotizar camarotes para trabajadores en Talagante / Isla de Maipo.");
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-agricolas" className="hover:text-gray-600">Agrícola</Link><span>/</span>
          <span className="text-gray-700 font-medium">Talagante</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 text-sm text-emerald-700 font-medium mb-5">🌾 Talagante · Isla de Maipo · Agrícola RM</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes para Talagante e Isla de Maipo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Talagante e Isla de Maipo concentran una importante actividad agrícola y hortofrutícola
            en el sector poniente de la Región Metropolitana. El alojamiento de cuadrillas de trabajo
            durante temporada requiere camarotes resistentes al uso intensivo y fáciles de mantener.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Despachamos desde Santiago con empresa de transporte. Para proyectos de más de 20 unidades,
            coordinamos el despacho con instalación incluida.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
                      <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-desmontable-pieza-adolescente.jpg" alt="Camarote desmontable Talagante — pieza adolescente precio directo" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para Talagante</a>
            <Link href="/camarotes-agricolas" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver catálogo agrícola</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-melipilla", label: "Camarotes Melipilla", desc: "Zona agrícola contigua" },
            { href: "/camarotes-buin", label: "Camarotes Buin", desc: "Sur RM — temporeros" },
            { href: "/camarotes-agricolas", label: "Camarotes Agrícolas", desc: "Catálogo sector agrícola" },
            { href: "/camarotes-al-por-mayor", label: "Precios mayoristas", desc: "Volumen desde 20 unidades" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-emerald-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Proyecto en Talagante?</h2>
          <p className="text-emerald-200 text-sm mb-5">Escríbenos con la cantidad y el plazo. Cotizamos sin compromiso.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Solicitar cotización</a>
        </div>
      </div>
    </div>
  );
}
