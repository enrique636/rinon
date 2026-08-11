import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Setup Gaming | Chile",
  description:
    "Camarote con escritorio para tu setup gaming en Chile. Cama arriba, escritorio amplio abajo para PC, monitor y periféricos. Negro mate disponible. Fabricante directo.",
  keywords: [
    "camarote con escritorio setup gaming",
    "camarote setup gamer chile",
    "litera escritorio setup pc",
    "cama alta escritorio pc gamer",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-setup-gaming" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, quiero un camarote con escritorio para mi setup gamer. Necesito uno con escritorio amplio y en negro."
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
                name: "¿El escritorio es lo suficientemente ancho para monitor y PC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. El escritorio del camarote tiene la profundidad y ancho suficiente para un setup con monitor de 24-27 pulgadas, torre PC o laptop, teclado y mouse. Para setups con múltiples monitores o monitores ultrawide, consúltanos las medidas específicas al cotizar.",
                },
              },
              {
                "@type": "Question",
                name: "¿El escritorio aguanta el peso del monitor y la torre?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Al ser parte de la estructura metálica, el escritorio soporta el peso de un setup completo sin flexionarse. Un monitor estándar pesa entre 3-8 kg y una torre PC entre 5-15 kg, dentro del rango normal de carga.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se puede hacer en negro para setup gamer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. El negro mate con pintura electrostática al horno está disponible en la mayoría de nuestros modelos. El negro es el color más solicitado para setups gaming por su aspecto premium y sin reflejos.",
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
          <span className="text-gray-700 font-medium">Setup Gaming</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Setup gaming · Escritorio amplio
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio para Setup Gaming
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          El camarote ideal para gamers deja el escritorio completamente libre para tu monitor, PC,
          teclado y demás periféricos — sin ocupar espacio en el piso. La cama arriba, tu setup
          completo abajo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escritorio amplio sin obstáculos</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Espacio completo para monitor, torre o laptop, teclado, mouse y periféricos. Sin patas
              de mesa que interrumpan el espacio de tus piernas.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Cama arriba libera el piso</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              La cama elevada libera todo el piso de la pieza para tu silla gaming, alfombra de
              mouse y cualquier otro elemento de tu setup.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Negro mate disponible</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El negro con pintura electrostática es el color favorito para setups gaming. Acabado
              premium sin reflejos que complementa tu RGB.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Gestión de cables posible</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              La estructura metálica permite sujetar organizadores de cables para mantener tu setup
              ordenado y sin enredos visibles.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿El escritorio es lo suficientemente ancho para monitor y PC?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Tiene profundidad y ancho para monitor de 24-27 pulgadas, laptop o torre, teclado
              y mouse. Para setups con múltiples monitores, consúltanos las medidas exactas.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Aguanta el peso del monitor?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Al ser parte de la estructura metálica, el escritorio soporta el peso de un setup
              completo sin flexionarse. Monitor (3-8 kg) + torre (5-15 kg) sin problema.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Se puede hacer en negro?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. El negro mate con pintura electrostática al horno está disponible en la mayoría de
              los modelos. Es el color más solicitado para setups gaming.
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
              href="/camarote-con-escritorio-negro"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">⬛</span>
              <span className="font-semibold text-gray-900 text-sm">En Negro Mate</span>
            </Link>
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-full"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">⭐</span>
              <span className="font-semibold text-gray-900 text-sm">Modelo Full</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Quieres armar tu setup sin sacrificar la cama?</h2>
          <p className="text-gray-400 text-sm mb-6">
            Cuéntanos las medidas de tu pieza y el tamaño de tu setup. Te recomendamos el modelo
            correcto en el color que prefieras.
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
