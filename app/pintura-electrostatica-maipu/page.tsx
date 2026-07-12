import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Maipú — Al Horno para Metales",
  description: "Servicio de pintura electrostática al horno en Maipú. Para empresas, talleres y maestranzas de la zona poniente de Santiago. Rejas, portones, estructuras y piezas metálicas. Cotiza hoy.",
  keywords: [
    "pintura electrostatica maipu",
    "pintura en polvo maipu",
    "powder coating maipu",
    "pintura electrostatica zona poniente santiago",
    "pintura metalica maipu",
    "servicio pintura electrostatica maipu",
    "pintura rejas maipu",
    "pintura portones maipu",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-maipu" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaMaipuPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen pintura electrostática al horno en Maipú?", acceptedAnswer: { "@type": "Answer", text: "Sí. Realizamos servicio de pintura electrostática al horno para rejas, portones, estructuras y piezas metálicas en Maipú. El proceso incluye arenado o fosfatado, aplicación del polvo y horneado para un acabado duradero." } },
          { "@type": "Question", name: "¿Cuánto demora la pintura electrostática?", acceptedAnswer: { "@type": "Answer", text: "Para piezas estándar (rejas residenciales, portones) el plazo es de 3 a 5 días hábiles. Para estructuras de mayor volumen puede extenderse a 7–10 días. Coordina retiro y entrega al cotizar." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Maipú</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Servicio · Maipú · Zona Poniente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en Maipú — Al Horno</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Servicio de pintura electrostática al horno para piezas metálicas en Maipú y la zona
            poniente de Santiago. Rejas, portones, estanterías, estructuras y muebles de metal.
            Retiro y entrega coordinados.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en Maipú. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN, MAIPÚ].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Maipú que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Parque Industrial Maipú","Pajaritos","Ciudad Satélite","Cerrillos","Las Rastras","Rinconada","Tres Poniente","Villa El Abrazo"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de trabajo más frecuentes en Maipú</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Talleres metalmecánicos", d: "Pintura de piezas producidas en taller. Servicio de terminación para productos que salen al mercado o para uso interno." },
              { t: "Empresas de distribución", d: "Estanterías y racks de bodegas que requieren repintado o pintura de primera vez en unidades nuevas." },
              { t: "Constructoras y obras", d: "Piezas metálicas para proyectos de construcción en la zona poniente — barandas, peldaños, marcos." },
              { t: "Uso residencial y comercial", d: "Rejas y portones de casas y locales en Maipú que necesitan repintado después de años de uso." },
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
            { href: "/pintura-electrostatica", label: "Servicio completo", desc: "Proceso, materiales y colores disponibles" },
            { href: "/pintura-electrostatica-san-bernardo", label: "Pintura San Bernardo", desc: "También atendemos San Bernardo" },
            { href: "/rejas-metalicas-maipu", label: "Rejas Maipú", desc: "Fabricación + instalación" },
            { href: "/pintura-electrostatica-pudahuel", label: "Pintura Pudahuel", desc: "Zona industrial cercana" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza en Maipú hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Piezas, cantidad y dirección de retiro. Respondemos el mismo día.</p>
          <a
            href={wa("Hola, necesito pintura electrostática en Maipú. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
