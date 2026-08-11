import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Desmontable | Chile",
  description:
    "Camarote metálico con escritorio desmontable en Chile. Fácil de armar y desarmar. Ideal para arriendos y mudanzas. Llega desarmado, se instala sin herramientas especiales.",
  keywords: [
    "camarote con escritorio desmontable",
    "camarote escritorio armado facil",
    "litera desmontable escritorio chile",
    "camarote escritorio mudanza",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-desmontable" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, quiero un camarote con escritorio desmontable. ¿Llega armado o lo armo yo?"
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
                name: "¿Cuánto tiempo tarda el armado del camarote desmontable?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Con las instrucciones incluidas y las herramientas básicas (llave inglesa o de combinación), el armado toma entre 30 y 60 minutos para una persona. Con ayuda de otra persona puede ser aún más rápido.",
                },
              },
              {
                "@type": "Question",
                name: "¿Necesito herramientas especiales para armar el camarote?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Se arma con herramientas básicas de hogar: llave inglesa o de combinación. Toda la tornillería viene incluida en el paquete con instrucciones paso a paso.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se debilita la estructura al armar y desarmar varias veces?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Con un uso razonable (armar y desarmar por mudanzas, no uso diario), la estructura mantiene su resistencia. Los tornillos y uniones están diseñados para soportar varios ciclos de montaje.",
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
          <span className="text-gray-700 font-medium">Desmontable</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Fácil de armar · Ideal para arriendos
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio Desmontable
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          Si arriendas o te mudas con frecuencia, el camarote desmontable te permite armarlo y
          desarmarlo sin necesidad de soldar ni herramientas especiales. Ideal para quienes no
          quieren comprometerse con un mueble fijo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Sin soldadura visible</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Las uniones son mecánicas con tornillería. No hay soldaduras que debas romper para
              desarmarlo — puedes hacerlo en casa sin equipo especial.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Tornillería incluida</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Viene completo con todos los tornillos, tuercas y piezas necesarias para el armado.
              Sin compras adicionales de ferretería.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Instrucciones paso a paso</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Incluye manual de armado con instrucciones claras. Sin experiencia previa con muebles
              metálicos puedes armarlo correctamente.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Se traslada fácil</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Armado, el camarote no cabe por la puerta de una pieza. Desmontado, se transporta en
              auto o furgón sin problema.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Cuánto tiempo tarda el armado?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Con instrucciones y herramientas básicas, el armado toma entre 30 y 60 minutos para
              una persona. Con ayuda puede ser más rápido.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Necesito herramientas?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Solo herramientas básicas de hogar: llave inglesa o de combinación. Toda la tornillería
              viene incluida con el pedido.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Se debilita al desarmar?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Con uso razonable (mudanzas, no desmontaje diario), la estructura mantiene su
              resistencia. Los tornillos están diseñados para varios ciclos.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarote-desmontable"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🔧</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote Desmontable</span>
            </Link>
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-pieza-arrendada"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🏠</span>
              <span className="font-semibold text-gray-900 text-sm">Para Pieza Arrendada</span>
            </Link>
            <Link
              href="/instalacion-camarotes"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🪛</span>
              <span className="font-semibold text-gray-900 text-sm">Instalación</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Arriendes o te mudas seguido?</h2>
          <p className="text-gray-400 text-sm mb-6">
            El camarote desmontable es tu solución. Cuéntanos y te orientamos con el modelo
            correcto para tu situación.
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
