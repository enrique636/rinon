import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote Escritorio Dormitorio Compartido | Chile",
  description:
    "Camarote con escritorio para dormitorios compartidos en Chile. Cada persona tiene su cama y zona de trabajo en el mismo mueble. Espacio optimizado al máximo.",
  keywords: [
    "camarote con escritorio dormitorio compartido",
    "litera escritorio pieza compartida chile",
    "camarote dos personas escritorio",
    "cama doble escritorio compartido",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-dormitorio-compartido" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, busco un camarote con escritorio para dos personas adultas compartiendo cuarto. ¿Qué tienen?"
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
                name: "¿Cómo se divide el espacio en un dormitorio compartido con camarote?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El camarote con escritorio permite que la persona de arriba tenga su cama privada y la de abajo tenga su zona de trabajo. Aunque comparten el mismo mueble, cada uno tiene su espacio definido y sin interferir en el del otro.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cada persona tiene su propio escritorio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En el modelo estándar, el escritorio es compartido y está en la parte inferior del camarote. Si ambas personas necesitan escritorio propio, se pueden colocar dos camarotes con escritorio en la misma pieza, maximizando el espacio.",
                },
              },
              {
                "@type": "Question",
                name: "¿Hay modelos de camarote con escritorio para dos adultos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. El modelo para adultos tiene estructura reforzada que soporta el peso de dos adultos. También hay opciones de 1,5 plazas para más comodidad en la cama. Consulta al cotizar según las necesidades de los usuarios.",
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
          <span className="text-gray-700 font-medium">Dormitorio Compartido</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Dormitorio compartido · Espacio para dos
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio para Dormitorios Compartidos
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          Cuando dos personas comparten dormitorio, el camarote permite que cada uno tenga su zona
          sin invadir el espacio del otro. La cama de arriba y la zona de trabajo de abajo,
          organizadas verticalmente.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Zona de cada uno definida</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Cama de arriba para uno, zona de escritorio abajo para el otro. Espacios definidos y
              separados sin necesidad de más muebles.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Privacidad vertical</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              La separación vertical entre la cama y el escritorio da privacidad visual a cada
              zona sin necesidad de divisiones ni cortinas.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escritorio accesible para ambos</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El escritorio en la parte inferior puede ser compartido en horarios distintos, o se
              pueden poner dos camarotes para que cada uno tenga el propio.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Misma estructura, más organización</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Un solo mueble reemplaza dos camas y un escritorio, liberando espacio para zonas
              comunes dentro del mismo dormitorio compartido.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Cómo se divide el espacio?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              La persona de arriba tiene su cama privada. La de abajo tiene su zona de trabajo.
              Cada uno en su espacio, sin interferir con el del otro.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Cada uno tiene su escritorio?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              En el modelo estándar el escritorio es compartido. Si ambos necesitan escritorio propio,
              se pueden poner dos camarotes en la misma pieza para maximizar el espacio.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Hay modelos para dos adultos?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. El modelo adulto tiene estructura reforzada para dos adultos. También hay opciones
              de 1,5 plazas para más comodidad. Consulta al cotizar.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarote-con-escritorio-dos-hermanos"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">👫</span>
              <span className="font-semibold text-gray-900 text-sm">Para Dos Hermanos</span>
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
            <Link
              href="/camarote-con-escritorio-adulto"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">👤</span>
              <span className="font-semibold text-gray-900 text-sm">Versión Adulto</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Comparten dormitorio?</h2>
          <p className="text-gray-400 text-sm mb-6">
            Cuéntanos quiénes son los usuarios, las medidas de la pieza y las necesidades de cada
            uno. Te orientamos con la mejor configuración.
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
