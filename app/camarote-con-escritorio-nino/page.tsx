import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio para Niños — Santiago | Camarotes Chile",
  description:
    "Camarote con escritorio para niños: zona de estudio + cama en el mismo espacio. Ideal desde los 6 años. Pago contra entrega en Santiago. Fabricante directo.",
  keywords: [
    "camarote con escritorio para niños",
    "camarote escritorio niño Chile",
    "cama alta con escritorio niño",
    "camarote infantil con escritorio",
    "litera escritorio niño Santiago",
    "dormitorio niño camarote escritorio",
  ],
  alternates: { canonical: "https://dumar.cl/camarote-con-escritorio-nino" },
};

export default function CamaroteNinoPage() {
  const wa = getWhatsAppUrl("Hola, busco un camarote con escritorio para niño/a. ¿Desde qué edad está recomendado y qué modelos tienen?");

  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Desde qué edad se puede usar un camarote con escritorio?", acceptedAnswer: { "@type": "Answer", text: "Recomendamos el camarote con escritorio desde los 6 años, cuando el niño ya puede usar una escalera con seguridad. Para niños menores de 6 años, sugeremos primero la cama alta sin escritorio y agregar el escritorio cuando crezca." } },
          { "@type": "Question", name: "¿Es seguro el camarote metálico para niños?", acceptedAnswer: { "@type": "Answer", text: "Sí. Los camarotes metálicos tienen barandas de seguridad en la cama superior que evitan caídas. La estructura de acero es más estable que la madera y no oscila." } },
        ],
      }) }} />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Niños</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-1.5 text-sm text-yellow-700 font-medium mb-5">
            ✏️ Desde 6 años · Zona de tareas · Dormitorio infantil
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarote con Escritorio para Niños</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Cama elevada arriba + escritorio abajo para que tu hijo/a tenga su rincón de tareas.
            Todo en el espacio de una sola cama. El escritorio debajo queda en altura perfecta
            para que un niño trabaje sentado. Pago contra entrega en Santiago.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Consultar por WhatsApp</a>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿A qué edad y por cuánto tiempo les sirve?</h2>
          <div className="space-y-3">
            {[
              { rango: "6–8 años", uso: "Zona de tareas y dibujo. La altura del escritorio es perfecta para un niño sentado.", icono: "🖍️" },
              { rango: "9–12 años", uso: "Tareas más complejas, computador o tablet. El escritorio ya les queda a medida.", icono: "📚" },
              { rango: "13–18 años", uso: "Zona de estudio para secundaria y pre-universitario. El camarote les sigue siendo útil.", icono: "🎓" },
            ].map((r) => (
              <div key={r.rango} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4 items-start">
                <span className="text-2xl">{r.icono}</span>
                <div>
                  <span className="font-bold text-gray-900 text-sm">{r.rango}</span>
                  <p className="text-gray-500 text-sm">{r.uso}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">El mismo camarote les sirve desde básica hasta la universidad — una inversión que dura años.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Seguridad para niños</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "🛡️", label: "Barandas de seguridad incluidas" },
              { icon: "🔒", label: "Estructura de acero — no oscila" },
              { icon: "🪜", label: "Escalera con peldaños antideslizantes" },
              { icon: "⚖️", label: "Sin riesgo de vuelco" },
            ].map((s) => (
              <div key={s.label} className="bg-green-50 border border-green-100 rounded-xl p-4 text-center">
                <span className="text-2xl block mb-1">{s.icon}</span>
                <p className="text-xs text-gray-700 font-medium leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <Link href="/camarote-con-escritorio" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-yellow-300 transition-all block">
            <span className="text-3xl mb-2 block">📚</span>
            <h3 className="font-bold text-gray-900 mb-1">Camarote con Escritorio</h3>
            <p className="text-gray-500 text-sm">El modelo estándar. Escritorio integrado. La opción más popular para niños.</p>
          </Link>
          <Link href="/camarote-con-escritorio-a-medida" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-yellow-300 transition-all block">
            <span className="text-3xl mb-2 block">✏️</span>
            <h3 className="font-bold text-gray-900 mb-1">A Medida para la pieza de tu hijo/a</h3>
            <p className="text-gray-500 text-sm">Si la pieza tiene una forma o espacio especial, lo fabricamos exacto.</p>
          </Link>
        </div>

        <div className="bg-yellow-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos años tiene tu hijo/a?</h2>
          <p className="text-yellow-200 text-sm mb-5">Cuéntanos y te recomendamos el modelo correcto. Pago cuando llega instalado.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
