import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Universidades — Literas Metálicas Institucionales | Chile",
  description: "Camarotes metálicos para residencias universitarias, hogares estudiantiles e internados. Fabricante directo. Precio institucional por volumen. Entrega en todo Chile.",
  keywords: ["camarotes para universidades","literas residencia universitaria","camarotes hogar universitario","camas metalicas universidad","camarotes internado universitario","literas metalicas institucionales","fabricante camarotes universidad chile","camarotes residencia estudiantil"],
  alternates: { canonical: "https://rinon.cl/camarotes-para-universidades" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamaroteParaUniversidadesPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Universidades</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Institucional · Todo Chile</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes para Universidades y Residencias Estudiantiles</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Equipamos residencias universitarias, hogares estudiantiles e internados con camarotes metálicos de uso intensivo. Fabricante directo con precio institucional por volumen, entrega coordinada y facturación a nombre de la institución.</p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-desmontable-dormitorio-compartido.jpg" alt="Camarote desmontable metálico en dormitorio compartido universitario" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa("Hola, necesito cotizar camarotes para residencia universitaria/hogar estudiantil. Cantidad: [UNIDADES]. Institución: [NOMBRE]. Configuración: [2 / 3 NIVELES]. Ciudad de entrega: [CIUDAD].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para mi institución</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            { titulo: "Residencias universitarias", desc: "Camarotes de 2 niveles con colchoneta, escritorio lateral opcional y espacio de almacenamiento bajo la cama inferior." },
            { titulo: "Hogares estudiantiles", desc: "Configuraciones compactas para maximizar la capacidad de habitaciones de 12–18 m², con accesos seguros al nivel superior." },
            { titulo: "Internados y pensionados", desc: "Acabado robusto para uso continuo. Pintura electrostática al horno resistente a golpes, rayones y limpieza frecuente con desinfectantes." },
            { titulo: "Pedidos institucionales", desc: "Cotización con precio unitario por volumen. Factura electrónica, boleta o factura exenta. Coordinamos entregas por etapas." },
          ].map((item) => (
            <div key={item.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-800">
          <strong>Para compras de 20 unidades o más:</strong> ofrecemos precio institucional con descuento, plazo de pago coordinado con tesorería y soporte post-entrega. Contáctanos con los datos de tu institución y el requerimiento.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-militares", label: "Camarotes Militares", desc: "Para cuarteles e institutos" },
            { href: "/camarotes-para-internados", label: "Camarotes para Internados", desc: "Colegios e institutos" },
            { href: "/camarote-triple", label: "Camarote Triple", desc: "3 plazas para máxima capacidad" },
            { href: "/camarotes-al-por-mayor", label: "Precio al Por Mayor", desc: "Descuentos por volumen" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotización institucional sin compromiso</h2>
          <p className="text-gray-400 text-sm mb-5">Indícanos la cantidad, configuración y ciudad de entrega. Respondemos con precio y plazo el mismo día.</p>
          <a href={wa("Hola, necesito cotizar camarotes para universidad/residencia estudiantil. Cantidad: [UNIDADES]. Ciudad: [CIUDAD]. Institución: [NOMBRE].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
