import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones Metálicos Concepción — Corredizos y Automáticos | VIII Región",
  description: "Portones metálicos para casas y empresas en Concepción y el Gran Concepción. Corredizos, batientes y automáticos. Fabricante con instalación VIII Región.",
  keywords: ["portones metalicos concepcion","porton metalico concepcion","porton corredizo concepcion","porton automatico concepcion","portones talcahuano","portones san pedro","fabricante portones concepcion","precio porton concepcion"],
  alternates: { canonical: "https://rinon.cl/portones-concepcion" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesConcepcionPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/portones-metalicos" className="hover:text-gray-600">Portones Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Concepción</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · VIII Región del Biobío · Resistente a lluvia</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portones Metálicos para Concepción y el Gran Concepción</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos portones metálicos para casas, condominios y empresas en Concepción, Talcahuano, San Pedro de la Paz y toda la zona del Gran Concepción. El clima húmedo del sur requiere pintura electrostática al horno — sin óxido ni desgaste con la lluvia.</p>
          <a href={wa("Hola, quiero cotizar un portón metálico en Concepción. Tipo: [CORREDIZO / BATIENTE / AUTOMÁTICO]. Ancho: [DATO]. Alto: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Concepción</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/portones-santiago", label: "Portones Santiago", desc: "Hub principal de portones" },
            { href: "/portones-corredizos", label: "Portones Corredizos", desc: "Todos los modelos" },
            { href: "/rejas-metalicas-concepcion", label: "Rejas Concepción", desc: "Rejas para casas y locales" },
            { href: "/cercos-perimetrales-concepcion", label: "Cercos Concepción", desc: "Cerco perimetral VIII Región" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Concepción</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, medidas y dirección. Coordinamos despacho e instalación.</p>
          <a href={wa("Hola, necesito portón en Concepción. Tipo: [DATO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
