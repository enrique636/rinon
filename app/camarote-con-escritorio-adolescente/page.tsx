import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio para Adolescentes — Santiago | Camarotes Chile",
  description:
    "Camarote con escritorio para adolescentes: cama arriba, escritorio abajo. Ideal para dormir y estudiar en el mismo espacio. Pago contra entrega en Santiago.",
  keywords: [
    "camarote con escritorio para adolescentes",
    "camarote adolescente con escritorio",
    "cama alta escritorio adolescente",
    "dormitorio adolescente camarote",
    "camarote para jóvenes con escritorio",
    "litera escritorio adolescente Chile",
  ],
  alternates: { canonical: "https://dumar.cl/camarote-con-escritorio-adolescente" },
};

export default function CamaroteAdolescentePage() {
  const wa = getWhatsAppUrl("Hola, busco un camarote con escritorio para adolescente. ¿Qué modelos tienen y cuáles son los precios?");

  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Qué camarote con escritorio es mejor para adolescentes?", acceptedAnswer: { "@type": "Answer", text: "Para adolescentes de 12-18 años recomendamos el camarote con escritorio integrado (cama 1 plaza arriba + escritorio abajo). Es el más popular porque les da independencia: tienen su cama y su zona de estudio/computador en el mismo espacio sin interferir con el resto de la pieza." } },
          { "@type": "Question", name: "¿El camarote aguanta el peso de un adolescente?", acceptedAnswer: { "@type": "Answer", text: "Sí. El camarote metálico soporta entre 120-150 kg en la cama superior. Es más que suficiente para un adolescente. El acero no se deforma con el paso del tiempo como lo hace la madera." } },
        ],
      }) }} />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Adolescentes</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 text-sm text-purple-700 font-medium mb-5">
            🎮 Dormitorio adolescente · Zona de estudio · Gamer
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarote con Escritorio para Adolescentes</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            La solución que los adolescentes piden y los padres aprueban. Cama arriba, escritorio
            completo abajo. En el mismo espacio que una cama individual, tu hijo/a tiene su dormitorio
            y su zona de estudio / gaming separados.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar ahora</a>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">¿Por qué los adolescentes lo prefieren?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🎮", t: "Espacio para su setup", d: "El escritorio debajo aguanta monitor, laptop, teclado y todos los periféricos de gaming." },
              { icon: "📚", t: "Zona de estudio real", d: "Estudiar en una silla frente a un escritorio es más efectivo que en la cama. Mejor concentración, mejor postura." },
              { icon: "🛏️", t: "Su mundo separado", d: "La cama arriba es su espacio privado. El escritorio abajo es su zona productiva. Sin mezclar." },
              { icon: "🚀", t: "Pieza más grande", d: "Al elevar la cama y poner el escritorio debajo, el suelo queda libre. La pieza se siente el doble de grande." },
            ].map((v) => (
              <div key={v.t} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl">{v.icon}</span>
                <div><h3 className="font-semibold text-gray-900 text-sm mb-1">{v.t}</h3><p className="text-gray-500 text-xs leading-relaxed">{v.d}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Modelos recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { emoji: "📚", nombre: "Camarote con Escritorio", desc: "Escritorio integrado al camarote. La opción más robusta y completa.", href: "/camarote-con-escritorio", badge: "Más popular" },
              { emoji: "📐", nombre: "Camarote Metálico con Escritorio", desc: "Mayor calibre de acero. Para adolescentes activos que exigen más resistencia.", href: "/camarote-con-escritorio-metalico" },
              { emoji: "⭐", nombre: "Camarote con Escritorio Premium", desc: "El modelo con mejores acabados. Ideal si el dormitorio necesita un look más cuidado.", href: "/camarote-con-escritorio-premium" },
              { emoji: "✏️", nombre: "A Medida", desc: "Si la pieza tiene dimensiones especiales, lo fabricamos exactamente para ese espacio.", href: "/camarote-con-escritorio-a-medida" },
            ].map((m) => (
              <div key={m.nombre} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-purple-300 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-2xl">{m.emoji}</span>
                  {m.badge && <span className="text-xs bg-purple-100 text-purple-700 font-semibold rounded-full px-2 py-0.5">{m.badge}</span>}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{m.nombre}</h3>
                <p className="text-gray-500 text-sm mb-3">{m.desc}</p>
                <Link href={m.href} className="text-xs border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">Ver producto →</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos años tiene tu hijo/a?</h2>
          <p className="text-purple-200 text-sm mb-5">Cuéntanos el uso (gaming, estudio, ambos) y la medida de la pieza. Te recomendamos el modelo correcto.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
