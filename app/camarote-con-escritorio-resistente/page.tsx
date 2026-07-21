import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Resistente | Acero Chile",
  description:
    "Camarote metálico con escritorio de alta resistencia en Chile. Acero reforzado, mayor capacidad de carga y soldaduras reforzadas. Para uso adulto e intensivo.",
  keywords: [
    "camarote con escritorio resistente",
    "litera resistente escritorio chile",
    "camarote acero reforzado escritorio",
    "cama alta resistente escritorio",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-resistente" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, necesito un camarote con escritorio de alta resistencia para adulto. ¿Tienen ese modelo reforzado?"
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
                name: "¿Cuánto más resistente es el modelo reforzado vs el estándar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El modelo de alta resistencia usa perfiles de acero de mayor calibre (espesor de tubo), lo que se traduce en una capacidad de carga entre 30-50% mayor y una vida útil más larga bajo uso intensivo. Las soldaduras también son más gruesas y con mayor penetración.",
                },
              },
              {
                "@type": "Question",
                name: "¿En qué se nota la diferencia visualmente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Visualmente la diferencia es sutil: los tubos son ligeramente más gruesos. La diferencia real se nota en el peso del mueble (más pesado = más acero) y en la firmeza al usarlo: no flexiona ni vibra al subir o moverse en la cama.",
                },
              },
              {
                "@type": "Question",
                name: "¿Tiene garantía de estructura?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Todos nuestros camarotes tienen garantía de fabricación contra defectos de soldadura y estructura. Consulta los términos específicos al cotizar.",
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
          <span className="text-gray-700 font-medium">Alta Resistencia</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Alta resistencia · Acero reforzado
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio de Alta Resistencia
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          Cuando el uso será intensivo o los usuarios son adultos de mayor peso, la estructura
          reforzada garantiza durabilidad sin deformaciones. Acero de mayor calibre, soldaduras más
          gruesas y mayor capacidad de carga.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Acero de mayor calibre</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Los tubos estructurales tienen mayor espesor de pared, lo que se traduce directamente
              en más rigidez y resistencia a la flexión.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Soldaduras reforzadas</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Mayor penetración y cordón de soldadura más grueso en todos los puntos de unión.
              La zona más crítica de cualquier estructura metálica.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Mayor capacidad de carga</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Capacidad de carga entre 30-50% mayor que el modelo estándar. Ideal para adultos de
              más peso o uso intensivo prolongado.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Para uso adulto intensivo</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Pensado para adultos, talleres, residencias estudiantiles o cualquier contexto donde
              el camarote se use más intensamente que en un hogar normal.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Cuánto más resistente que el estándar?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Usa perfiles de acero de mayor calibre con capacidad de carga 30-50% mayor. Las
              soldaduras también son más gruesas y con mayor penetración.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿En qué se nota la diferencia?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Los tubos son ligeramente más gruesos y el mueble pesa más. La diferencia real está en
              que no flexiona ni vibra al subir o moverse en la cama.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Tiene garantía de estructura?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Todos nuestros camarotes tienen garantía contra defectos de soldadura y estructura.
              Consulta los términos al cotizar.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarote-con-escritorio-adulto"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">👤</span>
              <span className="font-semibold text-gray-900 text-sm">Versión Adulto</span>
            </Link>
            <Link
              href="/camarote-de-acero"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🔩</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote de Acero</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-a-medida"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📐</span>
              <span className="font-semibold text-gray-900 text-sm">A Medida</span>
            </Link>
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas resistencia extra?</h2>
          <p className="text-gray-400 text-sm mb-6">
            Cuéntanos el peso del usuario y el tipo de uso. Te indicamos si el modelo estándar es
            suficiente o si necesitas el modelo reforzado.
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
