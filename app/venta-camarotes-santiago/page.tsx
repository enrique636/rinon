import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Venta de Camarotes Metálicos en Santiago — Fabricante Directo",
  description: "Venta de camarotes metálicos en Santiago directo del fabricante. Sin distribuidores. Camarotes simples, dobles, con escritorio y para uso intensivo. Despacho e instalación incluida.",
  keywords: ["venta camarotes santiago", "venta camarotes metalicos chile", "donde comprar camarotes santiago", "camarotes venta directa santiago", "comprar camarote metalico santiago", "venta camarotes por mayor santiago", "fabrica camarotes venta directa", "camarotes venta santiago metalicos"],
  alternates: { canonical: "https://rinon.cl/venta-camarotes-santiago" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function VentaCamarotesSantiagoPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Dónde comprar camarotes metálicos en Santiago?", acceptedAnswer: { "@type": "Answer", text: "En Buenos Pal Catre compras directo al fabricante en Santiago — sin pasar por tiendas ni distribuidoras. El precio es más bajo y el camarote se fabrica a las medidas exactas que necesitas. Cotiza por WhatsApp y te respondemos el mismo día." } },
          { "@type": "Question", name: "¿Venden camarotes metálicos por mayor en Santiago?", acceptedAnswer: { "@type": "Answer", text: "Sí. Para pedidos de 5 o más camarotes (hoteles, campamentos, residencias, constructoras) hay precio por mayor. Cotiza con el modelo, la cantidad y la dirección de entrega." } },
          { "@type": "Question", name: "¿Incluye instalación la venta del camarote?", acceptedAnswer: { "@type": "Answer", text: "Sí. La entrega incluye instalación en Santiago — el camarote queda armado y funcionando. No tienes que contratar a nadie más." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Venta de Camarotes en Santiago</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fábrica directa · Santiago · Instalación incluida</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Venta de Camarotes Metálicos en Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Comprás directo al fabricante — sin tiendas, sin distribuidores, sin márgenes encima. El camarote se fabrica a tu medida exacta, llega a tu casa en Santiago y lo instalamos nosotros.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a href={wa("Hola, quiero comprar un camarote metálico en Santiago. ¿Qué modelos tienen disponibles?")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">
              Comprar por WhatsApp
            </a>
            <Link href="/camarotes" className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-600 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm transition-colors">
              Ver catálogo completo
            </Link>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Modelos en venta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/camarote-doble", t: "Camarote doble clásico", d: "1 plaza arriba y 1 plaza abajo. El modelo más vendido. Tubo de acero cuadrado, pintura electrostática. Medidas a elección." },
              { href: "/camarote-titanic", t: "Camarote Titanic Pro", d: "Para uso intensivo — campamentos, residencias y hoteles. El más robusto de la línea. Tubo de 2 pulgadas, soldadura MIG reforzada." },
              { href: "/camarote-con-escritorio", t: "Camarote con escritorio", d: "Integra escritorio bajo la cama superior. Ideal para piezas pequeñas donde conviene aprovechar el espacio vertical." },
              { href: "/camarote-dos-plazas-abajo", t: "2 plazas abajo + 1 arriba", d: "Cama doble abajo y cama de 1 plaza arriba. Para dormitorios mixtos o parejas con hijo." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t} →</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Venta al por mayor en Santiago</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">Para pedidos de 5 o más camarotes tenemos precio por mayor. Trabajamos con:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {["Hoteles y hostales","Campamentos mineros","Residencias universitarias","Constructoras","Pensiones y hospedajes","Colegios internados","Faenas y obras","Clínicas y recintos","Campamentos de verano"].map((item) => (
                <div key={item} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600">{item}</div>
              ))}
            </div>
            <div className="mt-4">
              <a href={wa("Hola, necesito cotizar camarotes metálicos al por mayor. Cantidad: [N] unidades. Modelo: [MODELO]. Dirección de entrega: [DIRECCIÓN SANTIAGO].")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors">
                Cotizar por mayor
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/instalacion-camarotes", label: "Cómo funciona la instalación", desc: "Entrega e instalación el mismo día" },
            { href: "/camarotes-oferta", label: "Camarotes al mejor precio", desc: "Por qué somos más baratos que las tiendas" },
            { href: "/camarotes", label: "Catálogo completo", desc: "Todos los modelos disponibles" },
            { href: "/empresas", label: "Para empresas", desc: "Proyectos grandes y por mayor" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Qué modelo estás buscando?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el modelo, las medidas y la comuna. Te cotizamos con entrega e instalación incluida.</p>
          <a href={wa("Hola, quiero comprar un camarote en Santiago. Busco: [MODELO]. Estoy en [COMUNA].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
