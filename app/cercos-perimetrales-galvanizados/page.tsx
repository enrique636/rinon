import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Galvanizados — Larga Duración en Chile",
  description: "Cercos perimetrales galvanizados en Chile. Fabricante directo. Cercos con galvanizado en caliente para zonas húmedas, costeras y con lluvia intensa. 25–40 años de duración sin mantenimiento.",
  keywords: ["cercos perimetrales galvanizados","cerco galvanizado chile","cerco perimetral galvanizado en caliente","cerco metalico galvanizado","cerco galvanizado precio chile","cerco perimetral resistente humedad","fabricante cercos galvanizados","cerco galvanizado vs pintado","cerco para zona costera galvanizado","cerco galvanizado larga duracion"],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-galvanizados" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesGalvanizadosPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Cuánto dura un cerco galvanizado en caliente?", acceptedAnswer: { "@type": "Answer", text: "Un cerco con galvanizado en caliente dura entre 25 y 40 años en clima moderado (Santiago), 20–30 años en zonas lluviosas del sur y 15–25 años en zonas costeras con salitre marino. Es el acabado de mayor duración disponible para el acero." } },
              { "@type": "Question", name: "¿Qué diferencia hay entre galvanizado en caliente y galvanizado electrolítico?", acceptedAnswer: { "@type": "Answer", text: "El galvanizado en caliente sumerge el acero en zinc fundido a 450°C — forma una capa gruesa (85–100 micrones) que se funde con el metal base. El galvanizado electrolítico (o electrogalvanizado) deposita una capa delgada (5–15 micrones) por proceso eléctrico. Para uso exterior, solo el galvanizado en caliente ofrece protección duradera." } },
              { "@type": "Question", name: "¿Cuándo conviene galvanizar vs pintar?", acceptedAnswer: { "@type": "Answer", text: "En Santiago y zonas de clima seco moderado, la pintura electrostática es suficiente y más económica. En zonas con más de 800 mm de lluvia anual, costa con salitre marino o instalaciones industriales que no se pueden repintar fácilmente, el galvanizado en caliente es la opción más rentable a largo plazo." } },
            ],
          }),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Galvanizados</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Galvanizado en caliente · 25–40 años de duración · Zonas húmedas y costeras</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales Galvanizados — La Opción de Larga Duración</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">El galvanizado en caliente es el acabado que más dura en la intemperie. Un cerco galvanizado no se oxida en décadas — sin repintado, sin mantenimiento anual, sin sorpresas. Para zonas lluviosas, costeras e industriales es la única opción que tiene sentido económico a largo plazo.</p>
          <a href={wa("Hola, necesito cotizar un cerco perimetral galvanizado. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / EMPRESA / INDUSTRIA / PARCELA]. Zona o clima: [DATO]. Portones: [CANTIDAD].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco galvanizado</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pintado vs galvanizado: vida útil real en Chile</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Zona</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Pintura electrostática</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Galvanizado en caliente</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Santiago y zona central seca", "10–15 años", "25–35 años"],
                  ["Maule, Biobío interior", "7–10 años", "20–30 años"],
                  ["Sur lluvioso (Temuco, Valdivia, Osorno)", "5–8 años", "18–25 años"],
                  ["Costa con salitre (Valparaíso, La Serena)", "3–6 años", "15–20 años"],
                  ["Chiloé y Patagonia", "2–4 años", "15–20 años"],
                ].map(([zona, pin, gal]) => (
                  <tr key={zona} className="border-t border-gray-100">
                    <td className="p-3 text-gray-700">{zona}</td>
                    <td className="p-3 text-gray-500">{pin}</td>
                    <td className="p-3 text-green-700 font-medium">{gal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "Frontis y rejas residenciales galvanizadas" },
            { href: "/blog/galvanizado-vs-pintado-cuando-elegir", label: "Galvanizado vs pintado", desc: "Cuándo conviene cada uno" },
            { href: "/cercos-perimetrales-precio", label: "Precio de cercos", desc: "Cuánto cuesta por metro lineal" },
            { href: "/blog/cuanto-dura-una-reja-metalica", label: "Vida útil del acero", desc: "Durabilidad según acabado y zona" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco galvanizado</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y zona. Te recomendamos el acabado correcto según el clima.</p>
          <a href={wa("Hola, quiero cotizar cerco galvanizado. Metros: [METROS] ml. Altura: [ALTURA] m. Zona: [DATO]. Uso: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
