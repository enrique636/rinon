import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones Eléctricos Santiago — Motor Automático con Control Remoto",
  description: "Portones eléctricos en Santiago. Fabricante directo de portones con motor automático y control remoto. Corredizo o batiente. Instalación incluida. Cotiza hoy por WhatsApp.",
  keywords: [
    "portones electricos santiago",
    "porton electrico",
    "porton electrico precio chile",
    "porton electrico con control remoto",
    "porton automatico electrico",
    "portones electricos corredizos",
    "motor electrico porton",
    "porton electrico instalacion santiago",
    "porton con motor electrico chile",
    "automatizar porton santiago",
  ],
  alternates: { canonical: "https://rinon.cl/portones-electricos" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesElectricosPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto cuesta un portón eléctrico en Chile?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio de un portón eléctrico depende del tipo (corredizo o batiente), el ancho, el diseño y la marca del motor. El motor es el componente más variable del presupuesto. Envía las medidas y el tipo de portón por WhatsApp para una cotización exacta el mismo día.",
                },
              },
              {
                "@type": "Question",
                name: "¿Funciona un portón eléctrico si se va la luz?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Los motores modernos incluyen una función de desenganche manual que permite abrir el portón a mano cuando no hay electricidad. Algunos modelos incluyen batería de respaldo que permite 20–50 ciclos de apertura sin corriente.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se puede electrificar un portón que ya tengo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Depende del estado y el diseño del portón existente. Si el portón es corredizo con guía en buen estado, generalmente se puede agregar motor. Para portones muy viejos, dañados o sin guía, es más conveniente fabricar uno nuevo ya preparado para motor.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/portones-metalicos" className="hover:text-gray-600">Portones metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Portones Eléctricos</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Motor automático · Control remoto · Instalación en Santiago
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portones Eléctricos — Automáticos con Control Remoto
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos portones eléctricos (automáticos) en Santiago. El portón
            se abre y cierra con un control remoto, aplicación o teclado — sin bajarse del
            auto. Motor para corredizo o batiente. Instalación completa incluida.
          </p>
          <a
            href={wa("Hola, necesito cotizar un portón eléctrico. Tipo: [CORREDIZO / BATIENTE]. Ancho: [ANCHO] m. Alto: [ALTO] m. ¿Ya tengo portón? [SÍ / NO]. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi portón eléctrico
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de motor para portón</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Motor para portón corredizo",
                d: "El más popular. La cremallera va sobre la guía inferior del portón y el motor empuja la hoja. Incluye control remoto, limitadores de fin de carrera y función manual para cortes de luz.",
              },
              {
                t: "Motor para portón batiente (brazos)",
                d: "Dos brazos articulados empujan las hojas del portón batiente para abrir y cerrar. Compatible con portones de una o dos hojas. Más discreto visualmente que el corredizo.",
              },
              {
                t: "Control remoto + teclado numérico",
                d: "La instalación estándar incluye control remoto con hasta 100 usuarios programables. El teclado numérico es opcional — permite entrar con código sin control remoto.",
              },
              {
                t: "Interfonía y apertura por app",
                d: "Opción avanzada: el portón se conecta a wifi y se abre desde el teléfono. Permite abrir para visitas o deliveries sin estar en casa.",
              },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Portón nuevo con motor o motorizar el existente?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Situación</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Recomendación</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["No tengo portón", "Fabricar portón nuevo ya preparado para motor — la estructura queda optimizada"],
                  ["Tengo portón corredizo en buen estado", "Se puede agregar motor sin cambiar el portón — evaluamos en visita rápida"],
                  ["Tengo portón batiente en buen estado", "Se puede motorizar con brazos — depende del peso y el diseño del portón"],
                  ["Tengo portón viejo, deformado u oxidado", "Conviene hacer portón nuevo — el motor sobre estructura deficiente da problemas"],
                ].map(([s, r]) => (
                  <tr key={s} className="border-t border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{s}</td>
                    <td className="p-3 text-gray-500">{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/portones-automaticos", label: "Portones automáticos", desc: "Guía completa de automatización" },
            { href: "/portones-corredizos", label: "Portones corredizos", desc: "El tipo más automatizado" },
            { href: "/portones-batientes", label: "Portones batientes", desc: "También se pueden motorizar" },
            { href: "/portones-residenciales", label: "Portones residenciales", desc: "Para casas y condominios" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Corredizo o batiente? ¿Ya tienes portón?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Cuéntanos la situación actual y las medidas. Cotizamos motor + instalación el mismo día.
          </p>
          <a
            href={wa("Hola, necesito cotizar un portón eléctrico. Tipo: [CORREDIZO / BATIENTE]. Ancho: [ANCHO] m. ¿Ya tengo portón? [SÍ / NO]. Estoy en [COMUNA].")}
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
