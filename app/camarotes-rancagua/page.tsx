import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Rancagua — El Teniente y Zona Minera | Camarotes Chile",
  description:
    "Camarotes metálicos con despacho a Rancagua. Para campamentos de El Teniente (Codelco), contratistas y uso residencial. Fabricante directo. Cotización empresarial.",
  keywords: ["camarotes Rancagua", "camarotes El Teniente", "camarotes minería Rancagua", "camas campamento Codelco Rancagua", "literas Rancagua", "camarotes O'Higgins"],
  alternates: { canonical: "https://rinon.cl/camarotes-rancagua" },
  openGraph: { title: "Camarotes en Rancagua — El Teniente y Residencial", description: "Fabricante de camarotes con despacho a Rancagua para minería y residencial.", type: "website", locale: "es_CL" },
};

function getWA(tipo?: string) {
  const t = tipo ? ` para ${tipo}` : "";
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${t} con despacho a Rancagua. ¿Pueden ayudarme?`)}`;
}

export default function CamarotesRancaguaPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Despachan camarotes a Rancagua?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos a Rancagua para campamentos de El Teniente y uso residencial. El flete se cotiza según volumen y destino exacto en la VI Región." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-mineria" className="hover:text-gray-600">Minería</Link><span>/</span>
          <span className="text-gray-700 font-medium">Rancagua</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-full px-4 py-1.5 text-sm text-amber-800 font-medium mb-5">
            ⛏️ El Teniente · Machalí · Región de O'Higgins
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Rancagua — El Teniente y Residencial</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Fabricamos y despachamos camarotes metálicos a Rancagua. La ciudad es la puerta de
            entrada a El Teniente (Codelco), la mayor mina subterránea de cobre del mundo, y
            alberga a cientos de empresas contratistas de la VI Región. También servimos el
            mercado residencial de Rancagua y comunas aledañas.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href={getWA("campamento El Teniente")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para minería</a>
            <a href={getWA("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
          <h2 className="font-bold text-gray-900 mb-3">Empresas en Rancagua que compran camarotes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Codelco — División El Teniente", "Contratistas EPCM de El Teniente", "Empresas de servicios mineros O'Higgins", "Constructoras de infraestructura regional", "Agrícolas del Valle de Cachapoal"].map(item => (
              <div key={item} className="flex gap-2 text-sm text-gray-700"><span className="text-amber-600">✓</span>{item}</div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas sobre Rancagua</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto demora el despacho de camarotes a Rancagua?", a: "Rancagua está a ~90 km de Santiago. El despacho en camión de carga puede coordinarse en el mismo día hábil o al día siguiente." },
              { q: "¿Pueden entregar en campamentos de El Teniente en Machalí?", a: "Sí. Machalí está adyacente a Rancagua. Para campamentos con acceso restringido, coordinamos con el administrador el ingreso del vehículo." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-amber-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Rancagua?</h2>
          <p className="text-amber-200 text-sm mb-5">Minería o residencial. Cotización en el día.</p>
          <a href={getWA()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
