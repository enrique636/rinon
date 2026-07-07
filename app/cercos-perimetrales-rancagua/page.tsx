import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Rancagua — Fabricante O'Higgins | Buenos Pal Catre",
  description: "Cercos perimetrales metálicos para Rancagua, San Fernando y la Región de O'Higgins. Fabricante en Santiago con despacho a toda la VI Región. Reja tubular y portones.",
  keywords: ["cercos perimetrales rancagua", "reja metalica rancagua", "cerco perimetral ohiggins", "cerco metalico rancagua", "rejas metalicas rancagua", "fabrica cercos rancagua", "portones metalicos rancagua", "cerco perimetral san fernando", "rejas san bernardo rancagua"],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-rancagua" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosRancaguaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Rancagua</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho O'Higgins</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales para Rancagua y la Región de O&apos;Higgins</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos rejas tubulares, cercos perimetrales y portones metálicos en Santiago y despachamos a Rancagua, San Fernando, Rengo, Pichilemu y toda la VI Región. Precio de fábrica para proyectos residenciales, agrícolas e industriales.
          </p>
          <a href={wa("Hola, necesito cercos perimetrales para Rancagua / O'Higgins. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades que atendemos en la VI Región</h2>
          <div className="flex flex-wrap gap-2">
            {["Rancagua","San Fernando","Rengo","Graneros","Machalí","Mostazal","Doñihue","Requínoa","Las Cabras","Pichilemu","Litueche","Santa Cruz","Chimbarongo","Codegua"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Aplicaciones frecuentes en la región</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cercos para predios agrícolas", d: "Cierre perimetral de fundos, parcelas y chacras en la zona central. Reja tubular o malla, con portón vehicular." },
              { t: "Cierres para bodegas vitivinícolas", d: "La región de O'Higgins concentra industria vitivinícola — cercos y mallas para bodegas y plantas de procesamiento." },
              { t: "Cerco residencial", d: "Para casas y condominios en Rancagua y ciudades de la región. Frontis y cierres de jardín." },
              { t: "Portones industriales", d: "Para parques industriales de Rancagua, Machalí y zonas industriales de la región." },
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
            { href: "/cierres-perimetrales", label: "Ver todos los cercos", desc: "Catálogo completo" },
            { href: "/rejas-metalicas", label: "Rejas metálicas", desc: "Todos los tipos" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Para bodegas y empresas" },
            { href: "/cercos-perimetrales-concepcion", label: "Cercos Concepción", desc: "También atendemos el sur" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Proyecto en Rancagua o la VI Región</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el tipo de cerco, los metros y la ciudad. Cotizamos con flete incluido.</p>
          <a href={wa("Hola, necesito cercos perimetrales para [CIUDAD VI REGIÓN]. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
