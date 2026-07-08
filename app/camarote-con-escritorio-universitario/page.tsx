import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio para Universitarios — Santiago | Camarotes Chile",
  description:
    "El camarote con escritorio ideal para estudiantes universitarios en piezas arrendadas. Cama arriba, escritorio abajo. Pago contra entrega en Santiago. Fabricante directo.",
  keywords: [
    "camarote con escritorio universitario",
    "camarote para universitarios Santiago",
    "cama alta escritorio estudiante",
    "camarote universitario Chile",
    "litera con escritorio universitario",
    "cama escritorio pieza arrendada",
    "camarote estudiante Santiago",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-universitario" },
  openGraph: {
    title: "Camarote con Escritorio para Universitarios — Ideal para Piezas Arrendadas",
    description: "Cama arriba + escritorio abajo. El setup perfecto para estudiar y dormir en el mismo espacio. Pago contra entrega Santiago.",
    type: "website",
    locale: "es_CL",
  },
};

export default function CamaroteUniversitarioPage() {
  const waEstudiante = getWhatsAppUrl(
    "Hola, soy universitario y necesito un camarote con escritorio para mi pieza arrendada en Santiago. ¿Pueden ayudarme?"
  );
  const waPadres = getWhatsAppUrl(
    "Hola, quiero cotizar un camarote con escritorio para el departamento de mi hijo/a universitario/a. ¿Qué opciones tienen?"
  );

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
                name: "¿Cuál es el mejor camarote con escritorio para universitarios en Santiago?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Para universitarios recomendamos el camarote con escritorio integrado: cama 1 plaza arriba + escritorio abajo. Es el más popular para piezas arrendadas porque maximiza el espacio sin ocupar más de 2 m². Pago contra entrega en Santiago.",
                },
              },
              {
                "@type": "Question",
                name: "¿El camarote con escritorio entra en una pieza arrendada pequeña?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. El camarote con escritorio ocupa entre 90–100 cm de ancho y 190–200 cm de largo — el mismo espacio que una cama 1 plaza. Pero en ese mismo espacio tienes cama + escritorio. Es la solución más eficiente para piezas de 9–12 m².",
                },
              },
              {
                "@type": "Question",
                name: "¿Pueden entregarlo en una pieza arrendada?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Despachamos e instalamos directamente en tu pieza o departamento en Santiago y alrededores. Pago cuando llega instalado.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Universitarios</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-sm text-blue-700 font-medium mb-5">
            🎓 Ideal para piezas arrendadas · Universitarios · Santiago
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Camarote con Escritorio para Universitarios en Santiago
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            El setup perfecto para estudiar y dormir en el mismo espacio. Cama 1 plaza arriba,
            escritorio completo abajo. Ocupa el espacio de una sola cama — sin sacrificar
            zona de trabajo. Pago cuando llega instalado, sin adelanto.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={waEstudiante} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">
              Cotizar como universitario
            </a>
            <a href={waPadres} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">
              Cotizar para mi hijo/a
            </a>
          </div>
        </div>

        {/* El problema / la solución */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
            <h2 className="font-bold text-gray-900 mb-4 text-lg">El problema de la pieza arrendada</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "La cama ocupa la mitad de la pieza",
                "No hay espacio para un escritorio aparte",
                "Estudiar en la cama es malo para la concentración y la espalda",
                "Los escritorios sueltos hacen la pieza más chica",
                "No cabe una cama + un escritorio + una silla",
              ].map((p) => (
                <li key={p} className="flex gap-2"><span className="text-red-400 mt-0.5">✗</span>{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h2 className="font-bold text-gray-900 mb-4 text-lg">La solución: camarote con escritorio</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Cama + escritorio en el espacio de una sola cama",
                "Zona de estudio formal, no en la cama",
                "Espacio libre en el suelo para muebles o circulación",
                "Ideal para laptop, monitor, libros y cuadernos",
                "Pago contra entrega — sin riesgo",
              ].map((s) => (
                <li key={s} className="flex gap-2"><span className="text-green-500 mt-0.5">✓</span>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modelos */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modelos recomendados para universitarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                emoji: "📚",
                nombre: "Camarote con Escritorio",
                desc: "El más popular. Cama 1 plaza arriba + escritorio integrado abajo. La solución definitiva.",
                badge: "Más vendido",
                href: "/camarote-con-escritorio",
                wa: "Hola, me interesa el Camarote con Escritorio para mi pieza universitaria. ¿Pueden cotizarme?",
              },
              {
                emoji: "🪜",
                nombre: "Cama Alta + Escritorio",
                desc: "Cama elevada sin estructura inferior fija. Puedes poner tu propio escritorio debajo.",
                href: "/cama-alta-con-escritorio",
                wa: "Hola, me interesa la Cama Alta con Escritorio para universitarios. ¿Cuáles son los precios?",
              },
              {
                emoji: "✏️",
                nombre: "Camarote Escritorio a Medida",
                desc: "Si la pieza tiene medidas especiales, lo fabricamos a tu espacio exacto.",
                href: "/camarote-con-escritorio-a-medida",
                wa: "Hola, necesito un camarote con escritorio a medida para una pieza arrendada. ¿Pueden ayudarme?",
              },
            ].map((m) => (
              <div key={m.nombre} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{m.emoji}</span>
                  {m.badge && <span className="text-xs bg-blue-100 text-blue-700 font-semibold rounded-full px-2 py-0.5">{m.badge}</span>}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{m.nombre}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{m.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  <a href={`https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(m.wa)}`} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#25D366] text-white font-semibold rounded-lg px-3 py-1.5 hover:bg-[#1ebe5d] transition-colors">Cotizar</a>
                  <Link href={m.href} className="text-xs border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">Ver producto</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Casos de uso */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Perfecto para estos setups universitarios</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "💻", label: "Setup gamer / streaming" },
              { icon: "📖", label: "Zona de estudio intensa" },
              { icon: "🏠", label: "Home office estudiantil" },
              { icon: "🎨", label: "Diseño / arquitectura" },
              { icon: "👨‍💻", label: "Programación / código" },
              { icon: "📐", label: "Ingeniería con mesa de dibujo" },
              { icon: "📝", label: "Derecho / letras / humanidades" },
              { icon: "🌙", label: "Doble jornada: estudio + trabajo" },
            ].map((c) => (
              <div key={c.label} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center">
                <span className="text-2xl mb-1 block">{c.icon}</span>
                <p className="text-xs text-gray-600 font-medium leading-tight">{c.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes — universitarios</h2>
          <div className="space-y-4">
            {[
              { q: "¿Puedo llevarme el camarote cuando cambie de pieza?", a: "Sí. El camarote se desmonta completamente. Cuando cambies de arriendo, lo desarmamos (o te explicamos cómo), lo trasladas y lo rearmas. El camarote metálico es ideal para quienes cambian de pieza." },
              { q: "¿Cabe en un ascensor pequeño?", a: "El camarote se entrega desarmado. Las piezas caben en la mayoría de los ascensores residenciales. Si tienes duda, cuéntanos el tamaño del ascensor y te confirmamos." },
              { q: "¿Cuánto demora en llegar?", a: `El plazo estimado es ${SITE_CONFIG.despacho.dias}. Te coordinaremos un horario conveniente para la entrega e instalación.` },
              { q: "¿Puedo pagar con cuotas?", a: "El pago es contra entrega en efectivo o transferencia. Para opciones de cuotas con tarjeta, puedes usar tu propia tarjeta de crédito al momento del pago." },
              { q: "¿Necesito comprar el colchón aparte?", a: "Sí. El camarote viene sin colchón. Necesitas un colchón de 1 plaza estándar (90 cm x 190 cm aprox.). Puedes conseguirlo en cualquier tienda de muebles." },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Lista/o para tener tu zona de estudio?</h2>
          <p className="text-blue-200 text-sm mb-6 max-w-md mx-auto">Cama arriba, escritorio abajo. Pagas cuando llega instalado en tu pieza.</p>
          <a href={waEstudiante} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar mi camarote universitario
          </a>
        </div>
      </div>
    </div>
  );
}
