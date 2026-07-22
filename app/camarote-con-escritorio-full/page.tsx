import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Full | Estantes Premium — Chile",
  description: "Camarote con escritorio full: escritorio amplio, estantes integrados, baranda reforzada y pintura electrostática premium. Fabricante directo en Chile. Cotiza sin compromiso.",
  keywords: [
    "camarote con escritorio full",
    "camarote escritorio premium",
    "cama alta escritorio con estantes",
    "camarote escritorio completo chile",
    "cama loft escritorio grande",
    "camarote gamer setup",
    "camarote home office",
    "camarote con escritorio plaza y media",
    "camarote escritorio full 1.5 plazas",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-full" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamaroteFullPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Camarote con Escritorio Full",
            description:
              "Camarote con escritorio full: escritorio de mayor profundidad, estantes integrados, baranda reforzada y pintura electrostática premium. Fabricado en Chile.",
            provider: {
              "@type": "LocalBusiness",
              name: "Camarotes Chile",
              address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
            },
            serviceType: "Fabricación de camarotes metálicos",
            areaServed: { "@type": "Country", name: "Chile" },
            brand: { "@type": "Brand", name: "Camarotes Chile" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto cuesta el camarote con escritorio full?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio depende de las medidas y los accesorios elegidos. Cotizamos por WhatsApp con las dimensiones de tu espacio — te respondemos el mismo día.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué diferencia tiene con el modelo estándar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El modelo full tiene escritorio de mayor profundidad para trabajar con monitor externo, estantes integrados para libros y accesorios, baranda reforzada y pintura electrostática premium incluida.",
                },
              },
              {
                "@type": "Question",
                name: "¿Sirve para home office o setup gamer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Es el modelo más solicitado para setups de trabajo desde casa y para gamers. El escritorio amplio permite monitor de 27 pulgadas o más, y los estantes organizan los accesorios sin ocupar superficie del escritorio.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Camarote con Escritorio</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Full</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 text-sm text-purple-700 font-medium mb-5">
            ⭐ Versión completa · Escritorio amplio · Estantes integrados
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarote con Escritorio Full
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            El camarote con escritorio en su versión más completa. Escritorio de mayor profundidad
            para trabajar con monitor externo, estantes integrados para libros y accesorios,
            baranda reforzada y pintura electrostática premium. El preferido de quienes pasan
            muchas horas en el escritorio y no quieren sacrificar ergonomía por el espacio.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Fabricado en nuestro taller en Santiago. Diseñado para quien quiere el máximo aprovechamiento
            del espacio vertical sin renunciar a un área de trabajo real y cómoda.
          </p>
          <div className="my-5 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-escritorio-full-negro.jpg" alt="Camarote con escritorio full negro — escritorio amplio con estantes integrados" className="w-full object-cover" loading="lazy" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={wa(
                "Hola, me interesa el camarote con escritorio full. ¿Pueden mostrarme las medidas y el precio?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
            >
              Cotizar por WhatsApp
            </a>
            <Link
              href="/camarote-con-escritorio"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-base hover:border-gray-400 transition-colors"
            >
              Ver modelo estándar
            </Link>
          </div>
        </div>

        {/* Qué incluye */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Qué tiene el modelo full que el estándar no tiene</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "📏", t: "Escritorio de mayor profundidad", d: "Más espacio de superficie para trabajar con monitor externo, teclado, mouse y documentos. No es un escritorio-repisa — es un escritorio de trabajo real." },
              { icon: "📚", t: "Estantes integrados", d: "Estantes en los laterales o sobre el escritorio para libros, monitor, parlantes o accesorios. Todo organizado sin ocupar la superficie de trabajo." },
              { icon: "🛡️", t: "Baranda reforzada", d: "Baranda de mayor altura y espesor en la cama superior. Más seguridad para adultos que duermen en el nivel superior." },
              { icon: "🎨", t: "Pintura electrostática premium", d: "Acabado con pintura electrostática aplicada en nuestro taller. Más resistente, más pareja y con mejor terminación que la pintura convencional." },
              { icon: "🪜", t: "Escalera con peldaños más anchos", d: "Más comodidad al subir y bajar, especialmente si el camarote lo usan adultos o si la subida es frecuente." },
              { icon: "🔧", t: "A medida desde el diseño", d: "El modelo full se diseña con las medidas exactas de tu espacio — el largo del escritorio, la altura de la cama y la posición de los estantes se ajustan a tu pieza." },
            ].map((i) => (
              <div key={i.t} className="flex gap-4 bg-purple-50 border border-purple-100 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">{i.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{i.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Casos de uso */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Para qué perfil es el modelo full?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "💻", t: "Teletrabajo", d: "Si trabajas desde casa todos los días, el escritorio de mayor profundidad y los estantes hacen la diferencia entre un setup cómodo y uno que te frustra." },
              { icon: "🎮", t: "Setup gamer", d: "Monitor grande, controladores, audífonos, luces. El modelo full tiene la profundidad de escritorio y los estantes para organizar todo sin que nada quede en el suelo." },
              { icon: "📖", t: "Universitarios intensivos", d: "Para quien pasa 6-8 horas diarias en el escritorio estudiando. El espacio de trabajo real y la organización con estantes lo hace más productivo." },
            ].map((c) => (
              <div key={c.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
                <span className="text-3xl block mb-3">{c.icon}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{c.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Plaza y media */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-12">
          <h3 className="font-semibold text-gray-900 text-sm mb-1">¿Lo necesitas en plaza y media (1.5 plazas)?</h3>
          <p className="text-gray-600 text-xs leading-relaxed">
            Disponible en medida estándar (1 plaza, 90 cm) o en versión plaza y media (~105 cm). Consúltanos al cotizar.{" "}
            <Link href="/camarote-1-5-plazas" className="text-amber-700 underline">Ver camarotes plaza y media →</Link>
          </p>
        </div>

        {/* Links internos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarote-con-escritorio", label: "Modelo Estándar", desc: "La versión más popular — equilibrio precio/prestaciones" },
            { href: "/camarote-con-escritorio-economico", label: "Modelo Económico", desc: "La opción más accesible — lo esencial sin extras" },
            { href: "/camarote-con-escritorio-gamer", label: "Para Gamers", desc: "Guía específica para setups gaming en pieza pequeña" },
            { href: "/camarote-con-escritorio-home-office", label: "Para Home Office", desc: "Setup de teletrabajo en pieza reducida" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-purple-400 transition-all"
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        {/* CTA final */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuánto mide tu pieza?</h2>
          <p className="text-gray-400 text-sm mb-5">
            El modelo full se diseña con las medidas exactas de tu espacio. Cuéntanos el alto,
            el ancho disponible y el uso principal — te cotizamos el mismo día.
          </p>
          <a
            href={wa(
              "Hola, me interesa el camarote con escritorio full. La pieza mide [MEDIDAS]. Lo usaré para [USO]. ¿Pueden cotizarme?"
            )}
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
