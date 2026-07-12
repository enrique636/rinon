import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Valparaíso — Servicio en V Región | Resistente al Salitre",
  description: "Servicio de pintura electrostática al horno en Valparaíso y Viña del Mar. Para rejas, portones y estructuras metálicas. Resistente al salitre marino. V Región.",
  keywords: ["pintura electrostatica valparaiso","pintura electrostatica vina del mar","pintura metalica valparaiso","pintura al horno valparaiso","pintura rejas valparaiso","acabado anticorrosivo valparaiso","precio pintura electrostatica valparaiso"],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-valparaiso" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaValparaisoPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen pintura electrostática al horno en Valparaíso?", acceptedAnswer: { "@type": "Answer", text: "Sí. Realizamos servicio de pintura electrostática al horno para rejas, portones, estructuras y piezas metálicas en Valparaíso. El proceso incluye arenado o fosfatado, aplicación del polvo y horneado para un acabado duradero." } },
          { "@type": "Question", name: "¿Cuánto demora la pintura electrostática?", acceptedAnswer: { "@type": "Answer", text: "Para piezas estándar (rejas residenciales, portones) el plazo es de 3 a 5 días hábiles. Para estructuras de mayor volumen puede extenderse a 7–10 días. Coordina retiro y entrega al cotizar." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Valparaíso</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Servicio · V Región · Anticorrosivo para zona costera</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en Valparaíso y Viña del Mar</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Aplicamos pintura electrostática al horno en rejas, portones, cercos y estructuras metálicas en Valparaíso, Viña del Mar y toda la V Región. En ambiente marino el salitre destruye la pintura convencional en 1–2 años — el proceso electrostático dura 8–12 años incluso frente al mar.</p>
          <a href={wa("Hola, necesito pintura electrostática en Valparaíso / Viña del Mar para [PRODUCTO]. Cantidad: [DATO]. Color: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar en Valparaíso</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/pintura-electrostatica", label: "Qué es la Pintura Electrostática", desc: "Explicación del proceso" },
            { href: "/rejas-metalicas-valparaiso", label: "Rejas Valparaíso", desc: "Rejas con pintura incluida" },
            { href: "/portones-valparaiso", label: "Portones Valparaíso", desc: "Portones con acabado al horno" },
            { href: "/cercos-perimetrales-valparaiso", label: "Cercos Valparaíso", desc: "Cercos resistentes al salitre" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura en Valparaíso</h2>
          <p className="text-gray-400 text-sm mb-5">Producto, medidas y color. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito pintura electrostática en Valparaíso. Producto: [DATO]. Medidas: [DATO]. Color: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
