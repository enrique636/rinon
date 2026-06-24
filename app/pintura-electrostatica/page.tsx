import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática en Santiago — Servicio de Powder Coating | Buenos Pal Catre",
  description:
    "Servicio de pintura electrostática (powder coating) en Santiago. Aplicamos pintura en polvo para muebles metálicos, camarotes, rejas, portones y estructuras. Acabado profesional, sin goteos, larga duración.",
  keywords: [
    "pintura electrostática Santiago",
    "powder coating Santiago",
    "pintura en polvo metales Santiago",
    "pintura electroestática muebles metálicos",
    "pintura electrostática rejas Santiago",
    "pintura electrostática portones",
    "pintura en polvo Santiago Chile",
    "recubrimiento electrostático Santiago",
    "pintura electrostática precio Santiago",
    "powder coat Santiago",
  ],
  alternates: { canonical: "https://dumar.cl/pintura-electrostatica" },
  openGraph: {
    title: "Pintura Electrostática en Santiago — Powder Coating Profesional",
    description: "Aplicamos pintura electrostática en polvo para muebles, camarotes, rejas y estructuras metálicas. Acabado superior a la pintura convencional.",
    type: "website",
    locale: "es_CL",
  },
};

const WA_NUM = SITE_CONFIG.whatsapp.numero;
const getWA = (msg: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        name: "Buenos Pal Catre — Pintura Electrostática",
        description: "Servicio de pintura electrostática (powder coating) en Santiago para muebles metálicos, rejas, portones y estructuras.",
        areaServed: { "@type": "City", name: "Santiago" },
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de pintura electrostática",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pintura electrostática para muebles metálicos" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pintura en polvo para rejas y portones" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recubrimiento electrostático para estructuras" } },
          ],
        },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Qué es la pintura electrostática?", acceptedAnswer: { "@type": "Answer", text: "La pintura electrostática (o powder coating) es un proceso donde se aplica pintura en polvo sobre la superficie metálica mediante carga electrostática. Luego el metal pasa por un horno de curado a 180-200°C donde el polvo se funde y forma una capa uniforme, dura y sin goteos. El resultado es más resistente y estético que la pintura líquida convencional." } },
          { "@type": "Question", name: "¿En qué se diferencia la pintura electrostática de la pintura normal?", acceptedAnswer: { "@type": "Answer", text: "La pintura convencional se aplica en estado líquido y tiende a gotear, dejar marcas y perder color más rápido. La electrostática se aplica en polvo seco y se funde en el horno, creando una capa de 60-80 micras uniforme, sin goteos, más resistente al rayado, los golpes y la corrosión. Dura 3-5 veces más en condiciones de uso intensivo." } },
          { "@type": "Question", name: "¿Pueden pintar rejas, portones o muebles que ya están instalados?", acceptedAnswer: { "@type": "Answer", text: "Para la pintura electrostática es necesario retirar la pieza, porque el proceso requiere desengrasado, aplicación en polvo y paso por el horno de curado. No es posible aplicar electrostática in situ. Para piezas que no se pueden retirar, usamos esmalte de alta resistencia aplicado con pistola." } },
        ],
      }) }} />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Pintura Electrostática</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🎨 Powder Coating · Santiago · Taller propio
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Pintura Electrostática en Santiago — Powder Coating Profesional
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-3">
            En nuestro taller aplicamos pintura electrostática en polvo para muebles metálicos,
            camarotes, rejas, portones y estructuras. El resultado es un acabado más duro, más
            uniforme y más duradero que cualquier pintura convencional.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Como fabricantes de estructuras metálicas, conocemos el metal desde adentro. No somos
            un taller de pintura externo — la pintura electrostática es parte de nuestro propio
            proceso de fabricación. Eso se nota en el resultado.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={getWA("Hola, quiero cotizar pintura electrostática para [DESCRIBIR PIEZA]. ¿Pueden ayudarme?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">
              Cotizar pintura electrostática
            </a>
            <a href={getWA("Hola, tengo una pregunta sobre el proceso de powder coating. ¿Pueden orientarme?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">
              Consultar proceso
            </a>
          </div>
        </div>

        {/* El proceso paso a paso */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Cómo es el proceso en nuestro taller</h2>
          <p className="text-gray-500 text-sm mb-6">La diferencia entre un buen resultado y uno mediocre está en la preparación de la superficie. Así lo hacemos nosotros:</p>
          <div className="space-y-4">
            {[
              { paso: "1", titulo: "Desengrasado y limpieza", desc: "Lavamos y desengrasamos completamente la pieza. Cualquier residuo de aceite, grasa o suciedad bajo la pintura arruina el resultado. En nuestro taller esto no se saltea." },
              { paso: "2", titulo: "Granallado o fosfatizado (según la pieza)", desc: "Según el tipo de metal y el uso final, la superficie se prepara con granallado (abrasivo) o fosfatizado (tratamiento químico). Esto mejora la adherencia del polvo y la resistencia a la corrosión." },
              { paso: "3", titulo: "Aplicación del polvo electrostático", desc: "El polvo de pintura se carga eléctricamente y se aplica con pistola. La carga hace que el polvo se adhiera uniformemente a toda la superficie, incluso en zonas de difícil acceso. Sin goteos, sin marcas." },
              { paso: "4", titulo: "Curado en horno", desc: "La pieza entra al horno a 180-200°C durante 15-25 minutos según el espesor. El calor funde el polvo y lo convierte en una capa dura y homogénea de 60-80 micras." },
              { paso: "5", titulo: "Control de calidad y entrega", desc: "Revisamos adherencia, uniformidad y espesor de capa. Entregamos con la garantía de un trabajo propio, no subcontratado." },
            ].map((p) => (
              <div key={p.paso} className="flex gap-5 bg-gray-50 border border-gray-100 rounded-xl p-5">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{p.paso}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{p.titulo}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparativa */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pintura electrostática vs pintura convencional</h2>
          <div className="overflow-hidden border border-gray-200 rounded-2xl">
            <table className="w-full text-sm">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Característica</th>
                  <th className="text-left px-5 py-3 font-semibold">Electrostática (polvo)</th>
                  <th className="text-left px-5 py-3 font-semibold">Convencional (esmalte)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { cat: "Uniformidad", elec: "Perfecta — sin goteos ni marcas", conv: "Puede tener variaciones" },
                  { cat: "Dureza", elec: "Alta — resiste rayados e impactos", conv: "Media — se raya con facilidad" },
                  { cat: "Durabilidad", elec: "8-15 años en exteriores", conv: "2-5 años" },
                  { cat: "Grosor de capa", elec: "60-80 micras controladas", conv: "Variable, difícil de controlar" },
                  { cat: "Colores disponibles", elec: "Catálogo RAL completo (200+ colores)", conv: "Limitado al stock disponible" },
                  { cat: "Resistencia UV", elec: "Alta — sin amarillamiento", conv: "Media — puede perder brillo" },
                  { cat: "Posibilidad de retoque", elec: "Requiere re-horneado completo", conv: "Se puede retocar en sitio" },
                ].map((r) => (
                  <tr key={r.cat} className="hover:bg-gray-50">
                    <td className="px-5 py-3 font-medium text-gray-900">{r.cat}</td>
                    <td className="px-5 py-3 text-green-600">{r.elec}</td>
                    <td className="px-5 py-3 text-gray-500">{r.conv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Para qué piezas */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Para qué tipos de piezas aplicamos?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { emoji: "🛏️", titulo: "Camarotes y camas metálicas", desc: "Nuestro producto principal. Renovamos camarotes existentes o aplicamos pintura de fábrica a los nuevos." },
              { emoji: "🚪", titulo: "Rejas y portones", desc: "Rejas de ventana, portones de acceso, barandas y cercas." },
              { emoji: "🪑", titulo: "Muebles metálicos", desc: "Sillas, mesas, estanterías, lockers y mobiliario de oficina." },
              { emoji: "🏗️", titulo: "Estructuras industriales", desc: "Racks, soportes, mezzanines y estructuras de acero." },
              { emoji: "🚲", titulo: "Bicicletas y piezas de hobby", desc: "Cuadros de bicicleta, partes de vehículos clásicos, equipos deportivos." },
              { emoji: "🔧", titulo: "Piezas a pedido", desc: "Si tienes algo específico, consúltanos. Evaluamos cada proyecto." },
            ].map((u) => (
              <div key={u.titulo} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
                <span className="text-2xl block mb-2">{u.emoji}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{u.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Colores */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Colores disponibles</h2>
          <p className="text-gray-500 text-sm mb-4">Trabajamos con polvo en catálogo RAL. Los más solicitados en nuestro taller:</p>
          <div className="flex flex-wrap gap-3 mb-4">
            {[
              { color: "bg-gray-900", nombre: "Negro mate" },
              { color: "bg-gray-200", nombre: "Blanco roto" },
              { color: "bg-gray-500", nombre: "Gris medio" },
              { color: "bg-amber-800", nombre: "Café tabaco" },
              { color: "bg-slate-600", nombre: "Gris grafito" },
              { color: "bg-zinc-700", nombre: "Antracita" },
            ].map((c) => (
              <div key={c.nombre} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
                <div className={`w-5 h-5 rounded-full border border-gray-300 ${c.color}`} />
                <span className="text-sm text-gray-700">{c.nombre}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400">Para colores especiales del catálogo RAL no listados aquí, consúltanos — los conseguimos por pedido.</p>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Qué es la pintura electrostática?", a: "Es un proceso donde la pintura en polvo se aplica sobre el metal cargada eléctricamente, luego se cura en horno a 180-200°C. El resultado es una capa dura, uniforme y sin goteos, mucho más resistente que la pintura convencional aplicada con brocha o pistola." },
              { q: "¿Cuánto demora el proceso?", a: "Depende de la cantidad y tamaño de las piezas. Una pieza individual puede estar lista en 2-3 días hábiles (incluyendo preparación y curado). Para volúmenes mayores, coordinamos plazos al cotizar." },
              { q: "¿Puedo elegir el color?", a: "Sí. Trabajamos con catálogo RAL. Si necesitas un color específico que no tenemos en stock, lo podemos conseguir por pedido (requiere tiempo adicional)." },
              { q: "¿Cuánto cuesta pintar electrostáticamente?", a: "El precio depende del tamaño, la cantidad de piezas y el color. Cotizamos por WhatsApp con fotografía o descripción de lo que necesitas. No publicamos precios unitarios porque cada trabajo es diferente." },
              { q: "¿Aceptan piezas de terceros (no fabricadas por ustedes)?", a: "Sí. Recibimos piezas de terceros para el servicio de pintura. Lo que evaluamos es el estado del metal (sin corrosión avanzada que requiera preparación extra) y el tamaño de la pieza para verificar que entre en nuestro horno." },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interlink */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">También fabricamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: "Camarotes metálicos", href: "/camarotes" },
              { label: "Estructuras metálicas a pedido", href: "/estructuras-metalicas" },
              { label: "Camarotes con escritorio", href: "/camarotes-con-escritorio" },
              { label: "Camarotes para empresas", href: "/empresas" },
              { label: "Fabricante directo Chile", href: "/fabricante-camarotes-chile" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-white transition-all">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Qué pieza necesitas pintar?</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">Mándanos una foto por WhatsApp y te cotizamos. Sin compromiso.</p>
          <a href={getWA("Hola, quiero cotizar pintura electrostática. Le mando fotos de lo que necesito pintar.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
