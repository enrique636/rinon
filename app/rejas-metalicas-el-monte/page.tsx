import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica El Monte — Fabricante con Instalación | Sur Poniente RM",
  description: "Rejas metálicas en El Monte. Fabricante directo con instalación incluida. Frontis de casa, cercos perimetrales y portones para el sector sur poniente rural de la RM.",
  keywords: [
    "reja metalica el monte",
    "rejas metalicas el monte santiago",
    "reja para casa el monte rm",
    "fabricante rejas el monte",
    "cerco perimetral el monte",
    "porton metalico el monte sur poniente",
    "rejas fierro el monte rm",
  ],
  alternates: { canonical: "https://dumar.cl/rejas-metalicas-el-monte" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasElMontePage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">El Monte</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Sur poniente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en El Monte — Sur Poniente de la RM</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en El Monte. En este sector predominan
            las casas de campo, chacras y loteos en expansión — con alta demanda de cercos
            perimetrales para terrenos grandes y portones de acceso vehicular. También
            atendemos rejas de frontis para los sectores urbanos del pueblo.
          </p>
          <a href={wa("Hola, necesito cotizar en El Monte. Tipo: [REJA DE FRONTIS / CERCO PERIMETRAL / PORTÓN]. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / PARCELA / CHACRA]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi reja</a>
        </div>
        <div className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-800 text-sm font-medium mb-1">Zona agrícola — recomendamos galvanizado</p>
            <p className="text-blue-700 text-xs leading-relaxed">El Monte es una zona de agricultura intensiva con riego frecuente. Para cercos en terrenos agrícolas o en contacto con tierra húmeda, recomendamos postes y tubo galvanizado en caliente — la protección anti-óxido es notablemente superior al acero pintado en ambientes con alta humedad.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-talagante", label: "Rejas Talagante", desc: "Sur poniente RM vecino" },
            { href: "/rejas-metalicas-padre-hurtado", label: "Rejas Padre Hurtado", desc: "Sur poniente RM" },
            { href: "/cercos-para-parcelas", label: "Cercos para parcelas", desc: "Guía completa de parcelas" },
            { href: "/cercos-perimetrales-galvanizados", label: "Cercos galvanizados", desc: "Protección en zonas húmedas" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza en El Monte</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, metros y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito reja o cerco en El Monte. Tipo: [DATO]. Metros: [METROS] ml. Uso: [CASA / PARCELA]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
