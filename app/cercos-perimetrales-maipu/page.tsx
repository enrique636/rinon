import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Maipú — Fabricante | Poniente RM",
  description: "Cercos perimetrales en Maipú. Fabricante directo con instalación incluida. Cercos para casas, condominios y empresas en la segunda comuna más grande de Santiago.",
  keywords: ["cercos perimetrales maipu","cerco perimetral maipu","reja metalica maipu","cerco para casa maipu santiago","fabricante cercos maipu","cerco condominio maipu","cercos poniente rm maipu"],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-maipu" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesMaipuPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Maipú</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Poniente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Maipú — Poniente de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos cercos perimetrales en Maipú y el sector poniente de Santiago. Casas, condominios, empresas y parques industriales. Instalación incluida con garantía.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en Maipú. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / CONDOMINIO / EMPRESA]. Sector: [VILLA / POBLACION].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi cerco en Maipú</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Maipú que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Villa Las Américas","Pajaritos Norte","Av. 5 de Abril","El Bosque de Maipú","El Abrazo","Ciudad de Los Valles","Rinconada de Maipú","Parque El Pueblito","Lomas de lo Aguirre"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-maipu", label: "Rejas Maipú", desc: "Rejas para casas y frontis" },
            { href: "/cercos-perimetrales-pudahuel", label: "Cercos Pudahuel", desc: "Poniente RM vecino" },
            { href: "/cercos-para-condominios", label: "Cercos para condominios", desc: "Conjuntos residenciales" },
            { href: "/cierres-perimetrales", label: "Tipos de cierres", desc: "Guía para elegir el correcto" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Maipú</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Cotizamos con instalación el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Maipú. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
