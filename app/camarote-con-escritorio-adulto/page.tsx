import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio para Adultos | Chile",
  description:
    "Camarote metálico con escritorio diseñado para adultos en Chile. Mayor resistencia de carga, escritorio amplio y altura ergonómica. Despacho e instalación a domicilio.",
  keywords: [
    "camarote con escritorio adulto",
    "litera escritorio adulto chile",
    "cama alta escritorio adulto",
    "camarote metalico adulto escritorio",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-adulto" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, quiero un camarote con escritorio para adulto. ¿Cuáles son las medidas y capacidad de carga?"
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
                name: "¿En qué se diferencia el camarote con escritorio para adultos del infantil?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El modelo para adultos usa perfiles de acero de mayor calibre, soldaduras reforzadas y soporta mayor capacidad de carga. El escritorio también es más amplio y está a una altura ergonómica pensada para usuarios adultos sentados en silla de altura estándar.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto peso soporta el camarote con escritorio para adultos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La estructura reforzada para adultos soporta entre 150-200 kg en la cama superior. Consulta el modelo específico al cotizar para confirmar la capacidad exacta.",
                },
              },
              {
                "@type": "Question",
                name: "¿Hay medidas especiales para adultos altos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Fabricamos a medida y podemos extender el largo de la cama hasta 200 cm o más. Solo indícanos tu estatura y la altura del techo al cotizar.",
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
          <span className="text-gray-700 font-medium">Para Adultos</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Para adultos · Mayor resistencia
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio para Adultos
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          A diferencia del modelo infantil, el camarote adulto tiene estructura más robusta, mayor
          capacidad de carga y escritorio a altura ergonómica. Ideal para universitarios, profesionales
          y personas que trabajan desde casa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Mayor capacidad de carga</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Estructura en acero de mayor calibre que soporta el peso de un adulto sin deformaciones
              con el paso del tiempo.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escritorio más amplio</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Superficie de trabajo generosa para monitor, laptop, teclado y materiales de trabajo o
              estudio.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Altura ergonómica adulto</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El escritorio queda a la altura correcta para una silla de trabajo estándar. Sin
              posturas forzadas ni incomodidades.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Misma estética que cualquier modelo</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Disponible en colores a elección con pintura electrostática al horno. No se nota la
              diferencia visual con el modelo estándar.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿En qué se diferencia del infantil?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              El modelo adulto usa perfiles de acero de mayor calibre, soldaduras reforzadas y mayor
              capacidad de carga. El escritorio es más amplio y está a altura ergonómica para adultos
              sentados.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Cuánto peso soporta?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              La estructura reforzada soporta entre 150-200 kg en la cama superior. Más que suficiente
              para adultos. Consulta el modelo específico al cotizar.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Hay medidas especiales para adultos altos?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Fabricamos a medida y podemos extender el largo hasta 200 cm o más. Solo indícanos
              tu estatura y la altura del techo al cotizar.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🛏️</span>
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
              href="/camarotes-adultos"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">👤</span>
              <span className="font-semibold text-gray-900 text-sm">Camarotes para Adultos</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-full"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">⭐</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote Full</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuánto mides y cuánto pesas?</h2>
          <p className="text-gray-400 text-sm mb-6">
            Dinos tu estatura, peso y la medida de tu pieza. Te indicamos el modelo adulto correcto y
            si necesitas cambio de medida.
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
