import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Metálicos Santiago — Fabricante Directo con Instalación",
  description: "Cercos metálicos en Santiago. Fabricante directo de cercos de acero para casas, empresas y parcelas. Cerco tubular, de malla o de reja a medida. Instalación incluida en la RM.",
  keywords: [
    "cercos metalicos santiago",
    "cerco metalico",
    "cerco de metal santiago",
    "cercos de acero santiago",
    "cerco metalico para casa",
    "cerco metalico precio chile",
    "fabricante cercos metalicos",
    "cerco metalico instalacion",
    "cerco de fierro santiago",
    "cercos metalicos precio metro lineal",
  ],
  alternates: { canonical: "https://rinon.cl/cercos-metalicos" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosMetalicosPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto cuesta un cerco metálico por metro lineal en Santiago?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio de un cerco metálico por metro lineal depende del tipo (tubular, malla, reja decorativa), la altura y el acabado (pintura o galvanizado). Envía los metros totales y la altura por WhatsApp para un presupuesto exacto el mismo día.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuál es la diferencia entre cerco metálico y cerco perimetral?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Son sinónimos. 'Cerco metálico' y 'cerco perimetral' nombran lo mismo: la estructura de metal que delimita el perímetro de una propiedad. También se llama 'cierre perimetral' o 'reja perimetral'.",
                },
              },
              {
                "@type": "Question",
                name: "¿El cerco metálico requiere permiso municipal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Depende del municipio y de la altura del cerco. En la mayoría de las comunas de Santiago, cercos de hasta 1,80 m no requieren permiso. Para cercos más altos o en zonas con plan regulador específico, consulta con la Dirección de Obras de tu municipio antes de instalar.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Cercos Metálicos</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · A medida · Instalación en Santiago
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cercos Metálicos en Santiago — Fabricante Directo
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos cercos metálicos a medida en Santiago para casas, empresas y parcelas.
            Cerco tubular, de malla electrosoldada o de reja decorativa — con pintura
            electrostática al horno o galvanizado. Instalación incluida en toda la RM.
          </p>
          <a
            href={wa("Hola, necesito cotizar un cerco metálico. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / EMPRESA / PARCELA]. Con portón: [SÍ / NO]. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi cerco metálico
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de cerco metálico</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cerco tubular (reja)", d: "El más popular. Tubo cuadrado estructural con barrotes verticales. Visibilidad parcial, alta resistencia. Ideal para frontis de casas, condominios y empresas." },
              { t: "Cerco de malla electrosoldada", d: "Panel de malla de alambre soldado en cuadrícula. Económico para perímetros grandes. Muy usado en parcelas, industrias y perímetros de bodega." },
              { t: "Cerco decorativo con forja", d: "Estructura tubular con elementos ornamentales de hierro forjado. Para proyectos donde el diseño importa — casas, condominios y conjuntos residenciales." },
              { t: "Cerco pleno (sin visibilidad)", d: "Panel de chapa de acero sin espacios. Da privacidad total. Para bodegas, industrias y propiedades donde no se quiere visibilidad desde la calle." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cierres-perimetrales", label: "Cierres perimetrales", desc: "Todos los tipos y usos" },
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial", desc: "Para empresas y bodegas" },
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "Para zonas húmedas y costeras" },
            { href: "/blog/tipos-de-cierres-perimetrales", label: "Tipos de cierres", desc: "Guía comparativa completa" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros de cerco necesitas?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros, altura y tipo de propiedad. Cotizamos el mismo día con instalación incluida.
          </p>
          <a
            href={wa("Hola, necesito cotizar un cerco metálico. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / EMPRESA / PARCELA]. Estoy en [COMUNA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
