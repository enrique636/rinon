import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Lo Espejo — Fabricante con Instalación | Sur RM",
  description: "Rejas metálicas en Lo Espejo. Fabricante directo con instalación incluida. Frontis de casa, portón vehicular y reja de ventana en el sur de Santiago.",
  keywords: [
    "reja metalica lo espejo",
    "rejas metalicas lo espejo",
    "reja para casa lo espejo santiago",
    "fabricante rejas lo espejo",
    "rejas fierro lo espejo sur rm",
    "instalacion rejas lo espejo",
    "porton metalico lo espejo",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-lo-espejo" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasLoEspejoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Lo Espejo</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Sur RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Lo Espejo — Sur de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos rejas metálicas en Lo Espejo. Frontis de casa, portón vehicular y puerta peatonal en tubo de acero estructural con pintura electrostática al horno. Instalación con garantía.</p>
          <a href={wa("Hola, necesito cotizar una reja metálica en Lo Espejo. Metros del frontis: [METROS] ml. Altura: [ALTURA] m. Con portón vehicular: [SÍ / NO]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi reja</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores que atendemos en Lo Espejo</h2>
          <div className="flex flex-wrap gap-2">
            {["Lo Espejo","Av. Lo Ovalle","Villa La Reina Lo Espejo","Población Las Torres",
              "El Llano","Villaseca","Yungay Lo Espejo","Las Acacias","Padre Hurtado Norte"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-pedro-aguirre-cerda", label: "Rejas Pedro Aguirre Cerda", desc: "Sur RM vecino" },
            { href: "/rejas-metalicas-san-miguel", label: "Rejas San Miguel", desc: "Sur RM" },
            { href: "/pintura-electrostatica-lo-espejo", label: "Pintura electrostática", desc: "Acabado al horno en Lo Espejo" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Guía del frontis completo" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Lo Espejo</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y si lleva portón. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito reja metálica en Lo Espejo. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
