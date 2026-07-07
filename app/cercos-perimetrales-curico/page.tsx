import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Curicó — Fabricante con Despacho al Maule",
  description: "Cercos perimetrales metálicos para Curicó y la Región del Maule. Fabricante en Santiago con despacho. Rejas para casas, parcelas y viñas en Curicó, Molina, Teno y el Valle del Maule.",
  keywords: [
    "cercos perimetrales curico",
    "cerco metalico curico",
    "reja perimetral curico",
    "rejas metalicas curico",
    "cerco para casa curico",
    "fabricante cercos curico",
    "cercos region maule curico",
    "cerco para parcela curico",
    "cerco perimetral molina",
    "portones curico maule",
  ],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-curico" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesCuricoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Curicó</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante en Santiago · Despacho Región del Maule
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cercos Perimetrales para Curicó y la Región del Maule
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos y despachamos cercos perimetrales metálicos a Curicó, Molina, Teno,
            Romeral y toda la Región del Maule. Casas, parcelas de agrado, viñas y bodegas
            agrícolas — con portón vehicular incluido si lo necesitas.
          </p>
          <a
            href={wa("Hola, necesito cotizar un cerco perimetral para Curicó / Maule. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / PARCELA / VIÑA / EMPRESA]. Ciudad: [CIUDAD].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades del Maule que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Curicó","Molina","Teno","Romeral","Rauco","Sagrada Familia",
              "Hualañé","Vichuquén","Licantén","Los Niches",
            ].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Usos frecuentes en la zona de Curicó</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Parcelas de agrado en el Valle del Maule",
                d: "Curicó y Molina tienen parcelas de agrado con alta demanda de cercos. Frontis tubular + malla galvanizada perimetral + portón vehicular.",
              },
              {
                t: "Viñas y bodegas vitivinícolas",
                d: "La Región del Maule es la mayor zona vitivinícola de Chile. Cercamos accesos de viñas, bodegas y predios agrícolas.",
              },
              {
                t: "Casas residenciales en Curicó",
                d: "Frontis de casa con reja tubular negra electrostática. Portón batiente o corredizo según el ancho del acceso.",
              },
              {
                t: "Empresas y agroindustria",
                d: "Curicó tiene una zona industrial consolidada. Cercos para perímetros de plantas de proceso, bodegas y predios agroindustriales.",
              },
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
            { href: "/cercos-perimetrales-talca", label: "Cercos Talca", desc: "Capital de la Región del Maule" },
            { href: "/cercos-perimetrales-rancagua", label: "Cercos Rancagua", desc: "Región de O'Higgins" },
            { href: "/cierres-perimetrales", label: "Cercos perimetrales", desc: "Todos los tipos y usos" },
            { href: "/blog/cerco-para-parcela-de-agrado", label: "Cerco para parcela", desc: "Frontis, perímetro y portón" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all"
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco para Curicó</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros, altura y ciudad. Coordinamos el despacho a Curicó y toda la Región del Maule.
          </p>
          <a
            href={wa("Hola, necesito un cerco perimetral para Curicó / Maule. Metros: [METROS] ml. Altura: [ALTURA] m. Ciudad: [CIUDAD]. Incluye portón: [SÍ / NO].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
