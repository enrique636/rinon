import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes con Escritorio para Internados | Chile",
  description:
    "Camarotes metálicos con escritorio para internados y colegios en Chile. Uso intensivo, estructura robusta, factura a institución. Descuentos por volumen.",
  keywords: [
    "camarote con escritorio internado",
    "litera escritorio internado colegio",
    "camarotes internado chile escritorio",
    "camas escritorio uso institucional",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-internado" },
};

export default function Page() {
  const wa = getWhatsAppUrl(
    "Hola, somos un internado y necesitamos camarotes con escritorio. ¿Tienen precio especial institucional?"
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
                name: "¿Hacen precio especial para internados y colegios?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Para compras institucionales en volumen ofrecemos precios especiales. El descuento varía según la cantidad de unidades. Contáctanos con el número de unidades requeridas y emitimos una cotización formal para el colegio o institución.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuántas unidades mínimo para obtener precio de volumen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Generalmente a partir de 5 unidades ya aplican precios de volumen. Para cantidades mayores (10, 20, 50 o más), el descuento es progresivo. Consúltanos con el número exacto para una cotización precisa.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se puede coordinar la entrega directa al colegio o internado?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Para pedidos institucionales coordinamos la entrega directamente en el establecimiento e incluimos la instalación de todos los muebles. Plazo a coordinar según el volumen del pedido.",
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
          <span className="text-gray-700 font-medium">Para Internados</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          Uso institucional · Por volumen
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Camarotes con Escritorio para Internados
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">
          Los internados requieren muebles que soporten uso intensivo durante años sin deformarse.
          Fabricamos con estructura robusta y ofrecemos precios especiales para instituciones
          educativas con factura electrónica incluida.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Estructura reforzada uso intensivo</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Acero de mayor calibre y soldaduras reforzadas para soportar el uso diario intensivo
              de internados por muchos años sin mantenimiento.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Factura a colegio o institución</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Emitimos factura electrónica a nombre del establecimiento. Cumplimos con todos los
              requisitos de compra institucional.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Descuento por volumen</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              A partir de 5 unidades aplican precios especiales. El descuento es progresivo según
              la cantidad: 10, 20, 50 o más unidades.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">Plazo de entrega coordinado</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Coordinamos la entrega e instalación directamente en el establecimiento. Plazo a
              convenir según volumen del pedido.
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Hacen precio especial para internados?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Para compras institucionales en volumen ofrecemos precios especiales. Contáctanos
              con el número de unidades para una cotización formal.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">¿Cuántas unidades mínimo?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              A partir de 5 unidades aplican precios de volumen. Para 10, 20 o más, el descuento es
              progresivo. Consúltanos con el número exacto.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              ¿Se puede coordinar entrega al colegio?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sí. Para pedidos institucionales coordinamos entrega directa en el establecimiento e
              instalación de todos los muebles.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/camarotes-para-internados"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">🏫</span>
              <span className="font-semibold text-gray-900 text-sm">Camarotes para Internados</span>
            </Link>
            <Link
              href="/camarote-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-gray-900 text-sm">Camarote con Escritorio</span>
            </Link>
            <Link
              href="/camarotes-precio-mayorista"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">💰</span>
              <span className="font-semibold text-gray-900 text-sm">Precio Mayorista</span>
            </Link>
            <Link
              href="/camarotes-con-escritorio"
              className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all"
            >
              <span className="text-2xl">📦</span>
              <span className="font-semibold text-gray-900 text-sm">Camarotes c/Escritorio Mayor</span>
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotización institucional</h2>
          <p className="text-gray-400 text-sm mb-6">
            Dinos el nombre del establecimiento, la cantidad de unidades requeridas y el plazo
            deseado. Emitimos cotización formal con precio de volumen.
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
