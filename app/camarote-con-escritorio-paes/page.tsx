import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio para Estudiar PAES",
  description:
    "Camarote con escritorio para preparar la PAES en Chile. Tu zona de estudio dentro del dormitorio. Espacio para libros, PC y apuntes. Fabricante directo en Santiago.",
  keywords: [
    "camarote con escritorio paes",
    "cama alta escritorio estudiar chile",
    "camarote estudiante secundaria escritorio",
    "litera escritorio estudiar paes",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-paes" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, quiero un camarote con escritorio para que mi hijo estudie para la PAES. ¿Qué me recomiendan?"
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
                name: "¿Cuánto espacio tiene el escritorio para estudiar la PAES?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El escritorio tiene espacio suficiente para libros, cuadernos, laptop y materiales de estudio simultáneamente. La profundidad y el ancho varían según el modelo — consúltanos al cotizar para confirmar las medidas exactas.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se puede agregar una luz de escritorio al camarote?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Puedes agregar una lámpara de escritorio con brazo flexible que se sujete a la superficie o una lámpara de clip que se fije a la estructura metálica. La estructura de metal facilita este tipo de accesorios.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué modelo es mejor para estudiar muchas horas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Para estudio intensivo recomendamos el modelo con escritorio más amplio (Full o con estantes) que da más espacio para libros y materiales. También es útil que tenga estantes adicionales para organizar el material por ramo.",
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
          <span className="text-gray-700 font-medium">Para Estudiar la PAES</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Para estudiantes · Zona de estudio propia
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio para Estudiar la PAES
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          El año de preparación de la PAES requiere muchas horas de estudio en casa. Tener tu propia
          estación de trabajo dentro del dormitorio — sin salir a la mesa del comedor — hace toda la
          diferencia en concentración y hábito de estudio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escritorio amplio para libros y PC</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Superficie suficiente para libros, cuadernos, laptop y materiales de estudio al mismo
              tiempo. Sin tener que apilar ni ordenar entre materia y materia.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Cama arriba no interrumpe el estudio</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              La cama elevada separa visualmente el área de descanso del área de estudio, lo que
              ayuda a mantener el foco cuando estás en el escritorio.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Estantes adicionales disponibles</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El modelo Full incluye estantes para organizar libros y materiales por ramo. Todo al
              alcance de la mano desde el escritorio.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Espacio privado de concentración</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Tener un espacio propio para estudiar — no la mesa del comedor — facilita los hábitos
              y el rendimiento en los meses de preparación.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Cuánto espacio tiene el escritorio?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Espacio para libros, cuadernos y laptop simultáneamente. Las medidas varían según el
              modelo — consúltanos al cotizar para confirmar las dimensiones exactas.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Se puede agregar luz de escritorio?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Puedes agregar lámpara con brazo flexible o de clip que se sujete a la estructura
              metálica. La estructura facilita este tipo de accesorios.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Qué modelo es mejor para estudiar?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Para estudio intensivo recomendamos el modelo Full con estantes. Da más espacio para
              organizar los materiales por ramo sin saturar el escritorio.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarote-con-escritorio-universitario"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🎓</span>
              <span className="font-semibold text-gray-900 text-sm">Para Universitarios</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-adolescente"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🧑</span>
              <span className="font-semibold text-gray-900 text-sm">Para Adolescentes</span>
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
          <h2 className="text-2xl font-bold mb-2">Dale a tu hijo un espacio de estudio propio</h2>
          <p className="text-gray-400 text-sm mb-6">
            Un camarote con escritorio dentro del dormitorio puede marcar la diferencia en la
            preparación de la PAES. Cotiza ahora y lo tenemos listo pronto.
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
