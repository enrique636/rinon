import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio 1,5 Plazas | Chile",
  description:
    "Camarote metálico con escritorio de 1,5 plazas en Chile. Mayor comodidad para adolescentes y adultos. Fabricante directo. Despacho e instalación a tu domicilio.",
  keywords: [
    "camarote con escritorio plaza y media",
    "camarote 1.5 plazas con escritorio",
    "litera plaza y media escritorio chile",
    "cama alta 1.5 plazas escritorio",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-plaza-y-media" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, quiero un camarote de 1,5 plazas con escritorio. ¿Tienen ese modelo?"
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
                name: "¿Cuánto mide un camarote de 1,5 plazas exactamente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Una plaza y media equivale a aproximadamente 120 cm de ancho, a diferencia de la plaza sencilla (90 cm) y el matrimonial (140-150 cm). Es la medida intermedia ideal para adolescentes o adultos que quieren más espacio sin llegar al tamaño matrimonial.",
                },
              },
              {
                "@type": "Question",
                name: "¿El escritorio también es más ancho en el modelo 1,5 plazas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El escritorio integrado suele tener el mismo ancho que la cama o ligeramente menor para optimizar el espacio. Consúltanos las medidas exactas del escritorio al cotizar según el modelo.",
                },
              },
              {
                "@type": "Question",
                name: "¿El camarote de 1,5 plazas con escritorio se fabrica a pedido?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Fabricamos a pedido y podemos ajustar las medidas a tu espacio. El plazo habitual es de 10 a 15 días hábiles desde la confirmación del pedido.",
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
          <span className="text-gray-700 font-medium">1,5 Plazas</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          1,5 plazas · Más espacio
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio de 1½ Plaza
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          Más ancha que una plaza sencilla pero sin llegar al matrimonial — la medida ideal para
          adolescentes y adultos que quieren más comodidad en la cama sin sacrificar el espacio de
          la pieza.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Más espacio que una plaza</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Con 120 cm de ancho, la cama de 1,5 plazas da mucho más espacio para dormir cómodo sin
              llegar al tamaño de una cama matrimonial.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escritorio integrado abajo</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              El escritorio viene integrado en la estructura del camarote, sin muebles adicionales.
              Espacio de trabajo desde el primer día.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escalera con peldaños cómodos</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Los peldaños están diseñados para subir y bajar con comodidad, con separación y
              profundidad pensada para pie adulto.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Disponible en varios colores</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Pintura electrostática al horno en colores a elección: blanco, negro, gris y más.
              Consulta disponibilidad al cotizar.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Cuánto mide 1,5 plazas exactamente?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Una plaza y media equivale a aproximadamente 120 cm de ancho. Entre la plaza sencilla
              (90 cm) y el matrimonial (140-150 cm). Es la medida intermedia perfecta.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿El escritorio también es más ancho?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              El escritorio integrado suele tener el mismo ancho que la cama o ligeramente menor.
              Consúltanos las medidas exactas al cotizar según el modelo.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Se fabrica a pedido?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Fabricamos a pedido y podemos ajustar medidas a tu espacio. El plazo habitual es
              de 10 a 15 días hábiles desde la confirmación.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarote-1-5-plazas"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🛏️</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote 1,5 Plazas</span>
            </Link>
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-adulto"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">👤</span>
              <span className="font-semibold text-gray-900 text-sm">Versión Adulto</span>
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
          <h2 className="text-2xl font-bold mb-2">Cotiza tu camarote de 1,5 plazas</h2>
          <p className="text-gray-400 text-sm mb-6">
            Cuéntanos las medidas de tu pieza y confirma la disponibilidad del modelo. Respondemos
            en minutos.
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
