import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Providencia — Al Horno | Barrio Italia",
  description: "Servicio de pintura electrostática al horno en Providencia y el eje Barrio Italia. Restauración de muebles metálicos vintage, rejas y estructuras. Retiro y entrega coordinados.",
  keywords: [
    "pintura electrostatica providencia",
    "pintura en polvo providencia",
    "pintura electrostatica barrio italia",
    "powder coating providencia santiago",
    "pintura muebles metalicos providencia",
    "restauracion muebles fierro providencia",
    "pintura rejas providencia",
    "pintura electrostatica sector oriente santiago",
  ],
  alternates: { canonical: "https://dumar.cl/pintura-electrostatica-providencia" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaProvidenciaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Providencia</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Servicio · Providencia · Barrio Italia · Ñuñoa
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pintura Electrostática en Providencia — Al Horno
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Atendemos a particulares, diseñadores y empresas de Providencia, Barrio Italia
            y el sector oriente de Santiago con servicio de pintura electrostática al horno.
            Restauramos muebles de fierro vintage, pintamos rejas y portones, y damos nueva
            vida a estructuras metálicas. Retiro y entrega coordinados.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en Providencia / Barrio Italia. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección de retiro: [DIRECCIÓN].")}
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
            {["Providencia","Barrio Italia","Av. Italia","Av. Condell","Ñuñoa",
              "Pedro de Valdivia","Manuel Montt","Irarrázaval","Los Leones"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Trabajos frecuentes en Providencia y Barrio Italia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Muebles de fierro vintage de Barrio Italia",
                d: "El eje Av. Italia concentra tiendas de muebles de diseño y piezas de fierro de los años 50–70. Los restauramos con electrostática en el color que elijas.",
              },
              {
                t: "Rejas y portones de edificios y casas",
                d: "Edificios y casas de Providencia con rejas antiguas que cambian de color o se restauran. Un color distinto puede renovar completamente la fachada.",
              },
              {
                t: "Estructuras de locales y restaurantes",
                d: "Barrio Italia tiene alta concentración de locales gastronómicos y de diseño. Pintamos sillas, mesas, vitrinas y estructuras metálicas en colores personalizados.",
              },
              {
                t: "Piezas de diseño y arquitectura",
                d: "Estudios de arquitectura e interiorismo del sector que necesitan pintar piezas metálicas a medida. Colores RAL completos disponibles.",
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
            { href: "/pintura-electrostatica", label: "Servicio completo", desc: "Proceso y catálogo de colores" },
            { href: "/pintura-electrostatica-nunoa", label: "Pintura Ñuñoa", desc: "Barrio Italia extendido" },
            { href: "/pintura-electrostatica-santiago-centro", label: "Pintura Santiago Centro", desc: "Barrio Franklin y centro" },
            { href: "/pintura-electrostatica-las-condes", label: "Pintura Las Condes", desc: "Alto oriente RM" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza en Providencia o Barrio Italia hoy</h2>
          <p className="text-gray-400 text-sm mb-5">
            Piezas, cantidad y dirección de retiro. Respondemos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito pintura electrostática en Providencia / Barrio Italia. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
