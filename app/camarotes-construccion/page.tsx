import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Construcción y Contratistas — Fabricante Chile | Camarotes Chile",
  description:
    "Fabricamos camarotes metálicos para alojamiento de trabajadores de construcción, contratistas y obras en todo Chile. Campamentos temporales, bodega en obra. Cotización empresarial.",
  keywords: [
    "camarotes para construcción Chile",
    "camas para trabajadores construcción",
    "camarotes para contratistas Chile",
    "equipamiento campamento obra",
    "camarotes constructoras Chile",
    "camas para obreros Chile",
    "alojamiento trabajadores obra",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-construccion" },
  openGraph: {
    title: "Camarotes para Construcción y Contratistas — Fabricante Chile",
    description: "Camarotes metálicos para campamentos de obra y cuadrillas de constructoras. Despacho nacional.",
    type: "website",
    locale: "es_CL",
  },
};

function getConstruccionWAUrl(): string {
  const msg = encodeURIComponent("Hola, necesito cotizar camarotes metálicos para alojamiento de trabajadores de construcción. ¿Pueden ayudarme con precios y disponibilidad?");
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${msg}`;
}

export default function CamarotesConstruccionPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Fabrican camarotes para constructoras en Chile?", acceptedAnswer: { "@type": "Answer", text: "Sí. Somos fabricantes directos de camarotes para alojamiento de trabajadores de construcción, contratistas y obras. Cotizamos desde 5 unidades con despacho a toda Chile." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/empresas" className="hover:text-gray-600">Empresas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Construcción</span>
        </nav>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🏗️ Constructoras · Contratistas · Obras en todo Chile
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarotes para Construcción y Contratistas
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Fabricamos camarotes metálicos para equipar campamentos de obra, cuadrillas de
            contratistas y alojamiento temporal en faenas de construcción en todo Chile.
          </p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-triple-campamento-construccion.jpg" alt="Camarote triple para campamento de construcción Chile" className="w-full object-cover" loading="lazy" />
          </div>
<a href={getConstruccionWAUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar para constructora
          </a>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ventajas para el sector construcción</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { titulo: "Armado rápido en campamento", desc: "Cada camarote se arma en 20-30 minutos sin herramientas especiales. Ideal para campamentos temporales que se instalan rápido." },
              { titulo: "Reubicable entre obras", desc: "Cuando la obra termina, los camarotes se desmontam, transportan y rearman en la siguiente. La inversión se amortiza en múltiples proyectos." },
              { titulo: "Resistencia al uso intensivo", desc: "El acero soporta el uso diario de cuadrillas de trabajadores sin deteriorarse. Sin roturas, sin partes que se suelten con el tiempo." },
              { titulo: "Cumple con bienestar laboral", desc: "Las inspecciones de bienestar laboral exigen condiciones dignas de descanso. El camarote metálico cumple con los estándares de la Dirección del Trabajo." },
            ].map(v => (
              <div key={v.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{v.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto cuesta equipar un campamento de obra?", a: "El precio por unidad varía según el modelo y el volumen. Para cotizar correctamente, necesitamos el número de camas requeridas. Consúltanos por WhatsApp y te respondemos con propuesta en el día." },
              { q: "¿Pueden armar los camarotes directamente en la obra?", a: "Para pedidos grandes, sí. Para pedidos medianos, el armado es simple y tu personal lo puede hacer sin herramientas especiales. Te enviamos guía de armado con cada pedido." },
              { q: "¿Cuántas camas caben en un módulo de 20m²?", a: "En un espacio de 20m², caben cómodamente 4-6 camarotes dobles (8-12 camas) con espacio de circulación mínimo recomendado. Podemos ayudarte a dimensionar el espacio disponible." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas equipar alojamiento en obra?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el número de camas y el destino. Cotización sin compromiso.</p>
          <a href={getConstruccionWAUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
