import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Negro | Acabado Mate",
  description:
    "Camarote metálico con escritorio en color negro en Chile. Acabado mate elegante con pintura electrostática al horno. Resistente y moderno. Fabricante directo.",
  keywords: [
    "camarote con escritorio negro",
    "litera negra con escritorio chile",
    "cama alta negro escritorio",
    "camarote metalico negro escritorio",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-negro" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, quiero un camarote con escritorio en color negro. ¿Qué modelos tienen en ese color?"
  );
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
                name: "¿Por qué la pintura electrostática es mejor que la pintura convencional?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La pintura electrostática al horno se adhiere al metal a nivel molecular mediante un proceso eléctrico y curado a alta temperatura. El resultado es una capa mucho más dura, resistente a golpes, rayaduras y humedad que la pintura convencional en spray o a brocha.",
                },
              },
              {
                "@type": "Question",
                name: "¿El negro es mate o brillante?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ofrecemos negro mate como opción estándar, que da un acabado elegante y moderno sin reflejos. Si prefieres negro brillante, consúltanos la disponibilidad al cotizar.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se puede personalizar el tono de negro?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trabajamos con negro estándar en nuestra línea. Para tonos específicos o combinaciones de colores, consúltanos al cotizar y evaluamos la posibilidad.",
                },
              },
            ],
          }),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">
            Camarotes con Escritorio
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Negro Mate</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Negro mate · Pintura electrostática
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio en Negro Mate
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          El color negro en pintura electrostática al horno da un acabado mate resistente a golpes
          y rayaduras — ideal para dormitorios modernos, setups gaming y personas que buscan un
          estilo más oscuro y sofisticado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Pintura electrostática al horno</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Proceso de curado a alta temperatura que adhiere la pintura al metal. Mucho más
              resistente que la pintura convencional en spray.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Acabado negro mate resistente</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Sin reflejos, con textura suave al tacto. El negro mate da un aspecto premium y moderno
              que combina con cualquier ambiente oscuro.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">No se raya fácilmente</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              La dureza del acabado electrostático hace que el negro se mantenga impecable con el
              uso normal. Sin marcas visibles en la pintura.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Disponible en todos los modelos</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El color negro está disponible en la mayoría de nuestros modelos de camarote con
              escritorio. Consúltanos al cotizar.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Por qué la pintura electrostática es mejor?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Se adhiere al metal a nivel molecular mediante proceso eléctrico y curado a alta
              temperatura. El resultado es una capa mucho más dura y resistente que la pintura
              convencional.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿El negro es mate o brillante?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ofrecemos negro mate como opción estándar. Acabado elegante sin reflejos. Si prefieres
              negro brillante, consúltanos disponibilidad al cotizar.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Se puede personalizar el tono?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Trabajamos con negro estándar. Para tonos específicos o combinaciones, consúltanos al
              cotizar y evaluamos la posibilidad.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarote-con-escritorio-gamer"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🎮</span>
              <span className="font-semibold text-gray-900 text-sm">Modelo Gamer</span>
            </Link>
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
            <Link
              href="/pintura-electrostatica"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🎨</span>
              <span className="font-semibold text-gray-900 text-sm">Pintura Electrostática</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-setup-gaming"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">💻</span>
              <span className="font-semibold text-gray-900 text-sm">Setup Gaming</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Quieres tu camarote en negro?</h2>
          <p className="text-gray-400 text-sm mb-6">
            Disponible en la mayoría de nuestros modelos. Cuéntanos qué modelo te interesa y
            confirmamos la disponibilidad del color negro.
          </p>
          <a
            href={wa}
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
