import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes con Escritorio al Por Mayor | Chile",
  description: "Venta al por mayor de camarotes con escritorio en Chile. Para hostales, internados y empresas. Descuentos por volumen desde 5 unidades. Factura electrónica.",
  keywords: ["camarotes con escritorio por mayor", "camarotes escritorio mayorista chile", "literas escritorio venta mayor", "camarotes escritorio volumen chile"],
  alternates: { canonical: "https://rinon.cl/camarotes-con-escritorio-por-mayor" },
};

export default function Page() {
  const wa = getWhatsAppUrl("Hola, quiero cotizar camarotes con escritorio al por mayor. ¿Qué descuentos por volumen manejan?");
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Desde cuántas unidades hay precio al por mayor?", acceptedAnswer: { "@type": "Answer", text: "Aplicamos precio mayorista desde 5 unidades. El descuento es escalonado: mientras mayor el volumen, mejor el precio por unidad." } },
          { "@type": "Question", name: "¿Emiten factura electrónica?", acceptedAnswer: { "@type": "Answer", text: "Sí. Emitimos factura electrónica para empresas, instituciones y compras mayoristas." } },
          { "@type": "Question", name: "¿Para qué sectores venden al por mayor?", acceptedAnswer: { "@type": "Answer", text: "Vendemos a hostales, internados, campamentos, hoteles y empresas que necesitan equipar dormitorios con camarotes con escritorio." } },
        ],
      }) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Por Mayor</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          <span className="w-2 h-2 bg-green-500 rounded-full" /> Venta mayorista · Desde 5 unidades
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes con Escritorio al Por Mayor</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Venta al por mayor de camarotes metálicos con escritorio en Chile, para hostales, internados y empresas. Aplicamos descuentos por volumen desde 5 unidades, con precios escalonados: a mayor cantidad, menor precio por unidad. Emitimos factura electrónica y coordinamos despacho nacional.</p>
        <div className="space-y-4 mb-10">
          <h2 className="text-xl font-bold text-gray-900">¿Cómo funciona la compra al por mayor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "📋", t: "Cuéntanos tu proyecto", d: "Dinos cuántas unidades necesitas y para qué recinto. Te preparamos una cotización con descuento por volumen." },
              { icon: "🧾", t: "Factura y condiciones", d: "Emitimos factura electrónica. Coordinamos plazos de fabricación y condiciones de pago B2B según el volumen." },
              { icon: "🚚", t: "Despacho nacional", d: "Producimos y despachamos a todo Chile. Coordinamos el transporte según el destino del pedido." },
            ].map(s => (
              <div key={s.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <h2 className="text-xl font-bold text-gray-900">Preguntas frecuentes</h2>
          {[
            { q: "¿Desde cuántas unidades hay precio mayorista?", a: "Aplicamos precio mayorista desde 5 unidades, con descuento escalonado según el volumen." },
            { q: "¿Emiten factura?", a: "Sí, emitimos factura electrónica para empresas e instituciones." },
            { q: "¿A qué sectores atienden?", a: "Hostales, internados, campamentos, hoteles y empresas que equipan dormitorios." },
          ].map(f => (
            <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mb-10 text-sm">
          <Link href="/camarotes-con-escritorio-precio-fabrica" className="text-green-600 underline">Precio Fábrica</Link>
          <Link href="/camarote-con-escritorio-hostal" className="text-green-600 underline">Para Hostal</Link>
          <Link href="/camarote-con-escritorio-internado" className="text-green-600 underline">Para Internado</Link>
          <Link href="/camarotes-precio-mayorista" className="text-green-600 underline">Precio Mayorista</Link>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotizar al por mayor</h2>
          <p className="text-gray-400 text-sm mb-6">Descuentos por volumen desde 5 unidades. Respondemos en minutos.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
