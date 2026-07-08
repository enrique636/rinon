import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales San Miguel — Fabricante con Instalación | Sur RM",
  description: "Cercos perimetrales en San Miguel. Fabricante directo. Cercos de malla, tubo y ángulo para casas, empresas e industrias del sur de Santiago. Instalación incluida.",
  keywords: [
    "cercos perimetrales san miguel",
    "cerco perimetral san miguel santiago",
    "cierre perimetral san miguel",
    "malla perimetral san miguel",
    "cerco metalico san miguel sur rm",
    "fabricante cercos san miguel",
    "instalacion cerco perimetral san miguel",
  ],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-san-miguel" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesSanMiguelPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos RM</Link><span>/</span>
          <span className="text-gray-700 font-medium">San Miguel</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Sur RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en San Miguel — Sur de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos cercos perimetrales en San Miguel para casas, empresas e industrias. Malla de acero, tubo estructural y ángulo — con portón de acceso vehicular y peatonal incluido según necesidad.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en San Miguel. Metros lineales: [METROS] ml. Altura: [ALTURA] m. Tipo de uso: [CASA / EMPRESA / INDUSTRIA]. Tipo de cierre: [MALLA / TUBO / ÁNGULO]. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco perimetral</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de cerco para San Miguel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cerco de malla eslabonada", d: "El más económico para grandes perímetros. Ideal para delimitar lotes, industriales y terrenos. Postes cada 2,5 m anclados en hormigón." },
              { t: "Cerco de tubo estructural", d: "Mayor rigidez y mejor acabado visual. Se usa en casas, empresas y condominios donde la estética importa. Diseño tubular con barrotes verticales." },
              { t: "Cerco mixto malla + tubo", d: "Parte inferior en tubo y parte superior en malla tensada. Combina rigidez en la base con economía en la altura. Común en industrias y galpones." },
              { t: "Cerco anti-trepa", d: "Cerramiento con diseño disuasivo en la parte superior — punta de lanza, concertina o ángulo invertido. Para perímetros que requieren mayor seguridad." },
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
            { href: "/cercos-perimetrales-maipu", label: "Cercos Maipú", desc: "Sur RM" },
            { href: "/cercos-perimetrales-pudahuel", label: "Cercos Pudahuel", desc: "Poniente RM" },
            { href: "/cercos-perimetrales-precio", label: "Precio de cercos", desc: "Factores que influyen en el costo" },
            { href: "/rejas-metalicas-san-miguel", label: "Rejas San Miguel", desc: "Frontis y ventanas" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en San Miguel</h2>
          <p className="text-gray-400 text-sm mb-5">Metros lineales, altura y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en San Miguel. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO]. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
