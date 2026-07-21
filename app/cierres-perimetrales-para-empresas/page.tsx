import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cierres Perimetrales para Empresas | B2B Chile",
  description:
    "Cierres perimetrales para empresas en Chile: bodegas, industrias, faenas y condominios. Fabricante con cotización B2B, factura electrónica y despacho a todo Chile.",
  keywords: [
    "cierres perimetrales para empresas",
    "cierre perimetral industrial chile",
    "cerco perimetral empresa chilena",
    "cierres metalicos empresas chile",
  ],
  alternates: { canonical: "https://rinon.cl/cierres-perimetrales-para-empresas" },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const faqs = [
  {
    q: "¿Hacen visita técnica al terreno?",
    a: "Sí. Para proyectos empresariales coordinamos visita técnica gratuita en Santiago y regiones. La visita permite levantar medidas, evaluar el terreno y entregar un presupuesto más preciso.",
  },
  {
    q: "¿Emiten factura electrónica?",
    a: "Sí. Emitimos factura electrónica para todos los proyectos empresariales. Trabajamos con constructoras, inmobiliarias, bodegas y empresas de todos los rubros.",
  },
  {
    q: "¿Cuál es el plazo para proyectos grandes?",
    a: "Para proyectos de más de 100 metros lineales, el plazo de fabricación es de 10 a 20 días hábiles según volumen. Coordinamos la entrega e instalación por etapas si es necesario.",
  },
  {
    q: "¿Hacen instalación o solo fabrican?",
    a: "Fabricamos e instalamos. Nuestro equipo se encarga de la instalación en la Región Metropolitana y coordinamos instalación en regiones con nuestros instaladores asociados.",
  },
];

const cards = [
  {
    t: "Cotización técnica con visita",
    d: "Para proyectos empresariales coordinamos visita al terreno, levantamiento de medidas y cotización detallada por ítem.",
  },
  {
    t: "Factura electrónica",
    d: "Emitimos factura electrónica. Respaldo tributario completo para tu empresa, constructora o institución.",
  },
  {
    t: "Despacho en camión",
    d: "Los materiales se despachan en camión propio o coordinado a cualquier punto de Chile. No dependes de logística externa.",
  },
  {
    t: "Proyectos llave en mano",
    d: "Desde la medición hasta la última grapa instalada. Precio global que incluye materiales, instalación y limpieza de obra.",
  },
];

const sectores = [
  "Industria manufacturera",
  "Minería y faenas",
  "Construcción e inmobiliarias",
  "Logística y bodegas",
  "Condominios y conjuntos",
  "Plantas de tratamiento",
];

const links = [
  { href: "/cierres-perimetrales", label: "Cierres perimetrales", desc: "Página principal del producto" },
  { href: "/cierres-para-bodegas", label: "Cierres para bodegas", desc: "Soluciones para centros de distribución" },
  { href: "/cierres-para-industrias", label: "Cierres para industrias", desc: "Uso industrial pesado" },
  { href: "/cierres-para-constructoras", label: "Cierres para constructoras", desc: "Obras y proyectos en altura" },
  { href: "/cierre-perimetral-industrial", label: "Cierre perimetral industrial", desc: "Alta resistencia y calibres reforzados" },
];

export default function CierresPerimetralesEmpresasPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl" },
              { "@type": "ListItem", position: 2, name: "Cierres Perimetrales", item: "https://rinon.cl/cierres-perimetrales" },
              { "@type": "ListItem", position: 3, name: "Para Empresas", item: "https://rinon.cl/cierres-perimetrales-para-empresas" },
            ],
          }),
        }}
      />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Empresas</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            Para empresas · Factura electrónica
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Cierres Perimetrales para Empresas
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Fabricamos cierres perimetrales para bodegas, industrias, constructoras y faenas en
            todo Chile. Cotización técnica con visita, factura electrónica, despacho en camión y
            proyectos llave en mano.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6 leading-relaxed">
            Trabajamos con empresas de todos los tamaños — desde la bodega de distribución hasta
            el parque industrial de gran escala. Sin intermediarios: fabricamos nosotros y te
            entregamos precio de taller.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={getWAUrl("Hola, somos una empresa y queremos cotizar un cierre perimetral. ¿Pueden enviarnos información y visitar el terreno?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              Cotizar para mi empresa
            </a>
            <Link
              href="/cierres-perimetrales"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors"
            >
              Ver tipos de cierres
            </Link>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Lo que incluye una cotización B2B</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((c) => (
              <div key={c.t} className="bg-zinc-50 border border-zinc-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{c.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores a los que atendemos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {sectores.map((s) => (
              <div key={s} className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700">
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Preguntas frecuentes para empresas</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all"
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros tiene el perímetro de su predio?</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">
            Con metros, altura y tipo de uso cotizamos en el día. Factura electrónica y visita técnica incluidas para empresas.
          </p>
          <a
            href={getWAUrl("Hola, somos una empresa y queremos cotizar un cierre perimetral. ¿Pueden enviarnos información y visitar el terreno?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
