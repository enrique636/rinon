import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio y Estantes | Modelo Full",
  description:
    "Camarote metálico con escritorio y estantes integrados en Chile. Cama, escritorio y almacenamiento en un solo mueble. La solución más completa para piezas pequeñas.",
  keywords: [
    "camarote con escritorio y estantes",
    "camarote escritorio estantes chile",
    "litera escritorio almacenamiento",
    "camarote full escritorio estanteria",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-y-estantes" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, quiero un camarote con escritorio y estantes. ¿Cómo es el modelo full?"
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
                name: "¿Cuántos estantes incluye el camarote con escritorio y estantes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El número de estantes varía según el modelo. Los estantes laterales suelen ser entre 2 y 4 niveles. Consulta el modelo específico al cotizar para confirmar la cantidad y medidas exactas.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se pueden personalizar los estantes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Fabricamos a medida y podemos ajustar la cantidad, altura y distribución de los estantes según tus necesidades. Cuéntanos qué quieres guardar y te orientamos.",
                },
              },
              {
                "@type": "Question",
                name: "¿El escritorio es fijo o plegable?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En la mayoría de los modelos el escritorio es fijo y forma parte de la estructura metálica, lo que le da mayor estabilidad para trabajar cómodamente. Consulta si hay versión plegable disponible al cotizar.",
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
          <span className="text-gray-700 font-medium">Con Escritorio y Estantes</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Todo en uno · Cama + Escritorio + Estantes
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio y Estantes Integrados
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          El modelo más completo: arriba la cama, abajo el escritorio, y estantes laterales para
          libros, útiles y decoración. Todo en un solo mueble, sin ocupar más espacio que un
          camarote estándar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escritorio integrado</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Superficie de trabajo amplia para PC, laptop o estudio. Forma parte de la estructura
              metálica para mayor estabilidad.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Estantes para libros</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Estantes laterales para libros, útiles, decoración y todo lo que necesites tener a
              mano en tu zona de trabajo.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Espacio para PC o monitor</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El escritorio tiene la profundidad y altura necesarias para acomodar un monitor de
              escritorio o un setup de laptop con periféricos.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Sin muebles adicionales</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Un solo mueble reemplaza la cama, el escritorio y la estantería. La pieza queda mucho
              más despejada y organizada.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Cuántos estantes incluye?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              El número de estantes varía según el modelo. Los estantes laterales suelen ser entre 2
              y 4 niveles. Consulta las medidas exactas al cotizar.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Se pueden personalizar los estantes?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Fabricamos a medida y podemos ajustar cantidad, altura y distribución. Cuéntanos
              qué necesitas guardar y te orientamos.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿El escritorio es fijo o plegable?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              En la mayoría de los modelos el escritorio es fijo y forma parte de la estructura
              metálica, dando mayor estabilidad para trabajar. Consulta versión plegable al cotizar.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarote-con-escritorio-full"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">⭐</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote Full</span>
            </Link>
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-a-medida"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📐</span>
              <span className="font-semibold text-gray-900 text-sm">A Medida</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-premium"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">✨</span>
              <span className="font-semibold text-gray-900 text-sm">Versión Premium</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">El mueble más completo para tu pieza</h2>
          <p className="text-gray-400 text-sm mb-6">
            Cama, escritorio y estantes en un solo módulo. Cuéntanos las medidas de tu espacio y te
            mostramos el modelo full más adecuado.
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
