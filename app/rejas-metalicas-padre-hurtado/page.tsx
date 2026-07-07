import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Padre Hurtado — Fabricante con Instalación | Sur Poniente RM",
  description: "Rejas metálicas en Padre Hurtado. Fabricante directo con instalación incluida. Frontis de casa, cercos y portones para el sector sur poniente de Santiago.",
  keywords: [
    "reja metalica padre hurtado",
    "rejas metalicas padre hurtado santiago",
    "reja para casa padre hurtado",
    "fabricante rejas padre hurtado rm",
    "cerco perimetral padre hurtado",
    "porton metalico padre hurtado",
    "rejas fierro padre hurtado sur rm",
  ],
  alternates: { canonical: "https://dumar.cl/rejas-metalicas-padre-hurtado" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasPadreHurtadoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Padre Hurtado</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Sur poniente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Padre Hurtado — Sur Poniente RM</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos rejas metálicas en Padre Hurtado. Frontis de casa, portón vehicular y cercos perimetrales en tubo de acero estructural con pintura electrostática al horno. Instalación con garantía en todo el sector sur poniente.</p>
          <a href={wa("Hola, necesito cotizar reja en Padre Hurtado. Tipo: [REJA DE FRONTIS / CERCO PERIMETRAL / PORTÓN]. Metros: [METROS] ml. Altura: [ALTURA] m. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi reja</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Padre Hurtado","Malloco","La Farfana","Ciudad del Niño","Los Aromos",
              "Camino a Talagante","El Paico","Villa Las Américas","San Rafael"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-maipu", label: "Rejas Maipú", desc: "Sur poniente RM vecino" },
            { href: "/rejas-metalicas-talagante", label: "Rejas Talagante", desc: "Sur poniente RM" },
            { href: "/rejas-metalicas-cerrillos", label: "Rejas Cerrillos", desc: "Sur poniente RM" },
            { href: "/cercos-para-parcelas", label: "Cercos para parcelas", desc: "Parcelas y loteos" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza en Padre Hurtado</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, metros y sector. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito reja o cerco en Padre Hurtado. Tipo: [DATO]. Metros: [METROS] ml. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
