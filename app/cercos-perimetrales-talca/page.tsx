import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Talca y Maule — Fabricante Chile",
  description: "Cercos perimetrales metálicos para Talca, Curicó, Linares y la Región del Maule. Fabricante en Santiago con despacho. Reja tubular, malla y portones para proyectos agrícolas e industriales.",
  keywords: ["cercos perimetrales talca", "reja metalica talca", "cerco perimetral maule", "cerco perimetral curico", "rejas metalicas talca", "fabrica cercos talca", "portones metalicos talca", "cerco perimetral linares", "rejas metalicas curico maule"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-talca" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosTalcaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan cercos perimetrales en Talca y Maule?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos los cercos en nuestro taller en Santiago y realizamos la instalación en Talca y Maule. Cotizamos el mismo día — solo necesitamos los metros lineales, la altura y el tipo de uso (casa, condominio o industria)." } },
          { "@type": "Question", name: "¿Cuánto cuesta el metro lineal de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo: malla eslabonada es la opción más económica, tubo estructural pintado al horno tiene un costo medio, y el cerco galvanizado es el de mayor durabilidad y costo. Cotiza por WhatsApp con los metros y altura para obtener un precio exacto." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Talca</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho VII Región</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales para Talca y la Región del Maule</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos rejas tubulares, cercos perimetrales y portones metálicos en Santiago y despachamos a Talca, Curicó, Linares, San Javier y toda la Región del Maule. Precio de fábrica para proyectos agrícolas, residenciales e industriales.
          </p>
          <a href={wa("Hola, necesito cercos perimetrales para Talca / Maule. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades que atendemos en el Maule</h2>
          <div className="flex flex-wrap gap-2">
            {["Talca","Curicó","Linares","San Javier","Cauquenes","Constitución","Parral","Molina","Villa Alegre","Teno","Río Claro","San Clemente"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Aplicaciones frecuentes en el Maule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cercos para fundos y parcelas", d: "La región del Maule es principalmente agrícola. Cercos para fundos, parcelas de agrado y predios rurales." },
              { t: "Cierres para bodegas vitivinícolas", d: "La zona concentra industria vitivinícola — cercos y mallas para bodegas, barricas y plantas de elaboración." },
              { t: "Cerco residencial Talca y Curicó", d: "Para casas y edificios en Talca, Curicó y demás ciudades de la región." },
              { t: "Portones para accesos rurales", d: "Portones vehiculares para accesos de fundos, establecimientos agrícolas y propiedades rurales." },
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
            { href: "/cercos-para-parcelas", label: "Cercos para parcelas", desc: "Guía para cercar parcelas de agrado" },
            { href: "/cercos-perimetrales-concepcion", label: "Cercos Concepción", desc: "También atendemos Biobío" },
            { href: "/cierres-perimetrales", label: "Ver todos los cercos", desc: "Catálogo completo" },
            { href: "/portones-industriales", label: "Portones", desc: "Accesos vehiculares" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Proyecto en el Maule</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos la ciudad, el tipo de cerco y los metros lineales. Cotizamos con flete incluido.</p>
          <a href={wa("Hola, necesito cercos perimetrales para [CIUDAD MAULE]. Proyecto: [DESCRIPCIÓN]. Metros: [N] ml.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
