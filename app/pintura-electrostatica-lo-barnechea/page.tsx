import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Lo Barnechea — Rejas y Portones al Horno",
  description: "Pintura electrostática al horno en Lo Barnechea. Rejas, portones y estructuras metálicas con acabado duradero. Servicio para La Dehesa, El Arrayán y sector cordillera.",
  keywords: [
    "pintura electrostatica lo barnechea",
    "pintura al horno lo barnechea santiago",
    "pintura rejas lo barnechea",
    "pintura electrostatica la dehesa",
    "pintura metalica lo barnechea rm",
    "pintura portones lo barnechea",
    "pintura electrostatica el arrayan santiago",
  ],
  alternates: { canonical: "https://dumar.cl/pintura-electrostatica-lo-barnechea" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaLoBarnecheaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Lo Barnechea</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Pintura al horno · La Dehesa · El Arrayán · Sector cordillera</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en Lo Barnechea — Acabado al Horno</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Lo Barnechea, La Dehesa y El Arrayán tienen una particularidad climática: la
            diferencia térmica entre el día y la noche es mayor que en el resto de Santiago,
            lo que acelera el desgaste de pinturas convencionales. La pintura electrostática
            al horno — curada a 180–200 °C — forma una película más flexible y resistente
            que aguanta mejor esa variación térmica.
          </p>
          <a href={wa("Hola, necesito cotizar pintura electrostática en Lo Barnechea / La Dehesa. Qué necesito pintar: [REJAS / PORTÓN / MUEBLE / ESTRUCTURA]. Color: [DATO]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar pintura electrostática</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Lo Barnechea","La Dehesa","El Arrayán","La Ermita","San Carlos de Apoquindo",
              "Los Trapenses","El Manzano","Av. La Dehesa","Camino El Arrayán","Rinconada de Lo Barnechea"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/pintura-electrostatica-las-condes", label: "Pintura Las Condes", desc: "Oriente RM" },
            { href: "/pintura-electrostatica-vitacura", label: "Pintura Vitacura", desc: "Oriente premium" },
            { href: "/rejas-metalicas-lo-barnechea", label: "Rejas Lo Barnechea", desc: "Fabricación e instalación" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "Guía completa del proceso" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura en Lo Barnechea</h2>
          <p className="text-gray-400 text-sm mb-5">Qué necesitas pintar, color y sector. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito pintura electrostática en Lo Barnechea / La Dehesa. Qué pintar: [DATO]. Color: [DATO]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
