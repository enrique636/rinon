import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes en Providencia — Pago Contra Entrega | Camarotes Chile",
  description:
    "Compra camarotes metálicos con despacho a Providencia, Santiago. Modelos nido, triple, con escritorio, doble y más. Pago cuando te llega. Instalación incluida.",
  keywords: [
    "camarotes Providencia",
    "camarote Providencia Santiago",
    "comprar camarote Providencia",
    "literas Providencia",
    "camarote metálico Providencia",
    "despacho camarote Providencia",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-providencia" },
  openGraph: {
    title: "Camarotes Metálicos con Despacho a Providencia — Camarotes Chile",
    description: "Camarotes metálicos con entrega e instalación en Providencia. Pago contra entrega. Sin riesgos.",
    type: "website",
    locale: "es_CL",
  },
};

export default function CamarotesProvidenciaPage() {
  const topProducts = products.slice(0, 4);

  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Camarotes Chile",
            description: "Camarotes metálicos con despacho a Providencia, Santiago. Pago contra entrega.",
            areaServed: [
              { "@type": "City", name: "Providencia" },
              { "@type": "City", name: "Santiago" },
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Santiago",
              addressRegion: "Región Metropolitana",
              addressCountry: "CL",
            },
            telephone: SITE_CONFIG.telefono,
            paymentAccepted: "Pago contra entrega",
            openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Despachan camarotes a Providencia?",
                acceptedAnswer: { "@type": "Answer", text: `Sí, despachamos e instalamos camarotes metálicos directamente en Providencia. El costo de despacho es ${formatPrice(SITE_CONFIG.despacho.precio)} e incluye traslado e instalación en tu domicilio.` },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tiempo demora el despacho a Providencia?",
                acceptedAnswer: { "@type": "Answer", text: `El plazo estimado de entrega es de ${SITE_CONFIG.despacho.dias} desde que confirmas el pedido. Coordinamos contigo el día y horario exacto por WhatsApp.` },
              },
            ],
          }),
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Providencia</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Despacho a Providencia — Pago contra entrega
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Camarotes con Despacho a Providencia
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Entregamos e instalamos camarotes metálicos directamente en tu domicilio en Providencia.
            Pagas cuando te llega el camarote instalado. Sin adelanto, sin riesgos.
          </p>
        </div>

        {/* Info despacho */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "📍", titulo: "Despacho a Providencia", desc: `Costo fijo de ${formatPrice(SITE_CONFIG.despacho.precio)} · Incluye instalación` },
            { icon: "💳", titulo: "Pago contra entrega", desc: "Pagas cuando el camarote llega instalado a tu casa" },
            { icon: "⏱️", titulo: `${SITE_CONFIG.despacho.dias}`, desc: "Plazo estimado desde que confirmas el pedido" },
          ].map((item) => (
            <div key={item.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="font-semibold text-gray-900 text-sm mb-1">{item.titulo}</p>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Por qué Providencia */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Por qué comprar un camarote en Providencia?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Providencia es una de las comunas más densamente habitadas del Gran Santiago, con muchos
            departamentos y casas de tamaño mediano. Esto hace que los camarotes metálicos sean
            especialmente populares aquí: permiten alojar a dos personas en el espacio de una
            sola cama, o bien liberar espacio con una cama alta.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nuestros camarotes se entregan desarmados y se arman directamente en la habitación,
            por lo que no hay problemas de ingreso por escaleras, ascensores o puertas estrechas
            que son comunes en los edificios de Providencia.
          </p>
        </div>

        {/* Modelos populares */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modelos populares en Providencia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all flex gap-4">
                <span className="text-3xl">{product.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 mb-1">{product.nombre}</h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">{product.descripcion}</p>
                  <div className="flex gap-2">
                    <a
                      href={getProductWhatsAppUrl(product.nombre)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-[#25D366] text-white font-semibold rounded-lg px-3 py-1.5 hover:bg-[#1ebe5d] transition-colors"
                    >
                      Consultar
                    </a>
                    <Link href={`/${product.slug}`} className="text-xs border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/camarotes" className="text-sm text-green-600 font-medium hover:underline">
              Ver todos los modelos disponibles →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas sobre despacho a Providencia</h2>
          <div className="space-y-4">
            {[
              {
                q: "¿Despachan a toda la comuna de Providencia?",
                a: "Sí, despachamos a todas las direcciones de la comuna de Providencia y a las comunas vecinas como Ñuñoa, Las Condes y Santiago Centro.",
              },
              {
                q: `¿Cuánto cuesta el despacho a Providencia?`,
                a: `El despacho tiene un costo fijo de ${formatPrice(SITE_CONFIG.despacho.precio)} independiente del modelo. Incluye traslado hasta tu domicilio e instalación del camarote.`,
              },
              {
                q: "¿Pueden subir el camarote a un departamento en piso alto?",
                a: "Sí. El camarote se entrega desarmado: las piezas individuales son manejables y suben sin problemas por escaleras o ascensor. Se arma en la habitación.",
              },
              {
                q: "¿Puedo pagar con transferencia cuando llega?",
                a: "Sí. Aceptamos transferencia bancaria al momento de la entrega. También efectivo. No necesitas pagar nada antes.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ¿Listo para cotizar tu camarote en Providencia?
          </h2>
          <p className="text-gray-600 text-sm mb-5 max-w-md mx-auto">
            Escríbenos por WhatsApp, cuéntanos qué modelo te interesa y coordinamos la entrega.
            Pagas cuando llega instalado.
          </p>
          <WhatsAppButton
            message="Hola, quiero cotizar un camarote con despacho a Providencia. ¿Qué modelos tienen disponibles?"
            size="lg"
          >
            Cotizar despacho a Providencia
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
