import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones Metálicos Iquique — Corredizos y Automáticos | I Región de Tarapacá",
  description: "Portones metálicos para casas y locales en Iquique y Alto Hospicio. Corredizos, batientes y automáticos. Resistente a salitre. Fabricante. I Región.",
  keywords: ["portones metalicos iquique","porton metalico iquique","porton corredizo iquique","porton automatico iquique","portones alto hospicio","portones tarapaca","portones primera region","fabricante portones iquique","precio porton iquique"],
  alternates: { canonical: "https://rinon.cl/portones-iquique" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesIquiquePage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican portones metálicos para Metálicos Iquique?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos portones metálicos en Metálicos Iquique. El plazo de fabricación depende del modelo: corredizo o batiente. Cotiza por WhatsApp con las medidas del vano." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación tarda entre 3 y 7 días hábiles según el volumen del pedido. La instalación se realiza en un día para la mayoría de los proyectos residenciales. Coordina la fecha al momento de confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/portones-metalicos" className="hover:text-gray-600">Portones Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Iquique</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · I Región de Tarapacá · Resistente al salitre marino</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portones Metálicos para Iquique y Alto Hospicio</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos portones metálicos para casas, condominios y locales en Iquique, Alto Hospicio y la I Región de Tarapacá. La combinación de brisa marina y radiación UV extrema del norte exige el mejor tratamiento anticorrosivo — lo que nosotros aplicamos de serie.</p>
          <a href={wa("Hola, quiero cotizar un portón metálico en Iquique / Alto Hospicio. Tipo: [CORREDIZO / BATIENTE / AUTOMÁTICO]. Ancho: [DATO]. Alto: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Iquique</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/portones-santiago", label: "Portones Santiago", desc: "Hub principal de portones" },
            { href: "/portones-automaticos", label: "Portones Automáticos", desc: "Con motorización eléctrica" },
            { href: "/rejas-metalicas-iquique", label: "Rejas Iquique", desc: "Rejas para casas y locales" },
            { href: "/cercos-perimetrales-iquique", label: "Cercos Iquique", desc: "Cerco perimetral I Región" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Iquique</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, medidas y dirección. Coordinamos despacho a la I Región.</p>
          <a href={wa("Hola, necesito portón en Iquique. Tipo: [DATO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
