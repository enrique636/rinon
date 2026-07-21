import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Talagante | Al Horno",
  description:
    "Pintura electrostática al horno con servicio a Talagante. Rejas, portones, muebles metálicos. Retiro y despacho coordinado a Talagante y alrededores. Cotiza ahora.",
  keywords: [
    "pintura electrostatica talagante",
    "pintura al horno talagante",
    "pintura metalica talagante",
    "acabado electrostatico poniente sur",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-talagante" },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const faqs = [
  {
    q: "¿Retiran las piezas en Talagante?",
    a: "Sí. Coordinamos retiro a domicilio en Talagante. Al cotizar confirmamos disponibilidad y costo de logística según tu dirección.",
  },
  {
    q: "¿Cuánto demora la pintura electrostática?",
    a: "Para rejas y portones el plazo habitual es de 3 a 5 días hábiles desde el retiro. Para estructuras de mayor volumen puede extenderse a 7–10 días hábiles.",
  },
  {
    q: "¿Qué colores tienen?",
    a: "Negro mate, negro brillante, blanco, gris, verde, café y colores especiales. También hacemos matching según muestra o código de color.",
  },
  {
    q: "¿Cuánto dura el acabado al horno?",
    a: "El acabado electrostático al horno dura 10 años o más en condiciones normales. Resiste la intemperie, la humedad y los cambios de temperatura típicos del poniente sur de Santiago.",
  },
];

const objetos = [
  { t: "Rejas de frontis", d: "Rejas residenciales y de parcela con acabado duradero y uniforme." },
  { t: "Portones corredizos y batientes", d: "Portones vehiculares y peatonales con pintura resistente a la intemperie del poniente RM." },
  { t: "Muebles metálicos", d: "Sillas, mesas, estanterías y mobiliario metálico para interior y exterior." },
  { t: "Estructuras metálicas", d: "Barandas, escaleras, soportes y cualquier estructura que requiera acabado industrial." },
];

const links = [
  { href: "/pintura-electrostatica", label: "Servicio completo", desc: "Proceso, colores y capacidad" },
  { href: "/pintura-electrostatica-maipu", label: "Pintura Maipú", desc: "Poniente de Santiago" },
  { href: "/pintura-electrostatica-zona-sur-santiago", label: "Zona sur completa", desc: "Mapa de comunas que atendemos" },
];

export default function PinturaElectrostaticaTalagantePage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Rinon.cl — Pintura Electrostática",
            description: "Servicio de pintura electrostática al horno para Talagante y el poniente sur de la RM.",
            areaServed: { "@type": "Place", name: "Talagante, Región Metropolitana, Chile" },
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
              { "@type": "ListItem", position: 3, name: "Talagante", item: "https://rinon.cl/pintura-electrostatica-talagante" },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Talagante</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            Servicio a Talagante · Al horno
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Pintura Electrostática al Horno en Talagante
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Atendemos clientes en Talagante y sus alrededores con servicio de pintura electrostática
            al horno. Rejas, portones, muebles metálicos y estructuras — con retiro y despacho
            coordinados desde tu domicilio.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6 leading-relaxed">
            También atendemos comunas vecinas como Peñaflor, Padre Hurtado e Isla de Maipo. El
            acabado electrostático al horno es mucho más duradero que la pintura convencional:
            sin goteos, sin burbujeo, con adherencia que soporta años de intemperie.
          </p>
          <a
            href={getWAUrl("Hola, necesito cotizar pintura electrostática para [objeto]. Estoy en Talagante. ¿Pueden coordinar el retiro?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Qué pintamos?</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Talagante y alrededores que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Talagante centro", "Peñaflor", "Padre Hurtado", "Isla de Maipo", "El Monte", "Malloco", "Zona rural poniente sur"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
                {s}
              </span>
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
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura electrostática en Talagante</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">
            Cuéntanos qué piezas tienes y desde dónde. Coordinamos retiro en Talagante y alrededores.
          </p>
          <a
            href={getWAUrl("Hola, necesito cotizar pintura electrostática para [objeto]. Estoy en Talagante. ¿Pueden coordinar el retiro?")}
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
