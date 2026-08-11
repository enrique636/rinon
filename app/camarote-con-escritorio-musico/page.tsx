import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio para Músico | Chile",
  description:
    "Camarote con escritorio para músicos y productores en Chile. Cama arriba, escritorio abajo para controlador, PC y equipo de grabación. Colores a elección.",
  keywords: [
    "camarote con escritorio musico",
    "litera productor musical chile",
    "camarote escritorio estudio musica",
    "cama alta productor musical chile",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-musico" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, soy productor musical y quiero un camarote con escritorio amplio para mi equipo. ¿Qué modelos tienen?"
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
                name: "¿El escritorio es suficientemente amplio para equipo de producción musical?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El escritorio del camarote tiene espacio para laptop o PC, interfaz de audio, teclado MIDI y accesorios básicos de producción. Para setups muy grandes con múltiples monitores y racks de equipos, consúltanos las medidas exactas al cotizar para confirmar que encaja tu equipo.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se puede personalizar el color para un estudio de música?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Tenemos colores disponibles con pintura electrostática al horno. El negro mate es el más solicitado para estudios de música por su aspecto profesional. Consulta la disponibilidad de colores al cotizar.",
                },
              },
              {
                "@type": "Question",
                name: "¿El escritorio es nivelado y estable para equipo sensible?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Al ser parte de la estructura metálica, el escritorio es completamente plano y estable. No vibra ni se mueve, lo que es importante para equipo de audio sensible como interfaces y controladores.",
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
          <span className="text-gray-700 font-medium">Para Músicos</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Para músicos · Estudio en casa
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio para Músicos y Productores
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          La pieza del músico necesita espacio para el equipo — controlador, interfaz, monitores de
          mezcla, PC — sin sacrificar la cama. El camarote pone la cama arriba y deja el escritorio
          completamente libre para tu setup de producción.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escritorio amplio para equipo musical</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Superficie suficiente para laptop o PC, interfaz de audio, teclado MIDI y accesorios
              de producción. Sin objetos de la cama invadiendo el área de trabajo.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Cama arriba sin interferir</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              La cama elevada deja el área del escritorio completamente despejada. Puedes trabajar en
              tu estudio sin que la cama invada el espacio visual.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Gestión de cables posible</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              La estructura metálica permite sujetar organizadores de cables para mantener ordenado
              el cableado de audio y datos de tu setup.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Negro mate o color a elección</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El negro mate es el más solicitado para estudios de música. También disponible en
              otros colores con pintura electrostática al horno.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿El escritorio es suficientemente amplio para equipo de producción?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Tiene espacio para laptop, interfaz de audio, teclado MIDI y accesorios básicos. Para
              setups más grandes, consúltanos las medidas exactas al cotizar.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Se puede personalizar el color?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Negro mate, blanco y otros colores disponibles con pintura electrostática. Consulta
              la disponibilidad al cotizar.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿El escritorio es nivelado y estable?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Al ser parte de la estructura metálica es completamente plano y estable. No vibra
              ni se mueve, ideal para equipo de audio sensible.
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
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-negro"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">⬛</span>
              <span className="font-semibold text-gray-900 text-sm">En Negro Mate</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-home-office"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🏠</span>
              <span className="font-semibold text-gray-900 text-sm">Home Office</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-teletrabajo"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">💻</span>
              <span className="font-semibold text-gray-900 text-sm">Para Teletrabajo</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Produces música en tu pieza?</h2>
          <p className="text-gray-400 text-sm mb-6">
            Cuéntanos las medidas de tu espacio y qué equipo necesitas acomodar. Te orientamos con
            el modelo de escritorio más adecuado para tu setup.
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
