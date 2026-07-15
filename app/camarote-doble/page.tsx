import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote Doble | 2 Plazas Abajo + 1 Arriba — Chile",
  description:
    "Camarote metálico con cama de 2 plazas abajo y 1 plaza arriba. El más cómodo para adultos. Disponible en Santiago con pago contra entrega. Consulta por WhatsApp.",
  keywords: [
    "camarote doble",
    "camarote 2 plazas",
    "litera doble",
    "camarote matrimonial",
    "camarote doble Chile",
    "camarote 2 plazas Santiago",
    "litera doble Chile",
    "camarote doble metálico",
    "camarote cama doble abajo",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-doble" },
  openGraph: {
    title: "Camarote Doble | 2 Plazas Abajo en Chile — Santiago",
    description: "Camarote metálico con cama de 2 plazas (matrimonial) abajo y 1 plaza arriba. Pago contra entrega en Santiago.",
    type: "website",
    locale: "es_CL",
  },
};

const imgs = [
  { src: "/images/camarotes/camarote-desmontable-dormitorio-compartido.jpg", alt: "Camarote doble dormitorio compartido adultos" },
  { src: "/images/camarotes/camarote-metalico-hogar-moderno.jpg", alt: "Camarote doble 2 plazas en hogar moderno Santiago" },
  { src: "/images/camarotes/camarote-petalo-dormitorio-moderno.jpg", alt: "Camarote doble en dormitorio moderno decorado" },
  { src: "/images/camarotes/camarote-metalico-nordico.jpg", alt: "Camarote doble estilo nórdico" },
  { src: "/images/camarotes/camarote-desmontable-moderno.jpg", alt: "Camarote doble moderno 2 plazas abajo" },
  { src: "/images/camarotes/camarote-metalico-juvenil.jpg", alt: "Camarote doble para adultos jóvenes" },
  { src: "/images/camarotes/camarote-petalo-nordico.jpg", alt: "Camarote doble nórdico con madera decorativa" },
  { src: "/images/camarotes/camarote-desmontable-premium.jpg", alt: "Camarote doble premium 2 plazas" },
];

const faqs = [
  {
    q: "¿Qué medidas tiene la cama de 2 plazas del camarote doble?",
    a: "La cama inferior de 2 plazas mide aproximadamente 135 cm de ancho. La cama superior puede ser de 1 plaza (90 cm) o de 1,5 plazas según el modelo. Consúltanos las medidas exactas del modelo disponible.",
  },
  {
    q: "¿Es posible que dos adultos duerman en la cama inferior del camarote doble?",
    a: "Sí, la cama inferior de 2 plazas está diseñada para acomodar a dos personas adultas cómodamente, al igual que una cama matrimonial tradicional.",
  },
  {
    q: "¿Qué altura libre queda en la cama inferior?",
    a: "La altura libre entre la cama inferior y la estructura de la cama superior varía según el modelo. Es el espacio para sentarse en la cama y moverse con comodidad. Consulta las medidas exactas al cotizar.",
  },
  {
    q: "¿La cama de arriba puede ser de 1,5 plazas?",
    a: "Sí, en algunos modelos la cama superior puede pedirse en tamaño 1,5 plazas en lugar de 1 plaza estándar. Consulta disponibilidad al cotizar.",
  },
  {
    q: "¿El camarote doble cabe en una pieza estándar?",
    a: "Al ser más ancho que un camarote de 1 plaza, necesitas al menos 150-160 cm de ancho disponible en la pieza. Mide tu espacio y cuéntanoslo para confirmar que el modelo elegido cabe bien.",
  },
  {
    q: "¿Cuánto cuesta el despacho del camarote doble en Santiago?",
    a: `El despacho tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} en Santiago y alrededores. El pago es contra entrega: pagas cuando llega instalado a tu casa.`,
  },
];

