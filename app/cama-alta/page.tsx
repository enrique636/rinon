import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cama Alta en Chile | Cama Loft Metálica — Pago Contra Entrega Santiago",
  description:
    "Cama alta metálica (cama loft o cama elevada) con espacio libre debajo. Ideal para estudiantes, gamers y home office. Pago contra entrega en Santiago. Consulta por WhatsApp.",
  keywords: [
    "cama alta",
    "cama alta Chile",
    "cama alta metálica",
    "cama loft",
    "cama loft Chile",
    "cama elevada",
    "cama alta 1 plaza",
    "cama alta Santiago",
    "cama alta con escritorio",
    "cama alta universitaria",
  ],
  alternates: { canonical: "https://rinon.cl/cama-alta" },
  openGraph: {
    title: "Cama Alta Metálica — Cama Loft en Chile | Santiago",
    description: "Cama alta (cama loft) metálica con espacio libre debajo para escritorio, muebles o lo que necesites. Pago contra entrega en Santiago.",
    type: "website",
    locale: "es_CL",
  },
};

const imgs = [
  { src: "/images/camarotes/camarote-escritorio-full-nordico.jpg", alt: "Cama alta metálica nórdica con espacio libre abajo" },
  { src: "/images/camarotes/camarote-escritorio-full-home-office.jpg", alt: "Cama alta con escritorio y home office abajo" },
  { src: "/images/camarotes/camarote-escritorio-economico-pieza-pequena.jpg", alt: "Cama alta en pieza pequeña de departamento Santiago" },
  { src: "/images/camarotes/camarote-escritorio-economico-dormitorio.jpg", alt: "Cama alta en dormitorio aprovechando el espacio vertical" },
  { src: "/images/camarotes/camarote-escritorio-full-productividad.jpg", alt: "Cama alta loft para productividad — trabajo abajo descanso arriba" },
  { src: "/images/camarotes/camarote-escritorio-economico-universitario.jpg", alt: "Cama alta universitaria en residencia estudiantil" },
  { src: "/images/camarotes/camarote-escritorio-full-universitario.jpg", alt: "Cama loft universitaria espacio optimizado" },
  { src: "/images/camarotes/camarote-escritorio-economico-juvenil.jpg", alt: "Cama alta juvenil metálica" },
];

const faqs = [
  {
    q: "¿Cuál es la diferencia entre cama alta, cama loft y cama elevada?",
    a: "Son tres nombres para el mismo mueble: una cama ubicada en altura, con espacio libre debajo. En Chile se usan indistintamente. 'Cama loft' viene del inglés y es más usada por personas jóvenes. 'Cama alta' y 'cama elevada' son los términos más comunes en español.",
  },
  {
    q: "¿Qué puedo poner debajo de una cama alta?",
    a: "El espacio debajo de la cama alta es completamente libre: puedes poner un escritorio, una silla, muebles de almacenamiento, un sofá pequeño, o simplemente dejarlo abierto para mayor sensación de espacio.",
  },
  {
    q: "¿Cuánta altura libre queda bajo la cama?",
    a: "Depende del modelo, pero en general entre 90 y 120 cm de altura libre desde el suelo hasta la base de la cama. Esto es suficiente para instalar un escritorio y sentarse cómodamente. Consulta las medidas exactas del modelo que te interesa.",
  },
  {
    q: "¿Desde qué edad es segura la cama alta?",
    a: "Se recomienda a partir de los 6 años. Para niños más pequeños es mejor esperar, ya que la cama alta no cuenta con cama inferior y la altura puede ser un riesgo. La baranda de seguridad es obligatoria.",
  },
  {
    q: "¿La cama alta viene con escritorio incluido?",
    a: "La cama alta estándar no incluye escritorio. Si quieres escritorio integrado, consulta por nuestro modelo Camarote con Escritorio, que tiene el escritorio como parte de la estructura.",
  },
  {
    q: "¿Cuánto cuesta el despacho de una cama alta en Santiago?",
    a: `El despacho tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} en Santiago y alrededores. El pago es contra entrega: pagas cuando llega a tu casa.`,
  },
];

