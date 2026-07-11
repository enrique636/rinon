import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Metálicos Coquimbo — Literas para IV Región | La Serena",
  description: "Camarotes metálicos para Coquimbo, La Serena, Ovalle y la Región de Coquimbo. Habitacional y minería. Fabricante. Despacho a la IV Región.",
  keywords: ["camarotes coquimbo","literas metalicas coquimbo","camarotes coquimbo la serena","camarotes cuarta region","literas coquimbo","camarotes region coquimbo","fabricante camarotes coquimbo","camarotes metalicos coquimbo"],
  alternates: { canonical: "https://rinon.cl/camarotes-coquimbo" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamarotesCoquimboPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Coquimbo</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Despacho IV Región · Habitacional y minería</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos para Coquimbo y Región de Coquimbo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Proveemos camarotes metálicos para hogares, campamentos mineros y empresas en Coquimbo, La Serena, Ovalle, Illapel y toda la IV Región. Fabricante directo con coordinación de despacho.</p>
          <a href={wa("Hola, necesito camarotes para Coquimbo / Región de Coquimbo. Cantidad: [UNIDADES]. Uso: [HABITACIONAL / MINERÍA / EMPRESA]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Coquimbo</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-la-serena", label: "Camarotes La Serena", desc: "Capital de la IV Región" },
            { href: "/camarotes-mineria", label: "Camarotes para Minería", desc: "Campamentos norte chico" },
            { href: "/camarotes-copiapo", label: "Camarotes Copiapó", desc: "III Región de Atacama" },
            { href: "/camarotes-metalicos", label: "Ver todos los modelos", desc: "Catálogo completo" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Coquimbo</h2>
          <p className="text-gray-400 text-sm mb-5">Cantidad, uso y dirección. Coordinamos despacho a la IV Región.</p>
          <a href={wa("Hola, necesito camarotes para Coquimbo. Cantidad: [UNIDADES]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
