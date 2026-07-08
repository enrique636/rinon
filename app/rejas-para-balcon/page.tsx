import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas para Balcón — Seguridad y Diseño en Departamentos | Santiago",
  description: "Rejas metálicas para balcón en Santiago. Fabricante directo. Rejas de seguridad y barandas decorativas para balcones de departamento. A medida con instalación incluida.",
  keywords: [
    "rejas para balcon",
    "reja para balcon departamento",
    "reja metalica balcon santiago",
    "reja seguridad balcon",
    "baranda metalica balcon",
    "reja para balcon precio chile",
    "fabricante rejas balcon santiago",
    "reja decorativa balcon",
    "reja balcon primer piso",
    "proteccion metalica balcon departamento",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-para-balcon" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasParaBalconPage() {
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
                name: "¿Cuánto mide una reja para balcón estándar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La reja de un balcón va de lado a lado del vano — el ancho exacto del balcón. La altura depende del uso: como protección de caída se usa 90–110 cm (igual a la baranda estándar). Como reja de seguridad contra intrusión desde el exterior, se recomienda desde 1,50 m hasta el techo del balcón.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se puede poner reja en un balcón de departamento?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En general sí, pero depende del reglamento del condominio. Muchos condominios permiten rejas en balcones si el diseño es coherente con la fachada. Algunos exigen que la reja sea hacia adentro (no sobresalga del balcón). Consulta con la administración antes de fabricar.",
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
          <span className="text-gray-700 font-medium">Rejas para Balcón</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Departamentos · Seguridad y diseño · A medida
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas para Balcón — Protección en Departamentos
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Un balcón de primer o segundo piso es un punto de entrada vulnerable — especialmente
            en departamentos bajos. Fabricamos rejas para balcón que combinan seguridad con
            diseño: protección contra intrusión sin bloquear la ventilación ni la vista.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja para balcón. Ancho del balcón: [ANCHO] m. Altura de la reja: [ALTURA] m. Uso: [SEGURIDAD / BARANDA / AMBOS]. Piso: [NÚMERO]. Estoy en [COMUNA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar reja para balcón
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de reja para balcón</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja de seguridad fija", d: "Ocupa todo el vano del balcón de suelo a techo (o de baranda a techo). Impide el ingreso desde el exterior. Se fabrica con barrotes verticales y marco perimetral anclado al muro." },
              { t: "Baranda decorativa con seguridad", d: "Altura de baranda (90–110 cm) con diseño decorativo. Cumple la función de protección de caída y suma una capa disuasiva contra intrusión. Diseño más integrado con la fachada." },
              { t: "Reja retráctil o plegable", d: "Se pliega cuando no se usa y se extiende al cerrar. Útil en balcones donde no se quiere que la reja esté siempre visible. Mayor costo que la fija." },
              { t: "Reja con puerta de apertura", d: "Reja de seguridad fija con una sección bisagrada que permite salir al balcón. La más práctica cuando el balcón tiene acceso frecuente." },
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
            { href: "/barandas-metalicas", label: "Barandas metálicas", desc: "Diseño de baranda para balcón" },
            { href: "/rejas-para-ventanas", label: "Rejas para ventanas", desc: "Protección complementaria" },
            { href: "/rejas-de-seguridad", label: "Rejas de seguridad", desc: "Factores que hacen una reja más segura" },
            { href: "/instalacion-de-rejas", label: "Instalación de rejas", desc: "Cómo se instala en departamento" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja de balcón</h2>
          <p className="text-gray-400 text-sm mb-5">
            Ancho, altura y tipo. Fabricamos e instalamos — cotizamos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito reja para balcón. Ancho: [ANCHO] m. Altura: [ALTURA] m. Piso: [NÚMERO]. Estoy en [COMUNA].")}
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
