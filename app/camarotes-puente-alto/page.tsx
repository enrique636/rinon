import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes en Puente Alto — Pago Contra Entrega | Camarotes Chile",
  description:
    "Camarotes metálicos con despacho a Puente Alto, Santiago. Nido, triple, con escritorio y más. Pago cuando te llega. Instalación incluida en tu domicilio.",
  keywords: [
    "camarotes Puente Alto",
    "camarote Puente Alto Santiago",
    "comprar camarote Puente Alto",
    "literas Puente Alto",
    "camarote metálico Puente Alto",
    "despacho camarote Puente Alto",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-puente-alto" },
  openGraph: {
    title: "Camarotes Metálicos con Despacho a Puente Alto — Camarotes Chile",
    description: "Camarotes metálicos con entrega e instalación en Puente Alto. Pago contra entrega. Sin riesgos.",
    type: "website",
    locale: "es_CL",
  },
};

export default function CamarotesPuenteAltoPage() {
  const topProducts = products.slice(0, 4);
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness", name: "Camarotes Chile",
        description: "Camarotes metálicos con despacho a Puente Alto, Santiago.",
        areaServed: [{ "@type": "City", name: "Puente Alto" }, { "@type": "City", name: "Santiago" }],
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressRegion: "Región Metropolitana", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono, paymentAccepted: "Pago contra entrega",
        openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Despachan camarotes a Puente Alto?", acceptedAnswer: { "@type": "Answer", text: `Sí. El despacho a Puente Alto tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} e incluye instalación en tu domicilio.` } },
          { "@type": "Question", name: "¿Cuánto demora la entrega a Puente Alto?", acceptedAnswer: { "@type": "Answer", text: `El plazo estimado es de ${SITE_CONFIG.despacho.dias} desde que confirmas el pedido. Coordinamos fecha y horario por WhatsApp.` } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link><span>/</span>
          <span className="text-gray-700 font-medium">Puente Alto</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full" /> Despacho a Puente Alto — Pago contra entrega
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes con Despacho a Puente Alto</h1>
          <p className="text-gray-500 text-lg max-w-2xl">Entregamos e instalamos camarotes metálicos en Puente Alto. Pagas cuando llega el camarote instalado. Sin adelanto.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "📍", titulo: "Despacho a Puente Alto", desc: `Costo fijo ${formatPrice(SITE_CONFIG.despacho.precio)} · Instalación incluida` },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Camarotes para la familia más grande de Santiago</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Puente Alto es la comuna más poblada de Chile, con más de 700.000 habitantes. Es una zona predominantemente familiar con alta demanda de soluciones para habitaciones compartidas. Los camarotes metálicos son especialmente populares en Puente Alto por la alta proporción de familias con dos o más hijos en piezas de tamaño estándar.</p>
          <p className="text-gray-600 leading-relaxed">Despachamos a todos los sectores de Puente Alto, incluyendo zonas como Bajos de Mena, Nos, La Vara, San Bernardo limítrofe y todos los condominios y villas de la comuna.</p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modelos más pedidos en Puente Alto</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topProducts.map(product => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all flex gap-4">
                <span className="text-3xl">{product.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 mb-1">{product.nombre}</h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">{product.descripcion}</p>
                  <div className="flex gap-2">
                              <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-petalo-habitacion-nina.jpg" alt="Camarote pétalo con madera Puente Alto — ideal habitación de niña" className="w-full object-cover" loading="lazy" />
          </div>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas sobre camarotes en Puente Alto</h2>
          <div className="space-y-4">
            {[
              { q: "¿Despachan a toda la comuna de Puente Alto?", a: "Sí, cubrimos toda Puente Alto. También despachamos a San Bernardo, La Pintana y Pirque que limitan con la comuna." },
              { q: `¿El precio de despacho es el mismo en toda Puente Alto?`, a: `Sí. El costo es de ${formatPrice(SITE_CONFIG.despacho.precio)} fijo para toda la Región Metropolitana, independiente del sector específico de Puente Alto.` },
              { q: "¿Cuánto tiempo tarda la instalación una vez que llegan?", a: "Aproximadamente 20-40 minutos. El equipo arma el camarote completo en la habitación antes de cobrar." },
              { q: "¿Qué modelo recomiendan para dos hijos en Puente Alto?", a: "El camarote estándar 1+1 plaza es perfecto. Si son tres hijos o hay visitas frecuentes, el camarote nido da tres camas en el mismo espacio." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">¿Listo para cotizar en Puente Alto?</h2>
          <p className="text-gray-600 text-sm mb-5 max-w-md mx-auto">Escríbenos por WhatsApp y coordinamos la entrega. Pagas cuando llega instalado.</p>
          <WhatsAppButton message="Hola, quiero cotizar un camarote con despacho a Puente Alto. ¿Qué modelos tienen disponibles?" size="lg">
            Cotizar despacho a Puente Alto
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
