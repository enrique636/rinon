import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Independencia — Fabricante con Instalación | Norte RM",
  description: "Rejas metálicas en Independencia y el sector norte de Santiago. Fabricante directo con instalación incluida. Frontis, portón vehicular y rejas para ventana y puerta.",
  keywords: [
    "reja metalica independencia",
    "rejas metalicas independencia",
    "reja para casa independencia santiago",
    "portones independencia",
    "cerco independencia santiago",
    "fabricante rejas independencia",
    "reja de fierro independencia",
    "rejas sector norte independencia",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-independencia" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasIndependenciaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Independencia</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Instalación incluida · Sector Norte RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas Metálicas en Independencia — Santiago Norte
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en Independencia y el sector norte
            de Santiago. Frontis de casa, portón vehicular, puerta peatonal y rejas para
            ventana — a medida, con pintura electrostática al horno.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja metálica en Independencia. Uso: [FRONTIS / VENTANA / PUERTA]. Metros o medidas: [DATO]. Estoy en [SECTOR].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Independencia que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Independencia","Av. Independencia","Av. El Salto","Vivaceta",
              "Domingo Santa María","La Pincoya Sur","Recoleta","Bellavista Norte",
              "Av. Dorsal"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-huechuraba", label: "Rejas Huechuraba", desc: "Norte RM vecino" },
            { href: "/rejas-metalicas-quilicura", label: "Rejas Quilicura", desc: "Zona norte industrial" },
            { href: "/rejas-para-ventanas", label: "Rejas para ventanas", desc: "Seguridad en ventanas" },
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
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Independencia hoy</h2>
          <p className="text-gray-400 text-sm mb-5">
            Uso, metros y sector. Respondemos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito reja metálica en Independencia. Uso: [FRONTIS / VENTANA / PUERTA]. Dato: [METROS / MEDIDAS]. Sector: [DATO].")}
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
