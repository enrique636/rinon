import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Litera con Escritorio | Camarote Metálico Chile",
  description:
    "Litera con escritorio integrado en Chile. En Chile llamamos camarote a lo que en otros países es litera — misma función, distinto nombre. Metálica y resistente.",
  keywords: [
    "litera con escritorio chile",
    "litera metalica con escritorio",
    "litera con escritorio integrado",
    "litera escritorio dormitorio chile",
  ],
  alternates: { canonical: "https://rinon.cl/litera-con-escritorio" },
};

export default function Page() {
  const wa = getWhatsAppUrl("Hola, busco una litera con escritorio. ¿Qué modelos tienen?");
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
                name: "¿Litera y camarote son lo mismo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En Chile, la palabra 'camarote' es el término habitual para referirse a lo que en España y otros países de Latinoamérica se llama 'litera'. Son exactamente lo mismo: una estructura con dos camas una sobre la otra. Si buscas una litera con escritorio, en Chile la encontrarás como camarote con escritorio.",
                },
              },
              {
                "@type": "Question",
                name: "¿El escritorio es de metal o madera?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El escritorio integrado en nuestros camarotes es parte de la estructura metálica. La superficie puede incluir un tablero de MDF o metal según el modelo. Consulta el detalle del modelo que te interesa al cotizar.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto soporta la cama de arriba?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La cama superior de nuestros camarotes metálicos soporta entre 120-200 kg según el modelo. El acero garantiza una resistencia muy superior a la madera sin deformarse con el tiempo.",
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
          <span className="text-gray-700 font-medium">Litera con Escritorio</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Litera = Camarote en Chile
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Litera con Escritorio Integrado
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          En Chile la palabra &quot;camarote&quot; es equivalente a &quot;litera&quot;. Si buscas
          una litera con escritorio, estás en el lugar correcto — fabricamos camarotes metálicos con
          escritorio integrado directamente en Santiago.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Dos niveles de cama</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              La litera clásica tiene dos camas apiladas. El modelo con escritorio reemplaza la cama
              inferior por una estación de trabajo completa.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escritorio integrado en estructura</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El escritorio es parte de la estructura metálica del camarote, no un mueble aparte.
              Más estabilidad y acabado más limpio.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Metal resistente</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Fabricado en acero con pintura electrostática al horno. No se oxida, no se deforma y
              dura muchos años sin mantenimiento especial.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Precio de fabricante</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Fabricamos directamente en Chile. Sin intermediarios, sin importaciones. El precio que
              pagas es el precio del fabricante.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Litera y camarote son lo mismo?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. En Chile &quot;camarote&quot; es el término habitual para lo que en otros países se
              llama &quot;litera&quot;. Si buscas una litera con escritorio, en Chile la encontrarás
              como camarote con escritorio.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿El escritorio es de metal o madera?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              El escritorio integrado es parte de la estructura metálica. La superficie puede incluir
              tablero de MDF o metal según el modelo. Consulta al cotizar.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Cuánto soporta la cama de arriba?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              La cama superior soporta entre 120-200 kg según el modelo. El acero garantiza
              resistencia muy superior a la madera sin deformarse con el tiempo.
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
              href="/literas"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🛏️</span>
              <span className="font-semibold text-gray-900 text-sm">Literas (Camarotes)</span>
            </Link>
            <Link
              href="/litera-metalica"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🔩</span>
              <span className="font-semibold text-gray-900 text-sm">Litera Metálica</span>
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
          <h2 className="text-2xl font-bold mb-2">¿Buscas una litera con escritorio?</h2>
          <p className="text-gray-400 text-sm mb-6">
            Aquí lo llamamos camarote con escritorio — pero es exactamente lo que buscas. Cotiza
            ahora y te orientamos con el modelo ideal.
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
