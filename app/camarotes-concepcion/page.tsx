import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Metálicos Concepción — Fabricante con Despacho al Sur",
  description: "Camarotes metálicos para Concepción, Talcahuano y el Gran Concepción. Fabricante en Santiago con despacho a toda la Región del Biobío. Uso residencial, universitario e industrial.",
  keywords: ["camarotes concepcion", "camarotes metalicos concepcion", "camarote concepcion chile", "camarotes biobio", "camarote para campamento concepcion", "camarotes talcahuano", "camarotes gran concepcion", "comprar camarote concepcion", "camarotes universitarios concepcion"],
  alternates: { canonical: "https://rinon.cl/camarotes-concepcion" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamarotesConcepcionPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican camarotes para Concepción?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos en Santiago y despachamos a Concepción, Talcahuano, Coronel, Los Ángeles y toda la Región del Biobío. El transporte se coordina al cotizar según la cantidad y la dirección de entrega." } },
          { "@type": "Question", name: "¿Cuánto demora el envío a Concepción?", acceptedAnswer: { "@type": "Answer", text: "El plazo de despacho a Concepción depende de la cantidad de camarotes y la disponibilidad del transporte. Para pedidos individuales el plazo es de pocos días hábiles desde confirmación. Para pedidos grandes se coordina según el proyecto." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link><span>/</span>
          <span className="text-gray-700 font-medium">Concepción</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho Biobío</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos para Concepción y el Biobío</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos camarotes metálicos en Santiago y despachamos a Concepción, Talcahuano, Los Ángeles, Coronel y toda la Región del Biobío. Para residencias universitarias, campamentos industriales, pensiones y uso familiar.
          </p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-faenero-campamento-construccion.jpg" alt="Camarote faenero construcción Concepción — despacho Biobío" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa("Hola, necesito cotizar camarotes metálicos para Concepción / Biobío. Modelo: [MODELO]. Cantidad: [N] unidades. Dirección de entrega: [DIRECCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Usos más frecuentes en el Biobío</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Residencias universitarias", d: "Concepción tiene alta densidad universitaria (UdeC, UCSC, UBB). Camarotes para pensiones, residencias y departamentos de estudiantes." },
              { t: "Campamentos industriales y mineros", d: "La región tiene industria pesada, forestal y acuícola. Camarotes de uso intensivo para campamentos de trabajadores." },
              { t: "Pensiones y hospedajes", d: "Casas de pensión para trabajadores del sector industrial de Talcahuano, San Pedro de la Paz y Coronel." },
              { t: "Uso familiar", d: "Camarotes para dormitorios familiares — el modelo más pedido es el doble clásico o el que tiene 2 plazas abajo y 1 plaza arriba." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Modelos disponibles con despacho a Concepción</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/camarote-doble", t: "Camarote doble clásico", d: "1 plaza arriba y 1 plaza abajo. El más vendido. Tubo de acero, pintura electrostática." },
              { href: "/camarote-titanic", t: "Camarote Titanic Pro", d: "Para uso intensivo — campamentos e industria. Tubo de 2\", el más robusto." },
              { href: "/camarote-con-escritorio", t: "Camarote con escritorio", d: "Con escritorio integrado bajo la cama superior. Ideal para estudiantes." },
              { href: "/camarote-dos-plazas-abajo", t: "2 plazas abajo + 1 arriba", d: "Para familias mixtas o dormitorios de varios." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t} →</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes", label: "Ver catálogo completo", desc: "Todos los modelos" },
            { href: "/camarotes-al-por-mayor", label: "Camarotes al por mayor", desc: "Para campamentos y residencias" },
            { href: "/instalacion-camarotes", label: "Instalación", desc: "Cómo funciona el despacho" },
            { href: "/camarotes-antofagasta", label: "Camarotes al norte", desc: "También atendemos Antofagasta" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Para cuándo lo necesitas en Concepción?</h2>
          <p className="text-gray-400 text-sm mb-5">Modelo, cantidad y dirección de entrega. Coordinamos el despacho al Biobío.</p>
          <a href={wa("Hola, necesito camarotes con despacho a Concepción. Modelo: [MODELO]. Cantidad: [N]. Dirección: [DIRECCIÓN, CIUDAD BIOBÍO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
