import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Fabricante Camarotes con Escritorio | Chile",
  description: "Somos fabricantes directos de camarotes con escritorio en Chile. Producimos en nuestro taller en Santiago. Sin intermediarios — precio y personalización directo.",
  keywords: ["fabricante camarotes con escritorio", "fabricante literas escritorio chile", "camarotes escritorio fabrica directa", "fábrica camarotes escritorio santiago"],
  alternates: { canonical: "https://rinon.cl/fabricante-camarotes-con-escritorio" },
};

export default function Page() {
  const wa = getWhatsAppUrl("Hola, quiero cotizar un camarote con escritorio directo con el fabricante.");
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Ustedes fabrican los camarotes?", acceptedAnswer: { "@type": "Answer", text: "Sí. Somos fabricantes directos. Producimos los camarotes con escritorio en nuestro propio taller en Santiago, sin intermediarios." } },
          { "@type": "Question", name: "¿Puedo pedir medidas especiales?", acceptedAnswer: { "@type": "Answer", text: "Sí. Al ser fabricantes podemos adaptar medidas y terminaciones a tus necesidades. Cuéntanos tu proyecto y lo cotizamos." } },
          { "@type": "Question", name: "¿Tienen límite de stock?", acceptedAnswer: { "@type": "Answer", text: "No dependemos de stock de terceros: fabricamos según pedido, por lo que podemos producir el volumen que necesites." } },
        ],
      }) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Fabricante</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          <span className="w-2 h-2 bg-green-500 rounded-full" /> Fábrica directa · Taller en Santiago
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Fabricante de Camarotes con Escritorio</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Somos fabricantes directos de camarotes metálicos con escritorio en Chile. Producimos en nuestro propio taller en Santiago, sin intermediarios. Comprar directo al fabricante tiene ventajas concretas: mejor precio, personalización, capacidad de producción sin límite de stock y posibilidad de medidas especiales.</p>
        <div className="space-y-4 mb-10">
          <h2 className="text-xl font-bold text-gray-900">Ventajas de comprar al fabricante</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "💰", t: "Mejor precio", d: "Sin margen de tiendas ni distribuidores. Pagas el costo real de producción." },
              { icon: "🔧", t: "Personalización", d: "Adaptamos color, terminaciones y detalles del escritorio a lo que necesites." },
              { icon: "📦", t: "Sin límite de stock", d: "Fabricamos según pedido, no dependemos de inventario de terceros." },
              { icon: "📐", t: "Medidas especiales", d: "Podemos producir con dimensiones fuera del estándar para piezas atípicas." },
            ].map(s => (
              <div key={s.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarote-con-escritorio", emoji: "📚", nombre: "Camarote con Escritorio" },
            { href: "/camarote-con-escritorio-economico", emoji: "💰", nombre: "Económico" },
            { href: "/camarote-con-escritorio-full", emoji: "⭐", nombre: "Full" },
            { href: "/camarote-con-escritorio-a-medida", emoji: "🔧", nombre: "A Medida" },
          ].map(p => (
            <Link key={p.nombre} href={p.href} className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all">
              <span className="text-2xl">{p.emoji}</span><span className="font-semibold text-gray-900 text-sm">{p.nombre}</span>
            </Link>
          ))}
        </div>
        <div className="space-y-3 mb-10">
          <h2 className="text-xl font-bold text-gray-900">Preguntas frecuentes</h2>
          {[
            { q: "¿Ustedes fabrican los camarotes?", a: "Sí. Producimos los camarotes con escritorio en nuestro propio taller en Santiago, sin intermediarios." },
            { q: "¿Puedo pedir medidas especiales?", a: "Sí. Al ser fabricantes adaptamos medidas y terminaciones a tus necesidades." },
            { q: "¿Tienen límite de stock?", a: "No. Fabricamos según pedido, por lo que producimos el volumen que necesites." },
          ].map(f => (
            <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mb-10 text-sm">
          <Link href="/fabricante-camarotes-chile" className="text-green-600 underline">Fabricante Camarotes Chile</Link>
          <Link href="/camarote-con-escritorio" className="text-green-600 underline">Camarote con Escritorio</Link>
          <Link href="/camarotes-al-por-mayor" className="text-green-600 underline">Camarotes al Por Mayor</Link>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotizar directo con el fabricante</h2>
          <p className="text-gray-400 text-sm mb-6">Respondemos en minutos con precio de fábrica.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
