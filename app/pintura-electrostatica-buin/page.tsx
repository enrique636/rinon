import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Buin | Al Horno Chile",
  description:
    "Pintura electrostática al horno con servicio a Buin. Acabados duraderos para rejas, portones y estructuras metálicas. Retiro coordinado desde Buin. Cotiza por WhatsApp.",
  keywords: [
    "pintura electrostatica buin",
    "pintura al horno buin",
    "pintura metalica buin chile",
    "acabado electrostatico buin",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-buin" },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const faqs = [
  {
    q: "¿Retiran las piezas en Buin?",
    a: "Sí. Coordinamos retiro a domicilio en Buin. Al cotizar te confirmamos disponibilidad de retiro y el costo según la dirección exacta.",
  },
  {
    q: "¿Cuánto demora la pintura electrostática?",
    a: "Para piezas estándar como rejas y portones el plazo es de 3 a 5 días hábiles desde el retiro. Para estructuras de mayor volumen puede extenderse a 7–10 días.",
  },
  {
    q: "¿Qué colores tienen?",
    a: "Manejamos una paleta amplia: negro mate, negro brillante, blanco, gris, verde, azul, café y colores especiales. También hacemos matching según muestra o código de color.",
  },
  {
    q: "¿Cuánto dura el acabado electrostático al horno?",
    a: "El acabado electrostático al horno es mucho más duradero que la pintura convencional. En condiciones normales dura 10 años o más sin necesidad de repintar, resistiendo la intemperie, la humedad y el roce.",
  },
];

const objetos = [
  { t: "Rejas de jardín", d: "Rejas frontales, laterales y de patio con acabado uniforme y duradero." },
  { t: "Portones corredizos", d: "Portones vehiculares y peatonales con pintura resistente a la intemperie." },
  { t: "Barandas", d: "Barandas de escalera, balcón y terraza con acabado profesional." },
  { t: "Mobiliario metálico", d: "Mesas, sillas, estanterías y otros muebles de metal para interior y exterior." },
  { t: "Estructuras a medida", d: "Cualquier estructura metálica que requiera pintura industrial resistente." },
];

const links = [
  { href: "/pintura-electrostatica", label: "Servicio completo", desc: "Proceso, colores y capacidad" },
  { href: "/pintura-electrostatica-san-bernardo", label: "Pintura San Bernardo", desc: "La capital del sur RM" },
  { href: "/pintura-electrostatica-zona-sur-santiago", label: "Zona sur completa", desc: "Todas las comunas del sur" },
];

export default function PinturaElectrostaticaBuinPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Rinon.cl — Pintura Electrostática",
            description: "Servicio de pintura electrostática al horno para Buin y el sur de la RM.",
            areaServed: { "@type": "Place", name: "Buin, Región Metropolitana, Chile" },
            address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
            telephone: SITE_CONFIG.telefono,
          }),
        }}
      />
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
              { "@type": "ListItem", position: 2, name: "Pintura Electrostática", item: "https://rinon.cl/pintura-electrostatica" },
              { "@type": "ListItem", position: 3, name: "Buin", item: "https://rinon.cl/pintura-electrostatica-buin" },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Buin</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            Servicio a Buin · Al horno
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Pintura Electrostática al Horno en Buin
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            La pintura electrostática al horno es el acabado más duradero para piezas metálicas.
            A diferencia de la pintura convencional, el polvo se aplica por atracción electrostática
            y se funde en horno a 180°C — resultando en una capa uniforme, sin goteos y resistente
            a la intemperie, el roce y la humedad.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6 leading-relaxed">
            Atendemos clientes en Buin con retiro coordinado desde tu domicilio o propiedad. Rejas,
            portones, barandas y cualquier estructura metálica que quieras renovar o proteger.
          </p>
          <a
            href={getWAUrl("Hola, necesito cotizar pintura electrostática para [objeto]. Estoy en Buin. ¿Pueden coordinar el retiro?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Para qué objetos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objetos.map((o) => (
              <div key={o.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{o.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{o.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Proceso de trabajo</h2>
          <div className="space-y-3">
            {[
              { n: "1", t: "Llamas o escribes", d: "Nos cuentas qué piezas tienes y cuántas. Te confirmamos precio y disponibilidad." },
              { n: "2", t: "Coordinamos retiro en Buin", d: "Agendamos un día y hora para retirar las piezas en tu dirección en Buin." },
              { n: "3", t: "Sandblasting", d: "Limpieza a presión para remover óxido, pintura vieja y contaminantes." },
              { n: "4", t: "Aplicación electrostática", d: "Aplicación de polvo de pintura en cabina especializada." },
              { n: "5", t: "Horno a 180°C", d: "Horneado para fusión del polvo y adherencia definitiva al metal." },
              { n: "6", t: "Entrega", d: "Despacho de vuelta a tu dirección en Buin o retiro en taller." },
            ].map((p) => (
              <div key={p.n} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {p.n}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{p.t}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
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
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura electrostática en Buin</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">
            Dinos qué piezas tienes y cuántas. Coordinamos el retiro desde Buin y te respondemos en el día.
          </p>
          <a
            href={getWAUrl("Hola, necesito cotizar pintura electrostática para [objeto]. Estoy en Buin. ¿Pueden coordinar el retiro?")}
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
