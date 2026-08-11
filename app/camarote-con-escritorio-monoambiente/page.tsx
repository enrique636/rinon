import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio en Monoambiente | Chile",
  description:
    "Camarote con escritorio para departamentos monoambiente en Chile. La cama arriba libera el piso completo para vivir, trabajar y recibir visitas. Fabricante directo.",
  keywords: [
    "camarote con escritorio monoambiente",
    "litera escritorio departamento studio",
    "cama alta escritorio studio chile",
    "camarote monoambiente escritorio",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-monoambiente" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, tengo un monoambiente y quiero un camarote con escritorio. ¿Cuál es el más compacto?"
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
                name: "¿Qué altura de techo necesito para un camarote en un monoambiente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Como mínimo 210-220 cm de techo. La mayoría de los departamentos modernos en Santiago tienen 240-260 cm, lo cual es suficiente. Mide la altura de tu techo antes de cotizar y cuéntanosla para orientarte con el modelo correcto.",
                },
              },
              {
                "@type": "Question",
                name: "¿Es seguro un camarote en un espacio tan pequeño como un monoambiente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. La estructura metálica del camarote es autoportante y muy estable. No requiere fijación a paredes. Solo necesitas el espacio en el suelo para su base (generalmente 100 x 200 cm) y la altura suficiente en el techo.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué modelo de camarote con escritorio es más compacto para monoambiente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El modelo económico con escritorio integrado es el más compacto. La cama loft con escritorio también es una excelente opción: una sola cama arriba deja más espacio libre en el piso. Cuéntanos las medidas de tu monoambiente para orientarte mejor.",
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
          <span className="text-gray-700 font-medium">Para Monoambiente</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Para monoambiente · Libera el piso
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio en Departamento Monoambiente
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          El mayor reto del monoambiente es meter todo en un solo espacio: cama, escritorio y área
          de estar. El camarote resuelve esto usando el eje vertical — la cama sube y libera el
          piso completo para vivir.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">La cama no ocupa piso</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Al elevar la cama, recuperas los metros cuadrados del piso para zona de estar,
              comedor o cualquier otro uso del monoambiente.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escritorio funcionando abajo</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El escritorio integrado en la estructura te da tu oficina en casa sin necesitar un
              mueble adicional que ocupe más espacio.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Área de estar visible</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Con la cama elevada, el espacio del piso queda libre para sofá, mesa de comedor o
              zona de estar sin que el dormitorio se vea saturado.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Sensación de amplitud</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Al liberar el piso, el monoambiente se siente más grande y menos saturado. La vista
              al entrar ya no choca con una cama que ocupa toda la visual.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Qué altura de techo necesito?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Mínimo 210-220 cm. La mayoría de los departamentos modernos en Santiago tienen
              240-260 cm, suficiente. Mídelo y cuéntanoslo al cotizar.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Es seguro en un espacio tan pequeño?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. La estructura metálica es autoportante y muy estable. No requiere fijación a
              paredes. Solo necesitas el espacio base (100 x 200 cm aprox.) y altura suficiente.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Qué modelo es más compacto?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              El modelo económico con escritorio integrado es el más compacto. La cama loft con
              escritorio también es excelente: deja más espacio libre en el piso.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarote-con-escritorio-departamento"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🏢</span>
              <span className="font-semibold text-gray-900 text-sm">Para Departamento</span>
            </Link>
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-habitacion-pequena"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📐</span>
              <span className="font-semibold text-gray-900 text-sm">Habitación Pequeña</span>
            </Link>
            <Link
              href="/cama-loft-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🪜</span>
              <span className="font-semibold text-gray-900 text-sm">Cama Loft con Escritorio</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Tienes un monoambiente y no sabes dónde meter todo?</h2>
          <p className="text-gray-400 text-sm mb-6">
            El camarote con escritorio es la solución. Cuéntanos las medidas de tu departamento y
            la altura del techo. Te orientamos con el modelo más compacto.
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
