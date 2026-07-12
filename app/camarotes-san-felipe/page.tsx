import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en San Felipe y Los Andes — Agrícolas y Residencial | Camarotes Chile",
  description: "Camarotes metálicos con despacho a San Felipe y Los Andes. Para temporeros de viñas y fruticultura del Valle del Aconcagua, y uso residencial. Fabricante directo.",
  keywords: ["camarotes San Felipe", "camarotes Los Andes", "camarotes temporeros Aconcagua", "literas San Felipe", "camarotes agrícolas Valle Aconcagua"],
  alternates: { canonical: "https://rinon.cl/camarotes-san-felipe" },
};

const getWA = (tipo?: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${tipo ? ` para ${tipo}` : ""} con despacho a San Felipe o Los Andes. ¿Pueden ayudarme?`)}`;

export default function CamarotesSanFelipePage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes a en San Felipe y Los Andes?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a en San Felipe y Los Andes. Para Santiago RM el despacho incluye instalación. Para regiones coordinamos transporte al cotizar — solo necesitamos la dirección." } },
          { "@type": "Question", name: "¿Cuánto tarda el despacho?", acceptedAnswer: { "@type": "Answer", text: "En Santiago RM la entrega e instalación se realiza en un día acordado, generalmente dentro de la semana de confirmado el pedido. Para regiones coordinamos transporte — el plazo depende de la distancia y disponibilidad de flete." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-agricolas" className="hover:text-gray-600">Agrícolas</Link><span>/</span>
          <span className="text-gray-700 font-medium">San Felipe / Los Andes</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 rounded-full px-4 py-1.5 text-sm text-emerald-800 font-medium mb-5">🌾 Valle del Aconcagua · Viñas · Fruticultura</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en San Felipe y Los Andes</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Despachamos camarotes metálicos a San Felipe, Los Andes y el Valle del Aconcagua. Zona de alta actividad vitivinícola y frutícola con demanda estacional de alojamiento para temporeros. También servicio residencial.</p>
        <div className="flex gap-3 flex-wrap mb-10">
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-metalico-nordico.jpg" alt="Camarote metálico San Felipe — Aconcagua, entrega rápida" className="w-full object-cover" loading="lazy" />
          </div>
<a href={getWA("alojamiento temporeros")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para empresa</a>
          <a href={getWA("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
        </div>
        <div className="bg-emerald-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en San Felipe o Los Andes?</h2>
          <p className="text-emerald-200 text-sm mb-5">Cotización en el día.</p>
          <a href={getWA()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
