import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Vitacura — Rejas y Portones al Horno | Oriente RM",
  description: "Pintura electrostática al horno en Vitacura. Rejas, portones y muebles metálicos con acabado de calidad premium. Fabricante directo para el sector oriente de Santiago.",
  keywords: [
    "pintura electrostatica vitacura",
    "pintura al horno vitacura santiago",
    "pintura rejas vitacura",
    "pintura electrostatica oriente rm vitacura",
    "pintura metalica vitacura santiago",
    "pintura portones vitacura",
    "acabado metalico vitacura premium",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-vitacura" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaVitacuraPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Vitacura</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Pintura al horno · Sector oriente premium · Rejas y portones</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en Vitacura — Acabado al Horno</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            En Vitacura el acabado visual importa tanto como la durabilidad. La pintura
            electrostática al horno entrega una capa perfectamente uniforme — sin marcas de
            brocha, sin escurrimientos, sin variaciones de tono — en negro mate, blanco roto,
            gris antracita o cualquier color RAL. Atendemos particulares y empresas del
            sector oriente de la RM.
          </p>
          <a href={wa("Hola, necesito cotizar pintura electrostática en Vitacura. Qué necesito pintar: [REJAS / PORTÓN / MUEBLE / ESTRUCTURA]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar pintura electrostática</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lo que más se pinta en Vitacura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Rejas de frontis y jardín", d: "Renovación de acabado en rejas existentes o nuevo color para coordinar con el diseño de la fachada. Negro mate y gris antracita son los colores más solicitados en el sector." },
              { t: "Portones vehiculares corredizos", d: "Repintado o acabado de portón nuevo. La pintura electrostática es más uniforme y duradera que cualquier acabado en spray aplicado en obra." },
              { t: "Muebles y estanterías metálicas", d: "Closets metálicos, estanterías de garaje, sillas y mesas de metal — el proceso en planta garantiza un acabado de calidad que no se logra con pintura convencional." },
              { t: "Estructuras de jardín y pérgolas", d: "Estructuras metálicas de exterior expuestas al sol de la cordillera — la pintura al horno resiste el UV y los cambios de temperatura del sector oriente." },
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
            { href: "/pintura-electrostatica-las-condes", label: "Pintura Las Condes", desc: "Oriente RM vecino" },
            { href: "/pintura-electrostatica-lo-barnechea", label: "Pintura Lo Barnechea", desc: "Oriente RM" },
            { href: "/rejas-metalicas-vitacura", label: "Rejas Vitacura", desc: "Fabricación e instalación" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "Guía completa del proceso" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura en Vitacura</h2>
          <p className="text-gray-400 text-sm mb-5">Qué necesitas pintar, color y cantidad. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito pintura electrostática en Vitacura. Qué pintar: [DATO]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
