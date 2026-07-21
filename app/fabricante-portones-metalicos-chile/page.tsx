import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Fabricante Portones Metálicos Chile | Santiago",
  description:
    "Fabricamos portones metálicos a medida en Chile: corredizos, batientes, seccionales, automáticos. Fabricante directo en Santiago. Cotiza tu porton por WhatsApp.",
  keywords: [
    "fabricante portones metalicos chile",
    "fabricante porton corredizo chile",
    "portones metalicos fabrica directa",
    "fabricante portones santiago",
  ],
  alternates: { canonical: "https://rinon.cl/fabricante-portones-metalicos-chile" },
  openGraph: {
    title: "Fabricante de Portones Metálicos en Chile — Santiago",
    description: "Fabricamos portones metálicos a medida en Chile: corredizos, batientes, automáticos.",
    type: "website",
    locale: "es_CL",
  },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const tipos = [
  { titulo: "Portones corredizos", desc: "Portones de riel que se desplazan a un costado. Ideales cuando no hay espacio para abrir hacia adentro o afuera.", icono: "↔️" },
  { titulo: "Portones batientes", desc: "Portones de una o dos hojas que abren hacia dentro o fuera. Solución clásica para accesos vehiculares.", icono: "🚪" },
  { titulo: "Portones seccionales", desc: "Portones de paneles que suben en secciones, aprovechando el techo. Comunes en galpones y estacionamientos.", icono: "⬆️" },
  { titulo: "Portones automáticos", desc: "Cualquiera de nuestros portones con motor y control remoto. Incluimos automatización y sensores de seguridad.", icono: "🎛️" },
];

const materiales = [
  { titulo: "Perfil tubular", desc: "Estructura de perfil tubular soldado, liviana y resistente, para portones residenciales y de frontis." },
  { titulo: "Acero galvanizado", desc: "Acero con galvanizado para portones expuestos a la intemperie o ambientes húmedos e industriales." },
  { titulo: "Plancha y láminas", desc: "Portones ciegos con plancha lisa o perforada para mayor privacidad y seguridad." },
  { titulo: "Rejería decorativa", desc: "Combinaciones de perfil y rejería ornamental para portones con estética a la vista." },
];

const proceso = [
  { paso: "1", titulo: "Medición", desc: "Medimos el vano del acceso en terreno o con tus medidas y fotos." },
  { paso: "2", titulo: "Diseño", desc: "Definimos tipo de portón, material, apertura y si lleva automatización." },
  { paso: "3", titulo: "Fabricación", desc: "Fabricamos en taller con control de soldaduras y estructura." },
  { paso: "4", titulo: "Instalación", desc: "Instalamos, montamos rieles o bisagras y dejamos operativo el motor si aplica." },
];

const faqs = [
  { q: "¿Fabrican portones a medida?", a: "Sí. Todos nuestros portones se fabrican a la medida exacta del acceso. Medimos el vano y fabricamos según tus necesidades de apertura y seguridad." },
  { q: "¿Instalan la automatización?", a: "Sí. Instalamos motor, riel, control remoto y sensores de seguridad. Puedes pedir el portón ya automatizado o preparado para motorizar después." },
  { q: "¿Qué tipo de portón conviene para mi acceso?", a: "Depende del espacio: el corredizo conviene cuando no hay lugar para abrir hojas, el batiente es más económico y el seccional aprovecha el techo. Te asesoramos al cotizar." },
  { q: "¿Despachan a regiones?", a: "Instalamos en Santiago y la Región Metropolitana. Para regiones coordinamos despacho del portón fabricado; consúltanos según la comuna." },
];

const links = [
  { href: "/portones-metalicos", label: "Portones metálicos", desc: "Página principal del producto" },
  { href: "/portones-corredizos", label: "Portones corredizos", desc: "De riel lateral" },
  { href: "/portones-batientes", label: "Portones batientes", desc: "De una o dos hojas" },
  { href: "/portones-automaticos", label: "Portones automáticos", desc: "Con motor y control" },
  { href: "/portones-de-acero", label: "Portones de acero", desc: "Máxima resistencia" },
];

export default function FabricantePortonesMetalicosChilePage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Manufacturer"],
        name: "Rinon.cl — Fabricante de Portones Metálicos",
        description: "Fabricante directo de portones metálicos a medida en Chile: corredizos, batientes, seccionales, automáticos.",
        areaServed: { "@type": "Country", name: "Chile" },
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
        makesOffer: tipos.map(t => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: t.titulo, description: t.desc } })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/portones-metalicos" className="hover:text-gray-600">Portones metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Fabricante Chile</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🏭 Fabricación propia · A medida · Santiago
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Fabricante de Portones Metálicos en Chile — Santiago
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos portones metálicos a medida en nuestro taller en Santiago: corredizos,
            batientes, seccionales y automáticos. Al ser fabricantes directos, te damos precio de
            fábrica, fabricamos a la medida exacta de tu acceso y podemos automatizar el portón con
            motor y control remoto.
          </p>
          <a href={getWAUrl("Hola, quiero cotizar un portón metálico con el fabricante directo. El tipo que necesito es: [DESCRIPCIÓN]. Medida del vano: [ANCHO x ALTO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos de portones que fabricamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tipos.map(t => (
              <div key={t.titulo} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
                <span className="text-2xl flex-shrink-0">{t.icono}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{t.titulo}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Materiales y terminaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {materiales.map(m => (
              <div key={m.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{m.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {proceso.map(p => (
              <div key={p.paso} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm mb-3">{p.paso}</div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{p.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map(f => (
              <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu portón con el fabricante</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Precio de fábrica, fabricación a medida y automatización. Cotiza por WhatsApp.</p>
          <a href={getWAUrl("Hola, quiero cotizar un portón metálico con el fabricante directo. El tipo que necesito es: [DESCRIPCIÓN]. Medida del vano: [ANCHO x ALTO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
