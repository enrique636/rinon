import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Conchalí — Fabricante con Instalación | Norte RM",
  description: "Rejas metálicas en Conchalí. Fabricante directo con instalación incluida. Frontis de casa, portón vehicular y puerta peatonal para el sector norte de Santiago.",
  keywords: [
    "reja metalica conchali",
    "rejas metalicas conchali",
    "reja para casa conchali santiago",
    "portones conchali",
    "cerco conchali santiago",
    "fabricante rejas conchali",
    "reja de fierro conchali",
    "rejas sector norte conchali",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-conchali" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasConchaliPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Conchalí</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Instalación incluida · Sector Norte RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas Metálicas en Conchalí — Santiago Norte
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en Conchalí y el sector norte de Santiago.
            Frontis de casa, portón vehicular y puerta peatonal — a medida, con pintura
            electrostática al horno. Instalación con garantía.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja metálica en Conchalí. Metros del frontis: [METROS] ml. Altura: [ALTURA] m. Con portón vehicular: [SÍ / NO]. Sector: [VILLA / CALLE].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Conchalí que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Conchalí","Av. Independencia Norte","Av. El Salto","Vivaceta Norte",
              "Lo Velásquez","Villa Huechuraba Sur","Av. Recoleta Norte",
              "Ferrocarril Norponiente","Las Palmeras Norte"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-independencia", label: "Rejas Independencia", desc: "Norte RM vecino" },
            { href: "/rejas-metalicas-huechuraba", label: "Rejas Huechuraba", desc: "Norte RM" },
            { href: "/rejas-metalicas-renca", label: "Rejas Renca", desc: "Sector norte industrial" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Guía completa del frontis" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Conchalí hoy</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros del frontis, altura y sector. Respondemos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito reja metálica en Conchalí. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
