import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Ovalle — Fabricante | Región de Coquimbo",
  description: "Cercos perimetrales en Ovalle. Fabricante directo. Cercos para casas, empresas y parcelas en el interior de la Región de Coquimbo. Instalación incluida. Cotiza hoy.",
  keywords: ["cercos perimetrales ovalle","cerco perimetral ovalle","reja metalica ovalle","cerco para parcela ovalle","fabricante cercos ovalle coquimbo","cerco para casa ovalle","cercos region coquimbo interior"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-ovalle" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesOvallePage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan cercos perimetrales en Ovalle?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos los cercos en nuestro taller en Santiago y realizamos la instalación en Ovalle. Cotizamos el mismo día — solo necesitamos los metros lineales, la altura y el tipo de uso (casa, condominio o industria)." } },
          { "@type": "Question", name: "¿Cuánto cuesta el metro lineal de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo: malla eslabonada es la opción más económica, tubo estructural pintado al horno tiene un costo medio, y el cerco galvanizado es el de mayor durabilidad y costo. Cotiza por WhatsApp con los metros y altura para obtener un precio exacto." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Ovalle</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Clima seco interior · Coquimbo</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Ovalle — Interior de Coquimbo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos cercos perimetrales en Ovalle y el interior de la Región de Coquimbo. Casas, empresas, parcelas y predios agrícolas del valle del Limarí. Clima seco de la zona favorece el acabado en pintura electrostática al horno con larga vida útil.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en Ovalle. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / EMPRESA / PARCELA]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi cerco en Ovalle</a>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-900">
          <strong>Clima seco y alta radiación UV:</strong> Ovalle tiene uno de los índices UV más altos de Chile durante el verano. El calor y la radiación aceleran el deterioro de pinturas convencionales. Recomendamos pintura electrostática al horno con pigmentos resistentes a UV — dura 12–18 años en estas condiciones.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-la-serena", label: "Cercos La Serena", desc: "Capital regional vecina" },
            { href: "/cercos-para-parcelas", label: "Cercos para parcelas", desc: "Predios y parcelas de agrado" },
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial", desc: "Empresas y bodegas" },
            { href: "/cierres-perimetrales", label: "Tipos de cierres", desc: "Guía para elegir el correcto" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Ovalle</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Ovalle. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
