import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones Metálicos La Serena — Corredizos y Automáticos | IV Región",
  description: "Portones metálicos para casas y locales en La Serena y Coquimbo. Corredizos, batientes y automáticos. Acabado resistente al sol. Fabricante. IV Región.",
  keywords: ["portones metalicos la serena","porton metalico la serena","porton corredizo la serena","porton automatico la serena","portones coquimbo","portones cuarta region","fabricante portones la serena","precio porton la serena"],
  alternates: { canonical: "https://rinon.cl/portones-la-serena" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesLaSerenaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican portones metálicos para Metálicos La Serena?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos portones metálicos en Metálicos La Serena. El plazo de fabricación depende del modelo: corredizo o batiente. Cotiza por WhatsApp con las medidas del vano." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación tarda entre 3 y 7 días hábiles según el volumen del pedido. La instalación se realiza en un día para la mayoría de los proyectos residenciales. Coordina la fecha al momento de confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/portones-metalicos" className="hover:text-gray-600">Portones Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">La Serena</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · IV Región de Coquimbo · Resistente al sol</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portones Metálicos para La Serena y Coquimbo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos portones metálicos para casas y locales en La Serena, Coquimbo y la IV Región. El sol intenso del norte chico decolora la pintura de baja calidad — nuestro acabado electrostático al horno mantiene el color por más de 10 años.</p>
          <a href={wa("Hola, quiero cotizar un portón metálico en La Serena / Coquimbo. Tipo: [CORREDIZO / BATIENTE / AUTOMÁTICO]. Ancho: [DATO]. Alto: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para La Serena</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/portones-santiago", label: "Portones Santiago", desc: "Hub principal de portones" },
            { href: "/portones-automaticos", label: "Portones Automáticos", desc: "Con motorización eléctrica" },
            { href: "/rejas-metalicas-la-serena", label: "Rejas La Serena", desc: "Rejas para casas y locales" },
            { href: "/cercos-perimetrales-la-serena", label: "Cercos La Serena", desc: "Cerco perimetral IV Región" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para La Serena</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, medidas y dirección. Coordinamos despacho a la IV Región.</p>
          <a href={wa("Hola, necesito portón en La Serena. Tipo: [DATO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
