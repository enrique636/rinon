import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Puerto Montt — Forestales y Residencial | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Puerto Montt. Para campamentos forestales de Los Lagos, cuadrillas salmoneras y uso residencial. Fabricante directo.",
  keywords: ["camarotes Puerto Montt", "camarotes forestales Puerto Montt", "literas Puerto Montt", "camas campamento Los Lagos"],
  alternates: { canonical: "https://rinon.cl/camarotes-puerto-montt" },
};

const getWA = (tipo?: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${tipo ? ` para ${tipo}` : ""} con despacho a Puerto Montt. ¿Pueden ayudarme?`)}`;

export default function CamarotesPuertoMonttPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-forestales" className="hover:text-gray-600">Forestales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Puerto Montt</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-300 rounded-full px-4 py-1.5 text-sm text-green-800 font-medium mb-5">🌲 Los Lagos · Forestal · Salmonicultura</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Puerto Montt — Forestales y Residencial</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Despachamos camarotes metálicos a Puerto Montt. Capital de la Región de Los Lagos con fuerte actividad forestal, salmonicultura y turismo. Para campamentos de empresas forestales, cuadrillas acuícolas y uso residencial.</p>
        <div className="flex gap-3 flex-wrap mb-10">
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-faenero-offshore-industrial.jpg" alt="Camarote faenero offshore Puerto Montt — salmoneras y faenas" className="w-full object-cover" loading="lazy" />
          </div>
<a href={getWA("campamento forestal o acuícola")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para empresa</a>
          <a href={getWA("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-3">Industrias en Puerto Montt</h2>
            <ul className="space-y-1.5 text-sm text-gray-600">{["Arauco / CMPC — operaciones Los Lagos", "Salmonicultura (SalmonChile, Cermaq, Mowi)", "Empresas forestales y de servicios", "Construcción e infraestructura regional"].map(i => <li key={i} className="flex gap-2"><span className="text-green-600">✓</span>{i}</li>)}</ul>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-3">Comunas con despacho desde Puerto Montt</h2>
            <div className="flex flex-wrap gap-2">{["Puerto Varas", "Osorno", "Calbuco", "Chiloé", "Llanquihue"].map(c => <span key={c} className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-sm text-gray-600">{c}</span>)}</div>
          </div>
        </div>
        <div className="bg-green-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Puerto Montt?</h2>
          <p className="text-green-200 text-sm mb-5">Cotización en el día.</p>
          <a href={getWA()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
