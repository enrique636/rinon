import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Providencia — Fabricante con Instalación | RM",
  description: "Rejas metálicas en Providencia. Fabricante directo. Frontis de casa, portón vehicular y rejas de diseño decorativo. Instalación con garantía en Providencia y sector oriente.",
  keywords: [
    "reja metalica providencia",
    "rejas metalicas providencia",
    "reja para casa providencia",
    "fabricante rejas providencia santiago",
    "rejas decorativas providencia",
    "reja de fierro providencia rm",
    "instalacion rejas providencia",
    "porton metalico providencia",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-providencia" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasProvidenciaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Providencia</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Diseño y seguridad · Sector oriente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Providencia — Diseño y Seguridad</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            En Providencia los frontis tienen exigencias estéticas que van más allá de la
            seguridad básica. Fabricamos rejas metálicas que combinan estructura sólida con
            diseño — tubular liso, mixto con elementos ornamentales o forja artística.
            Pintura electrostática al horno en negro mate, blanco roto, gris antracita o
            el color que defina la casa.
          </p>
          <a href={wa("Hola, necesito cotizar una reja metálica en Providencia. Metros del frontis: [METROS] ml. Altura: [ALTURA] m. Estilo: [LISO / DECORATIVO / FORJA]. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi reja</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Providencia que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Pedro de Valdivia Norte","Pedro de Valdivia Sur","Av. Providencia","Ricardo Lyon",
              "Av. Nueva Providencia","Los Leones","Manuel Montt","Parque Bustamante",
              "Los Conquistadores","Condell","Suecia","Girardi","Eliodoro Yáñez"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-las-condes", label: "Rejas Las Condes", desc: "Sector oriente RM" },
            { href: "/rejas-metalicas-nunoa", label: "Rejas Ñuñoa", desc: "Sector oriente cercano" },
            { href: "/rejas-decorativas", label: "Rejas decorativas", desc: "Diseño ornamental" },
            { href: "/pintura-electrostatica-providencia", label: "Pintura electrostática", desc: "Acabado al horno en Providencia" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Providencia</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, estilo y si lleva portón. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito reja metálica en Providencia. Metros: [METROS] ml. Altura: [ALTURA] m. Estilo: [LISO / DECORATIVO]. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
