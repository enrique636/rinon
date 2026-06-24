import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote Titanic en Chile | Camarote Metálico Reforzado — Santiago",
  description:
    "Camarote Titanic metálico: el modelo más robusto y resistente. Estructura reforzada, ideal para uso intensivo. Pago contra entrega en Santiago. Consulta disponibilidad por WhatsApp.",
  keywords: [
    "camarote Titanic",
    "camarote metálico reforzado",
    "camarote metálico Chile",
    "camarote robusto",
    "camarote resistente Chile",
    "camarote Titanic Santiago",
    "camarote metalico Santiago",
    "camarote resistente Santiago",
  ],
  alternates: { canonical: "https://dumar.cl/camarote-titanic" },
  openGraph: {
    title: "Camarote Titanic — Metálico Reforzado | Chile",
    description: "El camarote Titanic: estructura reforzada, máxima resistencia. Pago contra entrega en Santiago.",
    type: "website",
    locale: "es_CL",
  },
};

const faqs = [
  {
    q: "¿Por qué se llama camarote Titanic?",
    a: "El nombre refleja la resistencia y robustez del modelo. El camarote Titanic usa una estructura metálica reforzada con mayor calibre de acero, diseñada para uso intensivo y larga durabilidad.",
  },
  {
    q: "¿En qué se diferencia el Titanic de un camarote estándar?",
    a: "El camarote Titanic tiene una estructura metálica con mayor grosor de tubo o ángulo, mayor capacidad de peso y mayor rigidez que los modelos estándar. Es el modelo elegido cuando la durabilidad es la prioridad.",
  },
  {
    q: "¿Cuánto peso soporta el camarote Titanic?",
    a: "Al ser un modelo reforzado, el Titanic soporta mayor peso que el camarote estándar. Consulta la capacidad de peso exacta del modelo disponible al cotizar.",
  },
  {
    q: "¿Se puede pedir en medidas especiales?",
    a: `Sí. Aceptamos hasta 3 cambios de medida por pedido a ${formatPrice(SITE_CONFIG.cambioMedida.precio)} cada uno. Puedes ajustar el largo, ancho o altura del camarote.`,
  },
  {
    q: "¿Cuánto cuesta el despacho del camarote Titanic en Santiago?",
    a: `El despacho tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} en Santiago y alrededores. El pago es contra entrega: pagas cuando el camarote llega instalado a tu casa.`,
  },
  {
    q: "¿El Titanic incluye parrilla y baranda?",
    a: "Sí, el camarote Titanic incluye parrilla metálica en ambos niveles y barandas de seguridad en el nivel superior. Se pueden agregar hasta 2 parrillas adicionales y hasta 2 barandas extra.",
  },
];

