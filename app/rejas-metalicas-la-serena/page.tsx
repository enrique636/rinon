import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Metálicas La Serena — Fabricante con Instalación | IV Región",
  description: "Rejas metálicas para casas y locales en La Serena y Coquimbo. Frontis, ventanas y cerco. Fabricante. Instalación en toda la Región de Coquimbo.",
  keywords: ["rejas metalicas la serena","reja metalica la serena","rejas para casa la serena","reja frontal la serena","rejas metalicas coquimbo","reja metalica cuarta region","fabricante rejas la serena","precio reja metalica la serena"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-la-serena" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasLaSerenaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas-santiago" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">La Serena</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · IV Región · Acabado resistente al sol</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas para La Serena y Coquimbo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos rejas metálicas para casas, locales y edificios en La Serena, Coquimbo y la IV Región. El sol intenso del norte chico exige pintura de calidad — la electrostática al horno que usamos no se decolora ni se agrieta con la radiación UV.</p>
          <a href={wa("Hola, necesito cotizar rejas metálicas para La Serena / Coquimbo. Tipo: [FRONTIS / VENTANA / CERCO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para La Serena</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-la-serena", label: "Cercos La Serena", desc: "Cerco perimetral IV Región" },
            { href: "/camarotes-la-serena", label: "Camarotes La Serena", desc: "Literas metálicas" },
            { href: "/rejas-metalicas-santiago", label: "Ver todos los modelos", desc: "Catálogo completo" },
            { href: "/rejas-metalicas-precio", label: "Precio de Rejas", desc: "Cuánto cuesta una reja" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para La Serena</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, medidas y dirección. Coordinamos despacho a la IV Región.</p>
          <a href={wa("Hola, necesito rejas para La Serena. Tipo: [DATO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
