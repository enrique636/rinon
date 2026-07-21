import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Paine | Al Horno Chile",
  description:
    "Pintura electrostática al horno con servicio a Paine y zonas rurales del sur de la RM. Rejas, portones y muebles metálicos. Retiro coordinado. Acabado resistente a la intemperie.",
  keywords: [
    "pintura electrostatica paine",
    "pintura al horno paine",
    "pintura metalica paine chile",
    "acabado electrostatico zona rural sur",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-paine" },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const faqs = [
  {
    q: "¿Retiran las piezas en Paine?",
    a: "Sí. Coordinamos retiro a domicilio en Paine. Al cotizar te confirmamos disponibilidad de retiro y costo de logística según tu dirección.",
  },
  {
    q: "¿Cuánto demora la pintura electrostática?",
    a: "Para rejas y portones el plazo habitual es de 3 a 5 días hábiles desde el retiro. Para estructuras de mayor volumen puede extenderse a 7–10 días hábiles.",
  },
  {
    q: "¿Qué colores tienen?",
    a: "Manejamos negro mate, negro brillante, blanco, gris, verde, azul y colores especiales. También hacemos matching según muestra o código de color.",
  },
  {
    q: "¿Cuánto dura el acabado al horno?",
    a: "El acabado electrostático al horno dura 10 años o más en condiciones normales, resistiendo intemperie, lluvia, roce y cambios de temperatura típicos del sur de la RM.",
  },
];

const objetos = [
  { t: "Rejas de jardín y frontis", d: "Rejas perimetrales de casas y parcelas con acabado duradero." },
  { t: "Portones corredizos", d: "Portones vehiculares y peatonales con pintura resistente a la intemperie." },
  { t: "Barandas de escalera", d: "Barandas interiores y exteriores con acabado uniforme." },
  { t: "Muebles metálicos", d: "Estanterías, mesas y mobiliario de metal para interior y exterior." },
];

const links = [
  { href: "/pintura-electrostatica", label: "Servicio completo", desc: "Proceso, colores y capacidad" },
  { href: "/pintura-electrostatica-san-bernardo", label: "Pintura San Bernardo", desc: "Comunas vecinas del sur" },
  { href: "/pintura-electrostatica-buin", label: "Pintura Buin", desc: "Comuna al norte de Paine" },
];

export default function PinturaElectrostaticaPainePage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Rinon.cl — Pintura Electrostática",
            description: "Servicio de pintura electrostática al horno para Paine y zonas rurales del sur de la RM.",
            areaServed: { "@type": "Place", name: "Paine, Región Metropolitana, Chile" },
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
              { "@type": "ListItem", position: 3, name: "Paine", item: "https://rinon.cl/pintura-electrostatica-paine" },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Paine</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            Servicio a Paine · Al horno
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Pintura Electrostática al Horno en Paine
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Atendemos clientes en Paine y zonas rurales del sur de la Región Metropolitana con
            servicio de pintura electrostática al horno. Rejas, portones, barandas y estructuras
            metálicas — con retiro coordinado desde tu propiedad.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6 leading-relaxed">
            También atendemos comunas vecinas de Paine como Buin, Calera de Tango y San Bernardo.
            El acabado electrostático al horno es superior a la pintura convencional en durabilidad,
            adherencia y resistencia a la intemperie — ideal para el clima del sur de la RM.
          </p>
          <a
            href={getWAUrl("Hola, necesito cotizar pintura electrostática para [objeto]. Estoy en Paine. ¿Pueden coordinar el retiro?")}
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Paine que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Paine centro", "El Principal", "Hospital", "Linderos", "Lonquén", "Rangue", "San Juan", "Zona rural sur RM"].map((s) => (
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
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura electrostática en Paine</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">
            Cuéntanos qué piezas tienes y desde dónde. Coordinamos el retiro en Paine y te respondemos en el día.
          </p>
          <a
            href={getWAUrl("Hola, necesito cotizar pintura electrostática para [objeto]. Estoy en Paine. ¿Pueden coordinar el retiro?")}
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
