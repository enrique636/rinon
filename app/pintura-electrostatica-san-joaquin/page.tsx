import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática San Joaquín — Al Horno Industrial",
  description: "Pintura electrostática al horno en San Joaquín y San Miguel. Para talleres, industrias y empresas del cinturón industrial de Santiago. Rejas, estructuras y piezas metálicas.",
  keywords: [
    "pintura electrostatica san joaquin",
    "pintura en polvo san joaquin",
    "pintura electrostatica san miguel",
    "powder coating san joaquin",
    "pintura industrial san joaquin",
    "pintura metalica san joaquin santiago",
    "servicio pintura electrostatica sur santiago",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-san-joaquin" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PinturaElectrostaticaSanJoaquinPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">San Joaquín</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Servicio · San Joaquín / San Miguel · Santiago</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pintura Electrostática en San Joaquín — Al Horno</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Servicio de pintura electrostática al horno para talleres y empresas de San Joaquín,
            San Miguel y el cinturón industrial sur de Santiago. Piezas metálicas, rejas, estructuras
            y mobiliario — con retiro y entrega coordinados.
          </p>
          <a
            href={wa("Hola, necesito cotizar pintura electrostática en San Joaquín / San Miguel. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["San Joaquín","San Miguel","La Cisterna","Lo Espejo","Pedro Aguirre Cerda","Gran Avenida","Av. Vicuña Mackenna Sur"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/pintura-electrostatica", label: "Servicio completo", desc: "Proceso y colores disponibles" },
            { href: "/pintura-electrostatica-san-bernardo", label: "Pintura San Bernardo", desc: "Sur de la RM" },
            { href: "/pintura-electrostatica-maipu", label: "Pintura Maipú", desc: "Zona poniente" },
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial", desc: "Reja + pintura" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza pintura electrostática en San Joaquín</h2>
          <p className="text-gray-400 text-sm mb-5">Piezas, cantidad y dirección. Coordinamos el retiro.</p>
          <a
            href={wa("Hola, necesito pintura electrostática en San Joaquín. Piezas: [DESCRIPCIÓN]. Cantidad: [N]. Dirección: [DIRECCIÓN].")}
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
