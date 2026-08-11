import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio para Departamento — Ahorra Espacio | Camarotes Chile",
  description:
    "Camarote con escritorio para departamentos pequeños en Santiago. La solución más inteligente para aprovechar el metro cuadrado. Pago contra entrega.",
  keywords: [
    "camarote con escritorio departamento",
    "camarote escritorio departamento pequeño",
    "cama alta escritorio departamento Santiago",
    "camarote con escritorio studio",
    "litera escritorio monoambiente",
    "camarote departamento 1 dormitorio",
    "maximizar espacio departamento Santiago",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-departamento" },
};

export default function CamaroteEscritorioDepartamentoPage() {
  const wa = getWhatsAppUrl("Hola, tengo un departamento pequeño y quiero ver opciones de camarote con escritorio. ¿Pueden ayudarme?");

  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Cabe un camarote con escritorio en un departamento de 1 dormitorio?", acceptedAnswer: { "@type": "Answer", text: "Sí. El camarote con escritorio ocupa entre 90–100 cm de ancho y 190–200 cm de largo. Esa es la huella de piso. Al elevar la cama y poner el escritorio debajo, duplicas el uso del metro cuadrado sin aumentar el área." } },
          { "@type": "Question", name: "¿Es posible tener home office en un departamento pequeño con camarote?", acceptedAnswer: { "@type": "Answer", text: "Es exactamente para eso que se diseñó el camarote con escritorio. Tienes zona de trabajo formal y cama separada — en el mismo espacio que ocuparía solo la cama." } },
        ],
      }) }} />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Departamentos</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 text-sm text-indigo-700 font-medium mb-5">
            🏢 Departamentos pequeños · Studio · 1 dormitorio · Home office
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarote con Escritorio para Departamentos</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            En un departamento, cada metro cuadrado vale dinero. El camarote con escritorio
            es la herramienta más eficiente para recuperar espacio: la cama sube al segundo
            nivel y libera el suelo para escribir, trabajar o simplemente respirar.
          </p>
          
          <div className="my-5 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-escritorio-full-dormitorio-completo.jpg" alt="Camarote con escritorio en departamento pequeño de Santiago" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para mi depto</a>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">El cálculo del espacio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { titulo: "Cama 1 plaza + escritorio aparte", espacio: "2,0 m + 1,2 m = 3,2 m²", color: "bg-red-50 border-red-200", tag: "❌ Sin camarote" },
              { titulo: "Camarote con escritorio integrado", espacio: "1,0 m × 2,0 m = 2,0 m²", color: "bg-green-50 border-green-200", tag: "✓ Con camarote" },
              { titulo: "Espacio ganado", espacio: "1,2 m² liberados", color: "bg-blue-50 border-blue-200", tag: "🚀 Diferencia" },
            ].map((c) => (
              <div key={c.titulo} className={`border rounded-xl p-5 ${c.color}`}>
                <span className="text-xs font-semibold text-gray-500 mb-2 block">{c.tag}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{c.titulo}</h3>
                <p className="text-gray-600 text-lg font-mono font-bold">{c.espacio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ideal para estos tipos de departamento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { tipo: "Studio (monoambiente)", desc: "El camarote con escritorio divide funcionalmente el espacio: zona de descanso arriba, zona de trabajo abajo." },
              { tipo: "1 dormitorio con home office", desc: "Si trabajas desde casa y el dormitorio hace de oficina, el camarote es la única solución que separa ambos mundos." },
              { tipo: "Pieza para hijo en departamento", desc: "El dormitorio del hijo parece el doble de grande cuando la cama está arriba y el escritorio de tareas abajo." },
              { tipo: "Arriendo por pieza", desc: "Si arriendas una pieza individual, el camarote con escritorio justifica un precio mayor por más funcionalidad." },
            ].map((t) => (
              <div key={t.tipo} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{t.tipo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { href: "/camarote-con-escritorio", label: "Camarote con Escritorio", emoji: "📚" },
            { href: "/camarote-con-escritorio-a-medida", label: "A Medida para tu depto", emoji: "✏️" },
            { href: "/cama-alta-con-escritorio", label: "Cama Alta con Escritorio", emoji: "🪜" },
          ].map((p) => (
            <Link key={p.label} href={p.href} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-indigo-300 transition-all">
              <span className="text-3xl block mb-2">{p.emoji}</span>
              <span className="text-sm font-semibold text-gray-800">{p.label}</span>
            </Link>
          ))}
        </div>

        <div className="bg-indigo-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos m² tiene tu departamento?</h2>
          <p className="text-indigo-200 text-sm mb-5">Cuéntanos el tamaño y el uso. Te recomendamos el modelo exacto para tu espacio.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
