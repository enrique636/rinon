import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica San Miguel — Fabricante con Instalación | Pedro Aguirre Cerda",
  description: "Rejas metálicas en San Miguel y Pedro Aguirre Cerda. Fabricante directo con instalación incluida. Frontis de casa, portón vehicular y puerta peatonal. Pintura electrostática al horno.",
  keywords: [
    "reja metalica san miguel",
    "rejas metalicas san miguel",
    "reja para casa san miguel santiago",
    "portones san miguel",
    "reja metalica pedro aguirre cerda",
    "cerco san miguel santiago",
    "fabricante rejas san miguel",
    "reja tubular san miguel",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-san-miguel" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasSanMiguelPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">San Miguel</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Instalación incluida · Sector Sur RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas Metálicas en San Miguel y Pedro Aguirre Cerda
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en San Miguel, Pedro Aguirre Cerda y
            el sector sur de Santiago. Frontis de casa, portón vehicular y puerta peatonal
            — a medida, con pintura electrostática al horno y garantía de instalación.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja metálica en San Miguel / Pedro Aguirre Cerda. Metros del frontis: [METROS] ml. Altura: [ALTURA] m. Con portón vehicular: [SÍ / NO]. Sector: [VILLA / CALLE].")}
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
              "San Miguel","Pedro Aguirre Cerda","Av. Lo Ovalle","Av. Santa Rosa",
              "Lo Sierra","Los Castaños","Villa San Miguel","La Legua",
              "Lo Espejo","Club Hípico Sur",
            ].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de reja más solicitados en San Miguel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Frontis residencial con portón",
                d: "El conjunto más solicitado: reja perimetral del frontis + portón vehicular + puerta peatonal. Todo del mismo diseño y acabado.",
              },
              {
                t: "Reja con diseño clásico",
                d: "Con rombos o elementos decorativos. San Miguel tiene muchas casas de los años 60–80 con arquitectura clásica — las rejas van en el mismo estilo.",
              },
              {
                t: "Portón corredizo para acceso estrecho",
                d: "Muchas casas del sector tienen accesos con poca vereda. El portón corredizo es la solución cuando no hay espacio para que abra hacia adentro.",
              },
              {
                t: "Reja para segunda propiedad",
                d: "Casas con departamento en el fondo o taller. Separamos el acceso principal del secundario con rejas y puertas peatonales independientes.",
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
            { href: "/rejas-metalicas-san-ramon", label: "Rejas San Ramón", desc: "Sector sur" },
            { href: "/portones-corredizos", label: "Portones corredizos", desc: "Para accesos sin espacio de barrido" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Guía completa del frontis" },
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
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en San Miguel hoy</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros del frontis, altura y sector. Respondemos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito reja metálica en San Miguel / Pedro Aguirre Cerda. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO].")}
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
