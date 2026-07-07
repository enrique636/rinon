import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales La Florida — Fabricante con Instalación | Sur RM",
  description: "Cercos perimetrales en La Florida. Fabricante directo. Cercos de malla, tubo y ángulo para casas, parcelas y empresas del sur oriente de Santiago.",
  keywords: [
    "cercos perimetrales la florida",
    "cerco perimetral la florida santiago",
    "cierre perimetral la florida rm",
    "malla perimetral la florida",
    "cerco metalico la florida sur rm",
    "fabricante cercos la florida santiago",
    "instalacion cerco perimetral la florida",
  ],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-la-florida" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesLaFloridaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos RM</Link><span>/</span>
          <span className="text-gray-700 font-medium">La Florida</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Sur oriente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en La Florida — Sur Oriente de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos cercos perimetrales en La Florida. Malla de acero, tubo estructural y ángulo para casas, condominios y empresas. La Florida tiene una gran densidad residencial — el cerramiento es clave para delimitar propiedades y dar seguridad.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en La Florida. Metros lineales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / CONDOMINIO / EMPRESA]. Tipo: [MALLA / TUBO / ÁNGULO]. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco perimetral</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de La Florida que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["La Florida","Av. Vicuña Mackenna","El Bosque Norte","Villa Los Presidentes",
              "Rojas Magallanes","La Florida Centro","Los Quillayes","Villa Olímpica",
              "Camino Lo Barnechea La Florida","Trigal","El Origen"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-puente-alto", label: "Cercos Puente Alto", desc: "Sur RM vecino" },
            { href: "/cercos-perimetrales-maipu", label: "Cercos Maipú", desc: "Sur RM" },
            { href: "/rejas-metalicas-la-florida", label: "Rejas La Florida", desc: "Frontis y ventanas" },
            { href: "/cercos-perimetrales-precio", label: "Precio de cercos", desc: "Cuánto cuesta cercar" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en La Florida</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en La Florida. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
