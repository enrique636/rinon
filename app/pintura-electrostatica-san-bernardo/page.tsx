import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática San Bernardo — Al Horno para Metales",
  description: "Servicio de pintura electrostática al horno en San Bernardo y el sur de Santiago. Para rejas, portones, muebles metálicos y estructuras. Retiro y entrega en la RM. Cotiza hoy.",
  keywords: [
    "pintura electrostatica san bernardo",
    "pintura electrostatica sur santiago",
    "pintura en polvo san bernardo",
    "powder coating san bernardo",
    "pintura metalica san bernardo",
    "pintura electrostatica parque industrial san bernardo",
    "pintura electrostatica rejas san bernardo",
    "servicio pintura metal san bernardo",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-san-bernardo" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaSanBernardoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">San Bernardo</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Servicio · San Bernardo · Sur RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pintura Electrostática en San Bernardo — Al Horno
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Atendemos empresas e industrias de San Bernardo con servicio de pintura electrostática
            al horno para piezas y estructuras metálicas. Rejas, portones, estanterías, muebles
            metálicos y estructuras a pedido — con retiro y entrega coordinados en la RM.
          </p>
          <a
            href={wa(
              "Hola, necesito cotizar pintura electrostática en San Bernardo. Las piezas son: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN, SAN BERNARDO]."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores y parques industriales de San Bernardo</h2>
          <p className="text-gray-500 text-sm mb-4 leading-relaxed">
            San Bernardo concentra un importante volumen industrial en el sur de la RM — talleres
            metalmecánicos, bodegas, distribuidoras y manufactura. Atendemos a empresas de:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Parque Industrial El Castillo",
              "Lo Herrera",
              "Nos",
              "Población San Bernardo",
              "Santa Marta de Nos",
              "Sector industrial Av. Walker Martínez",
              "Bodegas Av. Calera de Tango",
            ].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Qué pintamos para empresas en San Bernardo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Rejas y portones", d: "Pintura o repintado de rejas perimetrales, portones de acceso y cercos industriales. Mismo acabado que al fabricarlo nuevo." },
              { t: "Estructuras metálicas", d: "Mezzanines, estanterías, soportes y estructuras a medida — con pintura electrostática incluida o como servicio independiente." },
              { t: "Muebles metálicos", d: "Camarotes, escritorios, archivadores y mobiliario de metal para empresas, bodegas y campamentos." },
              { t: "Piezas de maquinaria", d: "Componentes metálicos, carcasas, tapas y accesorios de maquinaria que requieran pintura industrial resistente." },
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
            { href: "/pintura-electrostatica", label: "Página principal del servicio", desc: "Proceso, materiales y colores" },
            { href: "/pintura-electrostatica-maipu", label: "Pintura electrostática Maipú", desc: "También atendemos Maipú" },
            { href: "/rejas-metalicas-san-bernardo", label: "Rejas metálicas San Bernardo", desc: "Fabricación e instalación" },
            { href: "/cierre-perimetral-industrial", label: "Cierre perimetral industrial", desc: "Reja + pintura para su empresa" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura electrostática en San Bernardo</h2>
          <p className="text-gray-400 text-sm mb-5">
            Descripción de las piezas, cantidad y dirección. Coordinamos el retiro.
          </p>
          <a
            href={wa(
              "Hola, necesito pintura electrostática al horno en San Bernardo. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección para retiro: [DIRECCIÓN]."
            )}
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
