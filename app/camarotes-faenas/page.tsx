import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Faenas y Campamentos — Fabricante Chile | Camarotes Chile",
  description:
    "Fabricamos camarotes metálicos para faenas, campamentos de trabajo y alojamiento de cuadrillas en Chile. Minería, construcción, forestales y agrícolas. Despacho nacional.",
  keywords: [
    "camarotes para faenas Chile",
    "camas para campamentos trabajo",
    "camarotes campamento Chile",
    "equipamiento faena Chile",
    "camarotes para cuadrillas",
    "camas para trabajadores faena",
    "camarotes para contratistas Chile",
    "alojamiento trabajadores Chile",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-faenas" },
  openGraph: {
    title: "Camarotes para Faenas y Campamentos — Fabricante Directo Chile",
    description: "Camarotes metálicos para campamentos de faena, cuadrillas y contratistas. Minería, construcción, forestales.",
    type: "website",
    locale: "es_CL",
  },
};

function getFaenaWAUrl(tipo?: string): string {
  const t = tipo ? ` para *${tipo}*` : "";
  const msg = encodeURIComponent(`Hola, necesito cotizar camarotes metálicos${t}. ¿Pueden enviarme información y precios?`);
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${msg}`;
}

export default function CamarotesFaenasPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Fabrican camarotes para faenas en Chile?", acceptedAnswer: { "@type": "Answer", text: "Sí. Somos fabricantes directos de camarotes metálicos para faenas, campamentos de trabajo y alojamiento de cuadrillas. Despachamos a todo Chile." } },
          { "@type": "Question", name: "¿Cuánto cuesta equipar un campamento de faena con camarotes?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el volumen y el modelo. Para pedidos de 20 o más unidades, cotizamos con precio de fábrica. Consúltanos por WhatsApp con la cantidad estimada." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/empresas" className="hover:text-gray-600">Empresas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Faenas y Campamentos</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🏕️ Fabricante directo · Despacho nacional · Pedidos por volumen
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarotes para Faenas y Campamentos de Trabajo
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Fabricamos camarotes metálicos para equipar el alojamiento de trabajadores en
            faenas, campamentos y cuadrillas en todo Chile. Sin intermediarios — directo
            desde la fábrica hasta el campamento.
          </p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-faenero-turno-noche-mineria.jpg" alt="Camarote metálico en turno de noche — faenas y campamentos Chile" className="w-full object-cover" loading="lazy" />
          </div>
<a href={getFaenaWAUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar camarotes para faena
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rubros que atendemos en faenas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { emoji: "⛏️", titulo: "Campamentos mineros", desc: "Camarotes para faenas en la zona norte y central. Alta durabilidad para condiciones extremas.", href: "/camarotes-mineria" },
              { emoji: "🏗️", titulo: "Constructoras y contratistas", desc: "Equipamiento para cuadrillas en obras de infraestructura, edificaciones y proyectos públicos.", href: "/camarotes-construccion" },
              { emoji: "🌲", titulo: "Campamentos forestales", desc: "Camas para cuadrillas de tala, replantación y manejo forestal en el sur de Chile.", href: "/camarotes-forestales" },
              { emoji: "🌾", titulo: "Faenas agrícolas", desc: "Camarotes para temporeros, packings y bodegas en la zona central y sur.", href: "/camarotes-agricolas" },
            ].map(r => (
              <div key={r.titulo} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 transition-all flex gap-4">
                <span className="text-3xl">{r.emoji}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{r.titulo}</h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">{r.desc}</p>
                  <div className="flex gap-2">
                    <a href={getFaenaWAUrl(r.titulo)} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#25D366] text-white font-semibold rounded-lg px-3 py-1.5 hover:bg-[#1ebe5d] transition-colors">Cotizar</a>
                    <Link href={r.href} className="text-xs border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">Ver más</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo funciona el proceso para empresas?</h2>
          <div className="space-y-3">
            {[
              { num: "1", titulo: "Cotización inicial", desc: "Cuéntanos el rubro, cantidad de camas necesarias y destino de entrega. Respondemos en el día con precios por volumen." },
              { num: "2", titulo: "Confirmación y fabricación", desc: "Una vez aprobada la cotización, iniciamos fabricación. El plazo varía según volumen (típicamente 2-4 semanas)." },
              { num: "3", titulo: "Despacho coordinado", desc: "Coordinamos el transporte en camión de carga al campamento o bodega de la empresa. Flete incluido en cotización final." },
              { num: "4", titulo: "Pago y factura", desc: "Emitimos factura electrónica. Para empresas establecidas, evaluamos condiciones de pago diferido." },
            ].map(paso => (
              <div key={paso.num} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{paso.num}</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{paso.titulo}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas equipar una faena o campamento?</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">Cuéntanos el volumen, destino y especificaciones. Cotización sin compromiso en el día.</p>
          <a href={getFaenaWAUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar para faena ahora
          </a>
        </div>
      </div>
    </div>
  );
}
