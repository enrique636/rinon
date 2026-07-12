import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones Metálicos Santiago — Corredizos, Batientes y Automáticos | Fabricante",
  description: "Portones metálicos para casas y empresas en Santiago. Corredizos, batientes y automáticos. Fabricante con instalación en toda la Región Metropolitana.",
  keywords: ["portones metalicos santiago","porton metalico santiago","porton corredizo santiago","porton batiente santiago","porton automatico santiago","portones para casas santiago rm","fabricante portones santiago","precio porton metalico santiago"],
  alternates: { canonical: "https://rinon.cl/portones-santiago" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

const tipos = [
  { nombre: "Portón corredizo", desc: "Desliza hacia el costado. Ideal para entradas angostas o con poco espacio de apertura frontal." },
  { nombre: "Portón batiente", desc: "Se abre hacia adentro o afuera. Clásico para casas con antejardín amplio." },
  { nombre: "Portón automático", desc: "Motor eléctrico con control remoto. Se adapta a corredizo o batiente." },
  { nombre: "Portón industrial", desc: "Estructura reforzada para galpones, bodegas y patios de empresa." },
];

export default function PortonesSantiagoPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican portones metálicos para Metálicos Santiago?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos portones metálicos en Metálicos Santiago. El plazo de fabricación depende del modelo: corredizo o batiente. Cotiza por WhatsApp con las medidas del vano." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación tarda entre 3 y 7 días hábiles según el volumen del pedido. La instalación se realiza en un día para la mayoría de los proyectos residenciales. Coordina la fecha al momento de confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/portones-metalicos" className="hover:text-gray-600">Portones Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Santiago</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Región Metropolitana · Corredizos · Batientes · Automáticos</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portones Metálicos en Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos portones metálicos para casas, condominios y empresas en toda la Región Metropolitana. Desde el portón corredizo más simple hasta el sistema automático con motorización — fabricación a medida, instalación incluida.</p>
          <a href={wa("Hola, quiero cotizar un portón metálico en Santiago. Tipo: [CORREDIZO / BATIENTE / AUTOMÁTICO / INDUSTRIAL]. Ancho: [DATO]. Alto: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi Portón</a>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tipos de portón disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tipos.map((t) => (
              <div key={t.nombre} className="bg-gray-50 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-1">{t.nombre}</p>
                <p className="text-gray-500 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/portones-corredizos", label: "Portones Corredizos", desc: "Todos los modelos" },
            { href: "/portones-automaticos", label: "Portones Automáticos", desc: "Con motorización eléctrica" },
            { href: "/portones-batientes", label: "Portones Batientes", desc: "Con 1 o 2 hojas" },
            { href: "/portones-industriales", label: "Portones Industriales", desc: "Para galpones y bodegas" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu portón en Santiago</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, medidas y dirección. Venimos a medir sin costo en la RM.</p>
          <a href={wa("Hola, quiero cotizar un portón metálico en Santiago. Tipo: [DATO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
