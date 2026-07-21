import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática al Horno | Santiago Chile",
  description: "Servicio de pintura electrostática al horno en Santiago. Para rejas, portones, estructuras y muebles metálicos. Acabado duro, uniforme y duradero. Cotiza por WhatsApp.",
  keywords: [
    "pintura electrostatica santiago",
    "pintura electrostática al horno santiago",
    "pintura en polvo santiago",
    "powder coating santiago",
    "pintura electrostatica para metales",
    "servicio pintura electrostatica santiago",
    "pintura electrostatica industrial santiago",
    "pintura electrostatica precio chile",
    "pintura electrostatica rejas",
    "pintura electrostatica portones",
    "pintura en polvo region metropolitana",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es la pintura electrostática al horno?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La pintura electrostática (también llamada powder coating o pintura en polvo) es un proceso donde se aplica pigmento en polvo sobre el metal mediante carga electrostática, y luego se cura al horno a 180–220°C. El resultado es una capa dura, uniforme y mucho más resistente que la pintura líquida convencional.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué piezas metálicas pueden pintarse con pintura electrostática?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rejas metálicas, portones, estructuras de acero, muebles de metal, estanterías, guardabarros, soportes industriales, marcos de ventana de aluminio y cualquier pieza metálica que entre al horno. Las piezas deben ser de metal conductor.",
                },
              },
              {
                "@type": "Question",
                name: "¿Atienden empresas de toda la Región Metropolitana?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Atendemos empresas de todas las comunas de la Región Metropolitana de Santiago. Para grandes volúmenes coordinamos retiro y entrega. Para piezas pequeñas se pueden traer directamente al taller.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto dura la pintura electrostática comparada con la pintura convencional?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La pintura electrostática al horno dura entre 5 y 15 años dependiendo de la exposición. La pintura líquida convencional dura 2–5 años con mantenimiento. La diferencia principal es la adhesión y la resistencia al impacto y a los rayos UV.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Pintura Electrostática</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Servicio · Región Metropolitana · Empresas y particulares
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pintura Electrostática en Santiago — Al Horno para Metales
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Servicio de pintura electrostática al horno para piezas y estructuras metálicas en la
            Región Metropolitana. Rejas, portones, muebles de metal, estanterías y estructuras.
            Acabado duro, uniforme y duradero — superior a cualquier pintura convencional.
          </p>
          <a
            href={wa(
              "Hola, necesito cotizar pintura electrostática. Las piezas son: [DESCRIPCIÓN]. Cantidad aproximada: [N] piezas. Estoy en [COMUNA]."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">El proceso paso a paso</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { n: "1", t: "Preparación", d: "Limpieza y granallado o arenado de la pieza para eliminar óxido, grasa y pintura anterior." },
              { n: "2", t: "Aplicación", d: "El polvo se aplica con pistola electrostática. La carga atrae el polvo a la superficie uniformemente." },
              { n: "3", t: "Curado al horno", d: "Las piezas entran al horno a 180–220°C. El polvo funde y forma una capa sólida y homogénea." },
              { n: "4", t: "Entrega", d: "Las piezas salen listas — sin tiempos de secado adicionales, duras desde el primer minuto." },
            ].map((step) => (
              <div key={step.n} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl font-bold text-gray-200 block mb-1">{step.n}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{step.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Pintura electrostática vs pintura convencional
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 text-gray-500 font-medium text-xs">Factor</th>
                  <th className="text-center py-3 px-4 text-gray-900 font-semibold text-xs">Electrostática</th>
                  <th className="text-center py-3 px-4 text-gray-500 font-medium text-xs">Convencional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Adhesión al metal", "Excelente (fusión molecular)", "Buena (mecánica)"],
                  ["Uniformidad del acabado", "Alta — sin goteos ni pinceladas", "Variable"],
                  ["Resistencia al impacto", "Alta", "Media"],
                  ["Tiempo hasta uso", "Listo al salir del horno", "24–72 h secado"],
                  ["Colores disponibles", "Catálogo RAL completo", "Cualquier mezcla"],
                  ["Duración estimada", "5–15 años", "2–5 años"],
                ].map(([f, e, c]) => (
                  <tr key={f}>
                    <td className="py-3 pr-4 text-gray-600 text-xs font-medium">{f}</td>
                    <td className="py-3 px-4 text-center text-gray-800 text-xs font-medium">{e}</td>
                    <td className="py-3 px-4 text-center text-gray-400 text-xs">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Piezas que pintamos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "Rejas metálicas","Portones corredizos","Portones batientes","Estructuras de acero",
              "Muebles metálicos","Estanterías industriales","Marcos y perfiles","Soportes y bases",
              "Piezas de maquinaria","Escaleras metálicas","Mezzanines","Camarotes metálicos",
            ].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Comunas de la RM que atendemos</h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {[
              { label: "San Bernardo", href: "/pintura-electrostatica-san-bernardo" },
              { label: "Maipú", href: "/pintura-electrostatica-maipu" },
              { label: "Pudahuel", href: "/pintura-electrostatica-pudahuel" },
              { label: "Quilicura", href: "/pintura-electrostatica-quilicura" },
              { label: "Cerrillos", href: "/pintura-electrostatica-cerrillos" },
              { label: "Lo Espejo", href: null },
              { label: "El Bosque", href: null },
              { label: "La Pintana", href: null },
              { label: "San Joaquín", href: null },
              { label: "Estación Central", href: null },
              { label: "Santiago Centro", href: null },
              { label: "Macul", href: null },
            ].map((c) =>
              c.href ? (
                <Link key={c.label} href={c.href}
                  className="text-xs bg-white border border-gray-300 hover:border-gray-500 rounded-full px-3 py-1 text-gray-700 transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span key={c.label} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-500">
                  {c.label}
                </span>
              )
            )}
          </div>
          <p className="text-xs text-gray-400">¿No ves tu comuna? Escríbenos — atendemos toda la RM.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "Alternativa al pintado para zonas húmedas" },
            { href: "/estructuras-metalicas-a-pedido", label: "Estructuras a pedido", desc: "Fabricación + pintura en un solo servicio" },
            { href: "/rejas-metalicas", label: "Rejas metálicas", desc: "Con pintura electrostática incluida" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Fabricados y pintados al horno" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu pintura electrostática</h2>
          <p className="text-gray-400 text-sm mb-5">
            Descripción de las piezas, cantidad y comuna. Coordinamos retiro y entrega en la RM.
          </p>
          <a
            href={wa(
              "Hola, necesito cotizar pintura electrostática al horno. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Estoy en [COMUNA, RM]."
            )}
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
