import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Fabricante Rejas Metálicas Chile | Sin Intermediarios",
  description:
    "Fabricamos rejas metálicas en Chile: frontis, seguridad, jardín, balcón, ventana. Taller propio en Santiago, despacho nacional. Sin intermediarios — precio de fábrica.",
  keywords: [
    "fabricante rejas metalicas chile",
    "fabricante reja metalica santiago",
    "rejas metalicas fabrica directa",
    "fabricante rejas seguridad chile",
  ],
  alternates: { canonical: "https://rinon.cl/fabricante-rejas-metalicas-chile" },
  openGraph: {
    title: "Fabricante de Rejas Metálicas en Chile — Sin Intermediarios",
    description: "Fabricamos rejas metálicas en Chile. Taller propio en Santiago, precio de fábrica.",
    type: "website",
    locale: "es_CL",
  },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const tipos = [
  { titulo: "Rejas de frontis", desc: "Rejas para el frente de la casa: diseño a medida del acceso, con estética y seguridad combinadas.", icono: "🏠" },
  { titulo: "Rejas de seguridad", desc: "Rejas reforzadas para puertas, accesos y ventanas de zonas de mayor exposición.", icono: "🔒" },
  { titulo: "Rejas de jardín", desc: "Cierres y divisiones de jardín con diseño liviano y decorativo, adaptados al terreno.", icono: "🌿" },
  { titulo: "Rejas de balcón", desc: "Barandas y rejas de protección para balcones de departamentos y casas de dos pisos.", icono: "🏢" },
  { titulo: "Rejas de ventana", desc: "Protecciones de ventana estándar o decorativas, fabricadas a la medida del vano.", icono: "🪟" },
  { titulo: "Rejas para locales y colegios", desc: "Rejas robustas para locales comerciales, colegios y recintos con alto tránsito.", icono: "🏬" },
];

const proceso = [
  { paso: "1", titulo: "Medición", desc: "Tomamos medidas exactas del vano o perímetro, en terreno o con las medidas que nos envíes." },
  { paso: "2", titulo: "Diseño", desc: "Definimos el diseño, tipo de perfil y acabado según tu estética y necesidad de seguridad." },
  { paso: "3", titulo: "Fabricación", desc: "Fabricamos en nuestro taller controlando soldaduras, calibre del acero y terminaciones." },
  { paso: "4", titulo: "Pintura", desc: "Aplicamos anticorrosivo y pintura, con opción de pintura electrostática al horno." },
  { paso: "5", titulo: "Instalación", desc: "Instalamos en Santiago y coordinamos despacho a regiones para todo Chile." },
];

const faqs = [
  { q: "¿Son fabricantes o revendedores de rejas?", a: "Somos fabricantes. Producimos las rejas en nuestro taller en Santiago, no revendemos. Por eso ofrecemos precio de fábrica y podemos fabricar cualquier diseño a medida." },
  { q: "¿Fabrican rejas a medida?", a: "Sí. Todas nuestras rejas se fabrican a la medida exacta del vano o perímetro. No trabajamos con medidas estándar de tienda: cada reja se hace para tu espacio." },
  { q: "¿Incluyen instalación?", a: "Instalamos en Santiago y la Región Metropolitana. La fabricación y la instalación se cotizan por separado, así puedes contratar solo la reja o el servicio completo." },
  { q: "¿Qué acabado tienen las rejas?", a: "Van con anticorrosivo y pintura. Recomendamos pintura electrostática al horno para mayor durabilidad y resistencia a la intemperie." },
];

const links = [
  { href: "/rejas-metalicas", label: "Rejas metálicas", desc: "Página principal del producto" },
  { href: "/rejas-de-seguridad", label: "Rejas de seguridad", desc: "Rejas reforzadas" },
  { href: "/rejas-decorativas", label: "Rejas decorativas", desc: "Diseños ornamentales" },
  { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "Mayor resistencia a la corrosión" },
];

export default function FabricanteRejasMetalicasChilePage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Manufacturer"],
        name: "Rinon.cl — Fabricante de Rejas Metálicas",
        description: "Fabricante directo de rejas metálicas en Chile: frontis, seguridad, jardín, balcón y ventana.",
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
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Fabricante Chile</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🏭 Fabricación propia · Sin intermediarios · Chile
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Fabricante de Rejas Metálicas en Chile — Sin Intermediarios
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos rejas metálicas en nuestro taller en Santiago y despachamos a todo Chile.
            Frontis, seguridad, jardín, balcón, ventana, locales comerciales y colegios. Al ser
            fabricantes directos, te damos precio de fábrica y fabricamos cada reja a la medida
            exacta de tu espacio.
          </p>
          <a href={getWAUrl("Hola, quiero cotizar rejas metálicas con el fabricante directo. El tipo que necesito es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos de rejas que fabricamos</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestro proceso de fabricación</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
          <h2 className="text-2xl font-bold mb-2">Habla directo con el fabricante</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Sin intermediarios, precio de fábrica. Cotiza tu reja por WhatsApp.</p>
          <a href={getWAUrl("Hola, quiero cotizar rejas metálicas con el fabricante directo. El tipo que necesito es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
