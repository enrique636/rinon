import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas para Puertas Santiago — Fabricante con Instalación",
  description: "Rejas metálicas para puertas en Santiago. Fabricante directo. Reja de seguridad para puerta de entrada, puerta de pasillo y accesos de casa. Con o sin cerradura, con instalación incluida.",
  keywords: [
    "rejas para puertas",
    "reja metalica para puerta",
    "reja de seguridad para puerta",
    "reja para puerta de entrada santiago",
    "rejas puertas santiago",
    "reja para puerta exterior",
    "reja metalica puerta casa",
    "reja de fierro para puerta",
    "reja tubular para puerta",
    "precio reja puerta santiago",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-para-puertas" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasParaPuertasPage() {
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
                name: "¿En qué se diferencia una reja para puerta de una reja perimetral?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La reja para puerta es un elemento de seguridad que se instala frente a la puerta de acceso de la vivienda. Permite ventilación y visibilidad mientras la puerta de madera o metal queda cerrada detrás. A diferencia de la reja perimetral, esta va montada en el vano de la puerta o en el frontis inmediato a ella.",
                },
              },
              {
                "@type": "Question",
                name: "¿La reja para puerta tiene cerradura?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Las rejas para puertas se fabrican con cerradura tipo mariposa o con barril (cilindro). La cerradura mariposa es la más común — se abre desde adentro sin llave. La de barril se cierra con llave por ambos lados y da más seguridad.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto mide una reja para puerta estándar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El ancho y alto estándar de una puerta de casa en Chile es de 80–90 cm de ancho y 2,00–2,10 m de alto. La reja se fabrica a medida para el vano exacto de tu puerta. Necesitamos el ancho y el alto del vano para presupuestar.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto cuesta una reja para puerta en Santiago?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio depende del tamaño, el diseño (tubular simple, con adornos, con ventana) y si incluye cerradura y bisagras. Envía las medidas del vano por WhatsApp para una cotización exacta el mismo día.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Rejas para Puertas</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Cerradura incluida · Instalación en Santiago
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas para Puertas — Seguridad con Ventilación
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos rejas metálicas para puertas de entrada en Santiago. Puedes dejar la puerta
            de madera abierta para ventilación mientras la reja mantiene la seguridad. A medida,
            con cerradura, bisagras y pintura electrostática al horno. Instalación incluida.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja para puerta. Medidas del vano: [ANCHO] cm x [ALTO] cm. Tipo: [ENTRADA / PASILLO / INTERIOR]. Cerradura: [MARIPOSA / BARRIL / SIN]. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja para puerta
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de reja para puerta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Reja tubular para puerta de entrada",
                d: "La más solicitada. Tubo cuadrado de 3/4\" con barrotes verticales de 1/2\". Cerradura mariposa para abrir desde adentro sin llave. Pintura negra electrostática.",
              },
              {
                t: "Reja con ventana corrediza",
                d: "Incluye una pequeña ventana deslizante en la parte superior para atender sin abrir. Útil para departamentos y casas con mucho tráfico de visitas.",
              },
              {
                t: "Reja con diseño decorativo",
                d: "Con rombos, curvas o adornos en fierro forjado. Misma seguridad estructural con un acabado más estético para la entrada de la casa.",
              },
              {
                t: "Reja de pasillo o interior",
                d: "Para separar ambientes dentro de la casa — un pasillo, el acceso al patio trasero o una habitación. Más liviana que la de entrada exterior.",
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Cerradura: mariposa vs barril</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Característica</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Cerradura Mariposa</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Cerradura Barril</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Abrir desde adentro", "Sin llave (palanca)", "Con llave"],
                  ["Abrir desde afuera", "Con llave", "Con llave"],
                  ["Seguridad", "Media-alta", "Alta"],
                  ["Emergencia (incendio)", "Más segura — salida rápida", "Riesgo si no tienes llave a mano"],
                  ["Uso más común", "Casas y departamentos", "Negocios y locales"],
                ].map(([c, m, b]) => (
                  <tr key={c} className="border-t border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{c}</td>
                    <td className="p-3 text-gray-500">{m}</td>
                    <td className="p-3 text-gray-500">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 text-sm text-amber-900">
            <strong className="block mb-1">Recomendación para casas</strong>
            <p className="text-xs text-amber-800 leading-relaxed">
              Para puertas de entrada residencial, la cerradura mariposa es más práctica y más segura
              en caso de emergencia. Reserva el barril para locales comerciales o bodegas.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Datos que necesitas para cotizar</h2>
          <div className="space-y-2">
            {[
              ["Ancho del vano", "El espacio libre entre los marcos de la puerta (en cm)"],
              ["Alto del vano", "Desde el piso hasta el dintel (en cm)"],
              ["Tipo de cerradura", "Mariposa (más común) o barril (más segura)"],
              ["Con o sin ventana", "La ventana corrediza en la parte superior es opcional"],
              ["Interior o exterior", "El acabado y el espesor del tubo varía según el uso"],
              ["Comuna", "Para coordinar la instalación en Santiago"],
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
            { href: "/rejas-para-ventanas", label: "Rejas para ventanas", desc: "Seguridad en ventanas — también a medida" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Frontis completo con portón" },
            { href: "/portones-residenciales", label: "Portones residenciales", desc: "Acceso vehicular para tu casa" },
            { href: "/reja-tubular", label: "Reja tubular", desc: "El producto más solicitado" },
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
          <h2 className="text-2xl font-bold mb-2">¿Cuánto mide el vano de tu puerta?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Ancho, alto y tipo de cerradura. Cotizamos el mismo día con instalación incluida.
          </p>
          <a
            href={wa("Hola, necesito una reja para puerta. Vano: [ANCHO] cm x [ALTO] cm. Cerradura: [MARIPOSA / BARRIL]. Con ventana: [SÍ / NO]. Estoy en [COMUNA].")}
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
