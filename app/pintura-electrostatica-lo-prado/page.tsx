import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Lo Prado — Rejas y Portones al Horno | Poniente RM",
  description: "Pintura electrostática al horno en Lo Prado. Rejas, portones y muebles metálicos. Servicio para particulares y empresas del poniente de Santiago.",
  keywords: [
    "pintura electrostatica lo prado",
    "pintura al horno lo prado santiago",
    "pintura rejas lo prado poniente rm",
    "pintura electrostatica poniente rm lo prado",
    "pintura metalica lo prado santiago",
    "pintura portones lo prado",
  ],
  alternates: { canonical: "https://dumar.cl/pintura-electrostatica-lo-prado" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaLoPradoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Lo Prado</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Pintura al horno · Poniente RM · Rejas y portones</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en Lo Prado — Poniente de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Pintura electrostática al horno para rejas, portones y muebles metálicos en Lo Prado y el sector poniente de la RM. El proceso incluye preparación de superficie, aplicación con carga electrostática y curado al horno — acabado que no requiere mantenimiento por 8–12 años.</p>
          <a href={wa("Hola, necesito cotizar pintura electrostática en Lo Prado. Qué necesito pintar: [REJAS / PORTÓN / MUEBLE / ESTRUCTURA]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar pintura electrostática</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Cuándo conviene llevar a pintar vs repintar en obra?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Llevar a planta (electrostática)", d: "Para piezas que se pueden desmontar — rejas, portones, muebles. Acabado superior, vida útil 8–12 años. Se retira la pieza, se pinta en planta y se reinstala." },
              { t: "Pintar en obra (convencional)", d: "Para estructuras que no se pueden desmontar — cercos ya instalados, estructuras soldadas in situ. Menor durabilidad (3–5 años) pero sin necesidad de mover la pieza." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/pintura-electrostatica-pudahuel", label: "Pintura Pudahuel", desc: "Poniente RM vecino" },
            { href: "/pintura-electrostatica-estacion-central", label: "Pintura Estación Central", desc: "Poniente RM" },
            { href: "/rejas-metalicas-lo-prado", label: "Rejas Lo Prado", desc: "Fabricación e instalación" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "Guía completa del proceso" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura en Lo Prado</h2>
          <p className="text-gray-400 text-sm mb-5">Qué necesitas pintar, color y cantidad. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito pintura electrostática en Lo Prado. Qué pintar: [DATO]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
