import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones de Acero Santiago — Fabricante Directo con Instalación",
  description: "Portones de acero en Santiago. Fabricante directo. Portones vehiculares y de acceso en acero estructural — corredizos, batientes, eléctricos. A medida con instalación incluida en la RM.",
  keywords: [
    "portones de acero",
    "porton de acero santiago",
    "porton metalico de acero",
    "porton acero estructural",
    "porton de acero para casa",
    "porton acero industrial",
    "fabricante portones acero santiago",
    "porton de acero precio chile",
    "portones de acero corredizos",
    "porton acero galvanizado",
  ],
  alternates: { canonical: "https://dumar.cl/portones-de-acero" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesDeAceroPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/portones-metalicos" className="hover:text-gray-600">Portones</Link><span>/</span>
          <span className="text-gray-700 font-medium">Portones de Acero</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Acero estructural · A medida · Instalación en Santiago</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portones de Acero — Fabricados en Tubo Estructural</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">El acero estructural es el material estándar para portones en Chile — versátil, resistente, soldable y con buena relación costo-durabilidad. Fabricamos portones de acero corredizos, batientes, eléctricos y de placa ciega para casas, empresas e industrias en Santiago.</p>
          <a href={wa("Hola, necesito cotizar un portón de acero. Ancho: [ANCHO] m. Altura: [ALTURA] m. Tipo: [CORREDIZO / BATIENTE / PLACA CIEGA]. Con motor: [SÍ / NO]. Uso: [CASA / EMPRESA / INDUSTRIA]. Estoy en [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar portón de acero</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de portón de acero</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Portón tubular (reja)", d: "Marco de tubo cuadrado con barrotes verticales. El tipo más usado en accesos residenciales. Permite visibilidad hacia adentro y buena ventilación." },
              { t: "Portón de placa ciega", d: "Marco de tubo con planchas de acero soldadas — sin visibilidad. Máxima privacidad. Muy usado en empresas, bodegas e industrias." },
              { t: "Portón mixto", d: "Parte baja de placa ciega y parte alta de reja. Combina privacidad en los primeros metros con visibilidad en la parte superior. Popular en concesionarios y empresas." },
              { t: "Portón industrial reforzado", d: "Perfiles de acero de mayor sección y malla o placa más gruesa. Para accesos de camiones, plantas industriales y bodegas de alto tráfico." },
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
            { href: "/portones-corredizos", label: "Portones corredizos", desc: "Guía completa del corredizo" },
            { href: "/portones-batientes", label: "Portones batientes", desc: "Simple y doble hoja" },
            { href: "/portones-electricos", label: "Portones eléctricos", desc: "Motor y automatización" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Accesos de alto tráfico" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu portón de acero</h2>
          <p className="text-gray-400 text-sm mb-5">Ancho, tipo y uso. Cotizamos con instalación el mismo día.</p>
          <a href={wa("Hola, necesito portón de acero. Ancho: [ANCHO] m. Tipo: [TUBULAR / PLACA / MIXTO]. Uso: [CASA / EMPRESA / INDUSTRIA]. Estoy en [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
