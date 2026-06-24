import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes en Las Condes — Pago Contra Entrega | Camarotes Chile",
  description:
    "Compra camarotes metálicos con despacho a Las Condes, Santiago. Modelos nido, triple, con escritorio, doble y más. Pago cuando te llega. Instalación incluida.",
  keywords: [
    "camarotes Las Condes",
    "camarote Las Condes Santiago",
    "comprar camarote Las Condes",
    "literas Las Condes",
    "camarote metálico Las Condes",
    "despacho camarote Las Condes",
  ],
  alternates: { canonical: "https://dumar.cl/camarotes-las-condes" },
  openGraph: {
    title: "Camarotes Metálicos con Despacho a Las Condes — Camarotes Chile",
    description: "Camarotes metálicos con entrega e instalación en Las Condes. Pago contra entrega. Sin riesgos.",
    type: "website",
    locale: "es_CL",
  },
};

export default function CamarotesLasCondesPage() {
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
            description: "Camarotes metálicos con despacho a Las Condes, Santiago. Pago contra entrega.",
            areaServed: [
              { "@type": "City", name: "Las Condes" },
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
                name: "¿Despachan camarotes a Las Condes?",
                acceptedAnswer: { "@type": "Answer", text: `Sí, despachamos e instalamos camarotes metálicos directamente en Las Condes. El costo de despacho es ${formatPrice(SITE_CONFIG.despacho.precio)} e incluye traslado e instalación en tu domicilio.` },
              },
              {
                "@type": "Question",
                name: "¿Cuánto demora la entrega de un camarote en Las Condes?",
                acceptedAnswer: { "@type": "Answer", text: `El plazo estimado es de ${SITE_CONFIG.despacho.dias} desde que confirmas. Coordinamos día y horario exacto por WhatsApp antes de ir.` },
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
          <span className="text-gray-700 font-medium">Las Condes</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Despacho a Las Condes — Pago contra entrega
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Camarotes con Despacho a Las Condes
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Entregamos e instalamos camarotes metálicos directamente en tu domicilio en Las Condes.
            Pagas cuando te llega el camarote instalado. Sin adelanto, sin riesgos.
          </p>
        </div>

        {/* Info despacho */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "📍", titulo: "Despacho a Las Condes", desc: `Costo fijo de ${formatPrice(SITE_CONFIG.despacho.precio)} · Incluye instalación` },
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

        {/* Por qué Las Condes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Camarotes para hogares y departamentos en Las Condes
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Las Condes tiene una alta concentración de familias con hijos y departamentos en altura.
            Los camarotes metálicos son una solución muy solicitada en esta comuna para aprovechar
            mejor los espacios de los cuartos: tanto para hermanos que comparten pieza como para
            estudiantes que necesitan escritorio integrado.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Como el camarote se entrega desarmado, no hay problema con ascensores ni puertas
            estrechas. El equipo de instalación lo arma directamente en la habitación y
            se lleva el embalaje.
          </p>
        </div>

        {/* Modelos populares */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modelos disponibles para Las Condes</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas sobre despacho a Las Condes</h2>
          <div className="space-y-4">
            {[
              {
                q: "¿Despachan a toda la comuna de Las Condes?",
                a: "Sí, cubrimos toda la comuna de Las Condes y las comunas vecinas como Vitacura, Lo Barnechea, Providencia y Peñalolén.",
              },
              {
                q: `¿Cuánto cuesta el despacho a Las Condes?`,
                a: `El despacho tiene un costo fijo de ${formatPrice(SITE_CONFIG.despacho.precio)} independiente del modelo. Incluye traslado e instalación del camarote en tu domicilio.`,
              },
              {
                q: "¿Puedo elegir el horario de entrega?",
                a: "Sí. Una vez confirmado el pedido, coordinamos contigo el día y bloque horario que mejor te acomode. Atendemos de lunes a viernes de 9 a 18 hrs y sábados de 9 a 14 hrs.",
              },
              {
                q: "¿El camarote llega con el armado incluido?",
                a: "Sí. El equipo de entrega sube las piezas, arma el camarote en la habitación y retira el embalaje. No tienes que hacer nada.",
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
            ¿Listo para cotizar tu camarote en Las Condes?
          </h2>
          <p className="text-gray-600 text-sm mb-5 max-w-md mx-auto">
            Escríbenos por WhatsApp. Cotizamos en minutos y coordinamos la entrega a tu dirección.
          </p>
          <WhatsAppButton
            message="Hola, quiero cotizar un camarote con despacho a Las Condes. ¿Qué modelos tienen disponibles?"
            size="lg"
          >
            Cotizar despacho a Las Condes
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
