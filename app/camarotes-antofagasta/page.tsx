import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Antofagasta — Minería y Residencial | Camarotes Chile",
  description:
    "Camarotes metálicos con despacho a Antofagasta. Para campamentos mineros, faenas y uso residencial. Fabricante directo en Chile. Cotización por WhatsApp.",
  keywords: [
    "camarotes Antofagasta",
    "camarotes minería Antofagasta",
    "camas campamento minero Antofagasta",
    "literas Antofagasta",
    "camarote industrial Antofagasta",
    "equipamiento alojamiento Antofagasta",
    "camarotes para faenas Antofagasta",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-antofagasta" },
  openGraph: {
    title: "Camarotes con Despacho a Antofagasta — Minería y Residencial",
    description: "Fabricante de camarotes metálicos con despacho a Antofagasta para minería, faenas y residencial.",
    type: "website",
    locale: "es_CL",
  },
};

function getAntofagastaWAUrl(tipo?: string): string {
  const t = tipo ? ` para *${tipo}*` : "";
  const msg = encodeURIComponent(`Hola, necesito cotizar camarotes metálicos${t} con despacho a Antofagasta. ¿Pueden ayudarme?`);
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${msg}`;
}

export default function CamarotesAntofagastaPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness", name: "Camarotes Chile",
        description: "Fabricante de camarotes metálicos con despacho a Antofagasta.",
        areaServed: [{ "@type": "City", name: "Antofagasta" }, { "@type": "Country", name: "Chile" }],
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Despachan camarotes a Antofagasta?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a Antofagasta para campamentos mineros, faenas y uso residencial. El flete se coordina en camión de carga y se cotiza según volumen." } },
          { "@type": "Question", name: "¿Cuánto demora el despacho de camarotes desde Santiago a Antofagasta?", acceptedAnswer: { "@type": "Answer", text: "El tiempo de tránsito desde Santiago a Antofagasta es de aproximadamente 2-3 días hábiles en transporte de carga. Se suma el tiempo de fabricación según el pedido." } },
        ],
      }) }} />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-mineria" className="hover:text-gray-600">Minería</Link><span>/</span>
          <span className="text-gray-700 font-medium">Antofagasta</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-full px-4 py-1.5 text-sm text-amber-800 font-medium mb-5">
            ⛏️ Minería · Residencial · Fabricante directo
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Camarotes Metálicos en Antofagasta
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Fabricamos y despachamos camarotes metálicos a Antofagasta. Para campamentos
            mineros, faenas de contratistas y uso residencial. Fabricante directo —
            precio de fábrica, cotización sin intermediarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={getAntofagastaWAUrl("campamento minero")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">
              Cotizar para empresa / minería
            </a>
            <a href={getAntofagastaWAUrl("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">
              Cotizar uso residencial
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">⛏️ Para empresas y minería</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-amber-600">✓</span> Campamentos mineros (Escondida, Cobreco, etc.)</li>
              <li className="flex gap-2"><span className="text-amber-600">✓</span> Faenas de contratistas y EPCM</li>
              <li className="flex gap-2"><span className="text-amber-600">✓</span> Pedidos desde 5 unidades</li>
              <li className="flex gap-2"><span className="text-amber-600">✓</span> Factura de empresa</li>
              <li className="flex gap-2"><span className="text-amber-600">✓</span> Despacho coordinado a terreno</li>
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">🏠 Para residencial</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-green-500">✓</span> Todos los modelos residenciales</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> Nido, triple, con escritorio, cama alta</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> Flete cotizado a domicilio en Antofagasta</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> Posible instalación coordinada</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Antofagasta: capital minera de Chile</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Antofagasta es la ciudad más importante de la zona minera de Chile. Alberga la
            administración de gigantes como BHP Billiton (Escondida), Cobreco, Spence y
            decenas de empresas contratistas. La demanda de equipamiento para campamentos
            y alojamiento de trabajadores es permanente y de alto volumen.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Somos fabricantes ubicados en Santiago, despachamos a Antofagasta regularmente
            con empresas de transporte de carga terrestre. El flete se cotiza según volumen
            y se incluye en la propuesta comercial final.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas sobre despacho a Antofagasta</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto cuesta el flete de camarotes a Antofagasta?", a: "El flete se cotiza según volumen y destino exacto. Para pedidos de empresa (10+ unidades), el flete se incluye en la propuesta. Para pedidos menores, coordinamos con empresas de carga y te informamos el costo." },
              { q: "¿Pueden entregar directamente en un campamento minero cerca de Antofagasta?", a: "Sí. Para campamentos con acceso controlado, necesitamos que la empresa coordine el ingreso del camión de carga al sitio. Podemos coordinar directamente con el administrador del campamento." },
              { q: "¿Los camarotes soportan el clima de Antofagasta?", a: "Sí. El acero pintado con esmalte anticorrosivo es ideal para el clima seco del norte de Chile. La humedad coastal de Antofagasta no representa un problema mayor con mantenimiento básico." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Antofagasta?</h2>
          <p className="text-amber-200 text-sm mb-6">Para empresa o residencial. Cotización en el día.</p>
          <a href={getAntofagastaWAUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
