import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Antofagasta — Servicio en II Región | Resistente al Sol",
  description: "Servicio de pintura electrostática al horno en Antofagasta y Calama. Resistente al sol extremo del desierto. Para rejas, portones y estructuras. II Región.",
  keywords: ["pintura electrostatica antofagasta","pintura electrostatica calama","pintura metalica antofagasta","pintura al horno antofagasta","pintura rejas antofagasta","acabado metalico norte chile","precio pintura electrostatica antofagasta"],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-antofagasta" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaAntofagastaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Antofagasta</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Servicio · II Región de Antofagasta · Resistente al desierto</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en Antofagasta y Calama</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Aplicamos pintura electrostática al horno en rejas, portones, cercos y estructuras metálicas en Antofagasta, Calama y la II Región. El sol extremo y la radiación UV del norte atacan cualquier pintura convencional en meses — el proceso electrostático resiste sin degradarse.</p>
          <a href={wa("Hola, necesito pintura electrostática en Antofagasta / Calama para [PRODUCTO]. Cantidad: [DATO]. Color: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar en Antofagasta</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/pintura-electrostatica", label: "Qué es la Pintura Electrostática", desc: "Explicación del proceso" },
            { href: "/rejas-metalicas-antofagasta", label: "Rejas Antofagasta", desc: "Rejas con pintura incluida" },
            { href: "/portones-antofagasta", label: "Portones Antofagasta", desc: "Portones con acabado al horno" },
            { href: "/cercos-perimetrales-antofagasta", label: "Cercos Antofagasta", desc: "Cercos para el norte" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura en Antofagasta</h2>
          <p className="text-gray-400 text-sm mb-5">Producto, medidas y color. Coordinamos despacho al norte.</p>
          <a href={wa("Hola, necesito pintura electrostática en Antofagasta. Producto: [DATO]. Medidas: [DATO]. Color: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
