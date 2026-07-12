import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Metálicas Concepción — Fabricante con Instalación | VIII Región",
  description: "Rejas metálicas para casas, locales y empresas en Concepción y el Gran Concepción. Frontis, ventanas, cerco. Fabricante. Instalación en toda la VIII Región.",
  keywords: ["rejas metalicas concepcion","reja metalica concepcion","rejas para casa concepcion","reja frontal concepcion","rejas metalicas biobio","reja metalica talcahuano","rejas metalicas octava region","fabricante rejas concepcion","precio reja metalica concepcion"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-concepcion" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasConcepcioPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan rejas metálicas en Concepción?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos rejas metálicas en Concepción. Cotizamos el mismo día — necesitamos el ancho y alto del frente, más si incluye portón. Pintamos al horno para mayor durabilidad." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación tarda entre 3 y 7 días hábiles según el volumen del pedido. La instalación se realiza en un día para la mayoría de los proyectos residenciales. Coordina la fecha al momento de confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas-santiago" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Concepción</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Gran Concepción · Instalación VIII Región</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas para Concepción y Gran Concepción</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos rejas metálicas para casas, departamentos y locales en Concepción, Talcahuano, Hualpén, San Pedro de la Paz y toda la conurbación del Gran Concepción.</p>
          <a href={wa("Hola, necesito cotizar rejas metálicas para Concepción. Tipo: [FRONTIS / VENTANA / BALCÓN / CERCO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Concepción</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            { titulo: "Rejas para casas", desc: "Protección frontal y lateral para casas en Concepción, San Pedro, Chiguayante y sectores residenciales del Gran Concepción." },
            { titulo: "Ventanas y balcones", desc: "Rejas para ventanas de primer y segundo piso. Especialmente demandadas en la zona centro de Concepción." },
            { titulo: "Locales comerciales", desc: "Rejas de cierre para locales en el centro, mall del centro y barrios comerciales." },
            { titulo: "Cerco perimetral", desc: "Cierre de perímetro para casas con jardín en San Pedro de la Paz, Chiguayante y Coronel." },
          ].map((item) => (
            <div key={item.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-concepcion", label: "Cercos Concepción", desc: "Cerco perimetral VIII Región" },
            { href: "/rejas-metalicas-santiago", label: "Rejas en Santiago", desc: "Comunas RM — ver modelos" },
            { href: "/portones-metalicos", label: "Portones Metálicos", desc: "Acceso vehicular" },
            { href: "/rejas-metalicas-precio", label: "Precio de Rejas", desc: "Rangos de precio" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Concepción</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, medidas y dirección. Coordinamos instalación en el Gran Concepción.</p>
          <a href={wa("Hola, necesito rejas metálicas para Concepción. Tipo: [DATO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
