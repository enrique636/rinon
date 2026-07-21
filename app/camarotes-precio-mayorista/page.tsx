import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Metálicos Precio Mayorista | Chile",
  description:
    "Camarotes metálicos a precio mayorista en Chile. Descuentos por volumen para hostales, internados, campamentos y empresas. Fabricante directo. Cotiza tu pedido.",
  keywords: [
    "camarotes precio mayorista",
    "camarotes metalicos mayorista chile",
    "precio mayorista camarotes",
    "camarotes volumen chile",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-precio-mayorista" },
};

export default function Page() {
  const wa = getWhatsAppUrl("Hola, necesito camarotes a precio mayorista. ¿Cuál es el descuento por volumen y el tiempo de producción?");

  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Cuántas unidades se consideran mayorista?", acceptedAnswer: { "@type": "Answer", text: "El precio mayorista aplica desde 5 unidades. A partir de esa cantidad accedes a descuentos que no están disponibles en la compra unitaria, porque optimizamos la producción y el despacho por lote." } },
          { "@type": "Question", name: "¿Hay descuentos escalonados por cantidad?", acceptedAnswer: { "@type": "Answer", text: "Sí. Trabajamos por rangos: 5-19 unidades acceden a un descuento por volumen y 20 o más unidades entran a cotización especial con el mejor precio. Mientras mayor sea el pedido, mejor el precio por unidad." } },
          { "@type": "Question", name: "¿Cuánto demora la producción de pedidos grandes?", acceptedAnswer: { "@type": "Answer", text: "Los pedidos por volumen se coordinan según la cantidad. Al ser fabricante directo, planificamos la producción del lote completo y entregamos una fecha estimada al confirmar el pedido. Cuéntanos cuántas unidades necesitas por WhatsApp." } },
        ],
      }) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-al-por-mayor" className="hover:text-gray-600">Al Por Mayor</Link><span>/</span>
          <span className="text-gray-700 font-medium">Precio Mayorista</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
            📦 Precio mayorista · Desde 5 unidades
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes Metálicos a Precio Mayorista</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Precios de fábrica para volumen, sin intermediarios. Somos el fabricante: al comprar
            desde 5 unidades accedes a descuentos que un distribuidor no puede igualar.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar por volumen</a>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Desde 5 unidades", d: "El precio mayorista arranca a partir de 5 camarotes en un mismo pedido." },
              { t: "Descuento por volumen", d: "Mientras mayor la cantidad, mejor el precio por unidad. Rangos escalonados." },
              { t: "Factura electrónica", d: "Emitimos factura para empresas, hostales, internados e instituciones." },
              { t: "Despacho en camión", d: "Coordinamos el transporte del lote completo a la dirección del proyecto." },
            ].map((c) => (
              <div key={c.t} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{c.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Rangos de compra</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              { r: "1 a 4 unidades", d: "Precio normal de catálogo, sin descuento por volumen." },
              { r: "5 a 19 unidades", d: "Consulta descuento por volumen. Precio mayorista activado." },
              { r: "20 o más unidades", d: "Cotización especial con el mejor precio por unidad." },
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
              { q: "¿Cuántas unidades se consideran mayorista?", a: "El precio mayorista aplica desde 5 unidades. A partir de esa cantidad accedes a descuentos que no están disponibles en la compra unitaria." },
              { q: "¿Hay descuentos escalonados por cantidad?", a: "Sí. Trabajamos por rangos: 5-19 unidades acceden a descuento por volumen y 20 o más entran a cotización especial con el mejor precio." },
              { q: "¿Cuánto demora la producción de pedidos grandes?", a: "Se coordina según la cantidad. Al ser fabricante directo, planificamos la producción del lote y entregamos una fecha estimada al confirmar el pedido." },
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
              { t: "Fabricante Chile", h: "/fabricante-camarotes-chile" },
              { t: "Camarotes metálicos", h: "/camarotes-metalicos" },
              { t: "Camarotes para hostal", h: "/camarotes-hostal" },
              { t: "Camarotes minería", h: "/camarotes-mineria" },
            ].map((l) => (
              <Link key={l.h} href={l.h} className="text-sm border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">{l.t}</Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántas unidades necesitas?</h2>
          <p className="text-gray-300 text-sm mb-5">Cuéntanos la cantidad y el modelo. Te enviamos el precio mayorista y el plazo de entrega.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
