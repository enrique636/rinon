import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Coyhaique — Galvanizados para Aysén",
  description: "Cercos perimetrales en Coyhaique, Aysén. Fabricante directo. Cercos galvanizados para el clima extremo de la Patagonia chilena. Lluvia, nieve, frío intenso y humedad permanente.",
  keywords: ["cercos perimetrales coyhaique","cerco perimetral coyhaique","reja metalica coyhaique","cerco galvanizado coyhaique","cerco perimetral aysen","fabricante cercos coyhaique","cerco resistente clima patagonico"],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-coyhaique" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesCoyhaiquePage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Coyhaique</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Galvanizado para clima extremo · Aysén · Patagonia</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Coyhaique — Clima Patagónico</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Coyhaique enfrenta nieve, heladas, lluvia horizontal y temperaturas bajo cero — el entorno más exigente de Chile para una estructura metálica. Fabricamos cercos perimetrales con galvanizado en caliente, el único acabado que soporta décadas en el clima patagónico.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral en Coyhaique. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / EMPRESA / PARCELA / ESTABLECIMIENTO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi cerco en Coyhaique</a>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-900">
          <strong>Clima patagónico extremo — galvanizado sin excepción:</strong> Las heladas hacen que el agua dentro de las grietas de la pintura expanda y quiebre la capa protectora. En Coyhaique, la pintura electrostática tiene una vida útil de 4–6 años. El galvanizado en caliente, en cambio, soporta el ciclo de congelamiento y deshielo sin deterioro y dura 20–30 años.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-punta-arenas", label: "Cercos Punta Arenas", desc: "Extremo sur de Chile" },
            { href: "/cercos-perimetrales-puerto-montt", label: "Cercos Puerto Montt", desc: "Norte de la Patagonia" },
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "El acabado para clima extremo" },
            { href: "/cierres-perimetrales", label: "Tipos de cierres", desc: "Guía completa" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Coyhaique</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y uso. Cotizamos con galvanizado para la Patagonia.</p>
          <a href={wa("Hola, necesito cerco perimetral en Coyhaique. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
