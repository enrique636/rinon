import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Forestales — Sur de Chile | Camarotes Chile",
  description:
    "Camarotes metálicos para campamentos forestales, cuadrillas de tala y replantación en el sur de Chile. Los Ángeles, Temuco, Valdivia, Osorno. Fabricante directo.",
  keywords: [
    "camarotes forestales Chile",
    "camas campamentos forestales",
    "camarotes cuadrillas forestales",
    "equipamiento forestales Chile",
    "camarotes Los Ángeles",
    "camarotes Temuco",
    "camarotes para cuadrillas",
    "camas sector forestal Chile",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-forestales" },
  openGraph: {
    title: "Camarotes para Campamentos Forestales — Sur de Chile",
    description: "Fabricante de camarotes metálicos para cuadrillas forestales. Los Ángeles, Temuco, Valdivia.",
    type: "website",
    locale: "es_CL",
  },
};

function getForestalesWAUrl(ciudad?: string): string {
  const dest = ciudad ? ` con despacho a *${ciudad}*` : "";
  const msg = encodeURIComponent(`Hola, necesito cotizar camarotes metálicos para cuadrilla forestal${dest}. ¿Pueden ayudarme con precios?`);
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${msg}`;
}

const CIUDADES_FORESTALES = ["Los Ángeles", "Mulchén", "Nacimiento", "Angol", "Victoria", "Temuco", "Valdivia", "Osorno", "Puerto Montt"];

export default function CamarotesForestalesPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Fabrican camarotes para sector forestal en Chile?", acceptedAnswer: { "@type": "Answer", text: "Sí. Somos fabricantes de camarotes metálicos para cuadrillas forestales en el sur de Chile. Despachamos a Los Ángeles, Temuco, Valdivia, Osorno y toda la zona forestal." } },
          { "@type": "Question", name: "¿Los camarotes metálicos resisten la humedad del sur?", acceptedAnswer: { "@type": "Answer", text: "Sí. El acero con pintura anticorrosiva resiste bien la humedad del sur de Chile. A diferencia de la madera, no se hincha ni se deteriora con los cambios de humedad ambiente." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/empresas" className="hover:text-gray-600">Empresas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Forestales</span>
        </nav>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-300 rounded-full px-4 py-1.5 text-sm text-green-800 font-medium mb-5">
            🌲 Sector forestal · Sur de Chile · Fabricante directo
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarotes para Campamentos Forestales
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Fabricamos camarotes metálicos para cuadrillas forestales en el sur de Chile.
            Resistentes a la humedad, portables entre faenas, precio de fábrica. Despachamos
            a Los Ángeles, Temuco, Valdivia, Osorno y toda la zona forestal.
          </p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-faenero-campamento-forestal.jpg" alt="Camarote faenero metálico negro en campamento forestal" className="w-full object-cover" loading="lazy" />
          </div>
<a href={getForestalesWAUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar para forestal
          </a>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ventajas del camarote metálico en el sector forestal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { titulo: "Resistencia a la humedad", desc: "El sur de Chile tiene alta pluviosidad. El acero con pintura anticorrosiva resiste mucho mejor que la madera o el MDF en estos ambientes." },
              { titulo: "Portable entre faenas", desc: "Las cuadrillas forestales cambian de locación constantemente. El camarote metálico se desmonta, traslada y rearma en menos de 30 minutos." },
              { titulo: "Mantenimiento mínimo en terreno", desc: "Sin tratamientos especiales ni barnizados periódicos. Un repaso de pintura anticorrosiva cada algunos años es suficiente." },
              { titulo: "Apto para condiciones de campamento", desc: "Resistente a golpes, carga intensiva y el uso diario de trabajadores forestales que llegan de jornadas exigentes." },
            ].map(v => (
              <div key={v.titulo} className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{v.titulo}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ciudades forestales con despacho</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CIUDADES_FORESTALES.map(ciudad => (
              <a key={ciudad} href={getForestalesWAUrl(ciudad)} target="_blank" rel="noopener noreferrer" className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center hover:border-green-300 hover:bg-green-50 transition-all">
                <p className="text-sm font-medium text-gray-700">{ciudad}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="bg-green-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas equipar un campamento forestal?</h2>
          <p className="text-green-200 text-sm mb-5">Cuéntanos el número de camas y el destino. Cotización en el día.</p>
          <a href={getForestalesWAUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
