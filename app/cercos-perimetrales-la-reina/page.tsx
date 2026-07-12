import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales La Reina — Fabricante con Instalación | Oriente RM",
  description: "Cercos perimetrales en La Reina. Fabricante directo. Cercos tubulares de diseño para casas y condominios del sector oriente de Santiago. Instalación incluida.",
  keywords: ["cercos perimetrales la reina","cerco perimetral la reina santiago","cierre perimetral la reina rm","cerco metalico la reina","fabricante cercos la reina","instalacion cerco la reina"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-la-reina" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesLaReinaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan cercos perimetrales en La Reina?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos los cercos en nuestro taller en Santiago y realizamos la instalación en La Reina. Cotizamos el mismo día — solo necesitamos los metros lineales, la altura y el tipo de uso (casa, condominio o industria)." } },
          { "@type": "Question", name: "¿Cuánto cuesta el metro lineal de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo: malla eslabonada es la opción más económica, tubo estructural pintado al horno tiene un costo medio, y el cerco galvanizado es el de mayor durabilidad y costo. Cotiza por WhatsApp con los metros y altura para obtener un precio exacto." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos RM</Link><span>/</span>
          <span className="text-gray-700 font-medium">La Reina</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Oriente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en La Reina — Sector Oriente de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">En La Reina el cerco perimetral es parte del diseño de la propiedad — no solo seguridad. Fabricamos cercos tubulares con acabado en negro mate o gris antracita al horno para casas y condominios del sector oriente.</p>
          <a href={wa("Hola, necesito cotizar cerco perimetral en La Reina. Metros: [METROS] ml. Altura: [ALTURA] m. Estilo: [TUBULAR LISO / DECORATIVO]. Con portón: [SÍ / NO]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco perimetral</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-las-condes", label: "Cercos Las Condes", desc: "Oriente RM" },
            { href: "/cercos-perimetrales-nunoa", label: "Cercos Ñuñoa", desc: "Sector oriente" },
            { href: "/rejas-metalicas-la-reina", label: "Rejas La Reina", desc: "Frontis y ventanas" },
            { href: "/pintura-electrostatica-la-reina", label: "Pintura La Reina", desc: "Acabado al horno" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en La Reina</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, estilo y sector. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en La Reina. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
