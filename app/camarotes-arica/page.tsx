import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Metálicos Arica — Literas para Empresas y Campamentos | XV Región",
  description: "Camarotes metálicos para Arica y la Región de Arica y Parinacota. Uso habitacional, campamentos y empresas. Fabricante. Despacho a Arica, Putre y Camarones.",
  keywords: ["camarotes arica","literas metalicas arica","camarotes arica parinacota","camarotes metalicos arica chile","literas arica","camarotes para empresas arica","fabricante camarotes arica","camarotes norte chile arica"],
  alternates: { canonical: "https://rinon.cl/camarotes-arica" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamaroteAricaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes a Arica?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a Arica. Para Santiago RM el despacho incluye instalación. Para regiones coordinamos transporte al cotizar — solo necesitamos la dirección." } },
          { "@type": "Question", name: "¿Cuánto tarda el despacho?", acceptedAnswer: { "@type": "Answer", text: "En Santiago RM la entrega e instalación se realiza en un día acordado, generalmente dentro de la semana de confirmado el pedido. Para regiones coordinamos transporte — el plazo depende de la distancia y disponibilidad de flete." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Arica</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Despacho norte extremo · Empresas y habitacional</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos para Arica y XV Región</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Proveemos camarotes metálicos para empresas, hospedajes y hogares en Arica y la Región de Arica y Parinacota. Fabricante directo con coordinación de despacho al norte extremo de Chile.</p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-faenero-offshore-industrial.jpg" alt="Camarote industrial offshore Arica — faenas zona extrema norte" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa("Hola, necesito camarotes metálicos para Arica. Cantidad: [UNIDADES]. Uso: [HABITACIONAL / EMPRESA / CAMPAMENTO / OTRO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Arica</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-iquique", label: "Camarotes Iquique", desc: "I Región de Tarapacá" },
            { href: "/camarotes-antofagasta", label: "Camarotes Antofagasta", desc: "II Región Antofagasta" },
            { href: "/camarotes-al-por-mayor", label: "Precio al Por Mayor", desc: "Descuento por volumen" },
            { href: "/camarotes-metalicos", label: "Ver todos los modelos", desc: "Catálogo completo" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Arica</h2>
          <p className="text-gray-400 text-sm mb-5">Cantidad, uso y dirección. Coordinamos despacho al norte.</p>
          <a href={wa("Hola, necesito camarotes para Arica. Cantidad: [UNIDADES]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
