import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Chillán — Fabricante con Despacho a Ñuble",
  description: "Cercos perimetrales metálicos para Chillán y la Región de Ñuble. Fabricante en Santiago con despacho. Rejas para casas, parcelas y empresas en Chillán, Chillán Viejo y el Valle del Ñuble.",
  keywords: [
    "cercos perimetrales chillan",
    "cerco metalico chillan",
    "reja perimetral chillan",
    "rejas metalicas chillan",
    "cerco para casa chillan",
    "fabricante cercos chillan",
    "cercos region nuble",
    "reja galvanizada chillan",
    "cerco perimetral chillan viejo",
    "portones chillan",
  ],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-chillan" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesChillanPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan cercos perimetrales en Chillán?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos los cercos en nuestro taller en Santiago y realizamos la instalación en Chillán. Cotizamos el mismo día — solo necesitamos los metros lineales, la altura y el tipo de uso (casa, condominio o industria)." } },
          { "@type": "Question", name: "¿Cuánto cuesta el metro lineal de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo: malla eslabonada es la opción más económica, tubo estructural pintado al horno tiene un costo medio, y el cerco galvanizado es el de mayor durabilidad y costo. Cotiza por WhatsApp con los metros y altura para obtener un precio exacto." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Chillán</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante en Santiago · Despacho Región Ñuble
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cercos Perimetrales para Chillán y la Región de Ñuble
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos y despachamos cercos perimetrales metálicos a Chillán, Chillán Viejo,
            San Carlos, Yungay y toda la Región de Ñuble. Casas, parcelas, empresas agrícolas
            y condominios — con portón vehicular incluido si lo necesitas.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 text-sm text-blue-900">
            <strong className="block mb-1">Zona de clima mixto — pintura o galvanizado</strong>
            <p className="text-xs text-blue-700 leading-relaxed">
              Chillán tiene temporadas de lluvia concentradas en invierno (800–1.000 mm/año).
              Para cercos en zonas con humedad frecuente — sectores agrícolas, parcelas —
              recomendamos galvanizado o pintura electrostática de alta resistencia.
              Consulta según tu uso específico.
            </p>
          </div>

          <a
            href={wa("Hola, necesito cotizar un cerco perimetral para Chillán / Ñuble. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / PARCELA / EMPRESA]. Ciudad: [CIUDAD].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Localidades de Ñuble que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Chillán","Chillán Viejo","San Carlos","Yungay","Bulnes","Coihueco",
              "El Carmen","Pemuco","Quillón","San Ignacio","Ñiquén","Portezuelo",
            ].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Qué se incluye en el pedido?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Cerco perimetral armado",
                d: "Los paneles de reja llegan armados y listos para instalar. Con postes y accesorios de fijación incluidos.",
              },
              {
                t: "Portón vehicular (opcional)",
                d: "Batiente doble o corredizo según el ancho de la entrada. Se coordina el diseño junto con el cerco.",
              },
              {
                t: "Puerta peatonal (opcional)",
                d: "Del mismo diseño que el cerco. Con cerradura y bisagras.",
              },
              {
                t: "Pintura electrostática al horno",
                d: "Acabado negro mate estándar. Se puede pedir otro color si el pedido lo justifica.",
              },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-concepcion", label: "Cercos Concepción", desc: "Capital regional del Biobío" },
            { href: "/cierres-perimetrales", label: "Cercos perimetrales", desc: "Todos los tipos y usos" },
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "Para zonas húmedas y agrícolas" },
            { href: "/blog/galvanizado-vs-pintado-cuando-elegir", label: "Galvanizado vs pintado", desc: "Cuándo usar cada uno" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all"
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco para Chillán</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros, altura y ciudad. Coordinamos el despacho a Chillán y toda la Región de Ñuble.
          </p>
          <a
            href={wa("Hola, necesito un cerco perimetral para Chillán / Ñuble. Metros: [METROS] ml. Altura: [ALTURA] m. Ciudad: [CIUDAD]. Incluye portón: [SÍ / NO].")}
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
