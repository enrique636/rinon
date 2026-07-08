import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática La Pintana — Rejas y Portones al Horno",
  description: "Pintura electrostática al horno en La Pintana. Rejas, portones y estructuras metálicas con acabado duradero. Servicio para particulares y empresas del sur de Santiago.",
  keywords: [
    "pintura electrostatica la pintana",
    "pintura al horno la pintana santiago",
    "pintura rejas la pintana",
    "pintura electrostatica sur rm la pintana",
    "pintura metalica la pintana santiago",
    "pintura portones la pintana",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-la-pintana" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaLaPintanaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">La Pintana</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Pintura al horno · Sur RM · Rejas, portones y muebles</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en La Pintana — Sur de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Servicio de pintura electrostática al horno para rejas, portones y muebles metálicos en La Pintana. Proceso en planta con carga electrostática y curado a 180 °C — acabado más duradero que cualquier pintura aplicada en obra.</p>
          <a href={wa("Hola, necesito cotizar pintura electrostática en La Pintana. Qué necesito pintar: [REJAS / PORTÓN / MUEBLE / ESTRUCTURA]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar pintura electrostática</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Colores disponibles</h2>
          <div className="flex flex-wrap gap-2">
            {["Negro mate RAL 9005","Negro brillante","Blanco roto RAL 9010","Gris antracita RAL 7016",
              "Gris plata RAL 9006","Marrón óxido RAL 8023","Verde botella","Azul marino RAL 5013",
              "Colores personalizados — catálogo RAL completo"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/pintura-electrostatica-el-bosque", label: "Pintura El Bosque", desc: "Sur RM vecino" },
            { href: "/pintura-electrostatica-san-bernardo", label: "Pintura San Bernardo", desc: "Sur RM" },
            { href: "/rejas-metalicas-la-pintana", label: "Rejas La Pintana", desc: "Fabricación e instalación" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "Guía completa del proceso" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura en La Pintana</h2>
          <p className="text-gray-400 text-sm mb-5">Qué necesitas pintar, color y cantidad. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito pintura electrostática en La Pintana. Qué pintar: [DATO]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
