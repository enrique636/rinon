import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio | Cama Arriba, Escritorio Abajo",
  description:
    "Camarote con escritorio metálico fabricado en Chile. Cama alta con escritorio integrado, ideal para estudiantes, gamers y home office. Pago contra entrega en Santiago. Consulta ahora.",
  keywords: [
    "camarote con escritorio",
    "cama alta con escritorio",
    "cama loft con escritorio",
    "cama con escritorio abajo",
    "camarote escritorio Santiago",
    "camarote con escritorio Chile",
    "cama alta con escritorio Santiago",
    "camarote estudiante",
    "camarote gamer escritorio",
    "camarote home office",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio" },
  openGraph: {
    title: "Camarote con Escritorio — Cama Alta con Escritorio en Chile",
    description: "Camarote metálico con escritorio integrado debajo de la cama. Para estudiantes, gamers y home office. Pago contra entrega en Santiago.",
    type: "website",
    locale: "es_CL",
  },
};

const useCases = [
  { icon: "🎓", title: "Estudiantes universitarios", desc: "Escritorio amplio para laptop, libros y materiales. Cama cómoda justo encima." },
  { icon: "🎮", title: "Setup gamer", desc: "PC, monitores y periféricos debajo de la cama. El espacio ideal sin sacrificar comodidad." },
  { icon: "🏠", title: "Home office", desc: "Transforma tu pieza en dormitorio + oficina en un solo módulo vertical." },
  { icon: "📐", title: "Piezas pequeñas", desc: "Libera el 100% del espacio del piso. La solución para departamentos compactos." },
];

const imgs = [
  { src: "/images/camarotes/camarote-escritorio-economico-negro.jpg", alt: "Camarote con escritorio negro — cama arriba escritorio abajo" },
  { src: "/images/camarotes/camarote-escritorio-full-gamer.jpg", alt: "Camarote con escritorio setup gamer" },
  { src: "/images/camarotes/camarote-escritorio-full-home-office.jpg", alt: "Camarote con escritorio home office" },
  { src: "/images/camarotes/camarote-escritorio-economico-universitario.jpg", alt: "Camarote con escritorio universitario" },
  { src: "/images/camarotes/camarote-escritorio-full-productividad.jpg", alt: "Camarote con escritorio para productividad y estudio" },
  { src: "/images/camarotes/camarote-escritorio-economico-juvenil.jpg", alt: "Camarote con escritorio juvenil adolescente" },
  { src: "/images/camarotes/camarote-escritorio-full-nordico.jpg", alt: "Camarote con escritorio estilo nórdico" },
  { src: "/images/camarotes/camarote-con-escritorio-economico-real.jpg", alt: "Camarote con escritorio económico foto real de fábrica" },
];

const faqs = [
  {
    q: "¿Qué es exactamente un camarote con escritorio?",
    a: "Un camarote con escritorio (también llamado cama alta con escritorio, cama loft con escritorio o cama con escritorio abajo) es una estructura metálica que eleva la cama al nivel superior y tiene un escritorio integrado en el espacio inferior. No hay segunda cama abajo: hay un escritorio de trabajo.",
  },
  {
    q: "¿Cuánto espacio libre queda para el escritorio?",
    a: "Depende del modelo, pero en general entre 90 y 120 cm de altura libre entre el escritorio y la base de la cama. Suficiente para sentarse cómodamente con una silla estándar o de gaming. Consulta las medidas exactas al cotizar.",
  },
  {
    q: "¿Cabe un monitor de escritorio bajo la cama?",
    a: "Sí, en la mayoría de los modelos cabe perfectamente un monitor de 24-27 pulgadas. Para setups con monitores más grandes o brazos articulados, consulta las medidas específicas del modelo.",
  },
  {
    q: "¿La cama aguanta el peso de un adulto?",
    a: "Sí. Nuestros camarotes con escritorio están fabricados en acero y diseñados para soportar el peso de adultos. Consulta el peso máximo específico del modelo que te interesa.",
  },
  {
    q: "¿Se puede pedir con medidas especiales?",
    a: `Sí. Aceptamos hasta 3 cambios de medida por pedido a ${formatPrice(SITE_CONFIG.cambioMedida.precio)} cada uno. Ideal si tu pieza tiene medidas o altura del techo especiales.`,
  },
  {
    q: "¿Cuánto cuesta el despacho en Santiago?",
    a: `El despacho tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} en Santiago y alrededores. El pago es contra entrega: pagas cuando el camarote llega instalado a tu casa.`,
  },
  {
    q: "¿Qué altura de techo necesito?",
    a: "Como mínimo 210-220 cm de techo para que la cama quede cómoda y haya espacio suficiente para sentarse en el escritorio. Si tienes techos más bajos, consulta por nuestras opciones de cambio de medida.",
  },
];

