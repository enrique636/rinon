import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Metálicos Precio de Fábrica | Chile",
  description:
    "Camarotes metálicos a precio de fábrica en Chile. Sin margen de distribuidor — el precio que pagas es el precio real de producción. Todos los modelos disponibles.",
  keywords: [
    "camarotes metalicos precio fabrica",
    "camarotes precio fabrica chile",
    "camarotes sin intermediarios precio",
    "camas metalicas precio directo",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-metalicos-precio-fabrica" },
};

export default function Page() {
  const wa = getWhatsAppUrl("Hola, quiero comprar camarotes metálicos a precio de fábrica. ¿Me pueden enviar los modelos y precios directos?");

  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Por qué el precio de fábrica es más bajo?", acceptedAnswer: { "@type": "Answer", text: "Porque no pasa por distribuidores ni tiendas que agregan su margen. Al comprarnos directo, pagas el precio real de producción más el despacho, sin sobreprecios intermedios." } },
          { "@type": "Question", name: "¿Qué incluye el precio de fábrica?", acceptedAnswer: { "@type": "Answer", text: "Incluye el camarote metálico terminado con su acabado en pintura electrostática. El despacho se cotiza aparte según la zona de entrega." } },
          { "@type": "Question", name: "¿El precio de fábrica aplica a todos los modelos?", acceptedAnswer: { "@type": "Answer", text: "Sí. Todos nuestros modelos se venden a precio de fábrica porque somos el fabricante. Escríbenos qué modelo buscas y te enviamos el precio directo." } },
        ],
      }) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Precio de Fábrica</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
            🏷️ Precio de fábrica · Sin margen de distribuidor
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes Metálicos a Precio de Fábrica</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            El precio que pagas es el precio real de producción. Sin tiendas, sin distribuidores, sin
            margen intermedio. Compras directo al taller que fabrica cada camarote.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Ver precios de fábrica</a>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Por qué el precio es más bajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cero intermediarios", d: "No pasa por tienda ni distribuidor. Eliminamos cada margen que encarece el producto final." },
              { t: "Precio de producción", d: "El precio refleja el costo real del acero, la mano de obra y el acabado, más una utilidad justa." },
              { t: "Acabado incluido", d: "El precio ya considera la pintura electrostática al horno que protege la estructura." },
              { t: "Todos los modelos", d: "Cada modelo del catálogo se vende a precio directo de fábrica, no solo algunos." },
            ].map((c) => (
              <div key={c.t} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{c.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Preguntas frecuentes</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { q: "¿Por qué el precio de fábrica es más bajo?", a: "Porque no pasa por distribuidores ni tiendas que agregan su margen. Al comprarnos directo, pagas el precio real de producción más el despacho." },
              { q: "¿Qué incluye el precio de fábrica?", a: "Incluye el camarote metálico terminado con su acabado en pintura electrostática. El despacho se cotiza aparte según la zona." },
              { q: "¿Aplica a todos los modelos?", a: "Sí. Todos nuestros modelos se venden a precio de fábrica porque somos el fabricante." },
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
              { t: "Camarotes metálicos", h: "/camarotes-metalicos" },
              { t: "Camarotes", h: "/camarotes" },
            ].map((l) => (
              <Link key={l.h} href={l.h} className="text-sm border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">{l.t}</Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Pide tu precio de fábrica</h2>
          <p className="text-gray-300 text-sm mb-5">Dinos qué modelo buscas y te enviamos el precio directo, sin margen de distribuidor.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
