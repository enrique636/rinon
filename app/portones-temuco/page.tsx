import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones Metálicos Temuco — Corredizos y Automáticos | IX Región de La Araucanía",
  description: "Portones metálicos para casas y locales en Temuco. Corredizos, batientes y automáticos. Fabricante con acabado resistente a lluvia. Instalación IX Región.",
  keywords: ["portones metalicos temuco","porton metalico temuco","porton corredizo temuco","porton automatico temuco","portones araucania","portones padre las casas","fabricante portones temuco","precio porton temuco"],
  alternates: { canonical: "https://rinon.cl/portones-temuco" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesTemocoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/portones-metalicos" className="hover:text-gray-600">Portones Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Temuco</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · IX Región de La Araucanía · Resistente a lluvia</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portones Metálicos para Temuco y La Araucanía</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos portones metálicos para casas y locales en Temuco, Padre Las Casas, Nueva Imperial y toda la IX Región de La Araucanía. La alta pluviosidad del sur exige acabados anticorrosivos — usamos pintura electrostática al horno que soporta la lluvia constante sin oxidarse.</p>
          <a href={wa("Hola, quiero cotizar un portón metálico en Temuco. Tipo: [CORREDIZO / BATIENTE / AUTOMÁTICO]. Ancho: [DATO]. Alto: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Temuco</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/portones-santiago", label: "Portones Santiago", desc: "Hub principal de portones" },
            { href: "/portones-corredizos", label: "Portones Corredizos", desc: "Todos los modelos" },
            { href: "/rejas-metalicas-temuco", label: "Rejas Temuco", desc: "Rejas para casas y locales" },
            { href: "/cercos-perimetrales-temuco", label: "Cercos Temuco", desc: "Cerco perimetral IX Región" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Temuco</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, medidas y dirección. Coordinamos despacho a La Araucanía.</p>
          <a href={wa("Hola, necesito portón en Temuco. Tipo: [DATO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
