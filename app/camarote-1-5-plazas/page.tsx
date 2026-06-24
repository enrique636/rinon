import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote Plaza y Media en Chile | 1.5 + 1 Plaza — Santiago Pago Contra Entrega",
  description:
    "Camarote de plaza y media metálico: 1.5 plazas arriba + 1 plaza abajo (o viceversa). Más comodidad sin ocupar más espacio. Despacho $20.000 en Santiago. Pago contra entrega.",
  keywords: [
    "camarote plaza y media",
    "camarote 1.5 plazas",
    "camarote plaza y media con plaza",
    "camarote plaza y media Chile",
    "litera plaza y media",
    "camarote 1 y media plaza",
    "camarote plaza y media Santiago",
    "camarote plaza y media metálico",
  ],
  alternates: { canonical: "https://dumar.cl/camarote-1-5-plazas" },
  openGraph: {
    title: "Camarote Plaza y Media | 1.5 + 1 Plaza en Chile — Santiago",
    description: "Camarote metálico con cama de 1.5 plazas. Más ancho que el estándar, más cómodo para adolescentes y adultos. Pago contra entrega en Santiago.",
    type: "website",
    locale: "es_CL",
  },
};

const faqs = [
  {
    q: "¿Cuánto mide exactamente una plaza y media?",
    a: "Una cama de plaza y media (1.5 plazas) mide aproximadamente 105-110 cm de ancho, a diferencia de la plaza estándar de 90 cm y la cama de 2 plazas de 135 cm. Consulta las medidas exactas del modelo disponible al cotizar.",
  },
  {
    q: "¿Cuál de las dos camas es de 1.5 plazas — la de arriba o la de abajo?",
    a: "Depende del modelo. El más habitual tiene la cama de 1.5 plazas arriba (más difícil de acceder, ideal para adolescentes o adultos) y la plaza estándar abajo (para el más pequeño). También existe la combinación inversa. Consulta la disponibilidad de cada configuración al cotizar.",
  },
  {
    q: "¿El camarote plaza y media es más pesado o voluminoso que el estándar?",
    a: "Es ligeramente más ancho, pero la diferencia en peso y volumen no es significativa. El precio es similar al camarote estándar. La estructura sigue siendo modular y entra por cualquier puerta estándar.",
  },
  {
    q: "¿Desde qué edad es recomendable la cama de plaza y media?",
    a: "La cama de plaza y media en el nivel superior es recomendable a partir de los 6-8 años, igual que cualquier cama en altura. Para adolescentes y adultos que antes usaban una plaza estándar, la comodidad mejora notablemente.",
  },
  {
    q: "¿Se puede pedir en medidas personalizadas?",
    a: `Sí. Aceptamos hasta 3 cambios de medida por pedido a ${formatPrice(SITE_CONFIG.cambioMedida.precio)} cada uno. Esto permite adaptar el largo del camarote o ajustar alturas según el techo disponible.`,
  },
  {
    q: "¿Cuánto cuesta el despacho en Santiago?",
    a: `El despacho tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} en Santiago y alrededores. El pago es contra entrega: pagas cuando el camarote llega instalado a tu casa.`,
  },
];

