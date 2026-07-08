import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Metálicas al Por Mayor — Fabricante Santiago | Buenos Pal Catre",
  description: "Rejas metálicas al por mayor en Santiago. Precio por volumen para constructoras, inmobiliarias e industrias. Fabricante directo sin intermediarios. Cotiza tu proyecto hoy.",
  keywords: ["rejas metalicas por mayor", "cercos metalicos por mayor", "reja tubular por mayor santiago", "rejas metalicas volumen", "fabricante rejas por mayor chile", "cerco perimetral por mayor", "mallas metalicas por mayor", "portones metalicos por mayor", "estructuras metalicas por mayor"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-por-mayor" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasPorMayorPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Venden rejas metálicas al por mayor en Santiago?", acceptedAnswer: { "@type": "Answer", text: "Sí. Para proyectos de alto volumen (constructoras, inmobiliarias, industrias, proyectos mineros) tenemos precio por mayor. El precio por metro lineal disminuye al aumentar la cantidad. Cotiza con el volumen total del proyecto para recibir el mejor precio." } },
          { "@type": "Question", name: "¿Cuántos metros lineales es el mínimo para precio por mayor?", acceptedAnswer: { "@type": "Answer", text: "No hay un mínimo fijo — el precio mejora progresivamente a partir de ciertos volúmenes. Para proyectos de 50 ml o más ya hay un diferencial importante respecto al precio unitario. Cotiza con las medidas totales y te mostramos el desglose." } },
          { "@type": "Question", name: "¿Pueden fabricar y despachar en serie para varios proyectos?", acceptedAnswer: { "@type": "Answer", text: "Sí. Trabajamos con constructoras que necesitan provisión de rejas para múltiples obras. Se coordina el calendario de fabricación y despacho según el avance de cada proyecto." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Por Mayor</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-700 font-medium mb-5">
            Precio por volumen · Fabricante directo
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas al Por Mayor</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Para proyectos de alto volumen — constructoras, inmobiliarias, mineras, industrias — fabricamos rejas metálicas con precio por mayor directo al fabricante.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            El precio por metro lineal disminuye al aumentar la cantidad. Cotiza con el volumen total del proyecto.
          </p>
          <a href={wa("Hola, necesito cotizar rejas metálicas al por mayor. El proyecto tiene [METROS] ml en total. Tipo: [REJA TUBULAR / CIERRE / MALLA]. Destino: [CIUDAD].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por mayor
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quiénes compran al por mayor</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {["Constructoras","Inmobiliarias","Empresas mineras","Contratistas industriales","Municipalidades","Puertos y terminales","Industrias alimentarias","Cámaras frigoríficas","Parques industriales","Agroindustrias","Empresas forestales","Proyectos de infraestructura"].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600">{item}</div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Productos disponibles por mayor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/rejas-metalicas", t: "Rejas tubulares por mayor", d: "Tubo cuadrado o redondo. Precio por metro lineal según altura y diseño. Mínimo efectivo: 50 ml." },
              { href: "/cierres-perimetrales", t: "Cercos perimetrales", d: "Cierre completo con postes. Para proyectos de más de 100 ml el precio es más competitivo." },
              { href: "/mallas-separadoras", t: "Mallas separadoras por mayor", d: "Para industrias con múltiples espacios a separar. Precio total según m² de malla." },
              { href: "/portones-industriales", t: "Portones en serie", d: "Para proyectos con múltiples accesos — inmobiliarias y parques industriales con varios accesos." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t} →</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cuéntanos el volumen del proyecto</h2>
          <p className="text-gray-400 text-sm mb-5">Metros lineales totales, tipo de cerco y destino. Cotizamos con precio por mayor el mismo día.</p>
          <a href={wa("Hola, necesito cotizar rejas/cercos al por mayor. Volumen: [METROS] ml. Tipo: [REJA/CIERRE/MALLA]. Región de entrega: [CIUDAD].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
