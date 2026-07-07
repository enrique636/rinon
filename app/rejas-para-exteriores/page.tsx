import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas para Exteriores Santiago — Resistentes a la Intemperie",
  description: "Rejas metálicas para exteriores en Santiago. Fabricante directo. Rejas resistentes a la lluvia, el sol y la humedad para jardines, terrazas, fachadas y perímetros exteriores.",
  keywords: [
    "rejas para exteriores",
    "reja metalica para exterior",
    "rejas exteriores santiago",
    "reja para jardin exterior",
    "reja metalica resistente intemperie",
    "reja para terraza exterior",
    "rejas galvanizadas exteriores",
    "reja exterior precio chile",
    "rejas para patio exterior",
    "reja anticorrosion exterior",
  ],
  alternates: { canonical: "https://dumar.cl/rejas-para-exteriores" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasParaExterioresPage() {
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
                name: "¿Qué diferencia hay entre una reja para exterior y una para interior?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Las rejas para exterior están expuestas a lluvia, sol UV, humedad y temperatura extrema. Por eso requieren un acabado más resistente: pintura electrostática de alta dureza o galvanizado en caliente. Las rejas interiores pueden llevar pintura estándar ya que no enfrentan la intemperie.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se oxidan las rejas para exteriores?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Con el acabado correcto, no. Una reja de acero con pintura electrostática al horno dura 8–15 años en exterior sin oxidarse en zonas de clima moderado. En zonas costeras o muy lluviosas, el galvanizado en caliente es la opción que da mayor duración — 20–30 años.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuál es el mejor acabado para una reja de exterior?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Depende de la zona. Para Santiago y zonas con clima seco o templado, la pintura electrostática al horno es suficiente y más económica. Para zonas costeras, del sur lluvioso o con ambiente marino, el galvanizado en caliente es la opción más duradera.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Rejas para Exteriores</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Resistentes a la intemperie · Pintura al horno o galvanizado · Santiago
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas para Exteriores — Fabricadas para Durar a la Intemperie
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Las rejas de exterior enfrentan lluvia, sol UV, humedad y cambios de temperatura.
            Fabricamos rejas metálicas diseñadas específicamente para uso exterior — con
            acabados que resisten la intemperie sin oxidarse ni descascararse. Instalación
            incluida en Santiago.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja para exterior. Uso: [JARDÍN / TERRAZA / FRONTIS / PERÍMETRO]. Metros o medidas: [DATO]. Zona: [INTERIOR RM / COSTA / SUR LLUVIOSO]. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja exterior
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Acabados para exterior: cuál elegir</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Acabado</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Duración exterior</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Ideal para</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Precio relativo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pintura electrostática al horno", "8–15 años", "Santiago y zonas de clima seco o templado", "Económico"],
                  ["Galvanizado + pintura electrostática", "15–25 años", "Zonas con lluvia frecuente o humedad alta", "Medio"],
                  ["Galvanizado en caliente (gris)", "25–40 años", "Costa, sur lluvioso, salitre marino", "Alto"],
                ].map(([a, d, i, p]) => (
                  <tr key={a} className="border-t border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{a}</td>
                    <td className="p-3 text-gray-500">{d}</td>
                    <td className="p-3 text-gray-500">{i}</td>
                    <td className="p-3 text-gray-500">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Usos más comunes de rejas para exterior</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Frontis y perímetro",
                d: "La aplicación más frecuente. La reja va instalada en el límite de la propiedad, expuesta directamente al clima. Requiere el acabado más resistente del rango.",
              },
              {
                t: "Terraza y deck",
                d: "Barandas de terraza expuestas al sol y a la lluvia lateral. El acero con pintura electrostática aguanta bien en Santiago. En la costa o el sur, galvanizado.",
              },
              {
                t: "Jardín y patio",
                d: "Rejas bajas para delimitar sectores del jardín, cubrir plantas trepadoras o separar zonas. Generalmente 60–100 cm de altura, diseño más decorativo.",
              },
              {
                t: "Acceso de vehículos y peatones",
                d: "Portones y puertas peatonales en el exterior. El portón es el elemento que más trabaja — se recomienda siempre el mejor acabado disponible para el clima.",
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
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "El acabado más resistente para exterior" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Frontis completo con portón" },
            { href: "/barandas-metalicas", label: "Barandas metálicas", desc: "Para terrazas y escaleras exterior" },
            { href: "/blog/galvanizado-vs-pintado-cuando-elegir", label: "Galvanizado vs pintado", desc: "Qué conviene según tu zona" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿En qué zona está tu propiedad?</h2>
          <p className="text-gray-400 text-sm mb-5">
            La ubicación define el acabado correcto. Cuéntanos y cotizamos la opción que dura más.
          </p>
          <a
            href={wa("Hola, necesito una reja para exterior. Uso: [DATO]. Metros: [METROS] ml. Zona: [SANTIAGO / COSTA / SUR]. Estoy en [COMUNA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
