import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Médico Residente | Chile",
  description:
    "Camarote con escritorio para médicos residentes en Chile. Cama de guardia arriba, escritorio para fichas e informes abajo. Resistente y práctico para guardia médica.",
  keywords: [
    "camarote con escritorio medico residente",
    "litera medico residente chile",
    "cama guardia medica escritorio",
    "camarote guardia medica chile",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-medico-residente" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, necesitamos camarotes con escritorio para médicos residentes en guardia. ¿Pueden facturar a una clínica?"
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
                name: "¿Fabrican camarotes para hospitales y clínicas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Fabricamos camarotes con escritorio para uso institucional en hospitales, clínicas y centros médicos. Los modelos para uso médico tienen estructura reforzada para uso intensivo y cumplen con los estándares de durabilidad que requiere el sector salud.",
                },
              },
              {
                "@type": "Question",
                name: "¿Emiten factura a hospital o clínica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Emitimos factura electrónica a nombre del hospital, clínica u organización de salud. Manejamos todos los requerimientos de compra institucional incluyendo orden de compra.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto soporta la cama para guardia médica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La estructura reforzada soporta entre 150-200 kg en la cama superior. Más que suficiente para cualquier médico residente. Consulta el modelo específico al cotizar.",
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
          <span className="text-gray-700 font-medium">Para Médicos Residentes</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Para residentes médicos · Guardia + trabajo
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarote con Escritorio para Médicos Residentes
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          La guardia médica requiere poder dormir y trabajar en el mismo espacio reducido. El
          camarote con escritorio da la cama de descanso arriba y el escritorio para fichas,
          informes y laptop abajo — en metros cuadrados reducidos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Cama arriba para guardia</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              La cama de guardia está arriba, siempre lista para el descanso entre turnos. Sin
              necesidad de transformar el escritorio en cama.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Escritorio para fichas y PC</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Zona de trabajo completa para laptop, fichas, informes y materiales médicos. Espacio
              suficiente para trabajar con eficiencia.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Estructura resistente al uso intensivo</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Acero reforzado para soportar el uso diario intensivo de una guardia médica durante
              años sin mantenimiento.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Factura a hospital o clínica</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Emitimos factura electrónica a nombre del establecimiento de salud. Manejamos orden
              de compra y todos los requerimientos institucionales.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Fabrican para hospitales y clínicas?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Fabricamos para uso institucional en hospitales y clínicas. Modelos con estructura
              reforzada para uso intensivo en el sector salud.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Emiten factura a institución?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Factura electrónica a nombre del hospital, clínica u organización. Manejamos orden
              de compra y requerimientos institucionales.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Cuánto soporta la cama?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              La estructura reforzada soporta entre 150-200 kg en la cama superior. Más que
              suficiente para cualquier médico residente.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarotes-para-hospitales"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🏥</span>
              <span className="font-semibold text-gray-900 text-sm">Camarotes para Hospitales</span>
            </Link>
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
            <Link
              href="/camarote-con-escritorio-internado"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🏫</span>
              <span className="font-semibold text-gray-900 text-sm">Para Internados</span>
            </Link>
            <Link
              href="/camarotes-metalicos"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🔩</span>
              <span className="font-semibold text-gray-900 text-sm">Camarotes Metálicos</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotización para hospital o clínica</h2>
          <p className="text-gray-400 text-sm mb-6">
            Dinos el nombre del establecimiento, cantidad de unidades y si necesitas instalación.
            Emitimos cotización formal y facturamos a la institución.
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
