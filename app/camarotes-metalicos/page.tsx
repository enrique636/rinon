import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes Metálicos en Santiago — Pago Contra Entrega | Camarotes Chile",
  description:
    "Camarotes metálicos en Santiago con entrega e instalación incluida. Nido, triple, con escritorio, cama alta y más. Pago contra entrega. Toda la Región Metropolitana.",
  keywords: [
    "camarotes metálicos Santiago",
    "literas metálicas Chile",
    "camarote metalico Santiago",
    "litera metalica Santiago",
    "camarote de metal Santiago",
    "camarote acero Chile",
    "camarotes metalicos pago contra entrega",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-metalicos" },
  openGraph: {
    title: "Camarotes Metálicos en Santiago — Instalación Incluida | Camarotes Chile",
    description: "Camarotes metálicos de acero con entrega e instalación en Santiago. Pago contra entrega.",
    type: "website",
    locale: "es_CL",
  },
};

const VENTAJAS = [
  {
    titulo: "Durabilidad excepcional",
    desc: "El acero no se astilla, no absorbe humedad y no se deforma con el uso intensivo. Un camarote metálico de buena calidad dura décadas.",
    icon: "🔩",
  },
  {
    titulo: "Resistencia al peso",
    desc: "El acero soporta cargas estáticas elevadas sin ceder. Apto para adultos y para uso comercial (hostales, pensiones, campamentos).",
    icon: "💪",
  },
  {
    titulo: "Mantenimiento mínimo",
    desc: "A diferencia de la madera, el metal no requiere barnizado periódico. Con un repaso de pintura cada varios años es suficiente.",
    icon: "🛠️",
  },
  {
    titulo: "Fácil de armar y desarmar",
    desc: "Las uniones son atornilladas o de encaje. Si necesitas mover o cambiar de casa, el camarote se puede desarmar y rearmar sin dificultad.",
    icon: "🔧",
  },
  {
    titulo: "Higiénico",
    desc: "El metal no retiene olores, polvo ni ácaros como lo puede hacer la madera porosa. Más fácil de limpiar con paño húmedo.",
    icon: "✨",
  },
  {
    titulo: "Precio/durabilidad superior",
    desc: "Para la misma durabilidad, el camarote metálico cuesta menos que madera maciza y mucho más que MDF. El mejor punto de equilibrio.",
    icon: "💰",
  },
];

export default function CamarotesMetalicosPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Camarotes Metálicos en Santiago",
            description: "Catálogo de camarotes metálicos con despacho e instalación en Santiago, Chile",
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.nombre,
              description: p.descripcion,
              url: `https://rinon.cl/${p.slug}`,
            })),
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
                name: "¿Qué es un camarote metálico?",
                acceptedAnswer: { "@type": "Answer", text: "Un camarote metálico es una litera o cama cucheta fabricada en acero (metal). A diferencia de los de madera o MDF, el acero ofrece mayor resistencia al peso, mejor durabilidad y mantenimiento mínimo. Es la opción más recomendada para hogares con uso intensivo." },
              },
              {
                "@type": "Question",
                name: "¿Cuánto pesa un camarote metálico?",
                acceptedAnswer: { "@type": "Answer", text: "Un camarote metálico estándar pesa entre 30 y 50 kg según el modelo. Se entrega desarmado: las piezas son manejables y se arman en la habitación. No hay problema para subir en ascensores o escaleras estándar." },
              },
              {
                "@type": "Question",
                name: "¿Los camarotes metálicos son seguros?",
                acceptedAnswer: { "@type": "Answer", text: "Sí. Todos nuestros modelos incluyen barandas de seguridad en el nivel superior y escalera lateral. La estructura de acero garantiza estabilidad y el peso soportado es muy superior al de los modelos de MDF." },
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
          <span className="text-gray-700 font-medium">Metálicos</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Estructura en acero · Durabilidad máxima
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Camarotes Metálicos en Santiago — Entrega con Instalación Incluida
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Fabricados en acero, con barandas de seguridad, escalera y parrilla de madera.
            Entregamos e instalamos en toda la Región Metropolitana. Pagas cuando llega.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-1.5 text-sm text-green-700 font-medium">
              ✓ Pago contra entrega
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5 text-sm text-blue-700 font-medium">
              ✓ Instalación incluida
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 font-medium">
              ✓ {formatPrice(SITE_CONFIG.despacho.precio)} despacho fijo
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ventajas del camarote metálico vs otras opciones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VENTAJAS.map(v => (
              <div key={v.titulo} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all">
                <p className="text-2xl mb-3">{v.icon}</p>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{v.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Todos nuestros modelos de camarote metálico</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map(product => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all flex gap-4">
                <span className="text-3xl">{product.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{product.nombre}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-0.5 whitespace-nowrap">Acero</span>
                  </div>
                  <p className="text-green-600 text-xs mb-2">{product.subtitulo}</p>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">{product.descripcion}</p>
                  <div className="flex gap-2">
                    <a href={getProductWhatsAppUrl(product.nombre)} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#25D366] text-white font-semibold rounded-lg px-3 py-1.5 hover:bg-[#1ebe5d] transition-colors">
                      Consultar precio
                    </a>
                    <Link href={`/${product.slug}`} className="text-xs border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo se fabrica un camarote metálico?</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Los camarotes metálicos se fabrican con tubos de acero rectangulares o circulares de
              distinto calibre (grosor de pared). Los postes verticales usan un calibre mayor para
              soportar el peso vertical, mientras que los travesaños horizontales usan un calibre
              estándar.
            </p>
            <p>
              Las uniones se hacen por soldadura o por sistema de tornillos de expansión, según el
              diseño. La soldadura garantiza mayor rigidez permanente; el sistema de tornillos
              facilita el armado y desarme en el domicilio.
            </p>
            <p>
              El acabado más común es pintura en polvo electroestática (powder coating), que
              se aplica a alta temperatura y resulta en una superficie dura, uniforme y
              resistente a la corrosión. Los colores más habituales en Chile son negro, blanco
              y gris.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes sobre camarotes metálicos</h2>
          <div className="space-y-4">
            {[
              { q: "¿Los camarotes metálicos hacen ruido?", a: "En instalación correcta, no. Las uniones bien apretadas y con las gomas de separación incluidas no producen sonido. Si con el tiempo aparece algún chirrido, generalmente basta con apretar los tornillos." },
              { q: "¿Qué colores están disponibles?", a: "Los modelos estándar vienen en negro, blanco y gris. Consúltanos por WhatsApp la disponibilidad de color para el modelo que te interesa." },
              { q: "¿Un camarote metálico se puede pintar de otro color?", a: "Sí. Con una pintura para metal de aerosol o brocha se puede cambiar el color. Es recomendable limpiar bien la superficie y dar una mano de fondo anticorrosivo primero." },
              { q: "¿Los camarotes metálicos son fríos en invierno?", a: "El metal tiene alta conductividad térmica pero el usuario no está en contacto directo con él, sino con el colchón. En la práctica, no hay diferencia de temperatura perceptible entre dormir en un camarote metálico vs uno de madera." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-2">Cotiza tu camarote metálico ahora</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">
            Te respondemos con el precio exacto en minutos. Sin compromiso.
            Pago cuando el camarote llega instalado en tu casa.
          </p>
          <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-metalico-nordico.jpg" alt="Camarote metálico negro estilo nórdico — fabricante directo Chile" className="w-full object-cover" loading="lazy" />
          </div>
          <WhatsAppButton
            message="Hola, busco un camarote metálico para Santiago. ¿Qué modelos tienen y cuáles son los precios?"
            size="lg"
          >
            Cotizar camarote metálico
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
