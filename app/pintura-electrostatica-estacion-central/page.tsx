import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Estación Central — Rejas y Metales al Horno",
  description: "Pintura electrostática al horno en Estación Central. Rejas, portones y muebles metálicos con acabado duradero. Servicio para particulares y empresas del poniente de Santiago.",
  keywords: [
    "pintura electrostatica estacion central",
    "pintura al horno estacion central santiago",
    "pintura rejas estacion central",
    "pintura electrostatica poniente rm",
    "pintura metalica estacion central",
    "pintura portones estacion central santiago",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-estacion-central" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaEstacionCentralPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Estación Central</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Pintura al horno · Poniente RM · Rejas, portones y muebles</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en Estación Central</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Servicio de pintura electrostática al horno para rejas, portones y muebles metálicos en Estación Central. El proceso en planta incluye preparación de superficie, aplicación en cabina con carga electrostática y curado al horno a 180 °C.</p>
          <a href={wa("Hola, necesito cotizar pintura electrostática en Estación Central. Qué necesito pintar: [REJAS / PORTÓN / MUEBLE / ESTRUCTURA]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar pintura electrostática</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Proceso paso a paso</h2>
          <ol className="space-y-3">
            {[
              ["Retiro o entrega en planta", "Retiramos en Estación Central o el cliente trae las piezas a nuestra planta — coordinamos según la cantidad y tamaño."],
              ["Preparación de superficie", "Lijado, desengrasado y tratamiento previo del metal para asegurar la adhesión perfecta de la pintura."],
              ["Aplicación electrostática", "La pintura en polvo se aplica con pistola de carga electrostática en cabina cerrada — cobertura total sin zonas sin pintar."],
              ["Curado al horno a 180 °C", "Las piezas pasan al horno durante 20–30 minutos. El calor derrite y polimeriza el polvo formando la película protectora final."],
              ["Entrega con garantía", "Pieza lista para instalar con acabado liso, uniforme y duro. Color permanente desde el primer día."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                <div>
                  <span className="font-semibold text-gray-900 text-sm">{t}</span>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/pintura-electrostatica-maipu", label: "Pintura Maipú", desc: "Sur poniente RM" },
            { href: "/pintura-electrostatica-pudahuel", label: "Pintura Pudahuel", desc: "Poniente RM" },
            { href: "/rejas-metalicas-estacion-central", label: "Rejas Estación Central", desc: "Fabricación e instalación" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "Guía completa del proceso" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura en Estación Central</h2>
          <p className="text-gray-400 text-sm mb-5">Qué necesitas pintar, color y cantidad. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito pintura electrostática en Estación Central. Qué pintar: [DATO]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
