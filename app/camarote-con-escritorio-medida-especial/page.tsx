import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Medida Especial | A Pedido",
  description: "Camarotes con escritorio a medida especial en Chile. ¿Tu pieza tiene dimensiones no estándar? Fabricamos con tus medidas exactas. Cotiza tu proyecto por WhatsApp.",
  keywords: ["camarote con escritorio medida especial", "camarote escritorio personalizado", "litera escritorio a medida chile", "camarote medidas especiales escritorio"],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-medida-especial" },
};

export default function Page() {
  const wa = getWhatsAppUrl("Hola, necesito un camarote con escritorio en una medida especial. Te paso las dimensiones.");
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Para qué sirve una medida especial?", acceptedAnswer: { "@type": "Answer", text: "Para piezas angostas, con techos bajos o de dimensiones atípicas donde un camarote estándar no calza. Fabricamos con las medidas exactas de tu espacio." } },
          { "@type": "Question", name: "¿Cómo se cotiza una medida especial?", acceptedAnswer: { "@type": "Answer", text: "Nos envías las medidas de tu espacio (ancho, largo y alto disponible) por WhatsApp y te preparamos una cotización a medida." } },
          { "@type": "Question", name: "¿Demora más una medida especial?", acceptedAnswer: { "@type": "Answer", text: "Sí, la fabricación a medida especial requiere un tiempo adicional respecto a los modelos estándar. Te confirmamos el plazo al cotizar." } },
        ],
      }) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Medida Especial</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          <span className="w-2 h-2 bg-green-500 rounded-full" /> Fabricación a pedido · Tus medidas exactas
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarote con Escritorio a Medida Especial</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">¿Tu pieza tiene dimensiones no estándar? Fabricamos camarotes con escritorio a la medida exacta de tu espacio. La medida especial sirve para piezas angostas, habitaciones con techos bajos o cualquier espacio con dimensiones atípicas donde un camarote estándar no calza.</p>
        <div className="space-y-4 mb-10">
          <h2 className="text-xl font-bold text-gray-900">¿Cómo cotizamos tu medida especial?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "📐", t: "Envías tus medidas", d: "Nos pasas el ancho, largo y alto disponible en tu pieza por WhatsApp." },
              { icon: "✏️", t: "Diseñamos a medida", d: "Adaptamos la estructura y el escritorio a tu espacio y te confirmamos el plazo de fabricación adicional." },
              { icon: "🏠", t: "Fabricamos y entregamos", d: "Producimos tu camarote con las dimensiones exactas y coordinamos el despacho." },
            ].map(s => (
              <div key={s.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <h2 className="text-xl font-bold text-gray-900">Preguntas frecuentes</h2>
          {[
            { q: "¿Para qué sirve la medida especial?", a: "Para piezas angostas, con techos bajos o dimensiones atípicas donde un camarote estándar no calza." },
            { q: "¿Cómo se cotiza?", a: "Nos envías las medidas de tu espacio por WhatsApp y te preparamos una cotización a medida." },
            { q: "¿Demora más?", a: "Sí, la fabricación a medida especial requiere un tiempo adicional. Te confirmamos el plazo al cotizar." },
          ].map(f => (
            <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mb-10 text-sm">
          <Link href="/camarote-con-escritorio-a-medida" className="text-green-600 underline">Camarote con Escritorio a Medida</Link>
          <Link href="/camarote-con-escritorio" className="text-green-600 underline">Camarote con Escritorio</Link>
          <Link href="/fabricante-camarotes-con-escritorio" className="text-green-600 underline">Fabricante</Link>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotizar tu medida especial</h2>
          <p className="text-gray-400 text-sm mb-6">Envíanos las dimensiones y te respondemos en minutos.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
