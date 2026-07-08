import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Precio Cerco Perimetral Chile — Cuánto Cuesta por Metro Lineal",
  description: "¿Cuánto cuesta un cerco perimetral en Chile? Precios por metro lineal según tipo, altura y acabado. Tubular, malla, galvanizado. Cotiza con instalación incluida en Santiago y todo Chile.",
  keywords: ["precio cerco perimetral chile","cuanto cuesta cerco perimetral","cerco perimetral precio metro lineal","precio reja perimetral chile","cuanto vale un cerco perimetral","precio cierre perimetral santiago","cerco perimetral cuanto cuesta instalado","presupuesto cerco perimetral","precio cerco metalico metro lineal"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-precio" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesPrecioPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Cuánto cuesta un cerco perimetral por metro lineal en Chile?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo de cerco, la altura y el acabado. Para una cotización exacta con instalación incluida, envía los metros totales, la altura y el uso por WhatsApp. Respondemos el mismo día." } },
              { "@type": "Question", name: "¿La instalación está incluida en el precio del cerco?", acceptedAnswer: { "@type": "Answer", text: "Sí. Todos nuestros precios incluyen la instalación en Santiago y RM. Para regiones, coordinamos flete e instalación en la cotización. El precio que recibes es el precio final — sin sorpresas." } },
              { "@type": "Question", name: "¿Qué factores afectan más el precio de un cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "Los tres factores principales son: el tipo de cerco (tubular, malla, decorativo), la altura (más altura = más material y más trabajo) y el acabado (galvanizado en caliente es más caro que pintura electrostática). El número de portones y puertas también afecta el total." } },
            ],
          }),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Precio</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Cotización inmediata · Precio con instalación · Sin visita técnica</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Cuánto Cuesta un Cerco Perimetral? Guía de Precios Chile</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">El precio de un cerco perimetral depende del tipo, la altura, el acabado y los metros totales. No hay un precio único — pero con los datos correctos te respondemos con el precio exacto el mismo día, sin visita técnica previa.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral. Metros totales: [METROS] ml. Altura: [ALTURA] m. Tipo: [TUBULAR / MALLA / DECORATIVO]. Acabado: [PINTURA / GALVANIZADO]. Portones: [CANTIDAD]. Uso: [DATO]. Ubicación: [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Obtener precio ahora</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Factores que determinan el precio</h2>
          <div className="space-y-3">
            {[
              { n: "1", t: "Metros lineales totales", d: "El factor principal. Más metros = más material y más trabajo. Mide el perímetro completo incluyendo la zona de portones (aunque el portón tenga precio aparte)." },
              { n: "2", t: "Altura del cerco", d: "Más altura = más tubo o malla por metro lineal. Un cerco de 1,50 m usa un 25% más de material que uno de 1,20 m en el mismo largo." },
              { n: "3", t: "Tipo de cerco", d: "Tubular liso, malla electrosoldada, decorativo con forja — cada tipo tiene un costo diferente. El tubular liso es el más económico; el decorativo con forja ornamental el más caro." },
              { n: "4", t: "Acabado (pintura vs galvanizado)", d: "La pintura electrostática es más económica. El galvanizado en caliente agrega un 20–35% al costo pero dura el doble o más en zonas húmedas y costeras." },
              { n: "5", t: "Portones y puertas peatonales", d: "Cada portón vehicular y puerta peatonal se cotiza aparte del cerco lineal. El portón eléctrico agrega el costo del motor y la automatización." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{step.n}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{step.t}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/presupuesto-cerco-perimetral", label: "Cómo pedir presupuesto", desc: "Qué datos necesitas para el precio" },
            { href: "/cierres-perimetrales", label: "Tipos de cierres", desc: "Elige el tipo correcto" },
            { href: "/cercos-perimetrales-galvanizados", label: "Cercos galvanizados", desc: "Cuándo conviene galvanizar" },
            { href: "/blog/cuanto-cuesta-cierre-perimetral-chile", label: "Blog: Costos en detalle", desc: "Guía completa de precios" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Precio exacto en el día — sin visita técnica</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura, tipo y acabado. Con esos datos te damos el precio completo con instalación.</p>
          <a href={wa("Hola, necesito el precio de un cerco perimetral. Metros: [METROS] ml. Altura: [ALTURA] m. Tipo: [TUBULAR / MALLA / GALVANIZADO]. Portones: [CANTIDAD]. Ubicación: [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
