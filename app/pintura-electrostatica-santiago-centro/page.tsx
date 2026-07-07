import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Santiago Centro — Al Horno para Metales",
  description: "Servicio de pintura electrostática al horno en Santiago Centro, Barrio Franklin y sectores céntricos. Para rejas, portones, estructuras y mobiliario metálico de empresas y particulares.",
  keywords: [
    "pintura electrostatica santiago centro",
    "pintura en polvo santiago centro",
    "pintura electrostatica barrio franklin",
    "powder coating santiago centro",
    "pintura metalica santiago centro",
    "servicio pintura electrostatica centro santiago",
    "pintura rejas santiago centro",
    "pintura portones centro santiago",
  ],
  alternates: { canonical: "https://dumar.cl/pintura-electrostatica-santiago-centro" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaSantiagoCentroPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Santiago Centro</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Servicio · Santiago Centro · Barrio Franklin</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en Santiago Centro — Al Horno</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Atendemos empresas y particulares de Santiago Centro, Barrio Franklin y sectores
            céntricos con servicio de pintura electrostática al horno. Rejas, portones, estructuras,
            muebles de metal y piezas industriales — con retiro y entrega coordinados.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en Santiago Centro / Barrio Franklin. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Santiago Centro que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Santiago Centro","Barrio Franklin","Barrio Yungay","Barrio Italia (acceso)","Matucana","Barrio Brasil","San Diego","Barrio Meiggs","Barrio Lastarria","Av. Matta"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Barrio Franklin — el centro del comercio de metales</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Barrio Franklin y el eje de Meiggs concentran talleres, ferreterías y distribuidores
            de materiales metálicos en Santiago. Atendemos a empresas y talleres de la zona con
            servicio de pintura electrostática — tanto para sus propias piezas como para las de
            sus clientes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Talleres y maestranzas", d: "Servicio de pintura para los talleres metalmecánicos del barrio — piezas de terceros y producción propia." },
              { t: "Comercio de metales", d: "Empresas que venden o procesan materiales metálicos y necesitan un servicio de terminación para su stock." },
              { t: "Renovación residencial", d: "Casas antiguas del centro con rejas y portones que necesitan repintado — mismo acabado que al instalarlas nuevas." },
              { t: "Locales y galerías comerciales", d: "Estructuras metálicas de locales, galerías y tiendas del centro histórico." },
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
            { href: "/pintura-electrostatica-nunoa", label: "Pintura Ñuñoa", desc: "Barrio Italia y Ñuñoa" },
            { href: "/pintura-electrostatica-san-joaquin", label: "Pintura San Joaquín", desc: "Sur del centro" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas nuevas", desc: "Si necesitas fabricar nueva" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura electrostática en Santiago Centro</h2>
          <p className="text-gray-400 text-sm mb-5">Piezas, cantidad y dirección. Coordinamos el retiro.</p>
          <a
            href={wa("Hola, necesito pintura electrostática en Santiago Centro / Barrio Franklin. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
