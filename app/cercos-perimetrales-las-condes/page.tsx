import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Las Condes — Fabricante con Instalación | Oriente RM",
  description: "Cercos perimetrales en Las Condes. Fabricante directo. Cercos tubulares de diseño y alta gama para casas y condominios del sector oriente de Santiago.",
  keywords: ["cercos perimetrales las condes","cerco perimetral las condes santiago","cierre perimetral las condes rm","cerco metalico las condes","fabricante cercos las condes","instalacion cerco las condes"],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-las-condes" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesLasCondesPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos RM</Link><span>/</span>
          <span className="text-gray-700 font-medium">Las Condes</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Sector oriente premium</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Las Condes — Diseño y Seguridad</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Las Condes exige cercos que combinen seguridad efectiva con diseño cuidado. Fabricamos cercos tubulares con acabado en negro mate o gris antracita — pintura electrostática al horno, sin escurrimientos, capa uniforme. Para casas, condominios y edificios del sector oriente.</p>
          <a href={wa("Hola, necesito cotizar cerco perimetral en Las Condes. Metros: [METROS] ml. Altura: [ALTURA] m. Estilo: [TUBULAR LISO / DECORATIVO]. Con portón: [SÍ / NO]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco perimetral</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-vitacura", label: "Cercos Vitacura", desc: "Oriente premium" },
            { href: "/cercos-perimetrales-nunoa", label: "Cercos Ñuñoa", desc: "Sector oriente" },
            { href: "/rejas-metalicas-las-condes", label: "Rejas Las Condes", desc: "Frontis y ventanas" },
            { href: "/pintura-electrostatica-las-condes", label: "Pintura Las Condes", desc: "Acabado al horno" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Las Condes</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, estilo y sector. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Las Condes. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
