import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cierres Perimetrales al Por Mayor | Chile",
  description:
    "Cierres perimetrales al por mayor en Chile: precios de volumen para constructoras, inmobiliarias y empresas. Fabricante directo con capacidad de producción para proyectos grandes.",
  keywords: [
    "cierres perimetrales por mayor",
    "cercos perimetrales mayorista chile",
    "venta mayor cierres perimetrales",
    "cierre perimetral precio volumen",
  ],
  alternates: { canonical: "https://rinon.cl/cierres-perimetrales-por-mayor" },
  openGraph: {
    title: "Cierres Perimetrales al Por Mayor — Chile",
    description: "Precios de volumen para constructoras, inmobiliarias y empresas. Fabricante directo.",
    type: "website",
    locale: "es_CL",
  },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const beneficios = [
  { titulo: "Descuento por volumen", desc: "El precio por metro lineal baja a medida que aumenta la cantidad. Para grandes perímetros el ahorro es significativo.", icono: "📉" },
  { titulo: "Capacidad de producción", desc: "Como fabricantes directos, tenemos capacidad para atender proyectos de cientos o miles de metros lineales.", icono: "🏭" },
  { titulo: "Factura para empresa", desc: "Emitimos factura electrónica y trabajamos con constructoras, inmobiliarias y empresas con respaldo tributario.", icono: "🧾" },
  { titulo: "Programación de despachos", desc: "Coordinamos entregas por etapas según el avance de tu obra, para que no tengas material acumulado.", icono: "🗓️" },
];

const aplican = [
  { titulo: "Constructoras y obras", desc: "Cierres de faena y perimetrales definitivos para condominios, loteos y edificios." },
  { titulo: "Inmobiliarias", desc: "Cierres perimetrales para proyectos residenciales y comerciales de gran extensión." },
  { titulo: "Empresas e industrias", desc: "Perímetros de plantas, bodegas, patios de acopio y recintos industriales." },
  { titulo: "Municipios y recintos", desc: "Cierres para colegios, canchas, plazas y recintos deportivos por volumen." },
];

const proceso = [
  { paso: "1", titulo: "Requerimiento", desc: "Nos envías metros lineales, altura y tipo de cierre requerido." },
  { paso: "2", titulo: "Cotización por volumen", desc: "Preparamos precio por metro con descuento según cantidad." },
  { paso: "3", titulo: "Producción", desc: "Programamos la fabricación según el plazo de tu proyecto." },
  { paso: "4", titulo: "Despacho e instalación", desc: "Entregamos por etapas e instalamos si contratas el servicio." },
];

const faqs = [
  { q: "¿Cuál es el mínimo para precio al por mayor?", a: "El precio por volumen aplica desde cantidades relevantes de metros lineales. Envíanos la extensión de tu proyecto y te confirmamos el tramo de descuento correspondiente." },
  { q: "¿Emiten factura para empresa?", a: "Sí. Emitimos factura electrónica y trabajamos habitualmente con constructoras, inmobiliarias y empresas que requieren respaldo tributario." },
  { q: "¿Pueden entregar por etapas?", a: "Sí. Programamos los despachos según el avance de tu obra, para que recibas el material a medida que lo necesitas." },
  { q: "¿Incluye instalación?", a: "La instalación se cotiza aparte y puedes contratarla o no. Muchas constructoras compran solo la fabricación y usan su propia cuadrilla de montaje." },
];

const links = [
  { href: "/cierres-perimetrales", label: "Cierres perimetrales", desc: "Página principal del producto" },
  { href: "/cierres-para-constructoras", label: "Cierres para constructoras", desc: "Obras y faenas" },
  { href: "/cierres-para-industrias", label: "Cierres para industrias", desc: "Uso industrial" },
  { href: "/cierres-para-bodegas", label: "Cierres para bodegas", desc: "Logística y acopio" },
];

export default function CierresPerimetralesPorMayorPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Manufacturer"],
        name: "Rinon.cl — Cierres Perimetrales al Por Mayor",
        description: "Fabricante de cierres perimetrales al por mayor en Chile, con precios de volumen para constructoras y empresas.",
        areaServed: { "@type": "Country", name: "Chile" },
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Al por mayor</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            📦 Precio de volumen · Fabricante directo
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Cierres Perimetrales al Por Mayor en Chile
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Somos fabricantes directos, por eso podemos ofrecer cierres perimetrales al por mayor con
            precio de volumen para constructoras, inmobiliarias y empresas. Tenemos capacidad de
            producción para proyectos de gran escala, con factura, despacho programado e instalación
            opcional.
          </p>
          <a href={getWAUrl("Hola, necesito cotizar cierres perimetrales al por mayor. Metros lineales: [M] · Altura: [H] · Tipo: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Beneficios de comprar por volumen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {beneficios.map(b => (
              <div key={b.titulo} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
                <span className="text-2xl flex-shrink-0">{b.icono}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{b.titulo}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Proyectos que aplican</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aplican.map(a => (
              <div key={a.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{a.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Proceso B2B</h2>
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
          <h2 className="text-2xl font-bold mb-2">Cotiza cierres perimetrales al por mayor</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Precio de volumen, factura y despacho programado. Cotiza tu proyecto por WhatsApp.</p>
          <a href={getWAUrl("Hola, necesito cotizar cierres perimetrales al por mayor. Metros lineales: [M] · Altura: [H] · Tipo: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
