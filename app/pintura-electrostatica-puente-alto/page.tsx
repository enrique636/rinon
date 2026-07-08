import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Puente Alto — Rejas y Portones al Horno",
  description: "Pintura electrostática al horno en Puente Alto. Rejas, portones y muebles metálicos. Servicio para particulares y empresas del sur oriente de Santiago.",
  keywords: [
    "pintura electrostatica puente alto",
    "pintura al horno puente alto santiago",
    "pintura rejas puente alto",
    "pintura electrostatica sur rm puente alto",
    "pintura metalica puente alto santiago",
    "pintura portones puente alto",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-puente-alto" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaPuenteAltoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Puente Alto</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Pintura al horno · Sur oriente RM · Rejas y portones</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en Puente Alto — Acabado al Horno</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            La pintura electrostática al horno es la mejor opción para renovar rejas y
            portones en Puente Alto — dura 2 a 3 veces más que la pintura convencional,
            no requiere imprimante previo en piezas nuevas y se aplica de manera uniforme
            en toda la pieza, incluyendo partes internas y esquinas. Atendemos particulares
            y empresas de Puente Alto y el sector sur oriente de la RM.
          </p>
          <a href={wa("Hola, necesito cotizar pintura electrostática en Puente Alto. Qué necesito pintar: [REJAS / PORTÓN / MUEBLE / ESTRUCTURA]. Color: [DATO]. Cantidad aproximada: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar pintura electrostática</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Qué se puede pintar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Rejas de frontis","Portones corredizos","Puertas metálicas","Muebles metálicos",
              "Camarotes","Estanterías","Cercos tubulares","Estructuras de jardín"].map((i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center text-xs font-medium text-gray-700">{i}</div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-puente-alto", label: "Rejas Puente Alto", desc: "Fabricación e instalación" },
            { href: "/cercos-perimetrales-puente-alto", label: "Cercos Puente Alto", desc: "Perímetro y accesos" },
            { href: "/pintura-electrostatica-la-florida", label: "Pintura La Florida", desc: "Sur RM vecino" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "Guía completa del proceso" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura en Puente Alto</h2>
          <p className="text-gray-400 text-sm mb-5">Qué necesitas pintar, color y cantidad. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito pintura electrostática en Puente Alto. Qué pintar: [DATO]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
