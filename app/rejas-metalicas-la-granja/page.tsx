import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica La Granja — Fabricante con Instalación | Sur RM",
  description: "Rejas metálicas en La Granja. Fabricante directo con instalación incluida. Frontis de casa, portón vehicular y puerta peatonal para el sector sur de Santiago.",
  keywords: [
    "reja metalica la granja",
    "rejas metalicas la granja",
    "reja para casa la granja santiago",
    "portones la granja",
    "cerco la granja santiago",
    "fabricante rejas la granja",
    "reja de fierro la granja",
    "rejas sur rm la granja",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-la-granja" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasLaGranjaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan rejas metálicas en La Granja?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos rejas metálicas en La Granja. Cotizamos el mismo día — necesitamos el ancho y alto del frente, más si incluye portón. Pintamos al horno para mayor durabilidad." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación tarda entre 3 y 7 días hábiles según el volumen del pedido. La instalación se realiza en un día para la mayoría de los proyectos residenciales. Coordina la fecha al momento de confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">La Granja</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Instalación incluida · Sur RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas Metálicas en La Granja — Sur de Santiago
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en La Granja y el sector sur de Santiago.
            Frontis de casa, portón vehicular y puerta peatonal — a medida, con pintura
            electrostática al horno. Instalación con garantía.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja metálica en La Granja. Metros del frontis: [METROS] ml. Altura: [ALTURA] m. Con portón vehicular: [SÍ / NO]. Sector: [VILLA / CALLE].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de La Granja que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["La Granja","Av. Santa Rosa Sur","Villa La Pintana Norte","Los Nogales Sur",
              "El Cobre","La Castrina","Villa Portales La Granja","Av. Departamental Sur",
              "San José de La Granja"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-la-cisterna", label: "Rejas La Cisterna", desc: "Sur RM vecino" },
            { href: "/rejas-metalicas-san-ramon", label: "Rejas San Ramón", desc: "Sur RM" },
            { href: "/rejas-metalicas-el-bosque", label: "Rejas El Bosque", desc: "Sur RM" },
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
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en La Granja hoy</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros del frontis, altura y si lleva portón. Respondemos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito reja metálica en La Granja. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO].")}
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
