import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Sierra Gorda — Minería Antofagasta | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Sierra Gorda. Para campamentos de Sierra Gorda (KGHM), Spence, Lomas Bayas y sector minero de Antofagasta. Fabricante directo.",
  keywords: ["camarotes Sierra Gorda", "camarotes minería Sierra Gorda", "camarotes KGHM", "camas campamento Antofagasta", "literas Sierra Gorda"],
  alternates: { canonical: "https://rinon.cl/camarotes-sierra-gorda" },
};

const getWA = (tipo?: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${tipo ? ` para ${tipo}` : ""} con despacho a Sierra Gorda, Antofagasta. ¿Pueden ayudarme?`)}`;

export default function CamarotesSierraGordaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-mineria" className="hover:text-gray-600">Minería</Link><span>/</span>
          <Link href="/camarotes-antofagasta" className="hover:text-gray-600">Antofagasta</Link><span>/</span>
          <span className="text-gray-700 font-medium">Sierra Gorda</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-full px-4 py-1.5 text-sm text-amber-800 font-medium mb-5">⛏️ KGHM · Spence · Lomas Bayas · Antofagasta</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Sierra Gorda — Zona Minera</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Despachamos camarotes metálicos a Sierra Gorda. Epicentro minero del interior de Antofagasta con minas como Sierra Gorda (KGHM), Spence (BHP) y Lomas Bayas (Yamana). Alta demanda de camas para trabajadores en rotación.</p>
        <div className="flex gap-3 flex-wrap mb-10">
          <a href={getWA("campamento minero")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para minería</a>
          <Link href="/camarotes-antofagasta" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver página Antofagasta</Link>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-gray-900 mb-3">Minas del sector Sierra Gorda</h2>
          <ul className="space-y-1.5 text-sm text-gray-600">{["Sierra Gorda — KGHM (operación polaca, una de las más grandes)", "Spence — BHP (ampliación SGO)", "Lomas Bayas — Yamana Gold", "Contratistas EPCM residentes en el sector"].map(i => <li key={i} className="flex gap-2"><span className="text-amber-600">✓</span>{i}</li>)}</ul>
        </div>
        <div className="bg-amber-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Sierra Gorda?</h2>
          <p className="text-amber-200 text-sm mb-5">Cotización en el día.</p>
          <a href={getWA()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
