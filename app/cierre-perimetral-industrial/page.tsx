import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cierre Perimetral Industrial Santiago — Fabricante Directo",
  description: "Cierres perimetrales para industrias en Santiago. Reja de alto calibre, mallas separadoras y portones industriales. Fabricante directo con instalación en parques industriales y galpones.",
  keywords: ["cierre perimetral industrial", "cierre perimetral galpón", "cerco industrial santiago", "reja industrial santiago", "cierre perimetral fabrica", "cerco para galpón", "cierre perimetral bodega", "rejas industriales santiago", "cerco perimetral empresa"],
  alternates: { canonical: "https://rinon.cl/cierre-perimetral-industrial" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CierrePerimetralIndustrialPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué tipo de cerco necesita una industria o galpón?", acceptedAnswer: { "@type": "Answer", text: "Para un cierre industrial se recomienda reja tubular de tubo cuadrado 2\" o más grueso, con postes de anclaje al suelo cada 2 a 3 metros. La altura mínima recomendada para seguridad industrial es de 2 metros. Si hay riesgo de impacto vehicular, la estructura debe ser más robusta." } },
          { "@type": "Question", name: "¿Incluye instalación el cierre perimetral industrial?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos el cierre perimetral en el sitio. Para proyectos industriales grandes, la instalación se coordina por etapas según los requerimientos operativos de la empresa." } },
          { "@type": "Question", name: "¿Pueden fabricar y certificar cierres para parques industriales?", acceptedAnswer: { "@type": "Answer", text: "Sí. Trabajamos con parques industriales y empresas que requieren documentación del proceso de fabricación. Consulta al cotizar si necesitas certificados de materiales o informes de inspección." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Industrial</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Sin intermediarios · Santiago</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cierre Perimetral Industrial — Fabricante en Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Cercos perimetrales de alto calibre para industrias, galpones, bodegas y parques industriales. Reja de acero estructural, mallas separadoras y portones industriales — todo fabricado a medida, con instalación incluida.
          </p>
          <a href={wa("Hola, necesito un cierre perimetral industrial. El proyecto es: [DESCRIPCIÓN]. Metros lineales: [N] ml. Ubicación: [PARQUE/ZONA].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Diferencias entre un cierre residencial e industrial</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 text-gray-500 font-medium text-xs">Aspecto</th>
                  <th className="text-center py-3 px-4 text-gray-900 font-semibold text-xs">Industrial</th>
                  <th className="text-center py-3 px-4 text-gray-500 font-medium text-xs">Residencial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Calibre del tubo", "2\" a 3\" o perfil laminado", "3/4\" a 1½\""],
                  ["Altura típica", "2,00 m a 3,00 m", "1,20 m a 1,80 m"],
                  ["Postes de anclaje", "Hormigonados en suelo", "Empernados o anclados"],
                  ["Portón", "Corredizo 4–8 m", "Batiente 2–3 m"],
                  ["Criterio principal", "Seguridad, disuasión, resistencia", "Estética, privacidad, acceso"],
                ].map(([asp, ind, res]) => (
                  <tr key={asp}>
                    <td className="py-3 pr-4 text-gray-600 text-xs font-medium">{asp}</td>
                    <td className="py-3 px-4 text-center text-gray-800 text-xs font-medium">{ind}</td>
                    <td className="py-3 px-4 text-center text-gray-400 text-xs">{res}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de proyecto industrial que atendemos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {["Galpones de bodegaje","Parques industriales","Plantas de manufactura","Distribuidoras logísticas","Talleres y maestranzas","Industria alimentaria","Plantas de tratamiento","Frigoríficos","Empresas mineras","Instalaciones portuarias","Campamentos industriales","Obras de construcción"].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600">{item}</div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Componentes del cierre perimetral industrial</h2>
          <div className="space-y-3">
            {[
              { t: "Reja perimetral de alto calibre", d: "Tubo cuadrado 2\" o perfil estructural laminado. La resistencia al impacto y la rigidez son prioritarias sobre el peso." },
              { t: "Postes de anclaje hormigonados", d: "Para cierres industriales los postes van hormigonados directamente al suelo — no solo empernados. Mayor resistencia a intentos de apertura forzada." },
              { t: "Portones industriales de acceso", d: "Corredizos para flujo vehicular pesado. Dimensionados para el camión más grande que entre a la operación." },
              { t: "Accesos peatonales independientes", d: "Puertas de personal separadas del acceso vehicular. Con cerradura de seguridad o control de acceso." },
              { t: "Mallas separadoras interiores", d: "Para zonas dentro de la instalación que requieren separación (almacenaje separado, acceso restringido, seguridad de activos)." },
            ].map((item) => (
              <div key={item.t} className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/portones-industriales", label: "Portones industriales", desc: "Guía completa de accesos" },
            { href: "/mallas-separadoras", label: "Mallas separadoras", desc: "División interior de espacios" },
            { href: "/rejas-metalicas-por-mayor", label: "Por mayor", desc: "Proyectos de alto volumen" },
            { href: "/empresas", label: "Para empresas", desc: "Proyectos industriales completos" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza el cierre de tu instalación industrial</h2>
          <p className="text-gray-400 text-sm mb-5">Metros lineales, altura requerida, tipo de portón y ubicación. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cotizar un cierre perimetral industrial. Metros: [N] ml. Altura: [M] m. Portón: [CORREDIZO/BATIENTE, ANCHO]. Ubicación: [PARQUE/ZONA].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
