import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes al Por Mayor — Fabricante Directo Chile | Camarotes Chile",
  description:
    "Compra camarotes metálicos al por mayor directo del fabricante. Precio mayorista desde 5 unidades. Para empresas, hostales, campamentos, constructoras y distribuidores.",
  keywords: [
    "camarotes al por mayor Chile",
    "comprar camarotes por mayor",
    "camarotes precio mayorista Chile",
    "camarotes volumen Chile",
    "camarotes para hostal por mayor",
    "distribuidores camarotes Chile",
    "camarotes empresa precio mayorista",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-al-por-mayor" },
  openGraph: {
    title: "Camarotes al Por Mayor — Precio Mayorista Directo del Fabricante",
    description: "Camarotes metálicos al por mayor para empresas, hostales y campamentos. Precio de fábrica.",
    type: "website",
    locale: "es_CL",
  },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

export default function CamarotesAlPorMayorPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Cuál es el pedido mínimo para precio mayorista?", acceptedAnswer: { "@type": "Answer", text: "Cotizamos desde 5 unidades. El precio por unidad mejora en pedidos de 10, 20 y 50+ unidades. Para distribuidores con pedidos recurrentes, evaluamos condiciones especiales." } },
          { "@type": "Question", name: "¿Son fabricantes o distribuidores?", acceptedAnswer: { "@type": "Answer", text: "Somos fabricantes directos. Al comprar al por mayor con nosotros, estás comprando al origen — sin el margen de un distribuidor intermedio." } },
        ],
      }) }} />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/empresas" className="hover:text-gray-600">Empresas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Al por mayor</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            📦 Fabricante directo · Precio mayorista · Desde 5 unidades
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarotes al Por Mayor — Directo del Fabricante
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Somos fabricantes. Vendemos al por mayor a empresas, hostales, campamentos,
            constructoras y distribuidores. Sin intermediarios — el precio que recibes
            es precio de fábrica.
          </p>
          <a href={getWAUrl("Hola, quiero cotizar camarotes al por mayor. ¿Cuántas unidades necesito para precio mayorista?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar al por mayor
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Escala de precios por volumen</h2>
          <div className="overflow-hidden border border-gray-200 rounded-2xl">
            <table className="w-full text-sm">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Cantidad</th>
                  <th className="text-left px-5 py-3 font-semibold">Precio relativo</th>
                  <th className="text-left px-5 py-3 font-semibold">Para quién</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { rango: "1–4 unidades", precio: "Precio estándar", para: "Familias y particulares" },
                  { rango: "5–9 unidades", precio: "Descuento inicial", para: "Hostales pequeños, pensiones" },
                  { rango: "10–19 unidades", precio: "Precio mayorista", para: "Campamentos medianos, residencias" },
                  { rango: "20–49 unidades", precio: "Precio de fábrica mejorado", para: "Constructoras, empresas mineras" },
                  { rango: "50+ unidades", precio: "Precio especial de proyecto", para: "Campamentos grandes, distribuidores" },
                ].map(row => (
                  <tr key={row.rango} className="hover:bg-gray-50">
                    <td className="px-5 py-3 font-medium text-gray-900">{row.rango}</td>
                    <td className="px-5 py-3 text-green-600 font-medium">{row.precio}</td>
                    <td className="px-5 py-3 text-gray-500">{row.para}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">Los precios exactos se cotizann por WhatsApp según el modelo y las condiciones del pedido.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Quién compra al por mayor?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { emoji: "🏨", titulo: "Hostales y residencias", desc: "Equipar desde 4 habitaciones. Modelo estándar y cama alta." },
              { emoji: "⛏️", titulo: "Empresas mineras", desc: "Campamentos de 20-200+ camas. Despacho al norte.", href: "/camarotes-mineria" },
              { emoji: "🏗️", titulo: "Constructoras", desc: "Equipamiento para cuadrillas en múltiples obras.", href: "/camarotes-construccion" },
              { emoji: "🌾", titulo: "Empresas agrícolas", desc: "Alojamiento de temporeros por temporada.", href: "/camarotes-agricolas" },
              { emoji: "🌲", titulo: "Forestales", desc: "Campamentos en el sur de Chile.", href: "/camarotes-forestales" },
              { emoji: "🚚", titulo: "Distribuidores", desc: "Reventa en otras regiones. Precio especial para canal." },
            ].map(s => (
              <div key={s.titulo} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 transition-all">
                <span className="text-2xl">{s.emoji}</span>
                <h3 className="font-bold text-gray-900 mt-2 mb-1">{s.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{s.desc}</p>
                {s.href && <Link href={s.href} className="text-xs text-green-600 font-medium hover:underline">Ver más →</Link>}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuál es el pedido mínimo para precio mayorista?", a: "Cotizamos desde 5 unidades. El precio mejora en escalas de 10, 20 y 50+ unidades. No hay un mínimo absoluto — cuéntanos cuántas necesitas y te damos la mejor propuesta." },
              { q: "¿Pueden fabricar con especificaciones propias?", a: "Sí. Somos fabricantes, no revendedores. Para pedidos grandes podemos adaptar medidas, reforzar estructura o modificar acabados según tus necesidades." },
              { q: "¿Hacen despacho al por mayor a regiones?", a: "Sí. Para pedidos de volumen despachamos en camión de carga a cualquier región de Chile. El flete se cotiza según destino y volumen." },
              { q: "¿Aceptan distribuidores?", a: "Sí. Si quieres distribuir nuestros camarotes en tu región, contáctanos por WhatsApp. Evaluamos distribuidores en regiones no cubiertas actualmente." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántas unidades necesitas?</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">Cuéntanos la cantidad y el uso. Te enviamos cotización con precio mayorista en el día.</p>
          <a href={getWAUrl("Hola, quiero cotizar camarotes al por mayor. Necesito [CANTIDAD] unidades para [USO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar volumen por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
