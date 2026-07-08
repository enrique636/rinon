import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Paine — Trabajadores Agrícolas y Temporeros | Buenos Pal Catre",
  description:
    "Camarotes metálicos para Paine y sector sur de la RM. Alojamiento de temporeros y trabajadores agrícolas. Fabricante directo con despacho nacional y factura empresa.",
  keywords: [
    "camarotes paine",
    "camarotes trabajadores agricolas paine",
    "camarotes temporeros paine",
    "camas alojamiento paine",
    "camarotes metalicos paine rm",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-paine" },
};

export default function CamarotesPainePage() {
  const wa = getWhatsAppUrl("Hola, necesito camarotes para alojamiento de trabajadores en Paine. ¿Pueden cotizarme?");
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-agricolas" className="hover:text-gray-600">Agrícola</Link><span>/</span>
          <span className="text-gray-700 font-medium">Paine</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 text-sm text-emerald-700 font-medium mb-5">🌾 Paine · Agrícola RM · Temporeros</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes para Paine — Alojamiento Agrícola</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Paine es uno de los principales polos hortofrutícolas de la Región Metropolitana.
            Durante la temporada de cosecha, los fundos y packings necesitan alojamiento rápido,
            resistente y con capacidad para equipar desde 20 hasta 200 plazas.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            El camarote metálico es la solución estándar del sector: fácil de limpiar, resistente
            a la humedad de la zona sur-RM y durable para múltiples temporadas sin reposición.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para Paine</a>
            <Link href="/camarotes-agricolas" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver catálogo agrícola</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-agricolas", label: "Camarotes Agrícolas", desc: "Catálogo para fundos y packings" },
            { href: "/camarotes-buin", label: "Camarotes Buin", desc: "Zona agrícola contigua" },
            { href: "/camarotes-melipilla", label: "Camarotes Melipilla", desc: "Sector hortofrutícola RM" },
            { href: "/camarotes-al-por-mayor", label: "Compra por volumen", desc: "Precio mayorista desde 20 unidades" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-emerald-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Temporada próxima en Paine?</h2>
          <p className="text-emerald-200 text-sm mb-5">Cotiza con tiempo para tener los camarotes antes que empiece la cosecha.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Solicitar cotización</a>
        </div>
      </div>
    </div>
  );
}