export default function Camarote15PlazasPage() {
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
            { "@type": "ListItem", position: 3, name: "Camarote Plaza y Media", item: "https://dumar.cl/camarote-1-5-plazas" },
          ],
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Camarote Plaza y Media Metálico",
          description: "Camarote metálico con cama de 1.5 plazas (105-110 cm) y cama de 1 plaza. Más cómodo que el estándar, ideal para adolescentes y adultos jóvenes.",
          brand: { "@type": "Brand", name: "Camarotes Chile" },
          material: "Acero",
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
          <span className="text-gray-700 font-medium">Camarote Plaza y Media</span>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div className="bg-gray-50 rounded-2xl border border-gray-100 aspect-square flex flex-col items-center justify-center gap-3">
            <span className="text-7xl">🛏️</span>
            <p className="text-gray-400 text-sm">Fotos próximamente</p>
          </div>

          <div>
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold rounded-full px-3 py-1 mb-3">
              Más cómodo
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Camarote Plaza y Media
            </h1>
            <p className="text-green-600 font-medium mb-2">
              También: camarote 1.5 plazas · camarote plaza y media con plaza
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              El <strong>camarote plaza y media</strong> ofrece exactamente eso: una de las dos camas
              es de 1.5 plazas (~105 cm de ancho) en lugar de la plaza estándar (90 cm).
              Ideal para adolescentes que ya crecieron de la plaza simple pero no necesitan una cama doble.
              Mismo espacio, más comodidad.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 text-center">
                <p className="text-xs text-amber-500">Nivel superior</p>
                <p className="text-amber-800 font-bold text-sm">1.5 plazas (~105 cm)</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-center">
                <p className="text-xs text-gray-400">Nivel inferior</p>
                <p className="text-gray-700 font-bold text-sm">1 plaza (90 cm)</p>
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
                message="Hola, me interesa el Camarote Plaza y Media (1.5 plazas). ¿Cuál es el precio y disponibilidad?"
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
          <h2 className="text-2xl font-bold text-gray-900">¿Qué es un camarote de plaza y media?</h2>
          <p>
            Un <strong>camarote plaza y media</strong> —también llamado <strong>camarote 1.5 plazas</strong>
            o <strong>camarote de plaza y media con plaza</strong>— es un camarote donde al menos uno de los
            dos niveles de cama tiene un ancho de 1.5 plazas (~105-110 cm) en lugar del estándar de 90 cm.
          </p>
          <p>
            El modelo más común tiene la cama de 1.5 plazas en el nivel superior y la plaza estándar abajo,
            aunque también existe la configuración inversa. Algunos modelos tienen plaza y media en ambos niveles.
            Consulta al cotizar qué configuración tenemos disponible.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">¿Para quién es ideal?</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Adolescentes que crecieron de la plaza simple:</strong> ya se sienten apretados en 90 cm
              pero no necesitan una cama matrimonial. Los 105 cm de la plaza y media son perfectos.
            </li>
            <li>
              <strong>Adultos jóvenes</strong> que comparten pieza y quieren más comodidad en la cama superior
              sin cambiar el tamaño total del camarote.
            </li>
            <li>
              <strong>Niños con diferencia de edades:</strong> el mayor va arriba con más espacio, el menor
              abajo con plaza estándar. Lógico y cómodo.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Camarote plaza y media vs. opciones alternativas</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mt-2">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 rounded-tl-lg">Modelo</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Ancho</th>
                  <th className="text-left p-3 font-semibold text-gray-700 rounded-tr-lg">Ideal para</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Camarote estándar", "90 cm c/u", "Niños hasta 10-12 años"],
                  ["Camarote 1.5 plazas", "105 cm (un nivel)", "Adolescentes y adultos"],
                  ["Camarote doble", "135 cm (inferior)", "Adultos / parejas con hijo"],
                ].map(([modelo, ancho, ideal], i) => (
                  <tr key={modelo} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-medium text-gray-700 border-t border-gray-100">{modelo}</td>
                    <td className="p-3 text-gray-500 border-t border-gray-100">{ancho}</td>
                    <td className="p-3 text-gray-600 border-t border-gray-100">{ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Accesorios disponibles</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Parrillas metálicas:</strong> hasta 2 adicionales por pedido. Precio a consultar.</li>
            <li><strong>Barandas adicionales:</strong> hasta 2. Precio a consultar.</li>
            <li><strong>Cambios de medida:</strong> hasta 3, a {formatPrice(SITE_CONFIG.cambioMedida.precio)} c/u. Para ajustar largo o altura.</li>
          </ul>
        </div>

        {/* CTA intermedio */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 text-center mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-2">¿Plaza y media o doble?</h2>
          <p className="text-gray-600 text-sm mb-5">
            No siempre es obvio. Cuéntanos quién va a usar el camarote y te recomendamos la mejor opción para ese caso.
          </p>
          <WhatsAppButton
            message="Hola, necesito orientación: ¿camarote plaza y media o camarote doble? Es para [descripción]."
          >
            Asesoría gratis por WhatsApp
          </WhatsAppButton>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes — camarote plaza y media</h2>
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
              { href: "/camarote-doble", emoji: "👫", nombre: "Camarote Doble" },
              { href: "/camarote-nido", emoji: "🪺", nombre: "Camarote Nido" },
              { href: "/camarote-triple", emoji: "🏗️", nombre: "Triple" },
              { href: "/camarote-con-escritorio", emoji: "📚", nombre: "Con Escritorio" },
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
