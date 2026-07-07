import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Buin — Fabricante con Instalación | Sur RM Rural",
  description: "Rejas metálicas en Buin. Fabricante directo con instalación incluida. Frontis de casa, cercos perimetrales y portones para el sector sur rural de la Región Metropolitana.",
  keywords: [
    "reja metalica buin",
    "rejas metalicas buin santiago",
    "reja para casa buin sur rm",
    "fabricante rejas buin",
    "cerco perimetral buin rm",
    "porton metalico buin",
    "rejas fierro buin santiago",
    "instalacion rejas buin rm",
  ],
  alternates: { canonical: "https://dumar.cl/rejas-metalicas-buin" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasBuinPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Buin</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Sur RM rural</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Buin — Sur de la Región Metropolitana</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Buin y el sector sur de la RM tienen una alta demanda de cercos perimetrales
            para chacras, parcelas y casas de campo — además de rejas de frontis para los
            sectores urbanos en expansión. Fabricamos en acero estructural con pintura
            electrostática al horno y galvanizado disponible para zonas con irrigación
            frecuente o mayor humedad.
          </p>
          <a href={wa("Hola, necesito cotizar en Buin. Tipo: [REJA DE FRONTIS / CERCO PERIMETRAL / PORTÓN]. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / PARCELA / CHACRA]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi reja</a>
        </div>
        <div className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
            <p className="text-blue-800 text-sm font-medium mb-1">Zona con riego frecuente</p>
            <p className="text-blue-700 text-xs leading-relaxed">Buin es zona agrícola con riego por inundación y aspersión. Para cercos de parcela o chacra en contacto con tierra húmeda, recomendamos postes galvanizados en caliente y tubo galvanizado — la vida útil frente a la corrosión es notablemente mayor que el acero pintado.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-para-parcelas", label: "Cercos para parcelas", desc: "Guía completa de parcelas" },
            { href: "/cercos-perimetrales-galvanizados", label: "Cercos galvanizados", desc: "Protección en zonas húmedas" },
            { href: "/rejas-metalicas-san-bernardo", label: "Rejas San Bernardo", desc: "Sur RM vecino" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Frontis completo" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza en Buin</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, metros y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito reja o cerco en Buin. Tipo: [DATO]. Metros: [METROS] ml. Uso: [CASA / PARCELA]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
