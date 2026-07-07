import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Económico — Fabricante en Chile | Buenos Pal Catre",
  description: "Camarote con escritorio económico fabricado en Chile. Cama arriba, escritorio abajo. Sin intermediarios. Cotiza por WhatsApp — entrega en Santiago y despacho a todo Chile.",
  keywords: [
    "camarote con escritorio economico",
    "cama alta con escritorio barato",
    "camarote escritorio precio chile",
    "camarote con escritorio chile precio",
    "cama loft economica",
    "camarote escritorio sin intermediarios",
  ],
  alternates: { canonical: "https://dumar.cl/camarote-con-escritorio-economico" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamaroteEconomicoPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Camarote con Escritorio Económico",
            description:
              "Camarote con escritorio en versión económica. Fabricado en Chile por Buenos Pal Catre. Cama arriba, escritorio abajo, estructura de acero.",
            brand: { "@type": "Brand", name: "Buenos Pal Catre" },
            manufacturer: {
              "@type": "Organization",
              name: "Buenos Pal Catre",
              address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "CLP",
              seller: { "@type": "Organization", name: "Buenos Pal Catre" },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto cuesta el camarote con escritorio económico?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio varía según las medidas y los accesorios opcionales. Cotizamos por WhatsApp con las medidas de tu pieza — te respondemos el mismo día.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué diferencia tiene con el modelo estándar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El modelo económico tiene el escritorio esencial sin estantes adicionales ni accesorios premium. La misma estructura de acero fabricada en nuestro taller — solo el acabado y los extras son más simples.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se puede agregar estantes después?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Podemos cotizar estantes adicionales al momento de hacer el pedido. Una vez fabricado el camarote es más difícil agregarlos, así que es mejor definirlo antes.",
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
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Camarote con Escritorio</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Económico</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 text-sm text-emerald-700 font-medium mb-5">
            💰 La opción más accesible · Fabricante directo · Sin intermediarios
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarote con Escritorio Económico
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            La misma funcionalidad que el modelo estándar — cama arriba, escritorio abajo — en
            su versión más accesible. Diseño simple, sin estantes adicionales ni accesorios
            que suben el precio sin agregar valor real para quien solo necesita un buen escritorio
            bajo la cama.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Fabricamos en Santiago. Vendemos directo — sin tienda, sin intermediarios, sin margen
            adicional. El precio que pagas es el precio de fábrica.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={wa(
                "Hola, me interesa el camarote con escritorio económico. ¿Pueden darme el precio y las medidas disponibles?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
            >
              Cotizar por WhatsApp
            </a>
            <Link
              href="/camarote-con-escritorio"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-base hover:border-gray-400 transition-colors"
            >
              Ver modelo estándar
            </Link>
          </div>
        </div>

        {/* Qué incluye */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Qué incluye el modelo económico</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "🛏️", t: "Cama de 1 plaza arriba", d: "Con baranda de seguridad incluida y escalera lateral. La misma estructura que el modelo estándar." },
              { icon: "📐", t: "Escritorio funcional abajo", d: "Superficie de trabajo bajo la cama. Ancho suficiente para laptop, libros o monitor. Sin estantes adicionales." },
              { icon: "🔩", t: "Estructura de acero", d: "Fabricada en nuestro taller en Santiago. Mismo acero que los demás modelos — la diferencia está en el diseño, no en la resistencia." },
              { icon: "🎨", t: "Pintura al horno", d: "Acabado pintado. Si quieres pintura electrostática premium, puedes pedirla como upgrade al cotizar." },
            ].map((i) => (
              <div key={i.t} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">{i.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{i.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diferencias con otros modelos */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Cuándo conviene el modelo económico?</h2>
          <div className="space-y-3">
            {[
              { q: "Si solo necesitas el escritorio básico", a: "No tiene sentido pagar por estantes si tienes otro lugar para los libros. El modelo económico te da exactamente lo que necesitas sin el costo de lo que no." },
              { q: "Si el presupuesto es el factor principal", a: "Para estudiantes universitarios o piezas de arrendado donde la funcionalidad importa más que el acabado." },
              { q: "Si vas a pintar o decorar a tu gusto", a: "Si de todas formas vas a intervenir el camarote con decoración propia, el modelo económico es el punto de partida correcto." },
            ].map((i) => (
              <div key={i.q} className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{i.q}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{i.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparativa */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Comparativa de modelos con escritorio</h2>
          <div className="overflow-hidden border border-gray-200 rounded-2xl">
            <table className="w-full text-sm">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Característica</th>
                  <th className="text-center px-4 py-3 font-semibold">Económico</th>
                  <th className="text-center px-4 py-3 font-semibold">Estándar</th>
                  <th className="text-center px-4 py-3 font-semibold">Full</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { f: "Cama 1 plaza arriba", e: "✓", s: "✓", full: "✓" },
                  { f: "Escritorio integrado", e: "✓ (básico)", s: "✓", full: "✓ (amplio)" },
                  { f: "Baranda seguridad", e: "✓", s: "✓", full: "✓ (reforzada)" },
                  { f: "Escalera lateral", e: "✓", s: "✓", full: "✓ (peldaños anchos)" },
                  { f: "Estantes integrados", e: "—", s: "—", full: "✓" },
                  { f: "Profundidad escritorio", e: "Estándar", s: "Estándar", full: "Mayor profundidad" },
                  { f: "Pintura electrostática", e: "Opcional", s: "✓", full: "✓ premium" },
                ].map((r) => (
                  <tr key={r.f} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700 text-xs font-medium">{r.f}</td>
                    <td className="px-4 py-3 text-center text-xs text-emerald-700 font-semibold">{r.e}</td>
                    <td className="px-4 py-3 text-center text-xs text-gray-600">{r.s}</td>
                    <td className="px-4 py-3 text-center text-xs text-purple-700 font-semibold">{r.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Links internos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarote-con-escritorio", label: "Modelo Estándar", desc: "La versión más popular — el equilibrio entre precio y acabado" },
            { href: "/camarote-con-escritorio-full", label: "Modelo Full", desc: "Escritorio amplio, estantes y acabado premium" },
            { href: "/camarote-con-escritorio-universitario", label: "Para Universitarios", desc: "Guía para elegir el camarote correcto según la pieza" },
            { href: "/camarote-con-escritorio-pieza-arrendada", desc: "Para quienes arriendan y necesitan funcionalidad sin alto costo", label: "Para Pieza Arrendada" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-400 transition-all"
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        {/* CTA final */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuánto mide tu pieza?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Con las medidas del espacio disponible, te decimos si el modelo económico entra y te
            cotizamos sin compromiso.
          </p>
          <a
            href={wa(
              "Hola, me interesa el camarote con escritorio económico. La pieza mide [MEDIDAS]. ¿Pueden cotizarme?"
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
