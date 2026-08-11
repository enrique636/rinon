import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes con Escritorio para Empresas | Chile",
  description: "Camarotes metálicos con escritorio para empresas en Chile. Internados, campamentos, hoteles y recintos con dormitorios. Factura, volumen y despacho nacional.",
  keywords: ["camarotes con escritorio empresas", "camarotes escritorio institucional chile", "camarotes escritorio corporativo", "literas escritorio empresa factura"],
  alternates: { canonical: "https://rinon.cl/camarotes-con-escritorio-empresas" },
};

export default function Page() {
  const wa = getWhatsAppUrl("Hola, represento a una empresa y quiero cotizar camarotes con escritorio con factura.");
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Venden a empresas con factura?", acceptedAnswer: { "@type": "Answer", text: "Sí. Emitimos factura electrónica y trabajamos con empresas, instituciones y recintos que necesitan equipar dormitorios." } },
          { "@type": "Question", name: "¿Para qué sectores fabrican?", acceptedAnswer: { "@type": "Answer", text: "Internados, campamentos, hoteles y cualquier recinto con dormitorios que necesite camarotes con escritorio de uso intensivo." } },
          { "@type": "Question", name: "¿Hay descuento por volumen?", acceptedAnswer: { "@type": "Answer", text: "Sí. Manejamos condiciones corporativas con descuentos por volumen y coordinamos plazos según la cantidad y el destino del pedido." } },
        ],
      }) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Empresas</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          <span className="w-2 h-2 bg-green-500 rounded-full" /> Venta corporativa · Factura y volumen
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes con Escritorio para Empresas</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Camarotes metálicos con escritorio para empresas en Chile. Equipamos internados, campamentos, hoteles y todo recinto con dormitorios. Ofrecemos condiciones corporativas: factura electrónica, descuentos por volumen, posibilidad de crédito y despacho nacional. Fabricamos con estructura reforzada para uso intensivo.</p>
        <div className="space-y-4 mb-10">
          <h2 className="text-xl font-bold text-gray-900">Sectores que atendemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "🏫", t: "Internados", d: "Camarotes con escritorio para dormitorios estudiantiles, resistentes al uso diario." },
              { icon: "⛺", t: "Campamentos", d: "Estructura reforzada para faenas, minería y campamentos de trabajadores." },
              { icon: "🏨", t: "Hoteles y hostales", d: "Soluciones para habitaciones compartidas y recintos con alta rotación." },
            ].map(s => (
              <div key={s.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 mb-10">
          <h2 className="text-xl font-bold text-gray-900">Condiciones corporativas</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Factura electrónica para empresas e instituciones.</li>
            <li>• Descuentos escalonados por volumen.</li>
            <li>• Posibilidad de crédito según el proyecto.</li>
            <li>• Despacho nacional coordinado según destino.</li>
          </ul>
        </div>
        <div className="space-y-3 mb-10">
          <h2 className="text-xl font-bold text-gray-900">Preguntas frecuentes</h2>
          {[
            { q: "¿Venden con factura?", a: "Sí. Emitimos factura electrónica para empresas, instituciones y recintos." },
            { q: "¿Para qué sectores fabrican?", a: "Internados, campamentos, hoteles y recintos con dormitorios de uso intensivo." },
            { q: "¿Hay descuento por volumen?", a: "Sí. Condiciones corporativas con descuentos por volumen y plazos según la cantidad." },
          ].map(f => (
            <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mb-10 text-sm">
          <Link href="/camarote-con-escritorio-hostal" className="text-green-600 underline">Para Hostal</Link>
          <Link href="/camarote-con-escritorio-internado" className="text-green-600 underline">Para Internado</Link>
          <Link href="/camarotes-precio-mayorista" className="text-green-600 underline">Precio Mayorista</Link>
          <Link href="/camarotes-con-escritorio-por-mayor" className="text-green-600 underline">Por Mayor</Link>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotizar para tu empresa</h2>
          <p className="text-gray-400 text-sm mb-6">Factura, volumen y despacho nacional. Respondemos en minutos.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
