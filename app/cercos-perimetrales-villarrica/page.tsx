import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Villarrica — Fabricante | La Araucanía",
  description: "Cercos perimetrales en Villarrica. Fabricante directo. Cercos para casas, cabañas y empresas en la zona turística del Lago Villarrica. Galvanizado recomendado para la lluvia del sur.",
  keywords: ["cercos perimetrales villarrica","cerco perimetral villarrica","reja metalica villarrica","cerco para cabana villarrica","fabricante cercos villarrica araucania","cerco galvanizado villarrica","cerco perimetral lago villarrica"],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-villarrica" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesVillarricaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Villarrica</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Zona lacustre lluviosa · La Araucanía</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Villarrica — Lago y Zona Turística</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Villarrica combina lluvia intensa del sur con la humedad del lago — una zona exigente para el acero. Fabricamos cercos perimetrales para casas de veraneo, cabañas turísticas, condominios lacustres y empresas. Para instalaciones que deben durar sin mantenimiento, recomendamos galvanizado en caliente.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en Villarrica. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / CABAÑA / EMPRESA / CONDOMINIO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi cerco en Villarrica</a>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-900">
          <strong>Zona lacustre con lluvia intensa:</strong> Villarrica recibe entre 1.200 y 1.600 mm de lluvia anual. La humedad constante del lago y los vientos del sur aceleran el deterioro del acero pintado. Recomendamos <strong>galvanizado en caliente</strong> para cercos de perímetro completo — especialmente en propiedades de veraneo con mantenimiento espaciado.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-temuco", label: "Cercos Temuco", desc: "Capital regional La Araucanía" },
            { href: "/cercos-perimetrales-osorno", label: "Cercos Osorno", desc: "Sur lluvioso Los Lagos" },
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "Duración en zonas húmedas" },
            { href: "/cercos-para-parcelas", label: "Cercos para parcelas", desc: "Predios y cabañas" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Villarrica</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Villarrica. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
