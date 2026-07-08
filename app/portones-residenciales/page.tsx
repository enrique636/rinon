import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones Residenciales Santiago — Fabricante Directo | Buenos Pal Catre",
  description: "Portones metálicos para casas en Santiago. Corredizos y batientes a medida. Fabricante directo con instalación incluida. Con opción de automatización. Cotiza hoy.",
  keywords: ["portones residenciales santiago", "porton metalico casa", "porton para casa santiago", "porton corredizo residencial", "porton batiente casa", "porton metalico precio santiago", "porton para garage", "porton casa santiago precio", "fabricante portones residenciales"],
  alternates: { canonical: "https://rinon.cl/portones-residenciales" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesResidencialesPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Portón Residencial Metálico a Medida",
        description: "Portones metálicos para casas en Santiago. Corredizos y batientes fabricados con las medidas exactas del vano de acceso. Instalación incluida.",
        brand: { "@type": "Brand", name: "Buenos Pal Catre" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué tipo de portón es mejor para una casa?", acceptedAnswer: { "@type": "Answer", text: "Para la mayoría de las casas en Santiago el portón batiente doble es la opción más económica y práctica — funciona bien para vanos de 2 a 3 m y no requiere guía en el suelo. Para vanos más anchos o cuando no hay espacio para abrir las hojas hacia dentro, el corredizo es la alternativa." } },
          { "@type": "Question", name: "¿Incluye instalación el portón?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos el portón en tu casa. El precio incluye transporte y montaje en la Región Metropolitana." } },
          { "@type": "Question", name: "¿Se puede automatizar el portón después?", acceptedAnswer: { "@type": "Answer", text: "Sí. Si al cotizar indicas que quieres dejar el portón preparado para motor a futuro, lo fabricamos con la estructura reforzada necesaria. Agregar la automatización después es más costoso que hacerlo desde el inicio." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Portones Residenciales</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Instalación incluida · Santiago</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portones Residenciales Metálicos para tu Casa</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos portones metálicos para casas en Santiago a la medida exacta de tu vano de acceso. Corredizos, batientes simples y dobles — con diseño a elección y opción de automatización.
          </p>
          <a href={wa("Hola, necesito cotizar un portón para mi casa en Santiago. El vano mide: [ANCHO] m x [ALTO] m. Tipo preferido: [CORREDIZO / BATIENTE].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar portón
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de portón residencial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Batiente doble (el más popular)", d: "Dos hojas que abren hacia adentro o afuera. Ideal para vanos de 2,50 a 3,50 m. La opción más económica para la mayoría de las casas. No necesita guía en el suelo." },
              { t: "Batiente simple", d: "Una sola hoja. Para vanos de hasta 1,20 m o accesos secundarios. También para puertas peatonales integradas al frontis." },
              { t: "Corredizo", d: "Se desliza lateralmente. Requiere espacio de muro o cerco al costado equivalente al ancho del portón. Ideal cuando no hay espacio para abrir hacia adentro o el vano es mayor de 3,50 m." },
              { t: "Corredizo con motor", d: "Portón corredizo con automatización eléctrica. Control remoto, botonera o app según el sistema elegido. La opción premium para mayor comodidad y seguridad." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Cómo elijo el diseño?</h2>
          <div className="space-y-2">
            {[
              ["Diseño tubular vertical", "El más clásico y solicitado. Barrotes verticales de tubo cuadrado, marco perimetral. Compatible con cualquier reja de frontis."],
              ["Diseño horizontal", "Más contemporáneo. Tubo horizontal en lugar de barrotes verticales. Mejor para propiedades con arquitectura moderna."],
              ["Diseño mixto", "Combinación de elementos verticales y horizontales. Da un resultado más personalizado y estético."],
              ["Liso (sin barrotes)", "Plancha de acero sin barrotes — privacidad total. Opción premium que limita la visión desde la calle."],
            ].map(([cat, desc]) => (
              <div key={cat} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-3 text-xs">
                <span className="font-medium text-gray-700 min-w-[140px] flex-shrink-0">{cat}</span>
                <span className="text-gray-500">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas", label: "Reja para el frontis", desc: "El portón va con la reja" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Para galpones y empresas" },
            { href: "/blog/porton-corredizo-vs-batiente", label: "Corredizo vs batiente", desc: "Guía completa de decisión" },
            { href: "/reja-metalica-santiago", label: "Rejas en Santiago", desc: "Comunas donde instalamos" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuánto mide el vano de tu acceso?</h2>
          <p className="text-gray-400 text-sm mb-5">Ancho y alto del vano, tipo de portón y comuna. Te cotizamos el mismo día.</p>
          <a href={wa("Hola, necesito cotizar un portón para casa en Santiago. Vano: [ANCHO] m x [ALTO] m. Tipo: [BATIENTE/CORREDIZO]. Con/sin motor: [CON/SIN]. Comuna: [COMUNA].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
