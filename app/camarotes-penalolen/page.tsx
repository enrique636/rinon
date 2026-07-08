import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes en Peñalolén — Pago Contra Entrega | Camarotes Chile",
  description:
    "Compra camarotes metálicos con despacho a Peñalolén, Santiago. Modelos nido, triple, con escritorio y más. Pago cuando te llega. Instalación incluida.",
  keywords: [
    "camarotes Peñalolén",
    "camarote Peñalolén Santiago",
    "comprar camarote Peñalolén",
    "literas Peñalolén",
    "despacho camarote Peñalolén",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-penalolen" },
  openGraph: {
    title: "Camarotes Metálicos con Despacho a Peñalolén — Camarotes Chile",
    description: "Camarotes metálicos con entrega e instalación en Peñalolén. Pago contra entrega. Sin riesgos.",
    type: "website",
    locale: "es_CL",
  },
};

export default function CamarotesPenalolenPage() {
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
            description: "Camarotes metálicos con despacho a Peñalolén, Santiago. Pago contra entrega.",
            areaServed: [{ "@type": "City", name: "Peñalolén" }, { "@type": "City", name: "Santiago" }],
            address: { "@type": "PostalAddress", addressLocality: "Santiago", addressRegion: "Región Metropolitana", addressCountry: "CL" },
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
              { "@type": "Question", name: "¿Despachan camarotes a Peñalolén?", acceptedAnswer: { "@type": "Answer", text: `Sí, despachamos e instalamos en Peñalolén. El costo de despacho es ${formatPrice(SITE_CONFIG.despacho.precio)} e incluye instalación.` } },
              { "@type": "Question", name: "¿Cuánto demora la entrega a Peñalolén?", acceptedAnswer: { "@type": "Answer", text: `El plazo estimado es de ${SITE_CONFIG.despacho.dias} desde que confirmas. Coordinamos fecha y hora exacta por WhatsApp.` } },
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
          <span className="text-gray-700 font-medium">Peñalolén</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Despacho a Peñalolén — Pago contra entrega
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Camarotes con Despacho a Peñalolén
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Entregamos e instalamos camarotes metálicos directamente en tu domicilio en Peñalolén.
            Pagas cuando te llega el camarote instalado. Sin adelanto, sin riesgos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "📍", titulo: "Despacho a Peñalolén", desc: `Costo fijo de ${formatPrice(SITE_CONFIG.despacho.precio)} · Incluye instalación` },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Camarotes para familias de Peñalolén</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Peñalolén es una comuna oriente de Santiago con una mezcla de sectores residenciales
            consolidados y zonas de mayor densidad familiar. La demanda de camarotes es alta en la
            zona, especialmente para hogares con hijos en edad escolar que necesitan optimizar el
            espacio de las habitaciones.
          </p>
          <p className="text-gray-600 leading-relaxed">
            El camarote nido es uno de los modelos más pedidos en Peñalolén: permite tener tres
            camas disponibles cuando se necesitan y usar la tercera como sofá o guardarla durante
            el día cuando la pieza se usa como zona de juego.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modelos disponibles para Peñalolén</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topProducts.map((product) => (
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
          <div className="mt-4 text-center">
            <Link href="/camarotes" className="text-sm text-green-600 font-medium hover:underline">Ver todos los modelos →</Link>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas sobre despacho a Peñalolén</h2>
          <div className="space-y-4">
            {[
              { q: "¿Despachan a toda la comuna de Peñalolén?", a: "Sí, cubrimos toda Peñalolén y comunas vecinas como La Florida, Macul, Ñuñoa y La Reina." },
              { q: `¿Cuánto cuesta el despacho a Peñalolén?`, a: `Costo fijo de ${formatPrice(SITE_CONFIG.despacho.precio)} independiente del modelo. Incluye traslado e instalación completa.` },
              { q: "¿Cuánto demora en llegar el camarote a Peñalolén?", a: `El plazo estimado es de ${SITE_CONFIG.despacho.dias}. Coordinamos el día y horario exacto por WhatsApp antes de ir.` },
              { q: "¿Puedo ver el camarote antes de pagar?", a: "Sí. Con pago contra entrega, el camarote se instala completo y lo revisas antes de pagar. Si hay algún problema, lo resolvemos en el momento." },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">¿Listo para cotizar tu camarote en Peñalolén?</h2>
          <p className="text-gray-600 text-sm mb-5 max-w-md mx-auto">Escríbenos por WhatsApp y coordinamos la entrega a tu dirección en Peñalolén.</p>
          <WhatsAppButton message="Hola, quiero cotizar un camarote con despacho a Peñalolén. ¿Qué modelos tienen disponibles?" size="lg">
            Cotizar despacho a Peñalolén
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
