import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Osorno — Galvanizado para el Sur Húmedo",
  description: "Cercos perimetrales metálicos para Osorno y la Región de Los Lagos. Fabricante en Santiago con despacho al sur. Rejas galvanizadas para el clima lluvioso de Osorno y la zona lacustre.",
  keywords: [
    "cercos perimetrales osorno","cerco metalico osorno","reja perimetral osorno",
    "cerco galvanizado osorno","rejas metalicas osorno","fabricante cercos osorno",
    "cercos region los lagos osorno","cerco para casa osorno","reja galvanizada osorno",
  ],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-osorno" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesOsornoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Osorno</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho Los Lagos</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales para Osorno y Los Lagos</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos y despachamos cercos perimetrales metálicos a Osorno, Río Negro, La Unión
            y toda la Región de Los Lagos. Zona de alta pluviosidad y actividad agrícola — galvanizado
            en caliente para cercos que duren años sin mantenimiento.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 text-sm text-blue-900">
            <strong className="block mb-1">Zona húmeda — galvanizado recomendado</strong>
            <p className="text-xs text-blue-700 leading-relaxed">
              Osorno tiene más de 1.500 mm de lluvia anual. La humedad constante deteriora el acero
              con pintura convencional. Para cercos en la Región de Los Lagos recomendamos galvanizado
              en caliente sobre cualquier otra opción.
            </p>
          </div>

          <a
            href={wa("Hola, necesito cotizar un cerco perimetral para Osorno / Los Lagos. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / PARCELA / EMPRESA]. Ciudad: [CIUDAD].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades de Los Lagos que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Osorno","Río Negro","La Unión","Río Bueno","San Pablo","Purranque","Entre Lagos","Las Cascadas"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "El acabado correcto para el sur" },
            { href: "/cercos-perimetrales-puerto-montt", label: "Cercos Puerto Montt", desc: "Capital de la región" },
            { href: "/cercos-perimetrales-valdivia", label: "Cercos Valdivia", desc: "Región Los Ríos" },
            { href: "/blog/galvanizado-vs-pintado-cuando-elegir", label: "Galvanizado vs pintado", desc: "Guía técnica" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco para Osorno</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y ciudad. Coordinamos el despacho a Los Lagos.</p>
          <a
            href={wa("Hola, necesito un cerco perimetral galvanizado para Osorno. Metros: [METROS] ml. Altura: [ALTURA] m. Ciudad: [CIUDAD].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
