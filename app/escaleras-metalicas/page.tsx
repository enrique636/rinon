import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Escaleras Metálicas Santiago — Fabricante a Medida con Instalación",
  description: "Escaleras metálicas en Santiago. Fabricante directo de escaleras de acero a medida — recta, caracol, en L o en U. Para casa, mezzanine, bodega o entrepiso. Pintura electrostática al horno.",
  keywords: [
    "escaleras metalicas santiago",
    "escalera metalica a medida",
    "escalera de acero santiago",
    "escalera metalica para mezzanine",
    "fabricante escaleras metalicas",
    "escalera metalica precio chile",
    "escalera caracol metalica santiago",
    "escalera de fierro santiago",
    "escalera para entrepiso metalica",
    "escalera metalica interior",
  ],
  alternates: { canonical: "https://rinon.cl/escaleras-metalicas" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function EscalerasMetalicasPage() {
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
                name: "¿Cuánto cuesta una escalera metálica en Santiago?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio de una escalera metálica depende del tipo (recta, caracol, en L), la cantidad de peldaños, la altura total, el ancho y el tipo de peldaño (rejilla metálica, madera o concreto). Envía las medidas por WhatsApp para una cotización exacta.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tarda en fabricarse una escalera metálica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Una escalera recta estándar puede estar lista en 7–10 días hábiles desde la confirmación del pedido y el anticipo. Escaleras con diseño personalizado o en caracol pueden tomar 10–15 días. La instalación toma 1 día.",
                },
              },
              {
                "@type": "Question",
                name: "¿Las escaleras metálicas hacen ruido?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Depende del peldaño. Las escaleras con peldaños de rejilla metálica suenan más. Si buscas silencio, recomendamos peldaños de madera o concreto sobre la estructura de acero — eliminan casi todo el ruido sin perder resistencia.",
                },
              },
              {
                "@type": "Question",
                name: "¿Incluyen baranda las escaleras metálicas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Todas nuestras escaleras incluyen baranda metálica a los lados. El diseño de la baranda puede ser tubular recto o con elementos decorativos. La baranda va integrada en la estructura y no requiere instalación separada.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/estructuras-metalicas-a-pedido" className="hover:text-gray-600">Estructuras a pedido</Link><span>/</span>
          <span className="text-gray-700 font-medium">Escaleras Metálicas</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Baranda incluida · Instalación en Santiago
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escaleras Metálicas a Medida — Recta, Caracol o en L
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos escaleras metálicas en Santiago a medida del espacio disponible. Estructura
            de acero con pintura electrostática al horno y baranda incluida. Para casas de dos pisos,
            mezzanines, entrepisos de bodega o terrazas. Instalación incluida en Santiago.
          </p>
          <a
            href={wa("Hola, necesito cotizar una escalera metálica. Tipo: [RECTA / CARACOL / EN L / EN U]. Altura a salvar: [ALTURA] m. Ancho deseado: [ANCHO] cm. Peldaños: [REJILLA / MADERA / CONCRETO]. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi escalera
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de escalera metálica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Escalera recta",
                d: "La más económica y rápida de fabricar. Sube en línea recta sin curvas. Requiere espacio lineal disponible. Ancho estándar 80–100 cm, largo según la altura a salvar.",
              },
              {
                t: "Escalera en L o en U",
                d: "Sube con un giro de 90° (L) o dos giros de 90° (U). Ocupa menos espacio lineal que la recta. Lleva un descanso intermedio en el giro.",
              },
              {
                t: "Escalera de caracol",
                d: "Gira sobre sí misma. Muy compacta — ocupa solo 1,2–1,6 m de diámetro. Ideal para espacios pequeños o accesos secundarios a un entrepiso.",
              },
              {
                t: "Escalera de mezzanine / bodega",
                d: "Estructura más robusta, peldaños de rejilla metálica galvanizada. Para accesos frecuentes a mezanines industriales o entrepisos de bodega.",
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Opciones de peldaño</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Tipo de peldaño</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Ruido</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Uso ideal</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Precio relativo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Rejilla metálica", "Alto", "Bodegas, mezzanines industriales", "Económico"],
                  ["Placa de acero estriada", "Medio", "Accesos exteriores, terrazas", "Económico"],
                  ["Madera sobre estructura", "Bajo", "Casas, interiores", "Medio"],
                  ["Hormigón sobre estructura", "Muy bajo", "Proyectos arquitectónicos", "Alto"],
                ].map(([tipo, ruido, uso, precio]) => (
                  <tr key={tipo} className="border-t border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{tipo}</td>
                    <td className="p-3 text-gray-500">{ruido}</td>
                    <td className="p-3 text-gray-500">{uso}</td>
                    <td className="p-3 text-gray-500">{precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Información que necesitamos para cotizar</h2>
          <div className="space-y-2">
            {[
              ["Tipo de escalera", "Recta / en L / en U / caracol"],
              ["Altura a salvar", "Desde el piso inferior hasta el piso superior (en metros)"],
              ["Ancho disponible", "El espacio libre para la escalera (en cm)"],
              ["Largo disponible", "Para escaleras rectas — espacio lineal disponible"],
              ["Tipo de peldaño", "Rejilla / placa / madera / hormigón"],
              ["Uso", "Casa interior / bodega / mezzanine / terraza exterior"],
              ["Comuna", "Para coordinar la instalación en Santiago"],
            ].map(([campo, desc]) => (
              <div key={campo} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-3 text-xs">
                <span className="font-medium text-gray-700 w-36 flex-shrink-0">{campo}</span>
                <span className="text-gray-500">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/barandas-metalicas", label: "Barandas metálicas", desc: "Las barandas van incluidas en nuestras escaleras" },
            { href: "/estructuras-metalicas-a-pedido", label: "Estructuras a pedido", desc: "Mezzanines, plataformas y más" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "El acabado de todas nuestras escaleras" },
            { href: "/mallas-separadoras", label: "Mallas separadoras", desc: "Para dividir espacios en bodegas y mezzanines" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all"
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros tiene que subir tu escalera?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Altura, espacio disponible y tipo de peldaño. Cotizamos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito cotizar una escalera metálica. Tipo: [RECTA / CARACOL / EN L]. Altura a salvar: [ALTURA] m. Ancho disponible: [ANCHO] cm. Peldaños: [REJILLA / MADERA / OTRO]. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