export default function CamaroteDoble() {
  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl" },
            { "@type": "ListItem", position: 2, name: "Camarotes", item: "https://rinon.cl/camarotes" },
            { "@type": "ListItem", position: 3, name: "Camarote Doble", item: "https://rinon.cl/camarote-doble" },
          ],
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Camarote Doble Metálico (2 Plazas Abajo)",
          description: "Camarote metálico con cama inferior de 2 plazas y cama superior de 1 plaza. Ideal para adultos que necesitan mayor comodidad en la cama de abajo.",
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

        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Camarote Doble</span>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div className="grid grid-cols-2 gap-2">
            {imgs.slice(0, 4).map((img) => (
              <div key={img.src} className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>

          <div>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold rounded-full px-3 py-1 mb-3">
              Más cómodo
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Camarote Doble</h1>
            <p className="text-green-600 font-medium mb-4">
              2 plazas abajo · 1 plaza (o 1½) arriba
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              El <strong>camarote doble</strong> —también llamado <strong>camarote de 2 plazas</strong> o
              <strong> litera doble</strong>— tiene la cama inferior de tamaño matrimonial (2 plazas),
              lo que lo convierte en el modelo más cómodo para adultos. La cama superior puede ser de
              1 plaza o de 1,5 plazas según el modelo elegido.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-blue-500 font-medium">Cama inferior</p>
                <p className="text-blue-800 font-bold text-sm">2 plazas (~135 cm)</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-gray-400 font-medium">Cama superior</p>
                <p className="text-gray-700 font-bold text-sm">1 plaza o 1½</p>
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
              <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-metalico-hogar-moderno.jpg" alt="Camarote metálico negro en hogar moderno — fabricante directo Chile" className="w-full object-cover" loading="lazy" />
          </div>
          <WhatsAppButton
                size="lg"
                message="Hola, me interesa el Camarote Doble con cama de 2 plazas abajo. ¿Cuál es el precio?"
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
          <h2 className="text-2xl font-bold text-gray-900">¿Qué es un camarote doble y en qué se diferencia del estándar?</h2>
          <p>
            Un <strong>camarote doble</strong> —también llamado <strong>camarote de 2 plazas</strong>,
            <strong> litera doble</strong> o <strong>camarote matrimonial</strong>— es un camarote donde
            la cama inferior tiene tamaño de 2 plazas (aproximadamente 135 cm de ancho), en lugar de la
            plaza estándar de los camarotes tradicionales. La cama superior puede ser de 1 plaza o de
            1,5 plazas según el modelo.
          </p>
          <p>
            La diferencia principal con un camarote estándar es el <strong>mayor confort en la cama inferior</strong>.
            Mientras que una cama de 1 plaza (90 cm) puede resultar estrecha para un adulto, la cama de 2 plazas
            del camarote doble ofrece el mismo espacio que una cama matrimonial tradicional.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">¿Para quién es ideal el camarote de 2 plazas?</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Parejas con hijo:</strong> los padres duermen en la cama doble de abajo mientras el hijo ocupa la cama superior.
            </li>
            <li>
              <strong>Adultos que comparten pieza:</strong> más comodidad para quien duerme abajo sin renunciar a la segunda cama.
            </li>
            <li>
              <strong>Adolescentes mayores:</strong> que ya se sienten incómodos en una cama de 1 plaza pero comparten cuarto.
            </li>
            <li>
              <strong>Pieza de visitas:</strong> versatilidad para alojar una pareja abajo y una persona más arriba.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Camarote doble vs camarote estándar: comparación</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 rounded-tl-lg font-semibold text-gray-700">Característica</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Camarote estándar</th>
                  <th className="text-left p-3 rounded-tr-lg font-semibold text-gray-700">Camarote doble</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ancho cama inferior", "~90 cm (1 plaza)", "~135 cm (2 plazas)"],
                  ["Comodidad adultos", "Básica", "Alta"],
                  ["Espacio que ocupa", "Menor", "Mayor"],
                  ["Ideal para", "Niños / adolescentes", "Adultos / parejas con hijo"],
                ].map(([label, estandar, doble], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-medium text-gray-700 border-t border-gray-100">{label}</td>
                    <td className="p-3 text-gray-500 border-t border-gray-100">{estandar}</td>
                    <td className="p-3 text-green-700 font-medium border-t border-gray-100">{doble}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">¿Qué espacio necesito en mi pieza?</h2>
          <p>
            Por ser más ancho que el camarote estándar, el <strong>camarote de 2 plazas</strong> requiere
            más espacio en la habitación. Como referencia, necesitas al menos <strong>150-160 cm de ancho libre</strong>
            para el camarote más el espacio para circular. Mide tu pieza antes de cotizar y cuéntanos
            las medidas por WhatsApp para confirmar que el modelo elegido es viable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Accesorios disponibles</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Parrillas metálicas adicionales:</strong> hasta 2 por pedido. Precio a consultar.</li>
            <li><strong>Barandas de seguridad extra:</strong> hasta 2. Precio a consultar.</li>
            <li><strong>Cambios de medida:</strong> hasta 3, a {formatPrice(SITE_CONFIG.cambioMedida.precio)} c/u.</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-2">¿El camarote doble te conviene?</h2>
          <p className="text-gray-600 text-sm mb-5">
            Cuéntanos las medidas de tu pieza y el uso que le darás. Te recomendamos el modelo correcto por WhatsApp.
          </p>
          <WhatsAppButton message="Hola, me interesa el camarote doble de 2 plazas abajo. ¿Me pueden cotizar y orientar?">
            Cotizar camarote doble
          </WhatsAppButton>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes — camarote doble</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-1.5">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
          {imgs.slice(4).map((img) => (
            <div key={img.src} className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">También puede interesarte</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/camarote-1-5-plazas", emoji: "🛏️", nombre: "1½ + 1 Plaza" },
              { href: "/camarote-nido", emoji: "🪺", nombre: "Camarote Nido" },
              { href: "/camarote-triple", emoji: "🏗️", nombre: "Camarote Triple" },
              { href: "/cama-alta", emoji: "🪜", nombre: "Cama Alta" },
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
