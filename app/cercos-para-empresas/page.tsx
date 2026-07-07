import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos para Empresas — Cierre Perimetral Industrial y Comercial",
  description: "Cercos perimetrales para empresas en Chile. Fabricante directo. Cercos de malla, tubo y ángulo para industrias, bodegas, oficinas y locales comerciales. Instalación incluida.",
  keywords: [
    "cercos para empresas",
    "cerco perimetral empresa chile",
    "cierre perimetral industrial empresa",
    "malla perimetral empresa",
    "cerco metalico empresa bodega",
    "cerco perimetral fabrica chile",
    "instalacion cerco empresa santiago",
    "fabricante cercos empresas chile",
    "cerramiento perimetral empresa",
  ],
  alternates: { canonical: "https://dumar.cl/cercos-para-empresas" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosParaEmpresasPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Qué tipo de cerco se usa en empresas e industrias?", acceptedAnswer: { "@type": "Answer", text: "Depende del uso. Para delimitar terrenos grandes se usa malla eslabonada con postes. Para fachadas de empresas con imagen corporativa se usa tubo estructural. Para accesos industriales se prefieren cercos de ángulo reforzado con portones vehiculares de doble hoja." } },
              { "@type": "Question", name: "¿Qué altura debe tener el cerco de una empresa?", acceptedAnswer: { "@type": "Answer", text: "Lo mínimo recomendado para empresas es 1,80 m. Para industrias con mayor requerimiento de seguridad se trabaja con 2,00–2,40 m, con opcional anti-trepa o concertina en la parte superior." } },
            ],
          }),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Cercos para Empresas</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Industrial y comercial · A medida · Instalación en Chile</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos para Empresas — Cierre Perimetral Industrial y Comercial</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            El cerramiento perimetral de una empresa cumple tres funciones: delimitar la
            propiedad, controlar el acceso de personas y vehículos, y proyectar una imagen
            de orden y profesionalismo. Fabricamos cercos para empresas de todos los tamaños
            — desde una oficina con pequeño estacionamiento hasta un parque industrial de
            varios hectáreas.
          </p>
          <a href={wa("Hola, necesito cotizar cerco perimetral para empresa. Metros lineales: [METROS] ml. Altura requerida: [ALTURA] m. Tipo de empresa: [BODEGA / INDUSTRIA / OFICINA / COMERCIO]. Con portón vehicular: [SÍ / NO]. Ubicación: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco para empresa</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de cerco según el tipo de empresa</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Tipo de empresa</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Cerco recomendado</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Altura típica</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Oficinas y locales comerciales", "Tubo estructural con diseño — imagen corporativa", "1,50–1,80 m"],
                  ["Bodegas y galpones", "Malla eslabonada o tubo mixto — economía y resistencia", "1,80–2,20 m"],
                  ["Industria y manufactura", "Ángulo reforzado con malla o tubo — alta resistencia", "2,00–2,40 m"],
                  ["Parques logísticos", "Malla pesada con portones industriales — camiones", "2,20–2,40 m + anti-trepa"],
                  ["Estacionamientos comerciales", "Malla liviana con barreras de acceso", "1,20–1,50 m"],
                ].map(([tipo, cerco, altura]) => (
                  <tr key={tipo} className="border-t border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{tipo}</td>
                    <td className="p-3 text-gray-500">{cerco}</td>
                    <td className="p-3 text-gray-500 whitespace-nowrap">{altura}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-anti-trepa", label: "Cercos anti-trepa", desc: "Seguridad máxima en perímetro" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Accesos de alto tráfico" },
            { href: "/cercos-para-estacionamientos", label: "Cercos para estacionamientos", desc: "Patio vehicular empresarial" },
            { href: "/rejas-para-galpones", label: "Rejas para galpones", desc: "Separación interna en galpón" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza el cerco de tu empresa</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y tipo de empresa. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral para empresa. Metros: [METROS] ml. Altura: [ALTURA] m. Tipo: [DATO]. Con portón: [SÍ / NO]. Ubicación: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
