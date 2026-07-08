import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica San Ramón — Fabricante con Instalación | Sur RM",
  description: "Rejas metálicas en San Ramón, El Bosque y el sur de Santiago. Fabricante directo con instalación incluida. Frontis, portón vehicular y puerta peatonal a medida con pintura electrostática.",
  keywords: [
    "reja metalica san ramon",
    "rejas metalicas san ramon",
    "reja para casa san ramon",
    "portones san ramon santiago",
    "reja metalica el bosque",
    "cerco san ramon",
    "fabricante rejas sur santiago",
    "reja de fierro san ramon",
    "rejas sector sur santiago",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-san-ramon" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasSanRamonPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">San Ramón</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Instalación incluida · Sector Sur RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas Metálicas en San Ramón y El Bosque
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en San Ramón, El Bosque y el sector sur
            de Santiago. Frontis de casa, portón vehicular y puerta peatonal — a medida,
            con pintura electrostática al horno y garantía de instalación.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja metálica en San Ramón / El Bosque. Metros del frontis: [METROS] ml. Altura: [ALTURA] m. Con portón vehicular: [SÍ / NO]. Sector: [VILLA / CALLE].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "San Ramón","El Bosque","Av. José Joaquín Pérez","Villa Las Estrellas Sur",
              "Santa Rosa Sur","La Cañadilla","Los Quillayes","Villa Portales Sur",
              "Lo Sierra","Población La Palmilla",
            ].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lo que incluye un frontis completo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Reja perimetral del frontis",
                d: "Los metros lineales frente a la calle. Tubo cuadrado de 1\", barrotes verticales, acabado negro electrostático al horno.",
              },
              {
                t: "Portón vehicular",
                d: "Batiente doble o corredizo según el ancho disponible. El portón batiente es más económico; el corredizo requiere menos espacio de apertura.",
              },
              {
                t: "Puerta peatonal",
                d: "Mismo diseño que la reja. Con cerradura mariposa (apertura interior sin llave) y bisagras regulables.",
              },
              {
                t: "Pintura al horno",
                d: "Acabado electrostático al horno, negro mate estándar. Sin tiempos de secado — puedes cerrar el portón el mismo día de la instalación.",
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
            { href: "/rejas-metalicas-la-florida", label: "Rejas La Florida", desc: "Sector sur-oriente" },
            { href: "/rejas-metalicas-cerrillos", label: "Rejas Cerrillos", desc: "Zona sur-poniente" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Guía completa del frontis" },
            { href: "/reja-metalica-santiago", label: "Todas las comunas RM", desc: "Cobertura completa" },
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
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en San Ramón hoy</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros del frontis, altura y sector. Respondemos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito reja metálica en San Ramón / El Bosque. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO].")}
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
