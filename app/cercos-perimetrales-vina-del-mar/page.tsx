import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Viña del Mar — Fabricante con Instalación | V Región",
  description: "Cercos perimetrales metálicos para casas y empresas en Viña del Mar. Malla, tubo y galvanizado. Instalación en Viña del Mar, Concón y alrededores.",
  keywords: ["cercos perimetrales vina del mar","cerco perimetral viña del mar","cerco metalico vina del mar","cerco para casa viña del mar","cercos quinta region","cerco perimetral concepcion vina","fabricante cercos vina del mar","cerco malla vina del mar"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-vina-del-mar" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosVinadelMarPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan cercos perimetrales en Viña del Mar?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos los cercos en nuestro taller en Santiago y realizamos la instalación en Viña del Mar. Cotizamos el mismo día — solo necesitamos los metros lineales, la altura y el tipo de uso (casa, condominio o industria)." } },
          { "@type": "Question", name: "¿Cuánto cuesta el metro lineal de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo: malla eslabonada es la opción más económica, tubo estructural pintado al horno tiene un costo medio, y el cerco galvanizado es el de mayor durabilidad y costo. Cotiza por WhatsApp con los metros y altura para obtener un precio exacto." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Viña del Mar</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · V Región · Acabado marino</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales para Viña del Mar</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos cercos perimetrales para casas y empresas en Viña del Mar, Concón y Quilpué. El ambiente marino requiere acabados especiales — recomendamos acero galvanizado o pintura electrostática con anticorrosivo para zonas de brisa salina.</p>
          <a href={wa("Hola, necesito cotizar cerco perimetral para Viña del Mar. Metros lineales: [METROS]. Altura: [ALTURA]. Tipo: [MALLA / TUBO / GALVANIZADO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Viña del Mar</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-valparaiso", label: "Cercos Valparaíso", desc: "Ciudad puerto V Región" },
            { href: "/camarotes-vina-del-mar", label: "Camarotes Viña del Mar", desc: "Literas metálicas" },
            { href: "/cercos-perimetrales-galvanizados", label: "Cercos Galvanizados", desc: "Para ambientes húmedos" },
            { href: "/cercos-perimetrales-precio", label: "Precio de Cercos", desc: "Cuánto cuesta por metro lineal" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Viña del Mar</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y tipo. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Viña del Mar. Metros: [METROS]. Altura: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
