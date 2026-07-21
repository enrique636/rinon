import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Fabricante en Santiago | Taller Propio",
  description:
    "Compra camarotes directamente al fabricante en Santiago. Taller propio, sin intermediarios. Despacho a toda la Región Metropolitana. Cotiza por WhatsApp hoy.",
  keywords: [
    "camarotes fabricante santiago",
    "fabrica camarotes santiago chile",
    "comprar camarotes fabricante santiago",
    "taller camarotes rm",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-fabricante-santiago" },
};

export default function Page() {
  const wa = getWhatsAppUrl("Hola, quiero comprar camarotes directo al fabricante en Santiago. ¿Qué modelos tienen disponibles y cómo es el despacho en la RM?");

  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Están ubicados en Santiago?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos en nuestro propio taller en Santiago y despachamos a toda la Región Metropolitana. Al ser fabricante directo, no hay intermediarios ni sobreprecio de distribuidor." } },
          { "@type": "Question", name: "¿Cuánto demora el despacho en la RM?", acceptedAnswer: { "@type": "Answer", text: "Para modelos en stock coordinamos entrega en pocos días dentro de la Región Metropolitana. Si el modelo es a pedido o a medida, te confirmamos la fecha al momento de cotizar." } },
          { "@type": "Question", name: "¿Puedo comprar directo sin intermediarios?", acceptedAnswer: { "@type": "Answer", text: "Sí, esa es justamente la ventaja. Compras directo al taller que fabrica los camarotes, así el precio es más bajo y coordinas todo directamente con quien los produce." } },
        ],
      }) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/fabricante-camarotes-chile" className="hover:text-gray-600">Fabricante</Link><span>/</span>
          <span className="text-gray-700 font-medium">Santiago</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
            🏭 Taller propio en Santiago · Sin intermediarios
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes Fabricante en Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Compra tus camarotes directamente al fabricante. Taller propio en Santiago, despacho a
            toda la Región Metropolitana y el precio real de fábrica, sin margen de distribuidor.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar ahora</a>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Taller propio", d: "Fabricamos en Santiago. No revendemos: producimos cada camarote nosotros mismos." },
              { t: "Despacho RM", d: "Coordinamos entrega en toda la Región Metropolitana, según modelo y disponibilidad." },
              { t: "Precio de fábrica", d: "Al ser fabricante, el precio es más bajo que comprar a un distribuidor o tienda." },
              { t: "Compra directa", d: "Coordinas todo con quien fabrica: modelo, medida y entrega, sin intermediarios." },
            ].map((c) => (
              <div key={c.t} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{c.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Cómo comprar directo</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              { n: "1", d: "Escríbenos por WhatsApp con el modelo y la cantidad que necesitas." },
              { n: "2", d: "Te confirmamos precio de fábrica, disponibilidad y fecha de entrega en la RM." },
              { n: "3", d: "Coordinamos el despacho a tu dirección en Santiago." },
            ].map((s) => (
              <div key={s.n} className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">{s.n}</span>
                <span className="text-gray-500 text-sm">{s.d}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Preguntas frecuentes</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { q: "¿Están ubicados en Santiago?", a: "Sí. Fabricamos en nuestro propio taller en Santiago y despachamos a toda la Región Metropolitana, sin intermediarios ni sobreprecio de distribuidor." },
              { q: "¿Cuánto demora el despacho en la RM?", a: "Para modelos en stock coordinamos entrega en pocos días dentro de la RM. Si el modelo es a pedido o a medida, te confirmamos la fecha al cotizar." },
              { q: "¿Puedo comprar directo sin intermediarios?", a: "Sí. Compras directo al taller que fabrica los camarotes, así el precio es más bajo y coordinas todo con quien los produce." },
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
              { t: "Fabricante Chile", h: "/fabricante-camarotes-chile" },
              { t: "Camarotes", h: "/camarotes" },
              { t: "Venta en Santiago", h: "/venta-camarotes-santiago" },
              { t: "Camarotes metálicos", h: "/camarotes-metalicos" },
            ].map((l) => (
              <Link key={l.h} href={l.h} className="text-sm border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">{l.t}</Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Compra al fabricante en Santiago</h2>
          <p className="text-gray-300 text-sm mb-5">Cuéntanos qué modelo buscas y para cuándo lo necesitas. Te damos precio de fábrica.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
