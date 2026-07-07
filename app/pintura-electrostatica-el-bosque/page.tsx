import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática El Bosque — Al Horno Santiago Sur",
  description: "Pintura electrostática al horno en El Bosque, La Pintana y La Cisterna. Para rejas, portones y estructuras del sector sur de Santiago. Empresas y particulares. Cotiza hoy.",
  keywords: [
    "pintura electrostatica el bosque",
    "pintura en polvo el bosque",
    "pintura electrostatica la pintana",
    "pintura electrostatica la cisterna",
    "powder coating el bosque santiago",
    "pintura metalica el bosque",
    "servicio pintura electrostatica sur santiago",
  ],
  alternates: { canonical: "https://dumar.cl/pintura-electrostatica-el-bosque" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaElBosquePage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">El Bosque</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Servicio · El Bosque · La Pintana · La Cisterna · Sur RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en El Bosque — Al Horno</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Atendemos particulares y empresas de El Bosque, La Pintana y La Cisterna con servicio
            de pintura electrostática al horno. Rejas de frontis, portones, estanterías y
            estructuras metálicas — con retiro y entrega coordinados.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en El Bosque / La Pintana / La Cisterna. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["El Bosque","La Pintana","La Cisterna","San Ramón","Lo Espejo Norte","Av. La Pintana","Villa El Bosque","Gran Avenida Sur"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/pintura-electrostatica", label: "Servicio completo", desc: "Proceso, colores y capacidad" },
            { href: "/pintura-electrostatica-san-bernardo", label: "Pintura San Bernardo", desc: "Zona sur RM" },
            { href: "/pintura-electrostatica-lo-espejo", label: "Pintura Lo Espejo", desc: "Zona sur cercana" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Fabricación nueva + instalación" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza en El Bosque o La Pintana hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Piezas, cantidad y dirección de retiro. Respondemos el mismo día.</p>
          <a
            href={wa("Hola, necesito pintura electrostática en El Bosque / La Pintana. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
