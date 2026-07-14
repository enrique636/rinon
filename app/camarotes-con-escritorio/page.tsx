import type { Metadata } from "next";
import Link from "next/link";
import { seoPages } from "@/lib/seo";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = seoPages.categoriaGeneral;

// Los 3 modelos de escritorio reales (products.ts)
const MODELOS_ESCRITORIO = ["escritorio-economico", "escritorio", "escritorio-full"] as const;

const COMUNAS_PRIORITARIAS = [
  { slug: "camarote-con-escritorio-santiago", nombre: "Santiago" },
  { slug: "camarote-con-escritorio-maipu", nombre: "Maipú" },
  { slug: "camarote-con-escritorio-puente-alto", nombre: "Puente Alto" },
  { slug: "camarote-con-escritorio-la-florida", nombre: "La Florida" },
  { slug: "camarote-con-escritorio-providencia", nombre: "Providencia" },
  { slug: "camarote-con-escritorio-nunoa", nombre: "Ñuñoa" },
  { slug: "camarote-con-escritorio-las-condes", nombre: "Las Condes" },
  { slug: "camarote-con-escritorio-quilicura", nombre: "Quilicura" },
  { slug: "camarote-con-escritorio-penalolen", nombre: "Peñalolén" },
  { slug: "camarote-con-escritorio-san-bernardo", nombre: "San Bernardo" },
  { slug: "camarote-con-escritorio-pudahuel", nombre: "Pudahuel" },
  { slug: "camarote-con-escritorio-estacion-central", nombre: "Estación Central" },
];

const BLOG_RELACIONADO = [
  { slug: "como-elegir-camarote-con-escritorio", titulo: "Cómo elegir un camarote con escritorio" },
  { slug: "camarote-con-escritorio-pieza-pequena", titulo: "Camarote con escritorio para pieza pequeña" },
  { slug: "cama-alta-con-escritorio-para-estudiantes", titulo: "Cama alta con escritorio para estudiantes" },
];

const FAQ = [
  {
    q: "¿Qué es un camarote con escritorio?",
    a: "Es una cama elevada con un escritorio integrado en el espacio de abajo. En lugar de tener cama y escritorio ocupando el doble de superficie, el diseño vertical concentra ambos en un solo mueble. Es la solución preferida por estudiantes, gamers y quienes trabajan desde casa en piezas pequeñas.",
  },
  {
    q: "¿Cuáles son las medidas del camarote con escritorio?",
    a: "Las medidas dependen del modelo y de tu espacio. Las medidas exactas se confirman directamente con el fabricante al momento de cotizar, y podemos ajustarlas a tu pieza si lo necesitas.",
  },
  {
    q: "¿Cuánto cuesta un camarote con escritorio?",
    a: "El precio varía según el modelo (económico, estándar o full) y las opciones que elijas. Lo mejor es cotizar directamente por WhatsApp: te enviamos el valor actualizado según el modelo que necesites.",
  },
  {
    q: "¿Hacen despacho?",
    a: "Sí. Despachamos e instalamos en Santiago y en toda la Región Metropolitana. Para regiones coordinamos transporte al cotizar. En Santiago RM el pago es contra entrega: pagas cuando el producto llega a tu domicilio.",
  },
  {
    q: "¿Se puede hacer a medida?",
    a: "Sí. Fabricamos en nuestro propio taller, así que podemos ajustar las medidas del camarote al espacio de tu pieza. Consúltanos al cotizar y coordinamos las dimensiones exactas.",
  },
  {
    q: "¿Es resistente para adultos?",
    a: "Sí. La estructura es de acero fabricado en Chile y está pensada para el uso normal de adultos. Si tienes una necesidad de peso o uso intensivo específica, consúltanos y te recomendamos el modelo adecuado.",
  },
];

