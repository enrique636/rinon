import type { Metadata } from "next";
import Link from "next/link";
import { formatPrice, getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio en Santiago — Despacho a Todo Santiago | Camarotes Chile",
  description: `Camarote con escritorio con despacho a toda la Región Metropolitana. Pago contra entrega. Despacho + instalación ${formatPrice(SITE_CONFIG.despacho.precio)}. Fabricante directo.`,
  keywords: [
    "camarote con escritorio Santiago",
    "camarote escritorio Santiago Chile",
    "cama alta con escritorio Santiago",
    "litera con escritorio Santiago",
    "comprar camarote con escritorio Santiago",
    "camarote con escritorio precio Santiago",
  ],
  alternates: { canonical: "https://dumar.cl/camarote-con-escritorio-santiago" },
};

const comunas = [
  { nombre: "Las Condes", href: "/camarote-con-escritorio-las-condes" },
  { nombre: "Providencia", href: "/camarote-con-escritorio-providencia" },
  { nombre: "Ñuñoa", href: "/camarote-con-escritorio-nunoa" },
  { nombre: "Maipú", href: "/camarote-con-escritorio-maipu" },
  { nombre: "La Florida", href: "/camarote-con-escritorio-la-florida" },
  { nombre: "Puente Alto", href: "/camarote-con-escritorio-puente-alto" },
  { nombre: "Santiago Centro", href: "/camarotes-santiago-centro" },
  { nombre: "Vitacura", href: "/camarotes-vitacura" },
  { nombre: "La Reina", href: "/camarotes-la-reina" },
  { nombre: "Macul", href: "/camarotes-macul" },
  { nombre: "Quilicura", href: "/camarotes-quilicura" },
  { nombre: "Renca", href: "/camarotes-renca" },
];

export default function CamaroteEscritorioSantiagoPage() {
  const wa = getWhatsAppUrl("Hola, quiero cotizar un camarote con escritorio en Santiago. ¿Qué modelos tienen y cuáles son los precios?");

  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes con escritorio a todo Santiago?", acceptedAnswer: { "@type": "Answer", text: `Sí. Despachamos camarotes con escritorio a todas las comunas de Santiago y alrededores. El costo de despacho es ${formatPrice(SITE_CONFIG.despacho.precio)} e incluye instalación en tu domicilio. Pago contra entrega.` } },
          { "@type": "Question", name: "¿Cuánto cuesta un camarote con escritorio en Santiago?", acceptedAnswer: { "@type": "Answer", text: "El precio depende del modelo. Consulta por WhatsApp y te enviamos la cotización actualizada con precios de fábrica. No publicamos precios en línea para no generar confusión con stock o modelos disponibles." } },
        ],
      }) }} />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Santiago</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
            <span className="w-2 h-2 bg-green-500 rounded-full" /> Toda la Región Metropolitana · Pago contra entrega
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarote con Escritorio en Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">Fabricamos y despachamos camarotes con escritorio a toda la Región Metropolitana. Despacho {formatPrice(SITE_CONFIG.despacho.precio)} incluye instalación. Pago cuando llega instalado.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar ahora</a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Busca tu comuna</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {comunas.map((c) => (
              <Link key={c.nombre} href={c.href} className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-sm text-gray-700 hover:border-green-300 hover:bg-green-50 transition-all text-center font-medium">
                {c.nombre}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Modelos disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/camarote-con-escritorio", emoji: "📚", nombre: "Camarote con Escritorio", desc: "El más vendido. Cama 1 plaza + escritorio integrado." },
              { href: "/camarote-con-escritorio-premium", emoji: "⭐", nombre: "Camarote con Escritorio Premium", desc: "Mejor acabado, para ambientes más cuidados." },
              { href: "/cama-alta-con-escritorio", emoji: "🪜", nombre: "Cama Alta con Escritorio", desc: "Cama elevada, espacio libre para escritorio propio." },
              { href: "/camarote-con-escritorio-a-medida", emoji: "✏️", nombre: "A Medida", desc: "Fabricamos exacto a las dimensiones de tu espacio." },
            ].map((p) => (
              <Link key={p.nombre} href={p.href} className="flex gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all">
                <span className="text-3xl">{p.emoji}</span>
                <div><h3 className="font-bold text-gray-900 text-sm mb-1">{p.nombre}</h3><p className="text-gray-500 text-xs">{p.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-green-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿En qué comuna estás?</h2>
          <p className="text-green-200 text-sm mb-5">Cotización en el día. Pagas cuando llega instalado.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
