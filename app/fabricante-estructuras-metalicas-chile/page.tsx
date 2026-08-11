import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Fabricante Estructuras Metálicas | Santiago Chile",
  description:
    "Fabricamos estructuras metálicas a medida: pérgolas, racks, escaleras, mezzanines, barandas. Taller propio en Santiago. Fabricante directo para proyectos de cualquier escala.",
  keywords: [
    "fabricante estructuras metalicas chile",
    "fabricante metalico santiago",
    "estructuras metalicas a medida chile",
    "fabricante pergolas metalicas",
  ],
  alternates: { canonical: "https://rinon.cl/fabricante-estructuras-metalicas-chile" },
  openGraph: {
    title: "Fabricante de Estructuras Metálicas en Chile — Santiago",
    description: "Fabricamos estructuras metálicas a medida en Santiago: pérgolas, racks, escaleras, mezzanines.",
    type: "website",
    locale: "es_CL",
  },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const tipos = [
  { titulo: "Pérgolas metálicas", desc: "Pérgolas y quinchos con estructura de acero para terrazas, patios y espacios comerciales.", icono: "🏛️" },
  { titulo: "Racks y estanterías", desc: "Racks industriales, estanterías y soportes de carga para bodegas y centros de distribución.", icono: "🗄️" },
  { titulo: "Escaleras metálicas", desc: "Escaleras rectas, de caracol o industriales, con peldaños y pasamanos a medida.", icono: "🪜" },
  { titulo: "Mezzanines", desc: "Entrepisos metálicos para aprovechar altura en bodegas, locales y galpones.", icono: "🏗️" },
  { titulo: "Barandas metálicas", desc: "Barandas de seguridad para escaleras, balcones, rampas y pasarelas.", icono: "🛗" },
  { titulo: "Estructuras a pedido", desc: "Soportes, bastidores, marcos y cualquier estructura metálica especial según plano.", icono: "⚙️" },
];

const capacidades = [
  { titulo: "Fabricación según plano", desc: "Trabajamos con tus planos o levantamos el diseño con nuestro equipo para proyectos técnicos." },
  { titulo: "Soldadura certificada", desc: "Uniones soldadas con control de calidad, aptas para estructuras de carga y uso industrial." },
  { titulo: "Galvanizado y pintura", desc: "Terminaciones con galvanizado o pintura electrostática al horno para durabilidad exterior." },
  { titulo: "Cualquier escala", desc: "Desde una baranda residencial hasta mezzanines y estructuras para plantas industriales." },
];

const proceso = [
  { paso: "1", titulo: "Levantamiento", desc: "Recibimos tu plano o medimos en terreno para definir el alcance." },
  { paso: "2", titulo: "Ingeniería / diseño", desc: "Definimos perfiles, calibres y detalles constructivos de la estructura." },
  { paso: "3", titulo: "Fabricación", desc: "Cortamos, armamos y soldamos en taller con control de calidad." },
  { paso: "4", titulo: "Montaje", desc: "Instalamos y montamos en obra, con despacho a Santiago y regiones." },
];

const faqs = [
  { q: "¿Fabrican según plano de ingeniería?", a: "Sí. Trabajamos con planos de arquitectos e ingenieros, y también podemos desarrollar el diseño desde cero según tu requerimiento." },
  { q: "¿Qué escala de proyectos toman?", a: "Desde piezas y barandas residenciales hasta mezzanines, racks y estructuras para plantas industriales. Cotizamos proyectos de cualquier escala." },
  { q: "¿Incluyen montaje en obra?", a: "Sí. Montamos en obra en Santiago y la Región Metropolitana, y coordinamos despacho a regiones para el resto del país." },
  { q: "¿Qué terminación llevan las estructuras?", a: "Anticorrosivo y pintura estándar, con opción de galvanizado o pintura electrostática al horno para uso a la intemperie o industrial." },
];

const links = [
  { href: "/estructuras-metalicas", label: "Estructuras metálicas", desc: "Página principal del producto" },
  { href: "/estructuras-metalicas-a-pedido", label: "Estructuras a pedido", desc: "Fabricación especial" },
  { href: "/escaleras-metalicas", label: "Escaleras metálicas", desc: "Rectas, caracol, industriales" },
  { href: "/barandas-metalicas", label: "Barandas metálicas", desc: "Seguridad y protección" },
];

export default function FabricanteEstructurasMetalicasChilePage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Manufacturer", "LocalBusiness"],
        name: "Rinon.cl — Fabricante de Estructuras Metálicas",
        description: "Fabricante directo de estructuras metálicas a medida en Santiago: pérgolas, racks, escaleras, mezzanines, barandas.",
        areaServed: { "@type": "Country", name: "Chile" },
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
        makesOffer: tipos.map(t => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: `Fabricación de ${t.titulo}`, description: t.desc } })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/estructuras-metalicas" className="hover:text-gray-600">Estructuras metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Fabricante Chile</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🏭 Fabricación propia · Cualquier escala · Santiago
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Fabricante de Estructuras Metálicas en Chile — Santiago
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos estructuras metálicas a medida en nuestro taller en Santiago: pérgolas, racks,
            escaleras, mezzanines, barandas y estructuras a pedido. Trabajamos según plano o
            desarrollamos el diseño contigo, con capacidad para proyectos de cualquier escala.
          </p>
          <a href={getWAUrl("Hola, quiero cotizar estructuras metálicas con el fabricante directo. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Estructuras que fabricamos</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestras capacidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capacidades.map(c => (
              <div key={c.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{c.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
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
          <h2 className="text-2xl font-bold mb-2">Cotiza tu estructura con el fabricante</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Fabricación a medida según plano. Proyectos de cualquier escala. Cotiza por WhatsApp.</p>
          <a href={getWAUrl("Hola, quiero cotizar estructuras metálicas con el fabricante directo. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
