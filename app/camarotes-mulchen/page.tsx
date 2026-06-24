import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Mulchén — Campamentos Forestales Biobío | Buenos Pal Catre",
  description:
    "Camarotes metálicos para Mulchén y campamentos forestales de la Región del Biobío. Fabricante directo — resistentes a la humedad y uso intensivo en faenas forestales.",
  keywords: [
    "camarotes mulchen",
    "camarotes forestales mulchen",
    "camas campamento forestal biobio",
    "camarotes metalicos mulchen biobio",
    "proveedor camarotes mulchen",
  ],
  alternates: { canonical: "https://dumar.cl/camarotes-mulchen" },
};

export default function CamarotesMulchenPage() {
  const wa = getWhatsAppUrl("Hola, necesito cotizar camarotes para un campamento forestal en Mulchén / Biobío.");
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-forestales" className="hover:text-gray-600">Forestales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Mulchén</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">🌲 Mulchén · Forestal Biobío · Campamentos</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes para Mulchén — Faenas Forestales Biobío</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Mulchén es uno de los centros forestales más activos del Biobío, con operaciones
            de plantación, cosecha y transporte de madera que requieren alojamiento permanente
            para cuadrillas. Los campamentos forestales de la zona exigen camarotes que resistan
            la humedad, el barro y el uso continuo por múltiples turnos.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Fabricamos en acero con pintura electrostática resistente a la corrosión. Sin partes
            de madera que absorban humedad. Ideales para campamentos en zonas lluviosas del sur.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para Mulchén</a>
            <Link href="/camarotes-forestales" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver catálogo forestal</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-los-angeles", label: "Camarotes Los Ángeles", desc: "Capital provincial del Biobío" },
            { href: "/camarotes-angol", label: "Camarotes Angol", desc: "Araucanía forestal" },
            { href: "/camarotes-forestales", label: "Camarotes Forestales", desc: "Catálogo completo para el sector" },
            { href: "/camarotes-al-por-mayor", label: "Precios por volumen", desc: "Descuentos desde 20 unidades" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-green-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Campamento forestal en Mulchén</h2>
          <p className="text-green-200 text-sm mb-5">Cuéntanos la cantidad y el plazo. Cotizamos con despacho al sur.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Solicitar cotización</a>
        </div>
      </div>
    </div>
  );
}
