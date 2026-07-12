import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática La Florida — Al Horno para Metales",
  description: "Servicio de pintura electrostática al horno en La Florida. Para rejas, portones, muebles metálicos y estructuras. Empresas y particulares de la zona sur-oriente de Santiago.",
  keywords: [
    "pintura electrostatica la florida",
    "pintura en polvo la florida",
    "powder coating la florida",
    "pintura metalica la florida santiago",
    "servicio pintura electrostatica la florida",
    "pintura rejas la florida",
    "pintura portones la florida",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-la-florida" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaLaFloridaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen pintura electrostática al horno en La Florida?", acceptedAnswer: { "@type": "Answer", text: "Sí. Realizamos servicio de pintura electrostática al horno para rejas, portones, estructuras y piezas metálicas en La Florida. El proceso incluye arenado o fosfatado, aplicación del polvo y horneado para un acabado duradero." } },
          { "@type": "Question", name: "¿Cuánto demora la pintura electrostática?", acceptedAnswer: { "@type": "Answer", text: "Para piezas estándar (rejas residenciales, portones) el plazo es de 3 a 5 días hábiles. Para estructuras de mayor volumen puede extenderse a 7–10 días. Coordina retiro y entrega al cotizar." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">La Florida</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Servicio · La Florida · Zona Sur-Oriente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en La Florida — Al Horno</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Atendemos empresas y particulares de La Florida con servicio de pintura electrostática
            al horno para piezas y estructuras metálicas. Rejas del frontis, portones, muebles de
            metal y estructuras a pedido.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en La Florida. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN, LA FLORIDA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de La Florida que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Av. Vicuña Mackenna","San José de la Florida","Nuevo Amanecer","La Faena","El Castillo","Trinidad","Portal La Florida","Las Vizcachas"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Qué pintamos en La Florida?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Rejas de frontis y portones", d: "Repintado de rejas oxidadas o desgastadas. Mismo acabado que al instalarlas nuevas — capa dura, uniforme, larga duración." },
              { t: "Muebles metálicos", d: "Camarotes, repisas, sillas metálicas y mobiliario de empresas o uso doméstico." },
              { t: "Estructuras comerciales", d: "Estructuras de locales, stands, vitrinas metálicas y elementos de exhibición." },
              { t: "Piezas a medida", d: "Cualquier pieza metálica que requiera un acabado resistente al desgaste y a la intemperie." },
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
            { href: "/pintura-electrostatica", label: "Servicio completo", desc: "Proceso, colores y capacidad" },
            { href: "/pintura-electrostatica-san-bernardo", label: "Pintura San Bernardo", desc: "Sur de Santiago" },
            { href: "/rejas-metalicas-la-florida", label: "Rejas La Florida", desc: "Fabricación e instalación" },
            { href: "/pintura-electrostatica-maipu", label: "Pintura Maipú", desc: "También atendemos Maipú" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza en La Florida hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Piezas, cantidad y dirección de retiro. Respondemos el mismo día.</p>
          <a
            href={wa("Hola, necesito pintura electrostática en La Florida. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
