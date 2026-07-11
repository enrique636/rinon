import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Angol — Forestales Araucanía | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Angol y Malleco. Para campamentos forestales de la Araucanía. Fabricante directo.",
  keywords: ["camarotes Angol", "camarotes forestales Angol", "literas Angol", "camarotes Malleco Araucanía"],
  alternates: { canonical: "https://rinon.cl/camarotes-angol" },
};

const getWA = (tipo?: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${tipo ? ` para ${tipo}` : ""} con despacho a Angol. ¿Pueden ayudarme?`)}`;

export default function CamarotesAngolPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-forestales" className="hover:text-gray-600">Forestales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Angol</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-300 rounded-full px-4 py-1.5 text-sm text-green-800 font-medium mb-5">🌲 Malleco · Araucanía forestal</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Angol — Sector Forestal Malleco</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Despachamos camarotes metálicos a Angol y la Provincia de Malleco. Zona de alta densidad forestal con operaciones de Arauco y múltiples empresas contratistas. Para campamentos, cuadrillas de poda y replantación.</p>
        <div className="flex gap-3 flex-wrap mb-10">
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-triple-campamento-construccion.jpg" alt="Camarote triple construcción Angol — despacho Araucanía" className="w-full object-cover" loading="lazy" />
          </div>
<a href={getWA("campamento forestal")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para empresa</a>
          <a href={getWA("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
        </div>
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-3 font-medium">También despachamos a:</p>
          <div className="flex flex-wrap gap-2">{["Victoria", "Traiguén", "Lumaco", "Purén", "Collipulli"].map(c => <span key={c} className="bg-gray-100 text-gray-700 rounded-lg px-3 py-1 text-sm">{c}</span>)}</div>
        </div>
        <div className="bg-green-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Angol?</h2>
          <p className="text-green-200 text-sm mb-5">Cotización en el día.</p>
          <a href={getWA()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
