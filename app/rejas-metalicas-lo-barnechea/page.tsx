import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Lo Barnechea — Fabricante con Instalación | Oriente RM",
  description: "Rejas metálicas en Lo Barnechea. Fabricante directo con instalación incluida. Rejas para casas y condominios del sector oriente de Santiago — desde diseño simple hasta forja ornamental.",
  keywords: [
    "reja metalica lo barnechea",
    "rejas metalicas lo barnechea",
    "reja para casa lo barnechea",
    "portones lo barnechea",
    "cerco lo barnechea santiago",
    "fabricante rejas lo barnechea",
    "reja decorativa lo barnechea",
    "rejas sector oriente lo barnechea",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-lo-barnechea" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasLoBarnecheaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Lo Barnechea</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Diseño y seguridad · Oriente RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas Metálicas en Lo Barnechea — Sector Oriente de Santiago
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Lo Barnechea combina casas de alta superficie con condominios cerrados y parcelas
            de precordillera — un sector donde el diseño de la reja importa tanto como la
            seguridad. Fabricamos rejas tubulares modernas, decorativas con forja y mixtas
            para el sector oriente. Instalación con garantía.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja metálica en Lo Barnechea. Metros del frontis: [METROS] ml. Altura: [ALTURA] m. Diseño: [TUBULAR SIMPLE / FORJA / MIXTO MODERNO]. Con portón vehicular: [SÍ / NO]. Sector: [DATO].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Lo Barnechea que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Lo Barnechea","La Dehesa","Av. Las Condes Oriente","El Arrayán","Valle Escondido",
              "Los Trapenses","San Enrique","El Rosario","Camino El Olivar"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-las-condes", label: "Rejas Las Condes", desc: "Sector oriente RM vecino" },
            { href: "/rejas-metalicas-vitacura", label: "Rejas Vitacura", desc: "Diseño en sector oriente" },
            { href: "/rejas-decorativas", label: "Rejas decorativas", desc: "Forja ornamental y diseño premium" },
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
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Lo Barnechea</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros, altura y estilo. Respondemos el mismo día con precio instalado.
          </p>
          <a
            href={wa("Hola, necesito reja metálica en Lo Barnechea. Metros: [METROS] ml. Altura: [ALTURA] m. Diseño: [DATO]. Con portón: [SÍ / NO].")}
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
