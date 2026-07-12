import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Metálicas Temuco — Fabricante con Instalación | Araucanía",
  description: "Rejas metálicas para casas y locales en Temuco y la Región de La Araucanía. Frontis, ventanas y cerco perimetral. Fabricante. Despacho e instalación.",
  keywords: ["rejas metalicas temuco","reja metalica temuco","rejas para casa temuco","reja frontal temuco","rejas metalicas araucania","reja metalica padre las casas","rejas metalicas novena region","fabricante rejas temuco","precio reja metalica temuco"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-temuco" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasTemucoPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan rejas metálicas en Temuco?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos rejas metálicas en Temuco. Cotizamos el mismo día — necesitamos el ancho y alto del frente, más si incluye portón. Pintamos al horno para mayor durabilidad." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación tarda entre 3 y 7 días hábiles según el volumen del pedido. La instalación se realiza en un día para la mayoría de los proyectos residenciales. Coordina la fecha al momento de confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas-santiago" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Temuco</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Despacho La Araucanía · Resistente a lluvia</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas para Temuco y La Araucanía</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos rejas metálicas para casas, locales y establecimientos en Temuco, Padre Las Casas y toda la Región de La Araucanía. El clima húmedo de la zona requiere acabados de calidad — la pintura electrostática al horno que usamos resiste las lluvias del sur de Chile.</p>
          <a href={wa("Hola, necesito cotizar rejas metálicas para Temuco / Araucanía. Tipo: [FRONTIS / VENTANA / CERCO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Temuco</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-temuco", label: "Cercos Temuco", desc: "Cerco perimetral Araucanía" },
            { href: "/rejas-metalicas-santiago", label: "Ver modelos", desc: "Catálogo completo de rejas" },
            { href: "/camarotes-temuco", label: "Camarotes Temuco", desc: "Literas metálicas" },
            { href: "/rejas-metalicas-precio", label: "Precio de Rejas", desc: "Cuánto cuesta una reja" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Temuco</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, medidas y dirección. Coordinamos despacho a La Araucanía.</p>
          <a href={wa("Hola, necesito rejas para Temuco. Tipo: [DATO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
