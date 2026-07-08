import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Recoleta — Al Horno | Independencia y Norte",
  description: "Servicio de pintura electrostática al horno en Recoleta, Independencia y el sector norte de Santiago. Para rejas, portones, muebles metálicos y estructuras. Cotiza hoy.",
  keywords: [
    "pintura electrostatica recoleta",
    "pintura en polvo recoleta",
    "pintura electrostatica independencia",
    "powder coating recoleta",
    "pintura metalica recoleta santiago",
    "pintura electrostatica sector norte santiago",
    "pintura rejas recoleta",
    "pintura portones independencia",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-recoleta" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaRecoletaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Recoleta</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Servicio · Recoleta · Independencia · Sector Norte</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en Recoleta — Al Horno</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Atendemos a empresas y particulares de Recoleta, Independencia y el sector norte de
            Santiago con servicio de pintura electrostática al horno. Rejas, portones, muebles
            de metal, estanterías y estructuras — con retiro y entrega coordinados.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en Recoleta / Independencia. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Recoleta","Independencia","Conchalí","Renca","Av. Recoleta","Bellavista","Domínica","Los Almendros Norte","Departamental Norte"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Trabajos frecuentes en Recoleta e Independencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Muebles del mercado de las pulgas y Bío Bío", d: "Recoleta e Independencia tienen mercados de muebles vintage y antigüedades. Pintura de restauración para piezas metálicas." },
              { t: "Empresas del sector norte", d: "Bodegas, distribuidoras y talleres de la zona norte de Santiago. Servicio de pintura para producción y mantenimiento." },
              { t: "Rejas de casas del barrio", d: "Casas antiguas de Recoleta con rejas que necesitan renovación. Las restauramos o cambiamos el color con electrostática al horno." },
              { t: "Estructuras de locales", d: "Vitrinas, estanterías y estructuras de locales comerciales de las ferias y galerías del sector." },
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
            { href: "/pintura-electrostatica-santiago-centro", label: "Pintura Santiago Centro", desc: "Barrio Franklin y centro" },
            { href: "/pintura-electrostatica-nunoa", label: "Pintura Ñuñoa", desc: "Barrio Italia" },
            { href: "/pintura-electrostatica-quilicura", label: "Pintura Quilicura", desc: "Zona norte industrial" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza en Recoleta o Independencia hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Piezas, cantidad y dirección de retiro. Respondemos el mismo día.</p>
          <a
            href={wa("Hola, necesito pintura electrostática en Recoleta / Independencia. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
