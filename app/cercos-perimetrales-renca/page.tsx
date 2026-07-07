import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Renca — Fabricante con Instalación | Norte Poniente RM",
  description: "Cercos perimetrales en Renca. Fabricante directo. Malla, tubo y ángulo para casas, industrias y bodegas del norte poniente de Santiago. Instalación incluida.",
  keywords: ["cercos perimetrales renca","cerco perimetral renca santiago","cierre perimetral renca rm","cerco metalico renca norte rm","fabricante cercos renca","instalacion cerco renca"],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-renca" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesRencaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos RM</Link><span>/</span>
          <span className="text-gray-700 font-medium">Renca</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Norte poniente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Renca — Norte Poniente de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Renca combina sectores residenciales con una alta concentración industrial. Fabricamos cercos para ambos contextos: malla y ángulo para industrias y bodegas, tubo estructural para casas y condominios.</p>
          <a href={wa("Hola, necesito cotizar cerco perimetral en Renca. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / INDUSTRIA / BODEGA]. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco perimetral</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-quilicura", label: "Cercos Quilicura", desc: "Norte RM vecino" },
            { href: "/cercos-perimetrales-pudahuel", label: "Cercos Pudahuel", desc: "Poniente RM" },
            { href: "/rejas-metalicas-renca", label: "Rejas Renca", desc: "Frontis y ventanas" },
            { href: "/cercos-para-empresas", label: "Cercos para empresas", desc: "Industrial y bodegaje" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Renca</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Renca. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO]. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
