import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Renca — Al Horno | Conchalí y Sector Norte",
  description: "Servicio de pintura electrostática al horno en Renca, Conchalí y el sector norte de Santiago. Para rejas, portones, estanterías y estructuras metálicas. Retiro y entrega coordinados.",
  keywords: [
    "pintura electrostatica renca",
    "pintura en polvo renca",
    "pintura electrostatica conchali",
    "powder coating renca",
    "pintura metalica renca santiago",
    "pintura electrostatica norte santiago",
    "pintura rejas renca",
    "pintura portones renca",
    "servicio pintura electrostatica renca",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-renca" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaRencaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen pintura electrostática al horno en Renca?", acceptedAnswer: { "@type": "Answer", text: "Sí. Realizamos servicio de pintura electrostática al horno para rejas, portones, estructuras y piezas metálicas en Renca. El proceso incluye arenado o fosfatado, aplicación del polvo y horneado para un acabado duradero." } },
          { "@type": "Question", name: "¿Cuánto demora la pintura electrostática?", acceptedAnswer: { "@type": "Answer", text: "Para piezas estándar (rejas residenciales, portones) el plazo es de 3 a 5 días hábiles. Para estructuras de mayor volumen puede extenderse a 7–10 días. Coordina retiro y entrega al cotizar." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Renca</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Servicio · Renca · Conchalí · Sector Norte RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pintura Electrostática en Renca — Al Horno
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Atendemos a empresas e industrias de Renca, Conchalí y el sector norte de Santiago
            con servicio de pintura electrostática al horno. Rejas, portones, estanterías
            industriales, mobiliario metálico y estructuras — retiro y entrega coordinados
            en tu dirección.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en Renca / Conchalí. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección de retiro: [DIRECCIÓN].")}
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
            {[
              "Renca","Conchalí","Parque Industrial Renca","Av. Américo Vespucio Norte",
              "Lo Echevers","Bajos de Mena Norte","Villa Portales Norte",
              "Independencia","Camino El Noviciado",
            ].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Trabajos frecuentes en Renca y Conchalí</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Industrias y bodegas de Renca",
                d: "El Parque Industrial de Renca concentra empresas de manufactura, logística y almacenaje. Pintamos estanterías, puertas industriales y estructuras de acero.",
              },
              {
                t: "Rejas y portones residenciales",
                d: "Casas de los sectores de Renca y Conchalí que quieren renovar el color de la reja o restaurar elementos oxidados.",
              },
              {
                t: "Muebles metálicos de taller",
                d: "Mesones de trabajo, gabinetes y herramientas de acero. Los pintamos en colores estándar o a pedido según el color corporativo.",
              },
              {
                t: "Estructuras de locales comerciales",
                d: "Vitrinas, estantes y mostradores de metal para locales de Conchalí y el eje de Av. Recoleta norte.",
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
            { href: "/pintura-electrostatica", label: "Servicio completo", desc: "Proceso, colores y tiempos" },
            { href: "/pintura-electrostatica-quilicura", label: "Pintura Quilicura", desc: "Zona norte industrial vecina" },
            { href: "/pintura-electrostatica-recoleta", label: "Pintura Recoleta", desc: "Sector norte oriente" },
            { href: "/pintura-electrostatica-pudahuel", label: "Pintura Pudahuel", desc: "Zona poniente / aeropuerto" },
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
          <h2 className="text-2xl font-bold mb-2">Cotiza en Renca o Conchalí hoy</h2>
          <p className="text-gray-400 text-sm mb-5">
            Piezas, cantidad y dirección de retiro. Respondemos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito pintura electrostática en Renca / Conchalí. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
