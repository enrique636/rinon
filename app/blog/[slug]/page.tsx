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
    alternates: { canonical: `https://rinon.cl/blog/${post.slug}` },
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

  "como-elegir-camarote-con-escritorio": () => (
    <>
      <p>
        Un camarote con escritorio es una cama elevada con un escritorio integrado en el espacio de
        abajo. Suena simple, pero elegir el modelo correcto marca la diferencia entre un mueble que
        aprovecha bien la pieza y uno que estorba. Esta guía repasa los criterios que realmente
        importan antes de comprar.
      </p>

      <h2>1. Define para quién y para qué es</h2>
      <p>
        No es lo mismo un camarote con escritorio para un escolar que para un universitario o para
        alguien en home office. El uso define el tamaño del escritorio, si necesitas estantes y qué
        tan reforzada debe ser la estructura.
      </p>
      <ul>
        <li><strong>Estudiante escolar o universitario:</strong> prioriza el espacio de escritorio y la iluminación.</li>
        <li><strong>Gamer:</strong> escritorio más profundo para monitor y periféricos.</li>
        <li><strong>Home office:</strong> el modelo full con estantes integrados ordena mejor el trabajo.</li>
      </ul>

      <h2>2. Conoce los tres modelos disponibles</h2>
      <p>
        En nuestra fábrica trabajamos tres versiones del camarote con escritorio, todas en acero
        fabricado en Chile:
      </p>
      <ul>
        <li>
          <strong><Link href="/camarote-con-escritorio-economico">Económico</Link>:</strong> la opción
          más accesible. Escritorio funcional, sin accesorios extra. Ideal cuando el presupuesto manda.
        </li>
        <li>
          <strong><Link href="/camarote-con-escritorio">Estándar</Link>:</strong> el equilibrio entre
          precio y funcionalidad. El favorito de estudiantes y gamers.
        </li>
        <li>
          <strong><Link href="/camarote-con-escritorio-full">Full</Link>:</strong> escritorio de mayor
          profundidad, estantes integrados y baranda reforzada. Para quienes el espacio de trabajo es
          tan importante como la cama.
        </li>
      </ul>

      <h2>3. Mide tu espacio antes de decidir</h2>
      <p>
        El error más común es no medir. Antes de cotizar, mide el ancho, el largo y sobre todo la
        <strong> altura libre</strong> de la pieza: un camarote con escritorio aprovecha el espacio
        vertical, así que necesita techo suficiente para que quien duerme arriba se siente cómodo.
        Las medidas exactas de cada modelo se confirman con el fabricante, y como fabricamos a pedido,
        podemos ajustarlas a tu pieza.
      </p>

      <h2>4. Revisa el material y la terminación</h2>
      <p>
        Una estructura de acero con pintura electrostática dura años y resiste el uso diario mejor
        que la madera aglomerada. Pregunta siempre por el tipo de acero, la terminación y si la
        baranda de seguridad viene incluida.
      </p>

      <h2>5. Confirma despacho e instalación</h2>
      <p>
        Un buen camarote mal instalado es un problema. Verifica que el despacho incluya el armado.
        Nosotros despachamos e instalamos en Santiago y toda la Región Metropolitana con pago contra
        entrega — pagas cuando el camarote llega instalado.
      </p>

      <h3>Preguntas frecuentes</h3>
      <h4>¿Qué medidas tiene el camarote con escritorio?</h4>
      <p>Dependen del modelo. Las medidas exactas se confirman con el fabricante y pueden ajustarse a tu pieza.</p>
      <h4>¿Cuál modelo es mejor para un universitario?</h4>
      <p>El estándar suele ser suficiente; si necesitas estantes para ordenar libros y monitor, el full es mejor.</p>
      <h4>¿Es resistente para un adulto?</h4>
      <p>Sí. La estructura de acero está pensada para el uso normal de adultos. Consulta el modelo según tu caso.</p>

      <CTAWhatsApp mensaje="Hola, quiero ayuda para elegir un camarote con escritorio. Uso: [ESTUDIANTE / GAMER / HOME OFFICE]. Espacio disponible: [MEDIDAS APROX]. ¿Qué modelo me recomiendan?" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Qué medidas tiene el camarote con escritorio?", acceptedAnswer: { "@type": "Answer", text: "Dependen del modelo. Las medidas exactas se confirman con el fabricante y pueden ajustarse a tu pieza." } },
              { "@type": "Question", name: "¿Cuál modelo es mejor para un universitario?", acceptedAnswer: { "@type": "Answer", text: "El estándar suele ser suficiente; si necesitas estantes para ordenar libros y monitor, el full es mejor." } },
              { "@type": "Question", name: "¿Es resistente para un adulto?", acceptedAnswer: { "@type": "Answer", text: "Sí. La estructura de acero está pensada para el uso normal de adultos. Consulta el modelo según tu caso." } },
            ],
          }),
        }}
      />
    </>
  ),

  "camarote-con-escritorio-pieza-pequena": () => (
    <>
      <p>
        Cuando la pieza es pequeña, poner una cama y un escritorio por separado significa ocupar el
        doble de superficie que muchas veces simplemente no existe. El camarote con escritorio ataca
        justo ese problema: eleva la cama y coloca el escritorio debajo, aprovechando el espacio
        vertical que en la mayoría de los dormitorios queda desperdiciado.
      </p>

      <h2>Por qué el diseño vertical funciona en piezas chicas</h2>
      <p>
        En un dormitorio pequeño el suelo es el recurso más escaso. Una cama tradicional ocupa
        alrededor de dos metros cuadrados que no se pueden usar para nada más. Al subir la cama, ese
        espacio se libera para el escritorio, dejando el piso despejado y la pieza más ordenada.
      </p>
      <ul>
        <li>Un solo mueble reemplaza cama más escritorio.</li>
        <li>El piso queda libre, lo que hace ver la pieza más amplia.</li>
        <li>La zona de estudio queda definida y con mejor luz.</li>
      </ul>

      <h2>Qué modelo elegir para poco espacio</h2>
      <p>
        Para piezas pequeñas conviene empezar por lo esencial. El
        <strong> <Link href="/camarote-con-escritorio-economico">modelo económico</Link></strong> tiene
        un diseño limpio, sin accesorios que ocupen espacio, y es la opción más accesible. Si necesitas
        ordenar libros y monitor sin sumar muebles, el
        <strong> <Link href="/camarote-con-escritorio-full">modelo full</Link></strong> incluye estantes
        integrados que aprovechan el mismo mueble. El
        <strong> <Link href="/camarote-con-escritorio">modelo estándar</Link></strong> es el punto medio.
      </p>

      <h2>Trucos para aprovechar aún más el espacio</h2>
      <ul>
        <li>Ubica el escritorio hacia la ventana para ganar luz natural.</li>
        <li>Usa el espacio bajo la escalera o al costado para repisas.</li>
        <li>Elige colores claros en la pieza para ampliar la sensación de espacio.</li>
        <li>Aprovecha la pared sobre el escritorio con estantes o pizarras.</li>
      </ul>

      <h2>Mide antes de comprar</h2>
      <p>
        Antes de decidir, mide el ancho, el largo y la altura libre de la pieza. Como fabricamos a
        pedido, podemos ajustar las medidas del camarote a tu espacio. Si tienes dudas, envíanos las
        medidas por WhatsApp y te decimos qué modelo entra mejor.
      </p>

      <p>
        Si además quieres ver más ideas de distribución, revisa nuestra guía sobre
        {" "}<Link href="/blog/camarote-para-pieza-pequena">camarotes para pieza pequeña</Link> y la de
        {" "}<Link href="/blog/como-elegir-camarote-con-escritorio">cómo elegir un camarote con escritorio</Link>.
      </p>

      <CTAWhatsApp mensaje="Hola, tengo una pieza pequeña y quiero un camarote con escritorio. Medidas de la pieza (aprox): [ANCHO x LARGO x ALTO]. ¿Qué modelo me recomiendan?" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Un camarote con escritorio sirve para una pieza muy chica?", acceptedAnswer: { "@type": "Answer", text: "Sí. Es precisamente la solución pensada para piezas pequeñas, porque aprovecha el espacio vertical y libera el piso." } },
              { "@type": "Question", name: "¿Se puede ajustar la medida a mi pieza?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos a pedido y podemos ajustar las medidas del camarote al espacio disponible. Consúltanos por WhatsApp." } },
            ],
          }),
        }}
      />
    </>
  ),

  "cama-alta-con-escritorio-para-estudiantes": () => (
    <>
      <p>
        La cama alta con escritorio integrado es, probablemente, el mejor mueble que un estudiante
        puede tener en su pieza. Combina en un solo espacio la zona de descanso y la zona de estudio,
        algo especialmente valioso cuando el dormitorio es pequeño o se comparte.
      </p>

      <h2>Por qué es ideal para estudiar</h2>
      <p>
        Estudiar bien requiere un espacio propio, ordenado y con buena luz. La cama alta con escritorio
        crea esa zona sin ocupar más metros: la cama va arriba y el escritorio queda debajo, definido
        y listo para concentrarse. Para un universitario que vive en un departamento chico o un escolar
        que comparte pieza, esta diferencia es enorme.
      </p>
      <ul>
        <li>Zona de estudio definida, separada de la cama.</li>
        <li>Más espacio libre en el piso para moverse.</li>
        <li>Todo lo necesario a mano: laptop, libros y apuntes.</li>
      </ul>

      <h2>Qué modelo elegir según el nivel de estudio</h2>
      <p>
        Para un escolar, el
        <strong> <Link href="/camarote-con-escritorio-economico">modelo económico</Link></strong> cumple
        de sobra. Para un universitario que pasa muchas horas frente al computador, el
        <strong> <Link href="/camarote-con-escritorio-full">modelo full</Link></strong> ofrece un
        escritorio más profundo y estantes integrados para ordenar libros y monitor. El
        <strong> <Link href="/camarote-con-escritorio">modelo estándar</Link></strong> es una excelente
        opción intermedia.
      </p>

      <h2>Seguridad y comodidad</h2>
      <p>
        La cama superior incluye baranda de seguridad. Para escolares menores es importante verificar
        que la baranda esté bien instalada. La escalera lateral facilita el acceso, y la estructura de
        acero soporta el uso diario intensivo típico de una etapa de estudios.
      </p>

      <h2>Ideal también para piezas compartidas</h2>
      <p>
        Si dos hermanos comparten dormitorio, una cama alta con escritorio para cada uno crea dos
        zonas de estudio independientes en el mismo cuarto. Revisa también nuestra guía sobre
        {" "}<Link href="/blog/camarote-universitario">camarotes para universitarios</Link> y
        {" "}<Link href="/blog/como-crear-zona-de-estudio-dormitorio">cómo crear una zona de estudio</Link>.
      </p>

      <CTAWhatsApp mensaje="Hola, busco una cama alta con escritorio para un estudiante. Nivel: [ESCOLAR / UNIVERSITARIO]. ¿Qué modelo me recomiendan y cómo cotizo?" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Desde qué edad puede un estudiante usar una cama alta?", acceptedAnswer: { "@type": "Answer", text: "Se recomienda a partir de los 6 años para la cama superior, siempre con la baranda de seguridad correctamente instalada." } },
              { "@type": "Question", name: "¿Qué modelo conviene para un universitario?", acceptedAnswer: { "@type": "Answer", text: "El modelo full, por su escritorio más profundo y sus estantes integrados, es el más cómodo para largas horas de estudio." } },
            ],
          }),
        }}
      />
    </>
  ),

  "cerco-para-parcela-de-agrado": () => (
    <>
      <p>
        Una parcela de agrado tiene dos necesidades distintas de cerco: el <strong>frontis</strong>
        (la cara que da a la calle o al camino) y el <strong>perímetro</strong> (los tres lados
        restantes que delimitan el terreno). No es lo mismo — y confundirlos es el error más
        frecuente al cotizar.
      </p>

      <h2>Frontis vs perímetro — distintos objetivos, distinto material</h2>
      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {[
          {
            t: "Frontis (cara a la calle)",
            items: [
              "Reja tubular de tubo cuadrado 1\" – 1,5\"",
              "Altura: 1,20 m a 1,80 m",
              "Con portón vehicular (batiente o corredizo)",
              "Con puerta peatonal",
              "Pintura electrostática o galvanizado",
              "El más caro por metro — pero hay pocos metros",
            ],
          },
          {
            t: "Perímetro (3 lados restantes)",
            items: [
              "Malla de alambre galvanizada o malla ovejera",
              "Postes de madera o tubo redondo",
              "Altura: 1,00 m a 1,20 m",
              "Sin puerta en general",
              "Mucho más económico por metro",
              "Hay muchos metros — el costo viene del volumen",
            ],
          },
        ].map((col) => (
          <div key={col.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 text-sm mb-2">{col.t}</h3>
            <ul className="space-y-1">
              {col.items.map((i) => (
                <li key={i} className="text-gray-600 text-xs">• {i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>Qué tipo de portón elegir para una parcela</h2>
      <p>
        Para parcelas de agrado el portón <strong>batiente doble</strong> (dos hojas, abre hacia
        adentro) es la opción más común — es económico y funciona bien en caminos de tierra donde
        no hay pavimento exacto para instalar el riel de un corredizo.
      </p>
      <p>
        Si el acceso tiene pavimento parejo, el <strong>corredizo automático</strong> es más cómodo
        y más seguro. También se puede instalar en caminos con pasto si se usa un riel enterrado
        o un sistema de guía superior.
      </p>

      <h2>¿Galvanizado o pintado en una parcela?</h2>
      <p>
        En parcelas de agrado hay más exposición a la humedad del suelo, el riego, el ambiente
        rural y las variaciones de temperatura que en un frontis urbano. La recomendación:
      </p>
      <ul>
        <li><strong>Frontis:</strong> pintado electrostático es suficiente si la parcela no está en zona húmeda.</li>
        <li><strong>Postes del perímetro:</strong> galvanizado o tratados con anticorrosivo — van en contacto con el suelo.</li>
        <li><strong>Malla perimetral:</strong> siempre galvanizada — es lo que está disponible en el mercado.</li>
        <li><strong>Zona sur húmeda (sur de Concepción):</strong> todo galvanizado, sin excepción.</li>
      </ul>

      <h2>Los tres errores más comunes al cercar una parcela</h2>
      <ol>
        <li><strong>Cotizar solo la reja de frontis y olvidar el perímetro.</strong> El perímetro tiene muchos más metros lineales que el frontis — es la parte cara del proyecto.</li>
        <li><strong>No considerar el portón desde el primer día.</strong> Si el portón queda "para después", la instalación es más cara y puede requerir cambios en lo ya instalado.</li>
        <li><strong>Poner pintura normal en los postes.</strong> Los postes van en el suelo. La pintura convencional en el suelo se deteriora rápido. Tubo galvanizado o con tratamiento anticorrosión.</li>
      </ol>

      <CTAWhatsApp mensaje="Hola, tengo una parcela de agrado y quiero cotizar el cerco. Frente de calle: [METROS] m. Perímetro total aproximado: [METROS] m. Quiero portón: [SÍ / NO]. Dónde está la parcela: [SECTOR / REGIÓN]." />
    </>
  ),

  "cuanto-cuesta-porton-automatico-chile": () => (
    <>
      <p>
        El portón automático es una de las mejoras más valoradas por los propietarios en Santiago —
        y una de las que más dudas genera sobre precio. Esta guía responde con transparencia qué
        determina el costo y qué debes exigir en cualquier cotización.
      </p>

      <h2>Los tres factores que determinan el precio</h2>
      <ul>
        <li><strong>Tipo de portón:</strong> corredizo o batiente. El corredizo es más caro porque necesita riel en el suelo además del motor. El batiente es más simple mecánicamente.</li>
        <li><strong>Ancho del vano:</strong> a mayor ancho, más peso de la hoja y mayor exigencia al motor. Un portón de 4 m pesa más que uno de 2,5 m — y el motor debe manejar esa diferencia.</li>
        <li><strong>Sistema de control:</strong> el mínimo es control remoto (incluido en toda cotización). Los extras — tarjeta de proximidad, teclado, intercomunicador, integración con app — suman al precio.</li>
      </ul>

      <h2>Rangos de precio orientativos en Santiago (2026)</h2>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 pr-4 text-gray-600 font-medium text-xs">Tipo</th>
              <th className="text-left py-3 px-3 text-gray-600 font-medium text-xs">Ancho</th>
              <th className="text-left py-3 px-3 text-gray-600 font-medium text-xs">Rango de precio</th>
              <th className="text-left py-3 px-3 text-gray-600 font-medium text-xs">Incluye</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ["Batiente", "2,5–3,5 m", "Consultar", "Portón + motor + 2 controles + inst."],
              ["Corredizo residencial", "3–4 m", "Consultar", "Portón + motor + riel + 2 controles + inst."],
              ["Corredizo mediano", "4–5 m", "Consultar", "Portón reforzado + motor industrial + riel + inst."],
              ["Corredizo industrial", "5–8 m", "Consultar", "Estructura reforzada + motor trifásico + inst."],
            ].map(([tipo, ancho, rango, inc]) => (
              <tr key={tipo + ancho}>
                <td className="py-3 pr-4 text-gray-900 text-xs font-medium">{tipo}</td>
                <td className="py-3 px-3 text-gray-600 text-xs">{ancho}</td>
                <td className="py-3 px-3 text-gray-800 text-xs font-medium">{rango}</td>
                <td className="py-3 px-3 text-gray-500 text-xs">{inc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400">Los precios varían según materiales, diseño y distancia de instalación. Solicita cotización exacta.</p>

      <h2>¿Qué debe incluir cualquier presupuesto de portón automático?</h2>
      <ul>
        <li>Fabricación del portón metálico (no solo el motor)</li>
        <li>Motor de marca reconocida (CAME, FAAC, BFT, BENINCA, Nice)</li>
        <li>Riel en el suelo y rieles de guía superior (si es corredizo)</li>
        <li>Cuadro eléctrico de mando</li>
        <li>Mínimo 2 controles remotos</li>
        <li>Instalación completa con prueba de funcionamiento</li>
        <li>Garantía del motor (mínimo 1 año)</li>
      </ul>
      <p>
        Si alguno de estos ítems no está incluido en la cotización, pídelo explícitamente — o
        estás comparando precios incompletos con precios completos.
      </p>

      <h2>¿Corredizo o batiente?</h2>
      <p>
        Para la mayoría de las casas en Santiago, el <strong>corredizo</strong> es la mejor opción
        porque no necesita espacio de barrido frente al portón. Solo necesita espacio lateral
        (igual al ancho del portón) para que la hoja pueda desplazarse. El batiente puede ser
        más económico si tienes patio amplio, pero en la mayoría de los frontis estándar de Santiago
        no hay espacio para el arco de apertura.
      </p>

      <CTAWhatsApp mensaje="Hola, quiero cotizar un portón automático. Tipo: [CORREDIZO / BATIENTE]. Ancho del vano: [METROS] m. Estoy en [COMUNA]." />
    </>
  ),

  "galvanizado-vs-pintado-cuando-elegir": () => (
    <>
      <p>
        Cuando cotizas un cerco o reja metálica en Chile, una de las primeras preguntas es si conviene <strong>galvanizado</strong> o <strong>pintado</strong>.
        La respuesta depende de dónde estás ubicado y cuánto mantenimiento estás dispuesto a hacer.
        Esta guía te ayuda a decidir.
      </p>

      <h2>¿Qué es el galvanizado?</h2>
      <p>
        El galvanizado es un proceso de recubrimiento del acero con una capa de zinc.
        Hay dos métodos principales: <strong>galvanizado en caliente</strong> (el más resistente — se sumerge el acero en zinc fundido a 450°C)
        y <strong>galvanizado electrolítico</strong> (capa más delgada, más económico pero menos durable).
        Para cercos perimetrales exteriores siempre se recomienda galvanizado en caliente.
      </p>

      <h2>¿Qué es la pintura electrostática?</h2>
      <p>
        La pintura electrostática al horno (también llamada pintura en polvo o powder coating) es el acabado estándar
        de la mayoría de rejas metálicas en Santiago.
        Se aplica como polvo y se cura al horno a ~200°C — el resultado es una capa dura, uniforme y resistente al impacto.
        Es más económica que el galvanizado y permite elegir color.
      </p>

      <h2>Tabla comparativa</h2>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 pr-4 text-gray-600 font-medium text-xs">Factor</th>
              <th className="text-center py-3 px-4 text-gray-900 font-semibold text-xs">Galvanizado</th>
              <th className="text-center py-3 px-4 text-gray-700 font-semibold text-xs">Pintado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ["Duración sin mantenimiento", "15–25 años", "5–10 años"],
              ["Zona costera o húmeda", "Recomendado", "No recomendado"],
              ["Zona interior seca", "Muy bien", "Bien (con repintado eventual)"],
              ["Costo inicial", "Mayor", "Menor"],
              ["Mantenimiento", "Mínimo", "Repintado cada 5–8 años"],
              ["Colores disponibles", "Solo gris zinc", "Cualquier color"],
              ["Peso", "Igual al pintado", "Igual al galvanizado"],
            ].map(([f, g, p]) => (
              <tr key={f}>
                <td className="py-3 pr-4 text-gray-600 text-xs font-medium">{f}</td>
                <td className="py-3 px-4 text-center text-gray-800 text-xs">{g}</td>
                <td className="py-3 px-4 text-center text-gray-600 text-xs">{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>¿Cuándo elegir galvanizado?</h2>
      <ul>
        <li><strong>Zona costera:</strong> Valparaíso, Viña del Mar, el litoral del Maule o el sur — el ambiente marino destruye la pintura en pocos años.</li>
        <li><strong>Zona sur húmeda:</strong> Temuco, Valdivia, Puerto Montt, Osorno — la humedad constante acelera la oxidación del acero con solo pintura.</li>
        <li><strong>Zona industrial con químicos:</strong> Cercos de empresas que trabajan con solventes, ácidos o ambientes corrosivos.</li>
        <li><strong>Cercos de difícil acceso para mantenimiento:</strong> Si no podrás repintar fácilmente, invierte en galvanizado desde el inicio.</li>
      </ul>

      <h2>¿Cuándo es suficiente la pintura electrostática?</h2>
      <ul>
        <li><strong>Zona interior seca de la RM:</strong> Santiago (cordillera + cuyo), la mayor parte de la Región Metropolitana. Con la aridez de Santiago, la pintura dura bien.</li>
        <li><strong>Rejas interiores:</strong> Separaciones dentro de galpones, mallas de oficinas o divisiones que no están expuestas al clima.</li>
        <li><strong>Cuando el diseño importa:</strong> Si quieres negro mate, negro brillante, gris antracita o cualquier color, la opción es pintado.</li>
        <li><strong>Proyectos con presupuesto ajustado:</strong> El pintado es más económico en el corto plazo. Con mantenimiento básico dura perfectamente.</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, quiero cotizar un cerco metálico. ¿Me pueden orientar si conviene galvanizado o pintado para mi zona?" />
    </>
  ),

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

  "cuanto-cuesta-cierre-perimetral-chile": () => (
    <>
      <p>
        Es la primera pregunta que hace quien necesita un cierre perimetral. Y la respuesta honesta
        es: depende de cuatro factores. Si alguien te da un precio sin preguntar nada, no te está
        cotizando — te está diciendo un número para que no te vayas.
      </p>

      <h2>Los 4 factores que determinan el precio</h2>

      <h3>1. El tipo de cierre</h3>
      <p>
        No todos los cierres perimetrales cuestan lo mismo por metro lineal. En orden de menor a
        mayor costo aproximado:
      </p>
      <ul>
        <li><strong>Cerco de alambre galvanizado</strong> — el más económico. Postes cada 2-3 metros, alambre tensado entre ellos. Sin rigidez estructural pero cumple la función de delimitar.</li>
        <li><strong>Malla electrosoldada</strong> — costo intermedio. Panel rígido de acero soldado. El equilibrio entre precio y resistencia que más se usa en obras, bodegas y usos comerciales.</li>
        <li><strong>Plancha metálica ondulada</strong> — precio similar a la malla. Opaca, resiste el viento. Para quienes necesitan privacidad total.</li>
        <li><strong>Reja tubular</strong> — la más cara. La más durable. La estándar en condominios, empresas y proyectos definitivos donde el cierre forma parte de la imagen del proyecto.</li>
        <li><strong>Panel modular removible</strong> — precio variable según el uso temporal o permanente.</li>
      </ul>

      <h3>2. Los metros lineales</h3>
      <p>
        El costo de un cierre perimetral se calcula por metro lineal. Un terreno de 20x30 metros
        tiene un perímetro de 100 metros. Uno de 50x80 tiene 260 metros. La diferencia en costo
        puede ser enorme aunque ambos sean el mismo tipo de cierre.
      </p>
      <p>
        Antes de cotizar, mide el perímetro real o usa Google Maps para estimarlo. No es necesario
        que sea exacto — una aproximación con ±10% es suficiente para una cotización inicial.
      </p>

      <h3>3. Si incluye instalación</h3>
      <p>
        La instalación puede representar entre un 20% y un 40% del costo total según el tipo de
        cierre y el terreno. Un cierre en un terreno plano con acceso fácil es más económico de
        instalar que uno en un terreno irregular, con pendiente o sin acceso vehicular para el
        camión de materiales.
      </p>
      <p>
        Si cuentas con personal propio en terreno, puedes reducir costos pidiendo solo la fabricación
        y el despacho.
      </p>

      <h3>4. La región y el flete</h3>
      <p>
        En Santiago RM el costo de instalación es el más bajo porque no hay flete de materiales.
        Para regiones, el flete se suma al costo final y puede ser significativo en proyectos donde
        los metros lineales son muchos y el peso del material es alto.
      </p>

      <h2>Por qué no publicamos precios en la web</h2>
      <p>
        Porque sería irresponsable. Un cierre perimetral para 100 metros de malla electrosoldada
        en Santiago puede costar muy distinto a uno de reja tubular para el mismo perímetro en
        una zona con acceso difícil. El precio que publicaría cualquier fabricante sería tan
        general que no te serviría de referencia.
      </p>
      <p>
        Lo que hacemos en su lugar: cotizamos el mismo día que nos contactas si nos das los metros
        aproximados, el tipo de cierre que buscas y la ubicación.
      </p>

      <h2>Cómo cotizar bien desde el primer mensaje</h2>
      <p>
        Para darte un precio real necesitamos saber:
      </p>
      <ul>
        <li>El perímetro aproximado en metros lineales</li>
        <li>El uso (obra, bodega, industria, condominio, terreno)</li>
        <li>La ubicación (comuna o ciudad)</li>
        <li>Si necesitas instalación o solo fabricación y despacho</li>
        <li>Si necesitas portón de acceso peatonal o vehicular</li>
      </ul>
      <p>
        Con eso podemos darte un rango real de precio en el primer mensaje.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito cotizar un cierre perimetral. El perímetro es de [METROS] metros aproximadamente. Es para [USO]." />
    </>
  ),

  "tipos-de-cierres-perimetrales": () => (
    <>
      <p>
        Cuando alguien busca un cierre perimetral, la primera pregunta que debería hacerse no es
        "¿cuánto cuesta?" sino "¿qué tipo necesito?". La respuesta determina el costo, la duración
        y si el cierre va a aguantar el uso que le vas a dar.
      </p>
      <p>
        Acá te explicamos los tipos reales que existen — no los nombres de catálogo que confunden,
        sino lo que es cada uno, para qué sirve y cuándo NO usarlo.
      </p>

      <h2>Malla metálica electrosoldada</h2>
      <p>
        Panel rígido de acero formado por varillas horizontales y verticales soldadas en cada
        cruce. Se monta sobre postes de acero hincados en el suelo o sobre base de hormigón.
      </p>
      <p>
        <strong>Ventajas:</strong> Rígida, durable, no se dobla fácilmente, económica, rápida de
        instalar.<br />
        <strong>Desventajas:</strong> No es la más estética. No da privacidad (se ve a través).<br />
        <strong>Cuándo usarla:</strong> Obras en construcción, bodegas, galpones, faenas, cualquier
        proyecto donde el costo y la resistencia importan más que la estética.
      </p>

      <h2>Reja tubular</h2>
      <p>
        Estructura soldada de tubos de acero redondos o cuadrados. Más elaborada que la malla,
        con mayor variedad de diseños (con puntas, lisa, combinada). La más durable de todas.
      </p>
      <p>
        <strong>Ventajas:</strong> Alta durabilidad (30+ años con buena pintura), estética,
        resistente al impacto.<br />
        <strong>Desventajas:</strong> La más cara por metro lineal. Mayor tiempo de fabricación.<br />
        <strong>Cuándo usarla:</strong> Condominios, empresas, proyectos definitivos donde el
        cierre forma parte de la imagen del proyecto por décadas.
      </p>

      <h2>Cerco de alambre galvanizado</h2>
      <p>
        Alambre de acero galvanizado tensado entre postes. La solución más antigua y más económica.
        No es rígida — cede bajo presión física — pero delimita el terreno y es la única opción
        razonable para cerrar superficies muy grandes con presupuesto acotado.
      </p>
      <p>
        <strong>Ventajas:</strong> El más económico. Rápido de instalar. Cubre grandes superficies.<br />
        <strong>Desventajas:</strong> No es rígida. No resiste impactos. Menor duración.<br />
        <strong>Cuándo usarla:</strong> Terrenos grandes en zonas rurales, parcelas, cierres
        temporales previos a construcción.
      </p>

      <h2>Plancha metálica ondulada</h2>
      <p>
        Cierre opaco construido con planchas de acero galvanizado onduladas, fijadas a una
        estructura de postes y perfiles. Bloquea la visión desde afuera completamente.
      </p>
      <p>
        <strong>Ventajas:</strong> Privacidad total. Resistente al viento. Sin mantenimiento frecuente.<br />
        <strong>Desventajas:</strong> Aspecto más industrial. Puede acumular calor en zonas expuestas al sol.<br />
        <strong>Cuándo usarla:</strong> Bodegas, talleres, industrias, patios de maquinaria donde
        se prefiere que el interior no sea visible.
      </p>

      <h2>Panel modular tipo claro (removible)</h2>
      <p>
        Paneles de acero con bases de peso propio que se instalan sin obra civil permanente.
        Se montan en horas y se retiran de la misma forma.
      </p>
      <p>
        <strong>Ventajas:</strong> Instalación rápida. Sin obra permanente. Reutilizable.<br />
        <strong>Desventajas:</strong> No es tan resistente como los cierres anclados. Puede
        ser movido por terceros si no se asegura correctamente.<br />
        <strong>Cuándo usarla:</strong> Faenas temporales, obras que necesitan cerrar hoy y
        retirar el cierre al terminar el proyecto.
      </p>

      <h2>¿Cómo elegir el correcto?</h2>
      <p>
        Tres preguntas resuelven el 90% de los casos:
      </p>
      <ol>
        <li>¿Es temporal o definitivo?</li>
        <li>¿La estética importa?</li>
        <li>¿Cuántos metros tiene el perímetro?</li>
      </ol>
      <p>
        Si es temporal → panel modular o malla. Si es definitivo y la estética importa → reja tubular.
        Si es definitivo y la estética no es prioridad → malla o plancha. Si el terreno es muy grande
        → cerco de alambre para el perímetro exterior.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito asesoría para elegir el tipo de cierre perimetral correcto para mi proyecto. ¿Pueden orientarme?" />
    </>
  ),

  "mallas-separadoras-para-bodegas": () => (
    <>
      <p>
        Una bodega desorganizada no es solo un problema estético — es un problema económico.
        Los errores de picking aumentan, el tiempo de despacho sube, los accidentes de montacargas
        son más frecuentes y es más difícil hacer inventario. Las mallas separadoras metálicas
        resuelven eso dividiendo el espacio en zonas claras sin levantar paredes permanentes.
      </p>

      <h2>¿Qué es una malla separadora para bodegas?</h2>
      <p>
        Es un panel metálico — generalmente malla electrosoldada montada sobre estructura de acero —
        que divide el espacio interior de una bodega en zonas diferenciadas. Puede anclarse al suelo,
        al techo o instalarse solo en el suelo dependiendo del tipo de carga y la dinámica de la bodega.
      </p>
      <p>
        La malla permite ver a través de ella (a diferencia de una pared), lo que mantiene la
        visibilidad y la luminosidad del espacio dividido. Esto es clave en bodegas donde el
        encargado necesita ver qué pasa en cada zona sin desplazarse.
      </p>

      <h2>Las 6 zonas más separadas en bodegas</h2>

      <h3>1. Zona de picking vs almacenamiento masivo</h3>
      <p>
        El picking es el proceso de retirar unidades individuales del stock. Si el área de picking
        no está separada del almacenamiento masivo, los operarios de montacargas y el personal
        de picking interfieren constantemente. La malla los divide sin impedir la comunicación visual.
      </p>

      <h3>2. Andén de carga y descarga vs área de stock</h3>
      <p>
        El andén es una zona de alta actividad — camiones entrando, mercadería siendo revisada,
        transpaletas moviéndose. Separarlo del área de stock protege el inventario y reduce el
        riesgo de daño a la mercadería.
      </p>

      <h3>3. Pasillo de montacargas vs pasillo de personal</h3>
      <p>
        El más crítico desde el punto de vista de seguridad. El cruce de personas con montacargas
        es la causa más común de accidentes graves en bodegas. Una malla que separa ambos flujos
        elimina ese riesgo estructuralmente.
      </p>

      <h3>4. Bodega de alto valor o productos restringidos</h3>
      <p>
        Productos de alto valor, medicamentos, electrónica o cualquier artículo que requiera
        acceso restringido. La malla con puerta y cerradura es la solución más común y más
        económica para crear un espacio de acceso controlado dentro de una bodega mayor.
      </p>

      <h3>5. Zona de devoluciones</h3>
      <p>
        Las devoluciones necesitan un espacio propio para revisión, re-etiquetado y decisión
        de destino. Sin zona separada, se mezclan con el stock bueno y generan errores costosos.
      </p>

      <h3>6. Área de residuos y embalaje</h3>
      <p>
        Palets rotos, cartón, plástico de embalaje. Separar esta zona evita que el residuo
        se acumule en el pasillo de tránsito y facilita la gestión de reciclaje.
      </p>

      <h2>Qué especificar al cotizar</h2>
      <ul>
        <li><strong>Metros lineales</strong> — el largo total de malla que necesitas</li>
        <li><strong>Altura</strong> — 2,00 m es el estándar para bodegas; 1,00 m para separaciones peatonales</li>
        <li><strong>Puertas integradas</strong> — cuántas y de qué tipo (batiente o corrediza)</li>
        <li><strong>Si se ancla al suelo o es modulable</strong> — para divisiones que podrías reubicar</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, necesito cotizar mallas separadoras para organizar mi bodega. Quiero separar [ZONAS]. ¿Pueden ayudarme?" />
    </>
  ),

  "cierre-perimetral-obra-chile": () => (
    <>
      <p>
        El cierre perimetral de obra es uno de los primeros elementos que se instala cuando
        empieza una construcción — y uno de los últimos en retirarse. Tiene una función legal,
        una función de seguridad y una función de imagen. Las tres importan.
      </p>

      <h2>¿Es obligatorio el cierre perimetral de obra en Chile?</h2>
      <p>
        En la mayoría de los casos, sí. La Ordenanza General de Urbanismo y Construcción (OGUC)
        establece que las obras en construcción deben estar delimitadas para proteger al público
        y a los trabajadores. La exigencia específica depende de cada municipio y del tipo de
        obra — pero la regla general es que si hay permiso de edificación, hay cierre obligatorio.
      </p>
      <p>
        Las obras en vía pública o que afectan la vereda tienen reglamentación adicional de
        vialidad. En esos casos, las vallas deben tener señalética específica y dejar paso
        peatonal habilitado.
      </p>

      <h2>Tipos de cierre para obras</h2>

      <h3>Cierre de malla electrosoldada sobre postes</h3>
      <p>
        El más usado en obras de construcción de casas y edificios. Paneles de malla sobre postes
        de acero hincados o con base de hormigón. Se instala en días, es estable, resiste el viento
        y tiene un costo razonable para el período que dura una obra.
      </p>
      <p>
        Al terminar la obra se retiran los postes y la malla sin dejar obra civil permanente.
      </p>

      <h3>Valla modular en vía pública</h3>
      <p>
        Para obras que ocupan parte de la vereda o calzada. Módulos de acero con bases que se
        encadenan entre sí. Son los cierres naranjas o plateados que ves en cualquier obra urbana.
        Cumplen las normativas de vialidad de los municipios y protegen al peatón de la zona de trabajo.
      </p>

      <h3>Panel modular tipo claro</h3>
      <p>
        Paneles de mayor tamaño, más robustos que las vallas, que se instalan sin obra civil
        permanente. Para obras grandes que necesitan cerrar el perímetro completo del terreno
        antes de comenzar los trabajos de fundación.
      </p>

      <h2>¿Cuándo contratar el cierre de obra?</h2>
      <p>
        Antes de que llegue el camión con los primeros materiales. El cierre de obra protege
        los materiales desde el primer día y define visualmente que el terreno tiene dueño y
        que ahí hay un proyecto en curso.
      </p>
      <p>
        Para una obra que empieza el lunes, el cierre debería estar instalado el viernes anterior.
        La mayoría de los fabricantes puede tener un cierre estándar listo e instalado en 5-7 días
        hábiles desde la cotización aprobada.
      </p>

      <h2>Cómo contratar el cierre correcto</h2>
      <p>
        Para cotizar necesitas:
      </p>
      <ul>
        <li>El perímetro del terreno en metros lineales</li>
        <li>La fecha estimada de inicio de obra</li>
        <li>Si necesitas portón peatonal o vehicular integrado</li>
        <li>Si la obra está en vía pública (requiere valla específica)</li>
        <li>Si el cierre es temporal (lo retiran al terminar) o si quieres que quede definitivo</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, necesito un cierre perimetral para una obra de construcción. La fecha de inicio es [FECHA] y el perímetro es de [METROS] metros." />
    </>
  ),

  "como-separar-peatones-vehiculos-empresa": () => (
    <>
      <p>
        Cuando un montacargas y un operario se cruzan en el mismo pasillo sin separación física,
        no es mala suerte si ocurre un accidente — es una consecuencia predecible de un diseño
        deficiente. La señalética y las marcas en el piso no son suficientes. Las personas ignoran
        la señalética cuando están concentradas en su trabajo. Las estructuras físicas no se ignoran.
      </p>

      <h2>Por qué la señalética sola no funciona</h2>
      <p>
        Los estudios de seguridad industrial son consistentes en un punto: las barreras físicas
        reducen los accidentes de forma mucho más efectiva que la señalética. Una línea amarilla
        en el suelo es fácil de cruzar sin darse cuenta. Una malla metálica no.
      </p>
      <p>
        Esto no significa que la señalética sea inútil — complementa las barreras físicas y
        comunica el comportamiento esperado. Pero no puede ser la única medida.
      </p>

      <h2>Las 5 opciones para separar peatones de vehículos</h2>

      <h3>1. Malla separadora fija anclada al suelo</h3>
      <p>
        La solución más robusta y más permanente. La malla se ancla al piso con pernos y define
        físicamente el pasillo de montacargas y el pasillo de personal. Imposible de cruzar
        accidentalmente. La opción estándar para bodegas grandes y plantas de manufactura.
      </p>
      <p>
        Requiere decidir bien el layout antes de instalar, porque una vez anclada no se mueve
        fácilmente. Si el layout de la bodega cambia frecuentemente, considera la opción modular.
      </p>

      <h3>2. Barrera peatonal modular</h3>
      <p>
        Módulos de acero que se sostienen por peso propio o con bases desmontables. Se pueden
        reubicar sin herramienta. Ideales para bodegas donde el layout cambia según la temporada
        o el tipo de producto almacenado.
      </p>
      <p>
        Menos robustas que las mallas ancladas — un montacargas puede desplazarlas si las golpea —
        pero son suficientes para separar tránsito peatonal normal.
      </p>

      <h3>3. Pasillos con guías de acero en el suelo</h3>
      <p>
        Perfiles de acero soldados al piso que definen el pasillo sin levantar altura. Usados
        cuando la altura libre es un factor (estanterías muy altas, techos bajos) pero igual
        se necesita una barrera física.
      </p>

      <h3>4. Separación por zonas completas (layout)</h3>
      <p>
        La mejor solución es un layout que no mezcle los flujos desde el diseño. Zona de
        montacargas por un lado, zona de personal por otro, con puntos de cruce definidos y
        señalizados. Las mallas definen esas zonas de forma permanente.
      </p>

      <h3>5. Pasarela peatonal elevada</h3>
      <p>
        Para casos extremos donde el cruce es inevitable y el volumen de tránsito vehicular es
        muy alto. Una pasarela peatonal eleva el flujo de personas sobre el nivel de los vehículos
        eliminando el cruce completamente. Es la solución más costosa pero la más efectiva en
        industrias con alta intensidad de tránsito de montacargas.
      </p>

      <h2>Qué pedir al cotizar</h2>
      <p>
        Para recibir una cotización útil necesitas definir:
      </p>
      <ul>
        <li>El largo total del pasillo a separar (metros lineales)</li>
        <li>La altura necesaria (2,00 m para malla estándar; 1,00-1,20 m para barrera peatonal)</li>
        <li>Si la separación es fija o necesitas poder reubicarla</li>
        <li>Cuántas puertas de acceso necesitas en la separación</li>
        <li>Si el uso es para bodegas, planta de manufactura o estacionamiento</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, necesito separar peatones de vehículos en [DESCRIBIR ESPACIO]. ¿Pueden ayudarme con la solución correcta?" />
    </>
  ),

  "como-medir-metros-lineales-reja": () => (
    <>
      <p>
        Antes de llamar a cualquier fabricante o cotizar en línea, necesitas saber <strong>cuántos metros lineales de reja</strong> necesitas.
        Es más fácil de lo que parece — y hacerlo bien antes de cotizar evita errores costosos.
      </p>

      <h2>¿Qué es un metro lineal de reja?</h2>
      <p>
        Un metro lineal es simplemente la longitud de la reja medida en línea recta, sin importar su altura.
        Si tienes un frontis de 10 metros de largo, necesitas 10 metros lineales de reja para cubrirlo,
        independientemente de si la quieres de 1,20 m o de 1,80 m de alto.
        La altura afecta el precio, no el "largo" del cerco.
      </p>

      <h2>Cómo medir el frontis de tu casa</h2>
      <p>
        El frontis es la parte de la propiedad que da a la calle. Para medirlo:
      </p>
      <ul>
        <li>Usa una huincha de medir o un metro de cinta. Si no tienes, un paso largo adulto equivale aproximadamente a 80 cm — puedes contar pasos y multiplicar.</li>
        <li>Mide desde el límite de tu propiedad hasta el otro extremo, a lo largo de la línea de la calle.</li>
        <li>Si hay un vano vehicular (donde va el portón), mídelo por separado — ese es el ancho del portón, y va cotizado aparte de la reja lineal.</li>
        <li>Si hay una puerta peatonal, también va aparte.</li>
      </ul>
      <p>
        Ejemplo: propiedad de 12 m de frente total. Portón vehicular de 3 m + puerta peatonal de 1 m = 4 m de accesos.
        Metros lineales de reja = 12 - 4 = <strong>8 metros lineales</strong>.
      </p>

      <h2>Cómo medir el perímetro completo de un terreno</h2>
      <p>
        Si quieres cercar todo el terreno, mide los 4 lados (o los que correspondan).
        Suma todas las medidas — ese es el perímetro total.
        Descuenta los accesos (portones) si los habrá.
      </p>
      <p>
        Ejemplo: terreno de 20 x 30 m. Perímetro = 20 + 30 + 20 + 30 = <strong>100 metros lineales</strong>.
        Si hay un portón de 4 m: metros de reja = 100 - 4 = 96 metros lineales.
      </p>

      <h2>Consejo: añade un 5% de margen</h2>
      <p>
        Si no tienes las medidas exactas, añade un 5% a tu estimado.
        Es mejor cotizar con un ligero exceso que quedarte corto — y el fabricante siempre puede ajustar al medirlo en terreno.
      </p>

      <CTAWhatsApp mensaje="Hola, medí mi propiedad y tengo [METROS] ml de reja más [ANCHO] m de portón. ¿Pueden cotizarme?" />
    </>
  ),

  "mezzanine-metalico-bodega-guia": () => (
    <>
      <p>
        Un <strong>mezzanine metálico</strong> es una plataforma intermedia elevada que se instala dentro de una bodega o galpón existente.
        En lugar de ampliar el edificio hacia afuera, se ocupa el volumen vertical disponible — el espacio que en la mayoría de las bodegas está vacío desde los 2,5 m hacia arriba.
      </p>

      <h2>¿Cuándo conviene un mezzanine?</h2>
      <p>
        La instalación de un mezzanine tiene sentido cuando:
      </p>
      <ul>
        <li>La bodega tiene altura libre mayor a 4,5 m — ideal a partir de 5 m</li>
        <li>El arriendo o la construcción de espacio nuevo es más caro que la estructura</li>
        <li>La operación puede separarse en dos niveles — almacenaje arriba, operación abajo, o viceversa</li>
        <li>El presupuesto no alcanza para ampliar el edificio pero necesitas el doble de superficie</li>
      </ul>

      <h2>Qué medidas necesitas antes de cotizar</h2>
      <p>
        Para recibir una cotización útil de un mezzanine, ten listas estas medidas:
      </p>
      <ul>
        <li><strong>Altura libre interior</strong> del galpón desde el suelo hasta la viga o cubierta</li>
        <li><strong>Superficie deseada</strong> para la plataforma del mezzanine (largo x ancho)</li>
        <li><strong>Carga estimada</strong> — personas y materiales que estarán sobre la plataforma (en kg/m²)</li>
        <li>Si necesitas <strong>escalera de acceso</strong> y de cuántos peldaños</li>
        <li>Si necesitas <strong>barandas</strong> en el perímetro de la plataforma</li>
      </ul>

      <h2>Materiales de un mezzanine metálico</h2>
      <p>
        La estructura principal se hace con perfiles de acero laminado — vigas H o I para las vigas principales, tubo cuadrado o perfiles C para la estructura secundaria.
        La plataforma (el piso del mezzanine) puede ser de <strong>plancha de acero estriada</strong> (la más común en industrial), <strong>tablero de madera sobre estructura metálica</strong> (más económico, adecuado para cargas medias) o <strong>rejilla metálica</strong> (permite ventilación y visión entre niveles).
      </p>

      <h2>¿Necesita permiso de construcción?</h2>
      <p>
        Depende de la superficie y la estructura existente. Un mezzanine autoportante dentro de un galpón existente generalmente no requiere permiso municipal si no toca la estructura del edificio.
        Para proyectos de mayor envergadura o cuando el mezzanine soporta cargas muy altas, es recomendable que un calculista estructural revise el diseño.
        Consultamos esto contigo al cotizar.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito cotizar un mezzanine metálico. El galpón tiene [ALTURA] m de alto y quiero una plataforma de [LARGO x ANCHO] m. La carga estimada es [KG/M²]." />
    </>
  ),

  "como-elegir-reja-metalica-frontis": () => (
    <>
      <p>
        Antes de cotizar una <strong>reja metálica para el frontis</strong> de tu casa, hay cuatro decisiones que tomar:
        el tipo de perfil, la altura, la separación entre barrotes y el acabado.
        Si las defines bien antes de contactar al fabricante, la cotización es más rápida y el resultado final es exactamente lo que necesitabas.
      </p>

      <h2>1. Tipo de perfil: tubular o barra sólida</h2>
      <p>
        La reja tubular usa tubo de acero cuadrado o redondo. Es más liviana, se oxida menos y es la opción más común en casas residenciales de Santiago.
        La reja de barra sólida es más pesada, más robusta y visualmente más clásica — se ve más "maciza".
        Para un frontis residencial, la tubular es la recomendada en el 80% de los casos.
      </p>

      <h2>2. Altura recomendada para frontis</h2>
      <p>
        La altura mínima para seguridad efectiva en un frontis es de <strong>1,50 m</strong>.
        En comunas con mayor densidad o donde la percepción de seguridad importa más, la mayoría opta por <strong>1,80 m a 2,00 m</strong>.
        Más de 2,00 m empieza a requerir permiso municipal en algunas comunas — consulta antes si es tu caso.
      </p>

      <h2>3. Separación entre barrotes</h2>
      <p>
        La separación estándar en frontis residenciales es de <strong>8 a 12 cm</strong>.
        Si hay niños en la casa, se recomienda no superar los 8 cm para que no puedan meter la cabeza.
        Separaciones más cerradas (5–6 cm) dan más sensación de privacidad pero son más costosas porque usan más material.
      </p>

      <h2>4. Pintura electrostática o galvanizado</h2>
      <p>
        La <strong>pintura electrostática al horno</strong> es el acabado estándar — dura años con mantención básica y viene en varios colores.
        El <strong>galvanizado en caliente</strong> es la opción premium: el zinc se funde al acero y la protección dura décadas sin pintar.
        Para frontis en zonas con mucha lluvia (sur de Santiago, comunas como Lo Barnechea con neblina frecuente) el galvanizado es la mejor inversión a largo plazo.
      </p>

      <h2>5. ¿Con o sin portón?</h2>
      <p>
        Si el frontis incluye un acceso peatonal, se agrega una puerta integrada a la reja.
        El portón se cotiza aparte del cerco lineal y depende del ancho del vano y el tipo de cierre (con llave, cerrojo con llave o solo pasador interior).
      </p>

      <h2>Cómo cotizar correctamente</h2>
      <p>
        Para recibir una cotización precisa necesitas tener listo:
      </p>
      <ul>
        <li>El largo total del frontis en metros lineales (mide la calle)</li>
        <li>La altura que quieres (en cm o m)</li>
        <li>Si hay portón peatonal y cuánto mide el vano</li>
        <li>La comuna — hay comunas que requieren colores neutros o restricciones de altura</li>
        <li>El acabado: pintura color [especificar] o galvanizado</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, quiero cotizar una reja de frontis para mi casa. Las medidas son: [METROS] ml x [ALTURA] m de alto. Estoy en [COMUNA]. ¿Cuánto sale?" />
    </>
  ),

  "porton-corredizo-vs-batiente": () => (
    <>
      <p>
        La duda más frecuente al cotizar un <strong>portón metálico</strong> es esta: ¿corredizo o batiente?
        No hay una respuesta universal — la decisión correcta depende del ancho del acceso, el espacio disponible y la frecuencia de uso.
        Esta comparativa te ayuda a decidir antes de cotizar.
      </p>

      <h2>Portón corredizo — para qué sirve</h2>
      <p>
        El portón corredizo se abre deslizándose lateralmente sobre una guía en el suelo.
        No necesita espacio de barrido frontal — la hoja va al costado, no hacia adentro ni afuera.
        Es la opción más usada en galpones, bodegas industriales y accesos vehiculares de empresas
        porque permite el paso de camiones sin restricciones de espacio.
      </p>
      <p>
        <strong>Requiere</strong> espacio lateral equivalente al ancho del portón más 30–40 cm extra.
        Un portón de 4 m de ancho necesita 4,5 m de muro o cerco al costado para desplazarse.
      </p>

      <h2>Portón batiente — para qué sirve</h2>
      <p>
        El portón batiente abre girando sobre bisagras — como una puerta, pero más grande.
        Puede ser de una hoja (batiente simple) o dos hojas (batiente doble).
        Es más simple mecánicamente, tiene menos piezas que puedan fallar y es generalmente más económico que un corredizo del mismo ancho.
      </p>
      <p>
        <strong>Requiere</strong> espacio de barrido: si el portón abre hacia adentro, ese espacio queda inutilizado.
        Para accesos de 2 m de ancho o menos, es la opción más práctica y económica.
      </p>

      <h2>Comparativa directa</h2>
      <p>
        <strong>Corredizo:</strong> mejor para anchos mayores a 3 m, alta frecuencia de uso, accesos vehiculares industriales, cuando no puedes tener barrido.
      </p>
      <p>
        <strong>Batiente:</strong> mejor para anchos de hasta 2–3 m, uso residencial o comercial con menor frecuencia, cuando hay muro disponible para los goznes y el espacio interior o exterior lo permite.
      </p>

      <h2>¿Cuál es más barato?</h2>
      <p>
        En general el batiente es más económico que el corredizo del mismo ancho,
        porque el corredizo lleva guía inferior, rodillos y una estructura más robusta para soportar el peso sin bisagras.
        Dicho esto, la diferencia depende del diseño y el tamaño — cotiza ambas opciones si el presupuesto es la variable clave.
      </p>

      <h2>¿Y la automatización?</h2>
      <p>
        Se puede automatizar cualquier tipo de portón corredizo — hay motores específicos para este tipo.
        Los portones batientes también se pueden motorizar, aunque los sistemas son algo distintos.
        Si piensas automatizar a futuro, dilo al fabricante al cotizar para que la estructura quede preparada.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito cotizar un portón metálico. El acceso mide [ANCHO] m de ancho. ¿Me recomiendan corredizo o batiente?" />
    </>
  ),

  "altura-reja-casa-seguridad": () => (
    <>
      <p>
        La pregunta más frecuente antes de cotizar una reja es: <strong>"¿cuánto la hago de alta?"</strong>
        La respuesta depende de tres factores: el nivel de seguridad que necesitas, el aspecto
        que quieres para el frontis y el presupuesto disponible.
      </p>

      <h2>Las 3 alturas estándar y para qué sirve cada una</h2>

      <div className="not-prose grid grid-cols-1 gap-4 my-6">
        {[
          {
            altura: "1,00 – 1,20 m",
            uso: "Delimitación sin seguridad real",
            desc: "Sirve para delimitar el terreno o dar una referencia visual del límite de propiedad. No detiene a nadie que quiera entrar — se puede pasar por arriba sin esfuerzo. Ideal para jardines o propiedades de bajo riesgo donde el objetivo es la estética, no la seguridad.",
            color: "bg-gray-50",
          },
          {
            altura: "1,50 – 1,60 m",
            uso: "Disuasión moderada",
            desc: "La reja más común en zonas residenciales tranquilas. Dificulta el acceso pero no lo impide para alguien determinado. Da privacidad visual parcial. Buen equilibrio entre costo y protección para la mayoría de las casas.",
            color: "bg-blue-50",
          },
          {
            altura: "1,80 – 2,00 m",
            uso: "Seguridad real",
            desc: "A esta altura, saltar la reja requiere un esfuerzo considerable y visible. Es la altura recomendada para zonas con mayor riesgo o donde la seguridad es prioridad. También da privacidad visual completa desde la calle.",
            color: "bg-green-50",
          },
        ].map((item) => (
          <div key={item.altura} className={`${item.color} border border-gray-100 rounded-xl p-4`}>
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-gray-900 w-24 flex-shrink-0">{item.altura}</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">{item.uso}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>¿Cuánta altura disuade realmente a un ladrón?</h2>
      <p>
        Estudios de seguridad residencial y la experiencia de instaladores coinciden en que
        <strong> 1,80 m es el punto de inflexión</strong>. Por debajo de esa altura, alguien
        determinado puede saltar sin herramientas. Por encima de 1,80 m, el riesgo de ser
        visto y el esfuerzo físico disuaden a la mayoría de los oportunistas.
      </p>
      <p>
        La seguridad real no viene solo de la altura — también del diseño. Una reja con barrotes
        verticales delgados y sin travesaños horizontales intermedios es más difícil de escalar
        que una reja baja con mucho punto de apoyo.
      </p>

      <h2>¿Qué dice la normativa chilena?</h2>
      <p>
        La Ordenanza General de Urbanismo y Construcción (OGUC) no fija una altura mínima
        obligatoria para rejas de frontis residencial en la mayoría de los municipios.
        Sin embargo, algunos municipios tienen normas propias en sus planes reguladores.
        Antes de construir, consulta con la Dirección de Obras de tu municipio — especialmente
        si tu casa está en un conjunto habitacional con normas específicas.
      </p>

      <h2>El error más común: hacer la reja muy baja por ahorrar</h2>
      <p>
        Una reja de 1,20 m cuesta menos que una de 1,80 m — pero la diferencia en precio
        es relativamente pequeña comparada con el costo de fabricación, transporte e
        instalación que se comparte. Si vas a instalar una reja, vale la pena llegar a
        1,50 m mínimo. Subir de 1,20 m a 1,80 m generalmente agrega menos del 30% al
        precio total del proyecto.
      </p>

      <h2>¿Y los barrotes? ¿Qué separación conviene?</h2>
      <p>
        La separación entre barrotes también importa para la seguridad. La OGUC recomienda
        no superar <strong>12 cm de separación libre</strong> para evitar que un niño pueda
        pasar la cabeza entre los barrotes. Para rejas de seguridad, la separación ideal
        es de 8–10 cm — suficientemente estrecha para que no quepa una persona adulta.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito cotizar una reja para casa. Metros del frontis: [METROS] ml. Altura que me interesa: [1.20 / 1.50 / 1.80] m. Estoy en [COMUNA]." />
    </>
  ),

  "como-cotizar-rejas-metalicas": () => (
    <>
      <p>
        La mayoría de las personas que llaman a pedir precio de una reja no saben qué información
        dar — y el fabricante tampoco puede cotizar sin ella. El resultado: visitas técnicas
        innecesarias, esperas de varios días y presupuestos que no se pueden comparar entre sí.
      </p>
      <p>
        Esta guía te muestra <strong>exactamente qué medir y qué decir</strong> para obtener
        un presupuesto exacto el mismo día, por WhatsApp o teléfono, sin visita técnica.
      </p>

      <h2>Lo que necesitas medir antes de cotizar</h2>

      <h3>1. Metros lineales totales</h3>
      <p>
        Es la longitud total de reja que vas a instalar. Para un frontis de casa, mide
        el largo de la parte delantera del terreno que da a la calle. Si hay un portón vehicular,
        ese espacio <strong>no cuenta</strong> como reja — el portón se cotiza aparte.
      </p>
      <p>
        Para un perímetro completo, mide los cuatro lados y suma. Si los lados son irregulares,
        suma todos los segmentos. Una cinta métrica basta — no necesitas precisión de topógrafo.
      </p>

      <h3>2. Altura de la reja</h3>
      <p>
        La altura más común en casas residenciales es entre <strong>1,20 m y 1,80 m</strong>.
        Si necesitas privacidad, elige 1,80 m. Si el objetivo es delimitar sin bloquear visibilidad,
        con 1,00 m–1,20 m es suficiente. Para uso industrial o de seguridad, 2,00 m–2,40 m.
      </p>

      <h3>3. Si lleva portón vehicular</h3>
      <p>
        Mide el <strong>ancho de la entrada</strong> exacta del vehículo — de muro a muro.
        El estándar para un auto es 3,00 m; para dos autos o camiones, 4,00 m–5,00 m.
        Indica si el portón es batiente (se abre como puerta) o corredizo (se corre hacia un lado).
      </p>

      <h3>4. Si lleva puerta peatonal</h3>
      <p>
        El ancho estándar es 0,90 m–1,00 m. Si va integrada en el frontis, el fabricante la
        calcula dentro del total de metros. Si es aparte (en otro sector del terreno), cotízala
        por separado.
      </p>

      <h2>Qué debes definir antes de cotizar</h2>

      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-3 font-semibold text-gray-700">Decisión</th>
              <th className="text-left p-3 font-semibold text-gray-700">Opciones</th>
              <th className="text-left p-3 font-semibold text-gray-700">Impacto en precio</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Tipo de tubo", "Cuadrado 3/4\", 1\" o 1,5\"", "Mayor tubo = mayor precio"],
              ["Acabado", "Pintura electrostática o galvanizado", "Galvanizado ~20-30% más"],
              ["Color", "Negro mate (estándar) u otro", "Colores custom pueden tener costo adicional"],
              ["Con o sin portón", "Batiente o corredizo", "Portón es el item más caro del presupuesto"],
              ["Instalación", "Con o sin instalación incluida", "La instalación agrega costo pero evita problemas"],
            ].map(([d, o, i]) => (
              <tr key={d} className="border-t border-gray-100">
                <td className="p-3 font-medium text-gray-700">{d}</td>
                <td className="p-3 text-gray-500">{o}</td>
                <td className="p-3 text-gray-500">{i}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>El mensaje ideal para cotizar por WhatsApp</h2>
      <p>
        Si mandas este mensaje, el fabricante puede enviarte el precio el mismo día sin necesidad
        de visita técnica:
      </p>
      <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-4 my-4 text-sm">
        <p className="font-mono text-xs text-gray-700 leading-relaxed">
          Hola, necesito cotizar una reja metálica para el frontis de mi casa.<br />
          Metros de reja: [X] ml<br />
          Altura: [X] m<br />
          Con portón vehicular de [X] m de ancho: [SÍ / NO]<br />
          Tipo de portón: [BATIENTE / CORREDIZO]<br />
          Con puerta peatonal: [SÍ / NO]<br />
          Comuna: [COMUNA]<br />
          Acabado: [PINTURA NEGRA / GALVANIZADO]<br />
          ¿Incluye instalación? [SÍ NECESITO / NO NECESITO]
        </p>
      </div>

      <h2>¿Y si no tengo los metros exactos?</h2>
      <p>
        Da una estimación — los fabricantes están acostumbrados a trabajar con números aproximados.
        Si dices "creo que son entre 8 y 10 metros de frontis con portón de 3 metros",
        te pueden dar un rango de precio perfectamente válido para presupuestar.
        El ajuste fino ocurre cuando confirmas el pedido.
      </p>

      <h2>Lo que no necesitas para cotizar</h2>
      <ul>
        <li>No necesitas planos ni diseños técnicos</li>
        <li>No necesitas que el fabricante vaya al terreno (para rejas simples)</li>
        <li>No necesitas saber el tipo de suelo ni el tipo de muro</li>
        <li>No necesitas definir el diseño exacto de los barrotes</li>
      </ul>
      <p>
        Esos detalles se afinan al confirmar el pedido. Para cotizar, solo necesitas metros,
        altura y si lleva portón.
      </p>

      <CTAWhatsApp mensaje="Hola, quiero cotizar una reja metálica. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón vehicular: [SÍ / NO]. Estoy en [COMUNA]." />
    </>
  ),
  "cuanto-dura-una-reja-metalica": () => (
    <>
      <p>
        La vida útil de una reja metálica en Chile no depende solo del acero —
        depende casi totalmente del acabado y del clima donde va instalada.
        La misma reja en Santiago y en Valparaíso puede durar el doble o la mitad.
      </p>

      <h2>Pintura electrostática: cuánto dura en exterior</h2>
      <p>
        La pintura electrostática al horno (polvo epoxi o poliéster curado a 180°C)
        es el acabado estándar para rejas en Santiago. En condiciones normales:
      </p>
      <ul>
        <li><strong>Santiago y zonas centrales secas:</strong> 10–15 años sin oxidarse si la instalación es correcta y no hay golpes que quiebren la capa.</li>
        <li><strong>Zonas con lluvia frecuente (Concepción, Temuco, Valdivia):</strong> 5–8 años antes de que aparezcan los primeros puntos de óxido en soldaduras y extremos.</li>
        <li><strong>Costa con salitre marino (Valparaíso, La Serena):</strong> 3–6 años. El salitre penetra la capa de pintura y ataca el acero por debajo.</li>
      </ul>

      <h2>Galvanizado en caliente: la opción de larga duración</h2>
      <p>
        El galvanizado en caliente baña el acero en zinc fundido, creando una capa
        que se funde con el metal base. No es una pintura — es una aleación superficial.
        Por eso dura mucho más:
      </p>
      <ul>
        <li><strong>Santiago y zonas secas:</strong> 25–40 años sin mantenimiento.</li>
        <li><strong>Sur lluvioso:</strong> 20–30 años.</li>
        <li><strong>Costa con salitre:</strong> 15–25 años — muy superior a la pintura.</li>
      </ul>
      <p>
        El galvanizado en caliente tiene un costo 20–35% mayor que la pintura electrostática,
        pero si tu reja va en un ambiente agresivo, se paga solo en los primeros 10 años.
      </p>

      <h2>¿Cada cuánto hay que repintar una reja?</h2>
      <p>
        Cuando aparecen los primeros puntos de óxido superficial, hay una ventana de
        oportunidad: lijar, convertir el óxido con fosfato y repintar. Si se deja avanzar,
        el óxido penetra el espesor del tubo y la reja se debilita estructuralmente.
      </p>
      <ul>
        <li>Rejas con pintura estándar (no electrostática): revisar a los 3–5 años.</li>
        <li>Rejas con pintura electrostática: revisar a los 8–10 años.</li>
        <li>Rejas galvanizadas: no necesitan repintado en los primeros 15–20 años.</li>
      </ul>

      <h2>Señales de que tu reja necesita mantenimiento ahora</h2>
      <ul>
        <li>Puntos marrones en soldaduras o en los extremos inferiores (los primeros en oxidarse).</li>
        <li>La pintura se ampolla o levanta sin golpe visible (el óxido la empuja desde adentro).</li>
        <li>Cambio de color a gris apagado o pérdida de brillo generalizado.</li>
        <li>Golpes o rayones que exponen el metal sin recubrimiento.</li>
      </ul>

      <h2>Lo que más acorta la vida de una reja</h2>
      <p>
        El factor número uno no es el clima — es la instalación incorrecta.
        Una reja bien diseñada pero con postes mal anclados acumula humedad en
        la base. El óxido comienza desde abajo, invisible, y cuando se ve ya
        es grave.
      </p>
      <ul>
        <li>Postes empotrados sin drenaje → acumulan agua.</li>
        <li>Soldaduras sin limpiar escoria antes de pintar → la pintura no adhiere bien.</li>
        <li>Extremos de tubo cortados sin cubrir → entran agua y tierra.</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, quiero cotizar una reja metálica con buena durabilidad. Estoy en [ZONA / COMUNA]. ¿Qué acabado me recomiendan?" />
    </>
  ),
  "mantenimiento-rejas-metalicas": () => (
    <>
      <p>
        Una reja metálica bien mantenida puede durar 20–30 años. Una mal mantenida se
        oxida desde adentro, se debilita y hay que reemplazarla en 5–8 años. La diferencia
        está casi siempre en actuar a tiempo — antes de que el óxido penetre el tubo.
      </p>

      <h2>Paso 1: Inspección anual</h2>
      <p>
        Una vez al año, revisa toda la reja prestando atención a:
      </p>
      <ul>
        <li><strong>Base de los postes</strong> — la zona más vulnerable. Busca manchas marrones o pintura que se levanta.</li>
        <li><strong>Soldaduras</strong> — las uniones son los primeros puntos donde falla la pintura.</li>
        <li><strong>Extremos de tubo</strong> — si están abiertos y sin tapa, entran agua y tierra.</li>
        <li><strong>Partes bajas del frontis</strong> — la pintura se deteriora por salpicadura de agua desde la vereda.</li>
      </ul>

      <h2>Paso 2: Limpiar el óxido superficial</h2>
      <p>
        Si encuentras puntos de óxido localizados (menores de 2 cm, sin profundidad visible), se pueden tratar sin repintar toda la reja:
      </p>
      <ul>
        <li>Lija con lija de grano 80–120 hasta retirar todo el óxido visible.</li>
        <li>Aplica convertidor de óxido (fosfato de zinc) sobre la zona lijada.</li>
        <li>Deja secar 24 horas.</li>
        <li>Aplica pintura de retoque (aerosol o brocha) en el color de la reja.</li>
      </ul>
      <p>
        Este proceso no es permanente — es un parche que extiende la vida útil 2–3 años más mientras planificas el repintado completo.
      </p>

      <h2>Paso 3: Repintado completo</h2>
      <p>
        Cuando el óxido cubre más del 15–20% de la superficie, o cuando la pintura se ve
        opaca y descascarada en toda la reja, es momento del repintado completo.
        El proceso correcto es:
      </p>
      <ul>
        <li>Granallado o lija mecánica para retirar toda la pintura vieja.</li>
        <li>Aplicación de fondo anticorrosivo.</li>
        <li>Pintura de terminación (electrostática al horno si se puede desmontar, esmalte sintético si no).</li>
      </ul>
      <p>
        La pintura electrostática al horno no se puede aplicar in situ — requiere que la reja
        se desmonte y vaya al taller. Si la reja no se puede desmontar, la alternativa es
        el esmalte sintético aplicado con pistola o brocha en obra.
      </p>

      <h2>¿Repintar o reemplazar?</h2>
      <p>
        Si la estructura sigue firme (postes sólidos, tubo sin perforación), repintar
        siempre es más económico que reemplazar. Si el tubo tiene perforaciones por el óxido
        o si los postes se mueven, el reemplazo es la única opción segura.
      </p>

      <h2>Mantenimiento preventivo simple</h2>
      <ul>
        <li>Una vez al año, lava la reja con agua y jabón — retira la sal, el polvo y la suciedad que aceleran el deterioro.</li>
        <li>Aplica cera de auto sobre la pintura (solo en zonas de alta humedad) para una capa extra de protección.</li>
        <li>Cierra los extremos de tubo abiertos con tapas de goma o soldándolos.</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, tengo una reja que necesita mantenimiento o repintado. ¿Pueden orientarme sobre el proceso y el precio?" />
    </>
  ),

  "rejas-para-departamentos": () => (
    <>
      <p>
        En un departamento la protección metálica tiene una lógica distinta a la de
        una casa — no hay frontis que cerrar ni portón vehicular, pero sí hay puntos de
        vulnerabilidad específicos: el balcón, las ventanas de primer piso y la terraza
        privativa. Esta guía explica qué se puede instalar, qué suele pedir el reglamento
        de copropiedad y qué acabado es más adecuado para un edificio.
      </p>

      <h2>Los tres puntos que se protegen en un departamento</h2>
      <p>
        <strong>Balcón:</strong> El acceso más expuesto. Una reja de balcón con puerta
        integrada es la solución más completa — permite ventilación y salida, pero cierra
        el vano contra intrusión. En pisos bajos (1° y 2°) es la protección más valorada
        por las aseguradoras.
      </p>
      <p>
        <strong>Ventanas:</strong> Las ventanas de dormitorio y living que dan a balcón,
        patio interior o fachada accesible son el segundo punto de riesgo. Una reja fija
        o con apertura de emergencia protege sin comprometer la evacuación.
      </p>
      <p>
        <strong>Terraza privativa:</strong> Algunos departamentos incluyen una terraza
        en el piso superior o en planta baja. Una baranda de seguridad o un cierre lateral
        de terraza complementa la seguridad del espacio y delimita el área privada.
      </p>

      <h2>¿Qué dice el reglamento de copropiedad?</h2>
      <p>
        En Chile, la Ley 21.442 de Copropiedad Inmobiliaria regula lo que los copropietarios
        pueden modificar en sus unidades y en los bienes comunes. En general:
      </p>
      <ul>
        <li>Las rejas en el interior del balcón o ventana (dentro del espacio privativo) no requieren autorización de la asamblea.</li>
        <li>Las rejas o elementos que modifiquen la fachada exterior del edificio sí requieren autorización de la asamblea de copropietarios.</li>
        <li>Muchos reglamentos permiten las rejas si mantienen el mismo diseño y color que el estándar del edificio.</li>
      </ul>
      <p>
        Antes de instalar, revisa el reglamento de tu edificio y, si hay dudas, consulta
        al comité de administración. La instalación sin autorización puede generar multas
        o la obligación de retirar la reja.
      </p>

      <h2>Acabados recomendados para departamentos</h2>
      <p>
        En un edificio, el acabado visible desde el exterior importa — tanto para el
        reglamento como para el aspecto del conjunto. Las opciones más comunes:
      </p>
      <ul>
        <li><strong>Pintura electrostática al horno</strong> — acabado liso y uniforme, disponible en negro, blanco roto, gris antracita o el color que defina el edificio. Dura más que la pintura convencional y no gotea durante la instalación.</li>
        <li><strong>Galvanizado en frío + pintura</strong> — para edificios en zonas costeras o húmedas donde la protección anti-óxido es prioritaria.</li>
        <li><strong>Acero inoxidable</strong> — para balcones de categoría o edificios de alta gama. Precio más alto pero mantenimiento mínimo a largo plazo.</li>
      </ul>

      <h2>Tipos de reja para balcón de departamento</h2>
      <ul>
        <li><strong>Reja fija con puerta abatible:</strong> La hoja de la puerta permite salir al balcón; la parte fija cierra el resto del vano. La solución más equilibrada entre seguridad y acceso diario.</li>
        <li><strong>Reja fija sin apertura:</strong> Máxima seguridad, sin puerta. Se usa cuando no se necesita acceso al balcón o cuando el balcón es solo decorativo. Debe incluir un mecanismo de apertura de emergencia en caso de incendio.</li>
        <li><strong>Reja con ventilación:</strong> Diseño con separación amplia entre barrotes — permite circulación de aire, ideal para balcones orientados al sol donde se acumula calor.</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, necesito cotizar una reja para departamento. Tengo [BALCÓN / VENTANA / TERRAZA], en piso [NÚMERO], en [COMUNA]. ¿Pueden orientarme?" />
    </>
  ),

  "como-elegir-color-reja-metalica": () => (
    <>
      <p>
        La pregunta parece simple, pero el color de la reja impacta directamente en el
        aspecto de la fachada de la casa — para bien o para mal. En Chile hay tres colores
        que dominan el mercado: negro mate, gris antracita y blanco roto. Esta guía explica
        cuándo elegir cada uno y qué combinaciones funcionan mejor.
      </p>

      <h2>Negro mate (RAL 9005) — el estándar actual</h2>
      <p>
        El negro mate es hoy el color más solicitado en rejas y portones de casas en Chile.
        Funciona prácticamente con cualquier tipo de fachada: ladrillo, estuco blanco, madera,
        piedra y hormigón. Oculta la suciedad y las marcas de agua mejor que los colores
        claros. El acabado mate (sin brillo) disimula además las imperfecciones superficiales
        del metal.
      </p>
      <p>
        <strong>Cuándo elegirlo:</strong> Casa con fachada blanca o clara, fachada con ladrillo a la vista,
        casas modernas y minimalistas, condominios con diseño contemporáneo. Es el color más
        versátil y el que tiene menor riesgo de equivocarse.
      </p>

      <h2>Gris antracita (RAL 7016) — la alternativa premium</h2>
      <p>
        El gris antracita es un gris oscuro, casi negro, pero con una temperatura más neutra
        que el negro puro. Da una sensación más sofisticada que el negro mate — ideal para
        casas de diseño con fachada gris, zinc o madera oscura. Combina muy bien con marcos
        de ventana en aluminio gris.
      </p>
      <p>
        <strong>Cuándo elegirlo:</strong> Fachadas grises o de zinc, casas nórdicas o escandinavas,
        proyectos donde el negro se ve demasiado fuerte. Nota: el gris antracita muestra más
        el polvo que el negro mate — en zonas con viento fuerte o tierra se ensucia más visiblemente.
      </p>

      <h2>Blanco roto (RAL 9010) — para fachadas claras y zonas costeras</h2>
      <p>
        El blanco roto (levemente cálido, no blanco puro) es la opción clásica para casas
        de estilo mediterráneo, colonial o cualquier fachada con tonos beige y crema.
        También es una buena opción para zonas costeras donde el negro absorbe más el calor
        del sol y puede generar más expansión térmica en el metal.
      </p>
      <p>
        <strong>Cuándo elegirlo:</strong> Fachadas de color beige, crema o amarillo pálido,
        casas de estilo mediterráneo, zonas costeras con mucho sol. Desventaja: muestra la
        suciedad más que los colores oscuros y necesita mantenimiento más frecuente.
      </p>

      <h2>Otros colores disponibles</h2>
      <p>
        Con pintura electrostática al horno es posible aplicar cualquier color del catálogo
        RAL — verde botella, azul marino, marrón óxido, terracota, grafito. Estos colores
        son menos comunes en rejas residenciales, pero funcionan bien en proyectos de diseño
        específicos o en rejas decorativas que forman parte del concepto visual de la casa.
      </p>

      <h2>Resumen: cómo elegir según tu fachada</h2>
      <ul>
        <li><strong>Fachada blanca o clara</strong> → Negro mate o gris antracita</li>
        <li><strong>Fachada beige o crema</strong> → Blanco roto o negro mate</li>
        <li><strong>Fachada ladrillo</strong> → Negro mate o marrón óxido</li>
        <li><strong>Fachada gris o zinc</strong> → Gris antracita o negro mate</li>
        <li><strong>Fachada de madera oscura</strong> → Negro mate o gris antracita</li>
        <li><strong>Zona costera con mucho sol</strong> → Blanco roto o gris claro</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, quiero cotizar una reja metálica. Mi fachada es [DESCRIPCIÓN]. Estoy considerando el color [DATO]. ¿Me pueden asesorar?" />
    </>
  ),

  "cuanto-cuesta-cerco-perimetral-metro-lineal": () => (
    <>
      <p>
        El precio de un cerco perimetral varía según cuatro factores: el tipo de cerco,
        la altura, el material y si incluye instalación. En Chile los precios se cotizan
        por metro lineal (ml) — es decir, el costo total del perímetro dividido por los
        metros que mide. Esta guía da rangos reales para cada tipo.
      </p>

      <h2>Precios orientativos por tipo de cerco (con instalación)</h2>
      <p>
        Los rangos a continuación son orientativos para Santiago y la Región Metropolitana.
        En regiones extremas (Patagonia, norte árido) pueden aplicar costos adicionales
        de traslado. Los precios incluyen materiales e instalación con postes en hormigón.
      </p>
      <ul>
        <li><strong>Malla eslabonada 1,50 m:</strong> $18.000–$28.000 / ml</li>
        <li><strong>Malla eslabonada 1,80 m:</strong> $22.000–$34.000 / ml</li>
        <li><strong>Tubo estructural 1,50 m:</strong> $35.000–$55.000 / ml</li>
        <li><strong>Tubo estructural 1,80 m:</strong> $45.000–$68.000 / ml</li>
        <li><strong>Ángulo industrial 2,00 m:</strong> $38.000–$58.000 / ml</li>
        <li><strong>Galvanizado en caliente (tubo) 1,50 m:</strong> $55.000–$80.000 / ml</li>
      </ul>
      <p>
        Estos precios no incluyen portones vehiculares ni puertas peatonales — esos
        elementos se cotizan por separado según el ancho y el tipo de apertura.
      </p>

      <h2>Qué factores suben el precio</h2>
      <ul>
        <li><strong>Mayor altura:</strong> Cada 30 cm de altura extra suma entre un 15 y un 25% al costo total.</li>
        <li><strong>Terreno irregular:</strong> Suelos rocosos, pendientes o terrenos con raíces requieren más trabajo de fundación y elevan el precio.</li>
        <li><strong>Galvanizado:</strong> El galvanizado en caliente cuesta entre un 40 y un 60% más que el acero pintado, pero dura 2–3 veces más en zonas húmedas o costeras.</li>
        <li><strong>Anti-trepa:</strong> Punta de lanza, concertina o ángulo invertido en la parte superior suman entre $5.000 y $15.000 / ml según el tipo.</li>
        <li><strong>Portón vehicular:</strong> Un portón corredizo de 4 metros parte desde $350.000 instalado. Un portón batiente de doble hoja parte desde $280.000.</li>
      </ul>

      <h2>Cómo pedir una cotización precisa</h2>
      <p>
        Para obtener un precio exacto necesitas entregar tres datos: metros lineales del
        perímetro (o las dimensiones del terreno), la altura que necesitas y el tipo de
        suelo (hormigón, tierra o adoquín). Con esos tres datos cotizamos el mismo día.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito cotizar un cerco perimetral. Metros lineales: [DATO] ml. Altura: [DATO] m. Tipo de suelo: [HORMIGÓN / TIERRA / ADOQUÍN]. Ubicación: [DATO]." />
    </>
  ),

  "camarotes-militares-caracteristicas-tecnicas": () => (
    <>
      <p>
        Cuando alguien dice "camarote militar" no está hablando de un camarote pintado de verde.
        Está hablando de un estándar de fabricación completamente diferente al camarote de dormitorio.
        La diferencia no es estética — es estructural y de acabado.
      </p>

      <h2>El material: espesor que sí importa</h2>
      <p>
        Un camarote residencial estándar usa tubo cuadrado de 1,0 a 1,2 mm de espesor. Suficiente
        para uso doméstico normal con una o dos personas usando el mueble con cuidado.
      </p>
      <p>
        Un camarote de uso institucional intensivo (militar, cuartel, internado, campamento minero)
        requiere tubo de 1,5 mm mínimo, y en aplicaciones de máxima exigencia, 2,0 mm. La diferencia
        se nota en cómo responde el mueble al movimiento brusco, al golpe lateral y al peso acumulado
        durante años de uso continuo por múltiples usuarios.
      </p>

      <h2>La soldadura: lo que no se ve es lo que más importa</h2>
      <p>
        El proceso de soldadura es la diferencia más importante y la menos visible. Un camarote
        de bajo costo usa soldadura por puntos (spot) — puntos discretos de unión que con el tiempo,
        bajo vibración y uso intensivo, generan microfracturas.
      </p>
      <p>
        La fabricación de calidad usa proceso MIG/MAG con cordones continuos en todos los puntos
        de carga: uniones de travesaños, bases de escalera y anclajes de baranda. Un cordón continuo
        distribuye el estrés a lo largo de toda la longitud de la unión, no en un solo punto.
      </p>

      <h2>El acabado: pintura al horno vs pintura en aerosol</h2>
      <p>
        La pintura electrostática al horno es un proceso completamente diferente a la pintura
        convencional en aerosol. El polvo de pintura se aplica electroestáticamente (se adhiere
        uniformemente a toda la pieza) y luego se cura al horno a 180–200°C, formando una capa
        de 60–80 micrones que prácticamente no puede pelarse ni rayarse con el uso normal.
      </p>
      <p>
        Una reja pintada a pistola tiene 30–40 micrones y se puede rayar con la uña. Una pieza
        pintada al horno resiste llaves, cinturones, herramientas y la limpieza diaria con
        desinfectantes sin deteriorarse durante años.
      </p>

      <h2>El sistema de fijación entre camas</h2>
      <p>
        Los camarotes apilables deben tener un sistema de fijación entre el nivel inferior y el
        superior. Los camarotes residenciales baratos simplemente apoyan la cama superior sobre
        los postes de la inferior sin fijación. En uso institucional, donde alguien podría empujar,
        subir bruscamente o usar la escalera con fuerza, eso representa un riesgo real.
      </p>
      <p>
        Un camarote de uso intensivo tiene tornillos hexagonales con tuerca autoblocante en cada
        punto de unión entre niveles, más seguros de acero que impiden el desplazamiento lateral.
      </p>

      <h2>¿Quién necesita un camarote de este estándar?</h2>
      <p>
        La respuesta corta: cualquier institución donde el mueble vaya a ser usado de forma intensiva
        por múltiples personas durante años. Eso incluye cuarteles, regimientos, bases, institutos de
        formación, cuerpos de bomberos, campamentos mineros, salmoneras, internados y residencias
        estudiantiles con alta ocupación.
      </p>
      <p>
        Para uso familiar normal — dos hijos en el mismo cuarto — el estándar residencial es suficiente.
        El sobredimensionamiento no es necesario y solo encarece el producto sin agregar valor real
        en ese contexto.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito cotizar camarotes para uso institucional/militar. Cantidad: [UNIDADES]. Institución: [NOMBRE]. Configuración: [2 / 3 NIVELES]. Ciudad: [CIUDAD]." />
    </>
  ),

  "literas-metalicas-vs-madera": () => (
    <>
      <p>
        Es la comparación que más nos preguntan. Y la respuesta honesta es: depende de cuánto tiempo
        vas a usar el mueble y en qué condiciones. Aquí el análisis real, sin sesgo de proveedor.
      </p>

      <h2>Precio inicial</h2>
      <p>
        Una litera de madera MDF o pino con acabado laminado parte desde $80.000–$120.000 en tiendas
        de retail. Una litera metálica de fabricante directo parte desde $120.000–$180.000 dependiendo
        del tamaño y acabado.
      </p>
      <p>
        En el precio inicial, la madera gana. Pero el precio inicial no es el precio total.
      </p>

      <h2>Durabilidad real</h2>
      <p>
        Una litera de MDF en condiciones normales de uso dura 5–8 años antes de que las uniones
        comiencen a aflojar, la laminación se levante o las esquinas se astillen. En ambientes
        húmedos (baño cercano, zona de lluvia, habitación poco ventilada), ese plazo puede ser
        de 3–5 años.
      </p>
      <p>
        Una litera metálica con pintura electrostática al horno, en condiciones normales, puede
        durar 15–20 años sin mantenimiento. No se reseca, no se astilla, no se pudre. El único
        mantenimiento que puede necesitar es retoque de pintura si hay un golpe severo — lo que
        se hace con spray del mismo color.
      </p>
      <p>
        Calculando por vida útil, la litera metálica es más barata a mediano plazo.
      </p>

      <h2>Ruido y estabilidad</h2>
      <p>
        El ruido es el talón de Aquiles de las literas de cualquier material. En madera, las
        uniones con tornillo generan crujido a medida que la madera se mueve. En metal mal fabricado,
        ocurre lo mismo con las soldaduras por puntos.
      </p>
      <p>
        Una litera metálica con soldadura continua MIG y tornillos bien apretados prácticamente no
        cruje. La clave está en la calidad de fabricación, no en el material per se.
      </p>

      <h2>Seguridad</h2>
      <p>
        El metal no se astilla ni rompe de forma irregular. Si una unión cede (lo que es muy raro
        con buena soldadura), lo hace de forma visible y gradual, no de golpe. La madera MDF puede
        fallar de forma súbita en las uniones bajo carga lateral.
      </p>
      <p>
        Para uso infantil o institucional, el metal gana en seguridad. Para una habitación de adultos
        con uso moderado, ambos son aceptables.
      </p>

      <h2>Estética</h2>
      <p>
        La madera tiene más variedad de acabados y suele integrarse mejor en dormitorios de estilo
        nórdico, natural o tradicional. El metal tiene una estética industrial-minimalista que combina
        con espacios contemporáneos y juveniles.
      </p>
      <p>
        La pintura al horno ofrece literalmente cualquier color RAL, lo que le da al metal una
        flexibilidad estética que la madera natural no puede igualar.
      </p>

      <h2>El veredicto</h2>
      <p>
        Si tu presupuesto es ajustado y el uso va a ser moderado, la madera de buena calidad es
        una opción válida. Si planeas usar el mueble más de 5 años, si el uso va a ser intensivo,
        si hay humedad en el ambiente, o si es para uso institucional — el metal es la opción correcta.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito cotizar litera metálica. Medida: [1 PLAZA / 1,5 PLAZAS / 2 PLAZAS]. Color: [DATO]. Cantidad: [UNIDADES]." />
    </>
  ),

  "mallas-3d-que-son-y-cuando-usarlas": () => (
    <>
      <p>
        "Malla 3D" es el nombre comercial más común para lo que técnicamente se llama panel soldado
        o malla electrosoldada. Es el sistema de cerco que más ha crecido en uso industrial y
        residencial de gama media-alta en Chile durante los últimos años.
      </p>

      <h2>¿Qué es exactamente una malla 3D?</h2>
      <p>
        Es un panel fabricado con alambre de acero de calibre específico (generalmente 4 o 5 mm),
        soldado electrónicamente en cada intersección de la grilla. El resultado es un panel rígido,
        plano y uniforme que no se deforma bajo presión lateral.
      </p>
      <p>
        El término "3D" viene de la protuberancia que forman los alambres horizontales al pasar
        por delante y por detrás de los verticales, creando una ligera dimensión en profundidad
        que le da mayor rigidez al panel.
      </p>

      <h2>La diferencia real con la malla eslabonada</h2>
      <p>
        La malla eslabonada (también llamada malla de cadena, tipo diamante o "ciclón") es flexible.
        Se puede deformar empujándola, se puede pandear con el tiempo entre postes, y con herramientas
        básicas se puede cortar con relativa facilidad.
      </p>
      <p>
        El panel soldado 3D no se deforma. Si alguien empuja con fuerza, el panel resiste como una
        pared rígida. Cortar un alambre de 4–5 mm de diámetro requiere herramientas de corte
        específicas y hace ruido. Escalar un panel liso es mucho más difícil que escalar una
        malla eslabonada con su grilla de tipo escalera.
      </p>

      <h2>¿Cuándo conviene la malla 3D sobre la eslabonada?</h2>
      <p>
        La malla 3D conviene cuando alguno de estos factores está presente:
      </p>
      <ul>
        <li><strong>Seguridad activa:</strong> perímetros de industria, bodegas, plantas, depósitos de maquinaria donde el disuasivo visual y físico importa.</li>
        <li><strong>Estética:</strong> el panel soldado tiene un acabado prolijo y uniforme, muy diferente del aspecto más "precario" de la malla de cadena.</li>
        <li><strong>Resistencia al pandeo:</strong> si el cerco está expuesto a impactos de animales, maquinaria o personas, el panel no cede.</li>
        <li><strong>Colegios y espacios con menores:</strong> el panel liso sin grilla tipo escalera dificulta la escalada.</li>
      </ul>

      <h2>¿Cuándo puede ser suficiente la malla eslabonada?</h2>
      <p>
        Para terrenos grandes (parcelas, campos, sitios) donde el objetivo es solo delimitar,
        la malla eslabonada sigue siendo la opción más económica por metro lineal. Si el perímetro
        tiene cientos de metros lineales y la función principal es marcar un límite sin mayor
        exigencia de seguridad activa, el costo de la malla 3D no se justifica.
      </p>

      <h2>Precio orientativo</h2>
      <p>
        La malla 3D tiene un costo por metro lineal instalado que es entre un 30 y un 60% mayor
        que la malla eslabonada de igual altura. Para un metro lineal de cerco de 1,80 m de altura,
        la malla 3D parte desde $45.000 ML instalada, versus $28.000–$35.000 ML de la eslabonada.
        Los precios varían según el calibre del alambre y la profundidad del posteo.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito cotizar cerco con malla 3D / panel soldado. Metros lineales: [METROS]. Altura: [ALTURA]. Uso: [INDUSTRIAL / RESIDENCIAL]. Ciudad: [CIUDAD]." />
    </>
  ),

  "camarotes-para-hostal-guia-completa": () => (
    <>
      <p>
        Equipar las habitaciones de un hostal requiere pensar diferente a equipar un dormitorio
        en casa. El factor de uso es completamente distinto — en un hostal, una cama puede tener
        decenas de usuarios distintos al año, muchos con maletas pesadas, madrugadas y uso brusco.
      </p>

      <h2>¿Cuántos camarotes entran en una habitación compartida?</h2>
      <p>
        Para una habitación de 12 m² (el mínimo recomendable para habitación compartida según la
        mayoría de los estándares de clasificación), pueden entrar:
      </p>
      <ul>
        <li><strong>4 camas (2 camarotes de 1 plaza):</strong> con suficiente espacio de circulación entre ellos si se distribuyen bien.</li>
        <li><strong>6 camas (3 camarotes de 1 plaza):</strong> posible en habitaciones de 15–18 m², el estándar habitual de hostales con dorm de 6.</li>
        <li><strong>8 camas (4 camarotes de 1 plaza):</strong> requiere mínimo 20–22 m² para cumplir con espacio de circulación y salida de emergencia.</li>
      </ul>
      <p>
        Recuerda dejar al menos 60 cm entre camarotes para que los huéspedes puedan acceder sin
        molestar al vecino. Los camarotes también deben estar a una distancia mínima de la puerta
        de salida.
      </p>

      <h2>Especificaciones que importan para hostal</h2>
      <p>
        Un hostal no necesita el estándar militar (1,5 mm), pero sí supera el residencial.
        El mínimo recomendable para uso intensivo de hostal es:
      </p>
      <ul>
        <li>Tubo de 1,2 mm mínimo (1,5 mm si el hostal tiene alta ocupación).</li>
        <li>Pintura electrostática al horno — resiste el trato brusco de maletas y mochileros.</li>
        <li>Escalera fija integrada, no escalera separada que se puede perder.</li>
        <li>Ganchos para mochilas o colgar ropa en cada nivel.</li>
        <li>Soporte para colchoneta estándar de hostal (generalmente 10–12 cm de altura).</li>
        <li>Baranda de seguridad lateral en el nivel superior.</li>
      </ul>

      <h2>¿Colchoneta incluida o aparte?</h2>
      <p>
        Fabricamos el camarote sin colchoneta — la mayoría de los hostaleros compran las colchonetas
        por separado según sus estándares de comodidad. Las medidas estándar que usamos (90 × 190 cm)
        son compatibles con colchonetas de 1 plaza disponibles en cualquier tienda.
      </p>

      <h2>Precio por habitación completa</h2>
      <p>
        Un dorm de 6 (3 camarotes) con el equipamiento correcto para uso de hostal parte desde
        $400.000–$500.000 más IVA. Un dorm de 8 (4 camarotes) parte desde $520.000–$650.000.
        Estos precios son de fabricante directo, sin márgenes de distribuidor.
      </p>
      <p>
        Para hostales que equipan varias habitaciones, el precio unitario baja con volumen. Pide
        cotización indicando cuántos dormitorios y cuántas camas en total.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito cotizar camarotes para hostal. Habitaciones: [NÚMERO]. Camas por habitación: [DATO]. Ciudad: [DATO]. Total de camas: [DATO]." />
    </>
  ),

  "camarotes-agricolas-temporada-cosecha": () => (
    <>
      <p>
        En las temporadas altas de cosecha — uva (enero-marzo), arándano (noviembre-enero), manzana
        (marzo-mayo) — las empresas agrícolas necesitan alojar a decenas o cientos de temporeros.
        La infraestructura de alojamiento no es un detalle: es un requisito legal y de seguridad.
      </p>

      <h2>¿Qué exige la normativa de alojamiento de temporeros?</h2>
      <p>
        La resolución 1.007 del Ministerio de Salud establece estándares mínimos para campamentos
        de trabajadores agrícolas. Entre los principales requisitos de habitabilidad:
      </p>
      <ul>
        <li>Superficie mínima de 3 m² por persona</li>
        <li>Ventilación natural o artificial</li>
        <li>Separación de sexos en dormitorios colectivos</li>
        <li>Instalaciones sanitarias en proporción al número de trabajadores</li>
      </ul>
      <p>
        El uso de camarotes (en lugar de camas individuales) es la forma más eficiente de cumplir
        con los 3 m² por persona optimizando el uso del espacio vertical.
      </p>

      <h2>¿Por qué metal y no madera en el campo?</h2>
      <p>
        Los campamentos agrícolas tienen condiciones que son destructivas para la madera: humedad
        variable (mañanas frías, tardes calurosas en valles de Maule, O'Higgins y Coquimbo), polvo,
        roce constante de ropa y equipos, y el hecho de que el alojamiento puede no ser controlado
        ambientalmente.
      </p>
      <p>
        La madera MDF se desintegra en 1–2 temporadas en estas condiciones. El acero con pintura
        electrostática al horno aguanta 10–15 años con mantenimiento mínimo.
      </p>

      <h2>Cálculo rápido para tu temporada</h2>
      <p>
        Para calcular los camarotes que necesitas: divide el número de temporeros por 2 (ya que
        cada camarote tiene 2 plazas). Considera un 10% adicional para imprevistos y fluctuaciones.
        Por ejemplo, para 80 temporeros necesitas aproximadamente 44 camarotes de 2 plazas.
      </p>

      <h2>Arriendo vs compra</h2>
      <p>
        Para temporadas de menos de 3 meses, el arriendo puede ser más conveniente si se incluye
        el transporte. Para temporadas recurrentes año a año, la compra amortiza en 2–3 temporadas.
        Consulta según tu caso — manejamos ambas alternativas.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito cotizar camarotes para temporada agrícola. Empresa: [NOMBRE]. Número de temporeros: [DATO]. Temporada: [MESES]. Región: [DATO]." />
    </>
  ),

  "como-instalar-camarote-metalico": () => (
    <>
      <p>
        Armar un camarote metálico es más simple de lo que parece si recibes las piezas en el
        orden correcto y sigues los pasos en secuencia. Esta guía aplica para la mayoría de los
        camarotes de tubo cuadrado con tornillos de cabeza hexagonal.
      </p>

      <h2>Herramientas necesarias</h2>
      <ul>
        <li>Llave de tubo o llave combinada del número indicado en las instrucciones (generalmente 13 mm o 17 mm)</li>
        <li>Mazo de goma o martillo con trapo (para ajustar piezas sin rayar)</li>
        <li>Nivel de burbuja (para verificar que la estructura quede recta)</li>
        <li>Ayudante para sostener las piezas mientras atornillas</li>
      </ul>
      <p>
        No necesitas taladro ni soldadora para el armado. Si necesitas anclar el camarote a la pared
        (recomendado en piezas pequeñas o para mayor seguridad), sí necesitarás taladro.
      </p>

      <h2>Paso 1: Revisar las piezas antes de empezar</h2>
      <p>
        Antes de armar, cuenta todas las piezas y tornillos. Compara con el listado del fabricante.
        Es mucho más fácil detectar una pieza faltante antes de empezar que descubrirlo cuando
        llevas el 80% armado. Coloca todas las piezas en el suelo agrupadas por tipo.
      </p>

      <h2>Paso 2: Armar la cama inferior</h2>
      <p>
        Empieza por la cama inferior. Une los dos postes laterales largos con los travesaños
        horizontales cortos en los extremos (cabecera y piecera). Los tornillos deben quedar
        apretados pero no al máximo todavía — la estructura debe poder ajustarse en los pasos
        siguientes.
      </p>
      <p>
        Coloca la base de la cama inferior (las barras de apoyo o la plataforma según el modelo)
        y verifica con el nivel que el marco queda horizontal.
      </p>

      <h2>Paso 3: Agregar los postes de la cama superior</h2>
      <p>
        Los postes verticales que van de la cama inferior a la superior se insertan en los receptores
        de los ángulos de la cama inferior. En la mayoría de los modelos, estos postes tienen un
        pasador o tornillo que los fija. Apriétalos bien antes de continuar — son los elementos
        críticos de la estructura.
      </p>

      <h2>Paso 4: Armar la cama superior</h2>
      <p>
        Con los postes superiores ya fijos, agrega el marco de la cama superior de la misma forma
        que el inferior: cabecera + piecera + travesaños. Usa el nivel para verificar que el marco
        superior queda horizontal en las dos dimensiones.
      </p>

      <h2>Paso 5: Instalar la escalera y la baranda</h2>
      <p>
        La escalera se fija con ganchos o tornillos en la cabecera o en el lateral, según el modelo.
        Verifica que queda firme antes de poner peso sobre ella. La baranda lateral se instala en
        el nivel superior y debe quedar a altura de 30 cm desde la cama.
      </p>

      <h2>Paso 6: Apretar todo y verificar</h2>
      <p>
        Con todo el camarote armado, recorre todos los tornillos y apriétalos al máximo. Sacude
        suavemente la estructura completa para detectar movimiento. Si hay traqueteo, identifica
        cuál unión está floja y apriétala. Una estructura bien apretada no debe tener juego.
      </p>

      <h2>¿Hay que anclar el camarote a la pared?</h2>
      <p>
        No es obligatorio, pero sí recomendado si el camarote está en una pieza pequeña, si
        los usuarios son niños o si el suelo no es completamente plano. Un taco y tornillo en la
        pared, pasando por el poste superior trasero, añade una capa de seguridad extra. Se hace
        con taladro + broca para hormigón si la pared es de concreto o ladrillo.
      </p>

      <CTAWhatsApp mensaje="Hola, tengo dudas sobre el armado de mi camarote. Modelo: [DATO]. Problema específico: [DESCRIPCIÓN]." />
    </>
  ),

  "pintura-electrostatica-que-es": () => (
    <>
      <p>
        Cuando comparas camarotes metálicos de distintos fabricantes, una diferencia importante
        que no siempre es obvia a simple vista es el tipo de pintura. La pintura electrostática
        al horno y la pintura en spray convencional se ven casi iguales recién aplicadas —
        pero en 3–5 años, la diferencia es abismal.
      </p>

      <h2>¿Cómo funciona la pintura electrostática?</h2>
      <p>
        El proceso tiene dos etapas. Primero, el polvo de pintura (una mezcla de resina poliéster
        o epoxi en partículas finas) se carga eléctricamente y se "sopla" sobre la pieza de metal.
        Gracias a la carga estática, el polvo se adhiere de forma uniforme a toda la superficie,
        incluyendo esquinas, ángulos y zonas de difícil acceso.
      </p>
      <p>
        Segundo, la pieza entra al horno a 180–200°C durante 15–20 minutos. El calor funde las
        partículas de polvo y las fusiona entre sí formando una capa continua, sin poros, de
        60–80 micrones de espesor.
      </p>

      <h2>¿Por qué dura más que el spray convencional?</h2>
      <p>
        La pintura en aerosol o spray convencional se aplica en estado líquido sobre la pieza.
        Al secar, el solvente se evapora y la pintura queda adherida mecánicamente sobre el metal.
        El resultado es una capa porosa que bajo uso intensivo, humedad o impactos, comienza a
        agrietarse y a pelarse desde los bordes.
      </p>
      <p>
        La pintura electrostática al horno, al fundirse sobre el metal, forma una capa termopolimerizada
        sin poros. Es prácticamente imposible pelarla con la uña. Para rayarla se necesita un objeto
        afilado con fuerza. Y aunque haya un rasguño, no se propaga como el óxido bajo la pintura
        convencional.
      </p>

      <h2>Comparativa de durabilidad</h2>
      <p>
        En Santiago, con uso normal y el ambiente seco del centro del país:
      </p>
      <ul>
        <li><strong>Pintura spray convencional:</strong> empieza a mostrar deterioro a los 2–4 años. Requiere retoque a los 5–7 años.</li>
        <li><strong>Electrostática al horno:</strong> sin deterioro visible a los 5–8 años. En condiciones normales, dura 10–15 años sin intervención.</li>
      </ul>
      <p>
        En zonas húmedas (Valdivia, Osorno, costa) o ambientes salinos (Viña del Mar, Antofagasta),
        ambos tipos se deterioran más rápido. Pero la electrostática sigue siendo significativamente
        más resistente.
      </p>

      <h2>Cómo reconocer la pintura electrostática</h2>
      <p>
        La textura de la pintura electrostática al horno es característica: levemente granulada o
        "satinada", con un acabado muy uniforme. Si pasas el dedo con fuerza, no deja marca. Si
        intentas doblar una esquina pintada con fuerza (en la pieza, no en la pintura), la pintura
        electrostática no se agrieta ni se pela — flexiona con el metal.
      </p>
      <p>
        La pintura en spray tiene una textura más "blanda" al tacto y con el tiempo puede verse
        un ligero goteo o irregularidad en zonas de difícil acceso.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito cotizar camarote o estructura metálica con pintura electrostática al horno. Producto: [DATO]. Cantidad: [DATO]." />
    </>
  ),

  "camarotes-mineria-que-exige-cada-faena": () => (
    <>
      <p>
        Chile tiene al menos tres tipos distintos de faena minera, y cada una tiene condiciones
        tan diferentes que el camarote que es perfecto para una puede ser inadecuado para otra.
        Esta guía es para gerentes de logística y encargados de adquisiciones en operadoras y
        contratistas.
      </p>

      <h2>1. Campamentos en el norte grande (Atacama, Antofagasta, Tarapacá)</h2>
      <p>
        Los campamentos del norte — Calama, Sierra Gorda, Antofagasta, Iquique, Tocopilla, Diego
        de Almagro — tienen características muy específicas: calor extremo de día, frío nocturno,
        aire muy seco, polvo mineral constante y altitud variable.
      </p>
      <p>
        El polvo mineral es el factor más destructivo para los acabados. En estas condiciones,
        la pintura convencional en aerosol se deteriora rápidamente. La pintura electrostática
        al horno (60–80 micrones, curada a 180°C) es el mínimo aceptable. No se descascarilla
        con el polvo abrasivo ni se agrieta con los cambios térmicos noche/día.
      </p>
      <p>
        El estrés adicional de los trabajadores nocturnos y diurnos usando los mismos camarotes
        en rotación (sistema "cama caliente" en algunas faenas) exige estructura de 1,5 mm mínimo
        y soldadura MIG continua.
      </p>

      <h2>2. Campamentos de altura (precordillera y cordillera)</h2>
      <p>
        Las operaciones sobre los 2.000 m.s.n.m. (Collahuasi en 4.500 m, El Teniente en 2.000 m,
        Quebrada Blanca en 4.400 m) tienen un desafío adicional: la condensación nocturna intensa
        y los ciclos de congelamiento/descongelamiento aceleran la oxidación.
      </p>
      <p>
        Para estas altitudes recomendamos imprimante anticorrosivo epoxi base agua + capa de
        terminación electrostática. Esta combinación duplica la resistencia a la oxidación respecto
        al estándar de las faenas del llano. Las soldaduras deben ser continuas sin poros donde
        pueda acumularse humedad.
      </p>

      <h2>3. Centros acuícolas y salmoneras (Los Lagos, Aysén, Magallanes)</h2>
      <p>
        El ambiente marino del sur es el más agresivo de todos para los acabados metálicos.
        Alta humedad permanente, brisa salina, precipitaciones constantes y temperaturas bajas.
      </p>
      <p>
        Para salmoneras y centros acuícolas en Los Lagos, Chiloé, Aysén y Magallanes, el
        galvanizado en caliente es la mejor opción si el presupuesto lo permite. El zinc forma
        una capa catódica que protege el acero base incluso si hay un rasguño o corte. Si el
        galvanizado está fuera del presupuesto, el imprimante epoxi + electrostática es el
        segundo estándar aceptable.
      </p>

      <h2>Qué pedir al cotizar para minería</h2>
      <ul>
        <li><strong>Espesor del tubo:</strong> pide 1,5 mm en especificación escrita, no "estándar".</li>
        <li><strong>Proceso de soldadura:</strong> MIG/MAG, cordones continuos. No puntos.</li>
        <li><strong>Tipo de pintura:</strong> electrostática al horno mínimo; epoxi + electrostática para faenas con humedad o altura.</li>
        <li><strong>Sistema de fijación entre niveles:</strong> tornillo hexagonal con tuerca autoblocante. No sistemas a presión.</li>
        <li><strong>Despacho a faena:</strong> pide precio con despacho incluido. El transporte a faenas remotas puede representar el 20–40% del costo total.</li>
      </ul>

      <CTAWhatsApp mensaje="Hola, necesito cotizar camarotes para campamento minero. Empresa: [NOMBRE]. Cantidad: [UNIDADES]. Faena / Región: [DATO]. Configuración: [2 / 3 NIVELES]." />
    </>
  ),

  "cama-loft-vs-camarote-diferencia": () => (
    <>
      <p>
        Es la pregunta que más llega por WhatsApp: "¿me conviene la cama loft o el camarote?".
        La respuesta es simple cuando entiendes qué resuelve cada una.
      </p>

      <h2>¿Cuál es la diferencia real?</h2>
      <p>
        <strong>Cama loft:</strong> una sola cama en el nivel alto. El espacio de abajo está completamente
        libre. Lo usas para lo que necesites — escritorio, sofá, armario, espacio de juego, estudio.
        Solo duerme una persona.
      </p>
      <p>
        <strong>Camarote:</strong> dos camas, una arriba y una abajo. Duermen dos personas. El objetivo
        principal es acomodar dos personas en el espacio vertical de una sola cama. No hay espacio
        libre abajo porque hay una cama.
      </p>

      <h2>¿Cuándo elegir la cama loft?</h2>
      <p>
        La cama loft resuelve el problema de tener una pieza pequeña con una sola persona. La cama
        sube al nivel alto, el espacio del suelo queda libre para escritorio, armario o lo que
        necesites. Es la solución ideal para:
      </p>
      <ul>
        <li>Estudiantes universitarios en piezas arrendadas pequeñas</li>
        <li>Departamentos estudio o de un dormitorio donde el espacio es mínimo</li>
        <li>Niños o adolescentes que quieren su escritorio y zona de juegos bajo la cama</li>
        <li>Adultos que trabajan desde casa y necesitan escritorio en el cuarto</li>
      </ul>

      <h2>¿Cuándo elegir el camarote?</h2>
      <p>
        El camarote resuelve el problema de acomodar dos personas en el espacio que ocuparía
        una sola cama. Es la solución ideal para:
      </p>
      <ul>
        <li>Hermanos que comparten cuarto</li>
        <li>Piezas de hostal o residencial con dos personas</li>
        <li>Campamentos donde maximizar la capacidad de alojamiento por metro cuadrado</li>
        <li>Habitaciones de internado con dos personas</li>
      </ul>

      <h2>El criterio decisivo: ¿cuántas personas duermen?</h2>
      <p>
        Si duerme una persona → cama loft.<br />
        Si duermen dos → camarote.
      </p>
      <p>
        Todo lo demás (precio, tamaño, diseño) es secundario a esta distinción básica. El error
        más común es comprar un camarote para una sola persona "para tener espacio de estudio abajo"
        — eso se resuelve mucho mejor con una loft que tiene más altura libre bajo la cama.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito cotizar: [CAMA LOFT / CAMAROTE]. Medida: [1 PLAZA / 1,5 PLAZAS / 2 PLAZAS]. Color: [DATO]. Cantidad: [UNIDADES]." />
    </>
  ),

  "como-elegir-camarotes-para-internado": () => (
    <>
      <p>
        Si eres encargado de adquisiciones o directivo de un colegio con internado, sabes que comprar
        camarotes para un internado no es lo mismo que comprar camarotes para un dormitorio. El nivel
        de uso es completamente diferente — y el precio no es el único criterio que importa.
      </p>

      <h2>Lo que diferencia un internado de un dormitorio familiar</h2>
      <p>
        En un dormitorio familiar, una cama puede tener un solo usuario durante años. En un internado,
        la misma cama puede tener 3 o 4 usuarios distintos en un mismo año lectivo, más el personal
        de aseo que la limpia con cloro varias veces por semana, más las inspecciones, visitas y
        eventualmente traslados de habitación.
      </p>
      <p>
        Un mueble que dura 10 años en un dormitorio puede durar 3–4 años en un internado si no
        está diseñado para ese nivel de uso.
      </p>

      <h2>Especificaciones mínimas para un camarote de internado</h2>
      <ul>
        <li><strong>Espesor de tubo:</strong> mínimo 1,5 mm. Los camarotes de retail estándar usan 1,0–1,2 mm.</li>
        <li><strong>Proceso de soldadura:</strong> MIG con cordones continuos, no puntos.</li>
        <li><strong>Acabado:</strong> pintura electrostática al horno (no spray convencional). Resiste cloro y desinfectantes sin descascararse.</li>
        <li><strong>Escalera:</strong> integrada con peldaños anchos (20 cm mínimo), no travesaños angostos.</li>
        <li><strong>Baranda:</strong> lateral en el nivel superior, mínimo 30 cm de altura.</li>
        <li><strong>Sin tornillos expuestos:</strong> todos los tornillos embebidos o con tapa. Facilita el aseo y evita cortes.</li>
        <li><strong>Fijación entre niveles:</strong> tornillo hexagonal con tuerca autoblocante + seguro de acero.</li>
      </ul>

      <h2>Cómo comparar cotizaciones</h2>
      <p>
        Cuando recibas cotizaciones, pide específicamente que te indiquen el espesor del tubo,
        el proceso de soldadura y el tipo de pintura. Si un proveedor no puede responder esas
        tres preguntas, el producto probablemente no cumple los estándares que necesitas.
      </p>
      <p>
        La diferencia de precio entre un camarote residencial de 1,2 mm pintado a spray y uno
        institucional de 1,5 mm pintado al horno puede ser un 30–40% por unidad. Pero si el
        residencial dura 3 años en el internado y el institucional dura 10, el costo total por
        año de vida útil es significativamente menor con el institucional.
      </p>

      <h2>Sobre el precio institucional</h2>
      <p>
        Los fabricantes directos ofrecen precio institucional para compras de 10 unidades o más.
        Eso incluye descuento por volumen, facturación a nombre de la institución (RUT colegio),
        coordinación de entrega por etapas si se requiere y soporte post-entrega. Asegúrate de
        cotizar directamente con fabricantes, no con distribuidores que agregan margen sin agregar
        valor.
      </p>

      <CTAWhatsApp mensaje="Hola, necesito cotizar camarotes para internado de colegio. Institución: [NOMBRE]. Cantidad: [UNIDADES]. Configuración: [2 / 3 NIVELES]. Ciudad: [CIUDAD]." />
    </>
  ),
};
