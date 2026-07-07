import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Colina — Al Horno | Lampa y Norte RM",
  description: "Servicio de pintura electrostática al horno en Colina, Lampa y el norte de la Región Metropolitana. Para estructuras metálicas, portones, rejas y maquinaria industrial. Retiro coordinado.",
  keywords: [
    "pintura electrostatica colina",
    "pintura en polvo colina",
    "pintura electrostatica lampa",
    "powder coating colina",
    "pintura metalica colina rm",
    "pintura electrostatica norte rm",
    "pintura rejas colina",
    "pintura estructuras metalicas colina",
  ],
  alternates: { canonical: "https://dumar.cl/pintura-electrostatica-colina" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaColinaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Colina</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Servicio · Colina · Lampa · Norte RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pintura Electrostática en Colina y Lampa — Al Horno
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Atendemos a empresas y particulares de Colina, Lampa, Batuco y el norte de la
            Región Metropolitana con servicio de pintura electrostática al horno. Portones,
            rejas, maquinaria agroindustrial, estructuras metálicas y mobiliario — con retiro
            y entrega coordinados desde tu dirección.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en Colina / Lampa. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección de retiro: [DIRECCIÓN].")}
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
              "Colina","Lampa","Batuco","Chicureo","Parque Industrial Colina",
              "Ciudad Empresarial","Huertos Familiares Lampa","Lo Barnechea Norte",
              "Polígono Industrial Lampa",
            ].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Trabajos frecuentes en Colina y Lampa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Maquinaria e implementos agrícolas",
                d: "La zona norte RM tiene actividad agropecuaria y agroindustrial. Pintamos implementos de riego, estructuras de invernadero y maquinaria liviana en colores estándar o RAL.",
              },
              {
                t: "Portones y rejas de parcelas",
                d: "Parcelas de agrado y predios de Colina, Lampa y Chicureo. Portones vehiculares y rejas de frontis con pintura electrostática para exterior.",
              },
              {
                t: "Empresas del Parque Industrial",
                d: "Colina y Lampa tienen zonas industriales consolidadas. Pintamos estructuras, estanterías, mobiliario de planta y piezas de mantenimiento.",
              },
              {
                t: "Mobiliario de casas de campo",
                d: "Muebles de jardín metálicos, pérgolas y estructuras exteriores de residencias en Chicureo y sectores residenciales de Colina.",
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
            { href: "/pintura-electrostatica-quilicura", label: "Pintura Quilicura", desc: "Zona norte industrial" },
            { href: "/pintura-electrostatica-pudahuel", label: "Pintura Pudahuel", desc: "Zona aeropuerto" },
            { href: "/pintura-electrostatica-renca", label: "Pintura Renca", desc: "Sector norte RM" },
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
          <h2 className="text-2xl font-bold mb-2">Cotiza en Colina o Lampa hoy</h2>
          <p className="text-gray-400 text-sm mb-5">
            Piezas, cantidad y dirección de retiro. Coordinamos el servicio desde el norte RM.
          </p>
          <a
            href={wa("Hola, necesito pintura electrostática en Colina / Lampa. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
