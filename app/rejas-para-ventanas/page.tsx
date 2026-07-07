import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas para Ventanas en Santiago — Fabricante e Instalación",
  description: "Rejas metálicas para ventanas en Santiago. Fabricante directo con instalación. Reja fija, reja abatible y reja enrollable para ventanas de casas y departamentos. Cotiza hoy.",
  keywords: [
    "rejas para ventanas",
    "reja para ventana santiago",
    "rejas metalicas para ventanas",
    "reja de seguridad ventana",
    "reja para ventana precio",
    "reja para ventana casa chile",
    "rejas ventana fabricante santiago",
    "reja abatible ventana",
    "reja fija ventana",
    "seguridad ventanas reja metalica",
    "rejas para ventanas precio chile",
  ],
  alternates: { canonical: "https://dumar.cl/rejas-para-ventanas" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasParaVentanasPage() {
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
                name: "¿Qué tipo de reja para ventana es más segura?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La reja fija empotrada en la pared es la más segura — no se puede abrir desde afuera y queda anclada al muro. La reja abatible con llave es una buena alternativa cuando se necesita la opción de apertura para emergencias o limpieza. La reja enrollable es la menos recomendada para seguridad pura.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se puede instalar reja en ventanas de PVC o aluminio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Las rejas se instalan en el vano de la ventana (en el marco del muro) y no necesariamente en la ventana misma. Se puede instalar independientemente del material de la ventana — PVC, aluminio o madera.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto cuesta una reja para ventana en Santiago?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio de una reja para ventana depende del ancho, el alto, el tipo (fija o abatible) y la complejidad del diseño. Las ventanas estándar de 1,00 a 1,20 m de ancho tienen un precio accesible. Para cotización exacta, envía las medidas por WhatsApp.",
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
          <span className="text-gray-700 font-medium">Para Ventanas</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Instalación incluida · Santiago
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas para Ventanas en Santiago
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas para ventanas en Santiago. Reja fija,
            reja abatible con llave y reja de diseño — medidas exactas al vano, pintura
            electrostática al horno, instalación incluida.
          </p>
          <a
            href={wa("Hola, necesito cotizar rejas para ventanas en Santiago. Medidas de la ventana: [ANCHO] x [ALTO] m. Tipo: [FIJA / ABATIBLE]. Cantidad: [N] ventanas. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mis ventanas
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de reja para ventana</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                t: "Reja fija",
                d: "La más segura. Se emperna o empota directamente en el vano de la ventana. No se abre. Ideal para ventanas que normalmente están cerradas o donde la ventilación no es prioritaria.",
                badge: "Más segura",
              },
              {
                t: "Reja abatible con llave",
                d: "Permite abrir la reja para limpiar la ventana o como salida de emergencia. Con cerrojo o llave por dentro. Recomendada para dormitorios — permite escape en caso de incendio.",
                badge: "Más versátil",
              },
              {
                t: "Reja de diseño",
                d: "Con formas decorativas, espirales o detalles artísticos. Para propiedades donde la estética importa tanto como la seguridad. A pedido, mismo acabado electrostático.",
                badge: "Premium",
              },
            ].map((item) => (
              <div key={item.t} className="bg-white border border-gray-200 rounded-xl p-4">
                <span className="text-xs bg-gray-900 text-white rounded-full px-2 py-0.5 font-medium mb-2 inline-block">
                  {item.badge}
                </span>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Cómo medir tu ventana para cotizar</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-blue-900">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                <span>Mide el <strong>ancho del vano</strong> de la ventana — desde el muro hasta el otro lado, no el marco de la ventana.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                <span>Mide el <strong>alto del vano</strong> — desde el alféizar hasta el techo del vano.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                <span>Anota <strong>cuántas ventanas</strong> quieres rejar y si quieres que todas sean del mismo modelo.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                <span>Envía las medidas por WhatsApp junto con tu <strong>comuna</strong>. Cotizamos el mismo día.</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Fija o abatible? Una decisión importante</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <p className="font-semibold mb-1">Recomendación para dormitorios</p>
            <p className="text-xs leading-relaxed">
              En dormitorios se recomienda la reja abatible con apertura desde adentro. En caso de
              incendio o emergencia, la reja fija puede impedir la salida. Las ordenanzas de
              algunos condominios y seguros de hogar también exigen esta opción en dormitorios.
              Consulta al cotizar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-para-casas", label: "Rejas para frontis de casa", desc: "Reja perimetral + portón" },
            { href: "/blog/como-elegir-reja-metalica-frontis", label: "Guía de elección", desc: "Cómo elegir la reja correcta" },
            { href: "/reja-metalica-santiago", label: "Rejas en tu comuna", desc: "Instalamos en toda la RM" },
            { href: "/rejas-metalicas-precio", label: "Factores de precio", desc: "Qué determina el costo" },
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
          <h2 className="text-2xl font-bold mb-2">¿Cuántas ventanas quieres rejar?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Ancho × alto de la ventana, tipo (fija/abatible) y comuna. Cotizamos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito cotizar rejas para ventanas. Medidas: [ANCHO] x [ALTO] m. Tipo: [FIJA / ABATIBLE]. Cantidad: [N] ventanas. Comuna: [COMUNA].")}
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
