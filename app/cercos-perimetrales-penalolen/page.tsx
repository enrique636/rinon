import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Peñalolén — Fabricante con Instalación | Sur Oriente RM",
  description: "Cercos perimetrales en Peñalolén. Fabricante directo. Cercos de malla, tubo y ángulo para casas, parcelas y empresas del sur oriente de Santiago. Instalación incluida.",
  keywords: [
    "cercos perimetrales penalolen",
    "cerco perimetral penalolen santiago",
    "cierre perimetral penalolen rm",
    "malla perimetral penalolen",
    "cerco metalico penalolen sur oriente",
    "fabricante cercos penalolen santiago",
    "instalacion cerco perimetral penalolen",
  ],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-penalolen" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesPenalolenPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos RM</Link><span>/</span>
          <span className="text-gray-700 font-medium">Peñalolén</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Sur oriente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Peñalolén — Sur Oriente de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Peñalolén tiene un perfil mixto — sectores populares, condominios de nivel medio
            y zonas de parcelas en los faldeos cordilleranos. Cada sector tiene necesidades
            de cerramiento distintas. Fabricamos cercos perimetrales para todos los contextos:
            malla económica para terrenos grandes, tubo estructural para casas, y cercos de
            mayor altura para condominios.
          </p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en Peñalolén. Metros lineales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / CONDOMINIO / PARCELA / EMPRESA]. Tipo: [MALLA / TUBO / ÁNGULO]. Con portón: [SÍ / NO]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco perimetral</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Peñalolén que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Peñalolén","Lo Hermida","San Luis","Av. Tobalaba","Las Parcelas",
              "Lo Cañas","El Esfuerzo","Las Torres","Quebrada de Macul",
              "Faldeos Cordilleranos Peñalolén","Las Vizcachas Norte"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-la-florida", label: "Cercos La Florida", desc: "Sur oriente RM vecino" },
            { href: "/cercos-perimetrales-maipu", label: "Cercos Maipú", desc: "Sur RM" },
            { href: "/rejas-metalicas-penalolen", label: "Rejas Peñalolén", desc: "Frontis y ventanas" },
            { href: "/cercos-perimetrales-precio", label: "Precio de cercos", desc: "Cuánto cuesta cercar en la RM" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Peñalolén</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Peñalolén. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
