import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Los Ángeles — Forestales y Residencial | Camarotes Chile",
  description:
    "Camarotes metálicos con despacho a Los Ángeles, Bío Bío. Para campamentos forestales, cuadrillas agrícolas y uso residencial. Fabricante directo.",
  keywords: ["camarotes Los Ángeles", "camarotes Los Angeles Biobío", "camarotes forestales Los Ángeles", "literas Los Ángeles Chile"],
  alternates: { canonical: "https://rinon.cl/camarotes-los-angeles" },
};

function getWA(tipo?: string) {
  const t = tipo ? ` para ${tipo}` : "";
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${t} con despacho a Los Ángeles, Bío Bío. ¿Pueden ayudarme?`)}`;
}

export default function CamarotesLosAngelesPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-forestales" className="hover:text-gray-600">Forestales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Los Ángeles</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-300 rounded-full px-4 py-1.5 text-sm text-green-800 font-medium mb-5">
            🌲 Bío Bío · Capital forestal de Chile
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Los Ángeles — Forestales y Residencial</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Despachamos camarotes metálicos a Los Ángeles, la capital del sector forestal
            chileno. Arauco, CMPC y cientos de empresas contratistas tienen operaciones en
            la zona. También servimos el mercado residencial de la ciudad y comunas aledañas.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href={getWA("campamento forestal")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para forestal</a>
            <a href={getWA("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
          </div>
        </div>
        <div className="mb-10 bg-green-50 border border-green-200 rounded-xl p-5">
          <h2 className="font-bold text-gray-900 mb-3">Los Ángeles: capital forestal del Bío Bío</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            La Región del Bío Bío concentra la mayor superficie plantada de Chile. Los Ángeles
            es el centro logístico del sector, con operaciones de Arauco (Forestal Arauco),
            CMPC Maderas, Masisa y decenas de contratistas forestales. La demanda de equipamiento
            para campamentos y alojamiento de cuadrillas es permanente.
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Comunas aledañas con despacho</h2>
          <div className="flex flex-wrap gap-2">
            {["Mulchén", "Nacimiento", "Yumbel", "Laja", "Cabrero", "Santa Bárbara"].map(c => (
              <span key={c} className="bg-gray-100 text-gray-700 rounded-lg px-3 py-1.5 text-sm font-medium">{c}</span>
            ))}
          </div>
        </div>
        <div className="bg-green-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Los Ángeles?</h2>
          <p className="text-green-200 text-sm mb-5">Forestal o residencial. Cotización en el día.</p>
          <a href={getWA()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
