import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Pudahuel — Al Horno Industrial",
  description: "Pintura electrostática al horno para empresas de Pudahuel y la zona aeropuerto de Santiago. Industrias, logística, metalmecánica. Retiro y entrega coordinados en la RM.",
  keywords: [
    "pintura electrostatica pudahuel",
    "pintura en polvo pudahuel",
    "powder coating pudahuel",
    "pintura electrostatica zona aeropuerto",
    "pintura industrial pudahuel",
    "pintura metalica pudahuel",
    "servicio pintura electrostatica pudahuel",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-pudahuel" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaPudahuelPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen pintura electrostática al horno en Pudahuel?", acceptedAnswer: { "@type": "Answer", text: "Sí. Realizamos servicio de pintura electrostática al horno para rejas, portones, estructuras y piezas metálicas en Pudahuel. El proceso incluye arenado o fosfatado, aplicación del polvo y horneado para un acabado duradero." } },
          { "@type": "Question", name: "¿Cuánto demora la pintura electrostática?", acceptedAnswer: { "@type": "Answer", text: "Para piezas estándar (rejas residenciales, portones) el plazo es de 3 a 5 días hábiles. Para estructuras de mayor volumen puede extenderse a 7–10 días. Coordina retiro y entrega al cotizar." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Pudahuel</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Servicio · Pudahuel · Zona Aeropuerto</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en Pudahuel — Al Horno</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Servicio de pintura electrostática al horno para piezas y estructuras metálicas en
            Pudahuel. Zona de alta concentración logística e industrial — atendemos bodegas,
            empresas de distribución, talleres y metalmecánica.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en Pudahuel. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN, PUDAHUEL].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Pudahuel que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Pudahuel Norte","Pudahuel Sur","Zona aeropuerto","Lo Boza","Las Rejas Norte","Ciudad Empresarial Pudahuel","Sector Noviciado"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/pintura-electrostatica", label: "Servicio completo", desc: "Proceso y materiales" },
            { href: "/pintura-electrostatica-quilicura", label: "Pintura Quilicura", desc: "Zona industrial cercana" },
            { href: "/pintura-electrostatica-maipu", label: "Pintura Maipú", desc: "Zona poniente" },
            { href: "/rejas-metalicas-pudahuel", label: "Rejas Pudahuel", desc: "Fabricación + instalación" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura electrostática en Pudahuel</h2>
          <p className="text-gray-400 text-sm mb-5">Piezas, cantidad y dirección. Coordinamos el retiro.</p>
          <a
            href={wa("Hola, necesito pintura electrostática en Pudahuel. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
