import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Venta al Por Mayor Camarotes Metálicos | Chile",
  description:
    "Venta al por mayor de camarotes metálicos en Chile. Para hostales, empresas, internados y proyectos. Fabricante directo con descuentos de volumen y despacho nacional.",
  keywords: [
    "venta mayor camarotes metalicos",
    "venta al por mayor camarotes chile",
    "camarotes por mayor chile",
    "camarotes venta masiva",
  ],
  alternates: { canonical: "https://rinon.cl/venta-mayor-camarotes-metalicos" },
};

export default function Page() {
  const wa = getWhatsAppUrl("Hola, necesito comprar camarotes metálicos al por mayor. ¿Qué descuentos manejan por volumen y despachan a todo Chile?");

  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Quiénes compran camarotes al por mayor?", acceptedAnswer: { "@type": "Answer", text: "Principalmente hostales, empresas con campamentos, internados y colegios, faenas mineras y forestales, y proyectos que necesitan equipar dormitorios completos. Todos acceden a precio de volumen." } },
          { "@type": "Question", name: "¿Despachan a todo Chile?", acceptedAnswer: { "@type": "Answer", text: "Sí. Para pedidos por volumen coordinamos despacho nacional en camión. El costo y el plazo dependen del destino y la cantidad; te lo confirmamos al cotizar." } },
          { "@type": "Question", name: "¿Entregan factura para la empresa?", acceptedAnswer: { "@type": "Answer", text: "Sí, emitimos factura electrónica para empresas e instituciones. Esto permite descontar el gasto e ingresar los camarotes al inventario de la organización." } },
        ],
      }) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-al-por-mayor" className="hover:text-gray-600">Al Por Mayor</Link><span>/</span>
          <span className="text-gray-700 font-medium">Venta al Por Mayor Metálicos</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
            🏗️ Venta por mayor · Despacho nacional
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Venta al Por Mayor de Camarotes Metálicos</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Fabricante directo de camarotes metálicos para compras de volumen. Para hostales,
            empresas, internados y proyectos que necesitan equipar dormitorios completos con
            descuentos por cantidad.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar por volumen</a>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Sectores que compran en volumen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Hostales y alojamientos", d: "Equipan habitaciones compartidas con camarotes resistentes al uso intensivo." },
              { t: "Empresas y campamentos", d: "Faenas mineras, forestales y de construcción que alojan trabajadores." },
              { t: "Internados y colegios", d: "Dormitorios institucionales que necesitan durabilidad y factura." },
              { t: "Proyectos y ONG", d: "Albergues, refugios y proyectos sociales que equipan muchas camas a la vez." },
            ].map((c) => (
              <div key={c.t} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{c.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Modelos más pedidos en volumen</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              { r: "Camarote metálico estándar", d: "El modelo más solicitado por su relación resistencia-precio." },
              { r: "Camarote de acero reforzado", d: "Para uso intensivo en campamentos y faenas." },
              { r: "Camarote con escritorio", d: "Cuando el proyecto necesita zona de estudio o trabajo." },
            ].map((x) => (
              <div key={x.r} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
                <span className="font-semibold text-gray-900 sm:w-64">{x.r}</span>
                <span className="text-gray-500 text-sm">{x.d}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Preguntas frecuentes</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { q: "¿Quiénes compran al por mayor?", a: "Hostales, empresas con campamentos, internados y colegios, faenas mineras y forestales, y proyectos que equipan dormitorios completos." },
              { q: "¿Despachan a todo Chile?", a: "Sí. Para pedidos por volumen coordinamos despacho nacional en camión. Costo y plazo dependen del destino y la cantidad." },
              { q: "¿Entregan factura?", a: "Sí, emitimos factura electrónica para empresas e instituciones." },
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
              { t: "Al por mayor", h: "/camarotes-al-por-mayor" },
              { t: "Precio mayorista", h: "/camarotes-precio-mayorista" },
              { t: "Fabricante Chile", h: "/fabricante-camarotes-chile" },
            ].map((l) => (
              <Link key={l.h} href={l.h} className="text-sm border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">{l.t}</Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Equipa tu proyecto al por mayor</h2>
          <p className="text-gray-300 text-sm mb-5">Cuéntanos la cantidad y el destino. Te enviamos precio de volumen y plazo de entrega.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
