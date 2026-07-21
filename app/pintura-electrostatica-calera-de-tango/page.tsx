import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Calera de Tango | Horno",
  description:
    "Pintura electrostática al horno para Calera de Tango. Servicio a parcelas y comunas rurales del sur de Santiago. Rejas y portones con acabado profesional resistente.",
  keywords: [
    "pintura electrostatica calera de tango",
    "pintura al horno calera de tango",
    "pintura metalica calera tango",
    "pintura electrostatica zonas rurales rm",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-calera-de-tango" },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const faqs = [
  {
    q: "¿Retiran las piezas en Calera de Tango?",
    a: "Sí. Coordinamos retiro a domicilio o parcela en Calera de Tango. Al cotizar confirmamos disponibilidad y costo de logística según tu dirección.",
  },
  {
    q: "¿Cuánto demora la pintura?",
    a: "Para rejas y portones el plazo habitual es de 3 a 5 días hábiles desde el retiro. Para portones grandes de parcela el plazo puede extenderse a 7–10 días hábiles.",
  },
  {
    q: "¿Qué colores tienen disponibles?",
    a: "Negro mate, negro brillante, blanco, gris, verde, café y colores especiales. También hacemos matching de color según muestra.",
  },
  {
    q: "¿Hacen portones grandes de parcela?",
    a: "Sí. Tenemos experiencia en portones de parcela de 4 a 6 metros de ancho. El proceso es el mismo: retiro coordinado, sandblasting, aplicación electrostática y horno.",
  },
];

const objetos = [
  { t: "Portones de parcela", d: "Portones grandes corredizos o de doble hoja para accesos rurales. Acabado resistente a la intemperie y la humedad del campo." },
  { t: "Rejas perimetrales", d: "Rejas de cerco y frontis de parcelas con acabado uniforme que dura años sin necesidad de repintar." },
  { t: "Barandas y escaleras", d: "Barandas metálicas de acceso y escaleras exteriores que resisten el clima del sur de la RM." },
  { t: "Mobiliario metálico", d: "Mesas de jardín, sillas, estanterías y cualquier mueble de metal para uso en exterior." },
];

const links = [
  { href: "/pintura-electrostatica", label: "Servicio completo", desc: "Proceso, colores y capacidad" },
  { href: "/pintura-electrostatica-san-bernardo", label: "Pintura San Bernardo", desc: "La referencia del sur RM" },
  { href: "/pintura-electrostatica-zona-sur-santiago", label: "Zona sur completa", desc: "Todas las comunas del sur" },
  { href: "/pintura-electrostatica-paine", label: "Pintura Paine", desc: "Comuna vecina al sur" },
];

export default function PinturaElectrostaticaCaleradeTangoPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Rinon.cl — Pintura Electrostática",
            description: "Servicio de pintura electrostática al horno para Calera de Tango y zonas rurales del sur de Santiago.",
            areaServed: { "@type": "Place", name: "Calera de Tango, Región Metropolitana, Chile" },
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
              { "@type": "ListItem", position: 3, name: "Calera de Tango", item: "https://rinon.cl/pintura-electrostatica-calera-de-tango" },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Calera de Tango</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            Servicio a Calera de Tango · Al horno
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Pintura Electrostática al Horno en Calera de Tango
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Calera de Tango es una comuna rural y parcelera donde es habitual tener portones
            grandes de acceso, rejas de parcela y estructuras metálicas expuestas a la intemperie.
            La pintura electrostática al horno es la mejor opción para estos elementos: más
            duradera, más uniforme y sin goteos.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6 leading-relaxed">
            Atendemos Calera de Tango con retiro coordinado desde tu parcela o domicilio. También
            atendemos comunas vecinas como San Bernardo, Paine y el sur de la RM.
          </p>
          <a
            href={getWAUrl("Hola, necesito cotizar pintura electrostática para [objeto]. Estoy en Calera de Tango. ¿Pueden coordinar el retiro?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lo más común en Calera de Tango</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Calera de Tango que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Calera de Tango centro", "El Parrón", "Lonquén", "El Noviciado", "Parcelas sector sur", "Parcelas acceso ruta 5", "Zona rural norte"].map((s) => (
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
          <h2 className="text-2xl font-bold mb-2">Cotiza en Calera de Tango hoy</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">
            Dinos qué piezas tienes y desde dónde. Coordinamos el retiro en Calera de Tango y respondemos el mismo día.
          </p>
          <a
            href={getWAUrl("Hola, necesito cotizar pintura electrostática para [objeto]. Estoy en Calera de Tango. ¿Pueden coordinar el retiro?")}
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
