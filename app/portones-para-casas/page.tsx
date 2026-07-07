import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones para Casas Santiago — Fabricante con Instalación",
  description: "Portones metálicos para casas en Santiago. Fabricante directo. Portón vehicular corredizo o batiente, con o sin motor eléctrico. A medida con instalación incluida en toda la RM.",
  keywords: [
    "portones para casas",
    "porton para casa santiago",
    "porton vehicular para casa",
    "porton metalico para casa",
    "porton corredizo para casa",
    "porton batiente para casa",
    "fabricante portones casas santiago",
    "porton automatico para casa chile",
    "portones residenciales santiago",
    "cuanto cuesta porton para casa",
  ],
  alternates: { canonical: "https://dumar.cl/portones-para-casas" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesParaCasasPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Qué tipo de portón es mejor para una casa?", acceptedAnswer: { "@type": "Answer", text: "Depende del espacio disponible. Si el acceso tiene espacio lateral libre, el corredizo es más práctico y seguro en pendiente. Si no hay espacio para el riel, el batiente de doble hoja es la alternativa. El portón eléctrico puede aplicarse a ambos tipos." } },
              { "@type": "Question", name: "¿Cuánto mide un portón vehicular para una casa?", acceptedAnswer: { "@type": "Answer", text: "El ancho estándar para un vehículo es 2,80–3,20 m. Para dos vehículos lado a lado, 5,00–5,50 m. La altura típica es igual al cerco del frontis: 1,50–1,80 m." } },
              { "@type": "Question", name: "¿Cuánto cuesta un portón para casa en Chile?", acceptedAnswer: { "@type": "Answer", text: "El precio depende del ancho, la altura, el tipo (corredizo o batiente) y si lleva motor eléctrico. Envía las medidas por WhatsApp para recibir cotización el mismo día con instalación incluida." } },
            ],
          }),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/portones-metalicos" className="hover:text-gray-600">Portones</Link><span>/</span>
          <span className="text-gray-700 font-medium">Portones para Casas</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Corredizo o batiente · Con o sin motor · Instalación en RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portones para Casas — Vehiculares y Peatonales</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">El portón de una casa es el elemento del frontis que más trabaja — se abre y cierra decenas de veces al día. Fabricamos portones vehiculares corredizos y batientes a medida, con o sin motor eléctrico, en conjunto con la reja del frontis o como reemplazo de un portón existente.</p>
          <a href={wa("Hola, necesito cotizar un portón para casa. Ancho del acceso: [ANCHO] m. Altura: [ALTURA] m. Tipo: [CORREDIZO / BATIENTE]. Motor eléctrico: [SÍ / NO]. Incluye reja del frontis: [SÍ / NO]. Estoy en [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi portón</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Corredizo vs batiente para casa</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Característica</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Corredizo</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Batiente</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Espacio que necesita", "Espacio lateral igual al ancho del portón", "Espacio interior para abrir las hojas"],
                  ["Pendiente en la entrada", "Funciona bien en cualquier pendiente", "Puede ser difícil abrir en pendiente fuerte"],
                  ["Automatización", "Muy fácil — motor lineal estándar", "Motor disponible, algo más complejo"],
                  ["Precio relativo", "Similar al batiente estándar", "Depende del ancho — 2 hojas puede ser más caro"],
                  ["Mantenimiento", "Riel inferior requiere limpieza periódica", "Bisagras requieren lubricación anual"],
                ].map(([c, cor, bat]) => (
                  <tr key={c} className="border-t border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{c}</td>
                    <td className="p-3 text-gray-500">{cor}</td>
                    <td className="p-3 text-gray-500">{bat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/portones-corredizos", label: "Portones corredizos", desc: "Guía completa del portón corredizo" },
            { href: "/portones-batientes", label: "Portones batientes", desc: "Simple y doble hoja" },
            { href: "/portones-electricos", label: "Portones eléctricos", desc: "Automatización con motor" },
            { href: "/rejas-metalicas-para-casas", label: "Reja de frontis", desc: "Portón + reja completa" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu portón de casa</h2>
          <p className="text-gray-400 text-sm mb-5">Ancho, altura, tipo y si va con motor. Cotizamos el mismo día.</p>
          <a href={wa("Hola, necesito cotizar portón para casa. Ancho: [ANCHO] m. Altura: [ALTURA] m. Tipo: [CORREDIZO / BATIENTE]. Motor: [SÍ / NO]. Estoy en [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
