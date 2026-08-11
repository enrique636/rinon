import type { Metadata } from "next";
import Link from "next/link";
import { formatPrice, getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio en Ñuñoa — Despacho con Instalación | Camarotes Chile",
  description: `Camarote con escritorio con despacho a Ñuñoa. Pago contra entrega. Despacho + instalación ${formatPrice(SITE_CONFIG.despacho.precio)}. Fabricante directo.`,
  keywords: ["camarote con escritorio Ñuñoa", "litera escritorio Ñuñoa", "cama alta escritorio Ñuñoa"],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-nunoa" },
};

export default function CamaroteEscritorioNunoaPage() {
  const wa = getWhatsAppUrl("Hola, quiero cotizar un camarote con escritorio con despacho a Ñuñoa. ¿Qué modelos tienen?");
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes con escritorio a Ñuñoa?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos e instalamos camarotes con escritorio en Ñuñoa con un costo fijo que incluye instalación. Pagas cuando llega el producto a tu domicilio." } },
          { "@type": "Question", name: "¿Cuánto tarda el despacho?", acceptedAnswer: { "@type": "Answer", text: "En Santiago RM la entrega e instalación se realiza en un día acordado, generalmente dentro de la semana de confirmado el pedido. Para regiones coordinamos transporte — el plazo depende de la distancia y disponibilidad de flete." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Ñuñoa</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          <span className="w-2 h-2 bg-green-500 rounded-full" /> Despacho a Ñuñoa · Pago contra entrega
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarote con Escritorio en Ñuñoa</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Despacho e instalación en Ñuñoa. Pago cuando llega instalado. Despacho {formatPrice(SITE_CONFIG.despacho.precio)}. Ñuñoa tiene alta densidad de departamentos y universitarios — el camarote con escritorio es la solución ideal.</p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { href: "/camarote-con-escritorio", emoji: "📚", nombre: "Camarote con Escritorio" },
            { href: "/camarote-con-escritorio-universitario", emoji: "🎓", nombre: "Para universitarios" },
            { href: "/cama-alta-con-escritorio", emoji: "🪜", nombre: "Cama Alta con Escritorio" },
            { href: "/camarote-con-escritorio-departamento", emoji: "🏢", nombre: "Para departamentos" },
          ].map(p => (
            <Link key={p.nombre} href={p.href} className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all">
              <span className="text-2xl">{p.emoji}</span><span className="font-semibold text-gray-900 text-sm">{p.nombre}</span>
            </Link>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Cotizar en Ñuñoa</h2>
          <p className="text-gray-600 text-sm mb-4">Pagas cuando llega instalado.</p>
          
          <div className="my-5 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-escritorio-full-universitario.jpg" alt="Camarote con escritorio con despacho a Ñuñoa Santiago" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar ahora</a>
        </div>
      </div>
    </div>
  );
}
