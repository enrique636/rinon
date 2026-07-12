import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Conchalí — Rejas y Portones al Horno | Norte RM",
  description: "Pintura electrostática al horno en Conchalí. Rejas, portones y muebles metálicos. Servicio para particulares y empresas del norte de Santiago.",
  keywords: [
    "pintura electrostatica conchali",
    "pintura al horno conchali santiago",
    "pintura rejas conchali norte rm",
    "pintura electrostatica norte rm conchali",
    "pintura metalica conchali santiago",
    "pintura portones conchali",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-conchali" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaConchaliPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen pintura electrostática al horno en Conchalí?", acceptedAnswer: { "@type": "Answer", text: "Sí. Realizamos servicio de pintura electrostática al horno para rejas, portones, estructuras y piezas metálicas en Conchalí. El proceso incluye arenado o fosfatado, aplicación del polvo y horneado para un acabado duradero." } },
          { "@type": "Question", name: "¿Cuánto demora la pintura electrostática?", acceptedAnswer: { "@type": "Answer", text: "Para piezas estándar (rejas residenciales, portones) el plazo es de 3 a 5 días hábiles. Para estructuras de mayor volumen puede extenderse a 7–10 días. Coordina retiro y entrega al cotizar." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Conchalí</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Pintura al horno · Norte RM · Rejas, portones y metales</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en Conchalí — Norte de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Aplicamos pintura electrostática al horno en rejas, portones y muebles metálicos para clientes de Conchalí y el norte de Santiago. El proceso en planta garantiza un acabado uniforme y duradero que no se logra con pintura en spray ni brocha aplicada en obra.</p>
          <a href={wa("Hola, necesito cotizar pintura electrostática en Conchalí. Qué necesito pintar: [REJAS / PORTÓN / MUEBLE / ESTRUCTURA]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar pintura electrostática</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ventajas vs pintura convencional</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Sin escurrimientos ni marcas", d: "La carga electrostática hace que el polvo se adhiera uniformemente a toda la superficie — no hay goteos ni zonas sin cubrir como con brocha o rodillo." },
              { t: "No requiere imprimante", d: "En piezas nuevas de acero o aluminio la pintura electrostática adhiere directamente — sin la capa extra de imprimante que sí necesita la pintura convencional." },
              { t: "Curado al horno", d: "A 180–200 °C la pintura polimeriza y forma una película plástica flexible. Es más resistente al golpe, la humedad y el UV que cualquier pintura aplicada en frío." },
              { t: "Colores estables en el tiempo", d: "Los pigmentos quedan encapsulados en la película curada — no se decoloran con el sol ni se agrietan con los cambios de temperatura." },
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
            { href: "/pintura-electrostatica-recoleta", label: "Pintura Recoleta", desc: "Norte RM vecino" },
            { href: "/pintura-electrostatica-renca", label: "Pintura Renca", desc: "Norte poniente RM" },
            { href: "/rejas-metalicas-conchali", label: "Rejas Conchalí", desc: "Fabricación e instalación" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "Guía completa del proceso" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura en Conchalí</h2>
          <p className="text-gray-400 text-sm mb-5">Qué necesitas pintar, color y cantidad. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito pintura electrostática en Conchalí. Qué pintar: [DATO]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