export default function CamaroteTitanicPage() {
  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://dumar.cl" },
            { "@type": "ListItem", position: 2, name: "Camarotes", item: "https://dumar.cl/camarotes" },
            { "@type": "ListItem", position: 3, name: "Camarote Titanic", item: "https://dumar.cl/camarote-titanic" },
          ],
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Camarote Titanic Metálico Reforzado",
          description: "Camarote metálico con estructura reforzada de mayor calibre. El modelo más robusto y resistente de nuestra línea. Fabricado en Chile.",
          brand: { "@type": "Brand", name: "Camarotes Chile" },
          material: "Acero reforzado",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "CLP",
            seller: { "@type": "Organization", name: "Camarotes Chile" },
            areaServed: "Santiago, Chile",
          },
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}} />

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Camarote Titanic</span>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div className="bg-gray-50 rounded-2xl border border-gray-100 aspect-square flex flex-col items-center justify-center gap-3">
            <span className="text-7xl">⚓</span>
            <p className="text-gray-400 text-sm">Fotos próximamente</p>
          </div>

          <div>
            <span className="inline-block bg-gray-900 text-white text-xs font-semibold rounded-full px-3 py-1 mb-3">
              Máxima resistencia
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Camarote Titanic</h1>
            <p className="text-green-600 font-medium mb-2">
              Camarote metálico reforzado · Estructura de mayor calibre
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              El <strong>camarote Titanic</strong> es nuestro modelo más robusto. Con una estructura de acero
              de mayor calibre que el estándar, está diseñado para uso intensivo y larga vida útil.
              El nombre no es casualidad: cuando necesitas un <strong>camarote metálico que dure años</strong>,
              el Titanic es la elección.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-2">
                <p className="text-xs text-gray-400">Arriba</p>
                <p className="text-gray-700 font-bold text-sm">1 plaza</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-2">
                <p className="text-xs text-gray-400">Abajo</p>
                <p className="text-gray-700 font-bold text-sm">1 plaza</p>
              </div>
              <div className="bg-gray-900 text-white rounded-xl px-3 py-2">
                <p className="text-xs text-gray-400">Estructura</p>
                <p className="font-bold text-sm">Reforzada</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-800 font-bold">Pago contra entrega</p>
                  <p className="text-green-600 text-sm">Despacho {formatPrice(SITE_CONFIG.despacho.precio)} · Solo Santiago</p>
                </div>
                <span className="text-2xl">🚚</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <WhatsAppButton
                size="lg"
                message="Hola, me interesa el Camarote Titanic. ¿Cuál es el precio y tienen disponibilidad en Santiago?"
                className="w-full justify-center"
              >
                Consultar precio por WhatsApp
              </WhatsAppButton>
              <Link href="/cotizar"
                className="w-full text-center py-3.5 border-2 border-gray-200 hover:border-gray-400 text-gray-700 font-semibold rounded-full transition-colors">
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>

        {/* Contenido SEO */}
        <div className="max-w-3xl mb-14 space-y-5 text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">¿Qué es el camarote Titanic?</h2>
          <p>
            El <strong>camarote Titanic</strong> es el modelo de mayor robustez dentro de nuestra línea
            de <strong>camarotes metálicos en Chile</strong>. A diferencia de los modelos estándar,
            el Titanic utiliza tubos o ángulos de acero de mayor espesor y calibre, lo que se traduce
            en mayor rigidez, mayor capacidad de peso y mayor durabilidad en el tiempo.
          </p>
          <p>
            Es un <strong>camarote metálico reforzado</strong> diseñado para quienes no quieren
            preocuparse por el mantenimiento ni por reemplazar el mueble en unos años.
            El Titanic está construido para durar.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">¿Para quién es ideal el camarote Titanic?</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Familias con uso intensivo:</strong> varios hijos que suben y bajan del camarote
              con frecuencia, movimientos bruscos, uso diario exigente.
            </li>
            <li>
              <strong>Residencias, pensiones y hospedajes:</strong> donde el camarote va a ser usado por
              distintas personas durante años, con desgaste mayor al de un hogar familiar.
            </li>
            <li>
              <strong>Adultos con mayor peso corporal:</strong> la estructura reforzada soporta más
              peso que el modelo estándar, con mayor margen de seguridad.
            </li>
            <li>
              <strong>Quienes buscan la mejor relación calidad-durabilidad:</strong> invierten más
              una vez, en lugar de reemplazar cada pocos años.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Camarote Titanic vs camarote estándar</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mt-2">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 rounded-tl-lg">Característica</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Camarote estándar</th>
                  <th className="text-left p-3 font-semibold text-gray-700 rounded-tr-lg">Camarote Titanic</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Calibre de estructura", "Estándar", "Mayor calibre / reforzado"],
                  ["Capacidad de peso", "Estándar", "Superior"],
                  ["Rigidez", "Buena", "Muy alta"],
                  ["Durabilidad", "Buena", "Excelente"],
                  ["Precio", "Menor", "Consultar"],
                  ["Ideal para", "Uso familiar normal", "Uso intensivo / adultos"],
                ].map(([label, est, tit], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-medium text-gray-700 border-t border-gray-100">{label}</td>
                    <td className="p-3 text-gray-500 border-t border-gray-100">{est}</td>
                    <td className="p-3 text-gray-800 font-medium border-t border-gray-100">{tit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Fabricación en Chile: por qué importa</h2>
          <p>
            Los camarotes metálicos importados pueden parecer más baratos al principio, pero la diferencia
            de calidad en el acero y los acabados se nota a los pocos meses de uso intensivo.
            El <strong>camarote metálico chileno</strong> —especialmente el Titanic— está fabricado
            con materiales que cumplen los estándares locales y con el tipo de uso real que se le da
            en hogares chilenos.
          </p>
          <p>
            Además, al comprar fabricación nacional puedes pedir medidas personalizadas, hablar
            directamente con quien lo fabrica y tener soporte postventa real.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Accesorios disponibles</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Parrillas metálicas adicionales:</strong> hasta 2 por pedido. Precio a consultar.</li>
            <li><strong>Barandas de seguridad adicionales:</strong> hasta 2. Precio a consultar.</li>
            <li><strong>Cambios de medida:</strong> hasta 3, a {formatPrice(SITE_CONFIG.cambioMedida.precio)} c/u.</li>
          </ul>
        </div>

        {/* CTA intermedio */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 text-center mb-14">
          <p className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-2">Pago contra entrega · Santiago</p>
          <h2 className="text-2xl font-bold mb-3">¿Quieres cotizar el Camarote Titanic?</h2>
          <p className="text-gray-300 text-sm mb-6 max-w-xl mx-auto">
            Cuéntanos las medidas de tu pieza y el uso que le darás. Te enviamos precio y disponibilidad en minutos.
          </p>
          <WhatsAppButton
            message="Hola, quiero cotizar el Camarote Titanic para Santiago. ¿Cuáles son los precios y plazos?"
            size="lg"
          >
            Cotizar por WhatsApp
          </WhatsAppButton>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes — camarote Titanic</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-1.5">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Otros modelos */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">También puede interesarte</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/camarote-nido", emoji: "🪺", nombre: "Camarote Nido" },
              { href: "/camarote-doble", emoji: "👫", nombre: "Camarote Doble" },
              { href: "/camarote-con-escritorio", emoji: "📚", nombre: "Con Escritorio" },
              { href: "/camarote-triple", emoji: "🏗️", nombre: "Triple" },
            ].map((p) => (
              <Link key={p.href} href={p.href}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all text-center">
                <span className="text-2xl block mb-1">{p.emoji}</span>
                <p className="text-sm font-medium text-gray-700">{p.nombre}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
