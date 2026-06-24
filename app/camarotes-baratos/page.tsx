import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes Baratos en Santiago — Pago Contra Entrega | Camarotes Chile",
  description:
    "¿Buscas un camarote barato en Santiago? Compara modelos, consulta precios reales por WhatsApp y paga solo cuando te llega instalado. Sin costos ocultos.",
  keywords: [
    "camarotes baratos Santiago",
    "camarote barato Chile",
    "literas baratas Santiago",
    "camarote económico Chile",
    "camarote precio Santiago",
    "camarote barato pago contra entrega",
    "donde comprar camarote barato Santiago",
  ],
  alternates: { canonical: "https://dumar.cl/camarotes-baratos" },
  openGraph: {
    title: "Camarotes Baratos en Santiago — Precios Reales y Pago Contra Entrega",
    description: "Camarotes metálicos con precios reales, sin costos ocultos. Pago cuando llega instalado.",
    type: "website",
    locale: "es_CL",
  },
};

export default function CamarotesBaratosPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto cuesta un camarote en Santiago?",
                acceptedAnswer: { "@type": "Answer", text: "El precio de un camarote metálico varía según el modelo. Consulta por WhatsApp para obtener el precio exacto de cada modelo. El costo de despacho es fijo: $20.000 con instalación incluida." },
              },
              {
                "@type": "Question",
                name: "¿Cómo sé si el precio es justo al comprar un camarote barato?",
                acceptedAnswer: { "@type": "Answer", text: "Un camarote barato de calidad tiene precio accesible pero sin recortar en el calibre del acero, las soldaduras ni las barandas de seguridad. Desconfía de ofertas muy por debajo del mercado sin fotos reales de la estructura." },
              },
              {
                "@type": "Question",
                name: "¿El camarote barato tiene la misma calidad?",
                acceptedAnswer: { "@type": "Answer", text: "Depende. En nuestros modelos, el precio más accesible corresponde al camarote estándar, que usa el mismo acero de calidad que los modelos superiores. Lo que varía es el diseño (nido, triple, escritorio), no la calidad del acero ni las soldaduras." },
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
          <span className="text-gray-700 font-medium">Camarotes Baratos</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarotes Baratos en Santiago — Precio Real, Sin Costos Ocultos
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Cuando buscas un camarote barato, la trampa más común es comparar precios sin
            considerar lo que incluye: despacho, instalación, calidad del acero, barandas.
            Aquí te explicamos cómo comparar bien.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <strong>Importante:</strong> No inventamos precios en esta página. Los precios reales de cada modelo
            los recibes por WhatsApp. Lo que sí te podemos decir: el despacho con instalación incluida
            cuesta siempre <strong>{formatPrice(SITE_CONFIG.despacho.precio)}</strong>, sin importar el modelo.
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Qué incluye el precio de nuestros camarotes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { titulo: "Estructura metálica completa", desc: "Postes, travesaños, escalera y barandas de seguridad. Todo en acero." },
              { titulo: "Parrillas de madera", desc: "Base de apoyo para el colchón en todos los niveles. Sin necesidad de sommier." },
              { titulo: "Despacho a Santiago", desc: `Costo fijo de ${formatPrice(SITE_CONFIG.despacho.precio)} para toda la Región Metropolitana.` },
              { titulo: "Instalación en tu domicilio", desc: "El equipo arma el camarote en tu habitación. No tienes que hacer nada." },
              { titulo: "Pago contra entrega", desc: "Pagas cuando el camarote está instalado y conforme. Nada antes." },
              { titulo: "Sin costos ocultos", desc: "El precio que te cotizamos es el precio final. No hay cargos sorpresa." },
            ].map(item => (
              <div key={item.titulo} className="flex gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.titulo}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Cómo evaluar un camarote barato antes de comprar
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            No todo camarote barato es un mal camarote. Pero hay señales de alerta que
            debes conocer antes de tomar una decisión:
          </p>
          <div className="space-y-3">
            {[
              { alerta: "Precio muy bajo sin fotos reales de la estructura", explicacion: "Las fotos de catálogo no muestran el calibre real del acero. Si no hay fotos de soldaduras y uniones, desconfía." },
              { alerta: "Despacho e instalación no incluidos en el precio", explicacion: "Un camarote que cuesta poco pero cobra aparte el despacho e instalación puede terminar siendo más caro que una opción que los incluye." },
              { alerta: "Pago por adelantado obligatorio", explicacion: "Con pago contra entrega, el riesgo es mínimo. Si te piden pagar antes de ver el producto, considera los riesgos." },
              { alerta: "Sin información del calibre del acero", explicacion: "El calibre (grosor del tubo) determina la robustez. Un camarote muy barato puede usar acero de menor calibre que se deforma con el uso." },
            ].map(item => (
              <div key={item.alerta} className="bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="font-semibold text-red-800 text-sm mb-1">⚠️ {item.alerta}</p>
                <p className="text-red-700 text-xs leading-relaxed">{item.explicacion}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Todos nuestros modelos con precio por WhatsApp</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{product.emoji}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{product.nombre}</h3>
                    <p className="text-green-600 text-xs">{product.subtitulo}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{product.descripcion}</p>
                <a
                  href={getProductWhatsAppUrl(product.nombre)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold rounded-lg text-xs transition-colors"
                >
                  Consultar precio por WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes sobre camarotes baratos</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto cuesta un camarote en Santiago?", a: "El precio varía según el modelo. Consulta por WhatsApp para recibir la cotización exacta de cada modelo. El despacho con instalación incluida cuesta $20.000 para toda la Región Metropolitana." },
              { q: "¿El camarote más barato es de menor calidad?", a: "No necesariamente. En nuestros modelos, el precio más accesible corresponde al camarote estándar (1+1 plaza), que usa la misma calidad de acero que los modelos superiores. Lo que varía es la complejidad del diseño." },
              { q: "¿Dónde puedo comprar camarotes baratos en Santiago?", a: "Puedes cotizar directamente con nosotros por WhatsApp. Todas las cotizaciones son sin compromiso y recibes el precio final antes de confirmar el pedido." },
              { q: "¿Hay camarotes baratos con despacho a domicilio en Santiago?", a: `Sí. Nuestro despacho cuesta ${formatPrice(SITE_CONFIG.despacho.precio)} e incluye la instalación del camarote en tu habitación. Pagas todo (camarote + despacho) cuando te llega instalado.` },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Cotiza el precio de tu camarote ahora</h2>
          <p className="text-gray-600 text-sm mb-5 max-w-md mx-auto">
            Sin compromiso. Cuéntanos qué modelo buscas y te respondemos con el precio en minutos.
            Pago contra entrega — pagas cuando llega instalado.
          </p>
          <WhatsAppButton
            message="Hola, busco un camarote para Santiago. ¿Cuáles son los precios de los diferentes modelos?"
            size="lg"
          >
            Consultar precios por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
