import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Cerrillos — Fabricante con Instalación | Sur Poniente RM",
  description: "Cercos perimetrales en Cerrillos. Fabricante directo. Malla, tubo y ángulo para casas, bodegas e industrias del sur poniente de Santiago. Instalación incluida.",
  keywords: [
    "cercos perimetrales cerrillos",
    "cerco perimetral cerrillos santiago",
    "cierre perimetral cerrillos rm",
    "malla perimetral cerrillos",
    "cerco metalico cerrillos sur poniente",
    "fabricante cercos cerrillos santiago",
    "instalacion cerco perimetral cerrillos",
  ],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-cerrillos" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesCerrillosPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan cercos perimetrales en Cerrillos?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos los cercos en nuestro taller en Santiago y realizamos la instalación en Cerrillos. Cotizamos el mismo día — solo necesitamos los metros lineales, la altura y el tipo de uso (casa, condominio o industria)." } },
          { "@type": "Question", name: "¿Cuánto cuesta el metro lineal de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo: malla eslabonada es la opción más económica, tubo estructural pintado al horno tiene un costo medio, y el cerco galvanizado es el de mayor durabilidad y costo. Cotiza por WhatsApp con los metros y altura para obtener un precio exacto." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos RM</Link><span>/</span>
          <span className="text-gray-700 font-medium">Cerrillos</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Sur poniente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Cerrillos — Sur Poniente de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Cerrillos concentra una alta densidad de bodegas, industrias y galpones — el
            sector tiene necesidades de cerramiento distintas a las residenciales: mayor
            altura, mayor resistencia y portones vehiculares para camiones. Fabricamos
            cercos perimetrales para todo tipo de uso en Cerrillos.
          </p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en Cerrillos. Metros lineales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / BODEGA / INDUSTRIA / GALPÓN]. Tipo: [MALLA / TUBO / ÁNGULO]. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco perimetral</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Cerrillos que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Cerrillos","Parque Industrial Cerrillos","Av. Lo Espejo","Ciudad Empresarial Cerrillos",
              "Américo Vespucio Sur","Rinconada de Maipú","Lo Blanco Norte","Av. Padre Hurtado"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-maipu", label: "Cercos Maipú", desc: "Sur poniente RM vecino" },
            { href: "/cercos-perimetrales-pudahuel", label: "Cercos Pudahuel", desc: "Poniente RM" },
            { href: "/cercos-para-estacionamientos", label: "Cercos para estacionamientos", desc: "Industrial y bodegaje" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Accesos de camión y maquinaria" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Cerrillos</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Cerrillos. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
