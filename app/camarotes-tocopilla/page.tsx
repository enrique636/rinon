import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Tocopilla — Minería Norte Grande | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Tocopilla. Para campamentos del sector minero y energético de Tocopilla. Fabricante directo. Cotización empresarial.",
  keywords: ["camarotes Tocopilla", "camarotes minería Tocopilla", "camas campamento Tocopilla", "literas Tocopilla"],
  alternates: { canonical: "https://rinon.cl/camarotes-tocopilla" },
};

const getWA = (tipo?: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${tipo ? ` para ${tipo}` : ""} con despacho a Tocopilla. ¿Pueden ayudarme?`)}`;

export default function CamarotesTocopillaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-mineria" className="hover:text-gray-600">Minería</Link><span>/</span>
          <span className="text-gray-700 font-medium">Tocopilla</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-full px-4 py-1.5 text-sm text-amber-800 font-medium mb-5">⛏️ Norte Grande · Antofagasta · Sector energético y minero</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Tocopilla — Norte Minero</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Despachamos camarotes metálicos a Tocopilla. Ciudad costera del norte grande con presencia de centrales termoeléctricas que abastecen las operaciones mineras de la región. También servimos el mercado residencial local.</p>
        <div className="flex gap-3 flex-wrap mb-10">
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-faenero-campamento-premium.jpg" alt="Camarote faenero premium Tocopilla — campamentos industriales" className="w-full object-cover" loading="lazy" />
          </div>
<a href={getWA("campamento")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para empresa</a>
          <a href={getWA("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-8 text-sm text-gray-600">
          <strong className="text-gray-900 block mb-2">¿Por qué Tocopilla?</strong>
          Tocopilla es el puerto de abastecimiento energético del norte grande. Las centrales eléctricas y los campamentos de trabajadores de la zona demandan equipamiento de alojamiento permanente.
        </div>
        <div className="bg-amber-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Tocopilla?</h2>
          <p className="text-amber-200 text-sm mb-5">Cotización en el día.</p>
          <a href={getWA()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
