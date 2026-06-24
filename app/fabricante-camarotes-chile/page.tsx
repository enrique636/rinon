import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Fabricante de Camarotes Metálicos en Chile — Directo de Fábrica | Camarotes Chile",
  description:
    "Somos fabricantes directos de camarotes metálicos en Chile. Sin intermediarios — precio de fábrica para particulares y empresas. Residencial y campamentos industriales. Despacho nacional.",
  keywords: [
    "fabricante camarotes Chile",
    "fábrica de camarotes Chile",
    "camarotes directo de fábrica",
    "fabricante literas Chile",
    "fabricante camarotes metálicos",
    "fabrica camarotes Santiago",
    "camarotes fabricación propia Chile",
    "fabricante camas metálicas Chile",
  ],
  alternates: { canonical: "https://dumar.cl/fabricante-camarotes-chile" },
  openGraph: {
    title: "Fabricante de Camarotes Metálicos en Chile — Sin Intermediarios",
    description: "Fabricamos camarotes metálicos en Chile. Precio de fábrica para particulares y empresas.",
    type: "website",
    locale: "es_CL",
  },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

export default function FabricanteCaramarotesPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Manufacturer"],
        name: "Camarotes Chile",
        description: "Fabricante de camarotes metálicos en Chile. Residencial, industrial, campamentos y proyectos.",
        areaServed: { "@type": "Country", name: "Chile" },
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
        makesOffer: products.map(p => ({
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: p.nombre, description: p.descripcion },
        })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Son fabricantes o revendedores?", acceptedAnswer: { "@type": "Answer", text: "Somos fabricantes. Fabricamos nosotros mismos en Chile. No revendemos productos de terceros. Eso nos permite ofrecer precio de fábrica y fabricar a medidas específicas para cada proyecto." } },
          { "@type": "Question", name: "¿Cuál es la ventaja de comprar directo al fabricante?", acceptedAnswer: { "@type": "Answer", text: "Sin intermediarios: el margen del distribuidor lo ahorras tú. Además, puedes solicitar modificaciones de medidas, colores o especificaciones que un revendedor no puede ofrecer." } },
          { "@type": "Question", name: "¿Fabrican para proyectos grandes como campamentos mineros?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos desde 1 unidad hasta pedidos de cientos de camarotes para campamentos mineros, constructoras, agrícolas y forestales. El precio mejora con el volumen." } },
        ],
      }) }} />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Fabricante de camarotes</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🏭 Fabricación propia · Sin intermediarios · Chile
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Fabricante de Camarotes Metálicos en Chile — Directo de Fábrica
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            No somos revendedores. Fabricamos nosotros mismos cada camarote.
            Eso nos permite ofrecer el precio más bajo del mercado y fabricar a las medidas
            o especificaciones que necesites — algo que ningún distribuidor puede ofrecerte.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={getWAUrl("Hola, quiero cotizar como particular. ¿Cuáles son los precios de sus camarotes?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">
              Cotizar como particular
            </a>
            <a href={getWAUrl("Hola, soy de una empresa y quiero cotizar camarotes para proyecto. ¿Pueden enviarme información?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">
              Cotizar para empresa
            </a>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Por qué importa ser fabricante?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                titulo: "Precio sin intermediarios",
                desc: "Un distribuidor compra al fabricante y le suma su margen (20-40%). Al comprar directo, ese margen es tuyo. El precio que ves es el precio de fábrica real.",
                icono: "💰",
              },
              {
                titulo: "Fabricamos a medida",
                desc: "Si tu pieza tiene 190 cm de largo o necesitas un camarote de 1.2m de ancho para una faena específica, lo fabricamos. Un revendedor no puede hacer eso.",
                icono: "📐",
              },
              {
                titulo: "Calidad controlada desde el origen",
                desc: "Controlamos el calibre del acero, las soldaduras y el acabado en cada pieza. No dependemos de lo que llegue de un proveedor externo.",
                icono: "🔩",
              },
              {
                titulo: "Pedidos sin límite de volumen",
                desc: "Un distribuidor tiene stock limitado. Como fabricantes, podemos hacer pedidos de 5 o de 200 camarotes con el mismo proceso de fabricación.",
                icono: "📦",
              },
              {
                titulo: "Fabricación chilena",
                desc: "Fabricamos en Chile con materiales locales. Eso nos permite plazos más cortos, soporte directo y contribución al empleo nacional.",
                icono: "🇨🇱",
              },
              {
                titulo: "Modificaciones posibles",
                desc: "Barniz, colores especiales, barandas adicionales, mayor altura de escalera: hablamos directamente con el área de producción. No hay intermediario que filtre tu pedido.",
                icono: "✏️",
              },
            ].map(v => (
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Qué fabricamos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3">Residencial</h3>
              <ul className="space-y-1.5">
                {products.map(p => (
                  <li key={p.id} className="flex gap-2 text-sm text-gray-600">
                    <span>{p.emoji}</span>
                    <Link href={`/${p.slug}`} className="hover:text-green-600 hover:underline">{p.nombre}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3">Industrial / Empresas</h3>
              <ul className="space-y-1.5">
                {[
                  { label: "Campamentos mineros", href: "/camarotes-mineria" },
                  { label: "Faenas y contratistas", href: "/camarotes-faenas" },
                  { label: "Constructoras", href: "/camarotes-construccion" },
                  { label: "Forestales", href: "/camarotes-forestales" },
                  { label: "Temporeros y agrícolas", href: "/camarotes-agricolas" },
                  { label: "Pedidos al por mayor", href: "/camarotes-al-por-mayor" },
                ].map(item => (
                  <li key={item.label} className="flex gap-2 text-sm text-gray-600">
                    <span>🏭</span>
                    <Link href={item.href} className="hover:text-green-600 hover:underline">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Son fabricantes o revendedores?", a: "Fabricantes. Fabricamos nosotros mismos en Chile. No revendemos productos de terceros. Eso nos permite precio de fábrica y fabricación a medida." },
              { q: "¿Puedo visitar la fábrica?", a: "Contáctanos primero por WhatsApp para coordinar. Las visitas a planta se coordinan con previa cita." },
              { q: "¿Cuál es el plazo de fabricación?", a: "Para modelos estándar: 1-2 semanas según stock. Para pedidos grandes o medidas especiales: 2-4 semanas. Te confirmamos el plazo exacto al cotizar." },
              { q: "¿Fabrican en acero inoxidable?", a: "Nuestros modelos estándar son en acero pintado. Para proyectos que requieran acero inoxidable u otras especificaciones de material, consúltanos — lo evaluamos caso a caso." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Habla directo con el fabricante</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Sin formularios, sin intermediarios. Cotización real en minutos.</p>
          <a href={getWAUrl("Hola, quiero cotizar camarotes. ¿Pueden ayudarme con precios y disponibilidad?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
