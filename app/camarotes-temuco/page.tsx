import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Temuco — Forestales y Residencial | Camarotes Chile",
  description:
    "Camarotes metálicos con despacho a Temuco. Para campamentos forestales de la Araucanía, cuadrillas de trabajo y uso residencial. Fabricante directo. Cotización empresarial.",
  keywords: ["camarotes Temuco", "camarotes forestales Temuco", "camas cuadrilla Temuco", "literas Temuco", "camarotes Araucanía"],
  alternates: { canonical: "https://dumar.cl/camarotes-temuco" },
  openGraph: { title: "Camarotes en Temuco — Forestales y Residencial", description: "Fabricante de camarotes con despacho a Temuco para forestales y residencial.", type: "website", locale: "es_CL" },
};

function getWA(tipo?: string) {
  const t = tipo ? ` para ${tipo}` : "";
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${t} con despacho a Temuco. ¿Pueden ayudarme?`)}`;
}

export default function CamarotesTemuchoPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Despachan camarotes a Temuco?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a Temuco para campamentos forestales de la Araucanía y uso residencial. El flete se cotiza según volumen y se incluye en la propuesta." } },
          { "@type": "Question", name: "¿Los camarotes metálicos resisten el clima de Temuco?", acceptedAnswer: { "@type": "Answer", text: "Sí. El acero con pintura anticorrosiva resiste bien el clima húmedo de la Araucanía. Es la mejor opción para campamentos forestales en el sur de Chile." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-forestales" className="hover:text-gray-600">Forestales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Temuco</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-300 rounded-full px-4 py-1.5 text-sm text-green-800 font-medium mb-5">
            🌲 Araucanía · Sector forestal · Fabricante directo
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Temuco — Forestales y Residencial</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Fabricamos y despachamos camarotes metálicos a Temuco. Capital de la Araucanía y
            principal centro logístico del sector forestal del sur. Para campamentos forestales,
            cuadrillas de replantación y uso residencial. Precio de fábrica.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href={getWA("campamento forestal")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para forestal</a>
            <a href={getWA("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-3">Sector forestal en Temuco</h2>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {["Arauco / CMPC — operaciones Araucanía", "Cuadrillas de tala y replantación", "Empresas de manejo forestal", "Aserraderos y plantas de celulosa", "Contratistas del sector"].map(item => (
                <li key={item} className="flex gap-2"><span className="text-green-600">✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-3">Ventajas del camarote metálico en el sur</h2>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {["Resistente a la humedad (no absorbe ni se hincha)", "Portátil entre faenas (arma/desarma en 30 min)", "Sin problemas de hongos ni polillas", "Mantenimiento mínimo en el sur lluvioso", "Fácil de lavar y desinfectar"].map(item => (
                <li key={item} className="flex gap-2"><span className="text-gray-400">✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ciudades cercanas a Temuco con despacho</h2>
          <div className="flex flex-wrap gap-2">
            {["Angol", "Victoria", "Lautaro", "Cunco", "Loncoche", "Villarrica", "Pucón"].map(ciudad => (
              <span key={ciudad} className="bg-gray-100 text-gray-700 rounded-lg px-3 py-1.5 text-sm font-medium">{ciudad}</span>
            ))}
          </div>
        </div>
        <div className="bg-green-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Temuco?</h2>
          <p className="text-green-200 text-sm mb-5">Forestal o residencial. Cotización en el día.</p>
          <a href={getWA()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
