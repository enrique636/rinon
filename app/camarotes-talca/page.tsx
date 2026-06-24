import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Talca — Agrícolas y Residencial | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Talca. Para alojamiento de temporeros, packing y uso residencial en el Maule. Fabricante directo.",
  keywords: ["camarotes Talca", "camarotes temporeros Talca", "camarotes agrícolas Maule", "literas Talca"],
  alternates: { canonical: "https://dumar.cl/camarotes-talca" },
};

const getWA = (tipo?: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${tipo ? ` para ${tipo}` : ""} con despacho a Talca. ¿Pueden ayudarme?`)}`;

export default function CamarotesTalcaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-agricolas" className="hover:text-gray-600">Agrícolas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Talca</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 rounded-full px-4 py-1.5 text-sm text-emerald-800 font-medium mb-5">🌾 Maule · Temporeros · Viñas · Packing</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Talca — Agrícolas y Residencial</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Despachamos camarotes metálicos a Talca. Capital de la Región del Maule y centro agrícola y vinícola del Valle Central. Para alojamiento de temporeros en temporada, packing, viñas y uso residencial.</p>
        <div className="flex gap-3 flex-wrap mb-10">
          <a href={getWA("alojamiento temporeros")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para empresa agrícola</a>
          <a href={getWA("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
        </div>
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-700 mb-2">Comunas del Maule con despacho:</p>
          <div className="flex flex-wrap gap-2">{["Constitución", "Linares", "Cauquenes", "San Javier", "Villa Alegre", "Maule"].map(c => <span key={c} className="bg-gray-100 text-gray-700 rounded-lg px-3 py-1 text-sm">{c}</span>)}</div>
        </div>
        <div className="bg-emerald-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Talca?</h2>
          <p className="text-emerald-200 text-sm mb-5">Agrícola o residencial. Cotización en el día.</p>
          <a href={getWA()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
