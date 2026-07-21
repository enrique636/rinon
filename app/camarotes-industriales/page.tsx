import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Industriales Chile | Uso Intensivo",
  description:
    "Camarotes industriales de acero para uso intensivo en Chile. Campamentos mineros, faenas forestales, construcción. Resistencia extra, estructuras reforzadas.",
  keywords: [
    "camarotes industriales chile",
    "camarotes uso intensivo",
    "camarotes metalicos industriales",
    "camarotes campamentos industriales",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-industriales" },
};

export default function Page() {
  const wa = getWhatsAppUrl("Hola, necesito camarotes industriales para uso intensivo. ¿Qué resistencia manejan y despachan a faenas?");

  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Qué diferencia a un camarote industrial de uno residencial?", acceptedAnswer: { "@type": "Answer", text: "El camarote industrial usa acero de mayor calibre, soldaduras reforzadas y estructura pensada para uso intensivo de muchas personas rotando en el tiempo. Está hecho para durar años en campamentos y faenas, no para el uso ocasional de un dormitorio familiar." } },
          { "@type": "Question", name: "¿Para qué sectores sirven?", acceptedAnswer: { "@type": "Answer", text: "Campamentos mineros, faenas forestales, obras de construcción, agrícolas y cualquier operación que aloje trabajadores en turnos. Son la base del mobiliario de dormitorio en operaciones exigentes." } },
          { "@type": "Question", name: "¿Se pueden comprar por volumen?", acceptedAnswer: { "@type": "Answer", text: "Sí. La mayoría de los pedidos industriales son por cantidad, así que aplican descuentos por volumen y despacho coordinado a la faena. Cuéntanos cuántas unidades necesitas." } },
        ],
      }) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link><span>/</span>
          <span className="text-gray-700 font-medium">Industriales</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
            🏗️ Uso intensivo · Estructura reforzada
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes Industriales en Chile</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Camarotes de acero fabricados para uso intensivo. Mayor calibre, soldaduras reforzadas y
            estructura pensada para campamentos mineros, faenas forestales y obras donde el mobiliario
            trabaja todos los días.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para faena</a>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Especificaciones de uso industrial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Acero de mayor calibre", d: "Estructura más gruesa que la residencial para resistir el uso continuo." },
              { t: "Soldaduras reforzadas", d: "Uniones diseñadas para aguantar años sin fatiga ni juego en la estructura." },
              { t: "Pintura electrostática", d: "Acabado al horno que protege contra el desgaste y facilita la limpieza." },
              { t: "Estibable", d: "Diseño pensado para el transporte por volumen y el montaje en dormitorios colectivos." },
            ].map((c) => (
              <div key={c.t} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{c.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Sectores que los usan</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              { r: "Minería", d: "Campamentos y turnos de trabajadores en operaciones extractivas." },
              { r: "Forestal y agrícola", d: "Faenas de temporada con alojamiento de cuadrillas." },
              { r: "Construcción", d: "Obras con instalación de faenas y dormitorios en terreno." },
            ].map((x) => (
              <div key={x.r} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
                <span className="font-semibold text-gray-900 sm:w-48">{x.r}</span>
                <span className="text-gray-500 text-sm">{x.d}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Preguntas frecuentes</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { q: "¿Qué diferencia a un camarote industrial de uno residencial?", a: "Usa acero de mayor calibre, soldaduras reforzadas y estructura para uso intensivo de muchas personas. Está hecho para durar años en campamentos y faenas." },
              { q: "¿Para qué sectores sirven?", a: "Campamentos mineros, faenas forestales, obras de construcción y agrícolas: cualquier operación que aloje trabajadores en turnos." },
              { q: "¿Se pueden comprar por volumen?", a: "Sí. La mayoría de los pedidos industriales son por cantidad, con descuentos por volumen y despacho coordinado a la faena." },
            ].map((f) => (
              <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explora más</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { t: "Camarotes minería", h: "/camarotes-mineria" },
              { t: "Camarotes faenas", h: "/camarotes-faenas" },
              { t: "Camarotes construcción", h: "/camarotes-construccion" },
              { t: "Al por mayor", h: "/camarotes-al-por-mayor" },
              { t: "Fabricante Chile", h: "/fabricante-camarotes-chile" },
            ].map((l) => (
              <Link key={l.h} href={l.h} className="text-sm border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">{l.t}</Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Equipa tu faena</h2>
          <p className="text-gray-300 text-sm mb-5">Cuéntanos la cantidad y la ubicación del campamento. Te enviamos cotización de volumen.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
