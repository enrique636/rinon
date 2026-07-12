import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Metálicos Iquique — Literas para Campamentos y Minería | Tarapacá",
  description: "Camarotes metálicos para Iquique y la Región de Tarapacá. Campamentos mineros, ZOFRI y uso institucional. Fabricante. Despacho a Iquique, Pozo Almonte, Pica y Alto Hospicio.",
  keywords: ["camarotes iquique","literas metalicas iquique","camarotes tarapaca","camarotes mineria iquique","camarotes zofri iquique","literas iquique chile","camarotes alto hospicio","camarotes pozo almonte","fabricante camarotes iquique"],
  alternates: { canonical: "https://rinon.cl/camarotes-iquique" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamaroteIquiquePage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes a Iquique?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a Iquique. Para Santiago RM el despacho incluye instalación. Para regiones coordinamos transporte al cotizar — solo necesitamos la dirección." } },
          { "@type": "Question", name: "¿Cuánto tarda el despacho?", acceptedAnswer: { "@type": "Answer", text: "En Santiago RM la entrega e instalación se realiza en un día acordado, generalmente dentro de la semana de confirmado el pedido. Para regiones coordinamos transporte — el plazo depende de la distancia y disponibilidad de flete." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Iquique</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Despacho a Tarapacá · Campamentos y minería</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos para Iquique y Región de Tarapacá</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Proveemos camarotes metálicos a empresas, campamentos mineros y establecimientos en Iquique, Alto Hospicio, Pozo Almonte, Pica y toda la Región de Tarapacá. Fabricante directo con despacho coordinado al norte.</p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-faenero-cuartel-carabineros.jpg" alt="Camarote institucional metálico Iquique — cuarteles y campamentos" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa("Hola, necesito camarotes metálicos para Iquique / Región de Tarapacá. Cantidad: [UNIDADES]. Uso: [MINERÍA / EMPRESA / HABITACIONAL / OTRO]. Dirección de entrega: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Iquique</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            { titulo: "Campamentos mineros", desc: "Iquique es el centro logístico de la minería de Tarapacá. Proveemos camarotes para campamentos de Collahuasi, Doña Inés, Quebrada Blanca y proyectos en la precordillera." },
            { titulo: "ZOFRI y logística", desc: "Bodegas, talleres y espacios de descanso para personal en la Zona Franca de Iquique y el parque industrial de Alto Hospicio." },
            { titulo: "Uso habitacional", desc: "Camarotes para casas, departamentos y piezas de arriendo en la conurbación Iquique–Alto Hospicio." },
            { titulo: "Despacho coordinado", desc: "Los envíos al norte requieren coordinación especial de transporte. Cotizamos despacho incluido para pedidos de 10 unidades o más." },
          ].map((item) => (
            <div key={item.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-antofagasta", label: "Camarotes Antofagasta", desc: "II Región, Calama y Atacama" },
            { href: "/camarotes-mineria", label: "Camarotes para Minería", desc: "Campamentos y faenas" },
            { href: "/camarotes-al-por-mayor", label: "Precio al Por Mayor", desc: "Descuento por volumen" },
            { href: "/camarotes-metalicos", label: "Ver catálogo completo", desc: "Todos los modelos" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Iquique</h2>
          <p className="text-gray-400 text-sm mb-5">Cantidad, uso y dirección de entrega en Tarapacá. Coordinamos despacho al norte.</p>
          <a href={wa("Hola, necesito camarotes para Iquique. Cantidad: [UNIDADES]. Uso: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
