import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Pudahuel — Zona Industrial Poniente RM",
  description: "Cercos perimetrales en Pudahuel. Fabricante directo. Cercos industriales y residenciales para el sector poniente de Santiago. Instalación incluida en toda la zona de Pudahuel.",
  keywords: ["cercos perimetrales pudahuel","cerco perimetral pudahuel","reja metalica pudahuel","cerco industrial pudahuel","fabricante cercos pudahuel santiago","cerco empresa pudahuel","cercos zona industrial poniente rm"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-pudahuel" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesPudahuelPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Pudahuel</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Zona industrial · Poniente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Pudahuel — Industrial Poniente</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Pudahuel concentra parques industriales, bodegas logísticas y empresas de transporte — uno de los polos industriales más grandes de la RM. Fabricamos cercos perimetrales industriales y residenciales para toda la zona de Pudahuel. Instalación incluida.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en Pudahuel. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [INDUSTRIAL / BODEGA / EMPRESA / CASA]. Sector: [PARQUE INDUSTRIAL / VILLA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi cerco en Pudahuel</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-maipu", label: "Cercos Maipú", desc: "Poniente RM vecino" },
            { href: "/cercos-perimetrales-quilicura", label: "Cercos Quilicura", desc: "Norte RM industrial" },
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial", desc: "Empresas y bodegas" },
            { href: "/cierres-para-bodegas", label: "Cierres para bodegas", desc: "Soluciones logísticas" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Pudahuel</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso (industrial o residencial). Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Pudahuel. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
