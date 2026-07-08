import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes en Estación Central — Pago Contra Entrega | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Estación Central, Santiago. Nido, triple, con escritorio y más. Pago cuando te llega. Instalación incluida.",
  keywords: ["camarotes Estación Central", "camarote Estacion Central Santiago", "comprar camarote Estación Central", "literas Estacion Central"],
  alternates: { canonical: "https://rinon.cl/camarotes-estacion-central" },
  openGraph: { title: "Camarotes con Despacho a Estación Central — Camarotes Chile", description: "Camarotes metálicos con entrega e instalación en Estación Central. Pago contra entrega.", type: "website", locale: "es_CL" },
};

export default function CamarotesEstacionCentralPage() {
  const topProducts = products.slice(0, 4);
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness", name: "Camarotes Chile",
        areaServed: [{ "@type": "City", name: "Estación Central" }],
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressRegion: "Región Metropolitana", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono, paymentAccepted: "Pago contra entrega",
        openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Despachan camarotes a Estación Central?", acceptedAnswer: { "@type": "Answer", text: `Sí. El despacho a Estación Central tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} e incluye instalación en tu domicilio.` } },
          { "@type": "Question", name: "¿Tienen problema para instalar en edificios de Estación Central?", acceptedAnswer: { "@type": "Answer", text: "No. El camarote se entrega desarmado, las piezas entran por ascensores y pasillos estándar sin dificultad." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link><span>/</span>
          <span className="text-gray-700 font-medium">Estación Central</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full" /> Despacho a Estación Central — Pago contra entrega
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes con Despacho a Estación Central</h1>
          <p className="text-gray-500 text-lg max-w-2xl">Entregamos e instalamos camarotes metálicos en Estación Central. Pagas cuando llega el camarote instalado. Sin adelanto, sin riesgos.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "📍", titulo: "Despacho a Estación Central", desc: `Costo fijo ${formatPrice(SITE_CONFIG.despacho.precio)} · Instalación incluida` },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Camarotes para departamentos en Estación Central</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Estación Central es una de las comunas con mayor densidad de departamentos pequeños en Santiago, por su ubicación central y el alto nivel de inversión inmobiliaria de los últimos años. Esto hace que los camarotes sean especialmente valorados: en departamentos de 1 o 2 dormitorios, un camarote puede duplicar la capacidad de hospedaje sin aumentar el espacio.</p>
          <p className="text-gray-600 leading-relaxed">Es también una zona popular entre estudiantes universitarios que arriendan en cercanías de la Alameda, para quienes el camarote con escritorio integrado es la solución perfecta.</p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modelos más solicitados en Estación Central</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas sobre despacho a Estación Central</h2>
          <div className="space-y-4">
            {[
              { q: "¿Despachan a toda la comuna de Estación Central?", a: "Sí, cubrimos toda la comuna. También despachamos a Maipú, Cerrillos, Pudahuel y Quinta Normal que limitan con Estación Central." },
              { q: `¿Cuánto cuesta el despacho a Estación Central?`, a: `El costo de despacho es de ${formatPrice(SITE_CONFIG.despacho.precio)} fijo, independiente del modelo y del sector específico.` },
              { q: "¿Tienen problemas para entrar a edificios con control de acceso?", a: "No. Coordinamos contigo el acceso antes de ir. Las piezas del camarote son manejables y no requieren equipamiento especial." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">¿Listo para cotizar en Estación Central?</h2>
          <p className="text-gray-600 text-sm mb-5 max-w-md mx-auto">Escríbenos por WhatsApp y coordinamos la entrega. Pagas cuando llega instalado.</p>
          <WhatsAppButton message="Hola, quiero cotizar un camarote con despacho a Estación Central. ¿Qué modelos tienen?" size="lg">
            Cotizar despacho a Estación Central
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
