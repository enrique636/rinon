import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Valdivia — Forestales y Residencial | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Valdivia. Para campamentos forestales de Los Ríos, cuadrillas de trabajo y uso residencial. Fabricante directo.",
  keywords: ["camarotes Valdivia", "camarotes forestales Valdivia", "literas Valdivia", "camas campamento Los Ríos"],
  alternates: { canonical: "https://rinon.cl/camarotes-valdivia" },
};

const getWA = (tipo?: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${tipo ? ` para ${tipo}` : ""} con despacho a Valdivia. ¿Pueden ayudarme?`)}`;

export default function CamarotesValdiviaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes a en Valdivia?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a en Valdivia. Para Santiago RM el despacho incluye instalación. Para regiones coordinamos transporte al cotizar — solo necesitamos la dirección." } },
          { "@type": "Question", name: "¿Cuánto tarda el despacho?", acceptedAnswer: { "@type": "Answer", text: "En Santiago RM la entrega e instalación se realiza en un día acordado, generalmente dentro de la semana de confirmado el pedido. Para regiones coordinamos transporte — el plazo depende de la distancia y disponibilidad de flete." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-forestales" className="hover:text-gray-600">Forestales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Valdivia</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-300 rounded-full px-4 py-1.5 text-sm text-green-800 font-medium mb-5">🌲 Los Ríos · Forestal · Universidad Austral</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Valdivia — Forestales y Residencial</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Despachamos camarotes metálicos a Valdivia. Capital de la Región de Los Ríos con fuerte presencia forestal e industrial. Para campamentos, cuadrillas y uso residencial en la ciudad universitaria del sur.</p>
        <div className="flex gap-3 flex-wrap mb-10">
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-triple-campamento-agricola.jpg" alt="Camarote triple agrícola Valdivia — fundos y faenas Los Ríos" className="w-full object-cover" loading="lazy" />
          </div>
<a href={getWA("campamento forestal")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para empresa</a>
          <a href={getWA("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-8 text-sm text-gray-600">
          <strong className="text-gray-900 block mb-2">Sector forestal en Los Ríos</strong>
          Arauco y CMPC tienen operaciones en la Región de Los Ríos. Además, la industria acuícola del estuario del Río Valdivia requiere alojamiento para cuadrillas de trabajo. El camarote metálico es ideal en el clima húmedo valdiviano.
        </div>
        <div className="bg-green-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Valdivia?</h2>
          <p className="text-green-200 text-sm mb-5">Cotización en el día.</p>
          <a href={getWA()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
