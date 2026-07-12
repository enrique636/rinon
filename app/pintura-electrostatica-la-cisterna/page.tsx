import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática La Cisterna — Muebles Metálicos y Rejas | RM Sur",
  description: "Pintura electrostática en La Cisterna y sur de Santiago. Servicio de pintura en polvo al horno para rejas, portones, muebles y estructuras metálicas. Retiro, pintura y entrega en el sur RM.",
  keywords: [
    "pintura electrostatica la cisterna",
    "pintura electrostatica sur santiago",
    "pintura al horno la cisterna",
    "pintura metalica la cisterna",
    "pintura reja la cisterna",
    "pintura porton la cisterna",
    "servicio pintura electrostatica sur rm",
    "pintura en polvo la cisterna",
    "repintar reja la cisterna",
    "pintura electrostatica san bernardo sur rm",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-la-cisterna" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaLaCisternaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen pintura electrostática al horno en La Cisterna?", acceptedAnswer: { "@type": "Answer", text: "Sí. Realizamos servicio de pintura electrostática al horno para rejas, portones, estructuras y piezas metálicas en La Cisterna. El proceso incluye arenado o fosfatado, aplicación del polvo y horneado para un acabado duradero." } },
          { "@type": "Question", name: "¿Cuánto demora la pintura electrostática?", acceptedAnswer: { "@type": "Answer", text: "Para piezas estándar (rejas residenciales, portones) el plazo es de 3 a 5 días hábiles. Para estructuras de mayor volumen puede extenderse a 7–10 días. Coordina retiro y entrega al cotizar." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">La Cisterna</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Pintura en polvo al horno · Sur RM · Retiro y entrega
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pintura Electrostática en La Cisterna — Sur de Santiago
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Servicio de pintura electrostática al horno para rejas, portones, muebles de
            metal y estructuras metálicas en La Cisterna y el sur de Santiago. Retiramos
            las piezas, las pintamos en nuestro taller y las entregamos listas. Colores
            RAL a elección.
          </p>
          <a
            href={wa("Hola, necesito pintura electrostática en La Cisterna. Piezas: [TIPO DE PIEZA: reja / portón / muebles / etc.]. Cantidad: [DATO]. Color deseado: [COLOR o RAL]. Estoy en [SECTOR / DIRECCIÓN].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar pintura electrostática
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Piezas que pintamos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Rejas y cercos",
              "Portones vehiculares",
              "Puertas peatonales",
              "Barandas de escalera",
              "Muebles de metal",
              "Sillas y mesas",
              "Estanterías de bodega",
              "Marcos y perfiles",
              "Estructuras industriales",
            ].map((p) => (
              <div key={p} className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center text-xs font-medium text-gray-700">{p}</div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Comunas del sur RM que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["La Cisterna","El Bosque","San Ramón","La Granja","San Miguel",
              "Pedro Aguirre Cerda","Lo Espejo","San Bernardo Norte",
              "La Pintana Norte"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "Qué es y cómo funciona" },
            { href: "/pintura-electrostatica-san-bernardo", label: "Pintura San Bernardo", desc: "Sur RM vecino" },
            { href: "/pintura-electrostatica-lo-espejo", label: "Pintura Lo Espejo", desc: "Sur RM poniente" },
            { href: "/blog/pintura-electrostatica-muebles-metalicos", label: "Blog: Pintura en muebles", desc: "Qué piezas se pueden pintar" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Qué necesitas pintar en La Cisterna?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Describe las piezas y el color. Cotizamos con retiro y entrega incluidos.
          </p>
          <a
            href={wa("Hola, necesito pintura electrostática en La Cisterna. Piezas: [DATO]. Color: [DATO].")}
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
