import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Metálicas Santiago | Fabricante Directo — Chile",
  description: "Rejas metálicas fabricadas en Santiago. Reja tubular, reja de fierro y reja perimetral para casas, obras, bodegas e industrias. Fabricante directo — sin intermediarios. Cotiza hoy.",
  keywords: [
    "rejas metalicas santiago",
    "reja metalica precio",
    "reja tubular santiago",
    "reja de fierro santiago",
    "rejas metalicas fabricante",
    "reja perimetral metalica",
    "rejas para casas santiago",
    "fabrica rejas metalicas chile",
    "reja metalica galvanizada",
    "rejas metalicas por mayor",
    "instalacion rejas metalicas",
    "reja metalica obra",
    "reja metalica bodega",
    "venta rejas metalicas santiago",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Rejas Metálicas",
            description: "Rejas metálicas tubulares fabricadas en Santiago. Para casas, obras, bodegas e industrias.",
            provider: {
              "@type": "LocalBusiness",
              name: "Camarotes Chile",
              address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
            },
            serviceType: "Fabricación e instalación de rejas metálicas",
            areaServed: { "@type": "Country", name: "Chile" },
            brand: { "@type": "Brand", name: "Camarotes Chile" },
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
              {
                "@type": "Question",
                name: "¿Cuánto cuesta una reja metálica en Santiago?",
                acceptedAnswer: { "@type": "Answer", text: "El precio de una reja metálica varía según el tipo (tubular, malla, galvanizada), las medidas y el acabado. Al ser fabricantes directos no hay intermediarios — el precio es más bajo que en ferreterías o distribuidores. Cotiza por WhatsApp con las medidas de tu proyecto y te respondemos el mismo día." },
              },
              {
                "@type": "Question",
                name: "¿Qué diferencia hay entre reja tubular y reja de fierro?",
                acceptedAnswer: { "@type": "Answer", text: "La reja tubular se fabrica con tubo de acero cuadrado o redondo soldado. La reja de fierro (o reja de barra) se fabrica con barras de acero sólidas. La tubular es más liviana y moderna; la de barra es más pesada y tradicional. Ambas tienen la misma función — se elige según estética, presupuesto y aplicación." },
              },
              {
                "@type": "Question",
                name: "¿Fabrican rejas a medida?",
                acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos rejas en cualquier medida, separación entre barrotes y diseño. No vendemos tallas fijas — cada reja se fabrica según las medidas del proyecto." },
              },
              {
                "@type": "Question",
                name: "¿Instalan las rejas o solo venden?",
                acceptedAnswer: { "@type": "Answer", text: "Fabricamos e instalamos en Santiago y alrededores. Para proyectos en regiones, fabricamos y despachamos las rejas para que el cliente las instale o contrate instalación local." },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Rejas Metálicas</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 font-medium mb-5">
            Fabricante directo · Santiago · Venta por mayor y menor
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas Metálicas en Santiago
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Fabricamos rejas metálicas en nuestro taller en Santiago — reja tubular, reja de fierro, reja galvanizada y cercos perimetrales a medida. Sin intermediarios, precio de fábrica.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Para casas, departamentos, obras en construcción, bodegas industriales, condominios y terrenos. Instalación disponible en Santiago Metropolitano.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={wa("Hola, necesito cotizar rejas metálicas. ¿Pueden ayudarme con precio y medidas?")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
              Cotizar por WhatsApp
            </a>
            <Link href="/rejas-metalicas-precio"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-base hover:border-gray-400 transition-colors">
              Ver precios referenciales
            </Link>
          </div>
        </div>

        {/* Tipos de reja */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Tipos de reja metálica que fabricamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja tubular", d: "Fabricada con tubo de acero cuadrado o redondo. La más usada en residencias y condominios. Liviana, moderna y duradera. Se puede galvanizar o pintar." },
              { t: "Reja de fierro (barra sólida)", d: "Barras de acero sólidas soldadas a marco. Más pesada que la tubular, mayor sensación de robustez. Tradicional para casas antiguas y fachadas." },
              { t: "Reja galvanizada", d: "Cualquier tipo de reja con tratamiento de galvanizado en caliente. Resistencia máxima a la corrosión — ideal para exteriores expuestos, zonas costeras o industriales." },
              { t: "Reja para obra o cerco perimetral", d: "Paneles modulares para cerrar perímetros de obras en construcción, terrenos y bodegas. Se pueden fijar al suelo o instalar en postes." },
              { t: "Malla separadora industrial", d: "Para dividir espacios interiores en bodegas, galpones y fábricas. Permite visibilidad y ventilación — alternativa a los muros." },
              { t: "Portón metálico", d: "Corredizo o batiente, a medida. Puede combinarse con cualquier tipo de reja para completar el cierre perimetral." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usos */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Para qué se usan nuestras rejas?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["Casas y jardines", "Condominios", "Obras en construcción", "Bodegas e industrias", "Terrenos y sitios", "Colegios y hospitales", "Faenas mineras", "Campamentos", "Frontis comerciales"].map((u) => (
              <div key={u} className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-gray-600 font-medium text-center">{u}</div>
            ))}
          </div>
        </div>

        {/* Por qué nosotros */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Por qué comprar directamente a nosotros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Precio de fábrica", d: "No hay distribuidor entre nosotros y tú. Lo que pagas en ferretería o distribuidora tiene 2 o 3 márgenes encima — con nosotros pagas directo al fabricante." },
              { t: "Medidas exactas", d: "No vendemos paneles de tamaño fijo. Fabricamos cada reja con las medidas de tu proyecto — sin cortes, sin rellenos, sin desperdicios." },
              { t: "Fabricación en Santiago", d: "Taller propio en Santiago. Sin importaciones, sin stock mínimo, sin esperas de 30 días. Tiempos de fabricación reales que confirmamos al cotizar." },
              { t: "Venta por mayor y menor", d: "Atendemos desde una reja para una casa hasta cientos de metros lineales para una constructora. El precio por mayor se cotiza según volumen." },
            ].map((item) => (
              <div key={item.t} className="flex gap-3 bg-white border border-gray-200 rounded-xl p-4">
                <span className="text-green-500 font-bold text-sm mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {[
              { q: "¿Cuánto cuesta una reja metálica?", a: "Depende del tipo, las medidas y el acabado. Cotiza por WhatsApp con las medidas de tu espacio y te respondemos el mismo día con precio y plazo." },
              { q: "¿Instalan en toda la Región Metropolitana?", a: "Sí. Fabricamos e instalamos en todas las comunas de Santiago. Para regiones, fabricamos y coordinamos el despacho." },
              { q: "¿Cuánto demora fabricar una reja?", a: "Depende del volumen y la complejidad. Se confirma el plazo exacto al cotizar. Proyectos pequeños se pueden entregar en pocos días hábiles." },
              { q: "¿Fabrican por mayor para constructoras?", a: "Sí. Trabajamos con constructoras, inmobiliarias y empresas que necesitan grandes volúmenes. Precio especial según cantidad." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{faq.q}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cierres-perimetrales", label: "Cercos perimetrales", desc: "Todos los tipos de cierre que fabricamos" },
            { href: "/portones-metalicos", label: "Portones metálicos", desc: "Corredizos y batientes a medida" },
            { href: "/mallas-separadoras", label: "Mallas separadoras", desc: "Para bodegas y espacios industriales" },
            { href: "/cercos-perimetrales-santiago", label: "Cercos en Santiago", desc: "Cobertura en toda la Región Metropolitana" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros necesitas?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el tipo de reja, las medidas y la cantidad. Te cotizamos hoy.</p>
          <a href={wa("Hola, necesito cotizar rejas metálicas. El proyecto es: [DESCRIPCIÓN]. ¿Pueden ayudarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
