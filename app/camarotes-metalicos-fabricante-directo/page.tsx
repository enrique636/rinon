import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Metálicos Fabricante Directo | Chile",
  description:
    "Compra camarotes metálicos directo al fabricante en Chile. Sin intermediarios: precio real de taller. Residencial, industrial, campamentos. Despacho nacional con instalación.",
  keywords: [
    "camarotes metalicos fabricante directo",
    "camarotes directo fabrica chile",
    "comprar camarotes al fabricante",
    "camarotes sin intermediarios chile",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-metalicos-fabricante-directo" },
  openGraph: {
    title: "Camarotes Metálicos Fabricante Directo — Chile",
    description: "Compra camarotes metálicos directo al fabricante en Chile. Precio real de taller.",
    type: "website",
    locale: "es_CL",
  },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const diferencias = [
  { titulo: "Precio de taller real", desc: "En una tienda pagas el margen del distribuidor. Comprando directo al fabricante, ese margen es tuyo: el precio que ves es el de taller.", icono: "💰" },
  { titulo: "Fabricamos a medida", desc: "Una tienda vende lo que tiene en stock. Nosotros fabricamos según tu medida, altura de escalera o especificación de faena.", icono: "📐" },
  { titulo: "Sin límite de volumen", desc: "Una tienda tiene stock limitado. Como fabricantes hacemos desde 1 unidad hasta cientos de camarotes para campamentos.", icono: "📦" },
  { titulo: "Calidad controlada", desc: "Controlamos el calibre del acero, las soldaduras y el acabado en cada pieza. No dependemos de lo que llegue de un tercero.", icono: "🔩" },
];

const modelos = [
  { titulo: "Camarotes residenciales", desc: "Modelos para hogar: 1 plaza, 1.5 plazas, 2 plazas, con o sin escritorio integrado." },
  { titulo: "Camarotes industriales", desc: "Estructura reforzada de mayor calibre para uso intensivo en campamentos y faenas." },
  { titulo: "Camarotes para campamentos", desc: "Fabricación por volumen para minería, construcción, forestales y agrícolas." },
];

const proceso = [
  { paso: "1", titulo: "Cotización", desc: "Nos cuentas modelo, cantidad y destino. Te enviamos precio de taller por WhatsApp." },
  { paso: "2", titulo: "Fabricación", desc: "Fabricamos en nuestro taller con control de soldaduras y acabado." },
  { paso: "3", titulo: "Despacho", desc: "Coordinamos despacho a Santiago y regiones según tu ubicación." },
  { paso: "4", titulo: "Instalación", desc: "Armamos e instalamos en destino cuando el proyecto lo requiere." },
];

const faqs = [
  { q: "¿Qué diferencia hay entre comprarles a ustedes y a una tienda?", a: "Nosotros fabricamos. Una tienda revende y le suma su margen. Comprando directo al fabricante pagas precio de taller y puedes pedir medidas y especificaciones que una tienda no ofrece." },
  { q: "¿Fabrican para campamentos y empresas?", a: "Sí. Fabricamos desde una unidad hasta cientos de camarotes para campamentos mineros, constructoras, forestales y agrícolas. El precio mejora con el volumen y emitimos factura." },
  { q: "¿Incluyen despacho e instalación?", a: "Coordinamos despacho a Santiago y regiones, y ofrecemos instalación en terreno cuando el proyecto lo requiere. Se cotiza según cantidad y ubicación." },
  { q: "¿Cuál es el plazo de fabricación?", a: "Para modelos estándar suele ser de 1 a 2 semanas según stock. Para pedidos grandes o medidas especiales, de 2 a 4 semanas. Te confirmamos el plazo exacto al cotizar." },
];

const links = [
  { href: "/fabricante-camarotes-chile", label: "Fabricante de camarotes Chile", desc: "Página principal del fabricante" },
  { href: "/camarotes-al-por-mayor", label: "Camarotes al por mayor", desc: "Compra por volumen" },
  { href: "/camarotes", label: "Camarotes", desc: "Todos los modelos" },
  { href: "/camarotes-metalicos", label: "Camarotes metálicos", desc: "Línea metálica" },
];

export default function CamarotesMetalicosFabricanteDirectoPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Manufacturer"],
        name: "Rinon.cl — Camarotes Metálicos Fabricante Directo",
        description: "Fabricante directo de camarotes metálicos en Chile: residencial, industrial y campamentos. Sin intermediarios.",
        areaServed: { "@type": "Country", name: "Chile" },
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
        makesOffer: modelos.map(m => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: `Fabricación de ${m.titulo}`, description: m.desc } })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Fabricante directo</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🏭 Fabricante directo · Sin intermediarios · Chile
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Camarotes Metálicos — Fabricante Directo en Chile
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Compra tus camarotes metálicos directo al fabricante, sin pasar por tiendas ni
            intermediarios. Fabricamos en nuestro taller en Santiago y despachamos a todo Chile:
            residencial, industrial y campamentos. El precio que ves es el precio real de taller.
          </p>
          <a href={getWAUrl("Hola, quiero comprar camarotes metálicos directo al fabricante. Necesito: [MODELO] · Cantidad: [N].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprar al fabricante vs. comprar en tienda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {diferencias.map(d => (
              <div key={d.titulo} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
                <span className="text-2xl flex-shrink-0">{d.icono}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{d.titulo}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modelos que fabricamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {modelos.map(m => (
              <div key={m.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{m.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cómo comprar</h2>
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
          <h2 className="text-2xl font-bold mb-2">Compra directo al fabricante</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Precio real de taller, sin intermediarios. Cotiza tus camarotes por WhatsApp.</p>
          <a href={getWAUrl("Hola, quiero comprar camarotes metálicos directo al fabricante. Necesito: [MODELO] · Cantidad: [N].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
