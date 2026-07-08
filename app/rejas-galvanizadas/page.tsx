import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Galvanizadas Santiago — Durabilidad Máxima | Buenos Pal Catre",
  description: "Rejas metálicas galvanizadas en Santiago. Protección máxima contra la corrosión — ideal para zonas costeras, húmedas o industrial pesada. Fabricante directo, instalación incluida.",
  keywords: ["rejas galvanizadas", "reja metalica galvanizada", "reja galvanizada santiago", "cerco galvanizado", "reja tubular galvanizada", "precio reja galvanizada", "reja galvanizada en caliente", "cerco perimetral galvanizado", "malla galvanizada cierre"],
  alternates: { canonical: "https://rinon.cl/rejas-galvanizadas" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasGalvanizadasPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Reja Metálica Galvanizada en Caliente",
        description: "Rejas metálicas con galvanizado en caliente. Protección máxima contra la corrosión para instalaciones costeras, húmedas o industriales pesadas. Fabricante en Santiago.",
        brand: { "@type": "Brand", name: "Buenos Pal Catre" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué es una reja galvanizada en caliente?", acceptedAnswer: { "@type": "Answer", text: "Es una reja de acero que pasa por un proceso de inmersión en zinc fundido a alta temperatura. El zinc se funde al acero creando una capa protectora que resiste la corrosión por décadas — a diferencia de la pintura, que con el tiempo se deteriora y requiere mantención." } },
          { "@type": "Question", name: "¿Cuándo conviene una reja galvanizada?", acceptedAnswer: { "@type": "Answer", text: "Cuando la reja estará expuesta permanentemente a condiciones agresivas: zonas costeras (sal marina), climas con mucha lluvia (sur de Chile), ambientes industriales con vapores o humedad constante, o simplemente cuando se busca eliminar el mantenimiento para siempre." } },
          { "@type": "Question", name: "¿Es mucho más cara que la reja pintada?", acceptedAnswer: { "@type": "Answer", text: "Sí, el costo inicial es más alto — aproximadamente 30 a 50% más que la misma reja con pintura electrostática. Pero si se considera el costo de mantención (repintar cada 5-8 años), a largo plazo el galvanizado suele ser más económico." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Rejas Galvanizadas</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-700 font-medium mb-5">
            Durabilidad máxima · Sin mantenimiento · Décadas de vida útil
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas Galvanizadas en Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            La reja galvanizada en caliente es la opción de mayor durabilidad disponible. El zinc se funde al acero a alta temperatura — no es una capa de pintura encima, sino una aleación. Resiste décadas sin mantenimiento.
          </p>
          <a href={wa("Hola, me interesa una reja metálica galvanizada. Las medidas son: [METROS] ml x [ALTURA] m. ¿Pueden cotizarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar reja galvanizada
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pintada vs galvanizada — diferencias reales</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 text-gray-500 font-medium text-xs">Factor</th>
                  <th className="text-center py-3 px-4 text-gray-900 font-semibold text-xs">Galvanizada en caliente</th>
                  <th className="text-center py-3 px-4 text-gray-500 font-medium text-xs">Pintura electrostática</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Vida útil sin mantenimiento", "25–50 años", "5–10 años"],
                  ["Costo inicial", "30–50% más alto", "Estándar"],
                  ["Mantenimiento", "Ninguno en décadas", "Repintar cada 5–8 años"],
                  ["Aspecto", "Gris metálico brillante", "Negro, gris u otro color"],
                  ["Resistencia marina / humedad", "Máxima", "Moderada"],
                  ["Mejor para", "Zonas costeras, sur de Chile, industria", "Interior Santiago, uso general"],
                ].map(([factor, galv, pint]) => (
                  <tr key={factor}>
                    <td className="py-3 pr-4 text-gray-600 text-xs font-medium">{factor}</td>
                    <td className="py-3 px-4 text-center text-green-700 text-xs font-medium">{galv}</td>
                    <td className="py-3 px-4 text-center text-gray-400 text-xs">{pint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Cuándo elegir galvanizado?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Zona costera (Valparaíso, Iquique, Arica)", d: "La sal marina destruye la pintura en pocos años. El galvanizado resiste la exposición marina de forma permanente." },
              { t: "Sur de Chile (Concepción, Temuco, Puerto Montt)", d: "Alta humedad y lluvias constantes aceleran la corrosión. El galvanizado es la elección inteligente a largo plazo." },
              { t: "Ambiente industrial", d: "Empresas con vapores, productos químicos o limpieza frecuente con agua. La pintura se deteriora; el galvanizado no." },
              { t: "Cero mantenimiento", d: "Si la reja estará en un lugar de difícil acceso o donde nadie va a pintarla cada 5 años, el galvanizado se paga solo." },
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
            { href: "/rejas-metalicas", label: "Todos los tipos de reja", desc: "Comparativa completa" },
            { href: "/rejas-metalicas-precio", label: "Factores de precio", desc: "Qué determina el costo" },
            { href: "/cercos-perimetrales-valparaiso", label: "Cercos Valparaíso", desc: "Galvanizado para zona costera" },
            { href: "/cercos-perimetrales-temuco", label: "Cercos Temuco", desc: "Galvanizado para el sur húmedo" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Te conviene galvanizado o pintado?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos dónde está la reja y qué condiciones enfrenta. Te recomendamos la opción correcta y te cotizamos ambas si quieres comparar.</p>
          <a href={wa("Hola, quiero cotizar una reja metálica galvanizada. Medidas: [METROS] ml x [ALTURA] m. Ubicación / condiciones: [ZONA COSTERA / SUR / INDUSTRIA / OTRO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
