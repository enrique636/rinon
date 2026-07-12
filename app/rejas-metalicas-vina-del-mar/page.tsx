import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Metálicas Viña del Mar — Fabricante con Instalación | V Región",
  description: "Rejas metálicas para casas y locales en Viña del Mar. Acabado marino resistente a la humedad y brisa salina. Fabricante. Instalación en Viña del Mar y Concón.",
  keywords: ["rejas metalicas vina del mar","reja metalica viña del mar","rejas para casa viña del mar","reja frontal vina del mar","rejas metalicas quinta region costa","reja metalica concon","fabricante rejas vina del mar","precio reja metalica vina del mar"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-vina-del-mar" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasVinaDelMarPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan rejas metálicas en Viña del Mar?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos rejas metálicas en Viña del Mar. Cotizamos el mismo día — necesitamos el ancho y alto del frente, más si incluye portón. Pintamos al horno para mayor durabilidad." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación tarda entre 3 y 7 días hábiles según el volumen del pedido. La instalación se realiza en un día para la mayoría de los proyectos residenciales. Coordina la fecha al momento de confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas-santiago" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Viña del Mar</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · V Región · Acabado resistente a brisa marina</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas para Viña del Mar y Concón</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos rejas metálicas para casas y locales en Viña del Mar, Concón, Quilpué y alrededores. La brisa marina del Pacífico acelera la corrosión del acero sin tratamiento — recomendamos siempre la pintura electrostática al horno que resiste hasta 10 años en zona costera.</p>
          <a href={wa("Hola, necesito cotizar rejas metálicas para Viña del Mar / Concón. Tipo: [FRONTIS / VENTANA / CERCO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Viña del Mar</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-vina-del-mar", label: "Cercos Viña del Mar", desc: "Cerco perimetral zona costera" },
            { href: "/camarotes-vina-del-mar", label: "Camarotes Viña del Mar", desc: "Literas metálicas" },
            { href: "/rejas-metalicas-valparaiso", label: "Rejas Valparaíso", desc: "Ciudad vecina V Región" },
            { href: "/rejas-metalicas-precio", label: "Precio de Rejas", desc: "Rangos actualizados" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Viña del Mar</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, medidas y dirección. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito rejas para Viña del Mar. Tipo: [DATO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
