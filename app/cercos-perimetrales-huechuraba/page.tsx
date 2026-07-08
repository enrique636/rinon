import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Huechuraba — Fabricante con Instalación | Norte RM",
  description: "Cercos perimetrales en Huechuraba. Fabricante directo. Cercos para empresas y casas del norte de Santiago, incluyendo el parque empresarial de Huechuraba.",
  keywords: ["cercos perimetrales huechuraba","cerco perimetral huechuraba santiago","cierre perimetral huechuraba rm","cerco metalico huechuraba","fabricante cercos huechuraba","instalacion cerco huechuraba"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-huechuraba" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesHuechurabPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos RM</Link><span>/</span>
          <span className="text-gray-700 font-medium">Huechuraba</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Norte RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Huechuraba — Norte de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Huechuraba alberga el mayor parque empresarial del norte de Santiago. Fabricamos cercos perimetrales industriales en malla y ángulo para empresas, y cercos tubulares para el sector residencial del sector.</p>
          <a href={wa("Hola, necesito cotizar cerco perimetral en Huechuraba. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [EMPRESA / BODEGA / CASA]. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco perimetral</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-quilicura", label: "Cercos Quilicura", desc: "Norte RM vecino" },
            { href: "/cercos-perimetrales-conchali", label: "Cercos Conchalí", desc: "Norte RM" },
            { href: "/cercos-para-empresas", label: "Cercos para empresas", desc: "Industrial y bodegaje" },
            { href: "/pintura-electrostatica-huechuraba", label: "Pintura Huechuraba", desc: "Acabado al horno" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Huechuraba</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Huechuraba. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO]. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
