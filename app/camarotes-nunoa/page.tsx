import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes en Ñuñoa — Pago Contra Entrega | Camarotes Chile",
  description:
    "Compra camarotes metálicos con despacho a Ñuñoa, Santiago. Modelos nido, triple, con escritorio y más. Pago cuando te llega. Instalación incluida.",
  keywords: [
    "camarotes Ñuñoa",
    "camarote Ñuñoa Santiago",
    "comprar camarote Ñuñoa",
    "literas Ñuñoa",
    "camarote metálico Ñuñoa",
    "despacho camarote Ñuñoa",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-nunoa" },
  openGraph: {
    title: "Camarotes Metálicos con Despacho a Ñuñoa — Camarotes Chile",
    description: "Camarotes metálicos con entrega e instalación en Ñuñoa. Pago contra entrega. Sin riesgos.",
    type: "website",
    locale: "es_CL",
  },
};

export default function CamarotesNunoaPage() {
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
            description: "Camarotes metálicos con despacho a Ñuñoa, Santiago. Pago contra entrega.",
            areaServed: [
              { "@type": "City", name: "Ñuñoa" },
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
                name: "¿Despachan camarotes a Ñuñoa?",
                acceptedAnswer: { "@type": "Answer", text: `Sí, despachamos e instalamos camarotes metálicos en Ñuñoa. El costo de despacho es ${formatPrice(SITE_CONFIG.despacho.precio)} e incluye instalación.` },
              },
              {
                "@type": "Question",
                name: "¿Pueden instalar un camarote en un departamento en Ñuñoa?",
                acceptedAnswer: { "@type": "Answer", text: "Sí. El camarote se entrega desarmado y se arma directamente en la habitación. No hay problema con ascensores ni puertas estrechas." },
              },
            ],
          }),
        }}
      />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Ñuñoa</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Despacho a Ñuñoa — Pago contra entrega
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Camarotes con Despacho a Ñuñoa
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Entregamos e instalamos camarotes metálicos directamente en tu domicilio en Ñuñoa.
            Pagas cuando te llega el camarote instalado. Sin adelanto, sin riesgos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "📍", titulo: "Despacho a Ñuñoa", desc: `Costo fijo de ${formatPrice(SITE_CONFIG.despacho.precio)} · Incluye instalación` },
            { icon: "💳", titulo: "Pago contra entrega", desc: "Pagas cuando el camarote llega instalado a tu casa" },
            { icon: "⏱️", titulo: SITE_CONFIG.despacho.dias, desc: "Plazo estimado desde que confirmas el pedido" },
          ].map((item) => (
            <div key={item.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="font-semibold text-gray-900 text-sm mb-1">{item.titulo}</p>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Camarotes para departamentos y casas en Ñuñoa
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ñuñoa concentra una mezcla de familias jóvenes, estudiantes universitarios y adultos
            que comparten departamento. Es una de las comunas con mayor variedad de necesidades
            para camarotes: desde el modelo nido para piezas pequeñas con visitas frecuentes,
            hasta el camarote con escritorio integrado para el estudiante que necesita espacio
            de trabajo en su dormitorio.
          </p>
          <p className="text-gray-600 leading-relaxed">
            La cercanía al eje universitario y la alta densidad de departamentos en altura hacen
            que sea especialmente importante que el camarote se entregue desarmado: las piezas
            individuales suben sin dificultad por escaleras y ascensores típicos de la zona.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modelos recomendados para Ñuñoa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all flex gap-4">
                <span className="text-3xl">{product.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 mb-1">{product.nombre}</h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">{product.descripcion}</p>
                  <div className="flex gap-2">
                              <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-escritorio-full-home-office.jpg" alt="Camarote escritorio full home office Ñuñoa — trabaja y duerme" className="w-full object-cover" loading="lazy" />
          </div>
<a href={getProductWhatsAppUrl(product.nombre)} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#25D366] text-white font-semibold rounded-lg px-3 py-1.5 hover:bg-[#1ebe5d] transition-colors">
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
            <Link href="/camarotes" className="text-sm text-green-600 font-medium hover:underline">Ver todos los modelos →</Link>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas sobre despacho a Ñuñoa</h2>
          <div className="space-y-4">
            {[
              { q: "¿Despachan a todo Ñuñoa?", a: "Sí, cubrimos toda la comuna de Ñuñoa y comunas vecinas como Providencia, Macul, La Florida y San Joaquín." },
              { q: `¿Cuánto cuesta el despacho a Ñuñoa?`, a: `Costo fijo de ${formatPrice(SITE_CONFIG.despacho.precio)} independiente del modelo. Incluye traslado e instalación en tu domicilio.` },
              { q: "¿Hay problema con el ascensor en edificios de Ñuñoa?", a: "No. El camarote se entrega desarmado: las piezas individuales son manejables y entran sin problema en los ascensores estándar de los edificios de Ñuñoa." },
              { q: "¿Cuánto tiempo demora la instalación?", a: "Aproximadamente 20-30 minutos. El equipo de entrega arma el camarote completo en la habitación antes de que pagues." },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">¿Listo para cotizar tu camarote en Ñuñoa?</h2>
          <p className="text-gray-600 text-sm mb-5 max-w-md mx-auto">
            Escríbenos por WhatsApp y coordinamos la entrega a tu dirección en Ñuñoa. Pagas cuando llega instalado.
          </p>
          <WhatsAppButton message="Hola, quiero cotizar un camarote con despacho a Ñuñoa. ¿Qué modelos tienen disponibles?" size="lg">
            Cotizar despacho a Ñuñoa
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
