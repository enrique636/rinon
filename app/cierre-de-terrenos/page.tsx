import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cierre de Terrenos — Opciones y Precios en Chile | Rinon.cl",
  description: "Opciones para cerrar un terreno en Chile: malla metálica, cerco de alambre, reja tubular. Fabricante directo con instalación. ¿Cuál conviene para tu terreno?",
  keywords: ["cierre de terreno", "cierre de terrenos", "cerrar terreno chile", "cómo cerrar un terreno", "cierre terreno metalico", "cierre terreno precio chile", "opciones cierre terreno", "instalacion cierre terreno"],
  alternates: { canonical: "https://rinon.cl/cierre-de-terrenos" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CierreTerrenos() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Cuál es la forma más económica de cerrar un terreno?", acceptedAnswer: { "@type": "Answer", text: "El cerco de alambre galvanizado tensado entre postes es la opción más económica por metro lineal. No es la más estética ni la más segura, pero cumple la función de delimitar el terreno. Para terrenos grandes en zonas rurales o periurbanas es la solución más habitual." } },
          { "@type": "Question", name: "¿Cuánto cuesta cerrar un terreno en Chile?", acceptedAnswer: { "@type": "Answer", text: "El precio por metro lineal varía según el tipo de cierre. Un cerco de alambre es el más económico. La malla electrosoldada tiene un costo intermedio. La reja tubular es la más cara pero la más durable y estética. Cotizamos según el tipo y los metros lineales del terreno." } },
          { "@type": "Question", name: "¿Necesito permiso municipal para cerrar mi terreno?", acceptedAnswer: { "@type": "Answer", text: "Depende de la comuna y del tipo de cierre. Para cierres que no implican obra civil permanente (postes sin hormigón, malla removible) generalmente no se requiere permiso. Para rejas o muros que involucren fundaciones, algunas comunas exigen declaración o permiso. Consulta con la DOM de tu municipio antes de instalar." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Cierre de Terrenos</span>
        </nav>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">🌍 Terrenos · Parcelas · Sitios · Chile</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cierre de Terrenos — ¿Cuál Opción Conviene?</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Cerrar un terreno tiene una sola función: delimitar lo que es tuyo, controlar el acceso
            y proteger el predio. La opción correcta depende de tres factores: el presupuesto, el uso
            del terreno y si el cierre es temporal o definitivo.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Acá te explicamos las opciones reales — sin venderte la más cara si no la necesitas.
          </p>
          <a href={wa("Hola, necesito cerrar un terreno y quiero cotizar opciones. ¿Pueden orientarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar cierre de terreno</a>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Comparativa de opciones</h2>
          <div className="overflow-hidden border border-gray-200 rounded-2xl">
            <table className="w-full text-sm">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Tipo de cierre</th>
                  <th className="text-left px-4 py-3 font-semibold">Costo relativo</th>
                  <th className="text-left px-4 py-3 font-semibold">Duración</th>
                  <th className="text-left px-4 py-3 font-semibold">Ideal para</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { tipo: "Cerco de alambre galvanizado", costo: "$ (más económico)", dur: "5-10 años", ideal: "Terrenos grandes, zonas rurales, presupuesto ajustado" },
                  { tipo: "Malla electrosoldada", costo: "$$", dur: "15-20 años", ideal: "Obras, bodegas, uso comercial. Económica y rígida" },
                  { tipo: "Reja tubular", costo: "$$$", dur: "30+ años", ideal: "Proyectos definitivos, condominios, industrias" },
                  { tipo: "Plancha metálica ondulada", costo: "$$", dur: "20+ años", ideal: "Cuando se necesita privacidad total y protección visual" },
                ].map(r => (
                  <tr key={r.tipo} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900 text-xs">{r.tipo}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{r.costo}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{r.dur}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{r.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lo que más nos preguntan antes de cotizar</h2>
          <div className="space-y-3">
            {[
              { q: "¿El terreno es urbano o rural?", a: "Los terrenos urbanos suelen requerir un cierre más estético (reja o malla). Los rurales aceptan mejor el cerco de alambre o la malla simple." },
              { q: "¿Es temporal o definitivo?", a: "Si vas a construir pronto, un cierre temporal es suficiente. Si el terreno va a estar así por años, invierte en algo más durable." },
              { q: "¿Cuántos metros tiene el perímetro?", a: "El costo es proporcional a los metros. Para terrenos grandes, el cerco de alambre hace sentido económicamente aunque sea menos robusto." },
            ].map(i => (
              <div key={i.q} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{i.q}</p>
                <p className="text-gray-500 text-xs">{i.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cierres-perimetrales", label: "Todos los cierres perimetrales", desc: "Catálogo completo de tipos y materiales" },
            { href: "/cierres-para-obras", label: "Cierre temporal para obra", desc: "Si vas a construir en el terreno pronto" },
            { href: "/cierres-para-industrias", label: "Cierre industrial", desc: "Para predios de uso industrial o comercial" },
            { href: "/portones-metalicos", label: "Portones de acceso", desc: "Complemento para cualquier cierre de terreno" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros tiene tu terreno?</h2>
          <p className="text-gray-400 text-sm mb-5">Con el perímetro y el tipo de uso, te recomendamos la opción correcta y cotizamos sin compromiso.</p>
          <a href={wa("Hola, necesito cerrar un terreno. El perímetro es de [METROS] metros. ¿Qué opciones tienen?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
