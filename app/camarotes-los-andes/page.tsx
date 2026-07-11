import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Los Andes — Temporeros y Trabajadores Valle del Aconcagua | Rinon.cl",
  description:
    "Camarotes metálicos para Los Andes y el Valle del Aconcagua. Alojamiento de temporeros frutícolas y trabajadores. Fabricante directo — despacho nacional.",
  keywords: [
    "camarotes los andes",
    "camarotes temporeros los andes",
    "camas trabajadores valle aconcagua",
    "camarotes metalicos los andes chile",
    "alojamiento temporeros los andes",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-los-andes" },
};

export default function CamarotesLosAndesPage() {
  const wa = getWhatsAppUrl("Hola, necesito cotizar camarotes para alojamiento de trabajadores en Los Andes / Valle del Aconcagua.");
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-agricolas" className="hover:text-gray-600">Agrícola</Link><span>/</span>
          <span className="text-gray-700 font-medium">Los Andes</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 text-sm text-emerald-700 font-medium mb-5">🍇 Los Andes · Valle del Aconcagua · Temporada frutícola</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes para Los Andes y Valle del Aconcagua</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            El Valle del Aconcagua es una de las principales zonas frutícolas de Chile — uva de mesa,
            ciruelas, paltas y cítricos. Durante la temporada de cosecha y packing, el alojamiento
            de trabajadores temporeros es una necesidad crítica para los fundos de la zona.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Fabricamos camarotes metálicos pensados para uso agrícola intensivo: fácil limpieza
            entre temporadas, sin partes de madera que se deterioren con la humedad y resistentes
            al movimiento de personal frecuente.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
                      <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-metalico-pieza-arriendo.jpg" alt="Camarote metálico Los Andes — precio directo fabricante" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para Los Andes</a>
            <Link href="/camarotes-agricolas" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver catálogo agrícola</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-san-felipe", label: "Camarotes San Felipe", desc: "Valle del Aconcagua sector norte" },
            { href: "/camarotes-agricolas", label: "Camarotes Agrícolas", desc: "Catálogo completo para el sector" },
            { href: "/camarotes-temporeros", label: "Camarotes para Temporeros", desc: "Guía para alojamiento de temporada" },
            { href: "/camarotes-al-por-mayor", label: "Precios por volumen", desc: "Pedidos desde 20 unidades" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-emerald-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Proyecto en Los Andes o el Aconcagua?</h2>
          <p className="text-emerald-200 text-sm mb-5">Cuéntanos la cantidad y el plazo. Cotizamos con despacho incluido.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Solicitar cotización</a>
        </div>
      </div>
    </div>
  );
}
