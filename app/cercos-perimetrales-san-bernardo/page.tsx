import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales San Bernardo — Fabricante con Instalación | Sur RM",
  description: "Cercos perimetrales en San Bernardo. Fabricante directo. Malla, tubo y ángulo para casas, parcelas, bodegas e industrias del sur de Santiago. Instalación incluida.",
  keywords: ["cercos perimetrales san bernardo","cerco perimetral san bernardo santiago","cierre perimetral san bernardo","malla perimetral san bernardo","cerco metalico san bernardo sur rm","fabricante cercos san bernardo","instalacion cerco san bernardo"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-san-bernardo" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesSanBernardoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos RM</Link><span>/</span>
          <span className="text-gray-700 font-medium">San Bernardo</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Sur RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en San Bernardo — Sur de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">San Bernardo concentra una gran variedad de proyectos de cerramiento — casas residenciales, industrias en el parque industrial y parcelas en el borde rural. Fabricamos cercos perimetrales para todos los usos en tubo estructural, malla eslabonada y ángulo industrial.</p>
          <a href={wa("Hola, necesito cotizar cerco perimetral en San Bernardo. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / INDUSTRIA / PARCELA / BODEGA]. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco perimetral</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de San Bernardo que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["San Bernardo Centro","Parque Industrial San Bernardo","Nos","Av. Padre Hurtado","El Parrón","Lo Herrera","San Agustín","Villa Las Araucarias","Buin Límite","Camino a Paine"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-maipu", label: "Cercos Maipú", desc: "Sur RM" },
            { href: "/cercos-perimetrales-san-miguel", label: "Cercos San Miguel", desc: "Sur RM" },
            { href: "/rejas-metalicas-san-bernardo", label: "Rejas San Bernardo", desc: "Frontis y ventanas" },
            { href: "/cercos-para-empresas", label: "Cercos para empresas", desc: "Industrial y comercial" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en San Bernardo</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en San Bernardo. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
