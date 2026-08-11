import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes con Escritorio Precio Fábrica | Chile",
  description: "Camarotes metálicos con escritorio a precio de fábrica en Chile. Sin margen de distribuidor. Fabricante directo. Todos los modelos disponibles al precio real de producción.",
  keywords: ["camarotes con escritorio precio fabrica", "camarote escritorio precio directo", "camarotes escritorio sin intermediarios", "literas escritorio precio fabricante"],
  alternates: { canonical: "https://rinon.cl/camarotes-con-escritorio-precio-fabrica" },
};

export default function Page() {
  const wa = getWhatsAppUrl("Hola, quiero cotizar un camarote con escritorio a precio de fábrica.");
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Por qué son más baratos a precio de fábrica?", acceptedAnswer: { "@type": "Answer", text: "Porque somos el fabricante directo. No hay tiendas ni distribuidores intermedios que sumen su margen. Compras al precio real de producción, directo de nuestro taller en Santiago." } },
          { "@type": "Question", name: "¿Qué incluye el precio de fábrica?", acceptedAnswer: { "@type": "Answer", text: "El precio incluye el camarote metálico con escritorio integrado, terminado y listo. El despacho se cotiza aparte según tu ubicación." } },
          { "@type": "Question", name: "¿Hay garantía comprando a precio de fábrica?", acceptedAnswer: { "@type": "Answer", text: "Sí. Al comprar directo al fabricante mantienes la garantía completa sobre la estructura y soldaduras del camarote." } },
        ],
      }) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Precio Fábrica</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          <span className="w-2 h-2 bg-green-500 rounded-full" /> Precio de fábrica · Sin intermediarios
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes con Escritorio a Precio de Fábrica</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Somos fabricantes directos en Santiago. Cuando compras a precio de fábrica pagas el costo real de producción, sin el margen que agregan las tiendas y distribuidores. La diferencia entre el precio de fábrica y el precio de tienda puede ser significativa: en retail cada intermediario suma su ganancia, aquí compras en el origen.</p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { href: "/camarote-con-escritorio-economico", emoji: "💰", nombre: "Económico" },
            { href: "/camarote-con-escritorio-full", emoji: "⭐", nombre: "Full" },
            { href: "/camarote-con-escritorio-premium", emoji: "💎", nombre: "Premium" },
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
            { q: "¿Por qué son más baratos?", a: "Porque somos el fabricante directo. No hay tiendas ni distribuidores intermedios que sumen su margen. Compras al precio real de producción." },
            { q: "¿Qué incluye el precio?", a: "El camarote metálico con escritorio integrado, terminado y listo. El despacho se cotiza aparte según tu ubicación." },
            { q: "¿Hay garantía?", a: "Sí. Al comprar directo al fabricante mantienes la garantía completa sobre la estructura y soldaduras del camarote." },
          ].map(f => (
            <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mb-10 text-sm">
          <Link href="/camarote-con-escritorio" className="text-green-600 underline">Camarote con Escritorio</Link>
          <Link href="/fabricante-camarotes-chile" className="text-green-600 underline">Fabricante Camarotes Chile</Link>
          <Link href="/camarotes-al-por-mayor" className="text-green-600 underline">Camarotes al Por Mayor</Link>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotizar a precio de fábrica</h2>
          <p className="text-gray-400 text-sm mb-6">Respondemos en minutos con el precio real de producción.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
