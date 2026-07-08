import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Temporeros y Agrícolas — Fabricante Chile | Camarotes Chile",
  description:
    "Fabricantes de camarotes metálicos para temporeros, packing, bodegas agrícolas y alojamiento de trabajadores de temporada. Despacho a toda la zona central de Chile.",
  keywords: [
    "camarotes para temporeros Chile",
    "camas para packing Chile",
    "camarotes agricolas Chile",
    "alojamiento temporeros Chile",
    "camarotes para trabajadores temporada",
    "equipamiento packing agricola",
    "camas para cuadrillas agricolas",
    "camarotes Curicó Talca Rancagua",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-agricolas" },
  openGraph: {
    title: "Camarotes para Temporeros y Faenas Agrícolas — Fabricante Chile",
    description: "Camarotes metálicos para temporeros, packing y alojamiento agrícola. Despacho a zona central.",
    type: "website",
    locale: "es_CL",
  },
};

function getAgricolaWAUrl(ciudad?: string): string {
  const dest = ciudad ? ` para *${ciudad}*` : "";
  const msg = encodeURIComponent(`Hola, necesito cotizar camarotes metálicos para alojamiento de temporeros${dest}. ¿Pueden ayudarme con precios y disponibilidad?`);
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${msg}`;
}

const CIUDADES_AGRICOLAS = [
  "Buin", "Paine", "Talagante", "Melipilla", "Rancagua", "Requínoa", "Rengo", "San Fernando", "Curicó", "Molina", "Talca", "Linares",
];

export default function CamarotesAgricolasPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Fabrican camarotes para temporeros en Chile?", acceptedAnswer: { "@type": "Answer", text: "Sí. Somos fabricantes directos de camarotes metálicos para alojamiento de temporeros, packing y faenas agrícolas. Despachamos a toda la zona central de Chile." } },
          { "@type": "Question", name: "¿Cuántas unidades mínimas para alojamiento de temporeros?", acceptedAnswer: { "@type": "Answer", text: "Cotizamos desde 5 unidades. Para bodegas o packings que necesitan equipar 20 o más camas, el precio por unidad mejora significativamente." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/empresas" className="hover:text-gray-600">Empresas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Agrícolas</span>
        </nav>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-300 rounded-full px-4 py-1.5 text-sm text-green-800 font-medium mb-5">
            🌾 Temporeros · Packing · Zona central de Chile
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarotes para Temporeros y Faenas Agrícolas
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Equipamos el alojamiento de trabajadores de temporada, packings, bodegas y
            fundos en toda la zona central de Chile. Precio de fábrica sin intermediarios.
          </p>
          <a href={getAgricolaWAUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar para agrícola
          </a>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Usos en el sector agrícola</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { emoji: "📦", titulo: "Packing", desc: "Alojamiento para trabajadores de packings frutícolas y hortícolas durante la temporada alta. Rápido de instalar y de fácil limpieza." },
              { emoji: "🏕️", titulo: "Temporeros de temporada", desc: "Camarotes para alojar cuadrillas de temporada en fundos y empresas agrícolas de la zona central." },
              { emoji: "🌿", titulo: "Viñas y frutícolas", desc: "Alojamiento para trabajadores de vendimia, poda y cosecha frutícola en la Región del Maule, O'Higgins y Metropolitana." },
              { emoji: "🏗️", titulo: "Bodegas y galpones", desc: "Equipamiento para bodegas de personal, vestuarios y dormitorios de guardia en instalaciones agrícolas." },
            ].map(r => (
              <div key={r.titulo} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4 hover:border-green-300 transition-all">
                <span className="text-3xl">{r.emoji}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{r.titulo}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ciudades de la zona agrícola con despacho</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {CIUDADES_AGRICOLAS.map(ciudad => (
              <a key={ciudad} href={getAgricolaWAUrl(ciudad)} target="_blank" rel="noopener noreferrer" className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center hover:border-green-300 hover:bg-green-50 transition-all">
                <p className="text-sm font-medium text-gray-700">{ciudad}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Fabrican camarotes aptos para el uso en packing?", a: "Sí. Nuestros camarotes metálicos son especialmente adecuados para packing: son fáciles de limpiar, no retienen humedad ni olores y soportan el uso intensivo de temporadas largas." },
              { q: "¿Pueden armar los camarotes en el fundo?", a: "Para pedidos grandes, podemos coordinar instalación en sitio. Para volúmenes medianos, el armado es simple y no requiere herramientas especiales." },
              { q: "¿Emiten factura para empresa agrícola?", a: "Sí, emitimos factura electrónica para toda empresa. Para temporadas recurrentes con el mismo cliente, evaluamos condiciones de precio preferencial." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas equipar alojamiento agrícola?</h2>
          <p className="text-green-200 text-sm mb-5">Cuéntanos la cantidad de camas y el destino. Cotización en el día.</p>
          <a href={getAgricolaWAUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
