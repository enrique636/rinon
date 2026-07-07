import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Puente Alto — Fabricante | RM Sur Oriente",
  description: "Cercos perimetrales en Puente Alto. Fabricante directo con instalación incluida. La comuna más grande de Chile — cercos para casas, condominios, empresas y parcelas precordillera.",
  keywords: ["cercos perimetrales puente alto","cerco perimetral puente alto","reja metalica puente alto","cerco para casa puente alto","fabricante cercos puente alto santiago","cerco condominio puente alto","cercos sur oriente rm"],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-puente-alto" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesPuenteAltoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Puente Alto</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Sur Oriente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Puente Alto — La Mayor Comuna de Chile</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Puente Alto es la comuna con mayor población de Chile — y uno de los mercados más activos para cercos perimetrales en la RM. Fabricamos cercos para casas, condominios, empresas y parcelas de precordillera. Instalación incluida en toda la comuna.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en Puente Alto. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / CONDOMINIO / EMPRESA / PARCELA]. Sector: [VILLA / POBLACION / PRECORDILLERA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi cerco en Puente Alto</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Puente Alto que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Valle Grande","Av. Concha y Toro","El Principal","Las Vizcachas","La Florida Sur","Bajos de Mena","Sector Precordillera","Av. Camilo Henríquez","Población La Bandera","Nos"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-puente-alto", label: "Rejas Puente Alto", desc: "Rejas para casas y frontis" },
            { href: "/cercos-perimetrales-la-florida", label: "Cercos La Florida", desc: "Sector oriente RM vecino" },
            { href: "/cercos-para-condominios", label: "Cercos para condominios", desc: "Perímetros de conjuntos residenciales" },
            { href: "/cierres-perimetrales", label: "Tipos de cierres", desc: "Guía para elegir el correcto" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Puente Alto</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y sector. Cotizamos con instalación el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Puente Alto. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
