import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones Vehiculares Santiago — Fabricante con Instalación",
  description: "Portones vehiculares metálicos en Santiago. Fabricante directo. Portón corredizo o batiente para acceso de vehículos en casas, empresas y condominios. Con o sin motor eléctrico.",
  keywords: [
    "portones vehiculares",
    "porton vehicular santiago",
    "porton vehicular metalico",
    "porton de acceso vehicular",
    "porton vehicular corredizo",
    "porton vehicular batiente",
    "porton vehicular automatico",
    "fabricante portones vehiculares",
    "porton vehicular precio chile",
    "portones vehiculares para casas",
  ],
  alternates: { canonical: "https://rinon.cl/portones-vehiculares" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesVehicularesPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican portones metálicos para Vehiculares Santiago?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos portones metálicos en Vehiculares Santiago. El plazo de fabricación depende del modelo: corredizo o batiente. Cotiza por WhatsApp con las medidas del vano." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación tarda entre 3 y 7 días hábiles según el volumen del pedido. La instalación se realiza en un día para la mayoría de los proyectos residenciales. Coordina la fecha al momento de confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/portones-metalicos" className="hover:text-gray-600">Portones</Link><span>/</span>
          <span className="text-gray-700 font-medium">Portones Vehiculares</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Corredizo o batiente · Con o sin motor · Instalación en RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portones Vehiculares — Acceso de Autos a Medida
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            El portón vehicular es el acceso diario de tu vehículo a la propiedad — el elemento
            del frontis que más se usa y más trabaja. Fabricamos portones vehiculares corredizos
            y batientes en acero, a medida, con o sin automatización eléctrica.
            Instalación incluida en toda la RM.
          </p>
          <a
            href={wa("Hola, necesito cotizar un portón vehicular. Ancho del acceso: [ANCHO] m. Altura: [ALTURA] m. Tipo: [CORREDIZO / BATIENTE]. Con motor eléctrico: [SÍ / NO]. Estoy en [COMUNA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar portón vehicular
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Anchos estándar por uso</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Uso</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Ancho recomendado</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Casa — 1 vehículo (acceso justo)", "2,80–3,00 m"],
                  ["Casa — 1 vehículo (acceso cómodo)", "3,00–3,20 m"],
                  ["Casa — 2 vehículos lado a lado", "5,00–5,50 m"],
                  ["Empresa / camión pequeño", "3,50–4,00 m"],
                  ["Empresa / camión grande o doble", "4,50–6,00 m"],
                ].map(([uso, ancho]) => (
                  <tr key={uso} className="border-t border-gray-100">
                    <td className="p-3 text-gray-700">{uso}</td>
                    <td className="p-3 font-medium text-gray-500">{ancho}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/portones-corredizos", label: "Portones corredizos", desc: "Guía completa y precios" },
            { href: "/portones-batientes", label: "Portones batientes", desc: "Simple y doble hoja" },
            { href: "/portones-electricos", label: "Portones eléctricos", desc: "Con motor de automatización" },
            { href: "/puertas-peatonales", label: "Puertas peatonales", desc: "Acceso de personas junto al portón" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu portón vehicular</h2>
          <p className="text-gray-400 text-sm mb-5">
            Ancho del acceso, tipo y si va con motor. Respondemos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito portón vehicular. Ancho: [ANCHO] m. Tipo: [CORREDIZO / BATIENTE]. Motor: [SÍ / NO]. Estoy en [COMUNA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
