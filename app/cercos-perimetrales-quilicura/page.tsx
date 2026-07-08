import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Quilicura — Parques Industriales Norte RM",
  description: "Cercos perimetrales en Quilicura. Fabricante directo. Cercos industriales y residenciales para el sector norte de Santiago. Instalación incluida en parques industriales y sectores residenciales.",
  keywords: ["cercos perimetrales quilicura","cerco perimetral quilicura","reja metalica quilicura","cerco industrial quilicura","fabricante cercos quilicura santiago","cerco empresa quilicura","cercos norte rm quilicura"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-quilicura" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesQuilicuraPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Quilicura</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Parques industriales norte · RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Quilicura — Norte Industrial</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Quilicura concentra algunos de los parques industriales y de distribución más grandes de Santiago norte. Fabricamos cercos perimetrales industriales de alta resistencia para bodegas, centros de distribución, plantas y empresas logísticas — además de cercos residenciales para los sectores de vivienda de la comuna.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en Quilicura. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [INDUSTRIAL / BODEGA / EMPRESA / CASA]. Sector: [PARQUE INDUSTRIAL / VILLA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi cerco en Quilicura</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-pudahuel", label: "Cercos Pudahuel", desc: "Poniente RM industrial" },
            { href: "/cercos-perimetrales-maipu", label: "Cercos Maipú", desc: "Poniente RM" },
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial", desc: "Empresas y bodegas" },
            { href: "/cierres-para-industrias", label: "Cierres para industrias", desc: "Perímetros de plantas industriales" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Quilicura</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Quilicura. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
