import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Ñuñoa — Al Horno | Barrio Italia y más",
  description: "Servicio de pintura electrostática al horno en Ñuñoa, Barrio Italia y San Miguel. Para rejas, portones, muebles metálicos y piezas de diseño. Fabricante en Santiago. Cotiza hoy.",
  keywords: [
    "pintura electrostatica nunoa",
    "pintura electrostatica barrio italia",
    "pintura en polvo nunoa",
    "powder coating nunoa",
    "pintura metalica nunoa",
    "pintura muebles metalicos barrio italia",
    "servicio pintura electrostatica nunoa",
    "pintura rejas nunoa",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-nunoa" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaNunoaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Ñuñoa</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Servicio · Ñuñoa · Barrio Italia · San Miguel
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pintura Electrostática en Ñuñoa — Al Horno
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Atendemos a empresas, tiendas de diseño y particulares de Ñuñoa, Barrio Italia y San
            Miguel con servicio de pintura electrostática al horno. Renovación de muebles metálicos,
            rejas de frontis, estructuras y piezas decorativas.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en Ñuñoa / Barrio Italia / San Miguel. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Ñuñoa","Barrio Italia","Irarrázaval","San Miguel","Av. Vicuña Mackenna","Estadio","Villa Frei","Av. Ossa"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Trabajos frecuentes en Ñuñoa y Barrio Italia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Muebles vintage y de diseño", d: "Barrio Italia concentra tiendas de muebles y diseño — sillas, mesas, vitrinas y piezas en hierro que necesitan renovación o cambio de color." },
              { t: "Rejas de frontis de casas antiguas", d: "Las casas de Ñuñoa tienen rejas que llevan décadas. Las restauramos con pintura electrostática manteniendo el diseño original." },
              { t: "Portones de garaje", d: "Portones metálicos de casas del sector central que necesitan repintado o renovación completa." },
              { t: "Piezas para locales y galerías", d: "Estructuras metálicas de locales comerciales, galerías de arte y tiendas de interiorismo del barrio." },
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
            { href: "/pintura-electrostatica", label: "Servicio completo", desc: "Proceso y colores disponibles" },
            { href: "/pintura-electrostatica-las-condes", label: "Pintura Las Condes", desc: "Sector oriente premium" },
            { href: "/rejas-metalicas-nunoa", label: "Rejas Ñuñoa", desc: "Fabricación + instalación nueva" },
            { href: "/pintura-electrostatica-macul", label: "Pintura Macul", desc: "Zona sur-oriente" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza en Ñuñoa o Barrio Italia hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Piezas, cantidad y dirección. Coordinamos el retiro.</p>
          <a
            href={wa("Hola, necesito pintura electrostática en Ñuñoa / Barrio Italia. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
