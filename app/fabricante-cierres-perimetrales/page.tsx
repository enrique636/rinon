import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Fabricante Cierres Perimetrales | Directo de Taller",
  description:
    "Fabricamos cierres perimetrales en Santiago: malla electrosoldada, reja tubular, cerco galvanizado. Sin intermediarios — precio de taller para empresas y particulares. Cotiza.",
  keywords: [
    "fabricante cierres perimetrales",
    "fabricante cerco perimetral chile",
    "cierres perimetrales directo fabrica",
    "fabricante malla perimetral",
  ],
  alternates: { canonical: "https://rinon.cl/fabricante-cierres-perimetrales" },
  openGraph: {
    title: "Fabricante de Cierres Perimetrales — Directo de Taller",
    description: "Fabricamos cierres perimetrales en Santiago. Sin intermediarios, precio de taller.",
    type: "website",
    locale: "es_CL",
  },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const tipos = [
  { titulo: "Malla electrosoldada", desc: "Paneles rígidos de malla electrosoldada con postes y accesorios. Rápido de instalar y económico para grandes perímetros.", icono: "🔲" },
  { titulo: "Reja tubular galvanizada", desc: "Reja de perfil tubular con tratamiento galvanizado, ideal para frontis de empresa y recintos con estética a la vista.", icono: "🚧" },
  { titulo: "Cerco de postes y tensores", desc: "Cerco tradicional con postes, tensores y malla ACMA o romboidal. Solución económica para grandes extensiones y terrenos.", icono: "📏" },
  { titulo: "Cerco antiescalamiento", desc: "Cierres de alta seguridad con perfilería reforzada y diseño antiescalamiento para faenas, bodegas y recintos críticos.", icono: "🛡️" },
  { titulo: "Cerco galvanizado pesado", desc: "Perfiles y mallas de mayor calibre con galvanizado en caliente para uso industrial y ambientes agresivos.", icono: "⚙️" },
];

const ventajas = [
  { titulo: "Precio sin margen de distribuidor", desc: "Fabricamos nosotros. El margen que un revendedor le suma al producto, lo ahorras tú. Pagas precio de taller.", icono: "💰" },
  { titulo: "Personalización metro a metro", desc: "Cotizamos por metro lineal según altura, tipo de malla y terreno. Sin paquetes rígidos: fabricamos exactamente lo que tu perímetro necesita.", icono: "📐" },
  { titulo: "Factura para empresa", desc: "Emitimos factura electrónica. Trabajamos con constructoras, inmobiliarias y empresas que requieren respaldo tributario.", icono: "🧾" },
  { titulo: "Despacho e instalación nacional", desc: "Coordinamos despacho e instalación en Santiago y regiones. Nos hacemos cargo desde la medición hasta el montaje.", icono: "🚚" },
];

const faqs = [
  { q: "¿Fabrican o revenden?", a: "Fabricamos. Producimos los cierres perimetrales en nuestro taller en Santiago. No revendemos productos de terceros, por eso podemos ofrecer precio de taller y fabricar a medidas específicas." },
  { q: "¿Pueden hacer proyectos grandes para constructoras?", a: "Sí. Tenemos capacidad de producción para proyectos de gran escala: obras, condominios, plantas industriales y loteos. Cotizamos por volumen con factura y visita técnica." },
  { q: "¿Cuál es el mínimo de metros?", a: "No manejamos un mínimo rígido: fabricamos desde tramos cortos para particulares hasta cientos de metros lineales para empresas. El precio por metro mejora con el volumen." },
  { q: "¿Cobran instalación aparte?", a: "El valor de fabricación y el de instalación se cotizan por separado, así puedes contratar solo la fabricación o el servicio completo. Al cotizar te detallamos ambos ítems." },
];

const links = [
  { href: "/cierres-perimetrales", label: "Cierres perimetrales", desc: "Página principal del producto" },
  { href: "/cercos-metalicos", label: "Cercos metálicos", desc: "Cercos y rejas perimetrales" },
  { href: "/cierres-para-constructoras", label: "Cierres para constructoras", desc: "Obras y proyectos" },
  { href: "/cierres-para-industrias", label: "Cierres para industrias", desc: "Uso industrial pesado" },
];

export default function FabricanteCierresPerimetralesPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Manufacturer"],
        name: "Rinon.cl — Fabricante de Cierres Perimetrales",
        description: "Fabricante directo de cierres perimetrales en Santiago: malla electrosoldada, reja tubular, cerco galvanizado.",
        areaServed: { "@type": "Country", name: "Chile" },
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
        makesOffer: tipos.map(t => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: `Fabricación e instalación de ${t.titulo}`, description: t.desc } })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Fabricante</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🏭 Fabricación propia · Sin intermediarios
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Fabricante de Cierres Perimetrales — Directo de Taller
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Somos el fabricante, no revendemos. Producimos cierres perimetrales en nuestro taller de
            Santiago: malla electrosoldada, reja tubular, cerco galvanizado y soluciones
            antiescalamiento. Eso nos permite darte precio de taller y fabricar exactamente a la
            medida de tu perímetro.
          </p>
          <a href={getWAUrl("Hola, quiero cotizar cierres perimetrales como fabricante directo. ¿Cuáles son sus precios?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos que fabricamos</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ventajas de comprar al fabricante</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ventajas.map(v => (
              <div key={v.titulo} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
                <span className="text-2xl flex-shrink-0">{v.icono}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{v.titulo}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
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
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Sin intermediarios, precio de taller. Cotización real por WhatsApp.</p>
          <a href={getWAUrl("Hola, quiero cotizar cierres perimetrales como fabricante directo. ¿Cuáles son sus precios?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
