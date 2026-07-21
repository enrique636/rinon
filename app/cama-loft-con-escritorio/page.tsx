import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cama Loft con Escritorio | Espacio Libre Abajo",
  description:
    "Cama loft con escritorio abajo en Chile. La cama va arriba y libera el espacio inferior para escritorio, estudio o juego. Metálica y resistente. Fabricante directo.",
  keywords: [
    "cama loft con escritorio",
    "cama alta con escritorio abajo",
    "loft metalico escritorio chile",
    "cama loft escritorio dormitorio",
  ],
  alternates: { canonical: "https://rinon.cl/cama-loft-con-escritorio" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, quiero una cama loft con escritorio abajo. ¿Tienen ese modelo?"
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
                name: "¿Cuál es la diferencia entre loft y camarote?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El camarote tiene dos camas: una arriba y una abajo. La cama loft tiene solo una cama arriba y deja el espacio inferior completamente libre para escritorio, sillón, área de juego o lo que necesites. Es la opción ideal cuando no necesitas dos camas.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto espacio libre queda debajo de la cama loft?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dependiendo del modelo y la altura del techo, el espacio libre bajo la cama loft es de 110-140 cm, suficiente para un escritorio con silla estándar. Si tienes techos altos, el espacio es aún mayor.",
                },
              },
              {
                "@type": "Question",
                name: "¿La cama de arriba tiene baranda de seguridad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Todos nuestros modelos de cama loft incluyen baranda de seguridad en la cama superior para evitar caídas. La baranda es parte de la estructura metálica.",
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
          <Link href="/camarotes-con-escritorio" className="hover:text-gray-600">
            Camarotes con Escritorio
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Cama Loft con Escritorio</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Cama arriba · Escritorio abajo
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Cama Loft con Escritorio Abajo
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          A diferencia del camarote con dos camas, el loft tiene solo una cama arriba y deja el
          espacio inferior libre para un escritorio, un sillón o lo que necesites. Máxima
          versatilidad en metros cuadrados reducidos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Cama solo arriba</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Una sola cama elevada deja el espacio inferior completamente libre para usarlo como
              quieras. Sin segunda cama que ocupe lugar.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escritorio en la parte inferior</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El escritorio integrado en la estructura aprovecha al máximo el espacio bajo la cama
              para crear una estación de trabajo completa.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Espacio libre alrededor</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Al no haber segunda cama debajo, el resto de la pieza queda libre. Puedes agregar
              silla, estantería o zona de estar sin saturar el espacio.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Ideal para piezas pequeñas</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              La solución más inteligente para departamentos pequeños o piezas de arriendo donde
              cada metro cuadrado importa.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Cuál es la diferencia entre loft y camarote?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              El camarote tiene dos camas apiladas. La cama loft tiene solo una cama arriba y deja
              el espacio inferior libre para escritorio u otro uso. Ideal cuando no necesitas dos
              camas.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Cuánto espacio libre queda abajo?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Dependiendo del modelo y altura del techo, el espacio libre es de 110-140 cm, suficiente
              para escritorio con silla estándar. Con techos altos, el espacio es aún mayor.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿La cama de arriba tiene baranda?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Todos los modelos incluyen baranda de seguridad en la cama superior. Es parte de
              la estructura metálica, no un accesorio opcional.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/cama-loft-metalica"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🪜</span>
              <span className="font-semibold text-gray-900 text-sm">Cama Loft Metálica</span>
            </Link>
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
            <Link
              href="/cama-alta-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🛏️</span>
              <span className="font-semibold text-gray-900 text-sm">Cama Alta con Escritorio</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-departamento"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🏢</span>
              <span className="font-semibold text-gray-900 text-sm">Para Departamentos</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Solo necesitas una cama y un escritorio?</h2>
          <p className="text-gray-400 text-sm mb-6">
            La cama loft con escritorio es la solución. Cuéntanos las medidas de tu pieza y la
            altura del techo. Te orientamos con el modelo ideal.
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
