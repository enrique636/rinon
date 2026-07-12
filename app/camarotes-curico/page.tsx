import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Curicó — Agrícolas y Residencial | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Curicó y Molina. Para alojamiento de temporeros, packing y uso residencial en el Valle del Teno. Fabricante directo.",
  keywords: ["camarotes Curicó", "camarotes temporeros Curicó", "camarotes agrícolas Curicó", "literas Curicó", "camarotes Molina"],
  alternates: { canonical: "https://rinon.cl/camarotes-curico" },
};

const getWA = (tipo?: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${tipo ? ` para ${tipo}` : ""} con despacho a Curicó. ¿Pueden ayudarme?`)}`;

export default function CamarotesCuricoPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes a en Curicó?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a en Curicó. Para Santiago RM el despacho incluye instalación. Para regiones coordinamos transporte al cotizar — solo necesitamos la dirección." } },
          { "@type": "Question", name: "¿Cuánto tarda el despacho?", acceptedAnswer: { "@type": "Answer", text: "En Santiago RM la entrega e instalación se realiza en un día acordado, generalmente dentro de la semana de confirmado el pedido. Para regiones coordinamos transporte — el plazo depende de la distancia y disponibilidad de flete." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-agricolas" className="hover:text-gray-600">Agrícolas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Curicó</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 rounded-full px-4 py-1.5 text-sm text-emerald-800 font-medium mb-5">🌾 Valle del Teno · Temporeros · Packing</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Curicó — Agrícolas y Residencial</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Despachamos camarotes metálicos a Curicó y Molina. Corazón del Valle del Teno con fuerte actividad frutícola y vinícola. Para alojamiento de temporeros en packing, viñas y fundos, y para uso residencial en la ciudad.</p>
        <div className="flex gap-3 flex-wrap mb-10">
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-metalico-dormitorio-compartido.jpg" alt="Camarote metálico Curicó — despacho zona central Chile" className="w-full object-cover" loading="lazy" />
          </div>
<a href={getWA("alojamiento temporeros")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para empresa agrícola</a>
          <a href={getWA("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-3">Sector agrícola de Curicó</h2>
            <ul className="space-y-1.5 text-sm text-gray-600">{["Exportadoras frutícolas (uva, manzana, ciruela)", "Viñas del Valle del Teno", "Empresas de packing y frío", "Fundos con temporeros de alta rotación"].map(i => <li key={i} className="flex gap-2"><span className="text-emerald-600">✓</span>{i}</li>)}</ul>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-3">Comunas con despacho</h2>
            <div className="flex flex-wrap gap-2">{["Molina", "Romeral", "Teno", "Rauco", "Sagrada Familia"].map(c => <span key={c} className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-sm text-gray-600">{c}</span>)}</div>
          </div>
        </div>
        <div className="bg-emerald-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Curicó?</h2>
          <p className="text-emerald-200 text-sm mb-5">Temporeros o residencial. Cotización en el día.</p>
          <a href={getWA()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
