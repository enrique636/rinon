import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Vallenar — Minería Valle del Huasco | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Vallenar. Para campamentos mineros del Valle del Huasco: Pascua-Lama, Altair, Los Colorados. Fabricante directo.",
  keywords: ["camarotes Vallenar", "camarotes minería Vallenar", "camas campamento Vallenar", "camarotes Valle del Huasco", "literas Vallenar"],
  alternates: { canonical: "https://rinon.cl/camarotes-vallenar" },
};

const getWA = (tipo?: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${tipo ? ` para ${tipo}` : ""} con despacho a Vallenar. ¿Pueden ayudarme?`)}`;

export default function CamarotesVallenarPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "¿Despachan camarotes a Vallenar?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a Vallenar para campamentos mineros del Valle del Huasco y uso residencial." } }] }) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-mineria" className="hover:text-gray-600">Minería</Link><span>/</span>
          <span className="text-gray-700 font-medium">Vallenar</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-full px-4 py-1.5 text-sm text-amber-800 font-medium mb-5">⛏️ Valle del Huasco · Pascua-Lama · Los Colorados</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Vallenar — Valle del Huasco</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Fabricamos y despachamos camarotes metálicos a Vallenar, capital de la Provincia del Huasco. Centro logístico de operaciones como Pascua-Lama (Barrick/Frontera), Los Colorados (Altair) y proyectos de la cordillera de Atacama. Precio de fábrica.</p>
        <div className="flex gap-3 flex-wrap mb-10">
          <a href={getWA("campamento minero")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para minería</a>
          <a href={getWA("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-3">Operaciones en el Valle del Huasco</h2>
            <ul className="space-y-1.5 text-sm text-gray-600">{["Barrick / Frontera — Pascua-Lama (Veladero)", "Altair Chile — Los Colorados", "Proyectos de exploración cordilleranos", "Empresas de servicios mineros EPCM"].map(i => <li key={i} className="flex gap-2"><span className="text-amber-600">•</span>{i}</li>)}</ul>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-3">También despachamos a</h2>
            <div className="flex flex-wrap gap-2">{["Alto del Carmen", "Huasco", "Freirina", "Chañaral"].map(c => <span key={c} className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-sm text-gray-600">{c}</span>)}</div>
          </div>
        </div>
        <div className="bg-amber-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Vallenar?</h2>
          <p className="text-amber-200 text-sm mb-5">Cotización en el día.</p>
          <a href={getWA()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
