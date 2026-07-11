import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Fabricante de Cercos Metálicos en Santiago — Sin Intermediarios",
  description: "Somos fabricantes de cercos metálicos en Santiago. Rejas tubulares, mallas separadoras y portones a medida. Precio directo de fábrica — sin distribuidores. Instalación incluida en la RM.",
  keywords: ["fabricante cercos metalicos", "fabrica cercos metalicos santiago", "fabricante rejas metalicas chile", "fabricante cerco perimetral", "fabrica rejas santiago", "fabricante portones metalicos", "fabricante directo cercos", "fabrica metalica santiago", "fabrica estructuras metalicas santiago"],
  alternates: { canonical: "https://rinon.cl/fabricante-cercos-metalicos" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function FabricanteCercosMetalicosPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Rinon.cl — Fabricante de Cercos Metálicos",
        description: "Fabricantes de cercos metálicos, rejas tubulares, mallas separadoras y portones en Santiago de Chile. Precio de fábrica, sin intermediarios.",
        areaServed: "Santiago, Chile",
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Por qué comprar a un fabricante directo de cercos metálicos?", acceptedAnswer: { "@type": "Answer", text: "Al comprar al fabricante eliminás el margen del distribuidor y el margen de la tienda — que en conjunto pueden ser del 40 al 80% del precio final. Además, el fabricante puede ajustar las medidas exactas del proyecto, lo que un distribuidor con stock estándar no puede hacer." } },
          { "@type": "Question", name: "¿Tienen taller propio en Santiago?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos en nuestro taller en Santiago. No somos intermediarios ni distribuidores — cortamos, soldamos y pintamos la reja. Eso nos permite controlar el tiempo de producción y la calidad directamente." } },
          { "@type": "Question", name: "¿Fabrican cercos metálicos por mayor?", acceptedAnswer: { "@type": "Answer", text: "Sí. Para proyectos de volumen (constructoras, inmobiliarias, empresas industriales) hay precio por mayor. Cotiza con el volumen total y la dirección de entrega." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Fabricante</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-700 font-medium mb-5">
            Taller propio en Santiago · Sin intermediarios
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fabricante de Cercos Metálicos en Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Fabricamos cercos metálicos, rejas tubulares, mallas separadoras y portones en nuestro propio taller en Santiago.
            No somos distribuidores ni representantes de nadie — somos el fabricante.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Eso significa el precio más bajo posible, medidas exactas a tu proyecto y trato directo con quien fabrica.
          </p>
          <a href={wa("Hola, quiero cotizar cercos metálicos directo con el fabricante. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar con el fabricante
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Qué fabricamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/rejas-metalicas", t: "Rejas tubulares", d: "Tubo cuadrado o redondo. Para frontis residenciales, cierres de comercio y perímetros industriales." },
              { href: "/cierres-perimetrales", t: "Cercos perimetrales", d: "Cierre completo de predios, terrenos, obras y condominios. Reja más postes anclados al suelo." },
              { href: "/mallas-separadoras", t: "Mallas separadoras", d: "Divisiones interiores para bodegas, galpones e industrias. Permiten circulación y ventilación." },
              { href: "/portones-industriales", t: "Portones industriales", d: "Corredizos y batientes para galpones, bodegas y plantas. En acero estructural de alto calibre." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t} →</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Nuestro proceso de fabricación</h2>
          <div className="space-y-3">
            {[
              { n: "1", t: "Cotización con medidas exactas", d: "Te cotizamos según las medidas reales del proyecto — no un precio estándar." },
              { n: "2", t: "Corte y soldadura en taller", d: "Cortamos los perfiles, soldamos la estructura con soldadura MIG y verificamos medidas." },
              { n: "3", t: "Pintura electrostática o galvanizado", d: "Aplicamos la protección anticorrosiva elegida: pintura al horno o galvanizado en caliente." },
              { n: "4", t: "Despacho e instalación", d: "Coordinamos el transporte y la instalación en el sitio final." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                <span className="w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{s.n}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza directo con el fabricante</h2>
          <p className="text-gray-400 text-sm mb-5">Sin formularios largos — cuéntanos el tipo de cerco, los metros y la ubicación. Respondemos el mismo día.</p>
          <a href={wa("Hola, quiero cotizar cercos metálicos directo con el fabricante. Tipo: [REJA/CIERRE/MALLA/PORTÓN]. Metros: [N] ml. Ubicación: [CIUDAD].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
