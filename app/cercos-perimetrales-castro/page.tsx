import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Castro — Galvanizados para Chiloé | Los Lagos",
  description: "Cercos perimetrales en Castro, Chiloé. Fabricante directo. Cercos galvanizados para la zona más lluviosa de Chile. Resistentes a la humedad permanente y el salitre marino del canal de Chacao.",
  keywords: ["cercos perimetrales castro","cerco perimetral castro chiloe","reja metalica castro","cerco galvanizado castro","cerco resistente humedad chiloe","cerco perimetral chiloe","fabricante cercos castro los lagos"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-castro" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesCastroPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan cercos perimetrales en Castro?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos los cercos en nuestro taller en Santiago y realizamos la instalación en Castro. Cotizamos el mismo día — solo necesitamos los metros lineales, la altura y el tipo de uso (casa, condominio o industria)." } },
          { "@type": "Question", name: "¿Cuánto cuesta el metro lineal de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo: malla eslabonada es la opción más económica, tubo estructural pintado al horno tiene un costo medio, y el cerco galvanizado es el de mayor durabilidad y costo. Cotiza por WhatsApp con los metros y altura para obtener un precio exacto." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Castro</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Galvanizado obligatorio · Chiloé · Humedad permanente</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Castro — Chiloé</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Chiloé tiene más de 2.000 mm de lluvia al año y humedad permanente. Es una de las zonas más agresivas de Chile para cualquier estructura metálica. Fabricamos cercos perimetrales con galvanizado en caliente — el único acabado que garantiza durabilidad real en estas condiciones.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en Castro, Chiloé. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / EMPRESA / PARCELA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi cerco en Castro</a>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-900">
          <strong>Chiloé: la condición más exigente de Chile para el acero.</strong> Con más de 2.000 mm de lluvia anual, humedad relativa permanente sobre 80% y viento marino desde el Canal de Chacao, la pintura convencional se deteriora en 2–4 años. <strong>Recomendamos galvanizado en caliente</strong> para cualquier instalación que deba durar más de 10 años. Precio mayor, pero es la única opción que realmente funciona aquí.
        </div>
        <div className="grid grid-cols-1 sm:grid-calls-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-puerto-montt", label: "Cercos Puerto Montt", desc: "Capital regional Los Lagos" },
            { href: "/cercos-perimetrales-osorno", label: "Cercos Osorno", desc: "Zona lluviosa Los Lagos norte" },
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "El acabado para zonas húmedas" },
            { href: "/blog/galvanizado-vs-pintado-cuando-elegir", label: "Galvanizado vs pintado", desc: "Por qué el galvanizado es obligatorio en el sur" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Castro, Chiloé</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Recomendamos galvanizado para Chiloé.</p>
          <a href={wa("Hola, necesito cerco perimetral en Castro, Chiloé. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