export default function CamaroteConEscritorioPage() {
  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl" },
            { "@type": "ListItem", position: 2, name: "Camarotes", item: "https://rinon.cl/camarotes" },
            { "@type": "ListItem", position: 3, name: "Camarote con Escritorio", item: "https://rinon.cl/camarote-con-escritorio" },
          ],
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Camarote con Escritorio Metálico",
          description: "Cama alta metálica con escritorio integrado debajo. Ideal para estudiantes, gamers y home office. Fabricación chilena.",
          provider: {
            "@type": "LocalBusiness",
            name: "Camarotes Chile",
            address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
          },
          serviceType: "Fabricación de camarotes metálicos",
          areaServed: { "@type": "Country", name: "Chile" },
          brand: { "@type": "Brand", name: "Camarotes Chile" },
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
          <span className="text-gray-700 font-medium">Camarote con Escritorio</span>
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
            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold rounded-full px-3 py-1 mb-3">
              Estudiante / Gamer / Home office
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Camarote con Escritorio
            </h1>
            <p className="text-green-600 font-medium mb-2">
              También: cama alta con escritorio · cama loft con escritorio · cama con escritorio abajo
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              El <strong>camarote con escritorio</strong> eleva la cama al nivel superior y deja el espacio
              inferior libre para un escritorio de trabajo integrado en la propia estructura.
              Una sola cama arriba, escritorio completo abajo. La solución más inteligente para
              piezas pequeñas donde el espacio es limitado.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-2">
                <p className="text-xs text-gray-400">Arriba</p>
                <p className="text-gray-700 font-bold text-sm">1 plaza (cama)</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl px-3 py-2">
                <p className="text-xs text-green-500">Abajo</p>
                <p className="text-green-700 font-bold text-sm">Escritorio integrado</p>
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
                message="Hola, me interesa un camarote con escritorio. ¿Qué modelos tienen y cuál es el precio?"
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

        {/* Casos de uso */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">¿Para quién es ideal?</h2>
          <p className="text-gray-500 mb-6">El camarote con escritorio sirve para múltiples perfiles.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="text-3xl mb-2">{uc.icon}</p>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{uc.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contenido SEO principal */}
        <div className="max-w-3xl mb-14 space-y-5 text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">¿Qué es un camarote con escritorio?</h2>
          <p>
            Un <strong>camarote con escritorio</strong> —también llamado <strong>cama alta con escritorio</strong>,
            <strong> cama loft con escritorio</strong> o <strong>cama con escritorio abajo</strong>— es una
            estructura metálica que posiciona la cama en el nivel superior y coloca un escritorio de trabajo
            integrado en el espacio inferior. No hay segunda cama: el espacio debajo es completamente para trabajar,
            estudiar o armar un setup.
          </p>
          <p>
            La diferencia con una <strong>cama alta estándar</strong> es que el escritorio viene incorporado
            en la propia estructura metálica, dando mayor estabilidad y un acabado más limpio que poner un
            escritorio suelto debajo de la cama. Todo es un único módulo.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">¿Por qué el camarote con escritorio es tan popular en Chile?</h2>
          <p>
            El boom de los departamentos pequeños en Santiago, sumado al aumento del trabajo y estudio desde casa,
            ha convertido al <strong>camarote con escritorio en Santiago</strong> en uno de los muebles más
            buscados del mercado. La razón es simple: en 2 metros de largo por 90 cm de ancho resuelves
            el problema de la cama, el escritorio y el espacio de trabajo, sin ocupar más superficie de piso.
          </p>
          <p>
            Para un estudiante universitario que arrienda una pieza de 10-12 m², o para alguien que trabaja
            desde casa en un departamento de 1 dormitorio, el camarote con escritorio no es un lujo:
            es la solución más práctica disponible.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">¿Qué considerar antes de comprar?</h2>
          <h3 className="text-lg font-semibold text-gray-800">1. Altura del techo</h3>
          <p>
            Lo más importante. Necesitas suficiente altura para que la cama quede cómoda arriba y
            el escritorio tenga espacio para sentarse abajo. Como referencia mínima: 210-220 cm de techo.
            Mide antes de comprar y cuéntanos la medida al cotizar.
          </p>
          <h3 className="text-lg font-semibold text-gray-800">2. ¿Laptop o PC de escritorio?</h3>
          <p>
            Si usas solo laptop, la profundidad estándar del escritorio es suficiente. Si tienes monitor(es)
            de escritorio, necesitas mayor profundidad y revisar la altura libre bajo la cama para que el monitor
            entre cómodamente. Consúltanos y te orientamos según tu setup.
          </p>
          <h3 className="text-lg font-semibold text-gray-800">3. Medidas del espacio disponible</h3>
          <p>
            Mide el largo, ancho y alto disponible en tu pieza. Con esos tres datos podemos orientarte
            sobre qué modelo encaja mejor, o si necesitas un cambio de medida.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Camarote con escritorio vs cama + escritorio separados</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mt-2">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 rounded-tl-lg">Característica</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Cama + escritorio separados</th>
                  <th className="text-left p-3 font-semibold text-gray-700 rounded-tr-lg">Camarote con escritorio</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Espacio en el piso", "Ocupa el doble", "Un solo módulo compacto"],
                  ["Estabilidad escritorio", "Depende de la mesa", "Fija a la estructura"],
                  ["Estética", "Dos muebles distintos", "Diseño integrado y limpio"],
                  ["Precio total", "Suma de ambos", "Un solo mueble"],
                  ["Flexibilidad", "Puedes mover por separado", "Todo va junto"],
                ].map(([label, sep, cama], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-medium text-gray-700 border-t border-gray-100">{label}</td>
                    <td className="p-3 text-gray-500 border-t border-gray-100">{sep}</td>
                    <td className="p-3 text-green-700 font-medium border-t border-gray-100">{cama}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Accesorios disponibles</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Parrillas metálicas adicionales:</strong> hasta 2 por pedido. Precio a consultar.</li>
            <li><strong>Barandas de seguridad extra:</strong> hasta 2. Precio a consultar.</li>
            <li><strong>Cambios de medida:</strong> hasta 3, a {formatPrice(SITE_CONFIG.cambioMedida.precio)} cada uno. Para ajustar el camarote a tu espacio exacto.</li>
          </ul>
        </div>

        {/* CTA intermedio */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 text-center mb-14">
          <p className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-2">Pago contra entrega</p>
          <h2 className="text-2xl font-bold mb-3">¿Listo para cotizar tu camarote con escritorio?</h2>
          <p className="text-gray-300 text-sm mb-6 max-w-xl mx-auto">
            Cuéntanos las medidas de tu pieza y el uso que le darás. Te respondemos en minutos con opciones y precio.
          </p>
          <WhatsAppButton
            message="Hola, quiero cotizar un camarote con escritorio para Santiago. Mi pieza mide [X] de alto."
            size="lg"
          >
            Cotizar por WhatsApp ahora
          </WhatsAppButton>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Preguntas frecuentes — camarote con escritorio
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-1.5">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Blog relacionado */}
        <div className="mb-14 bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">¿Quieres más información?</h2>
          <p className="text-gray-600 text-sm mb-4">Lee nuestra guía completa antes de comprar.</p>
          <Link href="/blog/camarote-con-escritorio-guia-completa"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:underline">
            → Guía completa: camarote con escritorio [2025]
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
          {imgs.slice(4).map((img) => (
            <div key={img.src} className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Otros modelos */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">También puede interesarte</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/cama-alta", emoji: "🪜", nombre: "Cama Alta" },
              { href: "/camarote-nido", emoji: "🪺", nombre: "Camarote Nido" },
              { href: "/camarote-doble", emoji: "👫", nombre: "Camarote Doble" },
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
