import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Las Condes — Al Horno para Metales",
  description: "Servicio de pintura electrostática al horno en Las Condes, Vitacura y Lo Barnechea. Para rejas, portones, muebles metálicos y estructuras del sector oriente de Santiago. Cotiza hoy.",
  keywords: [
    "pintura electrostatica las condes",
    "pintura en polvo las condes",
    "pintura electrostatica vitacura",
    "pintura electrostatica lo barnechea",
    "powder coating las condes",
    "pintura metalica las condes",
    "servicio pintura electrostatica sector oriente",
    "pintura portones las condes",
    "pintura rejas vitacura",
  ],
  alternates: { canonical: "https://dumar.cl/pintura-electrostatica-las-condes" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaLasCondesPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Las Condes</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Servicio · Las Condes · Vitacura · Lo Barnechea
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pintura Electrostática en Las Condes — Al Horno
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Atendemos a empresas y particulares de Las Condes, Vitacura y Lo Barnechea con servicio
            de pintura electrostática al horno. Renovación de rejas y portones, mobiliario metálico
            de oficinas, estructuras de acero y piezas decorativas — con retiro y entrega coordinados.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en Las Condes / Vitacura / Lo Barnechea. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Las Condes","Vitacura","Lo Barnechea","La Dehesa","Av. Apoquindo","Av. Las Condes","El Golf","Chicureo acceso","Ciudad Empresarial Las Condes"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Trabajos más frecuentes en el sector oriente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Renovación de rejas y portones de casas", d: "Portones corredizos y rejas de frontis que con el tiempo pierden brillo o se oxidan. Los repintamos en negro mate, negro brillante o el color que elijas." },
              { t: "Mobiliario metálico de oficinas", d: "Sillas, archivadores, estructuras y accesorios de metal de oficinas corporativas — con acabado duro que resiste el uso diario." },
              { t: "Estructuras decorativas y arquitectónicas", d: "Barandas, escaleras, pergolas metálicas y estructuras de acero para proyectos de arquitectura e interiorismo." },
              { t: "Piezas de arte y diseño", d: "Esculturas, mamparas y objetos de diseño en metal que requieren un acabado de calidad superior." },
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
            { href: "/pintura-electrostatica-nunoa", label: "Pintura Ñuñoa", desc: "Zona central-oriente" },
            { href: "/rejas-metalicas-las-condes", label: "Rejas Las Condes", desc: "Fabricación e instalación" },
            { href: "/portones-automaticos", label: "Portones automáticos", desc: "Fabricación + pintura" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza en Las Condes o Vitacura hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Piezas, cantidad y dirección de retiro. Coordinamos el mismo día.</p>
          <a
            href={wa("Hola, necesito pintura electrostática en Las Condes / Vitacura / Lo Barnechea. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
