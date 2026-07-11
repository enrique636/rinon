import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Metálicas Iquique — Fabricante con Instalación | I Región de Tarapacá",
  description: "Rejas metálicas para casas y locales en Iquique y Alto Hospicio. Acabado resistente al sol y salitre del norte. Fabricante. Instalación I Región.",
  keywords: ["rejas metalicas iquique","reja metalica iquique","rejas para casa iquique","reja frontal iquique","rejas metalicas tarapaca","reja metalica alto hospicio","rejas metalicas primera region","fabricante rejas iquique","precio reja metalica iquique"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-iquique" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasIquiquePage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas-santiago" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Iquique</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · I Región Tarapacá · Resistente al salitre</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas para Iquique y Alto Hospicio</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos rejas metálicas para casas y locales en Iquique, Alto Hospicio y la I Región de Tarapacá. La brisa marina del Pacífico y la radiación UV intensa del norte exigen acabados de calidad — usamos pintura electrostática al horno con capa anticorrosivo incluida.</p>
          <a href={wa("Hola, necesito cotizar rejas metálicas para Iquique / Alto Hospicio. Tipo: [FRONTIS / VENTANA / CERCO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Iquique</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-iquique", label: "Cercos Iquique", desc: "Cerco perimetral I Región" },
            { href: "/camarotes-iquique", label: "Camarotes Iquique", desc: "Literas metálicas" },
            { href: "/rejas-metalicas-santiago", label: "Ver todos los modelos", desc: "Catálogo completo" },
            { href: "/rejas-metalicas-precio", label: "Precio de Rejas", desc: "Rangos actualizados" },
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
          <a href={wa("Hola, necesito rejas para Iquique. Tipo: [DATO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
