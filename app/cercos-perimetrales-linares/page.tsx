import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Linares — Fabricante | Región del Maule",
  description: "Cercos perimetrales en Linares. Fabricante directo. Cercos para casas, empresas y predios agrícolas en el interior del Maule. Instalación incluida. Cotiza hoy.",
  keywords: ["cercos perimetrales linares","cerco perimetral linares","reja metalica linares","cerco para parcela linares","fabricante cercos linares maule","cerco para empresa linares","cercos region maule interior"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-linares" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesLinaresPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan cercos perimetrales en Linares?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos los cercos en nuestro taller en Santiago y realizamos la instalación en Linares. Cotizamos el mismo día — solo necesitamos los metros lineales, la altura y el tipo de uso (casa, condominio o industria)." } },
          { "@type": "Question", name: "¿Cuánto cuesta el metro lineal de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo: malla eslabonada es la opción más económica, tubo estructural pintado al horno tiene un costo medio, y el cerco galvanizado es el de mayor durabilidad y costo. Cotiza por WhatsApp con los metros y altura para obtener un precio exacto." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Linares</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Interior del Maule · Instalación incluida</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Linares — Región del Maule</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos cercos perimetrales en Linares y el interior del Maule. Casas, empresas, bodegas agrícolas y parcelas del valle central. Clima templado con lluvias concentradas en invierno — recomendamos pintura electrostática al horno para uso residencial y galvanizado para instalaciones industriales.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en Linares. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / EMPRESA / PARCELA / BODEGA AGRÍCOLA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi cerco en Linares</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-talca", label: "Cercos Talca", desc: "Capital regional vecina" },
            { href: "/cercos-perimetrales-curico", label: "Cercos Curicó", desc: "Maule norte" },
            { href: "/cercos-para-parcelas", label: "Cercos para parcelas", desc: "Predios agrícolas y de agrado" },
            { href: "/cierres-perimetrales", label: "Tipos de cierres", desc: "Guía para elegir el correcto" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Linares</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Linares. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
