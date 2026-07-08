import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Diego de Almagro — Minería Atacama | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Diego de Almagro. Para campamentos mineros de la Región de Atacama. Salvador (Codelco), Potrerillos. Fabricante directo.",
  keywords: ["camarotes Diego de Almagro", "camarotes minería Diego de Almagro", "camarotes Salvador Codelco", "camas Potrerillos", "literas Diego de Almagro"],
  alternates: { canonical: "https://rinon.cl/camarotes-diego-de-almagro" },
};

const getWA = (tipo?: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${tipo ? ` para ${tipo}` : ""} con despacho a Diego de Almagro o Potrerillos. ¿Pueden ayudarme?`)}`;

export default function CamarotesDiegoDeAlmagroPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-mineria" className="hover:text-gray-600">Minería</Link><span>/</span>
          <span className="text-gray-700 font-medium">Diego de Almagro</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-full px-4 py-1.5 text-sm text-amber-800 font-medium mb-5">⛏️ Salvador (Codelco) · Potrerillos · Atacama</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Diego de Almagro — División Salvador</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Despachamos camarotes metálicos a Diego de Almagro y Potrerillos. Ciudad satélite de la División Salvador de Codelco, una de las divisiones históricas del cobre chileno. Alta demanda de equipamiento de campamento para trabajadores y contratistas.</p>
        <div className="flex gap-3 flex-wrap mb-10">
          <a href={getWA("campamento minero")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para minería</a>
          <a href={getWA("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-gray-900 mb-3">Contexto minero</h2>
          <ul className="space-y-1.5 text-sm text-gray-600">{["División Salvador (Codelco) — operación activa", "Fundición y refinería de Potrerillos", "Contratistas EPCM y de mantenimiento", "Trabajadores en rotación (8x6, 4x3)"].map(i => <li key={i} className="flex gap-2"><span className="text-amber-600">✓</span>{i}</li>)}</ul>
        </div>
        <div className="bg-amber-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Diego de Almagro?</h2>
          <p className="text-amber-200 text-sm mb-5">Cotización en el día.</p>
          <a href={getWA()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
