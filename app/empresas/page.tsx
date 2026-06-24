import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Empresas — Fabricante Directo en Chile | Camarotes Chile",
  description:
    "Fabricantes de camarotes metálicos para empresas, campamentos mineros, faenas, forestales y agrícolas. Despacho nacional. Cotiza al por mayor con el fabricante directo.",
  keywords: [
    "camarotes para empresas Chile",
    "camarotes industriales Chile",
    "camarotes campamentos mineros",
    "camarotes para faenas",
    "camarotes al por mayor Chile",
    "fabricante camarotes Chile",
    "camarotes para trabajadores",
    "camas para campamentos Chile",
    "equipamiento alojamiento trabajadores",
    "camarotes constructoras Chile",
  ],
  alternates: { canonical: "https://dumar.cl/empresas" },
  openGraph: {
    title: "Camarotes Metálicos para Empresas — Fabricante Directo Chile",
    description: "Fabricamos y despachamos camarotes metálicos para minería, construcción, forestales y agrícolas en todo Chile.",
    type: "website",
    locale: "es_CL",
  },
};

const SEGMENTOS = [
  {
    emoji: "⛏️",
    titulo: "Minería",
    desc: "Camarotes robustos para campamentos mineros en el norte de Chile. Resistentes a condiciones extremas, fáciles de montar y desmontar en faena.",
    href: "/camarotes-mineria",
    ciudades: "Antofagasta · Calama · Copiapó · La Serena",
    interes: "Despacho a zona norte · Alta durabilidad",
  },
  {
    emoji: "🏗️",
    titulo: "Construcción",
    desc: "Equipamiento de alojamiento para cuadrillas en obra. Camarotes desmontables adaptados a campamentos temporales de constructoras y contratistas.",
    href: "/camarotes-construccion",
    ciudades: "Todo Chile",
    interes: "Armado rápido · Estructura portable",
  },
  {
    emoji: "🌲",
    titulo: "Forestales",
    desc: "Camas y camarotes para cuadrillas forestales en el sur de Chile. Resistentes a humedad, fáciles de trasladar entre faenas.",
    href: "/camarotes-forestales",
    ciudades: "Los Ángeles · Temuco · Valdivia · Puerto Montt",
    interes: "Resistencia a humedad · Portabilidad",
  },
  {
    emoji: "🌾",
    titulo: "Agrícolas y Temporeros",
    desc: "Camarotes para packing, bodegueros y temporeros agrícolas. Solución rápida y económica para alojar mano de obra de temporada.",
    href: "/camarotes-agricolas",
    ciudades: "Curicó · Talca · Rancagua · Buin",
    interes: "Economía por volumen · Fácil mantenimiento",
  },
  {
    emoji: "🏕️",
    titulo: "Campamentos y Faenas",
    desc: "Equipamiento completo de dormitorios para campamentos mineros, de infraestructura y de emergencia. Volumen sin límite desde fábrica.",
    href: "/camarotes-faenas",
    ciudades: "Todo Chile",
    interes: "Cotización por volumen · Despacho en camión",
  },
  {
    emoji: "🚢",
    titulo: "Hostales y Alojamiento",
    desc: "Camarotes para hostales, residencias estudiantiles, hoteles económicos y albergues. Durabilidad industrial con precio de fábrica.",
    href: "/camarotes",
    ciudades: "Todo Chile",
    interes: "Alta durabilidad · Precio de fábrica",
  },
];

const VENTAJAS = [
  { titulo: "Fabricante directo", desc: "Sin intermediarios. El precio que recibes es precio de fábrica. Negociamos directamente con la empresa." },
  { titulo: "Volumen sin límite", desc: "Cotizamos desde 5 unidades hasta cientos. Despacho en camión a cualquier región de Chile." },
  { titulo: "Medidas a pedido", desc: "Si el estándar no aplica para tu faena, fabricamos a las medidas que necesites sin costo adicional significativo." },
  { titulo: "Despacho nacional", desc: "Llegamos a minera, faena, fundo o bodega en todo Chile. Coordinamos el flete directo a terreno." },
  { titulo: "Armado e instalación", desc: "Para pedidos grandes, podemos coordinar instalación en sitio con cuadrilla de armado." },
  { titulo: "Factura y crédito", desc: "Emitimos factura de empresa. Evaluamos crédito para contratos de largo plazo con proveedores establecidos." },
];

