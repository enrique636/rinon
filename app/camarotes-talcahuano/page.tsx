import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Metálicos Talcahuano — Literas para Industria y Biobío | Chile",
  description: "Camarotes metálicos para Talcahuano, Hualpén y la zona industrial de Biobío. Industria, naval y habitacional. Fabricante. Despacho a la VIII Región.",
  keywords: ["camarotes talcahuano","literas metalicas talcahuano","camarotes biobio","camarotes concepcion talcahuano","camarotes hualpen","literas talcahuano","camarotes zona industrial biobio","fabricante camarotes talcahuano","camarotes metalicos octava region"],
  alternates: { canonical: "https://rinon.cl/camarotes-talcahuano" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamarotesTalcahuanoPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes a Talcahuano?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a Talcahuano. Para Santiago RM el despacho incluye instalación. Para regiones coordinamos transporte al cotizar — solo necesitamos la dirección." } },
          { "@type": "Question", name: "¿Cuánto tarda el despacho?", acceptedAnswer: { "@type": "Answer", text: "En Santiago RM la entrega e instalación se realiza en un día acordado, generalmente dentro de la semana de confirmado el pedido. Para regiones coordinamos transporte — el plazo depende de la distancia y disponibilidad de flete." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Talcahuano</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Industrial y naval · VIII Región</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos para Talcahuano y Biobío</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Proveemos camarotes metálicos para industria naval, empresas, hospitales y uso habitacional en Talcahuano, Hualpén y la zona industrial de la VIII Región. Acabado resistente a ambientes húmedos y marinos.</p>
          <div className="my-5 rounded-2xl overflow-hidden shadow-sm"><img src="/images/camarotes/camarote-faenero-metalico-negro.jpg" alt="Camarote metálico Talcahuano — entrega Región del Biobío" className="w-full object-cover" loading="lazy" /></div>
          <a href={wa("Hola, necesito camarotes metálicos para Talcahuano / Biobío. Cantidad: [UNIDADES]. Uso: [INDUSTRIA / HABITACIONAL / EMPRESA]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Talcahuano</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-concepcion", label: "Camarotes Concepción", desc: "Capital de Biobío" },
            { href: "/camarotes-faenas", label: "Camarotes para Faenas", desc: "Construcción e industria" },
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
          <h2 className="text-2xl font-bold mb-2">Cotiza para Talcahuano</h2>
          <p className="text-gray-400 text-sm mb-5">Cantidad, uso y dirección. Coordinamos despacho a la VIII Región.</p>
          <a href={wa("Hola, necesito camarotes para Talcahuano. Cantidad: [UNIDADES]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
