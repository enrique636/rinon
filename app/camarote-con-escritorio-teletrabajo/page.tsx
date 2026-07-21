import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio para Teletrabajo | Chile",
  description:
    "Camarote con escritorio diseñado para teletrabajo en Chile. Cama arriba, escritorio home office abajo. Aprovecha el espacio vertical del dormitorio. Fabricante directo.",
  keywords: [
    "camarote con escritorio teletrabajo",
    "cama alta escritorio teletrabajo chile",
    "litera teletrabajo escritorio",
    "camarote home office escritorio",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-teletrabajo" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, necesito un camarote con escritorio para teletrabajo. ¿Cuál modelo me recomiendan?"
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
                name: "¿Es ergonómico trabajar 8 horas en el escritorio del camarote?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El escritorio del camarote está diseñado a altura estándar de trabajo. Para jornadas largas te recomendamos agregar una silla ergonómica de buena calidad y verificar que la pantalla quede a la altura correcta de los ojos. El escritorio en sí es estable y tiene el espacio suficiente para trabajar cómodamente.",
                },
              },
              {
                "@type": "Question",
                name: "¿El escritorio aguanta monitor + PC para teletrabajo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Al ser parte de la estructura metálica, el escritorio soporta el peso de monitor, laptop o torre y demás elementos de trabajo sin flexionarse. Es más estable que la mayoría de los escritorios independientes.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué altura tiene el escritorio del camarote?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La altura del escritorio varía según el modelo y la configuración. En general queda entre 70-80 cm, similar a un escritorio estándar. Consulta la medida exacta del modelo que te interesa al cotizar.",
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
          <span className="text-gray-700 font-medium">Para Teletrabajo</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Para teletrabajo · Home office vertical
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio para Teletrabajo
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          Cuando el dormitorio y la oficina son la misma habitación, el camarote libera el espacio
          horizontal dejando un escritorio debajo completamente despejado — sin que la cama invada
          tu zona de trabajo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escritorio dedicado abajo</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Zona de trabajo completa con espacio para monitor, laptop, teclado y todos los
              elementos de tu oficina en casa.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">La cama no invade el escritorio</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              La cama elevada y el escritorio son zonas separadas del mismo mueble. No tienes que
              apartar la cama para trabajar ni vice versa.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Espacio para monitor y PC</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El escritorio soporta el peso de un setup completo de teletrabajo: monitor, laptop,
              impresora y accesorios de oficina.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Ideal para piezas de arriendo</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              En una pieza de 10-12 m², el camarote con escritorio resuelve cama + oficina sin
              comprometer el espacio de movimiento.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Es ergonómico para trabajar 8 horas?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              El escritorio está a altura estándar de trabajo. Para jornadas largas agrega una silla
              ergonómica y verifica la altura de la pantalla. La superficie es estable y espaciosa.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿El escritorio aguanta monitor + PC?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Al ser parte de la estructura metálica es más estable que la mayoría de escritorios
              independientes. Soporta monitor, laptop, impresora y accesorios.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Qué altura tiene el escritorio?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              En general entre 70-80 cm, similar a un escritorio estándar. Consulta la medida exacta
              del modelo que te interesa al cotizar.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarote-con-escritorio-home-office"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🏠</span>
              <span className="font-semibold text-gray-900 text-sm">Home Office</span>
            </Link>
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-departamento"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🏢</span>
              <span className="font-semibold text-gray-900 text-sm">Para Departamento</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-monoambiente"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🏙️</span>
              <span className="font-semibold text-gray-900 text-sm">Para Monoambiente</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Trabajas desde casa en tu dormitorio?</h2>
          <p className="text-gray-400 text-sm mb-6">
            El camarote con escritorio es la solución definitiva para teletrabajar desde un
            departamento pequeño. Cuéntanos tu espacio y te orientamos.
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
