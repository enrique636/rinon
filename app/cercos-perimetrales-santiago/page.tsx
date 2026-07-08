import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Santiago — Fabricante e Instalación | Buenos Pal Catre",
  description: "Cercos perimetrales metálicos en Santiago. Fabricante directo con instalación en toda la Región Metropolitana. Reja tubular, malla y portones. Cotiza hoy.",
  keywords: ["cercos perimetrales santiago", "cerco perimetral santiago", "fabricante cerco perimetral santiago", "instalacion cerco santiago", "reja perimetral santiago", "cierre perimetral santiago", "cerco metalico santiago", "cerco para obra santiago", "precio cerco perimetral santiago"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-santiago" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

const COMUNAS = ["Las Condes","Providencia","Maipú","La Florida","Pudahuel","Quilicura","Huechuraba","Renca","San Bernardo","La Pintana","El Bosque","Puente Alto","Ñuñoa","La Reina","Macul","Peñalolén","Colina","Lampa","Vitacura","Lo Barnechea","Estación Central","Cerrillos","Recoleta","Independencia","Lo Prado","Cerro Navia","Quinta Normal","Santiago Centro","Pedro Aguirre Cerda","Lo Espejo"];

export default function CercosPerimetralesSantiagoPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Buenos Pal Catre — Cercos Perimetrales Santiago",
        description: "Fabricante e instalador de cercos perimetrales metálicos en Santiago de Chile.",
        areaServed: "Santiago, Región Metropolitana",
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen cercos perimetrales en toda la Región Metropolitana?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos cercos perimetrales metálicos en todas las comunas de Santiago — desde Maipú y Pudahuel al poniente hasta Las Condes y Lo Barnechea al oriente, y desde Colina al norte hasta Puente Alto al sur." } },
          { "@type": "Question", name: "¿Cuánto cuesta un cerco perimetral en Santiago?", acceptedAnswer: { "@type": "Answer", text: "El precio depende del tipo de cerco (reja tubular, malla, galvanizado), la altura, los metros lineales y si incluye portón. Cotiza por WhatsApp con las medidas de tu terreno y te respondemos en el día." } },
          { "@type": "Question", name: "¿Cuánto demoran en instalar?", acceptedAnswer: { "@type": "Answer", text: "El plazo de fabricación e instalación se confirma al cotizar según el volumen del proyecto. Para cercos medianos (hasta 50 ml), típicamente es de pocos días hábiles desde aprobación del presupuesto." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Santiago</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Región Metropolitana</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos cercos perimetrales metálicos en toda la Región Metropolitana. Reja tubular, malla separadora y portones a medida — precio de fábrica, sin intermediarios.
          </p>
          <a href={wa("Hola, necesito un cerco perimetral en Santiago. ¿Pueden cotizarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de cerco que instalamos en Santiago</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja tubular", d: "El más solicitado en Santiago. Tubo de acero cuadrado o redondo soldado en marco. Para casas, condominios y frontis comerciales." },
              { t: "Cerco para obra", d: "Cierre temporal o permanente de perímetro de obras en construcción. Cumple normativa y protege el terreno." },
              { t: "Malla separadora", d: "Para bodegas, galpones e industrias. Divide espacios interiores manteniendo visibilidad y ventilación." },
              { t: "Portón metálico", d: "Corredizo o batiente. Complementa cualquier cerco. Fabricado a la medida del acceso." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Comunas que atendemos en Santiago</h2>
          <div className="flex flex-wrap gap-2">
            {COMUNAS.map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas", label: "Rejas metálicas", desc: "Todos los tipos de reja" },
            { href: "/portones-metalicos", label: "Portones metálicos", desc: "Corredizos y batientes" },
            { href: "/cierres-para-obras", label: "Cercos para obras", desc: "Para constructoras" },
            { href: "/cierres-perimetrales", label: "Ver toda la línea", desc: "Catálogo completo de cercos" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿En qué comuna necesitas el cerco?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el tipo, los metros lineales y la altura. Cotizamos el mismo día.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en Santiago. La ubicación es [COMUNA] y el proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
