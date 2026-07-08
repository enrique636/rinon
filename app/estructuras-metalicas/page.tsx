import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Estructuras Metálicas a Pedido en Santiago — Fabricante | Buenos Pal Catre",
  description:
    "Fabricamos estructuras metálicas a pedido en Santiago: pérgolas, racks, mezzanines, escaleras, soportes y estructuras a medida en acero. Diseño + fabricación + instalación.",
  keywords: [
    "estructuras metálicas a pedido Santiago",
    "fabricación estructuras metálicas Chile",
    "estructuras acero Santiago",
    "estructuras metálicas a medida",
    "fabricante estructuras metálicas Santiago",
    "estructuras industriales metálicas Chile",
    "mezzanine metálico Santiago",
    "pérgola metálica Santiago",
    "rack metálico a pedido",
    "soldadura estructural Santiago",
    "estructuras acero inoxidable Chile",
  ],
  alternates: { canonical: "https://rinon.cl/estructuras-metalicas" },
  openGraph: {
    title: "Estructuras Metálicas a Pedido en Santiago — Fabricante Directo",
    description: "Fabricamos estructuras metálicas: pérgolas, racks, mezzanines, escaleras y estructuras a medida. Diseño, fabricación e instalación.",
    type: "website",
    locale: "es_CL",
  },
};

