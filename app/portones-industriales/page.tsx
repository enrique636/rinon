import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones Industriales Santiago — Fabricante Directo | Rinon.cl",
  description: "Portones industriales corredizos y batientes en Santiago. Fabricante directo sin intermediarios. Acero estructural, medidas exactas, instalación incluida. Cotiza hoy.",
  keywords: ["portones industriales santiago", "portones metalicos industriales", "porton corredizo industrial", "porton industrial precio", "fabrica portones industriales", "porton metalico galpón", "portones para bodegas", "portones para fábricas", "porton corredizo santiago", "portones industriales chile"],
  alternates: { canonical: "https://rinon.cl/portones-industriales" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesIndustrialesPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Portones Industriales Metálicos a Medida",
        description: "Portones industriales corredizos y batientes fabricados en acero estructural. Medidas exactas para el vano de acceso. Instalación incluida en Santiago.",
        provider: {
          "@type": "LocalBusiness",
          name: "Camarotes Chile",
          address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        },
        serviceType: "Fabricación e instalación de portones metálicos",
        areaServed: { "@type": "Country", name: "Chile" },
        brand: { "@type": "Brand", name: "Camarotes Chile" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué es un portón industrial?", acceptedAnswer: { "@type": "Answer", text: "Es un portón de acero estructural diseñado para accesos vehiculares de gran tamaño — galpones, bodegas, plantas industriales, fábricas y estacionamientos. A diferencia de los portones residenciales, los industriales soportan más ciclos de apertura, usan perfiles de mayor espesor y son fabricados a la medida exacta del vano." } },
          { "@type": "Question", name: "¿Corredizo o batiente?", acceptedAnswer: { "@type": "Answer", text: "El corredizo es el más usado en industria: no necesita espacio de barrido frontal, ideal para vanos anchos (4 m o más) y flujo vehicular constante. El batiente es más simple y económico para accesos más estrechos o con menor frecuencia de uso. Asesoramos cuál conviene según el espacio disponible." } },
          { "@type": "Question", name: "¿Cuánto cuesta un portón industrial?", acceptedAnswer: { "@type": "Answer", text: "El precio depende del ancho del vano, la altura, el tipo de apertura (corredizo o batiente), el espesor del perfil y si lleva automatización. Cotiza por WhatsApp con las medidas del vano y el tipo de acceso." } },
          { "@type": "Question", name: "¿Instalan en toda la Región Metropolitana?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos portones industriales en toda la RM — parques industriales, zonas francas, bodegas y galpones de cualquier comuna." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos y portones</Link><span>/</span>
          <span className="text-gray-700 font-medium">Portones Industriales</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Santiago · Instalación incluida</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portones Industriales Metálicos a Medida</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Portones de acero estructural para galpones, bodegas, plantas industriales y fábricas. Corredizos y batientes — fabricados con las medidas exactas de tu vano, instalados por nosotros.
          </p>
          <a href={wa("Hola, necesito cotizar un portón industrial. Las medidas del vano son: [ANCHO x ALTO]. Tipo: [CORREDIZO / BATIENTE].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de portón industrial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Portón corredizo industrial", d: "El más usado en galpones y bodegas. Abre deslizando lateralmente — sin espacio de barrido frontal. Ideal para vanos de 3 a 8 metros de ancho." },
              { t: "Portón batiente doble", d: "Dos hojas que abren hacia los lados. Económico para vanos amplios. Requiere espacio de barrido interior o exterior." },
              { t: "Portón batiente simple", d: "Una hoja. Para accesos peatonales o vehiculares angostos. Opción más simple y económica." },
              { t: "Portón automatizado", d: "Motor eléctrico con control remoto o botonera. Se agrega a cualquier tipo de portón corredizo. Consultarnos disponibilidad." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Aplicaciones industriales</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {["Galpones de bodegaje","Plantas industriales","Fábricas","Distribuidoras","Parques industriales","Zonas francas","Talleres mecánicos","Empresas constructoras","Logística y transporte","Frigoríficos","Faenas mineras","Agricultura y agroindustria"].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600">{item}</div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Materiales y especificaciones</h2>
          <div className="space-y-2">
            {[
              ["Estructura principal", "Tubo cuadrado de acero estructural 2\" a 3\" según el vano y el peso requerido"],
              ["Barrotes y relleno", "Tubo cuadrado o redondo, separación según especificación del cliente"],
              ["Acabado estándar", "Pintura anticorrosiva de base + esmalte al horno. Gris, negro o color a convenir"],
              ["Acabado premium", "Galvanizado en caliente para zonas con alta exposición climática"],
              ["Sistema de rodadura", "Rodillos de acero para corredizos. Bisagras reforzadas para batientes"],
            ].map(([cat, desc]) => (
              <div key={cat} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-3 text-xs">
                <span className="font-medium text-gray-700 min-w-[120px] flex-shrink-0">{cat}</span>
                <span className="text-gray-500">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas", label: "Rejas metálicas", desc: "Cercos para el perímetro del predio" },
            { href: "/cierres-perimetrales", label: "Cercos perimetrales", desc: "Cierre completo del sitio" },
            { href: "/mallas-separadoras", label: "Mallas separadoras", desc: "Para interiores de bodegas" },
            { href: "/empresas", label: "Para empresas", desc: "Proyectos industriales completos" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cuéntanos las medidas de tu acceso</h2>
          <p className="text-gray-400 text-sm mb-5">Ancho del vano, altura y tipo de apertura. Cotizamos el mismo día.</p>
          <a href={wa("Hola, necesito cotizar un portón industrial. Las medidas del vano son [ANCHO] x [ALTO] m. Tipo de portón: [CORREDIZO/BATIENTE]. Uso: [GALPÓN/BODEGA/OTRO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