export default function CamarotesConEscritorioPage() {
  const modelos = MODELOS_ESCRITORIO
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const wa = getWhatsAppUrl(
    "Hola, quiero cotizar un camarote con escritorio. ¿Qué modelos tienen y cuál me recomiendan?"
  );

  return (
    <div className="py-12 px-4">
      {/* Schema: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Camarotes con Escritorio",
                item: "https://rinon.cl/camarotes-con-escritorio",
              },
            ],
          }),
        }}
      />
      {/* Schema: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header SEO */}
        <div className="text-center mb-12">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-600">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">Camarotes con Escritorio</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Camarotes con Escritorio — Fabricación Directa en Santiago
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cama arriba, escritorio abajo. Fabricamos camarotes con escritorio integrado en acero,
            en tres versiones: económico, estándar y full. Despacho e instalación en Santiago y toda
            la Región Metropolitana, con pago contra entrega.
          </p>
        </div>

        {/* Intro útil */}
        <div className="max-w-3xl mx-auto mb-14 space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Cuando el espacio de la pieza es limitado, poner una cama y un escritorio por separado
            significa ocupar el doble de superficie. El camarote con escritorio resuelve exactamente
            ese problema: la cama va elevada y el escritorio queda debajo, aprovechando el espacio
            vertical que normalmente se desperdicia.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Es el mueble favorito de estudiantes universitarios, gamers y personas en home office que
            necesitan una zona de trabajo sin renunciar a la cama. Al fabricar en nuestro propio
            taller, podemos ajustar las medidas a tu pieza y ofrecerte tres niveles de acabado según
            tu presupuesto.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Abajo puedes comparar los tres modelos, revisar la sección de despacho y resolver las
            dudas más frecuentes. Si prefieres, escríbenos directo por WhatsApp y te ayudamos a elegir.
          </p>
        </div>

        {/* Grid 3 modelos de escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {modelos.map((product) => (
            <article
              key={product.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col"
            >
              <div className="bg-gray-100 aspect-[4/3] relative overflow-hidden">
                {product.imgSrc ? (
                  <img
                    src={product.imgSrc}
                    alt={product.imgAlt ?? product.nombre}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-400 text-sm">Foto próximamente</span>
                  </div>
                )}
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="font-bold text-gray-900 text-lg mb-1">{product.nombre}</h2>
                <p className="text-gray-400 text-xs mb-3">{product.subtitulo}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.descripcion}</p>
                <ul className="text-xs text-gray-500 space-y-1 mb-5">
                  {product.caracteristicas.slice(0, 3).map((c) => (
                    <li key={c} className="flex items-start gap-1.5">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 mt-auto">
                  <a
                    href={getProductWhatsAppUrl(product.nombre)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold rounded-xl text-sm transition-colors"
                  >
                    Consultar por WhatsApp
                  </a>
                  <Link
                    href={`/${product.slug}`}
                    className="w-full text-center py-2.5 border border-gray-200 hover:border-gray-400 text-gray-700 font-medium rounded-xl text-sm transition-colors"
                  >
                    Ver ficha completa
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tabla comparativa */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Compara los tres modelos
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th className="text-left font-semibold p-4">Característica</th>
                  <th className="text-left font-semibold p-4">Económico</th>
                  <th className="text-left font-semibold p-4">Estándar</th>
                  <th className="text-left font-semibold p-4">Full</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  ["Cama superior", "1 plaza", "1 plaza", "1 plaza"],
                  ["Escritorio integrado", "Sí, funcional", "Sí", "Sí, mayor profundidad"],
                  ["Estantes integrados", "No", "No", "Sí"],
                  ["Baranda de seguridad", "Estándar", "Estándar", "Reforzada"],
                  ["Escalera lateral", "Sí", "Sí", "Sí, peldaños anchos"],
                  ["Ideal para", "Presupuesto ajustado", "Estudiante / gamer", "Home office / setup completo"],
                  ["Medidas", "A consultar", "A consultar", "A consultar"],
                  ["Precio", "Cotizar directamente", "Cotizar directamente", "Cotizar directamente"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-gray-100">
                    <td className="p-4 font-medium text-gray-800">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4">{row[2]}</td>
                    <td className="p-4">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ¿Por qué elegir? */}
        <div className="max-w-3xl mx-auto prose prose-gray mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir un camarote con escritorio?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Un camarote con escritorio integrado es la forma más eficiente de tener zona de descanso
            y zona de estudio en la misma pieza. El diseño vertical aprovecha el 100% del espacio: la
            cama arriba libera todo el piso para que el escritorio quede bien ubicado y con luz.
          </p>
          <ul className="text-gray-600 leading-relaxed space-y-2 mb-4">
            <li><strong>Ahorra espacio:</strong> un solo mueble reemplaza cama más escritorio.</li>
            <li><strong>Perfecto para estudiar:</strong> zona de trabajo definida, ideal para universitarios.</li>
            <li><strong>Listo para setup gamer o home office:</strong> espacio para monitor, laptop y accesorios.</li>
            <li><strong>Acero fabricado en Chile:</strong> estructura resistente y pintura electrostática.</li>
            <li><strong>Ajustable a tu pieza:</strong> podemos adaptar las medidas al fabricar.</li>
          </ul>
        </div>

        {/* Despacho */}
        <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Despacho e instalación</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Despachamos e instalamos en <strong>Santiago y toda la Región Metropolitana</strong>. En
            RM el pago es contra entrega: pagas cuando el camarote llega instalado a tu domicilio.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Para regiones coordinamos transporte al momento de cotizar. Los plazos se confirman
            directamente al coordinar el pedido por WhatsApp.
          </p>
        </div>

        {/* Comunas */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Camarote con escritorio por comuna
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {COMUNAS_PRIORITARIAS.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="text-center bg-white border border-gray-200 rounded-xl p-3 text-sm font-medium text-gray-700 hover:border-green-300 hover:text-green-700 transition-all"
              >
                {c.nombre}
              </Link>
            ))}
          </div>
        </div>

        {/* Blog relacionado */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Guías útiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BLOG_RELACIONADO.map((b) => (
              <Link
                key={b.slug}
                href={`/blog/${b.slug}`}
                className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
              >
                <p className="font-semibold text-gray-800 text-sm leading-snug hover:text-green-700">
                  {b.titulo}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {FAQ.map((f) => (
              <div key={f.q} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Cotiza tu camarote con escritorio
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Te ayudamos a elegir el modelo según tu pieza y presupuesto. Pago contra entrega en Santiago.
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
