import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos para Estacionamientos — Cierres Perimetrales para Patios de Vehículos",
  description: "Cercos perimetrales para estacionamientos en Chile. Fabricante directo. Cierres de seguridad para patios de autos, playas de estacionamiento y accesos vehiculares. Instalación incluida.",
  keywords: ["cercos para estacionamientos","cerco perimetral estacionamiento","cierre para patio de autos","cerco playa estacionamiento chile","reja metalica estacionamiento","cerco seguridad patio vehiculos","cierre estacionamiento precio","cerco para playa de autos santiago","fabricante cercos estacionamientos"],
  alternates: { canonical: "https://dumar.cl/cercos-para-estacionamientos" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosParaEstacionamientosPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Cercos para Estacionamientos</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Patios de vehículos · Control de acceso · Seguridad perimetral</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos para Estacionamientos y Patios de Vehículos</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Los estacionamientos necesitan un cierre que controle el acceso, proteja los vehículos y resista el uso intensivo de personas y maquinaria. Fabricamos cercos perimetrales para playas de estacionamiento, patios de automotoras, empresas con flota y estacionamientos comerciales.</p>
          <a href={wa("Hola, necesito cotizar cerco para estacionamiento o patio de vehículos. Metros del perímetro: [METROS] ml. Altura: [ALTURA] m. Uso: [PLAYA DE ESTACIONAMIENTO / AUTOMOTORA / EMPRESA CON FLOTA / OTRO]. Ubicación: [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco para estacionamiento</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Aplicaciones más frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Playas de estacionamiento", d: "Cerco perimetral completo con portón de acceso y salida. Alta resistencia a golpes laterales de vehículos. Se diseña con visibilidad para facilitar el control." },
              { t: "Patios de automotoras", d: "El cerco de una automotora es parte de la imagen del negocio. Combinamos seguridad con diseño — cerco tubular con portón eléctrico o corredizo." },
              { t: "Empresas con flota de vehículos", d: "Patios de empresas logísticas, flotas de camiones o furgones. Cercos de mayor altura (2,00–3,00 m) con acceso controlado." },
              { t: "Estacionamientos de edificios", d: "Cierre del acceso vehicular a nivel calle con portón eléctrico. Cerco lateral para separar zona de estacionamiento del resto de la propiedad." },
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
            { href: "/portones-electricos", label: "Portones eléctricos", desc: "Acceso automatizado para el patio" },
            { href: "/portones-corredizos", label: "Portones corredizos", desc: "Para aperturas amplias" },
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial", desc: "Alta seguridad para empresas" },
            { href: "/cierres-perimetrales", label: "Tipos de cierres", desc: "Guía completa" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza el cerco de tu estacionamiento</h2>
          <p className="text-gray-400 text-sm mb-5">Metros del perímetro, altura y tipo de acceso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco para estacionamiento. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO]. Ubicación: [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
