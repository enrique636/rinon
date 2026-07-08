import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes en Renca — Pago Contra Entrega | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Renca, Santiago. Nido, triple, con escritorio y más. Pago cuando te llega. Instalación incluida en tu domicilio.",
  keywords: ["camarotes Renca", "camarote Renca Santiago", "comprar camarote Renca", "literas Renca", "despacho camarote Renca"],
  alternates: { canonical: "https://rinon.cl/camarotes-renca" },
  openGraph: { title: "Camarotes con Despacho a Renca — Camarotes Chile", description: "Camarotes metálicos con entrega e instalación en Renca. Pago contra entrega.", type: "website", locale: "es_CL" },
};

export default function CamarotesRencaPage() {
  const topProducts = products.slice(0, 4);
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness", name: "Camarotes Chile",
        areaServed: [{ "@type": "City", name: "Renca" }],
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressRegion: "Región Metropolitana", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono, paymentAccepted: "Pago contra entrega",
        openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Despachan camarotes a Renca?", acceptedAnswer: { "@type": "Answer", text: `Sí. El despacho a Renca tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} e incluye instalación en tu domicilio.` } },
          { "@type": "Question", name: "¿Cuánto demora la entrega a Renca?", acceptedAnswer: { "@type": "Answer", text: `El plazo estimado es de ${SITE_CONFIG.despacho.dias} desde que confirmas el pedido. Coordinamos fecha y horario por WhatsApp.` } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link><span>/</span>
          <span className="text-gray-700 font-medium">Renca</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full" /> Despacho a Renca — Pago contra entrega
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes con Despacho a Renca</h1>
          <p className="text-gray-500 text-lg max-w-2xl">Entregamos e instalamos camarotes metálicos en Renca. Pagas cuando llega el camarote instalado. Sin adelanto, sin riesgos.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "📍", titulo: "Despacho a Renca", desc: `Costo fijo ${formatPrice(SITE_CONFIG.despacho.precio)} · Instalación incluida` },
            { icon: "💳", titulo: "Pago contra entrega", desc: "Pagas al recibir el camarote instalado" },
            { icon: "⏱️", titulo: SITE_CONFIG.despacho.dias, desc: "Plazo estimado desde confirmación" },
          ].map(item => (
            <div key={item.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="font-semibold text-gray-900 text-sm mb-1">{item.titulo}</p>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Camarotes para familias del norte de Santiago</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Renca es una comuna del norte de Santiago con una fuerte composición familiar y alta demanda de soluciones para el hogar. Su proximidad a Quilicura, Cerro Navia y Pudahuel la hace parte del eje norponiente de Santiago, donde la necesidad de aprovechar bien el espacio de las habitaciones es especialmente relevante.</p>
          <p className="text-gray-600 leading-relaxed">Cubrimos toda la comuna de Renca y sectores aledaños. Coordinamos la entrega directamente por WhatsApp para elegir el horario que mejor se acomode a tu familia.</p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modelos disponibles para Renca</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topProducts.map(product => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all flex gap-4">
                <span className="text-3xl">{product.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 mb-1">{product.nombre}</h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">{product.descripcion}</p>
                  <div className="flex gap-2">
                    <a href={getProductWhatsAppUrl(product.nombre)} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#25D366] text-white font-semibold rounded-lg px-3 py-1.5 hover:bg-[#1ebe5d] transition-colors">Consultar</a>
                    <Link href={`/${product.slug}`} className="text-xs border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">Ver detalles</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center"><Link href="/camarotes" className="text-sm text-green-600 font-medium hover:underline">Ver todos los modelos →</Link></div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas sobre despacho a Renca</h2>
          <div className="space-y-4">
            {[
              { q: "¿Despachan a toda la comuna de Renca?", a: "Sí, cubrimos toda Renca y comunas limítrofes como Quilicura, Pudahuel y Cerro Navia." },
              { q: `¿Cuánto cuesta el despacho a Renca?`, a: `El costo de despacho es de ${formatPrice(SITE_CONFIG.despacho.precio)} fijo para toda la Región Metropolitana. Incluye traslado e instalación completa.` },
              { q: "¿Puedo coordinar la entrega en horario diferente?", a: "Sí, atendemos de lunes a sábado. Consúltanos por WhatsApp y coordinamos el horario que mejor se adapte a tu agenda." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">¿Listo para cotizar en Renca?</h2>
          <p className="text-gray-600 text-sm mb-5 max-w-md mx-auto">Escríbenos por WhatsApp y coordinamos la entrega. Pagas cuando llega instalado.</p>
          <WhatsAppButton message="Hola, quiero cotizar un camarote con despacho a Renca. ¿Qué modelos tienen?" size="lg">
            Cotizar despacho a Renca
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
