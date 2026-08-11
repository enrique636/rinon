import type { Metadata } from "next";
import Link from "next/link";
import { MetalServicesLinks } from "@/components/ui/MetalServicesLinks";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Servicio de Soldadura Metálica en Santiago | Rinon.cl",
  description: "Servicio de soldadura y fabricación metálica en Santiago. Corte, armado y soldadura de acero para estructuras, rejas, portones y piezas a medida. Cotiza por WhatsApp.",
  keywords: [
    "soldadura metálica Santiago",
    "servicio de soldadura Santiago",
    "soldadura MIG Santiago",
    "fabricación metálica Santiago",
    "trabajos de soldadura a medida",
    "soldadura de estructuras metálicas",
    "soldadura de rejas y portones",
  ],
  alternates: { canonical: "https://rinon.cl/soldadura-metalica-santiago" },
  openGraph: {
    title: "Soldadura y Fabricación Metálica en Santiago | Rinon.cl",
    description: "Corte, armado y soldadura para estructuras, rejas, portones y piezas metálicas a medida.",
    type: "website",
    locale: "es_CL",
    url: "https://rinon.cl/soldadura-metalica-santiago",
  },
};

const whatsApp = (message: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(message)}`;

const faqs = [
  { q: "¿Qué trabajos de soldadura realizan?", a: "Realizamos fabricación y armado de estructuras, rejas, portones, soportes y piezas metálicas a medida. Para evaluar un trabajo necesitamos fotografías, medidas, material y uso de la pieza." },
  { q: "¿Trabajan con proyectos de empresas y particulares?", a: "Sí. Atendemos proyectos residenciales, comerciales e industriales, desde piezas unitarias hasta fabricación por volumen. Emitimos cotización formal para empresas." },
  { q: "¿Pueden fabricar una pieza usando una foto o idea?", a: "Sí. Podemos revisar una fotografía, croquis o referencia y ayudarte a definir medidas y material. La solución final se confirma antes de fabricar." },
  { q: "¿Incluyen pintura electrostática?", a: "Podemos incorporar pintura electrostática al horno en la cotización cuando la pieza y el proyecto lo permiten. Así la fabricación y la terminación se coordinan en un solo proceso." },
];

export default function SoldaduraMetalicaSantiagoPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Servicio de soldadura y fabricación metálica en Santiago",
        description: "Corte, armado y soldadura de acero para estructuras, rejas, portones y piezas metálicas a medida.",
        provider: { "@type": "LocalBusiness", name: "Rinon.cl", url: "https://rinon.cl", telephone: SITE_CONFIG.telefono },
        areaServed: { "@type": "AdministrativeArea", name: "Región Metropolitana de Santiago" },
        serviceType: "Soldadura y fabricación metálica",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      }) }} />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex gap-2">
          <Link href="/" className="hover:text-gray-700">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Soldadura metálica</span>
        </nav>

        <header className="mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Taller en Santiago · Empresas y particulares</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Servicio de Soldadura Metálica en Santiago</h1>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed mb-6">
            Fabricamos, armamos y soldamos estructuras, rejas, portones, soportes y piezas de acero a medida.
            Cuéntanos qué necesitas, envíanos una foto o croquis y revisamos la mejor forma de fabricarlo.
          </p>
          <a href={whatsApp("Hola, necesito cotizar un trabajo de soldadura o fabricación metálica. El proyecto es: [DESCRIBIR]. Tengo estas medidas: [MEDIDAS].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full transition-colors">
            Cotizar trabajo de soldadura
          </a>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Trabajos metálicos que podemos evaluar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ["Estructuras a medida", "Marcos, bases, soportes, racks, escaleras y estructuras según medidas o plano."],
              ["Rejas y cierres", "Fabricación y armado de rejas, paños, puertas peatonales y cierres metálicos."],
              ["Portones", "Estructuras para portones corredizos, batientes y accesos vehiculares."],
              ["Piezas especiales", "Soluciones unitarias para hogares, talleres, comercios e industrias."],
              ["Fabricación por volumen", "Producción repetitiva de piezas metálicas para empresas e instituciones."],
              ["Terminación al horno", "Opción de pintura electrostática para proteger y terminar la fabricación."],
            ].map(([title, description]) => (
              <article key={title} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Información para cotizar</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• Fotografías o dibujo de referencia.</li>
              <li>• Medidas aproximadas: ancho, alto y profundidad.</li>
              <li>• Cantidad de unidades necesarias.</li>
              <li>• Uso de la pieza y lugar de instalación.</li>
              <li>• Comuna donde se encuentra el proyecto.</li>
            </ul>
          </div>
          <div className="bg-gray-900 text-white rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Proceso de trabajo</h2>
            <ol className="space-y-3 text-sm text-gray-300">
              <li><strong className="text-white">1. Revisión:</strong> recibimos fotos, medidas y uso.</li>
              <li><strong className="text-white">2. Cotización:</strong> definimos alcance, material y terminación.</li>
              <li><strong className="text-white">3. Fabricación:</strong> cortamos, armamos y soldamos en taller.</li>
              <li><strong className="text-white">4. Entrega:</strong> coordinamos retiro, despacho o instalación según el proyecto.</li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Preguntas frecuentes sobre soldadura</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => <article key={q} className="bg-gray-50 border border-gray-100 rounded-xl p-5"><h3 className="font-semibold text-gray-900 mb-2">{q}</h3><p className="text-gray-600 text-sm leading-relaxed">{a}</p></article>)}
          </div>
        </section>

        <MetalServicesLinks current="/soldadura-metalica-santiago" />
      </div>
    </div>
  );
}
