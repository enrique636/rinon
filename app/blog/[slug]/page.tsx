import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { getWhatsAppUrl, SITE_CONFIG, formatPrice } from "@/lib/config";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.titulo,
    description: post.descripcionSeo,
    keywords: post.keywords,
    alternates: { canonical: `https://dumar.cl/blog/${post.slug}` },
    openGraph: {
      title: post.titulo,
      description: post.descripcionSeo,
      type: "article",
      publishedTime: post.fecha,
      locale: "es_CL",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const Content = blogContent[slug];
  if (!Content) notFound();

  return (
    <div className="py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-600 truncate">{post.titulo}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
              {post.categoria}
            </span>
            <span className="text-xs text-gray-400">{post.tiempoLectura} lectura</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">{new Date(post.fecha).toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {post.titulo}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">{post.subtitulo}</p>
        </div>

        {/* Content */}
        <article className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-green-600 prose-strong:text-gray-800">
          <Content />
        </article>

        {/* Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.titulo,
              description: post.descripcionSeo,
              datePublished: post.fecha,
              author: { "@type": "Organization", name: "Camarotes Chile" },
              publisher: { "@type": "Organization", name: "Camarotes Chile" },
            }),
          }}
        />

        {/* Otros artículos */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Otros artículos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                >
                  <p className="font-semibold text-gray-800 text-sm leading-snug hover:text-green-700">
                    {p.titulo}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{p.tiempoLectura} lectura</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Contenido de cada post ────────────────────────────────────────────────────

function CTAWhatsApp({ mensaje }: { mensaje?: string }) {
  return (
    <div className="not-prose my-8 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
      <p className="font-bold text-gray-900 mb-1">¿Listo para cotizar?</p>
      <p className="text-gray-500 text-sm mb-4">Escríbenos y te respondemos en minutos. Pago contra entrega en Santiago.</p>
      <WhatsAppButton message={mensaje}>Consultar por WhatsApp</WhatsAppButton>
    </div>
  );
}

const blogContent: Record<string, () => React.ReactElement> = {

  "camarote-con-escritorio-guia-completa": () => (
    <>
      <p>
        Si estás buscando un <strong>camarote con escritorio</strong> en Chile, llegaste al lugar indicado.
        Este tipo de mueble ha ganado enorme popularidad en los últimos años, y no es casualidad:
        combina dos necesidades básicas —dormir y estudiar o trabajar— en un solo espacio vertical,
        liberando metros cuadrados que en una pieza pequeña hacen toda la diferencia.
      </p>

      <p>
        En esta guía te explicamos todo lo que necesitas saber: qué es exactamente un camarote con escritorio,
        qué modelos existen, cómo elegir el indicado para tu espacio y para quién es ideal cada uno.
      </p>

      <h2>¿Qué es un camarote con escritorio?</h2>
      <p>
        Un camarote con escritorio —también llamado <strong>cama alta con escritorio</strong>, <strong>cama loft con escritorio</strong>
        o simplemente <strong>cama con escritorio abajo</strong>— es un mueble de acero que eleva la cama
        al nivel superior y deja un espacio estructurado y aprovechable abajo.
        En ese espacio inferior va integrado un escritorio, que puede venir ya incluido en el diseño
        o ser un accesorio separado que se posiciona debajo.
      </p>
      <p>
        La diferencia con un camarote tradicional es que no hay una segunda cama abajo:
        hay un escritorio. Esto lo hace ideal para personas que viven solas y necesitan
        tanto dónde dormir como dónde estudiar o trabajar, todo en el mismo cuarto.
      </p>

      <h2>¿Para quién es ideal un camarote con escritorio?</h2>
      <p>
        La versatilidad de este mueble hace que sirva para muchos perfiles distintos:
      </p>
      <ul>
        <li>
          <strong>Estudiantes universitarios</strong> que viven en una pieza arrendada pequeña
          y necesitan un escritorio amplio para laptop, cuadernos y materiales.
        </li>
        <li>
          <strong>Gamers</strong> que quieren armar su setup —PC, monitores, periféricos—
          debajo de la cama y tener todo integrado en un mismo módulo.
        </li>
        <li>
          <strong>Personas que trabajan desde casa</strong> (home office) en departamentos
          donde el dormitorio también funciona como oficina.
        </li>
        <li>
          <strong>Adolescentes</strong> que estudian y necesitan una pieza con todo incorporado
          sin que sea necesario comprar escritorio y cama por separado.
        </li>
        <li>
          <strong>Personas en departamentos pequeños</strong> donde cada metro cuadrado cuenta
          y una cama normal más un escritorio ocuparían demasiado espacio.
        </li>
      </ul>

      <CTAWhatsApp mensaje="Hola, me interesa un camarote con escritorio. ¿Cuál me recomiendan y cuál es el precio?" />

      <h2>Tipos de camarotes con escritorio disponibles en Chile</h2>
      <p>
        No todos los camarotes con escritorio son iguales. Existen variaciones importantes
        según el diseño, la configuración y las necesidades del comprador:
      </p>

      <h3>Cama alta con escritorio integrado</h3>
      <p>
        El modelo más común. La cama está elevada a entre 1,2 y 1,5 metros del piso,
        y debajo hay un escritorio fijo que forma parte de la estructura.
        El escritorio normalmente tiene espacio suficiente para un portátil o monitor,
        algunos libros y materiales. Algunas versiones incluyen estantes laterales o un cajón.
      </p>

      <h3>Camarote con escritorio lateral</h3>
      <p>
        Similar al anterior, pero el escritorio no está directamente debajo de la cama
        sino al costado, conectado a la estructura. Esto permite más espacio bajo la cama
        y una posición de trabajo más ergonómica.
      </p>

      <h3>Camarote con escritorio a medida</h3>
      <p>
        Para espacios con dimensiones especiales o necesidades específicas.
        Se fabrica según las medidas exactas del dormitorio, lo que permite aprovechar
        cada centímetro de espacio disponible. Ideal para departamentos o piezas con
        techos bajos, pilares u otras particularidades.
      </p>

      <h2>¿Qué medidas tiene un camarote con escritorio?</h2>
      <p>
        Las medidas varían según el modelo, pero en términos generales:
      </p>
      <ul>
        <li><strong>Largo:</strong> entre 190 y 210 cm (según la medida de la cama)</li>
        <li><strong>Ancho:</strong> entre 90 y 100 cm para cama de 1 plaza estándar</li>
        <li><strong>Alto total:</strong> entre 150 y 180 cm</li>
        <li><strong>Altura de la cama:</strong> entre 120 y 150 cm desde el piso</li>
        <li><strong>Espacio libre bajo la cama:</strong> entre 90 y 120 cm (clave para sentarse cómodo)</li>
      </ul>
      <p>
        Antes de comprar, es fundamental medir el espacio disponible en tu pieza —especialmente la altura del techo—
        para asegurarte de que el modelo elegido quepa bien y deje suficiente espacio en la parte superior.
        Como regla general, necesitas al menos 50 cm entre el colchón y el techo para que sea cómodo.
      </p>

      <CTAWhatsApp mensaje="Hola, quiero consultar medidas del camarote con escritorio. Mi pieza tiene [X] cm de alto." />

      <h2>¿Qué preguntas hacer antes de comprar?</h2>
      <p>
        Para no equivocarte en la compra, te recomendamos hacerte estas preguntas antes de elegir un modelo:
      </p>
      <ul>
        <li>¿Cuántos centímetros de altura libre tiene tu pieza?</li>
        <li>¿Cuánto espacio tienes disponible en largo y ancho?</li>
        <li>¿Lo usarás para estudiar, trabajar con computador, o gaming?</li>
        <li>¿Necesitas almacenamiento adicional (cajones, estantes)?</li>
        <li>¿Vas a usar monitor o solo laptop? (esto afecta la profundidad necesaria del escritorio)</li>
        <li>¿Tienes preferencia de color?</li>
      </ul>
      <p>
        Con estas respuestas claras, puedes elegir el modelo correcto o pedir uno a medida
        si el espacio lo requiere.
      </p>

      <h2>¿Cómo es la entrega en Santiago?</h2>
      <p>
        Entregamos e instalamos en Santiago y alrededores. El despacho tiene un costo adicional
        y el pago se realiza contra entrega —pagas cuando el camarote llega a tu casa, ya instalado.
        No se requiere adelantar dinero.
      </p>
      <p>
        El tiempo de entrega varía según el modelo: los modelos estándar tienen tiempos menores,
        mientras que los modelos a medida requieren fabricación previa.
        Coordinaremos contigo la fecha y hora exacta por WhatsApp.
      </p>

      <h2>Preguntas frecuentes sobre camarotes con escritorio</h2>

      <h3>¿Desde qué edad se puede usar?</h3>
      <p>
        Generalmente se recomienda para mayores de 6 años para la cama superior.
        Para niños menores, hay que asegurarse de que la baranda de seguridad esté bien instalada.
      </p>

      <h3>¿Cuánto peso aguanta la cama?</h3>
      <p>
        Nuestros modelos están fabricados para soportar el uso normal de adultos.
        Si tienes dudas sobre el peso máximo de un modelo específico, consúltanos por WhatsApp.
      </p>

      <h3>¿Se puede agregar un cajón o estante?</h3>
      <p>
        Sí. Algunos modelos incluyen opciones de accesorios adicionales. Consúltanos al momento de comprar.
      </p>

      <h3>¿Puedo elegir el color?</h3>
      <p>
        Sí. Los modelos están disponibles en varios colores. Blanco, negro y gris son los más solicitados.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Desde qué edad se puede usar un camarote con escritorio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Generalmente se recomienda para mayores de 6 años para la cama superior. Para niños menores es importante verificar que la baranda de seguridad esté correctamente instalada.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto espacio necesito en mi pieza para un camarote con escritorio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El largo mínimo es de unos 200 cm, el ancho de 90-100 cm, y el alto del techo debe ser de al menos 200-210 cm para que la cama superior quede cómoda. Consulta medidas exactas según el modelo.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo funciona el pago y la entrega?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El pago es contra entrega: pagas cuando el camarote llega a tu casa, ya instalado. El despacho tiene un costo adicional y opera en Santiago y alrededores.",
                },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, leí la guía y me interesa un camarote con escritorio. ¿Pueden cotizarme?" />
    </>
  ),

  "camarote-nido-que-es": () => (
    <>
      <p>
        Si tienes una pieza pequeña y necesitas más de dos camas, el <strong>camarote nido</strong>
        es probablemente la solución más inteligente que existe. En este artículo te explicamos
        exactamente qué es, cómo funciona y para quién es ideal.
      </p>

      <h2>¿Qué es un camarote nido?</h2>
      <p>
        Un <strong>camarote nido</strong> —también llamado <strong>cama nido</strong> o
        <strong>camarote con cama nido</strong>— es un camarote de dos pisos que tiene,
        además, una tercera cama deslizante que se guarda debajo de la cama inferior.
        Durante el día, esta tercera cama está oculta y no ocupa espacio. Por la noche,
        se desliza hacia afuera y queda al nivel del piso, lista para usar.
      </p>
      <p>
        El resultado: <strong>3 camas en el espacio que normalmente ocuparía 1</strong>.
        Es la solución perfecta para familias con varios hijos, piezas de visitas que necesitan
        flexibilidad, o cualquier situación donde el espacio sea limitado pero las camas necesarias sean muchas.
      </p>

      <h2>¿Cómo funciona la cama nido?</h2>
      <p>
        La mecánica es simple: la cama nido tiene ruedas o deslizadores que permiten sacarla
        y meterla con facilidad. No requiere herramientas ni esfuerzo especial.
        En segundos tienes una tercera cama disponible.
      </p>
      <ul>
        <li>Durante el día: la nido está guardada, la pieza se ve normal</li>
        <li>Por la noche: deslizas la nido hacia afuera y tienes la tercera cama en el piso</li>
        <li>La nido es baja —al nivel del suelo— por lo que es ideal para niños</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, me interesa el camarote nido. ¿Pueden darme información y precio?" />

      <h2>¿Para quién es ideal el camarote nido?</h2>
      <ul>
        <li><strong>Familias con 3 hijos</strong> que comparten habitación</li>
        <li><strong>Piezas de visita</strong> que necesitan capacidad extra sin usar espacio permanente</li>
        <li><strong>Pieza pequeña</strong> donde no caben 3 camas separadas</li>
        <li><strong>Residencias o pensiones</strong> donde se necesita maximizar la capacidad</li>
      </ul>

      <h2>¿Se le pueden agregar parrillas adicionales?</h2>
      <p>
        Sí. El camarote nido acepta hasta 3 parrillas adicionales, una por cada nivel de cama.
        Las parrillas refuerzan la base y mejoran la ventilación del colchón.
        Consúltanos por WhatsApp para ver la disponibilidad y precio de este accesorio.
      </p>

      <h2>Preguntas frecuentes sobre el camarote nido</h2>

      <h3>¿Qué colchón se usa en la cama nido?</h3>
      <p>
        La cama nido requiere un colchón delgado (no más de 15-18 cm de grosor) para que pueda
        deslizarse correctamente debajo de la cama inferior.
      </p>

      <h3>¿La cama nido tiene barandas?</h3>
      <p>
        La cama nido está al nivel del piso, por lo que no requiere baranda.
        Las camas superiores sí incluyen barandas de seguridad, y se pueden agregar barandas adicionales.
      </p>

      <h3>¿Cuánto pesa el camarote nido?</h3>
      <p>
        Al ser un camarote de 3 niveles con estructura metálica, es más pesado que un camarote estándar.
        La instalación la realizamos nosotros en tu domicilio.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es un camarote nido?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un camarote nido es un camarote de dos pisos con una tercera cama deslizante que se guarda debajo de la cama inferior. Permite tener 3 camas en el espacio de 1.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué grosor de colchón necesita la cama nido?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La cama nido requiere un colchón de no más de 15-18 cm de grosor para que pueda deslizarse correctamente.",
                },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero cotizar el camarote nido con entrega en Santiago." />
    </>
  ),

  "cama-alta-vs-camarote": () => (
    <>
      <p>
        Cuando buscas maximizar el espacio de un dormitorio, dos opciones aparecen constantemente:
        la <strong>cama alta</strong> y el <strong>camarote</strong>. Aunque a simple vista parecen similares,
        tienen diferencias importantes que pueden definir cuál es la mejor elección para tu situación.
        En esta comparación honesta te explicamos todo.
      </p>

      <h2>¿Qué es una cama alta?</h2>
      <p>
        Una <strong>cama alta</strong> —también llamada <strong>cama loft</strong> o <strong>cama elevada</strong>—
        es una estructura que eleva la cama al nivel superior, dejando el espacio debajo completamente libre.
        No hay segunda cama abajo. Ese espacio puede usarse para un escritorio, un mueble,
        espacio de juego, o simplemente para moverse con mayor comodidad.
      </p>

      <h2>¿Qué es un camarote?</h2>
      <p>
        Un <strong>camarote</strong> —también llamado <strong>litera</strong>— tiene dos camas:
        una en el nivel superior y otra en el nivel inferior. Ambas están separadas por la estructura,
        y el espacio bajo la cama superior es justo el necesario para que quien duerme abajo esté cómodo.
      </p>

      <h2>Diferencias clave: cama alta vs camarote</h2>

      <h3>Espacio disponible abajo</h3>
      <p>
        Esta es la diferencia más relevante. En una <strong>cama alta</strong>, el espacio inferior es completamente tuyo:
        puede ser un escritorio, un armario, un sofá o espacio abierto.
        En un <strong>camarote</strong>, ese espacio está ocupado por la cama inferior, dejando solo
        el espacio necesario para sentarse o acostarse.
      </p>

      <h3>Número de personas que pueden dormir</h3>
      <p>
        Un camarote duerme a dos personas. Una cama alta duerme a una sola.
        Si necesitas dormir a dos personas en la misma pieza, el camarote es la opción correcta.
        Si vives solo y necesitas un escritorio o espacio bajo la cama, la cama alta es mejor.
      </p>

      <h3>¿Cuándo elegir cama alta?</h3>
      <ul>
        <li>Vives solo y necesitas espacio de trabajo debajo (escritorio, home office)</li>
        <li>Eres estudiante universitario con pieza propia</li>
        <li>Quieres armar un setup gamer completo</li>
        <li>Tu pieza es pequeña y necesitas liberar el máximo de espacio</li>
      </ul>

      <h3>¿Cuándo elegir camarote?</h3>
      <ul>
        <li>Dos personas comparten la pieza (hermanos, compañeros de cuarto)</li>
        <li>Tienes visitas frecuentes que necesitan dónde dormir</li>
        <li>Quieres maximizar la capacidad de la pieza</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, no sé si necesito cama alta o camarote. ¿Pueden ayudarme a elegir?" />

      <h2>¿Y el camarote con escritorio?</h2>
      <p>
        Existe una opción que combina lo mejor de ambos mundos: el <strong>camarote con escritorio</strong>,
        también llamado <strong>cama alta con escritorio</strong>. Es técnicamente una cama alta donde el espacio
        inferior está diseñado específicamente para acoger un escritorio integrado.
        Es la opción perfecta para estudiantes, gamers y quienes trabajan desde casa.
      </p>

      <h2>Preguntas frecuentes</h2>
      <h3>¿La cama alta es más cara que el camarote?</h3>
      <p>
        No necesariamente. Los precios varían según el modelo y los accesorios. Consulta por WhatsApp para comparar opciones.
      </p>
      <h3>¿Cuánto espacio libre queda debajo de una cama alta?</h3>
      <p>
        Depende del modelo, pero en general hay entre 90 y 120 cm de altura libre bajo la cama, suficiente para colocar un escritorio y sentarse cómodamente.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuál es la diferencia entre cama alta y camarote?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La cama alta tiene una sola cama elevada con espacio libre debajo. El camarote tiene dos camas, una arriba y otra abajo. La cama alta es mejor para uso individual y aprovechar el espacio debajo; el camarote es mejor cuando dos personas necesitan dormir en la misma pieza.",
                },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero saber más sobre camas altas y camarotes disponibles en Santiago." />
    </>
  ),

  "mejores-camarotes-chile": () => (
    <>
      <p>
        El mercado de <strong>camarotes en Chile</strong> ha crecido enormemente en los últimos años.
        Con más personas viviendo en departamentos pequeños, familias buscando optimizar espacios
        y estudiantes universitarios necesitando funcionalidad, los camarotes metálicos se han convertido
        en una solución inteligente y cada vez más popular.
      </p>
      <p>
        En esta guía te contamos qué buscar al comprar un camarote metálico en Chile,
        qué tipos existen, y cómo asegurarte de elegir bien.
      </p>

      <h2>¿Por qué elegir un camarote metálico?</h2>
      <p>
        Los camarotes metálicos tienen ventajas claras sobre los de madera:
      </p>
      <ul>
        <li><strong>Mayor durabilidad:</strong> el acero no se astilla ni se rompe con el uso diario</li>
        <li><strong>Menor mantenimiento:</strong> no requieren pintura periódica ni tratamientos</li>
        <li><strong>Mayor resistencia al peso:</strong> soportan más kilos sin deformarse</li>
        <li><strong>Diseño más limpio:</strong> líneas más delgadas que dan sensación de mayor espacio</li>
        <li><strong>No hay riesgo de polilla:</strong> algo relevante en Chile</li>
      </ul>

      <h2>Tipos de camarotes disponibles en Chile</h2>

      <h3>Camarote estándar (1 plaza + 1 plaza)</h3>
      <p>
        El más clásico. Dos camas de 1 plaza, una sobre la otra. Ideal para habitaciones compartidas por dos personas.
      </p>

      <h3>Camarote Titanic</h3>
      <p>
        Una versión más robusta del camarote estándar. Estructura de mayor calibre, mayor resistencia.
        Ideal para uso intensivo o cuando se necesita mayor durabilidad.
      </p>

      <h3>Camarote de plaza y media</h3>
      <p>
        La cama inferior es de plaza y media (más ancha que la estándar), mientras la superior puede ser de 1 plaza.
        Más cómodo para adolescentes o adultos que duermen abajo.
      </p>

      <h3>Camarote doble (2 plazas abajo)</h3>
      <p>
        La cama inferior es de 2 plazas (matrimonial), ideal para parejas o adultos que necesitan mayor confort en la cama de abajo.
      </p>

      <h3>Camarote nido</h3>
      <p>
        Tiene una tercera cama deslizante que se guarda debajo de la cama inferior. Perfecto para tener 3 camas en el espacio de 1.
      </p>

      <h3>Camarote triple</h3>
      <p>
        Tres niveles de camas. La solución máxima para espacios donde se necesita la mayor capacidad posible.
      </p>

      <h3>Cama alta con escritorio</h3>
      <p>
        Una sola cama elevada con escritorio integrado abajo. El favorito de estudiantes, gamers y home office.
      </p>

      <CTAWhatsApp mensaje="Hola, quiero saber cuál camarote me conviene y el precio. ¿Pueden ayudarme?" />

      <h2>¿Qué considerar antes de comprar?</h2>
      <ul>
        <li><strong>Medidas de la pieza:</strong> ancho, largo y alto disponible</li>
        <li><strong>Quién lo va a usar:</strong> niños, adolescentes, adultos</li>
        <li><strong>Cuántas personas necesitan dormir:</strong> 1, 2 o 3</li>
        <li><strong>¿Necesitas escritorio?</strong> Si sí, considera la cama alta con escritorio</li>
        <li><strong>Accesorios:</strong> parrillas adicionales, barandas extra, cambios de medida</li>
      </ul>

      <h2>Despacho en Santiago: pago contra entrega</h2>
      <p>
        Algo importante al comprar un camarote en Chile es asegurarse de que la empresa haga entrega
        con instalación incluida. En nuestro caso, despachamos en Santiago y alrededores con
        instalación básica incluida, y el pago se realiza cuando recibes el camarote en tu casa.
        No hay que adelantar nada.
      </p>

      <h2>Preguntas frecuentes</h2>
      <h3>¿Cuánto demora el despacho de un camarote en Santiago?</h3>
      <p>Entre 5 y 10 días hábiles para modelos estándar. Los modelos a medida pueden demorar más. Coordinamos fecha exacta por WhatsApp.</p>
      <h3>¿Se puede pedir con medidas especiales?</h3>
      <p>Sí. Aceptamos cambios de medida con un costo adicional por ajuste.</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto demora el despacho de un camarote en Santiago?",
                acceptedAnswer: { "@type": "Answer", text: "Entre 5 y 10 días hábiles para modelos estándar. Coordinamos fecha y hora exacta por WhatsApp." },
              },
              {
                "@type": "Question",
                name: "¿Los camarotes se entregan con instalación?",
                acceptedAnswer: { "@type": "Answer", text: "Sí. La entrega incluye instalación básica en tu domicilio en Santiago y alrededores." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero cotizar un camarote metálico con entrega en Santiago." />
    </>
  ),

  "camarote-dos-plazas": () => (
    <>
      <p>
        El <strong>camarote de 2 plazas</strong> —o camarote doble— es uno de los modelos más solicitados
        por adultos y parejas que comparten habitación pero necesitan más comodidad que la que ofrece
        una cama de 1 plaza. En este artículo te explicamos todo sobre este tipo de camarote y cuándo es la mejor elección.
      </p>

      <h2>¿Qué es un camarote de 2 plazas?</h2>
      <p>
        Un <strong>camarote doble</strong> tiene la cama inferior de 2 plazas (aproximadamente 135 cm de ancho)
        y la cama superior puede ser de 1 plaza o de 1,5 plazas según el modelo.
        Esto lo hace significativamente más cómodo para adultos que duermen abajo,
        sin aumentar demasiado el espacio que ocupa en el piso.
      </p>

      <h2>¿Para quién es ideal?</h2>
      <ul>
        <li><strong>Parejas con hijos:</strong> los padres duermen en la cama doble de abajo, el hijo arriba</li>
        <li><strong>Adultos que comparten pieza:</strong> más comodidad en la cama inferior</li>
        <li><strong>Adolescentes mayores:</strong> que ya no se sienten cómodos en una cama de 1 plaza</li>
        <li><strong>Piezas de visitas:</strong> versatilidad para alojar tanto a 1 como a 2 personas</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, me interesa el camarote de 2 plazas. ¿Cuáles son los precios y medidas disponibles?" />

      <h2>¿Qué opciones tiene la cama superior?</h2>
      <p>
        En nuestros modelos, la cama superior del camarote doble puede ser de:
      </p>
      <ul>
        <li><strong>1 plaza estándar</strong> (aprox. 90 cm de ancho)</li>
        <li><strong>1,5 plazas</strong> (aprox. 105-120 cm de ancho) para mayor comodidad</li>
      </ul>
      <p>Consulta disponibilidad según el modelo al momento de cotizar.</p>

      <h2>Preguntas frecuentes</h2>
      <h3>¿El camarote doble cabe en una pieza estándar?</h3>
      <p>Depende de las medidas exactas de tu pieza. Al ser más ancho que un camarote de 1 plaza, necesitas tener al menos 150-160 cm de ancho disponible. Mide tu espacio antes de cotizar.</p>
      <h3>¿Se puede pedir en medidas especiales?</h3>
      <p>Sí. Ofrecemos cambios de medida con costo adicional. Hasta 3 cambios por pedido.</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es un camarote de 2 plazas?",
                acceptedAnswer: { "@type": "Answer", text: "Un camarote de 2 plazas tiene la cama inferior de 2 plazas (aprox. 135 cm de ancho). La cama superior puede ser de 1 plaza o 1.5 plazas según el modelo." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero cotizar un camarote de 2 plazas con despacho en Santiago." />
    </>
  ),

  "camarote-plaza-y-media": () => (
    <>
      <p>
        El <strong>camarote de plaza y media</strong> es la solución para quienes encuentran que el camarote estándar
        de 1 plaza se queda pequeño, pero no quieren llegar al tamaño de un camarote doble.
        En Chile es uno de los modelos más pedidos por familias con adolescentes.
      </p>

      <h2>¿Qué medidas tiene una plaza y media?</h2>
      <p>
        Una plaza y media mide aproximadamente <strong>105 a 120 cm de ancho</strong>,
        comparado con los 90 cm de una plaza estándar y los 135 cm de las 2 plazas.
        Es el punto intermedio perfecto: más cómodo que una plaza, más compacto que el doble.
      </p>

      <h2>Configuraciones disponibles</h2>
      <p>El camarote de plaza y media puede venir en varias configuraciones:</p>
      <ul>
        <li><strong>Plaza y media abajo + 1 plaza arriba:</strong> la más común. El que duerme abajo tiene más espacio.</li>
        <li><strong>Plaza y media en ambos niveles:</strong> máxima comodidad para ambas personas.</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, me interesa un camarote de plaza y media. ¿Qué modelos tienen disponibles?" />

      <h2>¿Para quién es ideal?</h2>
      <ul>
        <li><strong>Adolescentes</strong> que ya se sienten incómodos en una plaza estándar</li>
        <li><strong>Adultos</strong> que comparten pieza y quieren más comodidad</li>
        <li><strong>Piezas medianas</strong> donde hay espacio para algo más ancho que el estándar</li>
      </ul>

      <h2>Preguntas frecuentes</h2>
      <h3>¿Qué colchón se usa en una cama de plaza y media?</h3>
      <p>Un colchón de 105 o 120 cm de ancho, según la medida exacta del modelo. Consúltanos para confirmar la medida.</p>
      <h3>¿Puede tener cambios de medida?</h3>
      <p>Sí. Aceptamos hasta 3 cambios de medida por pedido con costo adicional.</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué medidas tiene un camarote de plaza y media?",
                acceptedAnswer: { "@type": "Answer", text: "La cama de plaza y media mide aproximadamente 105-120 cm de ancho. Es el punto intermedio entre la plaza estándar (90 cm) y las 2 plazas (135 cm)." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero cotizar un camarote de plaza y media en Santiago." />
    </>
  ),

  "litera-metalica-chile": () => (
    <>
      <p>
        En Chile, los términos <strong>litera</strong> y <strong>camarote</strong> se usan de forma intercambiable.
        Ambos se refieren al mismo tipo de mueble: una estructura que apila dos camas, una encima de la otra.
        En esta guía te explicamos todo sobre las literas metálicas disponibles en Chile.
      </p>

      <h2>¿Litera o camarote? ¿Hay diferencia?</h2>
      <p>
        En español de Chile, <strong>camarote</strong> es la palabra más usada.
        En España y otros países de habla hispana, se usa más <strong>litera</strong>.
        Ambos términos describen el mismo mueble: dos camas superpuestas en estructura vertical.
        Para efectos prácticos de búsqueda en Google Chile, si buscas "litera metálica" o "camarote metálico"
        encontrarás los mismos productos.
      </p>

      <h2>Tipos de literas metálicas en Chile</h2>
      <ul>
        <li><strong>Litera estándar (1 plaza + 1 plaza):</strong> el modelo más común y económico</li>
        <li><strong>Litera de plaza y media:</strong> cama inferior más ancha</li>
        <li><strong>Litera doble (2 plazas abajo):</strong> para adultos que necesitan más espacio</li>
        <li><strong>Litera triple:</strong> tres niveles de camas</li>
        <li><strong>Litera con nido:</strong> tercera cama deslizante incluida</li>
        <li><strong>Cama alta (loft):</strong> una sola cama elevada, espacio libre abajo</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, busco una litera metálica en Santiago. ¿Qué modelos tienen y cuáles son los precios?" />

      <h2>Ventajas de las literas metálicas vs madera</h2>
      <ul>
        <li>Mayor durabilidad y resistencia</li>
        <li>Menor mantenimiento a largo plazo</li>
        <li>No se astillan ni se parten</li>
        <li>Diseño más delgado y liviano visualmente</li>
        <li>Sin riesgo de polilla o humedad</li>
      </ul>

      <h2>Preguntas frecuentes</h2>
      <h3>¿Cuánto cuesta una litera metálica en Chile?</h3>
      <p>El precio varía según el modelo, tamaño y accesorios. Consulta por WhatsApp para recibir una cotización personalizada.</p>
      <h3>¿Hacen despacho de literas a domicilio en Santiago?</h3>
      <p>Sí. Despachamos e instalamos en Santiago y alrededores. El pago es contra entrega.</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué diferencia hay entre litera y camarote?",
                acceptedAnswer: { "@type": "Answer", text: "En Chile se usa más la palabra camarote. En España y otros países, litera. Ambos términos describen el mismo mueble: dos camas apiladas verticalmente en una estructura metálica o de madera." },
              },
              {
                "@type": "Question",
                name: "¿Hacen despacho de literas metálicas en Santiago?",
                acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos e instalamos en Santiago y alrededores con pago contra entrega." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero cotizar una litera metálica con entrega en Santiago." />
    </>
  ),

  "camarote-gamer-setup": () => (
    <>
      <p>
        Si eres gamer y tu pieza es pequeña, el espacio siempre es el enemigo.
        Monitor, PC, periféricos, silla, escritorio... y encima necesitas una cama.
        La solución más inteligente que existe hoy para este problema es la
        <strong> cama alta con escritorio</strong>, también conocida como camarote gamer.
      </p>

      <h2>¿Qué es un camarote gamer?</h2>
      <p>
        No existe un "camarote gamer" como categoría de producto específica.
        Lo que los gamers usan es una <strong>cama alta con escritorio integrado</strong>:
        la cama va en el nivel superior, y todo el espacio inferior queda libre para
        el escritorio, la silla y el setup completo.
        El resultado es un espacio de gaming completamente funcional en el mismo lugar donde duermes.
      </p>

      <h2>¿Por qué es perfecta la cama alta para gamers?</h2>
      <ul>
        <li><strong>El escritorio queda bajo la cama:</strong> todo integrado en un solo módulo</li>
        <li><strong>Más espacio en el piso:</strong> puedes poner una silla gamer cómoda</li>
        <li><strong>Cables ordenados:</strong> la estructura metálica permite organizar cables verticalmente</li>
        <li><strong>Mejor ergonomía:</strong> el espacio bajo la cama te da más altura que un escritorio común</li>
        <li><strong>Estética:</strong> las camas altas metálicas combinan bien con un setup gamer moderno</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, quiero armar un setup gamer con cama alta y escritorio. ¿Qué modelos tienen?" />

      <h2>Cómo armar tu setup gamer bajo una cama alta</h2>
      <h3>Paso 1: Elige la cama alta correcta</h3>
      <p>
        Necesitas una cama alta con suficiente espacio bajo la cama para sentarte cómodamente.
        Busca modelos con al menos 100-110 cm de altura libre desde el escritorio hasta la cama.
        Consulta las medidas exactas antes de comprar.
      </p>

      <h3>Paso 2: Planifica la posición del monitor</h3>
      <p>
        Si usas un monitor de escritorio, considera el brazo articulado para monitor,
        que te permite moverlo y guardarlo fácilmente. Si usas laptop, el espacio es más sencillo de organizar.
      </p>

      <h3>Paso 3: Iluminación LED</h3>
      <p>
        Las tiras LED son perfectas bajo la estructura de la cama alta.
        Crean el ambiente gamer sin ocupar espacio adicional.
        Puedes instalarlas en la parte inferior de la cama o en los costados de la estructura.
      </p>

      <h3>Paso 4: Organización de cables</h3>
      <p>
        Usa organizadores de cables que se adhieran a la estructura metálica.
        El vertical permite bajar todos los cables desde la cama hasta el escritorio de forma limpia.
      </p>

      <h2>Preguntas frecuentes</h2>
      <h3>¿Cabe un PC de escritorio bajo una cama alta?</h3>
      <p>Depende del tamaño de la torre. Los modelos compactos (Mini-ITX o Micro-ATX) encajan perfectamente. Las torres full-tower pueden ser más difíciles de manejar en ese espacio.</p>
      <h3>¿Qué silla gamer entra bajo una cama alta?</h3>
      <p>La mayoría de las sillas gamer estándar entran perfectamente. Solo asegúrate de que la altura máxima del respaldo no choque con la cama cuando te recuestas. Sillas con respaldo de hasta 80-90 cm funcionan bien.</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es un setup gamer con cama alta?",
                acceptedAnswer: { "@type": "Answer", text: "Es un setup donde se usa una cama alta (cama loft) para elevar la cama y usar el espacio debajo como zona de gaming: escritorio, monitor, PC y periféricos. Es la solución más eficiente de espacio para gamers en piezas pequeñas." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero una cama alta con escritorio para armar un setup gamer en Santiago." />
    </>
  ),

  "donde-comprar-camarote-santiago": () => (
    <>
      <p>
        Si estás buscando <strong>dónde comprar un camarote en Santiago</strong>, esta guía es para ti.
        Con tantas opciones —tiendas físicas, plataformas online, fabricantes directos y vendedores
        independientes— es fácil perder tiempo o terminar comprando algo que no cumple las expectativas.
        Aquí te contamos qué mirar, qué preguntar y cómo no equivocarte.
      </p>

      <h2>Opciones para comprar un camarote en Santiago</h2>
      <h3>1. Fabricantes directos con despacho</h3>
      <p>
        La opción más conveniente para la mayoría. Un fabricante directo como Camarotes Chile vende
        sin intermediarios, lo que permite precios más competitivos y atención personalizada.
        Puedes consultar modelos, medidas y configuraciones específicas por WhatsApp y coordinar
        el despacho directamente a tu domicilio en Santiago.
      </p>
      <p>
        <strong>Ventajas:</strong> precio directo, asesoría real, posibilidad de cambios de medida,
        pago contra entrega (pagas cuando llega).
        <strong> Desventajas:</strong> no puedes verlo físicamente antes de comprar, aunque esto
        se compensa con el pago contra entrega.
      </p>

      <h3>2. Tiendas de muebles físicas</h3>
      <p>
        Las grandes tiendas de muebles tienen camarotes en stock, pero generalmente con modelos
        estándar y poca flexibilidad de personalización. Los precios pueden ser más altos al
        incluir el margen del retail, y la atención postventa a veces es limitada.
      </p>
      <p>
        <strong>Ventajas:</strong> puedes verlo antes de comprar.
        <strong> Desventajas:</strong> modelos limitados, mayor precio, menos flexibilidad.
      </p>

      <h3>3. Plataformas de marketplace</h3>
      <p>
        Portales como MercadoLibre o Facebook Marketplace ofrecen camarotes de distintos vendedores.
        La variedad es grande pero la calidad es dispar. Antes de comprar en estas plataformas,
        revisa las reseñas del vendedor, pide fotos reales del producto terminado y confirma
        los plazos de entrega. El pago anticipado puede ser un riesgo si el vendedor no tiene historial.
      </p>

      <h2>¿Qué preguntar antes de comprar un camarote en Santiago?</h2>
      <ul>
        <li><strong>¿Las medidas son exactamente las que necesito?</strong> Mide tu espacio antes de comprar.</li>
        <li><strong>¿Incluye montaje?</strong> Algunos incluyen instalación, otros solo entregan desarmado.</li>
        <li><strong>¿Cuándo me llega?</strong> Los plazos de entrega varían entre 3 y 15 días hábiles.</li>
        <li><strong>¿Cómo se paga?</strong> Prefiere opciones con pago contra entrega siempre que sea posible.</li>
        <li><strong>¿Puedo pedir cambios de medida?</strong> Importante si tu espacio tiene restricciones.</li>
        <li><strong>¿Qué material es?</strong> El acero metálico es más duradero que el MDF o melamina para uso diario.</li>
      </ul>

      <h2>Ventajas del pago contra entrega al comprar un camarote</h2>
      <p>
        El <strong>pago contra entrega</strong> es el modelo más conveniente para el comprador:
        pagas solo cuando el camarote llega a tu casa y está instalado. Elimina el riesgo de
        pagar por algo que nunca llega o que llega diferente a lo prometido.
      </p>
      <p>
        En Camarotes Chile trabajamos con pago contra entrega en toda la Región Metropolitana.
        El despacho tiene un costo fijo de {20000} CLP sin importar el modelo elegido.
      </p>

      <h2>¿Qué modelo de camarote elegir?</h2>
      <p>
        Antes de buscar <strong>dónde comprar un camarote en Santiago</strong>, define qué modelo necesitas:
      </p>
      <ul>
        <li><strong>Camarote estándar (1 plaza + 1 plaza):</strong> para dos niños o adolescentes</li>
        <li><strong>Camarote nido:</strong> 3 camas en el espacio de 1, con tercera cama deslizante</li>
        <li><strong>Camarote con escritorio:</strong> cama arriba + escritorio abajo, ideal para estudiantes o gamers</li>
        <li><strong>Camarote doble:</strong> 2 plazas abajo + 1 plaza arriba, para adultos</li>
        <li><strong>Camarote plaza y media:</strong> 1.5 plazas en un nivel, más cómodo que el estándar</li>
        <li><strong>Camarote triple:</strong> 3 camas apiladas en 3 niveles, máximo ahorro de espacio</li>
      </ul>

      <h2>Plazos de entrega en Santiago</h2>
      <p>
        Los plazos de entrega para camarotes metálicos en Santiago dependen del fabricante y del modelo.
        En Camarotes Chile el plazo estimado es de 5 a 10 días hábiles desde el pedido confirmado.
        Coordinaremos contigo el día y horario de entrega antes de despachar.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto cuesta el despacho de un camarote en Santiago?",
                acceptedAnswer: { "@type": "Answer", text: "En Camarotes Chile el despacho tiene un costo fijo de $20.000 CLP en Santiago y alrededores, sin importar el modelo. El pago es contra entrega." },
              },
              {
                "@type": "Question",
                name: "¿En cuántos días llega un camarote en Santiago?",
                acceptedAnswer: { "@type": "Answer", text: "El plazo estimado es de 5 a 10 días hábiles desde el pedido confirmado. Se coordina el día y horario de entrega con el comprador." },
              },
              {
                "@type": "Question",
                name: "¿Puedo pedir medidas especiales al comprar un camarote en Santiago?",
                acceptedAnswer: { "@type": "Answer", text: "Sí. Aceptamos hasta 3 cambios de medida por pedido a $20.000 cada uno. Ideal si tu espacio tiene restricciones de ancho, largo o altura." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero comprar un camarote para Santiago. ¿Qué modelos tienen disponibles y cuál es el precio?" />
    </>
  ),

  "colchon-para-camarote": () => (
    <>
      <p>
        Una de las dudas más frecuentes al comprar un camarote es: <strong>¿qué colchón debo usar?</strong>
        No todos los colchones sirven para todos los camarotes, y elegir el tamaño o grosor equivocado
        puede ser un problema costoso. Esta guía te ayuda a entenderlo todo antes de comprar.
      </p>

      <h2>¿Qué medidas tiene el colchón para un camarote estándar?</h2>
      <p>
        Un camarote estándar de 1 plaza usa un <strong>colchón de 1 plaza</strong>:
        aproximadamente <strong>90 cm de ancho por 190-200 cm de largo</strong>.
        Este es el tamaño más común en Chile y el que encontrarás en cualquier tienda de colchones.
      </p>
      <p>
        Para camarotes de <strong>plaza y media</strong> (1.5 plazas), el colchón mide
        aproximadamente <strong>105-110 cm de ancho</strong> por el mismo largo.
        Para <strong>camarotes dobles</strong>, el colchón inferior es de 2 plazas (~135 cm de ancho).
      </p>
      <p>
        Antes de comprar el colchón, confirma las medidas interiores del camarote. Aunque los tamaños
        son estándar, puede haber variaciones de 1-3 cm entre modelos.
      </p>

      <h2>¿Cuánto grosor debe tener el colchón de un camarote?</h2>
      <p>
        Este es el punto más importante y donde más se equivoca la gente.
      </p>
      <h3>Camarote normal (2 pisos)</h3>
      <p>
        Para la cama superior e inferior de un camarote estándar, un colchón de <strong>10 a 18 cm</strong>
        de grosor funciona perfectamente. Los colchones más gruesos (20-25 cm) pueden quedar muy altos en
        la cama superior, reduciendo el espacio libre sobre la cama para moverse.
      </p>
      <p>
        Como regla: mientras más alto el colchón en el nivel superior, menos espacio libre tienes para
        sentarte y darte vuelta cómodamente. Para adultos que se sientan en la cama, un colchón de 12-15 cm
        es el punto ideal.
      </p>
      <h3>Cama nido (la que se desliza)</h3>
      <p>
        La cama nido deslizante requiere un colchón especialmente delgado: <strong>máximo 12-15 cm</strong>
        de grosor. Un colchón más grueso no cabe bajo la cama inferior y la cama nido no puede deslizarse.
        Usa un colchón de espuma de alta densidad o un colchón compacto específico para cama nido.
      </p>

      <h2>Tipos de colchón para camarote en Chile</h2>
      <h3>Espuma de alta densidad</h3>
      <p>
        El más usado en camarotes. Liviano, fácil de manejar para subirlo al nivel superior, y disponible
        en grosores desde 8 hasta 20 cm. Para nivel superior de camarote, un colchón de espuma de 12 cm
        y densidad 33-38 kg/m³ es una buena opción de relación calidad-precio.
      </p>
      <h3>Colchón ortopédico o de resortes</h3>
      <p>
        Más cómodo pero más pesado. Para el nivel inferior no hay problema. Para el nivel superior,
        considera el peso adicional al momento de subirlo y manipularlo. Los resortes ensacados tienen
        mejor desempeño que los resortes Bonnell para este uso.
      </p>
      <h3>Colchón de látex o memory foam</h3>
      <p>
        Alta calidad pero también mayor peso y grosor. Asegúrate de que el grosor no supere los 15 cm
        si lo usarás en el nivel superior, y verifica que el camarote soporte el peso del colchón más
        el usuario.
      </p>

      <h2>¿El camarote incluye parrilla?</h2>
      <p>
        La <strong>parrilla metálica</strong> (o base de listones) es la rejilla sobre la que va el colchón.
        Nuestros camarotes incluyen parrilla en ambos niveles. También ofrecemos parrillas adicionales
        (hasta 2 por pedido) para quienes necesitan reemplazar o agregar.
      </p>
      <p>
        No necesitas base de resortes ni somier adicional: la parrilla del camarote cumple esa función.
        Un colchón de espuma o de resortes va directamente sobre la parrilla.
      </p>

      <h2>Medidas de colchón según modelo de camarote</h2>
      <ul>
        <li><strong>Camarote estándar (2x 1 plaza):</strong> colchón 90 x 190/200 cm, hasta 18 cm grosor</li>
        <li><strong>Camarote plaza y media:</strong> cama de 1.5 plazas ~105 cm ancho, confirmar con fabricante</li>
        <li><strong>Camarote doble (2 plazas abajo):</strong> colchón inferior ~135 x 190 cm</li>
        <li><strong>Camarote nido (tercera cama):</strong> colchón 90 x 190 cm, máximo 12-15 cm grosor</li>
        <li><strong>Cama alta o camarote con escritorio:</strong> colchón 90 x 190/200 cm</li>
      </ul>
      <p>Siempre confirma las medidas exactas con nosotros al cotizar tu camarote.</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué medidas tiene el colchón de un camarote de 1 plaza?",
                acceptedAnswer: { "@type": "Answer", text: "El colchón estándar de 1 plaza mide aproximadamente 90 cm de ancho por 190-200 cm de largo. Este es el tamaño más común para camarotes estándar en Chile." },
              },
              {
                "@type": "Question",
                name: "¿Qué grosor de colchón se recomienda para el nivel superior de un camarote?",
                acceptedAnswer: { "@type": "Answer", text: "Para el nivel superior de un camarote, se recomienda un colchón de 10 a 18 cm de grosor. Colchones más gruesos reducen el espacio libre para moverse sobre la cama." },
              },
              {
                "@type": "Question",
                name: "¿Qué grosor de colchón necesita la cama nido?",
                acceptedAnswer: { "@type": "Answer", text: "La cama nido deslizante requiere un colchón de máximo 12-15 cm de grosor para que pueda deslizarse correctamente bajo la cama inferior." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero consultar qué colchón recomienda para el camarote que me interesa. ¿Me pueden orientar?" />
    </>
  ),

  "camarote-para-ninos": () => (
    <>
      <p>
        Comprar un <strong>camarote para niños</strong> es una decisión que involucra mucho más que el
        precio o el diseño. La seguridad, la edad de los niños, el espacio disponible y el modelo correcto
        son factores que los padres deben considerar antes de elegir. Esta guía responde las preguntas
        más comunes para que puedas comprar con confianza.
      </p>

      <h2>¿Desde qué edad pueden usar un camarote los niños?</h2>
      <p>
        La recomendación general es que los niños comiencen a usar el <strong>nivel superior de un camarote
        a partir de los 6 años</strong>. Antes de esa edad, el nivel de coordinación motriz y la conciencia
        del peligro no son suficientes para subir y bajar de forma segura, especialmente durante la noche.
      </p>
      <p>
        Para niños menores de 6 años que comparten pieza con un hermano mayor, la configuración más
        segura es que el menor duerma en el nivel inferior y el mayor en el superior.
      </p>

      <h2>¿Qué modelo de camarote es mejor para niños?</h2>
      <h3>Camarote nido — para 3 hijos o visitas frecuentes</h3>
      <p>
        El <strong>camarote nido</strong> es el favorito de las familias con 3 hijos que comparten pieza.
        Tiene cama superior, cama inferior y una tercera cama deslizante que se guarda de día.
        La tercera cama al nivel del suelo es la más segura para el hijo más pequeño.
      </p>
      <h3>Camarote estándar (1 plaza + 1 plaza)</h3>
      <p>
        El modelo más común y el más económico. Dos niños, una cama cada uno, mismo espacio que una cama.
        Funciona muy bien para hermanos con edades cercanas. El mayor va arriba (más entretenido para ellos),
        el menor abajo.
      </p>
      <h3>Camarote con escritorio</h3>
      <p>
        Para el hijo mayor que ya tiene tarea y necesita escritorio. La cama va arriba y el escritorio
        ocupa el espacio inferior. Perfecto para niños de 8 años en adelante que comparten pieza y
        uno de ellos necesita zona de estudio.
      </p>

      <h2>Seguridad en camarotes para niños: lo que debes verificar</h2>
      <ul>
        <li>
          <strong>Barandas en el nivel superior:</strong> deben tener al menos dos barandas de seguridad
          en el nivel alto. En Camarotes Chile el nivel superior siempre incluye barandas y puedes
          agregar barandas adicionales si lo necesitas.
        </li>
        <li>
          <strong>Escalera firme:</strong> la escalera debe estar bien fija a la estructura, con
          peldaños amplios y seguros. No debe moverse al subir y bajar.
        </li>
        <li>
          <strong>Sin filos ni tornillos expuestos:</strong> los camarotes metálicos de calidad tienen
          acabados redondeados y sin puntas que puedan causar cortes o raspaduras.
        </li>
        <li>
          <strong>Capacidad de peso:</strong> el nivel superior debe soportar el peso esperado.
          Consulta el peso máximo del modelo al cotizar.
        </li>
      </ul>

      <h2>¿Cómo hablar con los niños sobre las reglas del camarote?</h2>
      <p>
        Establecer reglas claras desde el primer día reduce accidentes. Las más importantes:
      </p>
      <ul>
        <li>No saltar sobre la cama superior</li>
        <li>Bajar siempre de frente a la escalera, nunca de espaldas</li>
        <li>No colgar objetos pesados de la estructura</li>
        <li>No apoyarse sobre las barandas hacia afuera</li>
      </ul>

      <h2>¿Qué colchón usar en el camarote de los niños?</h2>
      <p>
        Para niños, un colchón de espuma de alta densidad de 10-15 cm de grosor es ideal para el nivel
        superior. Es liviano (más fácil de poner y cambiar la ropa de cama), higiénico y suficientemente
        cómodo para niños en crecimiento. Elige un colchón que sea firme, no blando: los niños se
        benefician más de un colchón firme que uno suave.
      </p>

      <h2>Camarote metálico vs. de madera para niños</h2>
      <p>
        Para uso infantil diario, el <strong>camarote metálico</strong> tiene ventajas claras:
      </p>
      <ul>
        <li>No se astilla ni se rompe como puede hacerlo la madera o el MDF</li>
        <li>No absorbe humedad ni se deforma con el tiempo</li>
        <li>Es más fácil de limpiar</li>
        <li>Aguanta mejor el uso intensivo (los niños son más exigentes con el mobiliario)</li>
        <li>Generalmente más económico que un camarote de madera de calidad equivalente</li>
      </ul>

      <h2>Despacho e instalación en Santiago</h2>
      <p>
        Todos nuestros camarotes se despachan e instalan en Santiago y alrededores.
        El costo de despacho es de $20.000 CLP y el pago es contra entrega: pagas cuando el camarote
        está instalado en la pieza de tus hijos y estás conforme. Plazo estimado: 5 a 10 días hábiles.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Desde qué edad pueden usar el nivel superior del camarote los niños?",
                acceptedAnswer: { "@type": "Answer", text: "Se recomienda a partir de los 6 años. Antes de esa edad, el nivel de coordinación no es suficiente para subir y bajar con seguridad durante la noche." },
              },
              {
                "@type": "Question",
                name: "¿Qué camarote es mejor para 3 hijos?",
                acceptedAnswer: { "@type": "Answer", text: "El camarote nido es la solución ideal para 3 hijos: tiene cama superior, cama inferior y una tercera cama deslizante al nivel del suelo que se guarda de día. Las 3 camas en el espacio de 1." },
              },
              {
                "@type": "Question",
                name: "¿Los camarotes metálicos son seguros para niños?",
                acceptedAnswer: { "@type": "Answer", text: "Sí, con las siguientes condiciones: barandas de seguridad en el nivel superior, escalera firme y bien fijada, sin filos ni tornillos expuestos, y peso máximo respetado. Nuestros camarotes cumplen todos estos requisitos." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero un camarote para mis hijos en Santiago. ¿Me pueden orientar sobre qué modelo es mejor según las edades?" />
    </>
  ),

  "camarote-matrimonial-chile": () => (
    <>
      <p>
        Cuando la gente busca un <strong>camarote matrimonial</strong> en Chile, generalmente se refiere a
        una de dos cosas: un camarote donde la cama inferior sea de 2 plazas (matrimonial), o un camarote
        donde los dos niveles sean de 2 plazas. En esta guía te explicamos qué existe realmente en el mercado
        y qué modelo se adapta mejor a tu necesidad.
      </p>

      <h2>¿Existe el camarote matrimonial en Chile?</h2>
      <p>
        Sí, aunque el término puede generar confusión. En el mercado chileno, cuando se habla de
        <strong> camarote matrimonial</strong> o <strong>litera matrimonial</strong>, generalmente
        se hace referencia al <strong>camarote doble</strong>: un camarote con cama de 2 plazas abajo
        y cama de 1 plaza (o 1.5 plazas) arriba.
      </p>
      <p>
        No es un camarote donde ambos niveles sean de 2 plazas. Lo habitual es la cama matrimonial
        en el nivel inferior y una cama estándar en el superior.
      </p>

      <h2>Modelos disponibles con cama de 2 plazas</h2>
      <h3>Camarote Doble — 2 plazas abajo + 1 plaza arriba</h3>
      <p>
        Es el modelo más popular cuando se busca <strong>camarote matrimonial en Chile</strong>.
        La cama inferior de 2 plazas (~135 cm de ancho) permite que dos adultos duerman cómodamente
        abajo, mientras que la cama superior de 1 plaza queda para un hijo, visita o segundo adulto.
      </p>
      <p>El camarote doble es ideal para:</p>
      <ul>
        <li>Parejas con un hijo que comparten habitación</li>
        <li>Hogares donde se necesita alojar a una pareja y otra persona</li>
        <li>Adultos que priorizan el confort en la cama inferior</li>
      </ul>

      <h3>Camarote Plaza y Media — punto intermedio</h3>
      <p>
        Si no necesitas una cama completa de 2 plazas pero el estándar de 90 cm se siente estrecho,
        el <strong>camarote de plaza y media</strong> (~105 cm) es el punto intermedio ideal.
        Para una persona adulta es notablemente más cómodo que la plaza estándar.
      </p>

      <h2>¿Cuánto espacio necesito para un camarote matrimonial?</h2>
      <p>
        La cama de 2 plazas tiene ~135 cm de ancho, lo que hace que el camarote doble requiera
        más espacio que uno estándar. Necesitas al menos <strong>150-160 cm de ancho disponible</strong>
        en la habitación para el camarote más espacio de circulación.
        Mide tu pieza y cuéntanoslo por WhatsApp antes de cotizar.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es un camarote matrimonial en Chile?",
                acceptedAnswer: { "@type": "Answer", text: "En Chile, el camarote matrimonial generalmente hace referencia al camarote doble: cama de 2 plazas en el nivel inferior y cama de 1 plaza en el superior." },
              },
              {
                "@type": "Question",
                name: "¿Cuánto mide el camarote doble (camarote matrimonial)?",
                acceptedAnswer: { "@type": "Answer", text: "La cama inferior del camarote doble mide aproximadamente 135 cm de ancho (2 plazas). La cama superior puede ser de 1 plaza (90 cm) o de 1.5 plazas según el modelo. Consulta las medidas exactas al cotizar." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, busco un camarote matrimonial (con cama de 2 plazas abajo) para Santiago. ¿Qué modelos tienen y cuál es el precio?" />
    </>
  ),

  "armar-camarote-metalico": () => (
    <>
      <p>
        Armar un <strong>camarote metálico</strong> puede parecer intimidante a primera vista,
        pero con la guía correcta y las herramientas básicas, la mayoría de las personas puede
        hacerlo en 1-2 horas. En esta guía te explicamos el proceso general, las herramientas
        necesarias y los errores más comunes a evitar.
      </p>

      <h2>¿Los camarotes de Camarotes Chile vienen con instalación?</h2>
      <p>
        Sí. Nuestro servicio de despacho en Santiago incluye instalación del camarote en la
        habitación indicada. No necesitas armarlo tú mismo: el equipo de entrega llega, instala
        el camarote y se asegura de que quede firme y seguro antes de irse.
      </p>

      <h2>Herramientas necesarias para armar un camarote metálico</h2>
      <ul>
        <li><strong>Llave allen (hex key):</strong> el tipo de tornillo más común en camarotes metálicos</li>
        <li><strong>Llave ajustable o fija:</strong> para tuercas y pernos</li>
        <li><strong>Destornillador Phillips:</strong> para tornillos menores</li>
        <li><strong>Mazo de goma:</strong> útil para encajar piezas sin dañarlas</li>
        <li><strong>Nivel de burbuja:</strong> para verificar que la estructura quede recta</li>
        <li><strong>Una segunda persona:</strong> casi todos los pasos son más fáciles y más seguros con ayuda</li>
      </ul>

      <h2>Pasos generales para armar un camarote metálico</h2>
      <h3>Paso 1: Leer las instrucciones antes de empezar</h3>
      <p>
        Antes de abrir cajas o ensamblar piezas, revisa todas las instrucciones y el listado de piezas.
        Verifica que estén todas las piezas incluidas. Es mucho más fácil detectar una pieza faltante
        antes de empezar que a la mitad del proceso.
      </p>

      <h3>Paso 2: Organizar las piezas por categoría</h3>
      <p>
        Separa las piezas por tipo: postes verticales, travesaños horizontales, escalera, barandas,
        parrilla y tornillería. Esto evita confusiones durante el armado.
      </p>

      <h3>Paso 3: Armar la estructura base del nivel inferior</h3>
      <p>
        Empieza por los cuatro postes verticales y los travesaños del nivel inferior. Ensambla
        sin apretar completamente los tornillos hasta que tengas la estructura completa,
        para poder ajustar alineaciones.
      </p>

      <h3>Paso 4: Agregar el nivel superior</h3>
      <p>
        Con ayuda de otra persona, agrega los travesaños del nivel superior. Esta es la parte
        donde más ayuda hace falta: sujetar los travesaños a los postes mientras se insertan
        los tornillos requiere al menos dos pares de manos.
      </p>

      <h3>Paso 5: Instalar escalera y barandas</h3>
      <p>
        La escalera generalmente va fija a uno de los lados. Las barandas van en el nivel superior
        para seguridad. Asegúrate de que queden firmes.
      </p>

      <h3>Paso 6: Colocar las parrillas y verificar estabilidad</h3>
      <p>
        Las parrillas metálicas van apoyadas sobre los travesaños. Verifica que estén bien asentadas,
        luego aprieta todos los tornillos (de abajo hacia arriba) y usa el nivel para confirmar
        que la estructura está recta.
      </p>

      <h2>Errores comunes al armar un camarote metálico</h2>
      <ul>
        <li><strong>Apretar tornillos antes de tener toda la estructura:</strong> dificulta ajustar alineaciones después</li>
        <li><strong>Armar solo:</strong> los travesaños superiores requieren dos personas</li>
        <li><strong>No verificar las barandas:</strong> son la pieza de seguridad más crítica</li>
        <li><strong>No leer las instrucciones:</strong> cada modelo tiene un orden de ensamblaje específico</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Los camarotes de Camarotes Chile incluyen instalación?",
                acceptedAnswer: { "@type": "Answer", text: "Sí. El despacho en Santiago incluye instalación del camarote en la habitación indicada. No necesitas armarlo tú mismo." },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tiempo tarda en armarse un camarote metálico?",
                acceptedAnswer: { "@type": "Answer", text: "Con las herramientas correctas y dos personas, un camarote metálico estándar tarda entre 1 y 2 horas en armarse." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero pedir un camarote con instalación incluida en Santiago. ¿Me pueden cotizar?" />
    </>
  ),

  "camarote-adultos": () => (
    <>
      <p>
        Los <strong>camarotes para adultos</strong> en Chile tienen características específicas
        que los diferencian de los modelos pensados exclusivamente para niños. Mayor resistencia,
        mayor capacidad de peso y mayor comodidad. Esta guía te orienta sobre qué buscar y
        qué modelos son más adecuados para adultos.
      </p>

      <h2>¿Qué diferencia un camarote para adultos de uno para niños?</h2>
      <p>
        La diferencia principal es la <strong>capacidad de peso</strong> y el <strong>ancho de cama</strong>.
        Un camarote pensado para adultos debe soportar más peso en ambos niveles y ofrecer más espacio
        para dormir cómodamente.
      </p>
      <ul>
        <li><strong>Capacidad de peso:</strong> busca modelos que soporten al menos 100-120 kg por nivel</li>
        <li><strong>Ancho de cama:</strong> 1 plaza (90 cm) es funcional para adultos, pero 1.5 plazas es notablemente más cómodo</li>
        <li><strong>Altura libre sobre cada cama:</strong> cuanto más, mejor para adultos que se sientan</li>
      </ul>

      <h2>Mejores modelos de camarote para adultos en Chile</h2>
      <h3>Camarote Doble — el más cómodo para adultos</h3>
      <p>
        El <strong>camarote doble</strong> con cama de 2 plazas abajo y 1 plaza arriba es el modelo
        más cómodo para dos adultos que comparten pieza. La cama matrimonial inferior da el espacio
        habitual de una cama de adulto.
      </p>

      <h3>Camarote Plaza y Media — buen balance comodidad/espacio</h3>
      <p>
        El <strong>camarote de plaza y media</strong> (~105 cm de ancho) ofrece más comodidad que
        la plaza estándar sin llegar al tamaño de una cama matrimonial. Ideal para adultos que
        duermen solos pero quieren más espacio.
      </p>

      <h3>Camarote Titanic — mayor resistencia estructural</h3>
      <p>
        Para adultos con mayor peso corporal o que quieren máxima durabilidad, el
        <strong> camarote Titanic</strong> con estructura reforzada es la opción más indicada.
      </p>

      <h3>Camarote con Escritorio — para el adulto que trabaja desde casa</h3>
      <p>
        El adulto en departamento pequeño que necesita cama + escritorio encontrará en el
        <strong> camarote con escritorio</strong> la solución perfecta: cama arriba, escritorio integrado abajo.
      </p>

      <h2>Seguridad en el nivel superior para adultos</h2>
      <p>
        El nivel superior de un camarote puede ser tan seguro para un adulto como para un niño,
        siempre que la baranda de seguridad esté instalada, la escalera sea firme y la capacidad
        de peso del nivel superior sea adecuada para el usuario.
      </p>
      <p>
        Al cotizar, especifica que el nivel superior también lo usará un adulto. Así te recomendamos
        el modelo correcto según peso y uso esperado.
      </p>

      <h2>¿Camarote metálico o de madera para adultos?</h2>
      <p>
        Para adultos, el camarote metálico tiene claras ventajas: soporta más peso con menor espesor
        de estructura, no se dobla ni se deforma con el tiempo, y el mantenimiento es prácticamente nulo.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué camarote es mejor para dos adultos?",
                acceptedAnswer: { "@type": "Answer", text: "El camarote doble (con cama de 2 plazas abajo y 1 plaza arriba) es el más cómodo para dos adultos. También puedes considerar el camarote de plaza y media si el espacio de la habitación es más limitado." },
              },
              {
                "@type": "Question",
                name: "¿El camarote metálico es seguro para adultos en el nivel superior?",
                acceptedAnswer: { "@type": "Answer", text: "Sí, siempre que la baranda de seguridad esté correctamente instalada, la escalera sea firme y la capacidad de peso del nivel superior sea adecuada para el usuario adulto." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, busco un camarote para adultos en Santiago. ¿Qué modelos recomiendan y cuáles son los precios?" />
    </>
  ),

  "medidas-camarote-estandar": () => (
    <>
      <p>
        Antes de comprar un camarote, la pregunta más importante es: <strong>¿cabe en mi espacio?</strong>
        Conocer las <strong>medidas estándar de un camarote</strong> —ancho, largo y alto— te permite
        saber si el modelo que quieres entra en tu pieza antes de comprometerte con la compra.
        Esta guía te entrega las medidas de referencia para cada tipo de camarote disponible en Chile.
      </p>

      <h2>Medidas estándar de un camarote de 1 plaza</h2>
      <p>
        El camarote más común en Chile es el de <strong>1 plaza + 1 plaza</strong>.
        Sus medidas de referencia son:
      </p>
      <ul>
        <li><strong>Ancho de cada cama:</strong> ~90 cm (1 plaza estándar)</li>
        <li><strong>Largo de cada cama:</strong> ~190–200 cm</li>
        <li><strong>Alto total de la estructura:</strong> variable según modelo, consultar al cotizar</li>
        <li><strong>Espacio que ocupa en el piso:</strong> equivalente a 1 cama individual</li>
      </ul>
      <p>
        Estas son medidas de referencia. Las medidas exactas varían según el modelo y se confirman
        al cotizar. Si tu espacio tiene restricciones, puedes solicitar hasta 3 cambios de medida.
      </p>

      <h2>Medidas según modelo de camarote</h2>
      <h3>Camarote nido</h3>
      <p>
        El camarote nido tiene las mismas medidas de base que el camarote estándar (~90 cm de ancho),
        pero la tercera cama deslizante requiere espacio lateral adicional para sacarla.
        Asegúrate de tener al menos 100–110 cm de espacio libre al costado donde va a salir la cama nido.
      </p>

      <h3>Camarote doble (2 plazas abajo)</h3>
      <p>
        La cama inferior del camarote doble mide aproximadamente <strong>135 cm de ancho</strong>
        (2 plazas). Necesitas al menos 150–160 cm de ancho disponible en la pieza para el camarote
        más espacio de circulación.
      </p>

      <h3>Camarote plaza y media (1.5 plazas)</h3>
      <p>
        La cama de 1.5 plazas mide aproximadamente <strong>105–110 cm de ancho</strong>,
        a mitad de camino entre la plaza estándar (90 cm) y la de 2 plazas (135 cm).
      </p>

      <h3>Camarote con escritorio o cama alta</h3>
      <p>
        El ancho de la cama (~90 cm) es igual al estándar, pero la <strong>altura total es mayor</strong>
        ya que necesita espacio para la cama arriba y el escritorio abajo con altura suficiente para
        sentarse. Importante: mide la altura de tu techo antes de comprar.
      </p>

      <h2>¿Cómo medir tu pieza antes de comprar un camarote?</h2>
      <p>
        Sigue estos pasos antes de cotizar:
      </p>
      <ul>
        <li><strong>Ancho disponible:</strong> mide el espacio donde irá el camarote (incluyendo circulación)</li>
        <li><strong>Largo disponible:</strong> mide el largo de la pared donde va el camarote</li>
        <li><strong>Alto del techo:</strong> crítico para camarotes con escritorio, camas altas y camarotes triples</li>
        <li><strong>Ancho de la puerta:</strong> verifica que la estructura pueda entrar desarmada por la puerta</li>
      </ul>
      <p>
        Al cotizar, comparte estas cuatro medidas por WhatsApp y te recomendamos el modelo que mejor encaja.
      </p>

      <h2>¿Qué pasa si mi espacio tiene medidas fuera del estándar?</h2>
      <p>
        Ofrecemos hasta 3 <strong>cambios de medida</strong> por pedido, cada uno con un costo adicional.
        Esto permite adaptar el largo del camarote, el ancho de las camas o la altura total de la estructura
        a las restricciones específicas de tu espacio. Consúltanos antes de descartar un modelo.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto mide un camarote estándar de 1 plaza?",
                acceptedAnswer: { "@type": "Answer", text: "Un camarote estándar de 1 plaza tiene camas de aproximadamente 90 cm de ancho por 190–200 cm de largo. El alto total varía según el modelo. Consulta las medidas exactas al cotizar." },
              },
              {
                "@type": "Question",
                name: "¿Puedo pedir un camarote con medidas personalizadas?",
                acceptedAnswer: { "@type": "Answer", text: "Sí. Ofrecemos hasta 3 cambios de medida por pedido a $20.000 cada uno. Esto permite adaptar el camarote al espacio específico de tu pieza." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero confirmar si un camarote cabe en mi espacio. Mi pieza mide [ancho] x [largo] y el techo tiene [alto] cm." />
    </>
  ),

  "camarote-segunda-mano-vs-nuevo": () => (
    <>
      <p>
        Al buscar un camarote en Chile, muchas personas consideran la opción de segunda mano como
        una forma de ahorrar. En esta guía hacemos el análisis honesto: cuándo vale la pena un
        <strong> camarote de segunda mano</strong> y cuándo no, y qué debes revisar si decides comprar uno usado.
      </p>

      <h2>¿Cuánto se puede ahorrar con un camarote de segunda mano?</h2>
      <p>
        En portales como MercadoLibre o Facebook Marketplace, los camarotes metálicos usados se encuentran
        generalmente entre un 30% y 50% más baratos que uno nuevo. Sin embargo, hay costos ocultos
        que no siempre se toman en cuenta al comparar.
      </p>
      <ul>
        <li><strong>Transporte:</strong> debes organizar y pagar el traslado, que puede costar entre $20.000 y $60.000 o más según la distancia y el servicio</li>
        <li><strong>Armado:</strong> normalmente no incluye instalación — debes hacerlo tú</li>
        <li><strong>Piezas faltantes:</strong> tornillos perdidos, barandas dañadas, parrillas deformadas</li>
        <li><strong>Pintura deteriorada:</strong> óxido, descascarado, manchas difíciles de remover</li>
      </ul>

      <h2>Riesgos al comprar un camarote usado en Chile</h2>
      <h3>Estructura comprometida</h3>
      <p>
        Un camarote metálico que ha sido usado durante años puede tener soldaduras débiles, tornillos
        dañados o tubos con dobladuras que no son evidentes a primera vista. Estos defectos estructurales
        son un riesgo real, especialmente si el nivel superior lo va a usar un niño o adulto.
      </p>
      <h3>Higiene</h3>
      <p>
        Las parrillas metálicas y los marcos de la cama acumulan polvo, ácaros y en algunos casos
        humedad. Aunque se pueden limpiar, no siempre es posible garantizar que estén en condiciones
        higiénicas óptimas, especialmente si el uso previo fue en una pieza con niños pequeños.
      </p>
      <h3>Sin garantía ni postventa</h3>
      <p>
        Si un tornillo falta o una baranda llega floja, dependes de encontrar los repuestos por tu cuenta.
        Un camarote nuevo de fabricante directo generalmente tiene soporte ante cualquier problema.
      </p>

      <h2>¿Cuándo SÍ conviene el camarote de segunda mano?</h2>
      <ul>
        <li>Cuando es de alguien conocido y puedes ver el estado real en persona</li>
        <li>Cuando el uso va a ser temporal (meses, no años)</li>
        <li>Cuando tienes la capacidad de transportarlo, armarlo y revisar su estado estructural</li>
      </ul>

      <h2>¿Cuándo NO conviene el camarote de segunda mano?</h2>
      <ul>
        <li>Cuando es para niños y la seguridad es prioritaria</li>
        <li>Cuando no tienes cómo verificar el estado real antes de comprarlo</li>
        <li>Cuando necesitas medidas específicas o accesorios particulares</li>
        <li>Cuando quieres garantía y soporte en caso de problemas</li>
      </ul>

      <h2>Alternativa: camarote nuevo con pago contra entrega</h2>
      <p>
        En Camarotes Chile, el pago es contra entrega: pagas solo cuando el camarote llega instalado
        a tu casa y estás conforme. Esto elimina el principal riesgo de comprar algo que no cumple
        las expectativas. El despacho e instalación en Santiago están incluidos en el costo de despacho.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Vale la pena comprar un camarote de segunda mano en Chile?",
                acceptedAnswer: { "@type": "Answer", text: "Depende del caso. Si es de alguien conocido y puedes verificar el estado, puede ser una buena opción. Si es de un desconocido en marketplace, el ahorro real puede ser menor de lo esperado al sumar transporte, armado y riesgo de piezas faltantes o estructura comprometida." },
              },
              {
                "@type": "Question",
                name: "¿Qué revisar al comprar un camarote metálico usado?",
                acceptedAnswer: { "@type": "Answer", text: "Revisa: estado de las soldaduras y tornillos, condición de las barandas de seguridad, que la escalera esté firme, que la parrilla no esté deformada, y que no haya óxido ni corrosión en los puntos de carga." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, estoy decidiendo entre un camarote nuevo y uno de segunda mano. ¿Me pueden cotizar un modelo nuevo?" />
    </>
  ),

  "como-elegir-camarote": () => (
    <>
      <p>
        Con tantos modelos de camarote disponibles en Chile, elegir el correcto puede ser confuso.
        Esta guía te hace las preguntas correctas para que puedas llegar a la respuesta en pocos minutos,
        sin importar si es para niños, adultos o un espacio con restricciones de medida.
      </p>

      <h2>Pregunta 1: ¿Cuántas personas van a dormir en el camarote?</h2>
      <p>
        Esta es la pregunta de partida. La respuesta define inmediatamente qué tipo de camarote necesitas:
      </p>
      <ul>
        <li><strong>2 personas:</strong> camarote estándar (1+1 plaza), camarote plaza y media, camarote doble</li>
        <li><strong>3 personas:</strong> camarote nido (con tercera cama deslizante) o camarote triple</li>
        <li><strong>1 persona + zona de trabajo:</strong> camarote con escritorio o cama alta</li>
      </ul>

      <h2>Pregunta 2: ¿Qué edades tienen los usuarios?</h2>
      <p>La edad del usuario define el ancho de cama y el modelo más adecuado:</p>
      <ul>
        <li><strong>Niños hasta 10-12 años:</strong> camarote estándar de 1 plaza por nivel es suficiente</li>
        <li><strong>Adolescentes y adultos jóvenes:</strong> camarote plaza y media da más comodidad sin ocupar más espacio</li>
        <li><strong>Adultos que priorizan comodidad:</strong> camarote doble (2 plazas abajo)</li>
        <li><strong>Menores de 6 años:</strong> no se recomienda el nivel superior — que duerman abajo</li>
      </ul>

      <h2>Pregunta 3: ¿Cuáles son las medidas de tu espacio?</h2>
      <p>
        Mide el ancho, largo y altura del techo de tu pieza antes de cotizar. Los puntos críticos:
      </p>
      <ul>
        <li><strong>Camarote estándar:</strong> necesitas ~100 cm de ancho disponible</li>
        <li><strong>Camarote doble:</strong> necesitas ~150-160 cm de ancho disponible</li>
        <li><strong>Camarote con escritorio o cama alta:</strong> necesitas al menos 210-220 cm de techo</li>
        <li><strong>Camarote triple:</strong> necesitas al menos 230-250 cm de techo</li>
        <li><strong>Camarote nido:</strong> espacio adicional lateral para sacar la tercera cama</li>
      </ul>

      <h2>Pregunta 4: ¿Con qué frecuencia se usarán las camas?</h2>
      <ul>
        <li><strong>Uso diario todas las noches:</strong> cualquier modelo, elige según comodidad y espacio</li>
        <li><strong>Tercera cama solo ocasional:</strong> camarote nido — se guarda cuando no se usa</li>
        <li><strong>Uso intensivo o adultos con mayor peso:</strong> considera el camarote Titanic (estructura reforzada)</li>
      </ul>

      <h2>Pregunta 5: ¿Necesitas accesorios adicionales?</h2>
      <p>
        Todos nuestros camarotes permiten agregar:
      </p>
      <ul>
        <li>Hasta 2 parrillas metálicas adicionales (o 3 en el camarote nido)</li>
        <li>Hasta 2 barandas de seguridad adicionales</li>
        <li>Hasta 3 cambios de medida para personalizar el camarote</li>
      </ul>

      <h2>Resumen: árbol de decisión rápido</h2>
      <ul>
        <li>¿Necesitas 3 camas en 1 espacio? → <strong>Camarote nido</strong> (tercera cama ocasional) o <strong>triple</strong> (uso diario)</li>
        <li>¿Dos adultos o máxima comodidad abajo? → <strong>Camarote doble</strong></li>
        <li>¿Quieres escritorio integrado? → <strong>Camarote con escritorio</strong></li>
        <li>¿Solo quieres espacio libre abajo? → <strong>Cama alta</strong></li>
        <li>¿Estándar pero más cómodo? → <strong>Camarote plaza y media</strong></li>
        <li>¿Máxima resistencia? → <strong>Camarote Titanic</strong></li>
        <li>¿Uso normal, dos niños? → <strong>Camarote estándar</strong></li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué camarote es mejor para niños pequeños?",
                acceptedAnswer: { "@type": "Answer", text: "Para niños menores de 6 años, que duerman en el nivel inferior. A partir de los 6 años pueden usar el nivel superior con baranda de seguridad instalada. El camarote estándar de 1 plaza es la opción más habitual." },
              },
              {
                "@type": "Question",
                name: "¿Qué camarote ocupa menos espacio en el piso?",
                acceptedAnswer: { "@type": "Answer", text: "Todos los camarotes ocupan en el piso el espacio de una sola cama. El camarote nido ocupa lo mismo que uno estándar y agrega una tercera cama que se guarda debajo. La cama alta y el camarote con escritorio también ocupan solo el espacio de 1 plaza." },
              },
              {
                "@type": "Question",
                name: "¿Cómo saber qué camarote cabe en mi pieza?",
                acceptedAnswer: { "@type": "Answer", text: "Mide el ancho, largo y alto del techo de tu pieza. Luego comparte esas medidas por WhatsApp y te recomendamos el modelo correcto. También puedes pedir cambios de medida si tu espacio tiene restricciones." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, no sé qué camarote elegir. ¿Me pueden orientar según mis necesidades y el tamaño de mi pieza?" />
    </>
  ),

  "cuanto-cuesta-camarote-chile": () => (
    <>
      <p>
        Una de las primeras preguntas que se hace cualquier persona que busca un camarote es:
        <strong> ¿cuánto cuesta?</strong> La respuesta honesta es que el precio varía según el modelo,
        los accesorios y si hay cambios de medida. En esta guía te explicamos qué factores determinan
        el <strong>precio de un camarote metálico en Chile</strong> para que puedas cotizar con mejor criterio.
      </p>

      <h2>¿Por qué no publicamos precios en la web?</h2>
      <p>
        Los precios de los camarotes metálicos dependen de varios factores que varían: el costo del acero,
        los accesorios seleccionados, los cambios de medida solicitados y la disponibilidad de stock.
        Publicar precios fijos que después no reflejan la realidad genera confusión y frustración.
      </p>
      <p>
        Por eso preferimos cotizar directamente por WhatsApp, donde podemos darte el precio exacto
        para el modelo que necesitas, con los accesorios que quieres y sin sorpresas al final.
      </p>

      <h2>¿Qué factores determinan el precio de un camarote?</h2>
      <h3>El modelo</h3>
      <p>
        No todos los camarotes cuestan lo mismo. Como referencia general de menor a mayor precio:
        camarote estándar → camarote plaza y media → camarote nido → camarote doble → camarote triple →
        camarote con escritorio / Titanic. Los modelos más complejos o con mayor cantidad de acero
        tienen mayor costo de fabricación.
      </p>
      <h3>Los accesorios adicionales</h3>
      <p>
        Los accesorios opcionales agregan costo al precio base del camarote:
      </p>
      <ul>
        <li><strong>Parrillas adicionales:</strong> hasta 2 por pedido (o 3 en el camarote nido)</li>
        <li><strong>Barandas adicionales:</strong> hasta 2 por pedido</li>
        <li><strong>Cambios de medida:</strong> hasta 3, cada uno con costo adicional</li>
      </ul>
      <h3>El despacho</h3>
      <p>
        El despacho en Santiago tiene un costo fijo de {20_000} CLP independiente del modelo.
        Incluye traslado e instalación en tu domicilio. El pago es contra entrega.
      </p>

      <h2>¿Cómo cotizar el precio de un camarote?</h2>
      <p>
        La forma más rápida es escribirnos por WhatsApp con:
      </p>
      <ul>
        <li>El modelo que te interesa (o una descripción de lo que necesitas)</li>
        <li>Los accesorios que quieres agregar</li>
        <li>Si necesitas cambio de medida, las dimensiones específicas</li>
        <li>Tu comuna en Santiago</li>
      </ul>
      <p>
        Te respondemos con el precio exacto en minutos. Sin formularios, sin esperas.
      </p>

      <h2>¿Camarote barato o camarote de calidad?</h2>
      <p>
        En camarotes metálicos, la diferencia entre un modelo barato y uno de calidad está en el
        grosor del tubo (calibre del acero), la calidad de las soldaduras y el acabado de la pintura.
        Un camarote barato puede funcionar bien el primer año, pero con uso diario la diferencia de
        durabilidad es evidente. Al cotizar, pregunta por el calibre del acero y el tipo de pintura.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Por qué no aparecen los precios de los camarotes en la web?",
                acceptedAnswer: { "@type": "Answer", text: "Los precios varían según modelo, accesorios y cambios de medida solicitados. Preferimos cotizar directamente por WhatsApp para darte el precio exacto sin sorpresas." },
              },
              {
                "@type": "Question",
                name: "¿Cuánto cuesta el despacho de un camarote en Santiago?",
                acceptedAnswer: { "@type": "Answer", text: "El despacho tiene un costo fijo de $20.000 CLP en Santiago y alrededores, incluye instalación. El pago es contra entrega." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero cotizar el precio de un camarote para Santiago. El modelo que me interesa es [modelo]." />
    </>
  ),

  "camarote-para-departamento": () => (
    <>
      <p>
        Vivir en un <strong>departamento pequeño en Santiago</strong> no significa renunciar a la
        comodidad de tener dos camas. Un <strong>camarote para departamento</strong> bien elegido
        puede duplicar la capacidad de una pieza sin sacrificar espacio de circulación.
        Esta guía te ayuda a elegir el modelo correcto para espacios reducidos.
      </p>

      <h2>¿Por qué el camarote es ideal para departamentos pequeños?</h2>
      <p>
        La clave está en el uso del espacio <strong>vertical</strong> en lugar del horizontal.
        Dos camas individuales en un dormitorio de 10 m² te ocupan prácticamente toda la superficie.
        Un camarote ocupa el mismo espacio de piso que una sola cama, devolviendo los metros del
        segundo colchón para circular, guardar cosas o simplemente respirar.
      </p>
      <ul>
        <li><strong>Dos camas individuales:</strong> ocupa ~3,6 m² de piso (2 x 90 cm x 200 cm)</li>
        <li><strong>Camarote equivalente:</strong> ocupa ~1,8 m² de piso (misma capacidad)</li>
        <li><strong>Diferencia:</strong> recuperas ~1,8 m² de piso para otro uso</li>
      </ul>

      <h2>Mejores modelos de camarote para departamento</h2>
      <h3>Camarote con escritorio — dormitorio + oficina en uno</h3>
      <p>
        El modelo perfecto para el departamento de un estudiante o profesional que trabaja desde casa.
        Cama en el nivel superior, escritorio integrado debajo. Resuelve dos necesidades (dormir + trabajar)
        en el espacio de una sola cama.
      </p>
      <h3>Cama alta — máxima flexibilidad del espacio inferior</h3>
      <p>
        La <strong>cama alta</strong> eleva la cama y deja el espacio inferior completamente libre.
        Puedes poner lo que necesites: un escritorio suelto, un sofá, muebles de almacenamiento o
        mantenerlo abierto para ampliar la sensación de espacio.
      </p>
      <h3>Camarote nido — tres camas sin perder espacio</h3>
      <p>
        Para departamentos donde a veces necesitas una tercera cama (visitas frecuentes, por ejemplo),
        el camarote nido es la solución más eficiente. La tercera cama se guarda de día y sale en
        segundos cuando se necesita.
      </p>

      <h2>Consideraciones clave para espacios reducidos</h2>
      <h3>Mide el techo</h3>
      <p>
        Los departamentos modernos en Santiago suelen tener techos de 240-260 cm. Verifica la altura
        antes de elegir el modelo, especialmente si consideras camarote con escritorio o cama alta
        (requieren mayor altura para que la cama quede cómoda).
      </p>
      <h3>Ancho de la puerta</h3>
      <p>
        Los camarotes metálicos se entregan desarmados y se instalan dentro de la habitación.
        El acceso por la puerta no es un problema habitualmente, pero si tu departamento tiene
        pasillos muy estrechos o puertas angostas, menciónalo al cotizar.
      </p>
      <h3>Cambios de medida</h3>
      <p>
        Si tu pieza tiene medidas fuera del estándar, puedes solicitar hasta 3 cambios de medida
        para adaptar el camarote exactamente a tu espacio. Ideal para departamentos con formas irregulares.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué camarote es mejor para un departamento pequeño?",
                acceptedAnswer: { "@type": "Answer", text: "Depende del uso. Para estudiantes o home office: camarote con escritorio. Para máxima flexibilidad: cama alta. Para 3 camas ocasionales: camarote nido. Todos ocupan el mismo espacio de piso que una sola cama." },
              },
              {
                "@type": "Question",
                name: "¿Los camarotes entran en departamentos con pasillos estrechos?",
                acceptedAnswer: { "@type": "Answer", text: "Sí. Los camarotes metálicos se entregan desarmados y se instalan dentro de la habitación. Las piezas individuales son más fáciles de maniobrar que un mueble armado." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, busco un camarote para mi departamento pequeño en Santiago. Mi pieza mide [ancho] x [largo] y el techo tiene [alto] cm." />
    </>
  ),

  "camarote-vs-cama-individual": () => (
    <>
      <p>
        Cuando dos personas comparten un dormitorio, la pregunta clásica es:
        <strong> ¿camarote o dos camas individuales?</strong> No hay una respuesta universal,
        pero sí hay factores claros que hacen que una opción gane sobre la otra según el caso.
        Esta guía te ayuda a decidir sin rodeos.
      </p>

      <h2>La diferencia más importante: el espacio en el piso</h2>
      <p>
        El factor que más inclina la balanza a favor del camarote es el espacio que ocupa en el suelo.
      </p>
      <ul>
        <li><strong>Dos camas individuales (1 plaza c/u):</strong> ~3,6 m² de superficie de piso</li>
        <li><strong>Camarote equivalente:</strong> ~1,8 m² de superficie de piso</li>
      </ul>
      <p>
        Esa diferencia de ~1,8 m² recuperados puede ser la zona de juego de los niños, el escritorio
        que no cabía, o simplemente el espacio para abrir el armario con comodidad.
      </p>

      <h2>¿Cuándo conviene el camarote?</h2>
      <ul>
        <li><strong>Habitación pequeña:</strong> si la pieza tiene menos de 12-14 m², el camarote casi siempre gana</li>
        <li><strong>Dos niños que comparten cuarto:</strong> solución natural, ahorra espacio y los niños suelen preferirlo</li>
        <li><strong>Necesitas un tercer espacio en la pieza:</strong> escritorio, zona de juego, armario</li>
        <li><strong>Quieres una cama que sea especial:</strong> subir a la cama de arriba es entretenido para los niños</li>
      </ul>

      <h2>¿Cuándo convienen dos camas individuales?</h2>
      <ul>
        <li><strong>Habitación grande con espacio de sobra:</strong> si el espacio no es el problema, la comodidad de una cama a nivel de suelo puede ser preferible</li>
        <li><strong>Adultos mayores:</strong> subir y bajar de un camarote puede ser incómodo o riesgoso</li>
        <li><strong>Diferencia de horarios muy distinta:</strong> si uno se acuesta muy tarde y el otro muy temprano, el movimiento en el camarote puede molestar al otro</li>
        <li><strong>Una persona con movilidad reducida:</strong> la cama a nivel de suelo es más segura</li>
      </ul>

      <h2>Comparación directa: camarote vs dos camas</h2>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", fontSize: "0.875rem", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f3f4f6" }}>
              <th style={{ textAlign: "left", padding: "12px", fontWeight: 600 }}>Factor</th>
              <th style={{ textAlign: "left", padding: "12px", fontWeight: 600 }}>Camarote</th>
              <th style={{ textAlign: "left", padding: "12px", fontWeight: 600 }}>2 camas individuales</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Espacio de piso", "~1,8 m²", "~3,6 m²"],
              ["Precio total", "1 mueble", "2 muebles (suma)"],
              ["Comodidad nivel superior", "Menor para adultos", "Igual ambas camas"],
              ["Independencia de movimiento", "Menor (comparten estructura)", "Total"],
              ["Ideal para niños", "Sí (entretenido y práctico)", "Sí (más independencia)"],
              ["Ideal para adultos", "Depende del modelo", "En general sí"],
            ].map(([factor, cam, camas], i) => (
              <tr key={factor} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                <td style={{ padding: "10px 12px", fontWeight: 500, borderTop: "1px solid #e5e7eb" }}>{factor}</td>
                <td style={{ padding: "10px 12px", borderTop: "1px solid #e5e7eb" }}>{cam}</td>
                <td style={{ padding: "10px 12px", borderTop: "1px solid #e5e7eb" }}>{camas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Conclusión: regla simple para decidir</h2>
      <p>
        Si el espacio es limitado → <strong>camarote sin dudarlo</strong>.
        Si el espacio sobra y los usuarios son adultos con necesidades de independencia →
        <strong> dos camas individuales puede ser mejor</strong>.
        Para niños en habitaciones medianas, el camarote es casi siempre la mejor solución.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Es mejor un camarote o dos camas individuales?",
                acceptedAnswer: { "@type": "Answer", text: "Depende del espacio disponible. Si la habitación es pequeña (menos de 12-14 m²), el camarote recupera ~1,8 m² de piso que dos camas individuales no devuelven. Si el espacio sobra y los usuarios son adultos, dos camas pueden ser más cómodas." },
              },
              {
                "@type": "Question",
                name: "¿Cuánto espacio ahorra un camarote respecto a dos camas separadas?",
                acceptedAnswer: { "@type": "Answer", text: "Un camarote ocupa aproximadamente 1,8 m² de piso, mientras que dos camas individuales ocupan ~3,6 m². La diferencia es de ~1,8 m² recuperados, suficiente para un escritorio o zona de juego." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, estoy decidiendo entre un camarote o dos camas para mi pieza. ¿Me pueden orientar?" />
    </>
  ),

  "camarote-para-hostal": () => (
    <>
      <p>
        Un <strong>camarote para hostal</strong> o pensión tiene exigencias muy diferentes a uno
        para uso residencial familiar. El uso intensivo, el cambio frecuente de usuarios y la necesidad
        de bajo mantenimiento cambian completamente los criterios de compra. Esta guía es específica
        para propietarios de hostales, pensiones y residencias en Chile.
      </p>

      <h2>¿En qué se diferencia un camarote para hostal de uno doméstico?</h2>
      <p>
        La diferencia está en la <strong>intensidad de uso</strong> y en la <strong>variedad de usuarios</strong>.
        En un hostal o pensión:
      </p>
      <ul>
        <li>El camarote puede tener 5-10 usuarios distintos al mes</li>
        <li>Los usuarios tienen pesos y formas de dormir muy variadas</li>
        <li>La limpieza es más frecuente y con productos más fuertes</li>
        <li>El camarote puede ser movido o reconfigurado con cierta frecuencia</li>
        <li>La durabilidad importa más que la estética</li>
      </ul>

      <h2>Qué buscar en un camarote para hostal</h2>
      <h3>Mayor calibre de acero</h3>
      <p>
        Para uso intensivo, el grosor del tubo (calibre del acero) es el factor más importante.
        Un camarote de acero de mayor calibre resiste mejor el uso frecuente sin que la estructura
        pierda rigidez con el tiempo. Consulta el calibre del modelo al cotizar y compara con
        opciones de mayor resistencia como el <strong>Camarote Titanic</strong>.
      </p>
      <h3>Pintura resistente a la limpieza frecuente</h3>
      <p>
        La pintura del camarote debe soportar limpiezas frecuentes con desinfectante sin
        descascararse ni oxidarse. Consulta el tipo de acabado al cotizar para uso en
        entorno de hostal o pensión.
      </p>
      <h3>Parrillas de fácil reemplazo</h3>
      <p>
        En uso intensivo, las parrillas son la primera pieza en degradarse. Elige un modelo
        donde las parrillas sean reemplazables de forma independiente. Ofrecemos parrillas
        adicionales al cotizar.
      </p>
      <h3>Barandas de seguridad firmes</h3>
      <p>
        En un hostal, los usuarios del nivel superior pueden ser adultos de distintos pesos
        y ninguno tiene la misma relación con el camarote que alguien en su casa. Las barandas
        deben ser sólidas y preferiblemente con altura adicional.
      </p>

      <h2>¿Camarote nido en hostales?</h2>
      <p>
        El camarote nido (con tercera cama deslizante) puede ser útil en hostales que necesitan
        flexibilidad de capacidad. Sin embargo, la tercera cama deslizante requiere más mantenimiento
        en uso intensivo (los mecanismos de deslizamiento se desgastan). Para uso constante de 3 personas,
        el <strong>camarote triple</strong> con 3 niveles fijos es más robusto.
      </p>

      <h2>Volumen: ¿descuento por cantidad?</h2>
      <p>
        Si necesitas más de 2-3 camarotes para equipar un hostal o pensión, consúltanos por WhatsApp
        con el número de unidades y los modelos que te interesan. Evaluamos condiciones especiales
        para pedidos de volumen.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué camarote es mejor para un hostal o pensión?",
                acceptedAnswer: { "@type": "Answer", text: "Para uso intensivo en hostales, se recomienda un modelo con mayor calibre de acero (como el Camarote Titanic), pintura resistente a limpieza frecuente y barandas sólidas. El camarote triple es mejor que el nido para uso constante de 3 personas." },
              },
              {
                "@type": "Question",
                name: "¿Hacen descuentos por cantidad para hostales?",
                acceptedAnswer: { "@type": "Answer", text: "Para pedidos de más de 2-3 unidades, consúltanos por WhatsApp con el número de camarotes y modelos que necesitas. Evaluamos condiciones especiales para pedidos de volumen." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, necesito camarotes para un hostal / pensión en Santiago. ¿Qué modelos recomiendan para uso intensivo y cuáles son los precios?" />
    </>
  ),

  "mantenimiento-camarote-metalico": () => (
    <>
      <p>
        Un <strong>camarote metálico bien mantenido</strong> puede durar 10, 15 o más años sin problemas.
        El acero es un material muy duradero, pero requiere ciertos cuidados básicos para que la pintura
        se mantenga y el óxido no aparezca. Esta guía te da todo lo que necesitas saber.
      </p>

      <h2>Limpieza regular: lo más importante</h2>
      <p>
        La limpieza regular es el mejor mantenimiento que puedes dar a un camarote metálico.
        La suciedad y la humedad acumuladas aceleran el deterioro de la pintura, que es la
        primera barrera contra el óxido.
      </p>
      <h3>Cómo limpiar un camarote metálico</h3>
      <ul>
        <li><strong>Paño húmedo con agua y jabón neutro:</strong> suficiente para la limpieza semanal de rutina</li>
        <li><strong>Evitar agua en exceso:</strong> el acero pintado no teme el agua, pero evita que quede agua estancada en uniones y soldaduras</li>
        <li><strong>Secado tras limpieza:</strong> pasa un paño seco después de limpiar para eliminar la humedad residual</li>
        <li><strong>Desinfectantes:</strong> para uso en hostales o pensiones, usa desinfectantes diluidos y seca bien después</li>
        <li><strong>Evitar limpiadores abrasivos:</strong> estropajos metálicos o polvos abrasivos pueden rayar la pintura y exponer el acero</li>
      </ul>

      <h2>Prevención del óxido</h2>
      <p>
        El óxido en un camarote metálico aparece cuando la pintura se daña y el acero queda expuesto
        a la humedad. Para prevenirlo:
      </p>
      <ul>
        <li><strong>Evitar golpes:</strong> los golpes en la pintura crean microfisuras donde el óxido puede empezar</li>
        <li><strong>Revisar uniones y tornillos periódicamente:</strong> son los puntos donde más se acumula humedad</li>
        <li><strong>No instalar en espacios muy húmedos sin ventilación:</strong> baños pequeños o sótanos sin aireación</li>
        <li><strong>Ventilación del dormitorio:</strong> habitaciones con buena ventilación protegen mejor la estructura</li>
      </ul>

      <h2>¿Qué hacer si aparece óxido?</h2>
      <p>
        Si detectas óxido superficial en algún punto del camarote:
      </p>
      <ul>
        <li>Lija la zona afectada con lija fina para eliminar el óxido visible</li>
        <li>Aplica una capa fina de antióxido o convertidor de óxido en spray</li>
        <li>Una vez seco, cubre con pintura de esmalte del mismo color</li>
        <li>Un óxido detectado a tiempo es de fácil reparación; ignorado puede comprometer la estructura</li>
      </ul>

      <h2>Ajuste de tornillos</h2>
      <p>
        Con el uso diario, los tornillos de un camarote metálico pueden aflojarse levemente.
        Revisa la firmeza de la estructura cada 6-12 meses, especialmente:
      </p>
      <ul>
        <li>Tornillos de unión de postes verticales y travesaños</li>
        <li>Fijación de la escalera</li>
        <li>Tornillos de las barandas de seguridad</li>
      </ul>
      <p>
        Si un tornillo no aprieta bien (porque la rosca está dañada), reemplázalo por uno del mismo
        diámetro y largo. No lo dejes flojo — la estabilidad de la estructura depende de todos los tornillos.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cómo se limpia un camarote metálico?",
                acceptedAnswer: { "@type": "Answer", text: "Con paño húmedo y jabón neutro para la limpieza regular. Secar después para eliminar humedad residual. Evitar limpiadores abrasivos que puedan rayar la pintura." },
              },
              {
                "@type": "Question",
                name: "¿Cada cuánto hay que revisar los tornillos de un camarote metálico?",
                acceptedAnswer: { "@type": "Answer", text: "Se recomienda revisar la firmeza de los tornillos cada 6-12 meses, especialmente en las uniones de postes, la escalera y las barandas de seguridad." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, tengo una consulta sobre mantenimiento de mi camarote metálico. ¿Me pueden ayudar?" />
    </>
  ),

  "camarote-regalo": () => (
    <>
      <p>
        Un <strong>camarote como regalo</strong> es una idea práctica y duradera, especialmente para
        cumpleaños de niños, Navidad o para equipar la pieza de un hijo que ya creció. Pero regalarlo
        tiene algunos detalles que hay que coordinar bien para que la experiencia sea perfecta.
        Esta guía te lo explica todo.
      </p>

      <h2>¿Se puede regalar un camarote con despacho directo?</h2>
      <p>
        Sí. Puedes cotizar y acordar el pedido con nosotros, y coordinar que el despacho se haga
        directamente en la dirección del destinatario del regalo. El pago es contra entrega,
        lo que significa que puedes acordar quién paga al momento de la entrega:
        tú mismo (si estás presente) o el destinatario.
      </p>
      <p>
        Consúltanos por WhatsApp antes de coordinar el pedido y te explicamos las opciones de
        pago y despacho para regalos.
      </p>

      <h2>¿Qué información necesitas antes de regalar un camarote?</h2>
      <h3>Las medidas del espacio donde va a ir</h3>
      <p>
        Este es el punto más importante. Un camarote que no cabe en la pieza no es un regalo,
        es un problema. Antes de pedir, necesitas saber:
      </p>
      <ul>
        <li><strong>Ancho disponible en la pieza</strong> (donde irá el camarote)</li>
        <li><strong>Largo disponible</strong></li>
        <li><strong>Alto del techo</strong> (crítico para camas altas o camarotes con escritorio)</li>
      </ul>
      <p>
        Si no puedes medir sin revelar el regalo, puedes pedir el camarote con 1-2 semanas de plazo
        y coordinar el despacho para cuando tengas las medidas.
      </p>

      <h3>Qué modelo elegir</h3>
      <p>El modelo correcto depende del destinatario:</p>
      <ul>
        <li><strong>Para dos niños que comparten pieza:</strong> camarote estándar o nido</li>
        <li><strong>Para un adolescente o adulto joven:</strong> camarote con escritorio o cama alta</li>
        <li><strong>Para adultos:</strong> camarote doble o plaza y media</li>
        <li><strong>Para familia numerosa:</strong> camarote triple o nido</li>
      </ul>

      <h2>¿Cómo coordinar la sorpresa?</h2>
      <p>
        Si quieres que sea una sorpresa, hay dos opciones:
      </p>
      <ul>
        <li>
          <strong>Opción 1:</strong> Coordinas con nosotros el pedido con fecha y horario de entrega
          específicos, y organizas que alguien esté en casa para recibir sin que el destinatario
          sepa de qué se trata.
        </li>
        <li>
          <strong>Opción 2:</strong> Compras una "promesa de regalo" y le cuentas al destinatario
          que tendrá que medir la pieza y elegir el modelo. Más práctico para evitar problemas de medidas.
        </li>
      </ul>

      <h2>¿Cuánto tiempo de anticipación necesito?</h2>
      <p>
        El plazo estimado de entrega es de {SITE_CONFIG.despacho.dias} desde que confirmas el pedido.
        Para regalos de fechas importantes (cumpleaños, Navidad, Día del Niño), pide con al menos
        2 semanas de anticipación para tener margen ante cualquier imprevisto.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Puedo regalar un camarote con entrega directa en otra dirección?",
                acceptedAnswer: { "@type": "Answer", text: "Sí. Puedes coordinar el despacho directamente a la dirección del destinatario del regalo. Consúltanos por WhatsApp para coordinar el pago y la entrega para regalos." },
              },
              {
                "@type": "Question",
                name: "¿Con cuánta anticipación debo pedir el camarote si es regalo?",
                acceptedAnswer: { "@type": "Answer", text: "Con al menos 2 semanas de anticipación para fechas importantes. El plazo estimado de entrega es de 5 a 10 días hábiles desde la confirmación del pedido." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero regalar un camarote en Santiago. ¿Me pueden orientar sobre cómo coordinar el despacho como regalo?" />
    </>
  ),

  "camarote-nino-6-anos": () => (
    <>
      <p>
        Una de las preguntas que más nos hacen los papás es: <strong>¿a qué edad puede mi hijo
        dormir en la cama de arriba de un camarote?</strong> La respuesta corta: a partir de
        los 6 años en la mayoría de los casos, pero depende de varios factores. Esta guía te
        lo explica sin rodeos.
      </p>

      <h2>¿A qué edad es seguro un camarote para niños?</h2>
      <p>
        La recomendación general de la mayoría de fabricantes y pediatras es que los niños
        no duerman en el nivel superior de un camarote antes de los <strong>6 años</strong>.
        Las razones principales son:
      </p>
      <ul>
        <li><strong>Control del cuerpo durante el sueño:</strong> los niños menores de 6 años aún no tienen el control motor suficiente para evitar caídas mientras duermen</li>
        <li><strong>Comprensión del peligro:</strong> a los 6 años los niños ya pueden entender y seguir instrucciones de seguridad (no saltar en la cama, no asomarse por encima de la baranda)</li>
        <li><strong>Capacidad de bajar la escalera de noche:</strong> si necesitan ir al baño a medianoche, deben poder hacerlo de forma segura</li>
      </ul>
      <p>
        Algunos niños están listos antes de los 6 años y otros necesitan un poco más de tiempo.
        Tú conoces a tu hijo mejor que nadie. Si tienes dudas, espera.
      </p>

      <h2>¿Qué modelo elegir para un niño de 6 años?</h2>
      <h3>Si son dos hermanos</h3>
      <p>
        El <strong>camarote estándar de 1 plaza + 1 plaza</strong> es la opción clásica.
        El mayor (o el que está más cómodo con las alturas) duerme arriba; el menor, abajo.
        Si hay un tercer hijo o visitas frecuentes, el <strong>camarote nido</strong> puede ser
        interesante: tiene una tercera cama deslizante que se guarda debajo cuando no se usa.
      </p>
      <h3>Si es un solo hijo y quieres más espacio en la pieza</h3>
      <p>
        La <strong>cama alta</strong> es perfecta para niños de 6+ años que usan el espacio
        debajo para jugar, guardar juguetes o poner un pequeño escritorio. Es la misma estructura
        que un camarote, pero sin la cama inferior.
      </p>

      <h2>Medidas de seguridad obligatorias para camarotes infantiles</h2>
      <ul>
        <li><strong>Baranda en el nivel superior:</strong> en todos nuestros modelos la baranda está incluida; verificar que cubra los 4 lados del colchón o al menos 3 lados</li>
        <li><strong>Escalera firme:</strong> con peldaños antideslizantes y bien anclada a la estructura</li>
        <li><strong>Colchón del grosor correcto:</strong> para que el niño no quede muy cerca del borde de la baranda (recomendado: máximo 15-16 cm de grosor)</li>
        <li><strong>Espacio sobre la cama superior:</strong> el techo debe estar al menos 80-90 cm sobre el colchón para que el niño pueda sentarse</li>
        <li><strong>No colgar objetos de la estructura:</strong> mochilas, ropa u objetos colgantes pueden engancharse en cuello y causar accidentes</li>
        <li><strong>Regla de no saltar:</strong> establecerla desde el primer día</li>
      </ul>

      <h2>¿Cuánto espacio necesitas en la pieza?</h2>
      <p>
        Un camarote estándar de 1 plaza ocupa aproximadamente 100 cm de ancho por 200-210 cm
        de largo. Necesitas además espacio de circulación alrededor, especialmente en el lado
        de la escalera. Como referencia, para una pieza de 10-12 m² el camarote suele ser
        perfectamente manejable.
      </p>
      <p>
        Si tu pieza es muy pequeña, considera el camarote nido: de día parece un camarote
        normal (2 pisos), de noche salen 3 camas del mismo espacio.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿A qué edad pueden los niños dormir en el nivel superior de un camarote?",
                acceptedAnswer: { "@type": "Answer", text: "A partir de los 6 años en la mayoría de los casos. Antes de esa edad, los niños no tienen el control motor suficiente para evitar caídas y pueden no comprender las instrucciones de seguridad necesarias." },
              },
              {
                "@type": "Question",
                name: "¿Qué camarote es mejor para niños de 6 años?",
                acceptedAnswer: { "@type": "Answer", text: "Para dos hermanos, el camarote estándar de 1+1 plaza o el camarote nido (3 camas en 1). Para un solo niño que quiere más espacio en la pieza, la cama alta es ideal." },
              },
              {
                "@type": "Question",
                name: "¿Qué grosor de colchón recomienda para la cama superior de niños?",
                acceptedAnswer: { "@type": "Answer", text: "Máximo 15-16 cm de grosor para la cama superior, así el niño duerme bien por debajo de la baranda y reduce el riesgo de caída." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero cotizar un camarote para un niño de 6 años. ¿Qué modelo recomiendan y cuáles son las medidas de seguridad?" />
    </>
  ),

  "decorar-habitacion-camarote": () => (
    <>
      <p>
        Un camarote metálico cambia por completo la lógica de una habitación pequeña.
        De repente tienes el doble del espacio vertical aprovechado — y si es una cama alta,
        todo el espacio del suelo liberado. Pero decorar bien una habitación con camarote
        requiere pensar diferente al resto de las piezas. Aquí van las ideas que más funcionan.
      </p>

      <h2>Qué poner debajo de la cama alta o del camarote</h2>
      <p>
        El espacio debajo de una cama alta es la clave de todo. Las opciones más populares:
      </p>
      <ul>
        <li><strong>Escritorio:</strong> ideal para estudiantes. La cama arriba, el área de estudio abajo. Si no quieres comprar el modelo con escritorio integrado, un escritorio simple bajo la estructura queda muy bien</li>
        <li><strong>Sofá pequeño o sillón:</strong> transforma el rincón en un espacio de lectura o descanso durante el día</li>
        <li><strong>Cajoneras o almacenamiento bajo cama:</strong> cajas organizadoras, baúles o cajoneras bajas aprovechan muy bien ese espacio</li>
        <li><strong>Área de juego:</strong> para niños pequeños, el espacio debajo puede ser una pequeña casita o zona de juego con una alfombra</li>
        <li><strong>Nada:</strong> a veces lo mejor es dejarlo libre para que la habitación respire</li>
      </ul>

      <h2>Colores y textiles para habitaciones con camarote</h2>
      <p>
        Un camarote metálico tiene una presencia visual fuerte. Para equilibrarlo:
      </p>
      <ul>
        <li><strong>Paredes claras:</strong> blanco, gris muy claro o beige hacen que la pieza se vea más grande y luminosa alrededor del camarote</li>
        <li><strong>Cortinas ligeras:</strong> que no roben luz</li>
        <li><strong>Ropa de cama con color:</strong> aquí puedes poner color sin que sature; cada nivel del camarote puede tener su propio color</li>
        <li><strong>Alfombra:</strong> una alfombra debajo del camarote ancla el mueble visualmente y hace la pieza más acogedora</li>
      </ul>
      <p>
        Si los que duermen en el camarote son dos hermanos, dejar que cada uno personalice su
        nivel con su propia ropa de cama y pequeños detalles da sensación de espacio propio
        dentro de la misma pieza.
      </p>

      <h2>Iluminación en habitaciones con camarote</h2>
      <p>
        La iluminación es lo que más se descuida en habitaciones con camarote:
      </p>
      <ul>
        <li><strong>Luz de lectura para cada nivel:</strong> una lámpara flexible de clip para cada cama evita que uno tenga que encender la luz grande cuando el otro quiere dormir</li>
        <li><strong>Luz indirecta bajo la cama alta:</strong> una tira LED bajo la estructura (sin contacto con la cama) crea un ambiente muy bonito y funcional para el espacio inferior</li>
        <li><strong>Evitar lámparas colgantes centradas:</strong> quedan mal con camarotes altos y pueden quedar a la altura de quien sube a la cama</li>
      </ul>

      <h2>Organización y almacenamiento vertical</h2>
      <p>
        Con un camarote, el eje vertical se convierte en tu aliado. Ideas para aprovechar
        la altura de la habitación más allá del camarote:
      </p>
      <ul>
        <li>Estantes altos en las paredes laterales para libros, juguetes o decoración</li>
        <li>Ganchos en la pared o en la estructura (si el fabricante lo permite) para mochilas y ropa</li>
        <li>Organizadores de bolsillo que cuelgan de la baranda del camarote para libros, tablet, gafas</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué poner debajo de una cama alta o camarote?",
                acceptedAnswer: { "@type": "Answer", text: "Las opciones más populares son: escritorio de estudio, sofá pequeño o sillón, cajoneras de almacenamiento, área de juego para niños o simplemente dejarlo libre para que la habitación respire. Depende del uso principal de la habitación." },
              },
              {
                "@type": "Question",
                name: "¿Qué colores van mejor en una habitación con camarote?",
                acceptedAnswer: { "@type": "Answer", text: "Paredes claras (blanco, gris claro o beige) equilibran la presencia visual del camarote y hacen la pieza más grande. El color puede entrar en la ropa de cama de cada nivel." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, estoy buscando un camarote para decorar una habitación pequeña. ¿Qué modelos tienen y cuáles son las medidas?" />
    </>
  ),

  "camarote-segunda-mano-donde-comprar": () => (
    <>
      <p>
        Comprar un <strong>camarote de segunda mano</strong> puede parecer una buena idea para
        ahorrar. A veces lo es. Otras veces terminas pagando menos por algo que no te sirve,
        que requiere reparación o que simplemente no es seguro. Esta guía es honesta: te cuento
        cuándo tiene sentido y cuándo no.
      </p>

      <h2>Lo bueno de un camarote de segunda mano</h2>
      <p>
        Un camarote metálico de segunda mano en buen estado puede ser una excelente compra:
      </p>
      <ul>
        <li><strong>Precio más bajo:</strong> el ahorro puede ser real si el estado es bueno</li>
        <li><strong>Ya está armado (en algunos casos):</strong> puedes ver exactamente cómo queda y si tiene daños visibles</li>
        <li><strong>Opción para necesidades temporales:</strong> si necesitas el camarote solo por un tiempo determinado, la segunda mano puede tener más sentido</li>
      </ul>

      <h2>Los riesgos que nadie te menciona</h2>
      <p>
        Aquí está la parte que los anuncios de segunda mano no te cuentan:
      </p>
      <ul>
        <li><strong>Tornillos desgastados o faltantes:</strong> en un camarote usado de forma intensa, los tornillos pueden haber perdido rosca. La estructura se ve sólida pero no lo es</li>
        <li><strong>Soldaduras dañadas:</strong> una soldadura agrietada no se ve a simple vista pero es el mayor riesgo de seguridad</li>
        <li><strong>Óxido oculto:</strong> debajo de la pintura o en zonas poco visibles (uniones, parte inferior de las patas) puede haber óxido que compromete la integridad</li>
        <li><strong>Sin garantía ni servicio postventa:</strong> si algo falla al mes de comprarlo, el vendedor ya no está</li>
        <li><strong>Piezas incompatibles:</strong> si necesitas reponer barandas o parrillas, puede ser difícil encontrar exactamente las mismas</li>
      </ul>

      <h2>Cómo evaluar un camarote de segunda mano antes de comprar</h2>
      <p>
        Si decides comprar segunda mano, estos son los puntos que debes revisar en persona
        (no desde fotos):
      </p>
      <ul>
        <li>Mueve la estructura: no debe crujir ni moverse lateralmente</li>
        <li>Revisa cada soldadura buscando grietas o separaciones</li>
        <li>Examina la pintura en uniones y patas: busca óxido bajo la pintura o descascaramientos</li>
        <li>Aprieta todos los tornillos visibles: ninguno debe girar sin resistencia (indica rosca desgastada)</li>
        <li>Sube al nivel superior y muévete: si la estructura vibra excesivamente, no es segura</li>
        <li>Verifica que estén todas las piezas: barandas, escalera, parrillas de ambos niveles</li>
      </ul>

      <h2>¿Cuándo vale más comprar un camarote nuevo?</h2>
      <p>
        Comprar nuevo tiene más sentido que segunda mano cuando:
      </p>
      <ul>
        <li>El camarote es para niños (la seguridad es innegociable)</li>
        <li>Lo vas a usar muchos años (la diferencia de precio se amortiza rápido)</li>
        <li>El precio de segunda mano es más del 60-70% del precio nuevo (la diferencia no justifica el riesgo)</li>
        <li>No puedes ver el camarote en persona antes de comprarlo</li>
      </ul>
      <p>
        Con pago contra entrega, comprar un camarote nuevo tiene el mismo nivel de riesgo
        financiero que la segunda mano: pagas cuando lo ves en tu casa, instalado.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Vale la pena comprar un camarote de segunda mano en Chile?",
                acceptedAnswer: { "@type": "Answer", text: "Depende del estado y el precio. Si es para niños, recomendamos comprar nuevo por seguridad. Si el precio de segunda mano supera el 60-70% del precio nuevo, la diferencia no justifica los riesgos de tornillos desgastados, óxido oculto o soldaduras dañadas." },
              },
              {
                "@type": "Question",
                name: "¿Qué debo revisar en un camarote de segunda mano?",
                acceptedAnswer: { "@type": "Answer", text: "Soldaduras (buscar grietas), tornillos (girar para ver si la rosca está desgastada), pintura en uniones y patas (buscar óxido), estabilidad de la estructura (moverla lateralmente y subir al nivel superior para verificar vibración)." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, estoy decidiendo entre comprar un camarote nuevo o de segunda mano. ¿Me pueden orientar sobre precios y modelos disponibles?" />
    </>
  ),

  "pieza-compartida-hermanos": () => (
    <>
      <p>
        Organizar una <strong>pieza para dos hermanos</strong> es uno de los desafíos más comunes
        en hogares chilenos. El espacio suele ser limitado, cada uno quiere su propio rincón,
        y los padres quieren que la habitación funcione bien de día y de noche. Un camarote
        bien elegido resuelve la mayor parte de estos problemas. Aquí te explicamos cómo.
      </p>

      <h2>Por qué el camarote es la solución más eficiente para dos hermanos</h2>
      <p>
        La ventaja principal del camarote frente a dos camas separadas es el espacio:
        un camarote estándar ocupa el mismo espacio en el suelo que una sola cama,
        pero da dos lugares para dormir. Eso libera metros cuadrados para zona de estudio,
        juego o simplemente para que los niños tengan espacio para moverse.
      </p>
      <p>
        La segunda ventaja es la sensación de privacidad. Aunque compartan habitación, cada
        nivel del camarote se convierte en el espacio personal de cada hermano: su propia
        ropa de cama, sus propias cosas colgadas en la pared lateral, su propio rincón.
      </p>

      <h2>Qué modelo elegir según la edad de los hermanos</h2>
      <h3>Dos hermanos de edades similares (ambos 6+ años)</h3>
      <p>
        El camarote estándar de 1 plaza + 1 plaza es la opción clásica. El mayor puede dormir
        arriba (requiere mayor control motor y comprensión de las normas de seguridad).
        Si hay diferencia de pocos años, el más seguro y responsable va arriba.
      </p>
      <h3>Un hermano mayor + uno más pequeño (menor de 6 años)</h3>
      <p>
        Si el menor tiene menos de 6 años, lo recomendable es que duerma en el nivel inferior.
        El mayor va arriba. Asegúrate de que las barandas sean sólidas y que el menor no pueda
        subir al nivel superior sin supervisión.
      </p>
      <h3>Dos hermanos + visitas frecuentes (abuelita, amigos)</h3>
      <p>
        El <strong>camarote nido</strong> da tres camas en el mismo espacio de un camarote
        estándar. La tercera cama se desliza debajo de la inferior y se saca en segundos.
        Ideal cuando la pieza también recibe visitas regulares.
      </p>

      <h2>Cómo dar privacidad a cada hermano dentro de la misma pieza</h2>
      <ul>
        <li><strong>Ropa de cama diferenciada:</strong> cada nivel con su propio color y estilo marca visualmente el espacio de cada uno</li>
        <li><strong>Organizadores de bolsillo en cada nivel:</strong> donde cada uno guarda sus cosas más personales (libro, anteojos, tablet)</li>
        <li><strong>Zona de estudio separada:</strong> si hay espacio, dos escritorios pequeños o un escritorio largo en una pared para cada uno</li>
        <li><strong>Iluminación individual:</strong> una lámpara de clip por nivel para que uno pueda leer sin molestar al otro</li>
        <li><strong>Regla de privacidad:</strong> establecer que el nivel de cada uno es su espacio personal y el otro no sube sin permiso</li>
      </ul>

      <h2>Distribución del resto de la habitación</h2>
      <p>
        Con el camarote ubicado contra una pared (generalmente la pared del fondo o una lateral),
        tienes el resto del espacio libre para:
      </p>
      <ul>
        <li>Dos escritorios pequeños uno al lado del otro bajo la ventana</li>
        <li>Una cómoda compartida o dos cajoneras pequeñas independientes</li>
        <li>Un espacio libre central para juego o circulación</li>
        <li>Estantes en las paredes libres para libros y objetos personales de cada uno</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué camarote es mejor para dos hermanos?",
                acceptedAnswer: { "@type": "Answer", text: "Para dos hermanos de 6+ años, el camarote estándar 1+1 plaza es la opción clásica. Si hay visitas frecuentes o un tercer hijo, el camarote nido da 3 camas en el mismo espacio. Para mayor comodidad, el modelo 1.5 plazas + 1 plaza es ideal si hay diferencia de tamaño entre los hermanos." },
              },
              {
                "@type": "Question",
                name: "¿Cómo dar privacidad a cada hermano en una pieza compartida?",
                acceptedAnswer: { "@type": "Answer", text: "Con ropa de cama diferenciada para cada nivel, organizadores de bolsillo colgados en cada nivel, iluminación individual (lámpara de clip) y una regla clara de que el nivel de cada uno es su espacio personal." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero organizar una pieza para dos hermanos con camarote. ¿Qué modelo me recomiendan?" />
    </>
  ),

  "camarote-universitario": () => (
    <>
      <p>
        Un <strong>camarote para universitarios</strong> tiene requisitos muy específicos:
        el espacio de un dormitorio compartido suele ser pequeño, se necesita área de estudio,
        y el camarote tiene que ser lo suficientemente cómodo para descansar bien antes de clases.
        Esta guía está pensada para estudiantes que buscan la mejor solución en Santiago.
      </p>

      <h2>El problema real de los dormitorios universitarios</h2>
      <p>
        En Santiago, muchos estudiantes de regiones arriendan piezas en departamentos pequeños
        o casas donde comparten habitación con otro estudiante. El espacio disponible para dormir,
        estudiar y guardar cosas suele ser de 8 a 12 m² por persona.
      </p>
      <p>
        Con dos camas individuales separadas, ese espacio se agota rápidamente. Un camarote
        resuelve el problema de las camas y libera metros cuadrados que se pueden usar para dos
        escritorios, almacenamiento o simplemente para que la pieza se sienta más habitable.
      </p>

      <h2>Modelos recomendados para universitarios</h2>
      <h3>Camarote con escritorio integrado — para el estudiante que estudia en la pieza</h3>
      <p>
        El <strong>camarote con escritorio</strong> integra la cama arriba y el escritorio
        abajo en una sola estructura metálica. Es la solución más eficiente para el universitario
        que necesita espacio de estudio sin sacrificar el espacio de la cama.
        El escritorio integrado es más estable que uno suelto bajo la cama.
      </p>
      <h3>Cama alta — para el universitario con dormitorio propio</h3>
      <p>
        Si tienes una pieza para ti solo, la cama alta libera todo el espacio del suelo.
        Puedes poner tu escritorio debajo, un pequeño sofá o incluso un área de descanso
        separada de la zona de sueño.
      </p>
      <h3>Camarote estándar — para dos estudiantes que comparten pieza</h3>
      <p>
        El camarote estándar de 1 plaza + 1 plaza da dos camas en el espacio de una.
        El resto de la habitación queda libre para dos escritorios, armarios y circulación.
      </p>

      <h2>Qué considerar antes de comprar un camarote como universitario</h2>
      <ul>
        <li><strong>El alto del techo:</strong> fundamental, especialmente para camas altas y camarotes con escritorio. Mide el techo antes de cotizar</li>
        <li><strong>El ancho de la puerta y el pasillo:</strong> el camarote se entrega desarmado, así que no hay problema de ingreso</li>
        <li><strong>El arriendo:</strong> si arriendas la pieza, consulta con el arrendador si puedes instalar un camarote. La mayoría no tiene problema</li>
        <li><strong>Pago contra entrega:</strong> con nuestra modalidad de pago, no necesitas adelantar dinero, lo que es cómodo si tu presupuesto estudiantil es ajustado</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué camarote es mejor para un universitario en Santiago?",
                acceptedAnswer: { "@type": "Answer", text: "Para el universitario que necesita espacio de estudio integrado, el camarote con escritorio es la mejor opción. Para dos estudiantes que comparten pieza, el camarote estándar 1+1 plaza. Para pieza propia, la cama alta libera el espacio del suelo." },
              },
              {
                "@type": "Question",
                name: "¿Puedo poner un camarote en un departamento arrendado?",
                acceptedAnswer: { "@type": "Answer", text: "La mayoría de los arrendadores no tiene problema. El camarote no requiere perforar paredes ni hacer modificaciones estructurales. Se instala y se puede desmontar al final del arriendo sin dejar rastro." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, soy universitario y busco un camarote para un dormitorio pequeño en Santiago. ¿Qué modelo me recomiendan?" />
    </>
  ),

  "camarote-vs-cucheta": () => (
    <>
      <p>
        Si buscas <strong>cucheta en Chile</strong> o <strong>litera metálica</strong>, probablemente
        estés buscando lo mismo que cuando buscas camarote. La terminología varía por zona geográfica
        y por generación. Esta guía aclara la confusión de una vez.
      </p>

      <h2>¿Camarote, cucheta o litera? Son lo mismo</h2>
      <p>
        En Chile, los tres términos se usan para referirse al mismo mueble: una estructura de
        dos (o más) camas superpuestas. La diferencia es regional y generacional:
      </p>
      <ul>
        <li><strong>Camarote:</strong> el término más usado en Chile actualmente. De uso general en todo el país</li>
        <li><strong>Cucheta:</strong> muy común en Argentina y entre chilenos mayores. Algunos lo usan en el sur de Chile</li>
        <li><strong>Litera:</strong> término de influencia española. Más usado en contextos formales o en documentos técnicos</li>
      </ul>
      <p>
        No hay diferencia de producto. Si buscas &quot;cucheta metálica Santiago&quot; o &quot;camarote metálico Santiago&quot;,
        estás buscando exactamente lo mismo. Todos nuestros modelos se venden bajo el nombre
        &quot;camarote&quot;, pero son lo que en Argentina llamarían &quot;cucheta&quot;.
      </p>

      <h2>¿Existe alguna diferencia real entre algunos modelos?</h2>
      <p>
        Aunque los términos son intercambiables, en la práctica algunos vendedores usan
        diferente terminología para distinguir variantes:
      </p>
      <ul>
        <li><strong>Cucheta estándar / camarote estándar:</strong> dos camas de 1 plaza superpuestas. El modelo más básico y común</li>
        <li><strong>Litera con escritorio / camarote con escritorio:</strong> la cama arriba y el escritorio integrado abajo</li>
        <li><strong>Cucheta nido / camarote nido:</strong> camarote con tercera cama deslizante que se guarda debajo</li>
        <li><strong>Litera triple / camarote triple:</strong> tres niveles de cama, uno encima del otro</li>
      </ul>

      <h2>¿Qué buscar sin importar el nombre?</h2>
      <p>
        Sin importar si lo llamas camarote, cucheta o litera, los factores de calidad son los mismos:
      </p>
      <ul>
        <li><strong>Calibre del acero:</strong> el grosor del tubo determina la robustez. A mayor calibre, más resistente</li>
        <li><strong>Soldaduras:</strong> deben ser continuas y sin huecos. Una soldadura mal hecha es el primer punto de falla</li>
        <li><strong>Barandas de seguridad:</strong> obligatorias en la cama superior. Verificar que estén bien ancladas</li>
        <li><strong>Estabilidad de la escalera:</strong> debe estar firmemente unida a la estructura, sin juego lateral</li>
        <li><strong>Pintura:</strong> anticorrosiva y bien aplicada para evitar óxido temprano</li>
      </ul>
      <p>
        En Chile, el término &quot;camarote&quot; es el más común en el mercado actual.
        Si buscas &quot;cucheta&quot; en Google.cl verás muchos resultados que usan ambos términos
        indistintamente.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuál es la diferencia entre camarote y cucheta en Chile?",
                acceptedAnswer: { "@type": "Answer", text: "No hay diferencia de producto. Ambos términos se refieren al mismo mueble: una estructura de dos camas superpuestas. 'Camarote' es el término más usado actualmente en Chile; 'cucheta' se usa más en Argentina y entre generaciones mayores de chilenos." },
              },
              {
                "@type": "Question",
                name: "¿Y qué diferencia hay con una litera?",
                acceptedAnswer: { "@type": "Answer", text: "Tampoco hay diferencia de producto. 'Litera' es el término de influencia española. Los tres nombres — camarote, cucheta y litera — describen el mismo tipo de mueble." },
              },
              {
                "@type": "Question",
                name: "¿Cómo buscar la mejor cucheta o camarote en Chile?",
                acceptedAnswer: { "@type": "Answer", text: "Independiente del nombre, enfócate en el calibre del acero, la calidad de las soldaduras, la solidez de las barandas y la estabilidad de la escalera. El término que uses en la búsqueda no afecta la calidad del producto." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, busco una cucheta / camarote / litera metálica en Santiago. ¿Qué modelos tienen y cuáles son los precios?" />
    </>
  ),

  "camarote-para-adulto-mayor": () => (
    <>
      <p>
        La pregunta de si un <strong>adulto mayor puede usar un camarote</strong> tiene una respuesta
        directa: en general, no recomendamos que personas mayores duerman en el nivel superior
        de un camarote. Pero hay matices importantes que esta guía explica.
      </p>

      <h2>¿Por qué el nivel superior no es ideal para adultos mayores?</h2>
      <p>
        Los riesgos del nivel superior de un camarote para personas mayores son reales y
        concretos:
      </p>
      <ul>
        <li><strong>Mayor riesgo de caída:</strong> subir y bajar la escalera de noche, especialmente en oscuridad, es un riesgo significativo</li>
        <li><strong>Menor agilidad:</strong> las articulaciones y el equilibrio pueden dificultar el uso seguro de la escalera</li>
        <li><strong>Urgencia nocturna:</strong> si hay necesidad de ir al baño de noche, bajar la escalera rápidamente aumenta el riesgo</li>
        <li><strong>Desorientación nocturna:</strong> algunas personas mayores pueden desorientarse al despertar y no recordar que están en altura</li>
      </ul>

      <h2>Casos donde un camarote sí funciona para adultos mayores</h2>
      <p>
        Hay situaciones donde un camarote puede funcionar perfectamente para una persona mayor:
      </p>
      <ul>
        <li>
          <strong>Nivel inferior:</strong> dormir en la cama de abajo de un camarote es perfectamente seguro para una persona mayor. La cama está cerca del suelo y no requiere subir escalera.
        </li>
        <li>
          <strong>Camarote doble en nivel inferior:</strong> si la persona mayor necesita una cama de 2 plazas, el camarote doble tiene la cama grande abajo y una más pequeña arriba para otro familiar o visita.
        </li>
        <li>
          <strong>Persona mayor activa:</strong> si la persona tiene buena movilidad, no tiene problemas de equilibrio y la escalera tiene buenos peldaños antideslizantes, el uso ocasional del nivel superior puede ser seguro. La decisión la toma el propio usuario y su médico.
        </li>
      </ul>

      <h2>Alternativas recomendadas para adultos mayores</h2>
      <p>
        Si el objetivo es aprovechar el espacio de la habitación, hay opciones más seguras que
        el nivel superior de un camarote:
      </p>
      <ul>
        <li><strong>Cama baja con almacenamiento debajo:</strong> más segura para el adulto mayor, aprovecha el espacio inferior</li>
        <li><strong>Cama articulada o de hospital:</strong> si hay necesidad de asistencia, más adecuada que un camarote</li>
        <li><strong>Camarote con adulto mayor en nivel inferior:</strong> el nieto o visita joven duerme arriba, el adulto mayor abajo</li>
      </ul>
      <p>
        Consúltanos por WhatsApp describiendo la situación específica y te orientamos sobre
        qué modelo funciona mejor para tu caso particular.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Pueden los adultos mayores usar camarotes?",
                acceptedAnswer: { "@type": "Answer", text: "El nivel inferior de un camarote es perfectamente seguro para adultos mayores. El nivel superior no se recomienda en general por el riesgo de caída al subir y bajar la escalera, especialmente de noche. La decisión final depende de la movilidad y condición de cada persona." },
              },
              {
                "@type": "Question",
                name: "¿Qué modelo de camarote es más adecuado si hay un adulto mayor?",
                acceptedAnswer: { "@type": "Answer", text: "El camarote doble (cama de 2 plazas abajo + 1 plaza arriba) es una buena opción: el adulto mayor duerme cómodo en la cama doble del nivel inferior, mientras otro familiar ocupa el nivel superior." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, necesito un camarote donde una persona mayor dormirá en el nivel inferior. ¿Qué modelo me recomiendan?" />
    </>
  ),

  "camarote-armado-paso-a-paso": () => (
    <>
      <p>
        Una de las preguntas más frecuentes al comprar un camarote metálico es:
        <strong> ¿cuánto demora armarlo y qué tan difícil es?</strong> La respuesta depende
        de si lo armas tú mismo o si se entrega con instalación incluida. Esta guía cubre
        ambos escenarios.
      </p>

      <h2>Opción 1: Entrega con instalación incluida (lo que ofrecemos)</h2>
      <p>
        Con nuestro servicio de despacho, el equipo de entrega arma el camarote directamente
        en la habitación. No necesitas hacer nada. El proceso completo toma aproximadamente
        20 a 40 minutos dependiendo del modelo:
      </p>
      <ul>
        <li>El equipo llega con todas las piezas desarmadas</li>
        <li>Sube las piezas a la habitación (sin importar el piso)</li>
        <li>Arma la estructura, instala escalera y barandas</li>
        <li>Verifica la estabilidad antes de retirarse</li>
        <li>Se llevan el embalaje</li>
        <li>Pagas cuando está instalado y conforme</li>
      </ul>

      <h2>Opción 2: Si armas el camarote tú mismo</h2>
      <p>
        Si por alguna razón decides armarlo solo, estos son los pasos generales para
        un camarote metálico estándar:
      </p>
      <h3>Herramientas necesarias</h3>
      <ul>
        <li>Llave inglesa o llave de boca del tamaño de los tornillos incluidos</li>
        <li>Destornillador de estrella (para algunos modelos)</li>
        <li>Nivel de burbuja (opcional pero útil para verificar que quede derecho)</li>
        <li>Un ayudante: muchos pasos requieren sostener piezas mientras se aprietan tornillos</li>
      </ul>
      <h3>Pasos generales de armado</h3>
      <ul>
        <li><strong>Paso 1 — Estructura base:</strong> unir los postes verticales con los travesaños horizontales inferiores</li>
        <li><strong>Paso 2 — Nivel inferior:</strong> instalar los largueros laterales del nivel inferior y la parrilla o base de la cama</li>
        <li><strong>Paso 3 — Nivel superior:</strong> unir los postes superiores y los travesaños del nivel alto</li>
        <li><strong>Paso 4 — Parrilla superior:</strong> instalar la base del colchón superior</li>
        <li><strong>Paso 5 — Escalera:</strong> anclar la escalera a la estructura</li>
        <li><strong>Paso 6 — Barandas:</strong> instalar las barandas de seguridad del nivel superior</li>
        <li><strong>Paso 7 — Verificación:</strong> apretar todos los tornillos y verificar estabilidad moviéndola lateralmente</li>
      </ul>
      <p>
        El tiempo estimado para armar un camarote solo es de 45 minutos a 2 horas dependiendo
        de la experiencia y del modelo. Con ayuda, se reduce considerablemente.
      </p>

      <h2>Errores frecuentes al armar camarotes metálicos</h2>
      <ul>
        <li><strong>No apretar todos los tornillos:</strong> algunos quedan a la vista pero otros están ocultos; revisa todos</li>
        <li><strong>Montar la escalera al revés:</strong> la escalera tiene un lado interior y uno exterior; verifica con las instrucciones</li>
        <li><strong>Instalar la baranda sin verificar la altura:</strong> debe quedar por encima del nivel del colchón una vez puesto</li>
        <li><strong>No verificar estabilidad antes de usar:</strong> siempre sacude la estructura antes de poner el colchón y probarla</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto tarda en armarse un camarote metálico?",
                acceptedAnswer: { "@type": "Answer", text: "Con instalación incluida en el despacho, el equipo lo arma en 20-40 minutos. Si lo armas tú mismo, entre 45 minutos y 2 horas dependiendo de la experiencia y el modelo." },
              },
              {
                "@type": "Question",
                name: "¿Qué herramientas se necesitan para armar un camarote metálico?",
                acceptedAnswer: { "@type": "Answer", text: "Llave inglesa del tamaño de los tornillos incluidos, destornillador de estrella (para algunos modelos) y un ayudante para sostener piezas mientras se aprietan los tornillos." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, quiero pedir un camarote con instalación incluida en Santiago. ¿Cómo funciona el servicio de despacho?" />
    </>
  ),

  "camarote-con-cajones": () => (
    <>
      <p>
        Una pregunta frecuente al buscar camarote es: <strong>¿existe algún modelo con cajones
        integrados?</strong> La respuesta es matizada: los camarotes metálicos estándar no
        incluyen cajones, pero hay varias formas de maximizar el almacenamiento. Esta guía
        te lo explica.
      </p>

      <h2>¿Por qué los camarotes metálicos generalmente no tienen cajones?</h2>
      <p>
        Los cajones integrados son más comunes en camarotes de madera o MDF, donde la
        estructura puede incluir cajones en la base de la cama inferior. Los camarotes
        metálicos prioriza la robustez de la estructura de acero sobre los componentes
        de almacenamiento, lo que los hace más resistentes pero con menos opciones de
        cajones integrados de fábrica.
      </p>
      <p>
        Los modelos de madera con cajones existen en el mercado, pero tienen menor durabilidad
        estructural que el acero, especialmente en el nivel superior que soporta el peso de
        una persona adulta durante años.
      </p>

      <h2>Alternativas de almacenamiento para camarotes metálicos</h2>
      <h3>Cajas bajo la cama con ruedas</h3>
      <p>
        La opción más simple: cajas de almacenamiento plásticas o de tela con ruedas que
        se deslizan bajo la cama inferior. No requieren modificar el camarote y se pueden
        cambiar de posición fácilmente. Las cajas con tapa transparente permiten ver el
        contenido sin sacarlas.
      </p>
      <h3>Cajoneras independientes</h3>
      <p>
        Una cajonera pequeña (2-3 cajones) al lado del camarote ocupa poco espacio lateral
        y da almacenamiento fácilmente accesible. Para dos hermanos que comparten camarote,
        una cajonera baja por cada uno da autonomía a cada niño sobre su espacio.
      </p>
      <h3>Organizadores colgantes en las barandas</h3>
      <p>
        Existen organizadores de bolsillos de tela que se cuelgan de la baranda o la escalera
        del camarote. Son ideales para guardar libro de noche, tablet, cargador, anteojos y
        cosas de uso frecuente a mano desde la cama.
      </p>
      <h3>Estantes en la pared junto al camarote</h3>
      <p>
        Unos estantes flotantes en la pared lateral del camarote compensan la falta de cajones
        integrados y añaden personalidad a la habitación.
      </p>

      <h2>¿Vale la pena un camarote de madera con cajones vs metálico sin cajones?</h2>
      <p>
        Depende de la prioridad:
      </p>
      <ul>
        <li><strong>Prioridad durabilidad y seguridad:</strong> camarote metálico gana sin discusión</li>
        <li><strong>Prioridad almacenamiento integrado:</strong> un modelo de madera con cajones puede servir, aunque con menor vida útil</li>
        <li><strong>Mejor relación entre los dos:</strong> camarote metálico + cajonera independiente es más versátil y permite cambiar el almacenamiento sin cambiar el camarote</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Existen camarotes metálicos con cajones en Chile?",
                acceptedAnswer: { "@type": "Answer", text: "Los camarotes metálicos estándar generalmente no incluyen cajones integrados. La alternativa más práctica es usar cajas con ruedas bajo la cama inferior o una cajonera independiente al costado del camarote." },
              },
              {
                "@type": "Question",
                name: "¿Cómo puedo agregar almacenamiento a un camarote metálico?",
                acceptedAnswer: { "@type": "Answer", text: "Las mejores opciones son: cajas plásticas con ruedas bajo la cama inferior, cajonera pequeña al lado del camarote, organizadores de bolsillos colgantes en la baranda o estantes flotantes en la pared lateral." },
              },
            ],
          }),
        }}
      />

      <CTAWhatsApp mensaje="Hola, busco un camarote metálico para una habitación pequeña. ¿Qué opciones tienen para maximizar el almacenamiento?" />
    </>
  ),

  "camarote-metalico-vs-madera": () => (
    <>
      <p>
        La elección entre un <strong>camarote metálico y uno de madera</strong> es una de las
        preguntas más frecuentes al buscar literas en Chile. No hay una respuesta única para todos:
        depende de las prioridades de cada familia. Esta guía la hace honesta y sin sesgos.
      </p>

      <h2>Durabilidad y resistencia: metal gana</h2>
      <p>
        El acero tiene una ventaja clara en durabilidad sobre la madera y el MDF.
        Un camarote metálico de buena calidad puede durar 15-20 años con mantenimiento básico.
        Los camarotes de madera maciza también duran muchos años, pero son más caros.
        Los de MDF o aglomerado (los más comunes en el mercado económico) tienen una vida útil
        significativamente menor: la humedad, los golpes y el peso sostenido los deterioran más rápido.
      </p>
      <ul>
        <li><strong>Camarote metálico:</strong> resiste bien la humedad (con pintura en buen estado), golpes y el peso de adultos. No se deforma con el tiempo.</li>
        <li><strong>Camarote de madera maciza:</strong> muy duradero pero más pesado, más caro y sensible a la humedad ambiental.</li>
        <li><strong>Camarote de MDF/aglomerado:</strong> el más común y barato, pero el menos duradero. Se hincha con la humedad y las uniones se debilitan con el uso intensivo.</li>
      </ul>

      <h2>Precio: depende del material específico</h2>
      <p>
        Comparar "metálico vs madera" en precio es comparar categorías muy amplias:
      </p>
      <ul>
        <li>Los camarotes metálicos de buen calibre tienen un precio competitivo comparado con madera de calidad equivalente</li>
        <li>Los camarotes de MDF pueden parecer más baratos, pero la vida útil menor hace que el costo por año de uso sea similar o mayor</li>
        <li>La madera maciza de calidad cuesta más que el metal en estructuras equivalentes</li>
      </ul>

      <h2>Estética: madera gana en ciertos estilos</h2>
      <p>
        Si la habitación tiene un estilo nórdico, natural o cálido, la madera encaja mejor
        visualmente. El acero pintado tiene una estética más industrial y contemporánea.
        Esto es una preferencia personal, no una ventaja funcional de ninguno.
      </p>

      <h2>Peso soportado: metal gana</h2>
      <p>
        Para adultos o para uso intensivo (hostales, campamentos, uso comercial), el camarote
        metálico soporta más peso de forma más consistente en el tiempo. Las uniones de madera
        — especialmente las de MDF — se debilitan con el peso sostenido de adultos.
      </p>

      <h2>¿Cuál conviene en Chile?</h2>
      <p>
        Para la mayoría de las familias chilenas que buscan camarotes para hijos en edad escolar,
        uso residencial normal y máxima durabilidad al mejor precio, el camarote metálico es
        la mejor opción. Si el presupuesto permite madera maciza de calidad y la estética
        es prioritaria, puede ser una buena alternativa. El MDF es el que menos recomendamos
        por la discrepancia entre precio y vida útil.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Es mejor un camarote metálico o de madera?", acceptedAnswer: { "@type": "Answer", text: "Para la mayoría de los hogares, el camarote metálico ofrece mejor relación durabilidad-precio. La madera maciza es una buena alternativa si el presupuesto lo permite y la estética es prioritaria. El MDF/aglomerado tiene menor vida útil y no lo recomendamos para uso intensivo." } },
          { "@type": "Question", name: "¿Cuánto dura un camarote metálico comparado con uno de madera?", acceptedAnswer: { "@type": "Answer", text: "Un camarote metálico de buena calidad puede durar 15-20 años con mantenimiento básico. Uno de madera maciza similar duración. Los de MDF o aglomerado tienen una vida útil significativamente menor, especialmente en ambientes con humedad o uso intensivo." } },
        ],
      }) }} />
      <CTAWhatsApp mensaje="Hola, estoy decidiendo entre camarote metálico y de madera. ¿Me pueden orientar sobre los modelos disponibles?" />
    </>
  ),

  "pago-contra-entrega-camarote": () => (
    <>
      <p>
        El <strong>pago contra entrega en camarotes</strong> significa exactamente lo que el nombre
        dice: pagas cuando el camarote llega a tu casa, instalado y funcionando. No hay adelanto,
        no hay transferencias antes de ver el producto, no hay riesgo.
      </p>

      <h2>¿Cómo funciona el pago contra entrega paso a paso?</h2>
      <ul>
        <li><strong>Paso 1 — Cotizas:</strong> nos escribes por WhatsApp, te indicamos el precio y acordamos el modelo</li>
        <li><strong>Paso 2 — Coordinamos:</strong> elegimos juntos el día y horario de entrega que mejor te acomode</li>
        <li><strong>Paso 3 — Llega el equipo:</strong> el equipo de despacho llega con el camarote desarmado y sube las piezas a la habitación</li>
        <li><strong>Paso 4 — Se instala:</strong> arman el camarote completo en tu habitación (20-40 minutos)</li>
        <li><strong>Paso 5 — Verificas:</strong> revisas que todo esté correcto, en buen estado y conforme a lo acordado</li>
        <li><strong>Paso 6 — Pagas:</strong> solo cuando estás conforme pagas el precio acordado (efectivo o transferencia)</li>
      </ul>

      <h2>¿Por qué el pago contra entrega protege al comprador?</h2>
      <p>
        Cuando compras un mueble por adelantado — por transferencia o tarjeta antes de verlo —
        asumes el 100% del riesgo: si el producto no llega, llega dañado o no coincide con lo
        que te ofrecieron, recuperar el dinero puede ser difícil. Con pago contra entrega:
      </p>
      <ul>
        <li>Si el camarote tiene algún defecto visible, no pagas hasta que se resuelva</li>
        <li>Si el modelo no coincide con lo que pediste, no pagas</li>
        <li>Si no llega, no perdiste nada</li>
        <li>El riesgo lo asume el proveedor, no tú</li>
      </ul>

      <h2>¿Hay algún costo adicional por pagar contra entrega?</h2>
      <p>
        No. En nuestro caso, el pago contra entrega no tiene ningún recargo. El precio que
        te cotizamos es el precio que pagas cuando llega. El despacho con instalación incluida
        tiene un costo fijo de {formatPrice(SITE_CONFIG.despacho.precio)}.
      </p>

      <h2>¿Qué formas de pago se aceptan al momento de la entrega?</h2>
      <p>
        Aceptamos efectivo y transferencia bancaria al momento de la entrega. Consúltanos
        por WhatsApp si tienes alguna preferencia de forma de pago antes de confirmar el pedido.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Qué es el pago contra entrega en camarotes?", acceptedAnswer: { "@type": "Answer", text: "Significa que pagas el precio acordado solo cuando el camarote llega a tu casa, ya instalado y verificado. No hay adelanto ni transferencia previa. El riesgo lo asume el proveedor." } },
          { "@type": "Question", name: "¿Hay un costo extra por pago contra entrega?", acceptedAnswer: { "@type": "Answer", text: "No. El precio que se cotiza es el precio final. El despacho con instalación incluida tiene un costo fijo de $20.000 para toda la Región Metropolitana." } },
        ],
      }) }} />
      <CTAWhatsApp mensaje="Hola, quiero cotizar un camarote con pago contra entrega en Santiago. ¿Cómo funciona el proceso?" />
    </>
  ),

  "camarote-para-pieza-pequena": () => (
    <>
      <p>
        Encontrar el camarote correcto para una <strong>pieza pequeña</strong> requiere medir
        bien antes de comprar. Un camarote mal elegido puede hacer la habitación inutilizable.
        Esta guía te da todo lo que necesitas para elegir bien.
      </p>

      <h2>Medidas mínimas de habitación para un camarote</h2>
      <p>
        Un camarote estándar de 1 plaza tiene aproximadamente 100 cm de ancho por 200-210 cm
        de largo. Necesitas espacio adicional para:
      </p>
      <ul>
        <li><strong>Escalera:</strong> 50-60 cm libres al lado donde se instala</li>
        <li><strong>Circulación:</strong> al menos 70-80 cm libres alrededor del camarote para moverse cómodamente</li>
        <li><strong>Alto del techo:</strong> mínimo 180 cm para el nivel superior; 210-220 cm para que el usuario pueda sentarse cómodamente arriba</li>
      </ul>
      <p>
        Por lo tanto, el espacio mínimo recomendado en el suelo es de aproximadamente 180 cm
        de ancho por 270 cm de largo. Para piezas más pequeñas que eso, existen alternativas.
      </p>

      <h2>Las mejores opciones para piezas muy pequeñas</h2>
      <h3>Camarote nido — 3 camas en 1</h3>
      <p>
        El <strong>camarote nido</strong> es el más eficiente en espacio: tiene la misma
        huella de suelo que un camarote estándar, pero cuando se necesitan 3 camas se desliza
        la tercera desde abajo. De día funciona como camarote normal; de noche se convierte
        en 3 camas. Ideal para habitaciones pequeñas con 2-3 personas.
      </p>
      <h3>Cama alta — una sola cama elevada</h3>
      <p>
        Si solo se necesita una cama y se quiere liberar el suelo, la <strong>cama alta</strong>
        es perfecta: ocupa en el suelo lo mismo que una cama estándar, pero eleva la cama y
        deja todo el espacio inferior libre para escritorio, almacenamiento o simplemente
        para que la pieza se sienta más grande.
      </p>
      <h3>Camarote con medidas personalizadas</h3>
      <p>
        Si tu pieza tiene medidas fuera de lo estándar, podemos ajustar el largo o el ancho
        del camarote a lo que necesitas. Cada cambio de medida tiene un costo adicional
        de {formatPrice(SITE_CONFIG.cambioMedida.precio)}. Hasta 3 cambios por pedido.
      </p>

      <h2>Cómo medir tu habitación antes de pedir el camarote</h2>
      <ul>
        <li>Mide el ancho y el largo de la habitación con una huincha</li>
        <li>Descuenta el espacio de puertas que abren hacia adentro y ventanas con radiadores</li>
        <li>Mide el alto del techo en el punto donde irá la cabecera del camarote</li>
        <li>Considera la ubicación del tomacorriente más cercano (para lámpara de lectura)</li>
        <li>Envíanos las medidas por WhatsApp y te confirmamos qué modelos son posibles</li>
      </ul>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Qué espacio mínimo necesito para un camarote?", acceptedAnswer: { "@type": "Answer", text: "Un camarote estándar de 1 plaza necesita aproximadamente 180 cm de ancho por 270 cm de largo, considerando espacio para escalera y circulación. El alto del techo debe ser mínimo 180 cm, idealmente 210-220 cm para que el usuario pueda sentarse arriba." } },
          { "@type": "Question", name: "¿Cuál es el camarote más pequeño en espacio disponible?", acceptedAnswer: { "@type": "Answer", text: "El camarote nido y la cama alta son los más eficientes en espacio. El nido da 3 camas en la huella de una sola. La cama alta libera todo el espacio del suelo con una sola cama elevada." } },
        ],
      }) }} />
      <CTAWhatsApp mensaje="Hola, tengo una pieza pequeña y quiero ver si cabe un camarote. ¿Puedo enviarles las medidas para que me orienten?" />
    </>
  ),

  "como-equipar-campamento-minero": () => (
    <>
      <p>Equipar un campamento minero no es lo mismo que amueblar un dormitorio. Las exigencias son distintas: uso intensivo 24/7, rotaciones de personal, condiciones climáticas extremas y normativas de habitabilidad que en Chile regula el SERNAGEOMIN para faenas.</p>

      <h2>¿Qué tipo de camarote usar en un campamento minero?</h2>
      <p>El camarote metálico es el estándar de la industria por razones concretas:</p>
      <ul>
        <li><strong>Resistencia:</strong> el acero soporta el uso por múltiples turnos sin deformarse</li>
        <li><strong>Higiene:</strong> no absorbe humedad, no desarrolla hongos, se puede lavar con manguera</li>
        <li><strong>Portabilidad:</strong> se arma y desarma sin herramientas especiales cuando termina la faena</li>
        <li><strong>Vida útil:</strong> un camarote metálico bien fabricado dura 10-20 años en uso industrial</li>
      </ul>

      <h2>¿Cuántas camas por habitación?</h2>
      <p>La normativa SERNAGEOMIN establece para campamentos industriales en Chile:</p>
      <ul>
        <li>Mínimo 4 m² de superficie por persona</li>
        <li>Ventilación natural o mecánica obligatoria</li>
        <li>Iluminación mínima de 100 lux en zonas de descanso</li>
        <li>Temperatura interior entre 17°C y 28°C en invierno y verano respectivamente</li>
      </ul>
      <p>En la práctica, los campamentos bien equipados usan habitaciones de 4-6 personas con 2-3 camarotes. Para campamentos de rotación 4x3 u 8x6, las camas nunca están vacías — por eso la durabilidad es no negociable.</p>

      <h2>Cómo cotizar camarotes para tu campamento</h2>
      <p>Para obtener una cotización precisa, necesitamos saber:</p>
      <ul>
        <li>Número de camas requeridas (no de camarotes)</li>
        <li>Dimensiones de las habitaciones (ancho x largo x alto)</li>
        <li>Ubicación del campamento (determina el flete)</li>
        <li>Fecha tentativa de inicio de la faena</li>
        <li>Si requieres factura de empresa</li>
      </ul>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Cuántos camarotes necesito para un campamento de 100 trabajadores?", acceptedAnswer: { "@type": "Answer", text: "Para 100 trabajadores necesitas 50 camarotes dobles. Si usas habitaciones de 4 personas (2 camarotes), necesitarás 25 habitaciones. Ajusta según el diseño de los módulos y las normativas de superficie mínima." } },
          { "@type": "Question", name: "¿Despachan a campamentos en el desierto de Atacama?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos a toda la zona minera del norte: Antofagasta, Calama, Copiapó, Vallenar y sectores de faena. El flete se cotiza según destino y volumen." } },
        ],
      }) }} />
      <CTAWhatsApp mensaje="Hola, necesito cotizar camarotes para un campamento minero. ¿Pueden ayudarme?" />
    </>
  ),

  "diferencias-camarotes-industriales-residenciales": () => (
    <>
      <p>La pregunta llega con frecuencia: ¿puedo usar un camarote "normal" de casa en un campamento de faena? La respuesta corta es no. La diferencia no es estética — es de ingeniería.</p>

      <h2>Calibre del acero</h2>
      <p>Un camarote residencial estándar usa acero de 1.0–1.2 mm de calibre. Uno industrial debe usar mínimo 1.5–2.0 mm. La diferencia es invisible a simple vista, pero se nota cuando el mismo trabajador de 90 kg sube y baja la escalera 4 veces por día durante 3 años.</p>

      <h2>Soldaduras</h2>
      <p>En uso residencial, las uniones por tornillos son suficientes. En uso industrial, las uniones deben ser soldadas. Las vibraciones constantes del ambiente de faena y el montaje/desmontaje frecuente aflojan los tornillos con el tiempo.</p>

      <h2>Capacidad de carga</h2>
      <ul>
        <li><strong>Residencial:</strong> 120–150 kg por nivel</li>
        <li><strong>Industrial:</strong> 200–250 kg por nivel (persona + ropa + calzado de faena + herramientas)</li>
      </ul>

      <h2>Resistencia a la humedad</h2>
      <p>El norte de Chile tiene humedad relativa baja, pero el sur (Los Ángeles, Temuco, Puerto Montt) puede alcanzar 80–90% de humedad. El tratamiento anticorrosivo de un camarote industrial debe ser más robusto que el residencial para evitar oxidación prematura.</p>

      <h2>¿Cuándo usar cada tipo?</h2>
      <ul>
        <li><strong>Residencial:</strong> hogares, dormitorios, hostales con rotación baja</li>
        <li><strong>Industrial:</strong> campamentos mineros, faenas forestales, temporeros agrícolas, cuartelería</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, necesito camarotes para uso industrial. ¿Pueden asesorarme sobre el modelo correcto?" />
    </>
  ),

  "camarotes-para-temporeros": () => (
    <>
      <p>Equipar el alojamiento para temporeros es un desafío logístico real: la demanda es estacional, el número de trabajadores varía semana a semana y el camarote debe sobrevivir múltiples temporadas de uso intensivo.</p>

      <h2>¿Por qué el camarote metálico es ideal para temporeros?</h2>
      <ul>
        <li><strong>Fácil limpieza:</strong> entre temporadas se lava con manguera y detergente industrial</li>
        <li><strong>No se infesta:</strong> a diferencia de la madera, no acumula chinches ni polillas</li>
        <li><strong>Portátil:</strong> se arma y desarma en 30 minutos, útil si los módulos se reorganizan</li>
        <li><strong>Larga vida:</strong> el mismo camarote sirve 5-10 temporadas con mantenimiento mínimo</li>
      </ul>

      <h2>¿Cuántas camas necesitas?</h2>
      <p>Depende de si los temporeros trabajan en un solo turno o en rotación. En packing con dos turnos, las mismas camas se usan por dos cuadrillas distintas — lo que duplica la exigencia de la cama pero reduce la cantidad total que necesitas.</p>
      <p>Para una cuadrilla estable de 20 personas en un turno: 10 camarotes. Para dos turnos de 20: también 10 camarotes (duermen en momentos distintos). Para dos turnos que duermen al mismo tiempo: 20 camarotes.</p>

      <h2>Normativa MINSAL para alojamiento de trabajadores agrícolas</h2>
      <p>El Ministerio de Salud establece condiciones mínimas para el alojamiento de temporeros: superficie mínima por persona, ventilación, acceso a agua potable y servicios sanitarios. El empleador es responsable de cumplir estas condiciones — el camarote es parte del equipamiento básico obligatorio.</p>

      <h2>¿Dónde despachan para el sector agrícola?</h2>
      <p>Despachamos a todas las zonas agrícolas de Chile: Valle del Maule, Curicó, Talca, Valle del Aconcagua (San Felipe, Los Andes), Buin, Paine, Curacaví y el resto del Valle Central. El flete se cotiza según volumen y destino.</p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Cuántos camarotes necesito para 30 temporeros?", acceptedAnswer: { "@type": "Answer", text: "Para 30 temporeros en un turno necesitas 15 camarotes dobles. Si usan habitaciones de 4-6 personas, divide en grupos de 2-3 camarotes por pieza." } },
        ],
      }) }} />
      <CTAWhatsApp mensaje="Hola, necesito camarotes para alojamiento de temporeros. ¿Pueden cotizarme?" />
    </>
  ),

  "proveedor-camarotes-empresas": () => (
    <>
      <p>Elegir el proveedor equivocado de camarotes para un proyecto industrial sale caro. No en el precio inicial — sino cuando las camas empiezan a fallar a mitad de la faena y no hay con quién reclamar.</p>

      <h2>Fabricante vs distribuidor: la diferencia que importa</h2>
      <p>Un distribuidor compra al fabricante y te vende con su margen. Un fabricante te vende directo. La diferencia no es solo de precio — es de responsabilidad. Si hay un defecto de fabricación, el distribuidor no puede resolverlo directamente. El fabricante sí.</p>
      <p>Al comparar proveedores, pregunta siempre: <strong>"¿Ustedes fabrican o revenden?"</strong></p>

      <h2>Qué exigir al cotizar</h2>
      <ul>
        <li><strong>Factura de empresa:</strong> si compras para una empresa, exige factura electrónica con RUT</li>
        <li><strong>Garantía por escrito:</strong> qué cubre y por cuánto tiempo</li>
        <li><strong>Plazo de entrega confirmado:</strong> no "estimado", confirmado</li>
        <li><strong>Despacho incluido o cotizado:</strong> el flete debe estar en la oferta desde el principio</li>
        <li><strong>Posibilidad de ver muestras:</strong> antes de hacer pedidos grandes, pide ver o visitar</li>
      </ul>

      <h2>Preguntas clave para evaluar un proveedor</h2>
      <ul>
        <li>¿Tienen referencias de proyectos similares (minería, agrícola, forestal)?</li>
        <li>¿Pueden hacer modificaciones de medida si las habitaciones no son estándar?</li>
        <li>¿Cuál es la política de reposición si llega un camarote dañado?</li>
        <li>¿Aceptan pago a 30-60 días para empresas con RUT?</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, soy de una empresa y quiero cotizar camarotes. ¿Pueden enviarme información?" />
    </>
  ),

  "mejor-camarote-con-escritorio-chile": () => (
    <>
      <p>
        La pregunta más frecuente que nos llega: "¿cuál es el mejor camarote con escritorio?" La respuesta honesta
        es que no hay un solo mejor — hay el mejor para <em>tu</em> situación. Pero sí hay errores evitables y
        criterios claros. Acá los explicamos desde nuestra experiencia fabricando.
      </p>

      <h2>1. El acero: lo que nadie te dice en el catálogo</h2>
      <p>
        La mayoría de los camarotes de retail muestran fotos de productos terminados con buena pintura. Lo que
        no ves es el grosor del tubo. Un tubo demasiado delgado flexiona cuando te mueves, cruje con los años
        y puede deformarse con el peso. Lo que debes preguntar: <strong>¿qué calibre de tubo usa el camarote?</strong>
      </p>
      <p>
        En nuestros camarotes usamos tubo de acero de 1 mm de espesor como mínimo en las piezas estructurales
        principales. Para piezas de soporte horizontal, el calibre aumenta. Eso es lo que evita que el escritorio
        "baile" cuando lo usas.
      </p>

      <h2>2. El escritorio: superficie vs estructura</h2>
      <p>
        Hay dos tipos de escritorios integrados. El primero es una repisa atornillada al camarote — liviana
        pero poco rígida. El segundo es un escritorio estructural que forma parte del marco del camarote —
        mucho más robusto. Para uso diario, el escritorio estructural siempre gana.
      </p>
      <p>
        ¿Cómo identificarlo? Apoya ambas palmas en el borde del escritorio y presiona. Si sientes flexión,
        es repisa. Si no cede, es estructural.
      </p>

      <h2>3. Medidas que importan de verdad</h2>
      <ul>
        <li><strong>Altura total:</strong> necesitas al menos 30-40 cm de espacio libre entre la cama del nivel superior y el techo. Mide tu techo antes de comprar.</li>
        <li><strong>Ancho del escritorio:</strong> para laptop + libros, 80 cm mínimo. Para monitor, 100 cm o más.</li>
        <li><strong>Espacio bajo el escritorio:</strong> al menos 65-70 cm para usar cómodamente con una silla.</li>
        <li><strong>Largo de la cama:</strong> estándar es 190 cm. Si mides más de 1,85, confirma el largo.</li>
      </ul>

      <h2>4. La pintura: señal de calidad</h2>
      <p>
        Un camarote con buen acero pero mala pintura va a tener problemas de corrosión en la soldadura con el
        tiempo. La pintura electrostática (powder coating) es el estándar de calidad — más dura, más uniforme,
        más duradera que la pintura líquida. Si el vendedor no sabe qué tipo de pintura usa, es una señal de alerta.
      </p>

      <h2>5. Los errores más comunes al comprar</h2>
      <ul>
        <li>Comprar sin medir el techo (el error más frecuente)</li>
        <li>Elegir por precio sin verificar el calibre del acero</li>
        <li>Comprar a través de marketplace sin ver el producto real</li>
        <li>No verificar si el escritorio es estructural o solo una repisa</li>
        <li>No preguntar si se puede adaptar a medidas específicas de la pieza</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, quiero el mejor camarote con escritorio para mi pieza. ¿Pueden orientarme?" />
    </>
  ),

  "camarote-escritorio-vs-escritorio-aparte": () => (
    <>
      <p>
        Cuando alguien nos pregunta "¿conviene más el camarote con escritorio integrado o comprar los dos por separado?",
        nuestra respuesta honesta es: depende de cuatro factores concretos. Acá los analizamos sin rodeos.
      </p>

      <h2>Cuándo el escritorio integrado gana</h2>
      <p>El camarote con escritorio integrado es la solución correcta cuando:</p>
      <ul>
        <li>La pieza tiene menos de 12 m² — no tienes espacio para separar los muebles</li>
        <li>La persona que lo usa necesita la zona de trabajo siempre accesible</li>
        <li>Buscas simplicidad: un solo mueble, un solo gasto, un solo mantenimiento</li>
        <li>La pieza tiene una sola pared disponible para apoyar muebles (camarote o escritorio, pero no ambos)</li>
        <li>El presupuesto total es ajustado — el conjunto integrado suele ser más económico que dos muebles separados de calidad</li>
      </ul>

      <h2>Cuándo los muebles separados ganan</h2>
      <p>La combinación cama alta + escritorio por separado es mejor cuando:</p>
      <ul>
        <li>La pieza tiene 14 m² o más — hay espacio para distribuir</li>
        <li>Necesitas un escritorio grande (150+ cm) que no cabe en el camarote estándar</li>
        <li>El usuario trabaja desde casa más de 6 horas diarias y necesita ergonomía profesional</li>
        <li>Dos personas usan la pieza y ambas necesitan escritorio propio</li>
        <li>El estilo decorativo importa y quieres coordinar muebles de diseño distinto</li>
      </ul>

      <h2>La comparativa honesta en números</h2>
      <p>
        Un camarote con escritorio de buena calidad fabricado por nosotros cuesta menos que comprar
        una cama alta de igual calidad + un escritorio de madera sólido por separado. La integración
        tiene economía de escala porque el escritorio aprovecha la estructura del camarote.
      </p>
      <p>
        La excepción es cuando comparas con escritorios muy económicos de aglomerado — ahí el precio
        unitario puede ser menor, pero la durabilidad no.
      </p>

      <h2>Nuestra recomendación</h2>
      <p>
        Para piezas de hasta 12 m²: camarote con escritorio, sin dudar.
        Para piezas de 12-16 m²: evalúa según el uso principal (si estudia mucho, escritorio propio).
        Para piezas de más de 16 m²: muebles separados te dan más flexibilidad a largo plazo.
      </p>

      <CTAWhatsApp mensaje="Hola, quiero saber si me conviene más el camarote con escritorio o los muebles por separado. ¿Me pueden orientar?" />
    </>
  ),

  "como-crear-zona-de-estudio-dormitorio": () => (
    <>
      <p>
        El mayor error que comete la gente cuando arma un dormitorio pequeño es intentar separar el
        área de estudio del área de descanso de la misma forma en que lo harían en una casa grande.
        En 10 m², eso no funciona. Hay que pensar en capas verticales, no en zonas horizontales.
      </p>

      <h2>La solución más eficiente: el camarote con escritorio</h2>
      <p>
        Si la pieza tiene menos de 12 m², la respuesta más eficiente es el camarote con escritorio.
        La cama sube, el escritorio ocupa el espacio que antes era solo piso bajo la cama.
        Net result: la misma huella de m², pero con un espacio de trabajo permanente debajo.
      </p>
      <p>
        No es solo una cuestión de espacio — también es psicológica. La cama queda arriba, visualmente
        fuera del campo de trabajo. El cerebro no está viendo la cama mientras estudias, lo que mejora
        la concentración.
      </p>

      <h2>Cuando la pieza permite más: 3 distribuciones que funcionan</h2>
      <h3>Distribución L (12-14 m²)</h3>
      <p>
        Camarote en una pared, escritorio en la pared perpendicular. La "L" crea una zona de trabajo
        con pared de fondo, lo que ayuda a concentrarse. El área libre en el centro sirve de tránsito.
      </p>
      <h3>Distribución lineal (pieza estrecha)</h3>
      <p>
        Para piezas de 2,5-3 m de ancho: camarote al fondo, escritorio en la entrada (o al revés).
        Todo en la misma línea. Máxima circulación pero trabajo separado del descanso.
      </p>
      <h3>Distribución integrada (menos de 10 m²)</h3>
      <p>
        Camarote con escritorio integrado. La única alternativa viable. Si necesitas más superficie
        de trabajo, se puede agregar un ala de escritorio plegable.
      </p>

      <h2>Los 4 elementos que no pueden faltar en la zona de estudio</h2>
      <ul>
        <li><strong>Iluminación correcta:</strong> la luz de arriba (plafón) raramente ilumina bien el escritorio. Necesitas una lámpara de escritorio que ilumine directo al trabajo.</li>
        <li><strong>Silla con soporte lumbar:</strong> el camarote da la superficie. La silla determina si puedes trabajar 2 horas cómodamente o 20 minutos.</li>
        <li><strong>Organización vertical:</strong> estanterías sobre el escritorio o al costado para no tener la superficie llena de cosas.</li>
        <li><strong>Zona sin pantalla visible desde la cama:</strong> si el monitor se ve desde donde duermes, la estimulación visual afecta el sueño. Orienta la pantalla hacia la pared.</li>
      </ul>

      <h2>Qué no hacer</h2>
      <ul>
        <li>Poner el escritorio justo frente a la cama — psicológicamente no ayuda ni al trabajo ni al descanso</li>
        <li>Usar una silla de comedor como silla de escritorio — el dolor de espalda aparece antes de los 30 minutos</li>
        <li>Comprar primero el escritorio y después medir el espacio — siempre al revés</li>
        <li>Ignorar la altura del techo al elegir el camarote</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, quiero armar una zona de estudio en mi dormitorio pequeño. ¿Pueden ayudarme con el camarote correcto?" />
    </>
  ),

  "pintura-electrostatica-muebles-metalicos": () => (
    <>
      <p>
        Cuando alguien nos pregunta por qué los camarotes que fabricamos duran más que los que se venden
        en retail, la respuesta tiene varios componentes — el acero, la soldadura, el diseño. Pero uno
        de los factores más invisibles y más importantes es la pintura. Específicamente: usamos pintura
        electrostática, no pintura líquida convencional. Acá explicamos la diferencia desde adentro.
      </p>

      <h2>Qué es exactamente la pintura electrostática</h2>
      <p>
        La pintura electrostática (o <em>powder coating</em>) es un proceso donde el pigmento se aplica
        en forma de polvo seco, no en forma líquida. El polvo se carga eléctricamente y se adhiere al
        metal por atracción de carga opuesta. Luego la pieza entra a un horno a 180-200°C donde el
        polvo se funde y forma una capa sólida y uniforme.
      </p>
      <p>
        El resultado es una capa de pintura de 60-80 micras de espesor, completamente uniforme, sin
        goteos, sin burbujas y sin marcas de brocha o rodillo.
      </p>

      <h2>Por qué es mejor que la pintura convencional</h2>
      <p>La diferencia no es menor. Son dos procesos fundamentalmente distintos:</p>
      <ul>
        <li><strong>Dureza:</strong> la pintura electrostática curada en horno es mucho más dura al rayado que la pintura líquida seca al aire</li>
        <li><strong>Adherencia:</strong> la carga electrostática hace que el polvo se adhiera perfectamente a toda la superficie, incluyendo ángulos y soldaduras</li>
        <li><strong>Uniformidad:</strong> sin goteos, sin zonas más gruesas o más delgadas</li>
        <li><strong>Resistencia a la corrosión:</strong> la capa continua sin defectos retrasa la corrosión en la soldadura</li>
        <li><strong>Durabilidad:</strong> en condiciones de uso normal, la pintura electrostática dura 3-5 veces más antes de mostrar desgaste visible</li>
      </ul>

      <h2>La parte que nadie ve: la preparación</h2>
      <p>
        La preparación de la superficie es tan importante como el proceso de pintura. Antes de aplicar el
        polvo, la pieza se desengresa completamente y se le aplica un tratamiento de superficie (fosfatizado
        o granallado). Sin esto, la pintura electrostática no adhiere bien y puede levantarse.
      </p>
      <p>
        En nuestro taller, este paso no se saltea. Es uno de los factores que distingue un trabajo profesional
        de uno rápido y económico.
      </p>

      <h2>Cómo reconocer una buena pintura en un camarote</h2>
      <p>
        Sin equipo de medición, hay algunas señales visibles de calidad en la pintura:
      </p>
      <ul>
        <li>Uniformidad en los bordes y soldaduras — sin acumulaciones ni zonas más gruesas</li>
        <li>Textura consistente en toda la superficie — sin zonas brillantes y zonas mate</li>
        <li>Sin burbujas, especialmente en la soldadura (donde suele fallar primero la mala pintura)</li>
        <li>Al raspar suavemente con la uña en un borde: la buena pintura no marca</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, quiero saber más sobre el proceso de pintura que usan en los camarotes." />
    </>
  ),

  "camarotes-metalicos-vs-madera": () => (
    <>
      <p>
        Fabricamos camarotes de acero. No fabricamos de madera. Eso significa que podemos ser
        completamente honestos sobre esta comparativa — no tenemos incentivo en venderte uno u otro.
        Acá va la comparativa real.
      </p>

      <h2>En qué el metal gana claramente</h2>
      <ul>
        <li><strong>Durabilidad bruta:</strong> el acero bien pintado dura décadas. La madera de buena calidad también — pero la de mediana calidad empieza a mostrar desgaste en 5-8 años con uso intensivo</li>
        <li><strong>Resistencia al peso:</strong> para uso industrial o intensivo (faenas, temporeros, campamentos), el metal no tiene competencia</li>
        <li><strong>Sin plagas:</strong> el acero no tiene problemas de termitas ni hongos</li>
        <li><strong>Soldadura vs tornillos:</strong> un camarote metálico soldado no se afloja con el tiempo. Un camarote de madera ensamblado con tornillos eventualmente cede</li>
        <li><strong>Precio relativo:</strong> para igual calidad estructural, el metal suele ser más económico</li>
        <li><strong>Fácil de limpiar:</strong> superficie lisa, sin poros donde acumular polvo o bacterias</li>
      </ul>

      <h2>En qué la madera puede ganar</h2>
      <ul>
        <li><strong>Estética:</strong> la madera sólida tiene una calidez visual que el metal no replica. Si el dormitorio tiene decoración de madera, el camarote metálico puede desentonar</li>
        <li><strong>Temperatura al tacto:</strong> en invierno, el metal frío en la escalera es notorio. La madera no tiene ese problema</li>
        <li><strong>Sonido:</strong> la madera no "resuena" con los golpes de la misma forma que el metal. Para algunos usuarios, el metal suena más</li>
        <li><strong>Personalización estética:</strong> la madera se puede pintar, lijar y modificar más fácilmente en casa</li>
      </ul>

      <h2>El factor que nadie menciona: la calidad dentro de cada categoría</h2>
      <p>
        La comparativa metal vs madera es menos relevante que la comparativa dentro de cada categoría.
        Un camarote de metal barato con tubo delgado y mala pintura es peor que uno de madera sólida bien
        ensamblado. Y viceversa: un camarote de acero con tubo de buen calibre y pintura electrostática
        supera a cualquier camarote de MDF o madera blanda.
      </p>
      <p>
        El material importa menos que la calidad de ejecución.
      </p>

      <h2>Nuestra conclusión</h2>
      <p>
        Para uso intensivo, pieza pequeña o presupuesto ajustado: acero.
        Para decoración cuidada, madera sólida de calidad: puede tener sentido.
        Para lo de en medio (retail de calidad media): el metal suele ganar en durabilidad.
      </p>

      <CTAWhatsApp mensaje="Hola, estoy comparando camarotes de metal y madera. ¿Pueden orientarme para mi caso?" />
    </>
  ),
};
