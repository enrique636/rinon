import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica La Reina — Fabricante con Instalación | Santiago Oriente",
  description: "Rejas metálicas en La Reina, Santiago. Fabricante directo con instalación incluida. Reja para frontis de casa, portón vehicular y puerta peatonal para el sector oriente de Santiago.",
  keywords: [
    "reja metalica la reina",
    "rejas metalicas la reina",
    "reja para casa la reina santiago",
    "portones la reina",
    "reja de fierro la reina",
    "cerco la reina santiago",
    "fabricante rejas la reina",
    "reja tubular la reina",
    "rejas sector oriente santiago",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-la-reina" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasLaReinaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan rejas metálicas en La Reina?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos rejas metálicas en La Reina. Cotizamos el mismo día — necesitamos el ancho y alto del frente, más si incluye portón. Pintamos al horno para mayor durabilidad." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación tarda entre 3 y 7 días hábiles según el volumen del pedido. La instalación se realiza en un día para la mayoría de los proyectos residenciales. Coordina la fecha al momento de confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">La Reina</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Instalación incluida · Sector Oriente RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas Metálicas en La Reina — Santiago Oriente
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en La Reina y el sector oriente de Santiago.
            Frontis de casa, portón vehicular y puerta peatonal — diseño moderno o clásico,
            a medida, con pintura electrostática al horno y garantía de instalación.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja metálica en La Reina. Metros del frontis: [METROS] ml. Altura: [ALTURA] m. Con portón vehicular: [SÍ / NO]. Sector: [VILLA / CALLE / CONDOMINIO].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de La Reina que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "La Reina","Av. Ossa","Av. Larraín","Tobalaba","Las Perdices",
              "La Franciscana","El Rodeo","Santa María de La Reina","Villa Frei",
            ].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de reja más solicitados en La Reina</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Frontis residencial moderno",
                d: "Reja de tubo cuadrado con barrotes verticales finos. Diseño contemporáneo con altura de 1,50–1,80 m. Muy solicitado en casas del sector oriente.",
              },
              {
                t: "Portón vehicular corredizo",
                d: "Para casas con poca vereda — el portón corredizo abre hacia adentro sin ocupar espacio exterior. Con motor opcional.",
              },
              {
                t: "Reja para condominio",
                d: "Para accesos de condominios pequeños de La Reina. Diseño coordinado con la arquitectura del conjunto.",
              },
              {
                t: "Reja con diseño en forja",
                d: "Para casas que buscan un acabado más clásico. Misma estructura de acero con elementos decorativos en hierro forjado.",
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
            { href: "/rejas-metalicas-nunoa", label: "Rejas Ñuñoa", desc: "Sector oriente vecino" },
            { href: "/rejas-metalicas-las-condes", label: "Rejas Las Condes", desc: "Alto oriente de Santiago" },
            { href: "/portones-residenciales", label: "Portones residenciales", desc: "Batiente y corredizo" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Guía completa del frontis" },
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
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en La Reina hoy</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros del frontis, altura y sector. Respondemos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito reja metálica en La Reina. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO]. Sector: [VILLA / CALLE].")}
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
