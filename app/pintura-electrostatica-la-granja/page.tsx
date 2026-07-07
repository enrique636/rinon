import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática La Granja — Rejas y Portones al Horno | Sur RM",
  description: "Pintura electrostática al horno en La Granja. Rejas, portones y muebles metálicos con acabado duradero. Fabricante directo para el sur de Santiago.",
  keywords: [
    "pintura electrostatica la granja",
    "pintura al horno la granja santiago",
    "pintura rejas la granja sur rm",
    "pintura electrostatica sur rm la granja",
    "pintura metalica la granja santiago",
    "pintura portones la granja",
  ],
  alternates: { canonical: "https://dumar.cl/pintura-electrostatica-la-granja" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaLaGranjaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">La Granja</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Pintura al horno · Sur RM · Rejas y portones</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en La Granja — Sur de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Aplicamos pintura electrostática al horno para rejas, portones y muebles metálicos en La Granja. Proceso en planta con preparación de superficie, aplicación electrostática y curado a 180 °C — el acabado más duradero disponible para metales.</p>
          <a href={wa("Hola, necesito cotizar pintura electrostática en La Granja. Qué necesito pintar: [REJAS / PORTÓN / MUEBLE / ESTRUCTURA]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar pintura electrostática</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Colores más solicitados</h2>
          <div className="flex flex-wrap gap-2">
            {["Negro mate RAL 9005","Negro brillante","Blanco roto RAL 9010","Gris antracita RAL 7016",
              "Gris plata RAL 9006","Marrón óxido","Verde oscuro","Azul marino",
              "Colores personalizados RAL"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/pintura-electrostatica-san-miguel", label: "Pintura San Miguel", desc: "Sur RM vecino" },
            { href: "/pintura-electrostatica-san-ramon", label: "Pintura San Ramón", desc: "Sur RM" },
            { href: "/rejas-metalicas-la-granja", label: "Rejas La Granja", desc: "Fabricación e instalación" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "Guía completa del proceso" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura en La Granja</h2>
          <p className="text-gray-400 text-sm mb-5">Qué necesitas pintar, color y cantidad. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito pintura electrostática en La Granja. Qué pintar: [DATO]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
