import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Macul — Al Horno para Metales",
  description: "Servicio de pintura electrostática al horno en Macul y Peñalolén. Para rejas, portones, estructuras y muebles metálicos del sector oriente de Santiago. Cotiza hoy.",
  keywords: [
    "pintura electrostatica macul",
    "pintura en polvo macul",
    "pintura electrostatica penalolen",
    "powder coating macul",
    "pintura metalica macul santiago",
    "pintura electrostatica sector oriente santiago",
    "servicio pintura electrostatica macul",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-macul" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaMaculPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Macul</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Servicio · Macul · Peñalolén · Sector Oriente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en Macul — Al Horno</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Atendemos a empresas y particulares de Macul, Peñalolén y el sector oriente de Santiago
            con servicio de pintura electrostática al horno. Rejas, portones, muebles de metal y
            estructuras — retiro y entrega coordinados.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en Macul / Peñalolén. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Macul","Peñalolén","La Reina","Las Vizcachas","San Ramón de Peñalolén","Lo Hermida","Villa La Reina","Av. Vicuña Mackenna Sur"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lo que pintamos para clientes de Macul y Peñalolén</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Repintado de rejas oxidadas", d: "Rejas de frontis que llevan años y ya muestran oxidación superficial. Las restauramos con pintura electrostática — quedan como nuevas y con protección duradera." },
              { t: "Portones y puertas metálicas", d: "Portones vehiculares desgastados o con pintura descascarada. Los renovamos al mismo color o en negro mate." },
              { t: "Muebles metálicos del hogar", d: "Camarotes, sillas, mesas y estanterías metálicas para uso doméstico — con el acabado duro del horno." },
              { t: "Piezas de taller o empresa", d: "Para talleres y pequeñas empresas del sector que necesitan servicio de pintura industrial sin trasladarse." },
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
            { href: "/pintura-electrostatica-la-florida", label: "Pintura La Florida", desc: "Zona sur-oriente" },
            { href: "/rejas-metalicas-nunoa", label: "Rejas Ñuñoa", desc: "Fabricación e instalación" },
            { href: "/pintura-electrostatica-san-bernardo", label: "Pintura San Bernardo", desc: "Sur de Santiago" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza en Macul o Peñalolén hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Piezas, cantidad y dirección. Coordinamos el retiro.</p>
          <a
            href={wa("Hola, necesito pintura electrostática en Macul / Peñalolén. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
