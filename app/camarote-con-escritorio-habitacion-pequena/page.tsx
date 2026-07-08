import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio para Habitación Pequeña — Santiago | Camarotes Chile",
  description:
    "Camarote con escritorio ideal para habitaciones pequeñas. Maximiza el espacio vertical: duerme arriba, trabaja abajo. La solución más eficiente para piezas de 9–15 m².",
  keywords: [
    "camarote con escritorio habitacion pequeña",
    "camarote escritorio pieza chica",
    "cama alta escritorio espacio reducido",
    "camarote con escritorio cuarto pequeño",
    "litera escritorio habitación pequeña Santiago",
    "aprovechar espacio pieza pequeña",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-habitacion-pequena" },
};

export default function CamaroteEscritorioHabitacionPequenaPage() {
  const wa = getWhatsAppUrl("Hola, tengo una habitación pequeña y quiero un camarote con escritorio. ¿Pueden ayudarme a elegir el modelo correcto?");

  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Cuánto espacio mínimo necesito para un camarote con escritorio?", acceptedAnswer: { "@type": "Answer", text: "El camarote con escritorio necesita aproximadamente 100 cm de ancho y 200 cm de largo de huella en el piso. El alto del techo debe ser mínimo 190 cm, idealmente 210–220 cm para estar cómodo en la cama de arriba. Para habitaciones de 9 m² en adelante es viable." } },
          { "@type": "Question", name: "¿Es mejor la cama alta o el camarote con escritorio para pieza pequeña?", acceptedAnswer: { "@type": "Answer", text: "Si tienes espacio, el camarote con escritorio es más eficiente porque el escritorio ya está integrado. Si la pieza es muy pequeña o el techo muy bajo, la cama alta sola puede ser mejor y pones un escritorio plegable debajo. Cuéntanos las medidas y te orientamos." } },
        ],
      }) }} />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Habitación Pequeña</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 text-sm text-teal-700 font-medium mb-5">
            📐 9–15 m² · Máxima eficiencia de espacio
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarote con Escritorio para Habitación Pequeña</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Cuando la habitación es pequeña, la solución no es renunciar al escritorio ni a
            la comodidad — es pensar en vertical. El camarote con escritorio usa el eje
            altura que normalmente está desperdiciado: duerme arriba, trabaja abajo.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Consultar por WhatsApp</a>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">¿Mi habitación es suficientemente grande?</h2>
          <div className="overflow-hidden border border-gray-200 rounded-2xl">
            <table className="w-full text-sm">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Tamaño de la pieza</th>
                  <th className="text-left px-4 py-3 font-semibold">¿Cabe?</th>
                  <th className="text-left px-4 py-3 font-semibold">Recomendación</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { tam: "Menos de 8 m²", cabe: "Depende", rec: "Consultar — medir alto de techo", color: "text-yellow-600" },
                  { tam: "8–10 m²", cabe: "Sí", rec: "Camarote con escritorio estándar", color: "text-green-600" },
                  { tam: "10–15 m²", cabe: "Sí cómodamente", rec: "Cualquier modelo — pide el a medida si buscas algo exacto", color: "text-green-600" },
                  { tam: "Más de 15 m²", cabe: "Sin problema", rec: "Camarote premium o modelos más amplios", color: "text-green-600" },
                ].map((r) => (
                  <tr key={r.tam} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{r.tam}</td>
                    <td className={`px-4 py-3 font-semibold ${r.color}`}>{r.cabe}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{r.rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">* El alto del techo debe ser mínimo 190 cm. Idealmente 210–220 cm.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Modelos para habitaciones pequeñas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/camarote-con-escritorio", emoji: "📚", nombre: "Camarote con Escritorio Estándar", desc: "El más vendido. Ocupa solo 1 m² de huella. El escritorio debajo es funcional y espacioso." },
              { href: "/camarote-con-escritorio-a-medida", emoji: "✏️", nombre: "A Medida — para tu pieza exacta", desc: "Si tienes un nicho, una forma irregular o techos bajos, lo fabricamos exacto a tu espacio." },
            ].map((m) => (
              <Link key={m.nombre} href={m.href} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-teal-300 transition-all block">
                <span className="text-3xl block mb-2">{m.emoji}</span>
                <h3 className="font-bold text-gray-900 mb-1">{m.nombre}</h3>
                <p className="text-gray-500 text-sm">{m.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-teal-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Envíanos las medidas de tu pieza</h2>
          <p className="text-teal-200 text-sm mb-5">Ancho, largo y alto de techo. En 10 minutos te confirmamos qué cabe y qué modelo es mejor.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Enviar medidas por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