function getEmpresasWhatsAppUrl(segmento: string): string {
  const msg = encodeURIComponent(`Hola, soy de una empresa del rubro *${segmento}*. Necesito cotizar camarotes metálicos para nuestros trabajadores. ¿Pueden enviarme información y precios por volumen?`);
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${msg}`;
}

export default function EmpresasPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Camarotes Chile",
            description: "Fabricante de camarotes metálicos para empresas, minería, construcción, forestales y agrícolas. Despacho nacional.",
            areaServed: { "@type": "Country", name: "Chile" },
            address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
            telephone: SITE_CONFIG.telefono,
            openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Fabrican camarotes para empresas en Chile?", acceptedAnswer: { "@type": "Answer", text: "Sí. Somos fabricantes directos de camarotes metálicos para empresas, campamentos mineros, constructoras, forestales y agrícolas en todo Chile. Cotizamos desde 5 unidades y despachamos a cualquier región." } },
              { "@type": "Question", name: "¿Cuántas unidades mínimas se pueden pedir al por mayor?", acceptedAnswer: { "@type": "Answer", text: "Cotizamos desde 5 unidades. Para pedidos de 20 o más unidades, el precio mejora significativamente. Consúltanos por WhatsApp con la cantidad estimada." } },
              { "@type": "Question", name: "¿Hacen despacho de camarotes a zonas mineras del norte de Chile?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos en camión a Antofagasta, Calama, Copiapó, La Serena y toda la zona norte. El flete se cotiza según volumen y destino." } },
              { "@type": "Question", name: "¿Los camarotes para empresas son los mismos que los residenciales?", acceptedAnswer: { "@type": "Answer", text: "Podemos fabricar modelos estándar (los mismos que para residencias) o con especificaciones industriales reforzadas según el uso en faena o campamento." } },
            ],
          }),
        }}
      />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Empresas</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🏭 Fabricante directo · Despacho nacional · Cotización por volumen
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Camarotes Metálicos para Empresas — Desde el Fabricante
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Fabricamos camarotes metálicos para campamentos mineros, constructoras, forestales,
            agrícolas y cualquier empresa que necesite equipar alojamiento de trabajadores.
            Sin intermediarios — precio de fábrica desde la primera unidad.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-gray-100 text-gray-700 text-sm font-medium rounded-lg px-3 py-1.5">✓ Fabricación en Chile</span>
            <span className="bg-gray-100 text-gray-700 text-sm font-medium rounded-lg px-3 py-1.5">✓ Despacho nacional</span>
            <span className="bg-gray-100 text-gray-700 text-sm font-medium rounded-lg px-3 py-1.5">✓ Desde 5 unidades</span>
            <span className="bg-gray-100 text-gray-700 text-sm font-medium rounded-lg px-3 py-1.5">✓ Factura de empresa</span>
            <span className="bg-gray-100 text-gray-700 text-sm font-medium rounded-lg px-3 py-1.5">✓ Medidas a pedido</span>
          </div>
          <a
            href={getEmpresasWhatsAppUrl("empresa")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors shadow-sm"
          >
            Cotizar para empresa por WhatsApp
          </a>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rubros que atendemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SEGMENTOS.map(s => (
              <div key={s.titulo} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-400 hover:shadow-sm transition-all flex flex-col">
                <span className="text-3xl mb-3">{s.emoji}</span>
                <h3 className="font-bold text-gray-900 mb-2">{s.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3 flex-1">{s.desc}</p>
                <div className="border-t border-gray-100 pt-3 mt-auto">
                  <p className="text-xs text-gray-400 mb-1">{s.ciudades}</p>
                  <p className="text-xs text-green-600 font-medium">{s.interes}</p>
                </div>
                <div className="mt-3 flex gap-2">
                  <a href={getEmpresasWhatsAppUrl(s.titulo)} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#25D366] text-white font-semibold rounded-lg px-3 py-1.5 hover:bg-[#1ebe5d] transition-colors">
                    Cotizar
                  </a>
                  {s.href !== "/camarotes" && (
                    <Link href={s.href} className="text-xs border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
                      Ver más
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Por qué comprar directo al fabricante?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VENTAJAS.map(v => (
              <div key={v.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{v.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes — empresas</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto tiempo tarda la fabricación de un pedido grande?", a: "Depende del volumen. Pedidos de 5-20 unidades: 2-3 semanas. Pedidos de 50+ unidades: 4-6 semanas. Para pedidos urgentes, consúltanos disponibilidad de stock." },
              { q: "¿Pueden fabricar camarotes con especificaciones técnicas propias?", a: "Sí. Si la empresa tiene normas internas de resistencia de carga, medidas específicas o requisitos de acabado, podemos fabricar según planos o especificaciones técnicas." },
              { q: "¿Emiten factura de empresa?", a: "Sí, emitimos factura electrónica para empresa. Para contratos con empresas establecidas, evaluamos formas de pago diferidas." },
              { q: "¿Hacen despacho a regiones o solo Santiago?", a: "Despachamos a todo Chile. Para pedidos regionales, el flete se cotiza según el volumen y destino. Trabajamos con empresas de transporte de carga para llegar a cualquier faena o campamento." },
              { q: "¿Pueden armar los camarotes en la faena?", a: "Para pedidos grandes, podemos coordinar instalación en sitio. Consúltanos según la ubicación y volumen del pedido." },
            ].map(faq => (
              <div key={faq.q} className="border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Lista para cotizar?</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            Cuéntanos el rubro, la cantidad estimada y el destino de entrega.
            Te respondemos con cotización en el día.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getEmpresasWhatsAppUrl("empresa")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
            >
              Cotizar por WhatsApp
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/10 transition-colors"
            >
              Enviar email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
