import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática San Miguel — Rejas, Portones y Muebles Metálicos",
  description: "Pintura electrostática al horno en San Miguel. Servicio en planta para rejas, portones, muebles metálicos y estructuras. Fabricante directo en la RM.",
  keywords: [
    "pintura electrostatica san miguel",
    "pintura al horno san miguel santiago",
    "pintura electrostatica rejas san miguel",
    "pintura metalica san miguel rm",
    "pintura muebles metalicos san miguel",
    "pintura portones san miguel santiago",
    "pintura electrostatica sur rm san miguel",
  ],
  alternates: { canonical: "https://dumar.cl/pintura-electrostatica-san-miguel" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaSanMiguelPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">San Miguel</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Pintura al horno · Sur RM · Rejas y muebles metálicos</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en San Miguel — Al Horno para Metales</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            La pintura electrostática al horno es el acabado más duradero para rejas, portones
            y muebles metálicos — adhiere en frío con carga eléctrica y se cura a 180–200 °C,
            dando una película uniforme y resistente al golpe, la humedad y los rayos UV.
            Atendemos empresas y particulares de San Miguel y el sur de la RM.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en San Miguel. Qué necesito pintar: [REJAS / PORTÓN / MUEBLE METÁLICO / ESTRUCTURA]. Color: [DATO]. Cantidad aproximada: [DATO]. Empresa o particular: [DATO].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar pintura electrostática
          </a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Qué se puede pintar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Rejas de frontis","Portones vehiculares","Puertas metálicas","Muebles metálicos",
              "Estanterías","Estructuras de acero","Camarotes","Cercos perimetrales"].map((i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center text-xs font-medium text-gray-700">{i}</div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/pintura-electrostatica-la-cisterna", label: "Pintura La Cisterna", desc: "Sur RM vecino" },
            { href: "/pintura-electrostatica-el-bosque", label: "Pintura El Bosque", desc: "Sur RM" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "Guía completa del servicio" },
            { href: "/rejas-metalicas-san-miguel", label: "Rejas San Miguel", desc: "Fabricación e instalación" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura en San Miguel</h2>
          <p className="text-gray-400 text-sm mb-5">Qué necesitas pintar, color y cantidad. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito pintura electrostática en San Miguel. Qué pintar: [DATO]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
