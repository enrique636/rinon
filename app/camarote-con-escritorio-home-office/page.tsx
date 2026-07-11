import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio para Home Office — Teletrabajo en Pieza Pequeña | Camarotes Chile",
  description:
    "Camarote con escritorio para home office y teletrabajo. Separa tu zona de trabajo de tu zona de descanso sin necesitar más espacio. Ideal para departamentos y piezas arrendadas. Santiago.",
  keywords: [
    "camarote con escritorio home office",
    "cama alta escritorio teletrabajo",
    "camarote para trabajo desde casa",
    "home office pieza pequeña camarote",
    "teletrabajo departamento pequeño cama escritorio",
    "camarote escritorio trabajo remoto",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-home-office" },
};

export default function CamaroteHomeOfficePage() {
  const wa = getWhatsAppUrl("Hola, trabajo desde casa y busco un camarote con escritorio para separar mi zona de trabajo y descanso. ¿Qué opciones tienen?");
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿El camarote con escritorio sirve para trabajar 8 horas al día?", acceptedAnswer: { "@type": "Answer", text: "El camarote proporciona la estructura (la zona elevada de cama y el escritorio debajo). Para trabajar 8 horas necesitas agregar una silla ergonómica adecuada. El escritorio de acero es estable y soporta monitor, laptop y todos los periféricos de oficina." } },
          { "@type": "Question", name: "¿Es importante separar la zona de trabajo de la zona de descanso en una pieza pequeña?", acceptedAnswer: { "@type": "Answer", text: "Sí, es uno de los pilares de la productividad en home office. Trabajar desde la cama o ver la cama mientras trabajas afecta la calidad del sueño y la concentración. El camarote con escritorio crea esta separación física en el mismo m² que antes ocupaba solo la cama." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Home Office</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 text-sm text-sky-700 font-medium mb-5">💼 Teletrabajo · Home office · Pieza pequeña</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarote con Escritorio para Home Office</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Trabajar y dormir en el mismo espacio es el mayor desafío del teletrabajo en piezas
            pequeñas. El camarote con escritorio lo resuelve: la cama sube, el escritorio queda
            abajo como zona de trabajo permanente. Separación visual y física sin necesitar más metros.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Los psicólogos del sueño y los coaches de productividad dicen lo mismo: ver tu cama
            mientras trabajas activa el cerebro en modo "descanso". Ver tu escritorio antes de
            dormir activa el cerebro en modo "trabajo". El camarote separa ambos mundos en el
            mismo espacio.
          </p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-escritorio-full-home-office.jpg" alt="Camarote con escritorio full home office — trabaja y duerme en el mismo espacio" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para home office</a>
        </div>
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Por qué el camarote mejora tu home office</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "🧠", t: "Mejor concentración", d: "Con la cama fuera de tu campo visual mientras trabajas, el cerebro no recibe señales contradictorias entre trabajo y descanso." },
              { icon: "😴", t: "Mejor calidad de sueño", d: "Al terminar la jornada, subes al nivel de la cama. El escritorio queda 'debajo' — literalmente otro espacio. El cerebro se desconecta." },
              { icon: "📷", t: "Mejor fondo para videollamadas", d: "La pared detrás del escritorio (al nivel del suelo) es limpia y sin cama visible. Fondo más profesional para Zoom y Meet." },
              { icon: "📐", t: "Mismo m², doble funcionalidad", d: "El espacio que antes era solo cama, ahora es cama + oficina. El m² de arriendo rinde el doble." },
            ].map((v) => (
              <div key={v.t} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl">{v.icon}</span>
                <div><h3 className="font-semibold text-gray-900 text-sm mb-1">{v.t}</h3><p className="text-gray-500 text-xs leading-relaxed">{v.d}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <Link href="/camarote-con-escritorio" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-sky-300 transition-all block">
            <span className="text-3xl block mb-2">📚</span>
            <h3 className="font-bold text-gray-900 mb-1">Camarote con Escritorio</h3>
            <p className="text-gray-500 text-sm">El más popular para home office. Escritorio integrado al marco del camarote.</p>
          </Link>
          <Link href="/camarote-con-escritorio-departamento" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-sky-300 transition-all block">
            <span className="text-3xl block mb-2">🏢</span>
            <h3 className="font-bold text-gray-900 mb-1">Para Departamentos</h3>
            <p className="text-gray-500 text-sm">Guía específica para home office en departamentos de 1 dormitorio o studio.</p>
          </Link>
        </div>
        <div className="bg-sky-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿En cuántos m² trabajas desde casa?</h2>
          <p className="text-sky-200 text-sm mb-5">Cuéntanos el tamaño y el uso. Te recomendamos el modelo exacto para tu situación.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
