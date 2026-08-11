import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Blanco | Moderno Chile",
  description:
    "Camarote metálico con escritorio en blanco en Chile. Acabado limpio y luminoso con pintura electrostática. Ideal para dormitorios modernos y minimalistas.",
  keywords: [
    "camarote con escritorio blanco",
    "litera blanca con escritorio chile",
    "cama alta blanca escritorio",
    "camarote metalico blanco escritorio",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-blanco" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, quiero un camarote con escritorio en color blanco. ¿Cuáles son las opciones?"
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
                name: "¿El blanco se mantiene o amarilla con el tiempo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La pintura electrostática al horno en blanco tiene una formulación resistente al amarillamiento. A diferencia de los plásticos o pinturas convencionales, el acabado electrostático mantiene el color blanco por años con una limpieza básica ocasional.",
                },
              },
              {
                "@type": "Question",
                name: "¿Hay blanco mate y blanco brillante disponible?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Ofrecemos blanco en acabado mate y blanco brillante. El mate da un aspecto más moderno y minimalista. El brillante es más clásico y refleja más la luz. Consulta disponibilidad según el modelo al cotizar.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se puede limpiar con productos de limpieza habituales?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. El acabado electrostático se limpia fácilmente con un paño húmedo y jabón. Evita abrasivos o limpiadores ácidos fuertes que puedan dañar la superficie.",
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
          <span className="text-gray-700 font-medium">Blanco</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Blanco · Estilo limpio y moderno
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio en Blanco
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          El blanco es el color más solicitado para dormitorios modernos y piezas luminosas. Combina
          con cualquier estilo decorativo y hace que los espacios se vean más amplios y ordenados.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Pintura electrostática al horno</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El mismo proceso de calidad que en el modelo negro: curado a alta temperatura para
              máxima resistencia y durabilidad.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Acabado blanco sólido</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Blanco sólido sin transparencias ni irregularidades. Cobertura completa y uniforme en
              toda la estructura del camarote.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Resistente al amarillamiento</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Formulación especial que mantiene el blanco brillante por años, sin el amarillamiento
              típico de plásticos o pinturas convencionales.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Combina con cualquier decoración</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El blanco es el color más versátil. Combina con madera, colores vivos, tonos neutros
              y cualquier estilo de dormitorio.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿El blanco se mantiene o amarilla?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              La pintura electrostática al horno en blanco tiene formulación resistente al
              amarillamiento. Mantiene el color por años con limpieza básica.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Hay blanco mate y blanco brillante?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. El mate es más moderno y minimalista. El brillante es más clásico. Consulta la
              disponibilidad según el modelo al cotizar.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Se puede limpiar con productos habituales?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Se limpia con paño húmedo y jabón. Evita abrasivos o limpiadores ácidos fuertes
              que puedan dañar la superficie.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarote-con-escritorio-premium"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">✨</span>
              <span className="font-semibold text-gray-900 text-sm">Versión Premium</span>
            </Link>
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
            <Link
              href="/pintura-electrostatica"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🎨</span>
              <span className="font-semibold text-gray-900 text-sm">Pintura Electrostática</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-nino"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">👦</span>
              <span className="font-semibold text-gray-900 text-sm">Para Niños</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Lo quieres en blanco?</h2>
          <p className="text-gray-400 text-sm mb-6">
            Disponible en la mayoría de nuestros modelos. Cuéntanos qué modelo te interesa y
            confirmamos la disponibilidad del color blanco y el acabado.
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
