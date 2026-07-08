import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Copiapó — Minería Atacama | Camarotes Chile",
  description:
    "Camarotes metálicos con despacho a Copiapó. Para campamentos mineros en la Región de Atacama: Caserones, Anglo American, Candelaria. Fabricante directo. Cotización empresarial.",
  keywords: ["camarotes Copiapó", "camarotes minería Atacama", "camas campamento Copiapó", "camarotes Caserones", "literas Copiapó", "equipamiento alojamiento Copiapó"],
  alternates: { canonical: "https://rinon.cl/camarotes-copiapo" },
  openGraph: { title: "Camarotes en Copiapó — Atacama y Sector Minero", description: "Fabricante de camarotes con despacho a Copiapó para minería y residencial.", type: "website", locale: "es_CL" },
};

function getWA(ciudad: string, tipo?: string) {
  const t = tipo ? ` para ${tipo}` : "";
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${t} con despacho a ${ciudad}. ¿Pueden ayudarme?`)}`;
}

export default function CamarotesCopiapóPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Despachan camarotes a Copiapó?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a Copiapó para campamentos mineros en Atacama y uso residencial. El flete se cotiza según volumen y se coordina en camión de carga." } },
          { "@type": "Question", name: "¿Cuánto demora el despacho a Copiapó?", acceptedAnswer: { "@type": "Answer", text: "El tiempo de tránsito en camión de carga desde Santiago a Copiapó es de aproximadamente 10-12 horas (un día hábil). Se suma el tiempo de fabricación según el pedido." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-mineria" className="hover:text-gray-600">Minería</Link><span>/</span>
          <span className="text-gray-700 font-medium">Copiapó</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-full px-4 py-1.5 text-sm text-amber-800 font-medium mb-5">
            ⛏️ Región de Atacama · Caserones · Candelaria
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Copiapó — Minería y Residencial</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Fabricamos y despachamos camarotes metálicos a Copiapó. Capital de la Región de Atacama y centro
            logístico de las operaciones de Caserones, Candelaria, Anglo American y decenas de contratistas
            del sector minero. Precio de fábrica, sin intermediarios.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href={getWA("Copiapó", "campamento minero")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para minería</a>
            <a href={getWA("Copiapó", "uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-3">Mineras y contratistas en Copiapó</h2>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {["Compañía Minera Caserones (Lumina Copper)", "Minera Candelaria (Lundin Mining)", "Anglo American — Mantoverde", "El Salado · Punta del Cobre", "Decenas de empresas contratistas EPCM"].map(item => (
                <li key={item} className="flex gap-2"><span className="text-amber-600">•</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-3">Logística a Copiapó</h2>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {["Tiempo en camión: ~10-12 horas desde Santiago", "Ruta 5 Norte directa", "Despacho coordinado con empresa de carga", "Flete incluido en cotización de volumen", "Entrega en bodega, campamento o domicilio"].map(item => (
                <li key={item} className="flex gap-2"><span className="text-gray-400">✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas sobre Copiapó</h2>
          <div className="space-y-4">
            {[
              { q: "¿Pueden entregar en campamentos fuera de Copiapó (Valle del Huasco, Diego de Almagro)?", a: "Sí. Despachamos a toda la Región de Atacama: Vallenar, Diego de Almagro, Chañaral y sectores aledaños. El flete se cotiza según destino exacto." },
              { q: "¿Los camarotes soportan el clima árido de Atacama?", a: "Sí. El acero con pintura anticorrosiva se comporta excelentemente en climas secos como el de Copiapó. La aridez del norte de Chile es favorable para la conservación del metal." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-amber-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Copiapó?</h2>
          <p className="text-amber-200 text-sm mb-5">Para minería o residencial. Cotización en el día.</p>
          <a href={getWA("Copiapó")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
