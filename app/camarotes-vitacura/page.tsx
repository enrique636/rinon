import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes en Vitacura — Pago Contra Entrega | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Vitacura, Santiago. Nido, triple, con escritorio y cama alta. Pago cuando te llega. Instalación incluida.",
  keywords: ["camarotes Vitacura", "camarote Vitacura Santiago", "literas Vitacura", "comprar camarote Vitacura"],
  alternates: { canonical: "https://dumar.cl/camarotes-vitacura" },
};

export default function CamarotesVitacuraPage() {
  const topProducts = products.slice(0, 4);
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Despachan camarotes a Vitacura?", acceptedAnswer: { "@type": "Answer", text: `Sí. El despacho a Vitacura tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} e incluye instalación en tu domicilio.` } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link><span>/</span>
          <span className="text-gray-700 font-medium">Vitacura</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full" /> Despacho a Vitacura — Pago contra entrega
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes con Despacho a Vitacura</h1>
          <p className="text-gray-500 text-lg max-w-2xl">Entregamos e instalamos camarotes metálicos en Vitacura. Pagas cuando llega el camarote instalado. Sin adelanto.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { icon: "📍", titulo: `Despacho ${formatPrice(SITE_CONFIG.despacho.precio)}`, desc: "Vitacura · Instalación incluida" },
            { icon: "💳", titulo: "Pago contra entrega", desc: "Pagas al recibir instalado" },
            { icon: "⏱️", titulo: SITE_CONFIG.despacho.dias, desc: "Plazo estimado" },
          ].map(item => (
            <div key={item.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="font-semibold text-gray-900 text-sm mb-1">{item.titulo}</p>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {topProducts.map(product => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4 hover:border-gray-400 hover:shadow-sm transition-all">
              <span className="text-3xl">{product.emoji}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 mb-1">{product.nombre}</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{product.descripcion}</p>
                <div className="flex gap-2">
                  <a href={getProductWhatsAppUrl(product.nombre)} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#25D366] text-white font-semibold rounded-lg px-3 py-1.5 hover:bg-[#1ebe5d] transition-colors">Consultar</a>
                  <Link href={`/${product.slug}`} className="text-xs border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">Ver más</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">¿Listo para cotizar en Vitacura?</h2>
          <p className="text-gray-600 text-sm mb-4">Pagas cuando llega instalado.</p>
          <WhatsAppButton message="Hola, quiero cotizar un camarote con despacho a Vitacura. ¿Qué modelos tienen?" size="lg">Cotizar despacho a Vitacura</WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
