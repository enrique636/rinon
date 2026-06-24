import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Gamer — Setup de Gaming en Espacio Reducido | Camarotes Chile",
  description:
    "El camarote con escritorio perfecto para gamers. Cama arriba, setup completo abajo. Espacio para PC de torre, monitores dobles y todos tus periféricos. Santiago.",
  keywords: [
    "camarote escritorio gamer",
    "cama alta escritorio gamer",
    "setup gaming camarote",
    "camarote para gamer Chile",
    "cama alta setup gamer Santiago",
    "camarote gaming con escritorio",
  ],
  alternates: { canonical: "https://dumar.cl/camarote-con-escritorio-gamer" },
};

export default function CamaroteGamerPage() {
  const wa = getWhatsAppUrl("Hola, quiero un camarote con escritorio para setup gamer. ¿Qué modelos tienen y cuáles son las dimensiones del escritorio?");
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿El escritorio del camarote aguanta un setup gamer completo?", acceptedAnswer: { "@type": "Answer", text: "Sí. El escritorio integrado del camarote metálico es estructuralmente sólido — forma parte del marco de acero del camarote, no es una repisa. Aguanta PC de torre, monitor, teclado, mouse, pad y periféricos sin problema." } },
          { "@type": "Question", name: "¿Caben dos monitores en el escritorio del camarote?", acceptedAnswer: { "@type": "Answer", text: "Depende del ancho del escritorio. En el modelo estándar entra cómodamente un monitor ultrawide de 34\" o dos de 24\". Para setups con monitor de 27\" x2 o más, consúltanos — podemos fabricar el escritorio con mayor profundidad." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Gamer</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-1.5 text-sm text-violet-700 font-medium mb-5">🎮 Setup gamer · Escritorio robusto · Santiago</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarote con Escritorio para Gamer</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            La solución que todo gamer con pieza pequeña necesita. La cama sube al nivel superior,
            el escritorio ocupa todo el espacio inferior. Monitor, torre, teclado mecánico, pad
            XXL, luces RGB: todo tiene su lugar. Sin sacrificar ni la cama ni el setup.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Lo que diferencia el escritorio de un camarote metálico de uno de madera: el acero
            no vibra con el subwoofer, no se pandea con el peso del monitor y no cede con los
            años. Cuando llegas a las 3 AM y aterrizas en la escalera, el camarote no cruje.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar camarote gamer</a>
        </div>
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Lo que cabe en el escritorio</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: "🖥️", label: "Monitor 27\"-34\" o doble pantalla" },
              { icon: "🗄️", label: "PC de torre o NUC / mini PC" },
              { icon: "⌨️", label: "Teclado mecánico tamaño completo" },
              { icon: "🖱️", label: "Mouse + pad XL o XXL" },
              { icon: "🎧", label: "Soporte de auriculares" },
              { icon: "💡", label: "Tira LED / iluminación de ambiente" },
            ].map((i) => (
              <div key={i.label} className="bg-violet-50 border border-violet-100 rounded-xl p-3 text-center">
                <span className="text-2xl block mb-1">{i.icon}</span>
                <p className="text-xs font-medium text-gray-700">{i.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ventaja vs escritorio de madera</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { titulo: "Sin vibración", desc: "El acero absorbe mejor las vibraciones del subwoofer y los chasquidos del teclado que la madera." },
              { titulo: "Sin pandeo", desc: "Un escritorio de madera con monitor + torre encima empieza a ceder con el tiempo. El acero no." },
              { titulo: "Sin crujidos", desc: "A las 3 AM cuando subes o bajas, el camarote metálico es silencioso. La madera cruje." },
              { titulo: "Sin deformación por calor", desc: "El calor del PC no afecta la estructura. La madera se puede pandear o abrir." },
            ].map((v) => (
              <div key={v.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{v.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <Link href="/camarote-con-escritorio" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-violet-300 transition-all block">
            <span className="text-3xl block mb-2">📚</span>
            <h3 className="font-bold text-gray-900 mb-1">Camarote con Escritorio Estándar</h3>
            <p className="text-gray-500 text-sm">El más popular. Escritorio integrado robusto, cama 1 plaza arriba.</p>
          </Link>
          <Link href="/camarote-con-escritorio-a-medida" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-violet-300 transition-all block">
            <span className="text-3xl block mb-2">✏️</span>
            <h3 className="font-bold text-gray-900 mb-1">Escritorio a Medida para tu Setup</h3>
            <p className="text-gray-500 text-sm">Para setups con equipos específicos o pieza con medidas particulares.</p>
          </Link>
        </div>
        <div className="bg-violet-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuál es tu setup actual?</h2>
          <p className="text-violet-200 text-sm mb-5">Cuéntanos qué equipos tienes y el tamaño de tu pieza. Te cotizamos el modelo correcto.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