const WA_NUM = SITE_CONFIG.whatsapp.numero;
const getWA = (msg: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;

export default function EstructurasMetalicasPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Manufacturer"],
        name: "Buenos Pal Catre — Estructuras Metálicas",
        description: "Fabricante de estructuras metálicas a pedido en Santiago. Pérgolas, racks, mezzanines, escaleras y estructuras a medida.",
        areaServed: { "@type": "Country", name: "Chile" },
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Estructuras metálicas a pedido",
          itemListElement: [
            "Pérgolas metálicas", "Racks industriales", "Mezzanines de acero",
            "Escaleras metálicas", "Soportes y estructuras de apoyo", "Rejas y portones"
          ].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
        },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Fabrican estructuras metálicas a medida?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos cualquier estructura metálica según plano o diseño del cliente. No usamos catálogos fijos — cada proyecto parte de cero con las medidas y especificaciones del cliente." } },
          { "@type": "Question", name: "¿Qué materiales usan para las estructuras metálicas?", acceptedAnswer: { "@type": "Answer", text: "Trabajamos principalmente con acero estructural (perfiles L, C, cuadrado, rectangular y tubo redondo). Para proyectos que requieran mayor resistencia a la corrosión, usamos acero inoxidable o aluminio. El material se define según el uso, la carga y el presupuesto." } },
          { "@type": "Question", name: "¿Pueden fabricar sin planos — solo con una idea?", acceptedAnswer: { "@type": "Answer", text: "Sí. Muchos de nuestros clientes llegan con una foto de referencia o una descripción verbal. Nuestro equipo puede ayudarte a definir las especificaciones, calcular la carga y proponer el diseño antes de fabricar." } },
        ],
      }) }} />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Estructuras Metálicas</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🔩 Fabricante · Diseño + fabricación + instalación · Santiago
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Estructuras Metálicas a Pedido en Santiago — Fabricante Directo
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-3">
            Fabricamos estructuras metálicas a medida para proyectos residenciales, comerciales
            e industriales en Santiago y todo Chile. Pérgolas, racks, mezzanines, escaleras,
            soportes y cualquier estructura de acero que necesites.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Tenemos taller propio con equipos de corte, doblez y soldadura. No subcontratamos
            la fabricación — desde el diseño hasta la pintura electrostática del acabado final,
            todo sale del mismo taller. Eso es lo que nos permite controlar los plazos y la calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={getWA("Hola, necesito fabricar una estructura metálica a pedido. ¿Pueden ayudarme con la cotización?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">
              Cotizar mi estructura
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">
              Enviar planos por email
            </a>
          </div>
        </div>

        {/* Tipos de estructuras */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Estructuras que fabricamos</h2>
          <p className="text-gray-500 text-sm mb-6">No es catálogo fijo. Cada proyecto parte de tu necesidad específica.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                emoji: "🏗️",
                titulo: "Mezzanines y entrepisos",
                desc: "Ampliamos el espacio útil de bodegas, talleres y locales comerciales construyendo un segundo nivel de acero. Diseñamos según la carga, el uso y la normativa de construcción.",
                usos: ["Bodegas de logística", "Talleres industriales", "Locales con doble nivel"],
              },
              {
                emoji: "🪜",
                titulo: "Escaleras metálicas",
                desc: "Escaleras rectas, de caracol y tipo escalerilla. Interiores y exteriores. Con barandas, sin barandas, en acero bruto o con pintura electrostática.",
                usos: ["Acceso a mezzanines", "Escaleras de servicio", "Salidas de emergencia"],
              },
              {
                emoji: "📦",
                titulo: "Racks y estanterías industriales",
                desc: "Sistemas de almacenamiento vertical para bodegas. Calculamos la carga por nivel y diseñamos según el producto a almacenar.",
                usos: ["Bodegas de producto terminado", "Depósitos de materiales", "Almacenamiento de pallets"],
              },
              {
                emoji: "🌿",
                titulo: "Pérgolas y estructuras de terraza",
                desc: "Pérgolas residenciales y comerciales en acero. Más duraderas que las de madera, resistentes a la lluvia y al sol. Con o sin cubierta de policarbonato.",
                usos: ["Terrazas de casas", "Restaurantes y cafés", "Jardines y quinchos"],
              },
              {
                emoji: "🚪",
                titulo: "Rejas, portones y cercos",
                desc: "Rejas de ventana, portones de acceso vehicular y cercos perimetrales. En acero pintado o galvanizado según la exposición al ambiente.",
                usos: ["Seguridad residencial", "Accesos industriales", "Cerramiento de predios"],
              },
              {
                emoji: "🔧",
                titulo: "Soportes y estructuras especiales",
                desc: "Soportes para maquinaria, bases antivibración, estructuras de soporte para equipos y cualquier elemento que requiera un diseño específico.",
                usos: ["Industria y manufactura", "Equipos de refrigeración", "Instalaciones técnicas"],
              },
            ].map((t) => (
              <div key={t.titulo} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-400 hover:shadow-sm transition-all">
                <span className="text-3xl block mb-3">{t.emoji}</span>
                <h3 className="font-bold text-gray-900 mb-2">{t.titulo}</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{t.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.usos.map(u => <span key={u} className="text-xs bg-gray-100 text-gray-600 rounded-full px-2.5 py-1">{u}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Materiales */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Materiales que trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                titulo: "Acero estructural",
                desc: "El material más versátil y económico. Perfiles L, C, H, tubo cuadrado, rectangular y redondo. Resistente a cargas altas. Se termina con pintura electrostática o esmalte.",
                ideal: "Mezzanines, racks, escaleras, estructuras de carga",
              },
              {
                titulo: "Acero inoxidable",
                desc: "Para ambientes con exposición a humedad, agua o productos químicos. No requiere pintura. Mayor costo pero vida útil mucho mayor en condiciones exigentes.",
                ideal: "Industria alimentaria, ambientes costeros, piscinas",
              },
              {
                titulo: "Aluminio estructural",
                desc: "Liviano y resistente a la corrosión sin necesidad de pintura. Ideal para estructuras expuestas a la intemperie que no requieran soportar cargas muy altas.",
                ideal: "Pérgolas residenciales, estructuras de fachada, cubiertas ligeras",
              },
            ].map((m) => (
              <div key={m.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{m.titulo}</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{m.desc}</p>
                <p className="text-xs text-gray-400"><strong className="text-gray-600">Ideal para:</strong> {m.ideal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proceso */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cómo trabajamos un proyecto</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "1", t: "Consulta inicial", d: "Nos cuentas qué necesitas: medidas, uso, material preferido, presupuesto estimado. Puede ser por WhatsApp, email o visita." },
              { n: "2", t: "Propuesta técnica", d: "Nuestro equipo prepara una propuesta con el diseño, materiales, plazos y precio. Si tienes planos, los revisamos. Si no, los generamos." },
              { n: "3", t: "Fabricación", d: "Una vez aprobado el diseño, fabricamos en taller. Corte, doblez, soldadura y acabado (pintura electrostática incluida en la mayoría de los proyectos)." },
              { n: "4", t: "Instalación", d: "Coordinamos la entrega e instalación en el lugar final. Para estructuras complejas, incluimos plano de montaje y supervisión técnica." },
            ].map((p) => (
              <div key={p.n} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">{p.n}</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{p.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Fabrican sin planos — solo con una foto o descripción?", a: "Sí. Es lo más frecuente. La mayoría de nuestros clientes nos llega con una referencia fotográfica, una medida aproximada o simplemente describiendo el problema que quieren resolver. A partir de eso, elaboramos la propuesta técnica." },
              { q: "¿Qué tamaño máximo pueden fabricar?", a: "Depende de la capacidad de nuestro horno de pintura para el acabado. Para estructuras que no requieran pintura electrostática, podemos fabricar piezas más grandes. El límite real es el transporte hasta la obra — coordinamos la logística en cada proyecto." },
              { q: "¿Incluyen la instalación en el precio?", a: "Depende del proyecto. Para estructuras sencillas entregamos armadas listas para instalar con instrucciones. Para estructuras complejas o que requieran soldadura in situ, incluimos la instalación en la cotización." },
              { q: "¿Cuánto demora fabricar una estructura metálica?", a: "Una pieza pequeña o sencilla puede estar lista en 5-10 días hábiles. Proyectos más complejos (mezzanines, pérgolas grandes) toman 2-4 semanas. El plazo exacto se confirma al cotizar según la agenda del taller." },
              { q: "¿Trabajan para empresas con factura?", a: "Sí. Emitimos factura electrónica. Para empresas con proyectos frecuentes podemos evaluar condiciones de pago diferidas. Consúltanos." },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interlink */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Otros servicios del taller</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: "Pintura electrostática", href: "/pintura-electrostatica" },
              { label: "Camarotes metálicos", href: "/camarotes" },
              { label: "Camarotes para empresas", href: "/empresas" },
              { label: "Camarotes a medida", href: "/camarote-con-escritorio-a-medida" },
              { label: "Fabricante directo Chile", href: "/fabricante-camarotes-chile" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-white transition-all">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Tienes un proyecto en mente?</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">Cuéntanos qué necesitas. Planos, fotos o solo una descripción. Cotizamos sin compromiso.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={getWA("Hola, necesito fabricar una estructura metálica a pedido en Santiago. ¿Pueden ayudarme?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
              Cotizar por WhatsApp
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="inline-flex items-center gap-2 border-2 border-gray-600 text-white font-semibold px-8 py-4 rounded-full text-base hover:border-gray-400 transition-colors">
              Enviar planos por email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
