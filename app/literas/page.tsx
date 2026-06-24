import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Literas en Santiago — Pago Contra Entrega | Camarotes Chile",
  description:
    "Literas metálicas en Santiago con entrega e instalación incluida. Modelos nido, triple, con escritorio, cama alta y más. Pago cuando te llega. Toda la RM.",
  keywords: [
    "literas Santiago",
    "literas Chile",
    "litera metálica Santiago",
    "litera con escritorio Chile",
    "litera nido Santiago",
    "cucheta Santiago",
    "cucheta Chile",
    "litera pago contra entrega",
    "donde comprar literas Santiago",
  ],
  alternates: { canonical: "https://dumar.cl/literas" },
  openGraph: {
    title: "Literas en Santiago — Instalación Incluida | Camarotes Chile",
    description: "Literas metálicas con entrega e instalación en Santiago. Pago contra entrega.",
    type: "website",
    locale: "es_CL",
  },
};

export default function LiterasPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Qué diferencia hay entre litera, camarote y cucheta?", acceptedAnswer: { "@type": "Answer", text: "Son tres palabras para el mismo mueble: dos o más camas apiladas. En Chile se usa más 'camarote', en Argentina 'cucheta', y en España 'litera'. Todos los modelos que ofrecemos son literas metálicas con entrega e instalación incluida en Santiago." } },
              { "@type": "Question", name: "¿Venden literas con despacho a toda la Región Metropolitana?", acceptedAnswer: { "@type": "Answer", text: `Sí. El despacho tiene un costo fijo de ${formatPrice(SITE_CONFIG.despacho.precio)} e incluye instalación en el domicilio. Cubrimos toda la Región Metropolitana.` } },
            ],
          }),
        }}
      />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Literas</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Literas en Santiago — Entrega e Instalación Incluida
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Literas metálicas con despacho a toda la Región Metropolitana. Pagas cuando llega
            instalada en tu domicilio. Sin adelanto, sin sorpresas.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-1.5 text-sm text-green-700 font-medium">✓ Pago contra entrega</div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5 text-sm text-blue-700 font-medium">✓ Instalación incluida</div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 font-medium">✓ {formatPrice(SITE_CONFIG.despacho.precio)} despacho fijo</div>
          </div>
        </div>

        <div className="mb-10 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
          <strong>¿Litera, camarote o cucheta?</strong> En Chile se dice "camarote", en Argentina "cucheta" y en España "litera". Es el mismo mueble. Todos los modelos de esta página son literas metálicas fabricadas en acero.
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Todos nuestros modelos de litera</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map(product => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all flex gap-4">
                <span className="text-3xl">{product.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 mb-0.5">{product.nombre}</h3>
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

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿No sabes qué litera elegir?</h2>
          <p className="text-gray-600 mb-4">Usa nuestra calculadora gratuita: ingresa las medidas de tu habitación y te mostramos qué modelos caben sin problema.</p>
          <Link href="/calculadora" className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-gray-800 transition-colors">
            Calcular qué litera cabe en mi pieza →
          </Link>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes sobre literas en Chile</h2>
          <div className="space-y-4">
            {[
              { q: "¿Qué diferencia hay entre litera, camarote y cucheta?", a: "Son sinónimos: la misma estructura de dos o más camas apiladas. En Chile el término más usado es 'camarote', mientras que en Argentina se dice 'cucheta' y en España 'litera'. Todos nuestros modelos son literas metálicas." },
              { q: "¿Las literas que venden son para niños o también para adultos?", a: "Todos nuestros modelos son aptos para adultos. El acero soporta el peso de dos adultos sin problema. Los modelos estándar soportan al menos 100 kg por nivel." },
              { q: `¿Cuánto cuesta el despacho de una litera a Santiago?`, a: `El despacho tiene un costo fijo de ${formatPrice(SITE_CONFIG.despacho.precio)} para toda la Región Metropolitana, independiente del modelo. Incluye instalación en el domicilio.` },
              { q: "¿Hay literas de tres pisos en Santiago?", a: "Sí. El camarote triple tiene tres niveles. Requiere un techo de al menos 185 cm para que el ocupante del nivel superior pueda sentarse sin problemas." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Cotiza tu litera ahora</h2>
          <p className="text-gray-600 text-sm mb-5 max-w-md mx-auto">
            Sin compromiso. Cuéntanos qué modelo buscas y te respondemos con el precio.
            Pagas cuando llega instalada.
          </p>
          <WhatsAppButton message="Hola, busco una litera / camarote metálico para Santiago. ¿Qué modelos tienen y cuáles son los precios?" size="lg">
            Cotizar litera por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