export default function CamaAltaPage() {
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
            { "@type": "ListItem", position: 3, name: "Cama Alta", item: "https://rinon.cl/cama-alta" },
          ],
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Cama Alta Metálica (Cama Loft)",
          description: "Cama alta (cama loft) metálica con espacio libre debajo. Ideal para estudiantes, gamers y home office. Fabricación chilena.",
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
          <span className="text-gray-700 font-medium">Cama Alta</span>
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
              Ahorra espacio
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Cama Alta</h1>
            <p className="text-green-600 font-medium mb-2">
              También llamada cama loft o cama elevada
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              La <strong>cama alta</strong> eleva tu cama al nivel superior y te devuelve todo el espacio del piso.
              Sin segunda cama abajo: el espacio es completamente tuyo para escritorio, muebles, setup gamer o lo que necesites.
              La solución perfecta para piezas pequeñas donde necesitas funcionalidad máxima.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-gray-400 font-medium">Nivel superior</p>
                <p className="text-gray-700 font-bold text-sm">1 plaza</p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-blue-500 font-medium">Espacio inferior</p>
                <p className="text-blue-700 font-bold text-sm">Libre (tuyo)</p>
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
                message="Hola, me interesa la Cama Alta. ¿Cuáles son los precios y modelos disponibles?"
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
        <div className="prose prose-gray max-w-none mb-14">
          <h2 className="text-2xl font-bold text-gray-900">¿Qué es una cama alta y qué la diferencia de un camarote?</h2>
          <p className="text-gray-600 leading-relaxed">
            Una <strong>cama alta</strong> —conocida también como <strong>cama loft</strong> o <strong>cama elevada</strong>— es una estructura metálica
            que ubica la cama en el nivel superior, dejando el espacio debajo completamente libre.
            A diferencia de un camarote tradicional, <strong>no hay segunda cama abajo</strong>.
            Ese espacio inferior puede usarse para lo que el usuario necesite: escritorio, muebles, zona de juego o simplemente espacio abierto.
          </p>
          <p className="text-gray-600 leading-relaxed">
            En términos prácticos, la cama alta es la mejor opción cuando vives solo y necesitas maximizar el uso del espacio vertical de tu pieza.
            En lugar de que cama y escritorio ocupen el doble de superficie en el piso, todo queda integrado en el mismo espacio de forma vertical.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">¿Para quién es ideal la cama alta?</h2>
          <ul className="text-gray-600">
            <li>
              <strong>Estudiantes universitarios</strong> con pieza propia que necesitan escritorio y cama en el mismo espacio.
              La <strong>cama alta con escritorio</strong> (ver modelo específico) es especialmente popular para este perfil.
            </li>
            <li>
              <strong>Gamers</strong> que quieren instalar su setup completo debajo de la cama sin sacrificar comodidad al dormir.
            </li>
            <li>
              <strong>Personas que trabajan desde casa</strong> (home office) en departamentos donde el dormitorio también funciona como oficina.
            </li>
            <li>
              <strong>Jóvenes adultos</strong> en departamentos pequeños donde cada metro cuadrado disponible en el piso es valioso.
            </li>
            <li>
              <strong>Cualquier persona</strong> que quiera liberar el 100% del espacio del piso de su dormitorio.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">¿Qué altura de techo necesito para una cama alta?</h2>
          <p className="text-gray-600 leading-relaxed">
            Es la pregunta más importante antes de comprar una cama alta. Como regla general:
          </p>
          <ul className="text-gray-600">
            <li>La altura del techo debe ser de <strong>al menos 210-220 cm</strong> para que sea cómodo</li>
            <li>La cama suele quedar a unos <strong>130-150 cm del suelo</strong> según el modelo</li>
            <li>Sobre la cama necesitas al menos <strong>60-70 cm libres</strong> para sentarte y moverte con comodidad</li>
            <li>Si tu techo es más bajo, podemos ajustar la altura de la estructura con un cambio de medida</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Antes de cotizar, mide la altura de tu techo y cuéntanosla por WhatsApp. Así te podemos recomendar el modelo correcto.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Accesorios disponibles</h2>
          <ul className="text-gray-600">
            <li><strong>Parrilla metálica adicional:</strong> hasta 2 por pedido. Precio a consultar.</li>
            <li><strong>Baranda de seguridad adicional:</strong> hasta 2 por pedido. Precio a consultar.</li>
            <li><strong>Cambio de medida:</strong> hasta 3 modificaciones, a {formatPrice(SITE_CONFIG.cambioMedida.precio)} c/u.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Cama alta vs cama alta con escritorio: ¿cuál elegir?</h2>
          <p className="text-gray-600 leading-relaxed">
            Si planeas poner un escritorio debajo de la cama alta, considera directamente nuestro modelo
            <strong> Camarote con Escritorio</strong>, donde el escritorio viene integrado en la estructura metálica.
            Esto le da mayor estabilidad al escritorio y un mejor acabado estético que agregar un escritorio suelto debajo.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Si en cambio quieres libertad total para decidir qué va abajo —o quieres espacio abierto—
            la <strong>cama alta estándar</strong> es la opción más flexible.
          </p>
        </div>

        {/* CTA intermedio */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 text-center mb-14">
          <h2 className="text-xl font-bold mb-2">¿Ya mediste tu pieza?</h2>
          <p className="text-gray-300 text-sm mb-5">
            Cuéntanos las medidas de tu espacio por WhatsApp y te recomendamos el modelo correcto. Respuesta en minutos.
          </p>
          <WhatsAppButton
            message="Hola, me interesa una cama alta. Mi pieza mide [X] de ancho, [X] de largo y el techo tiene [X] cm de alto."
          >
            Consultar medidas por WhatsApp
          </WhatsAppButton>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes sobre la cama alta</h2>
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

        {/* Otros modelos */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">También puede interesarte</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/camarote-con-escritorio", emoji: "📚", nombre: "Con Escritorio" },
              { href: "/camarote-nido", emoji: "🪺", nombre: "Camarote Nido" },
              { href: "/camarote-doble", emoji: "👫", nombre: "Camarote Doble" },
              { href: "/camarote-1-5-plazas", emoji: "🛏️", nombre: "1½ + 1 Plaza" },
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
