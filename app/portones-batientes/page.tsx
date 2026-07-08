import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones Batientes Santiago — Fabricante con Instalación | Simple y Doble",
  description: "Portones batientes metálicos en Santiago. Fabricante directo. Portón batiente simple o doble hoja para casas y empresas. Con o sin motor. Instalación incluida. Cotiza hoy.",
  keywords: [
    "portones batientes santiago",
    "porton batiente metalico",
    "porton batiente precio chile",
    "porton batiente doble hoja",
    "porton batiente simple",
    "portones batientes con motor",
    "fabricante portones batientes",
    "porton batiente residencial santiago",
    "porton batiente instalacion",
    "porton abatible metalico chile",
  ],
  alternates: { canonical: "https://rinon.cl/portones-batientes" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesBatientesPage() {
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
                name: "¿En qué se diferencia el portón batiente del corredizo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El portón batiente abre como una puerta — gira sobre bisagras fijas en el poste. Puede abrir hacia adentro o hacia afuera. El portón corredizo se corre horizontalmente sobre una guía. El batiente es más económico pero requiere espacio de barrido; el corredizo no necesita espacio de barrido pero es más caro.",
                },
              },
              {
                "@type": "Question",
                name: "¿El portón batiente puede tener motor automático?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Los portones batientes se pueden motorizar con brazos hidráulicos o electrónicos que empujan las hojas para abrir y cerrar. El sistema de motor para batiente es diferente al del corredizo. Si planeas motorizar, dilo al cotizar para que la estructura quede preparada.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto ancho soporta un portón batiente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El portón batiente de hoja simple funciona bien hasta 2,5–3 m de ancho. Para anchos mayores se hace doble hoja (dos batientes que abren hacia lados opuestos). Más de 4 m de ancho en batiente doble se vuelve pesado e incómodo — para esos casos el corredizo es más práctico.",
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
          <span className="text-gray-700 font-medium">Portones Batientes</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Simple o doble hoja · Instalación en Santiago
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portones Batientes — La Opción Económica con Instalación Simple
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos portones batientes metálicos a medida en Santiago. Abren como una puerta,
            sobre bisagras fijas al poste. Simple o doble hoja, con o sin motor automático.
            Son la opción más económica para accesos de hasta 3–4 m de ancho.
          </p>
          <a
            href={wa("Hola, necesito cotizar un portón batiente. Ancho del acceso: [ANCHO] m. Alto: [ALTO] m. Hojas: [SIMPLE / DOBLE]. Con motor: [SÍ / NO]. Abre hacia: [ADENTRO / AFUERA]. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi portón batiente
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Simple vs doble hoja</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Característica</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Hoja simple</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Doble hoja</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ancho máximo recomendado", "Hasta 3 m", "Hasta 5–6 m"],
                  ["Espacio de barrido", "Todo el ancho hacia un lado", "Mitad del ancho hacia cada lado"],
                  ["Peso", "Más liviano", "Más pesado (dos hojas)"],
                  ["Cerrojo central", "No aplica", "Sí — para trabar las dos hojas"],
                  ["Precio relativo", "Más económico", "Mayor costo de fabricación e instalación"],
                ].map(([c, s, d]) => (
                  <tr key={c} className="border-t border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{c}</td>
                    <td className="p-3 text-gray-500">{s}</td>
                    <td className="p-3 text-gray-500">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Cuándo conviene el batiente?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Accesos de hasta 3–4 m",
                d: "Para anchos residenciales estándar el batiente es la opción más económica y la más fácil de instalar. Un auto cabe cómodamente en 3 m.",
              },
              {
                t: "Cuando hay espacio interior disponible",
                d: "El portón abre hacia adentro en la mayoría de los casos — necesitas espacio libre del largo del portón en el interior de la propiedad.",
              },
              {
                t: "Accesos con poca vereda exterior",
                d: "Si la vereda es estrecha el portón que abre hacia afuera puede molestar a peatones. El que abre hacia adentro evita ese problema.",
              },
              {
                t: "Presupuesto ajustado",
                d: "Un portón batiente del mismo ancho y diseño que uno corredizo puede costar entre 20–40% menos por la simplicidad del mecanismo.",
              },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/portones-corredizos", label: "Portones corredizos", desc: "Sin espacio de barrido — para anchos grandes" },
            { href: "/portones-automaticos", label: "Portones automáticos", desc: "Con motor para batiente o corredizo" },
            { href: "/portones-residenciales", label: "Portones residenciales", desc: "Todos los tipos para casas" },
            { href: "/blog/porton-corredizo-vs-batiente", label: "Corredizo vs batiente", desc: "Comparativa completa" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuánto mide tu acceso?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Ancho, alto y hacia dónde abre. Cotizamos el mismo día con instalación incluida.
          </p>
          <a
            href={wa("Hola, necesito un portón batiente. Ancho: [ANCHO] m. Alto: [ALTO] m. Hojas: [SIMPLE / DOBLE]. Con motor: [SÍ / NO]. Estoy en [COMUNA].")}
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
