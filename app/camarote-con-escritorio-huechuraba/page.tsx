import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio en Huechuraba — Fabricación directa | Rinon.cl",
  description: "Camarote con escritorio con despacho a Huechuraba. Modelos económico, estándar y full. Fabricación directa en Chile, pago contra entrega en Santiago RM.",
  keywords: ["camarote con escritorio Huechuraba", "cama alta con escritorio Huechuraba", "camarote escritorio Huechuraba", "camarote con escritorio huechuraba despacho"],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-huechuraba" },
};

const MODELOS = [
  { href: "/camarote-con-escritorio-economico", nombre: "Económico", emoji: "💰" },
  { href: "/camarote-con-escritorio", nombre: "Estándar", emoji: "📚" },
  { href: "/camarote-con-escritorio-full", nombre: "Full", emoji: "⭐" },
];

const VECINAS = [
  { href: "/camarote-con-escritorio-quilicura", nombre: "Quilicura" },
  { href: "/camarote-con-escritorio-independencia", nombre: "Independencia" },
  { href: "/camarote-con-escritorio-vitacura", nombre: "Vitacura" },
];

const FAQ = [
  {
    q: "¿Hacen despacho de camarotes con escritorio a Huechuraba?",
    a: "Sí. Despachamos e instalamos camarotes con escritorio en Huechuraba y en toda la Región Metropolitana. En Santiago RM el pago es contra entrega: pagas cuando el producto llega a tu domicilio."
  },
  {
    q: "¿Cuánto demora el despacho a Huechuraba?",
    a: "Coordinamos directamente contigo. Escríbenos por WhatsApp para confirmar disponibilidad."
  },
  {
    q: "¿Puedo ir a ver el camarote antes de comprar?",
    a: "Somos fabricantes directos, no una tienda con showroom permanente. Por eso te enviamos fotos reales de cada modelo por WhatsApp y resolvemos todas tus dudas antes de que decidas."
  },
  {
    q: "¿Tienen camarotes con escritorio en stock para Huechuraba?",
    a: "Consulta disponibilidad actual directamente por WhatsApp y te confirmamos el modelo y el plazo para Huechuraba."
  }
];

export default function CamaroteEscritorioHuechurabaPage() {
  const wa = getWhatsAppUrl("Hola, quiero cotizar un camarote con escritorio con despacho a Huechuraba. ¿Qué modelos tienen?");
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl/" },
          { "@type": "ListItem", position: 2, name: "Camarotes con Escritorio", item: "https://rinon.cl/camarotes-con-escritorio" },
          { "@type": "ListItem", position: 3, name: "Huechuraba", item: "https://rinon.cl/camarote-con-escritorio-huechuraba" },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Huechuraba</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          <span className="w-2 h-2 bg-green-500 rounded-full" /> Despacho a Huechuraba · Pago contra entrega
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarote con escritorio con despacho a Huechuraba</h1>

        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-4">Huechuraba tiene un mix de viviendas donde los camarotes con escritorio son ideales para piezas de jóvenes en familias que buscan optimizar los metros cuadrados disponibles.</p>
        <p className="text-gray-500 leading-relaxed max-w-2xl mb-8">
          Fabricamos en acero en nuestro propio taller y despachamos a Huechuraba y sectores como Huechuraba Centro, Carrascal, Pie Andino.
          Elige entre el modelo económico, estándar o full, y ajustamos las medidas a tu pieza si lo necesitas.
        </p>

        <div className="my-6 rounded-2xl overflow-hidden shadow-sm max-w-xl">
          <img src="/images/camarotes/camarote-escritorio-2-plazas-productividad.jpg" alt="Camarote con escritorio con despacho a Huechuraba, Región Metropolitana" className="w-full object-cover" loading="lazy" />
        </div>

        {/* Modelos */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 mt-10">Modelos disponibles</h2>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {MODELOS.map((m) => (
            <Link key={m.nombre} href={m.href} className="flex flex-col items-center gap-2 bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all text-center">
              <span className="text-2xl">{m.emoji}</span>
              <span className="font-semibold text-gray-900 text-sm">{m.nombre}</span>
            </Link>
          ))}
        </div>
        <Link href="/camarotes-con-escritorio" className="text-sm text-green-700 font-medium hover:underline">Ver todos los modelos y comparativa →</Link>

        {/* Comunas vecinas */}
        {VECINAS.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Comunas vecinas</h2>
            <div className="flex flex-wrap gap-3">
              {VECINAS.map((v) => (
                <Link key={v.nombre} href={v.href} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:border-green-300 hover:text-green-700 transition-all">
                  {v.nombre}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Preguntas frecuentes — Huechuraba</h2>
          <div className="space-y-4">
            {FAQ.map((f) => (
              <div key={f.q} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Cotizar en Huechuraba</h2>
          <p className="text-gray-600 text-sm mb-5">Te ayudamos a elegir el modelo. Pago contra entrega en Santiago RM.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
