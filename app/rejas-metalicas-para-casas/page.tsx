import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Metálicas para Casas en Santiago — Fabricante Directo",
  description: "Rejas metálicas para casas en Santiago. Fabricante directo con instalación incluida. Frontis, jardín y portón en un solo proyecto. Todos los diseños y alturas. Cotiza hoy.",
  keywords: ["rejas metalicas para casas", "reja metalica para casa santiago", "reja para frontis de casa", "reja para jardin metalica", "reja de fierro para casa", "reja tubular para casa precio", "reja metalica casa precio chile", "rejas para casas santiago precio"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-para-casas" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasParaCasasPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué reja metálica es mejor para el frontis de una casa?", acceptedAnswer: { "@type": "Answer", text: "La reja tubular de tubo cuadrado de 1\" con barrotes verticales es la más elegida para casas en Santiago. Es resistente, de buen aspecto y el precio es razonable. La altura más frecuente para frontis residencial es 1,50 m a 1,80 m. El acabado estándar es pintura negra electrostática." } },
          { "@type": "Question", name: "¿Qué incluye una reja de frontis completa?", acceptedAnswer: { "@type": "Answer", text: "Un frontis completo incluye la reja perimetral (los metros lineales de la calle), el portón vehicular y la puerta peatonal. Todo se cotiza como un proyecto integrado — mismo diseño, mismo acabado, misma instalación." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación de una reja para una casa?", acceptedAnswer: { "@type": "Answer", text: "Para un frontis estándar de 8 a 15 metros lineales, la fabricación e instalación toma típicamente pocos días hábiles desde la aprobación del presupuesto. La instalación misma es de un día." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Casas</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Santiago</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas para Casas en Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas para el frontis de tu casa en Santiago. Diseñadas a tu medida exacta — reja perimetral, portón vehicular y puerta peatonal en un solo proyecto, con un solo fabricante.
          </p>
          <a href={wa("Hola, necesito cotizar una reja metálica para el frontis de mi casa en Santiago. Los metros de la calle son: [METROS] m. La altura que quiero es: [ALTURA] m. Estoy en [COMUNA].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar mi reja
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Todo lo que incluye un frontis completo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja perimetral", d: "Los metros lineales frente a la calle. Tubo cuadrado de 1\", barrotes verticales, marco horizontal superior e inferior." },
              { t: "Portón vehicular", d: "Para el acceso del auto. Batiente doble (2 hojas) o corredizo según el espacio disponible. Mismo diseño que la reja." },
              { t: "Puerta peatonal", d: "Acceso de personas independiente del portón. Con cerradura y mariposa. Integrada en el diseño del frontis." },
              { t: "Pintura electrostática", d: "Al horno, en negro mate, negro brillante o gris. Color a elección. Dura años con mantenimiento básico." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Qué altura necesita el frontis de mi casa?</h2>
          <div className="space-y-2">
            {[
              ["80–100 cm", "Reja de jardín o delimitación de terreno. No es una barrera de seguridad, es estética."],
              ["1,20 m", "Mínimo funcional. Dificulta el acceso pero no lo impide para un adulto determinado."],
              ["1,50 m", "La altura más frecuente en Santiago. Buen equilibrio entre seguridad y costo."],
              ["1,80 m", "Alta seguridad residencial. No se puede saltar con facilidad. Recomendada en sectores más complejos."],
              ["2,00 m o más", "Máxima seguridad. Consultar ordenanza municipal de la comuna — algunas limitan la altura del frontis."],
            ].map(([alt, desc]) => (
              <div key={alt} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-3 text-xs">
                <span className="font-medium text-gray-700 w-20 flex-shrink-0">{alt}</span>
                <span className="text-gray-500">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/blog/como-elegir-reja-metalica-frontis", label: "Guía de elección", desc: "Cómo elegir la reja correcta" },
            { href: "/portones-residenciales", label: "Portones para casas", desc: "Tipos y diseños disponibles" },
            { href: "/reja-metalica-santiago", label: "Rejas por comuna", desc: "Instalamos en toda la RM" },
            { href: "/rejas-metalicas-precio", label: "Factores de precio", desc: "Qué determina el costo" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros tiene el frente de tu casa?</h2>
          <p className="text-gray-400 text-sm mb-5">Los metros de calle, la altura y la comuna. Cotizamos frontis completo el mismo día.</p>
          <a href={wa("Hola, quiero cotizar la reja del frontis de mi casa. Metros: [METROS] m. Altura: [ALTURA]. Con portón: [SÍ / NO]. Comuna: [COMUNA].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
