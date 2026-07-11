import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Metálicas Arica — Fabricante con Instalación | XV Región de Arica y Parinacota",
  description: "Rejas metálicas para casas y locales en Arica. Acabado resistente al sol extremo y salitre del extremo norte. Fabricante. Instalación XV Región.",
  keywords: ["rejas metalicas arica","reja metalica arica","rejas para casa arica","reja frontal arica","rejas metalicas parinacota","rejas metalicas decimo quinta region","fabricante rejas arica","precio reja metalica arica"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-arica" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasAricaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas-santiago" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Arica</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · XV Región · Resistente al sol y salitre</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas para Arica</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos rejas metálicas para casas y locales en Arica y la XV Región de Arica y Parinacota. El extremo norte de Chile combina sol permanente con brisa salina — la pintura electrostática al horno que aplicamos resiste ambas condiciones sin descascararse.</p>
          <a href={wa("Hola, necesito cotizar rejas metálicas para Arica. Tipo: [FRONTIS / VENTANA / CERCO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Arica</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-arica", label: "Cercos Arica", desc: "Cerco perimetral XV Región" },
            { href: "/camarotes-arica", label: "Camarotes Arica", desc: "Literas metálicas" },
            { href: "/rejas-metalicas-santiago", label: "Ver todos los modelos", desc: "Catálogo completo" },
            { href: "/rejas-metalicas-precio", label: "Precio de Rejas", desc: "Rangos actualizados" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Arica</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, medidas y dirección. Coordinamos despacho al norte.</p>
          <a href={wa("Hola, necesito rejas para Arica. Tipo: [DATO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
