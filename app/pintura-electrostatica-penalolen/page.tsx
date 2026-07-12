import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Peñalolén — Al Horno | Sector Oriente",
  description: "Servicio de pintura electrostática al horno en Peñalolén y el sector oriente de Santiago. Para rejas, portones, muebles metálicos y estructuras. Retiro y entrega coordinados.",
  keywords: [
    "pintura electrostatica penalolen",
    "pintura en polvo penalolen",
    "powder coating penalolen",
    "pintura metalica penalolen santiago",
    "pintura rejas penalolen",
    "pintura portones penalolen",
    "pintura electrostatica sector oriente",
    "restauracion muebles metalicos penalolen",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-penalolen" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaPenalolenPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen pintura electrostática al horno en Peñalolén?", acceptedAnswer: { "@type": "Answer", text: "Sí. Realizamos servicio de pintura electrostática al horno para rejas, portones, estructuras y piezas metálicas en Peñalolén. El proceso incluye arenado o fosfatado, aplicación del polvo y horneado para un acabado duradero." } },
          { "@type": "Question", name: "¿Cuánto demora la pintura electrostática?", acceptedAnswer: { "@type": "Answer", text: "Para piezas estándar (rejas residenciales, portones) el plazo es de 3 a 5 días hábiles. Para estructuras de mayor volumen puede extenderse a 7–10 días. Coordina retiro y entrega al cotizar." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Peñalolén</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Servicio · Peñalolén · Macul · Sector Oriente
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pintura Electrostática en Peñalolén — Al Horno
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Atendemos a particulares y empresas de Peñalolén, Macul y el sector oriente
            de Santiago con servicio de pintura electrostática al horno. Rejas, portones,
            muebles metálicos, mobiliario de jardín y estructuras — retiro y entrega
            coordinados desde tu dirección.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en Peñalolén / Macul. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección de retiro: [DIRECCIÓN].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Peñalolén","Macul","Lo Hermida","La Faena","San Luis",
              "Villa Los Jardines","Av. Grecia","Portal Macul","Las Perdices Oriente"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/pintura-electrostatica", label: "Servicio completo", desc: "Proceso, colores y tiempos" },
            { href: "/pintura-electrostatica-la-florida", label: "Pintura La Florida", desc: "Sector sur-oriente" },
            { href: "/pintura-electrostatica-nunoa", label: "Pintura Ñuñoa", desc: "Sector oriente central" },
            { href: "/pintura-electrostatica-macul", label: "Pintura Macul", desc: "Sector sur-oriente" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza en Peñalolén hoy</h2>
          <p className="text-gray-400 text-sm mb-5">
            Piezas, cantidad y dirección de retiro. Respondemos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito pintura electrostática en Peñalolén / Macul. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
