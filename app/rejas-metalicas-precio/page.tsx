import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Precio Reja Metálica Santiago 2025 — Cotiza Directo al Fabricante",
  description: "¿Cuánto cuesta una reja metálica en Santiago? Guía de precios referenciales por tipo y metro lineal. Cotiza directo al fabricante — sin intermediarios. Buenos Pal Catre.",
  keywords: ["precio reja metalica", "cuanto cuesta reja metalica", "precio reja tubular", "reja metalica precio metro lineal", "reja metalica precio santiago", "precio cerco perimetral", "reja de fierro precio chile", "cotizar reja metalica santiago", "precio reja metalica galvanizada"],
  alternates: { canonical: "https://dumar.cl/rejas-metalicas-precio" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasPrecioPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Cuánto cuesta una reja metálica en Chile?", acceptedAnswer: { "@type": "Answer", text: "El precio de una reja metálica varía según el tipo (tubular, barra sólida, galvanizada), la altura, el diseño y los metros lineales. Al comprar directo al fabricante sin intermediarios, el precio es considerablemente menor que en ferreterías o distribuidoras. Para un precio exacto de tu proyecto, cotiza por WhatsApp con las medidas." } },
          { "@type": "Question", name: "¿Qué factores determinan el precio de una reja?", acceptedAnswer: { "@type": "Answer", text: "Los principales factores son: tipo de material (tubo cuadrado, redondo, barra sólida), altura de la reja, separación entre barrotes, tipo de acabado (pintura o galvanizado), cantidad de metros lineales y si incluye portón o no. A mayor volumen, mejor precio por metro lineal." } },
          { "@type": "Question", name: "¿Es más barato comprar al fabricante directo?", acceptedAnswer: { "@type": "Answer", text: "Sí. Al comprar en ferretería o distribuidora hay al menos dos márgenes encima del precio de fábrica. Al comprar directo al fabricante, ese margen queda en tu bolsillo. Además, la reja se fabrica a tu medida exacta — no pagas material que después hay que cortar o desperdiciar." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Precios</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Cuánto cuesta una reja metálica en Santiago?
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Guía de factores que determinan el precio — y por qué comprar directo al fabricante es siempre más conveniente que ir a ferretería o distribuidora.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Factores que determinan el precio</h2>
          <div className="space-y-3">
            {[
              { n: "01", t: "Tipo de material", d: "Tubo cuadrado, tubo redondo o barra sólida. La reja tubular es más liviana y generalmente más económica. La de barra sólida es más pesada y robusta. El galvanizado agrega costo pero multiplica la durabilidad." },
              { n: "02", t: "Altura de la reja", d: "El precio es proporcional a la altura. Una reja de 1 m de alto y una de 2 m tienen el doble de material en vertical. El marco y los postes también crecen con la altura." },
              { n: "03", t: "Separación entre barrotes", d: "Más barrotes = más material = mayor precio. Una reja con separación de 5 cm tiene más del doble de barrotes que una de 12 cm — impacto directo en el costo." },
              { n: "04", t: "Metros lineales totales", d: "A mayor cantidad, mejor precio por metro lineal. Un cerco de 100 ml sale proporcionalmente más barato por metro que uno de 10 ml." },
              { n: "05", t: "Acabado: pintura vs galvanizado", d: "La pintura electrostática al horno es estándar — duradera y económica. El galvanizado en caliente es la opción premium para exposición severa al clima o zonas costeras." },
              { n: "06", t: "Portones y accesorios", d: "Un portón corredizo o batiente se cotiza aparte. El precio depende del ancho del vano, el tipo de apertura y si lleva cerradura o automatización." },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                <span className="text-2xl font-bold text-gray-200 flex-shrink-0">{item.n}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h3 className="font-bold text-amber-900 mb-2">¿Por qué no publicamos precios fijos?</h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              Porque no fabricamos tallas estándar. Cada reja se fabrica con las medidas exactas del proyecto. Un precio publicado sin conocer tu proyecto es siempre impreciso — y generalmente bajo para no perder clientes o alto para no perder margen. Preferimos cotizarte en minutos con el precio real de tu reja específica.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Comprar al fabricante vs ferretería</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 text-gray-500 font-medium text-xs">Factor</th>
                  <th className="text-center py-3 px-4 text-gray-900 font-semibold text-xs">Fabricante directo</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium text-xs">Ferretería / Distribuidor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Precio", "Sin márgenes intermedios", "2–3 márgenes encima"],
                  ["Medidas", "Exactas a tu proyecto", "Tallas estándar, hay que adaptar"],
                  ["Tiempo", "Se confirma al cotizar", "Depende de stock"],
                  ["Garantía", "Directa con quien fabricó", "Pasa por distribuidor"],
                  ["Volumen", "Precio por mayor disponible", "Precio fijo por unidad"],
                ].map(([factor, fab, dist]) => (
                  <tr key={factor}>
                    <td className="py-3 pr-4 text-gray-600 text-xs font-medium">{factor}</td>
                    <td className="py-3 px-4 text-center text-green-700 text-xs font-medium">{fab}</td>
                    <td className="py-3 px-4 text-center text-gray-400 text-xs">{dist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Obtén tu precio en minutos</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos: tipo de reja, metros lineales, altura y si necesitas portón. Te cotizamos hoy.</p>
          <a href={wa("Hola, quiero cotizar rejas metálicas. Necesito: [TIPO], [METROS] ml, [ALTURA] de alto. ¿Cuánto sale?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
