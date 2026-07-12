import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes en Lampa — Pago Contra Entrega | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Lampa, Santiago. Nido, triple, cama alta. Pago cuando te llega. Instalación incluida. También Til Til y Batuco.",
  keywords: ["camarotes Lampa", "camarote Lampa Santiago", "literas Lampa", "camarotes Til Til", "camarotes Batuco"],
  alternates: { canonical: "https://rinon.cl/camarotes-lampa" },
};

export default function CamarotesLampaPage() {
  const topProducts = products.slice(0, 3);
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes a en Lampa?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a en Lampa. Para Santiago RM el despacho incluye instalación. Para regiones coordinamos transporte al cotizar — solo necesitamos la dirección." } },
          { "@type": "Question", name: "¿Cuánto tarda el despacho?", acceptedAnswer: { "@type": "Answer", text: "En Santiago RM la entrega e instalación se realiza en un día acordado, generalmente dentro de la semana de confirmado el pedido. Para regiones coordinamos transporte — el plazo depende de la distancia y disponibilidad de flete." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link><span>/</span>
          <span className="text-gray-700 font-medium">Lampa</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-4">
          <span className="w-2 h-2 bg-green-500 rounded-full" /> Despacho a Lampa · Til Til · Batuco — Pago contra entrega
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes con Despacho a Lampa</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Entregamos e instalamos camarotes metálicos en Lampa, Til Til y Batuco. Pagas cuando llega el camarote instalado. Despacho {formatPrice(SITE_CONFIG.despacho.precio)} · instalación incluida.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {topProducts.map(product => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <span className="text-3xl mb-2 block">{product.emoji}</span>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{product.nombre}</h3>
              <p className="text-gray-500 text-xs mb-3">{product.descripcion}</p>
                        <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-desmontable-negro-fondo-blanco.jpg" alt="Camarote desmontable metálico Lampa — dos camas en una estructura" className="w-full object-cover" loading="lazy" />
          </div>
<a href={getProductWhatsAppUrl(product.nombre)} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#25D366] text-white font-semibold rounded-lg px-3 py-1.5 hover:bg-[#1ebe5d] transition-colors">Consultar</a>
            </div>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Cotizar despacho a Lampa</h2>
          <p className="text-gray-600 text-sm mb-4">Pagas cuando llega instalado. Sin adelanto.</p>
          <WhatsAppButton message="Hola, quiero cotizar un camarote con despacho a Lampa o Til Til." size="lg">Cotizar ahora</WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
