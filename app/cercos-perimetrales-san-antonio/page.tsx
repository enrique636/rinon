import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales San Antonio — Fabricante para Zona Costera",
  description: "Cercos perimetrales en San Antonio. Fabricante directo. Cercos galvanizados resistentes al salitre marino para empresas, bodegas y casas en el puerto de San Antonio, V Región.",
  keywords: ["cercos perimetrales san antonio","cerco perimetral san antonio","reja metalica san antonio","cerco galvanizado san antonio","cerco resistente salitre san antonio","cerco perimetral puerto san antonio","fabricante cercos san antonio valparaiso"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-san-antonio" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetraleSanAntonioPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">San Antonio</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Galvanizado para zona costera · V Región</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en San Antonio — Puerto y Zona Costera</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">San Antonio es la ciudad portuaria más importante de Chile — con ambiente marino, salitre y viento costero permanente. Fabricamos cercos perimetrales con acabado galvanizado para resistir las condiciones de la costa V Región. Industrias, bodegas portuarias y viviendas residenciales.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en San Antonio. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [INDUSTRIAL / EMPRESA / CASA]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi cerco en San Antonio</a>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-900">
          <strong>Ciudad portuaria con salitre marino:</strong> San Antonio tiene ambiente salino permanente por el viento costero del Pacífico. Para instalaciones que duren 15+ años recomendamos galvanizado en caliente. La pintura sola tiene una vida útil de 4–7 años en esta zona antes de que aparezca el óxido.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-valparaiso", label: "Cercos Valparaíso", desc: "Región costera vecina" },
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "El acabado que resiste el salitre" },
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial", desc: "Bodegas y empresas" },
            { href: "/blog/galvanizado-vs-pintado-cuando-elegir", label: "Galvanizado vs pintado", desc: "Qué conviene en zona costera" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en San Antonio</h2>
          <p className="text-gray-400 text-sm mb-5">Metros totales, altura y uso. Cotizamos el mismo día con instalación.</p>
          <a href={wa("Hola, necesito cerco perimetral en San Antonio. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
