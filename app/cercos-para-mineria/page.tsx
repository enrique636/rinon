import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos para Minería — Cerco Perimetral Industrial para Faenas | Chile",
  description: "Cercos perimetrales industriales para faenas mineras, plantas concentradoras y campamentos. Alta resistencia. Fabricante con instalación en norte de Chile.",
  keywords: ["cercos para mineria","cerco perimetral mineria","cerco industrial faena minera","cercos atacama mineria","cercos antofagasta mineria","cerco planta concentradora","cerco perimetral industrial chile","cercos faenas mineras","fabricante cercos mineros","cerco perimetral campamento minero"],
  alternates: { canonical: "https://rinon.cl/cercos-para-mineria" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosParaMineriaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican cercos perimetrales para proyectos mineros?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos cercos, mallas separadoras y portones para campamentos mineros, faenas, plantas y bodegas de operaciones. Trabajamos con contratistas y empresas del rubro. Cotiza con metros, altura y destino." } },
          { "@type": "Question", name: "¿Hacen despacho a faenas en el norte?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos a Antofagasta, Calama, Atacama, Sierra Gorda y toda la zona norte. El transporte se coordina al confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Minería</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Industrial · Norte de Chile</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales para Minería e Industria</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos cercos perimetrales industriales para faenas mineras, plantas concentradoras, campamentos y bodegas de explosivos. Estructura resistente a vientos del desierto, temperatura extrema y polvo mineral. Cotización B2B para operadoras mineras y contratistas.</p>
          <a href={wa("Hola, necesito cotizar cerco perimetral para minería / faena industrial. Empresa: [NOMBRE]. Metros lineales: [METROS]. Altura: [ALTURA]. Zona: [ATACAMA / ANTOFAGASTA / TARAPACÁ / OTRA]. Tipo de cerco: [MALLA 3D / MALLA ESLABONADA / REJA / OTRO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco minero</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { titulo: "Resistencia extrema", desc: "Estructura diseñada para vientos de hasta 120 km/h, temperatura entre -5°C y +45°C y polvo mineral constante." },
            { titulo: "Seguridad de instalaciones", desc: "Control de acceso claro para zonas de peligro: áreas de explosivos, plantas de ácido, pozos de lixiviación y campamentos." },
            { titulo: "Cotización B2B", desc: "Precios para operadoras y contratistas. Facturación a nombre de la empresa. Coordinación de transporte y instalación en faena." },
          ].map((f) => (
            <div key={f.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{f.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de cerco para minería</h2>
          <div className="space-y-3">
            {[
              { t: "Malla 3D (panel soldado)", d: "Máxima rigidez. Ideal para perímetros de plantas, campamentos y zonas de acceso controlado. Difícil de deformar o cortar con herramientas básicas." },
              { t: "Malla eslabonada galvanizada", d: "Opción económica para cerrar grandes extensiones de terreno. Zinc galvanizado de largo alcance en zonas desérticas." },
              { t: "Reja tubular", d: "Perímetros que requieren alta visibilidad de adentro hacia afuera. Común en portones de acceso y bodegas de insumos." },
              { t: "Cerco con espino o barba", d: "Perímetros de seguridad reforzada. Malla base + concertina o espino galvanizado en la parte superior." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{item.t}</p>
                <p className="text-gray-500 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/mallas-3d", label: "Mallas 3D", desc: "Panel soldado rígido" },
            { href: "/cercos-para-empresas", label: "Cercos para Empresas", desc: "Industrial y comercial" },
            { href: "/portones-metalicos", label: "Portones Metálicos", desc: "Acceso vehicular y peatonal" },
            { href: "/cercos-perimetrales-precio", label: "Precio por metro lineal", desc: "Referencia de costos" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco perimetral minero</h2>
          <p className="text-gray-400 text-sm mb-5">Empresa, metros lineales y zona. Precio B2B con factura y coordinación de transporte a faena.</p>
          <a href={wa("Hola, necesito cerco perimetral para faena minera. Empresa: [NOMBRE]. Metros: [METROS]. Zona: [REGIÓN / FAENA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
