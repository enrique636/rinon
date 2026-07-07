import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas de Fierro Santiago — Fabricante Directo con Instalación",
  description: "Rejas de fierro en Santiago. Fabricante directo. Reja de fierro para frontis, ventana, puerta y perímetro. A medida, con pintura al horno. Instalación incluida. Cotiza hoy por WhatsApp.",
  keywords: [
    "rejas de fierro santiago",
    "reja de fierro",
    "rejas de fierro para casas",
    "reja de fierro precio chile",
    "rejas de fierro santiago precio",
    "reja de fierro para ventana",
    "reja de fierro para puerta",
    "fabricante rejas de fierro",
    "rejas de fierro tubular",
    "reja fierro negro santiago",
  ],
  alternates: { canonical: "https://dumar.cl/rejas-de-fierro" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasDeFierroPage() {
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
                name: "¿Qué es una reja de fierro?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En Chile, 'reja de fierro' es el nombre coloquial que se le da a las rejas metálicas fabricadas en tubo de acero. 'Fierro' es el término popular para referirse al acero o hierro en general. Son exactamente las mismas rejas que también se llaman 'rejas metálicas' o 'rejas de acero'.",
                },
              },
              {
                "@type": "Question",
                name: "¿Las rejas de fierro se oxidan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El acero sin protección sí se oxida. Por eso todas nuestras rejas de fierro llevan pintura electrostática al horno o galvanizado en caliente. La pintura electrostática forma una capa dura que protege el acero muchos años. El galvanizado zinc crea una barrera que dura décadas, ideal para zonas húmedas o costeras.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto cuesta una reja de fierro en Santiago?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio de una reja de fierro depende de los metros lineales, la altura, el diseño (simple o con adornos) y si incluye portón. Enviando metro, altura y si necesitas portón por WhatsApp, te damos precio el mismo día.",
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
          <span className="text-gray-700 font-medium">Rejas de Fierro</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Pintura al horno · Instalación incluida en Santiago
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas de Fierro en Santiago — Fabricante Directo
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos rejas de fierro (rejas de acero) a medida en Santiago para frontis
            de casas, ventanas, puertas y perímetros. Con pintura electrostática al horno
            para que no se oxiden. Instalación incluida en toda la Región Metropolitana.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja de fierro. Uso: [FRONTIS / VENTANA / PUERTA / PERÍMETRO]. Metros: [METROS] ml o Medidas: [ANCHO] x [ALTO]. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja de fierro
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Reja de fierro o reja metálica? Es lo mismo</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            En Chile se usa indistintamente: "reja de fierro", "reja metálica", "reja de acero" o "reja tubular"
            son todos nombres para el mismo producto. La materia prima es tubo cuadrado o redondo de acero laminado.
            No es hierro fundido puro — es acero estructural, más resistente y más liviano.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Reja de fierro para frontis",
                d: "El uso más común. El largo del frente de la casa en metros lineales, con portón vehicular y puerta peatonal incluidos si los necesitas.",
              },
              {
                t: "Reja de fierro para ventana",
                d: "Para proteger ventanas de primer piso. Se fabrica al tamaño exacto del vano. Con o sin apertura para emergencias.",
              },
              {
                t: "Reja de fierro para puerta",
                d: "Se instala frente a la puerta de madera o metal. Permite ventilación mientras mantiene la seguridad. Con cerradura incluida.",
              },
              {
                t: "Reja de fierro perimetral",
                d: "Para cercar el perímetro completo de una propiedad, parcela o empresa. Se fabrica en paneles que se instalan entre postes.",
              },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Pintada o galvanizada?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Acabado</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Duración</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Ideal para</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pintura electrostática al horno", "8–15 años sin mantenimiento", "Zonas sin humedad extrema — la mayoría de Santiago"],
                  ["Galvanizado en caliente + pintura", "20–30 años", "Zonas costeras, húmedas o con lluvia frecuente"],
                  ["Galvanizado solo (gris metálico)", "25–40 años", "Zonas con salitre marino o lluvia intensa"],
                ].map(([a, d, i]) => (
                  <tr key={a} className="border-t border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{a}</td>
                    <td className="p-3 text-gray-500">{d}</td>
                    <td className="p-3 text-gray-500">{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/reja-tubular", label: "Reja tubular", desc: "El tipo de reja de fierro más común" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Frontis completo con portón" },
            { href: "/rejas-para-ventanas", label: "Rejas para ventanas", desc: "Medidas y tipos de apertura" },
            { href: "/rejas-para-puertas", label: "Rejas para puertas", desc: "Seguridad en la entrada" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Para qué necesitas la reja de fierro?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Dinos el uso, los metros o las medidas y la comuna. Cotizamos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja de fierro. Uso: [FRONTIS / VENTANA / PUERTA]. Metros o medidas: [DATO]. Estoy en [COMUNA].")}
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
