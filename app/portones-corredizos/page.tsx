import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones Corredizos Santiago — Fabricante con Instalación y Motor",
  description: "Portones corredizos metálicos en Santiago. Fabricante directo. Portón corredizo manual o con motor automático para casas, empresas y condominios. Instalación incluida. Cotiza hoy.",
  keywords: [
    "portones corredizos santiago",
    "porton corredizo metalico",
    "porton corredizo precio chile",
    "portones corredizos con motor",
    "porton corredizo automatico santiago",
    "fabricante portones corredizos",
    "porton corredizo residencial",
    "porton corredizo industrial",
    "porton corredizo instalacion santiago",
    "porton corredizo electrico chile",
  ],
  alternates: { canonical: "https://dumar.cl/portones-corredizos" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesCorredizosPage() {
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
                name: "¿Cuánto cuesta un portón corredizo en Santiago?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio de un portón corredizo depende del ancho, el alto, el diseño (tubo cuadrado, reja, pleno) y si incluye motor. Envía las medidas por WhatsApp para una cotización exacta el mismo día.",
                },
              },
              {
                "@type": "Question",
                name: "¿El portón corredizo necesita rieles o guías?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. El portón corredizo va sobre una guía inferior empotrada en el piso y lleva una guía superior fija al muro para evitar que se caiga. La instalación incluye empotrar la guía inferior en el acceso.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se puede motorizar un portón corredizo existente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Depende del estado y diseño del portón actual. Si la guía y los rodillos están en buen estado, es posible agregar un motor. Para portones muy viejos o dañados, es más económico fabricar uno nuevo ya preparado para motor.",
                },
              },
              {
                "@type": "Question",
                name: "¿El portón corredizo o el batiente: cuál es mejor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El portón corredizo es mejor cuando no hay espacio de barrido disponible — no abre hacia adentro ni hacia afuera. El batiente es más económico pero requiere espacio libre en el interior o exterior. Para accesos de más de 3 m de ancho, el corredizo es más práctico.",
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
          <span className="text-gray-700 font-medium">Portones Corredizos</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Con o sin motor · Instalación en Santiago
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portones Corredizos — Manual o Automático con Motor
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos portones corredizos metálicos a medida en Santiago. Se abren
            deslizándose hacia un costado — sin espacio de barrido. Ideales para casas,
            empresas y condominios. Con pintura electrostática al horno. Motor automático
            disponible como opción.
          </p>
          <a
            href={wa("Hola, necesito cotizar un portón corredizo. Ancho del acceso: [ANCHO] m. Alto: [ALTO] m. Con motor: [SÍ / NO]. Uso: [CASA / EMPRESA / CONDOMINIO]. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi portón corredizo
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ventajas del portón corredizo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Sin espacio de barrido",
                d: "El portón se corre hacia un lado sin ocupar espacio interior ni exterior. Ideal para accesos con poco espacio en la vereda o en el interior de la propiedad.",
              },
              {
                t: "Más seguro ante viento",
                d: "A diferencia del portón batiente, el corredizo no se abre ni se cierra con el viento. No hay riesgo de golpe ni de cerrarse solo.",
              },
              {
                t: "Motor automático disponible",
                d: "Se puede instalar motor con control remoto o con teclado. La estructura del portón queda preparada para motor desde el momento de la fabricación.",
              },
              {
                t: "Ideal para accesos anchos",
                d: "Para accesos de 3 m, 4 m o más, el corredizo es la única opción práctica — el batiente del mismo ancho es muy pesado e incómodo de abrir.",
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de portón corredizo</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Tipo</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Descripción</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Uso típico</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tubular con barrotes", "Reja tubular, visibilidad hacia adentro y afuera. Liviano.", "Casas residenciales"],
                  ["Pleno (sin espacios)", "Placa de acero o perfil plano sin huecos. Más privacidad.", "Empresas, bodegas"],
                  ["Con diseño mixto", "Parte reja + parte plena o decorativa. Equilibra estética y privacidad.", "Casas con mayor inversión"],
                  ["Pleno galvanizado", "Placa galvanizada en caliente. Para exterior expuesto a lluvia.", "Zonas húmedas, sur de Chile"],
                ].map(([tipo, desc, uso]) => (
                  <tr key={tipo} className="border-t border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{tipo}</td>
                    <td className="p-3 text-gray-500">{desc}</td>
                    <td className="p-3 text-gray-500">{uso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Datos para cotizar</h2>
          <div className="space-y-2">
            {[
              ["Ancho del acceso", "El espacio total libre de muro a muro (en metros)"],
              ["Alto del portón", "Estándar 1,80–2,10 m. ¿Necesitas más?"],
              ["Espacio lateral", "El portón se corre hacia un costado — necesitas espacio igual al ancho del portón más 20–30 cm en ese lado"],
              ["Con o sin motor", "Motor con control remoto o teclado numérico"],
              ["Diseño", "Reja tubular (ves hacia adentro) o pleno (sin visibilidad)"],
              ["Comuna", "Para coordinar instalación en Santiago"],
            ].map(([campo, desc]) => (
              <div key={campo} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-3 text-xs">
                <span className="font-medium text-gray-700 w-32 flex-shrink-0">{campo}</span>
                <span className="text-gray-500">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/portones-automaticos", label: "Portones automáticos", desc: "Todos los tipos con motor" },
            { href: "/portones-residenciales", label: "Portones residenciales", desc: "Para casas y condominios" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Para empresas y bodegas" },
            { href: "/blog/porton-corredizo-vs-batiente", label: "Corredizo vs batiente", desc: "Cuál te conviene más" },
          ].map((l) => (
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
          <h2 className="text-2xl font-bold mb-2">¿Cuánto mide tu acceso?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Ancho del acceso, alto y si quieres motor. Cotizamos el mismo día con instalación incluida.
          </p>
          <a
            href={wa("Hola, necesito un portón corredizo. Ancho del acceso: [ANCHO] m. Alto: [ALTO] m. Con motor: [SÍ / NO]. Tipo: [TUBULAR / PLENO]. Estoy en [COMUNA].")}
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
