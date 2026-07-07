import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Angol — Fabricante | La Araucanía",
  description: "Cercos perimetrales en Angol. Fabricante directo. Cercos para casas, empresas y predios en el interior de La Araucanía. Instalación incluida. Cotiza hoy.",
  keywords: ["cercos perimetrales angol","cerco perimetral angol","reja metalica angol","cerco para empresa angol","fabricante cercos angol araucania","cerco para casa angol","cercos araucania interior"],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-angol" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesAnglPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Angol</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Interior La Araucanía · Instalación incluida</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Angol — Interior de La Araucanía</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos cercos perimetrales en Angol y el interior de La Araucanía. Casas, empresas, establecimientos y predios del corredor interior. Para la zona de Angol con lluvias de 1.000–1.200 mm anuales, recomendamos pintura electrostática de alta dureza o galvanizado para instalaciones industriales.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en Angol. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / EMPRESA / ESTABLECIMIENTO / PARCELA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi cerco en Angol</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-temuco", label: "Cercos Temuco", desc: "Capital regional La Araucanía" },
            { href: "/cercos-perimetrales-chillan", label: "Cercos Chillán", desc: "Ñuble norte" },
            { href: "/cercos-para-parcelas", label: "Cercos para parcelas", desc: "Predios y parcelas de agrado" },
            { href: "/cierres-perimetrales", label: "Tipos de cierres", desc: "Guía para elegir el correcto" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Angol</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Angol. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
