import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cama de 2 Plazas con Cajón — Almacenamiento Integrado | Rinon.cl",
  description: "Cama doble con cajón deslizante incorporado bajo el colchón. Fabricada en acero en Chile. Ideal para piezas sin clóset o con poco espacio de almacenamiento. Cotiza sin compromiso.",
  keywords: [
    "cama dos plazas con cajon",
    "cama doble con cajon",
    "cama 2 plazas con almacenamiento",
    "cama con cajon metalica chile",
    "cama con cajones bajo colchon",
    "cama con almacenamiento integrado",
    "cama doble metalica con cajon santiago",
  ],
  alternates: { canonical: "https://rinon.cl/cama-dos-plazas-con-cajon" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamaConCajonPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Cama de 2 Plazas con Cajón",
            description:
              "Cama de 2 plazas con cajón deslizante incorporado bajo el colchón. Fabricada en acero en Santiago por Rinon.cl.",
            brand: { "@type": "Brand", name: "Rinon.cl" },
            manufacturer: {
              "@type": "Organization",
              name: "Rinon.cl",
              address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "CLP",
              seller: { "@type": "Organization", name: "Rinon.cl" },
            },
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
                name: "¿Cuánto almacena el cajón de la cama?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El cajón ocupa prácticamente todo el largo de la cama bajo el colchón. Tiene capacidad para ropa de cama, frazadas extra, almohadas de repuesto o maletas de tamaño mediano. La profundidad exacta depende de la altura de base elegida al cotizar.",
                },
              },
              {
                "@type": "Question",
                name: "¿El cajón desliza fácil o requiere fuerza?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Con correderas metálicas bien lubricadas, desliza suave. Si con el tiempo se pone duro, se lubrica el riel con grasa o silicona — es mantenimiento de 2 minutos.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puede tener dos cajones en vez de uno?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Se puede fabricar con dos cajones más angostos en lugar de uno ancho. Se define al cotizar según el uso y las preferencias.",
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
          <span className="text-gray-700 font-medium">Cama 2 Plazas con Cajón</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 text-sm text-indigo-700 font-medium mb-5">
            📦 Cama doble · Cajón integrado · Máximo aprovechamiento del espacio
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cama de 2 Plazas con Cajón de Almacenamiento
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Una cama doble con cajón deslizante incorporado en la base. El espacio que normalmente
            se pierde bajo el colchón se convierte en almacenamiento real — sin necesidad de
            clóset extra, sin cajas en el suelo, sin desorden visible.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Fabricada en acero en nuestro taller. Ideal para piezas pequeñas, departamentos
            sin clóset suficiente, o cualquier espacio donde cada centímetro importa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={wa("Hola, me interesa la cama de 2 plazas con cajón. ¿Pueden darme el precio y las medidas?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
            >
              Cotizar por WhatsApp
            </a>
            <Link
              href="/camarotes"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-base hover:border-gray-400 transition-colors"
            >
              Ver todos los modelos
            </Link>
          </div>
        </div>

        {/* Qué incluye */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Qué incluye</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "🛏️", t: "Cama de 2 plazas", d: "Base elevada para que el cajón entre con espacio suficiente. Superficie de apoyo para el colchón incluida (parrilla metálica)." },
              { icon: "📦", t: "Cajón deslizante de gran capacidad", d: "Cubre casi todo el largo de la cama. Entra y sale por el lado. Capacidad para ropa de cama, frazadas, almohadas o maletas." },
              { icon: "🔩", t: "Estructura de acero", d: "Fabricada en nuestro taller en Santiago. Misma calidad de acero que el resto de nuestros modelos." },
              { icon: "🎨", t: "Pintura electrostática", d: "Acabado resistente al uso y a la humedad. Disponible en negro, blanco y otros colores a consultar." },
            ].map((i) => (
              <div key={i.t} className="flex gap-4 bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">{i.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{i.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Qué cabe en el cajón */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Qué cabe en el cajón?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: "🛌", t: "Ropa de cama extra" },
              { icon: "🧣", t: "Frazadas y almohadas" },
              { icon: "👔", t: "Ropa fuera de temporada" },
              { icon: "🧳", t: "Maletas medianas" },
              { icon: "👟", t: "Zapatillas y zapatos" },
              { icon: "📦", t: "Artículos de uso ocasional" },
            ].map((i) => (
              <div key={i.t} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center">
                <span className="text-2xl block mb-1">{i.icon}</span>
                <p className="text-xs text-gray-600 font-medium">{i.t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Para quién es */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ideal para</h2>
          <div className="space-y-3">
            {[
              { t: "Departamentos sin clóset suficiente", d: "En muchos departamentos nuevos el clóset es un mueble separado que hay que comprar. La cama con cajón da almacenamiento extra integrado sin ocupar pared adicional." },
              { t: "Piezas de arrendado donde no puedes intervenir el espacio", d: "No puedes instalar estantes ni modificar el clóset. La cama con cajón te da almacenamiento que llevas contigo cuando te vayas." },
              { t: "Parejas con equipaje estacional", d: "Frazadas de invierno, ropa de verano, equipamiento deportivo. Todo lo que usas por temporada y necesitas guardar sin que esté a la vista." },
            ].map((c) => (
              <div key={c.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{c.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Opciones */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Opciones al cotizar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "1 cajón ancho", d: "Un solo cajón que ocupa todo el ancho. Más capacidad de una sola vez. El más solicitado." },
              { t: "2 cajones", d: "Dos cajones más angostos. Más fácil de organizar — cada uno para un tipo distinto de almacenamiento." },
              { t: "Alto de cajón", d: "El alto del cajón depende de la altura total de la base. Se define al cotizar según lo que necesitas guardar." },
            ].map((o) => (
              <div key={o.t} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{o.t}</h3>
                <p className="text-gray-500 text-xs">{o.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarote-doble", label: "Camarote Doble", desc: "Dos camas en vertical — sin cajón pero con dos niveles" },
            { href: "/cama-alta", label: "Cama Alta", desc: "Una cama elevada — el espacio de abajo queda libre" },
            { href: "/camarote-dos-plazas-abajo", label: "Camarote 2 Plazas + 1 Arriba", desc: "Cama doble abajo con cama individual sobre ella" },
            { href: "/camarotes", label: "Todos los modelos", desc: "Ver el catálogo completo" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-400 transition-all"
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Con un cajón o con dos?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Cuéntanos el tamaño de tu pieza y qué necesitas guardar — te recomendamos la
            configuración correcta y cotizamos sin compromiso.
          </p>
          <a
            href={wa("Hola, me interesa la cama de 2 plazas con cajón. La pieza mide [MEDIDAS]. ¿Pueden cotizarme?")}
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
