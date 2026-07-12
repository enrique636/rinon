import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Peñalolén — Fabricante con Instalación | Sector Oriente",
  description: "Rejas metálicas en Peñalolén. Fabricante directo con instalación incluida. Frontis de casa, portón vehicular y puerta peatonal para el sector oriente de Santiago.",
  keywords: [
    "reja metalica penalolen",
    "rejas metalicas penalolen",
    "reja para casa penalolen",
    "portones penalolen",
    "cerco penalolen santiago",
    "fabricante rejas penalolen",
    "reja de fierro penalolen",
    "rejas sector oriente penalolen",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-penalolen" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasPenalolenPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan rejas metálicas en Peñalolén?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos rejas metálicas en Peñalolén. Cotizamos el mismo día — necesitamos el ancho y alto del frente, más si incluye portón. Pintamos al horno para mayor durabilidad." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación tarda entre 3 y 7 días hábiles según el volumen del pedido. La instalación se realiza en un día para la mayoría de los proyectos residenciales. Coordina la fecha al momento de confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Peñalolén</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Instalación incluida · Sector Oriente RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas Metálicas en Peñalolén — Santiago Oriente
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en Peñalolén y el sector oriente de
            Santiago. Frontis de casa, portón vehicular y puerta peatonal — a medida, con
            pintura electrostática al horno. Instalación con garantía.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja metálica en Peñalolén. Metros del frontis: [METROS] ml. Altura: [ALTURA] m. Con portón vehicular: [SÍ / NO]. Sector: [VILLA / CALLE / LO HERMIDA / OTRO].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Peñalolén que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Peñalolén","Lo Hermida","La Faena","San Luis","Villa Los Jardines",
              "Peñalolén Alto","Las Parcelas","Av. Américo Vespucio Oriente",
              "El Sauce","Villa Macul"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lo que incluye un frontis completo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Reja perimetral del frontis",
                d: "Los metros lineales frente a la calle. Tubo cuadrado de 1\", barrotes verticales de 1/2\". Acabado negro electrostático al horno.",
              },
              {
                t: "Portón vehicular",
                d: "Batiente doble o corredizo según el espacio disponible. Ancho estándar para un auto: 3 m.",
              },
              {
                t: "Puerta peatonal",
                d: "Mismo diseño que la reja. Con cerradura mariposa y bisagras regulables. Ancho estándar 0,90–1,00 m.",
              },
              {
                t: "Instalación en Peñalolén",
                d: "Nuestro equipo va al domicilio, instala la reja y el portón, y ajusta las bisagras y cierres el mismo día.",
              },
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
            { href: "/rejas-metalicas-la-florida", label: "Rejas La Florida", desc: "Sector sur-oriente vecino" },
            { href: "/rejas-metalicas-la-reina", label: "Rejas La Reina", desc: "Sector oriente RM" },
            { href: "/rejas-metalicas-nunoa", label: "Rejas Ñuñoa", desc: "Sector oriente central" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Guía completa del frontis" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Peñalolén hoy</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros del frontis, altura y sector. Respondemos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito reja metálica en Peñalolén. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO]. Sector: [LO HERMIDA / LA FAENA / OTRO].")}
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
