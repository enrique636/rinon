import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes con Escritorio para Hostal | Chile",
  description:
    "Camarotes metálicos con escritorio para hostales en Chile. Para viajeros que trabajan de forma remota. Uso intensivo, resistentes, con factura y precio por volumen.",
  keywords: [
    "camarote con escritorio hostal",
    "litera escritorio hostal chile",
    "camarotes hostal escritorio viajeros",
    "camarotes para hostal con escritorio",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-hostal" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, tengo un hostal y quiero camarotes con escritorio. ¿Cuánto cuestan por unidad para compra en volumen?"
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
                name: "¿Cuántas unidades mínimo para obtener descuento de hostal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A partir de 5 unidades aplican precios especiales para hostales. Para 10 o más unidades, el descuento es mayor. Contacta con el número exacto de camas que necesitas para recibir una cotización personalizada.",
                },
              },
              {
                "@type": "Question",
                name: "¿Hay un modelo específico de camarote con escritorio para hostales?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Recomendamos el modelo estándar con escritorio integrado en estructura reforzada. Para hostales priorizamos resistencia al uso intensivo diario por muchos años. También podemos adaptar colores y acabados según la identidad visual del hostal.",
                },
              },
              {
                "@type": "Question",
                name: "¿Entregan e instalan los camarotes directamente en el hostal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Para pedidos de hostal coordinamos la entrega e instalación directamente en el establecimiento. Coordinamos el plazo según el volumen del pedido y la disponibilidad del hostal.",
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
          <span className="text-gray-700 font-medium">Para Hostales</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Para hostales · Uso intensivo
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarotes con Escritorio para Hostales
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          El viajero moderno trabaja de forma remota y necesita un escritorio — no solo una cama —
          en el hostal. Fabricamos camarotes para hostales con escritorio integrado, estructura para
          uso intensivo y precio especial por volumen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Estructura para uso diario intensivo</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Acero reforzado y soldaduras para soportar el uso intensivo de un hostal — distintos
              huéspedes entrando y saliendo día a día por años.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escritorio funcional para laptop</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Superficie de trabajo adecuada para laptop, mouse y accesorios básicos. Lo que el
              viajero remoto necesita para trabajar cómodamente en el hostal.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Precio por volumen</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Descuentos progresivos desde 5 unidades. A mayor cantidad, mejor precio por unidad.
              Cotización formal para tu hostal.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Factura electrónica</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Emitimos factura electrónica a nombre de tu empresa o hostal. Cumplimos con todos
              los requisitos de compra empresarial.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Cuántas unidades mínimo para descuento?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              A partir de 5 unidades aplican precios especiales para hostales. Para 10 o más, el
              descuento es mayor. Contáctanos con el número exacto que necesitas.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Hay modelo específico para hostales?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Recomendamos el modelo estándar con escritorio en estructura reforzada. Podemos adaptar
              colores y acabados según la identidad visual de tu hostal.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Entregan e instalan en el hostal?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Para pedidos de hostal coordinamos entrega e instalación directamente en el
              establecimiento. Plazo según volumen y disponibilidad.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarotes-hostal"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🏨</span>
              <span className="font-semibold text-gray-900 text-sm">Camarotes para Hostal</span>
            </Link>
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
            <Link
              href="/camarotes-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📦</span>
              <span className="font-semibold text-gray-900 text-sm">Camarotes c/Escritorio Mayor</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-internado"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🏫</span>
              <span className="font-semibold text-gray-900 text-sm">Para Internados</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Tienes un hostal y necesitas renovar las camas?</h2>
          <p className="text-gray-400 text-sm mb-6">
            Cuéntanos el número de camas que necesitas, el estilo del hostal y el plazo. Te enviamos
            cotización formal con precio de volumen.
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
