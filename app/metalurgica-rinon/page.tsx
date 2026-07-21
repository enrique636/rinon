import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Metalúrgica Rinon.cl | Fabricante Santiago Chile",
  description:
    "Metalúrgica Rinon: fabricantes de camarotes, rejas, portones, cercos perimetrales y estructuras metálicas en Santiago. Taller propio. Cotiza por WhatsApp.",
  keywords: [
    "metalurgica santiago",
    "metalurgica camarotes rejas portones",
    "fabrica metalica santiago chile",
    "metalurgica rinon",
  ],
  alternates: { canonical: "https://rinon.cl/metalurgica-rinon" },
  openGraph: {
    title: "Metalúrgica Rinon.cl — Fabricante en Santiago, Chile",
    description: "Fabricantes de camarotes, rejas, portones, cercos y estructuras metálicas en Santiago.",
    type: "website",
    locale: "es_CL",
  },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const lineas = [
  { titulo: "Camarotes metálicos", desc: "Residenciales, industriales y para campamentos. Fabricación por unidad o al por mayor.", href: "/camarotes-metalicos", icono: "🛏️" },
  { titulo: "Rejas metálicas", desc: "Frontis, seguridad, jardín, balcón y ventana, fabricadas a medida.", href: "/rejas-metalicas", icono: "🚧" },
  { titulo: "Portones metálicos", desc: "Corredizos, batientes, seccionales y automáticos a la medida del acceso.", href: "/portones-metalicos", icono: "🚪" },
  { titulo: "Cierres perimetrales", desc: "Malla electrosoldada, reja tubular y cerco galvanizado para casas y empresas.", href: "/cierres-perimetrales", icono: "🔲" },
  { titulo: "Estructuras metálicas", desc: "Pérgolas, racks, escaleras, mezzanines y estructuras a pedido según plano.", href: "/estructuras-metalicas", icono: "🏗️" },
  { titulo: "Pintura electrostática", desc: "Acabado al horno para rejas, portones, muebles y piezas metálicas.", href: "/pintura-electrostatica", icono: "🎨" },
];

const capacidades = [
  { titulo: "Taller propio en Santiago", desc: "Fabricamos en nuestras instalaciones, sin depender de terceros. Control total del proceso." },
  { titulo: "Soldadura y armado", desc: "Corte, doblado, armado y soldadura con control de calidad para uso residencial e industrial." },
  { titulo: "Terminaciones", desc: "Anticorrosivo, pintura y pintura electrostática al horno para durabilidad y estética." },
  { titulo: "Despacho e instalación", desc: "Despacho a Santiago y regiones, con instalación en terreno según proyecto." },
];

const proceso = [
  { paso: "1", titulo: "Contacto", desc: "Nos cuentas qué necesitas por WhatsApp y lo evaluamos." },
  { paso: "2", titulo: "Diseño / medición", desc: "Medimos, revisamos plano y definimos materiales y acabado." },
  { paso: "3", titulo: "Fabricación", desc: "Fabricamos en taller con control de calidad en cada pieza." },
  { paso: "4", titulo: "Entrega", desc: "Despachamos e instalamos según el alcance del proyecto." },
];

const faqs = [
  { q: "¿Qué productos fabrica Rinon?", a: "Fabricamos camarotes metálicos, rejas, portones, cercos y cierres perimetrales, y estructuras metálicas. Además ofrecemos servicio de pintura electrostática al horno." },
  { q: "¿Dónde están ubicados?", a: "Nuestro taller está en Santiago. Atendemos a toda la Región Metropolitana con instalación y coordinamos despacho a regiones." },
  { q: "¿Trabajan con empresas y factura?", a: "Sí. Trabajamos con particulares y empresas, emitimos factura electrónica y atendemos proyectos para constructoras, industrias y campamentos." },
  { q: "¿Cómo cotizo?", a: "Escríbenos por WhatsApp con lo que necesitas — medidas, cantidad y ubicación — y te enviamos una cotización sin formularios." },
];

export default function MetalurgicaRinonPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Manufacturer", "LocalBusiness"],
        name: "Metalúrgica Rinon.cl",
        description: "Fabricante metalúrgico en Santiago: camarotes, rejas, portones, cierres perimetrales, estructuras metálicas y pintura electrostática.",
        areaServed: { "@type": "Country", name: "Chile" },
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
        makesOffer: lineas.map(l => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: l.titulo, description: l.desc } })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Metalúrgica Rinon</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🏭 Taller propio · Fabricación en Santiago
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Metalúrgica Rinon.cl — Fabricante en Santiago, Chile
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Somos una metalúrgica con taller propio en Santiago. Fabricamos camarotes metálicos,
            rejas, portones, cercos y cierres perimetrales, y estructuras metálicas a medida.
            Controlamos todo el proceso, desde el corte del acero hasta la pintura electrostática al
            horno, para entregarte productos duraderos a precio de fábrica.
          </p>
          <a href={getWAUrl("Hola, quiero cotizar con la metalúrgica Rinon. Necesito: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestras líneas de producto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {lineas.map(l => (
              <Link key={l.titulo} href={l.href} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-gray-400 transition-all">
                <span className="text-2xl flex-shrink-0">{l.icono}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{l.titulo} →</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{l.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Capacidades de la fábrica</h2>
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

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza con la metalúrgica Rinon</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Camarotes, rejas, portones, cierres y estructuras. Taller propio en Santiago. Cotiza por WhatsApp.</p>
          <a href={getWAUrl("Hola, quiero cotizar con la metalúrgica Rinon. Necesito: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
