import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Ñuñoa — Fabricante con Instalación | RM",
  description: "Cercos perimetrales en Ñuñoa. Fabricante directo. Cercos tubulares para casas y condominios del sector oriente de Santiago. Instalación con garantía.",
  keywords: ["cercos perimetrales nunoa","cerco perimetral nunoa santiago","cierre perimetral nunoa rm","cerco metalico nunoa santiago","fabricante cercos nunoa","instalacion cerco nunoa"],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-nunoa" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesNunoaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos RM</Link><span>/</span>
          <span className="text-gray-700 font-medium">Ñuñoa</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Sector oriente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Ñuñoa — Sector Oriente de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">En Ñuñoa los cercos perimetrales son principalmente tubulares — el sector residencial consolidado prefiere el tubo estructural sobre la malla, por el mejor acabado visual. Fabricamos cercos a medida para casas, condominios y edificios de Ñuñoa con pintura electrostática al horno.</p>
          <a href={wa("Hola, necesito cotizar cerco perimetral en Ñuñoa. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / CONDOMINIO]. Tipo: [TUBO / MALLA]. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco perimetral</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-maipu", label: "Cercos Maipú", desc: "Sur RM" },
            { href: "/cercos-perimetrales-san-miguel", label: "Cercos San Miguel", desc: "Sur RM" },
            { href: "/rejas-metalicas-nunoa", label: "Rejas Ñuñoa", desc: "Frontis y ventanas" },
            { href: "/cercos-perimetrales-precio", label: "Precio de cercos", desc: "Cuánto cuesta cercar" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Ñuñoa</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y tipo. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Ñuñoa. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
