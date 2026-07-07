import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Barandas Metálicas Santiago — Fabricante para Escaleras y Terrazas",
  description: "Barandas metálicas en Santiago. Fabricante directo con instalación. Baranda para escalera, terraza, deck y pasillo. Acero, aluminio o hierro forjado. Pintura electrostática al horno.",
  keywords: [
    "barandas metalicas santiago",
    "baranda metalica escalera",
    "baranda para terraza metalica",
    "barandas de acero santiago",
    "baranda escalera interior santiago",
    "fabricante barandas metalicas",
    "baranda metalica precio chile",
    "baranda de fierro santiago",
    "barandas para deck metalicas",
    "baranda metalica instalacion santiago",
  ],
  alternates: { canonical: "https://dumar.cl/barandas-metalicas" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function BarandasMetalicasPage() {
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
                name: "¿Qué materiales se usan para las barandas metálicas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Las barandas metálicas se fabrican principalmente en tubo cuadrado o redondo de acero, perfil de hierro forjado decorativo, o perfiles de aluminio. El acero con pintura electrostática es la opción más económica y resistente. El aluminio es más liviano y no requiere pintura.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto cuesta una baranda metálica para escalera?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio de una baranda para escalera depende de la longitud, el número de peldaños, el diseño y el material. Una baranda de escalera interior en tubo de acero con pintura electrostática tiene un precio accesible. Envía las medidas por WhatsApp para cotización exacta.",
                },
              },
              {
                "@type": "Question",
                name: "¿Incluyen instalación las barandas metálicas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Fabricamos e instalamos las barandas en Santiago. La instalación incluye anclaje a piso, pared o escalón según corresponda. Para proyectos fuera de Santiago, la baranda puede enviarse armada para que un maestro local la instale.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/estructuras-metalicas-a-pedido" className="hover:text-gray-600">Estructuras a pedido</Link><span>/</span>
          <span className="text-gray-700 font-medium">Barandas Metálicas</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Pintura al horno · Instalación incluida
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Barandas Metálicas en Santiago — Escaleras, Terrazas y Decks
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos barandas metálicas a medida en Santiago. Para escaleras interiores, terrazas,
            decks y pasillos — en acero con pintura electrostática al horno, con instalación incluida.
            Diseño moderno, clásico o a pedido.
          </p>
          <a
            href={wa("Hola, necesito cotizar una baranda metálica. El uso es: [ESCALERA / TERRAZA / DECK / PASILLO]. Longitud: [METROS] m. Altura de la baranda: [ALTURA] m. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi baranda
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de baranda metálica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Baranda para escalera interior",
                d: "La más solicitada. Va anclada a los peldaños o a la pared lateral. Altura estándar 90–100 cm desde el escalón. Diseño recto o con pasamanos en tubo redondo.",
              },
              {
                t: "Baranda para terraza o balcón",
                d: "Anclada al piso de la terraza con taco o placa embebida. Resiste el peso de personas apoyadas. Diseño con travesaños horizontales o verticales.",
              },
              {
                t: "Baranda para deck exterior",
                d: "Para decks de madera o concreto. El anclaje se adapta al material de la superficie. Acabado galvanizado recomendado para exterior expuesto.",
              },
              {
                t: "Baranda de diseño",
                d: "Con elementos decorativos — curvas, forja, combinación con vidrio o madera. Para proyectos de arquitectura e interiorismo donde el detalle importa.",
              },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Normativa de alturas en Chile</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <p className="font-semibold mb-2">Alturas mínimas según la Ordenanza General de Urbanismo y Construcción</p>
            <ul className="space-y-1 text-xs text-amber-800">
              <li>• <strong>Escaleras interiores:</strong> baranda mínima de 90 cm de altura desde el escalón</li>
              <li>• <strong>Terrazas y balcones sobre 1 m de altura:</strong> baranda mínima de 95 cm</li>
              <li>• <strong>Edificios de más de 2 pisos:</strong> baranda mínima de 1,00 m</li>
              <li>• <strong>Travesaños:</strong> la separación entre barras no debe superar 12 cm (paso de niños)</li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Información necesaria para cotizar</h2>
          <div className="space-y-2">
            {[
              ["Uso", "Escalera interior / terraza / balcón / deck / pasillo"],
              ["Longitud total", "Metros lineales de baranda que necesitas"],
              ["Altura", "Desde el piso hasta el pasamanos (estándar: 90–100 cm)"],
              ["Material de anclaje", "Concreto, madera, metal u otro — afecta el tipo de fijación"],
              ["Diseño", "Moderno (líneas rectas), clásico, con forja, o foto de referencia"],
              ["Interior o exterior", "Exterior requiere acabado más resistente"],
            ].map(([campo, desc]) => (
              <div key={campo} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-3 text-xs">
                <span className="font-medium text-gray-700 w-28 flex-shrink-0">{campo}</span>
                <span className="text-gray-500">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/estructuras-metalicas-a-pedido", label: "Estructuras a pedido", desc: "Escaleras, mezzanines y más" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "El acabado de nuestras barandas" },
            { href: "/rejas-para-ventanas", label: "Rejas para ventanas", desc: "Seguridad en ventanas" },
            { href: "/portones-residenciales", label: "Portones residenciales", desc: "Accesos para casas" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all"
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros de baranda necesitas?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Uso, longitud, altura y material de anclaje. Cotizamos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito cotizar una baranda metálica. Uso: [ESCALERA / TERRAZA / DECK]. Longitud: [METROS] m. Altura: [ALTURA] m. Anclaje en: [CONCRETO / MADERA / OTRO]. Estoy en [COMUNA].")}
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
