import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Metálicas Valparaíso — Fabricante con Instalación | V Región",
  description: "Rejas metálicas para casas, locales y empresas en Valparaíso. Frontis, ventanas, balcones y cerco perimetral. Fabricante. Instalación en toda la V Región.",
  keywords: ["rejas metalicas valparaiso","reja metalica valparaiso","rejas para casa valparaiso","reja frontal valparaiso","rejas metalicas quinta region","reja metalica viña del mar","rejas metalicas region valparaiso","fabricante rejas valparaiso","precio reja metalica valparaiso"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-valparaiso" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasValparaisoPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan rejas metálicas en Valparaíso?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos rejas metálicas en Valparaíso. Cotizamos el mismo día — necesitamos el ancho y alto del frente, más si incluye portón. Pintamos al horno para mayor durabilidad." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación tarda entre 3 y 7 días hábiles según el volumen del pedido. La instalación se realiza en un día para la mayoría de los proyectos residenciales. Coordina la fecha al momento de confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas-santiago" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Valparaíso</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Instalación V Región · Acabado marino</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas para Valparaíso</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos rejas metálicas para casas, locales y edificios en Valparaíso y la V Región. El ambiente marino exige acabado de calidad — usamos pintura electrostática al horno que resiste la humedad y brisa salina de la costa.</p>
          <a href={wa("Hola, necesito cotizar rejas metálicas para Valparaíso. Tipo: [FRONTIS / VENTANA / BALCÓN / CERCO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Valparaíso</a>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8 text-sm text-blue-800">
          <strong>Ambiente marino:</strong> En ciudades costeras la humedad y la brisa salina aceleran la oxidación. La pintura electrostática al horno que usamos resiste mucho mejor que la pintura en spray. Para Valparaíso y Viña del Mar es especialmente importante elegir el acabado correcto.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            { titulo: "Reja de frontis", desc: "La reja que da a la calle en casas de Valparaíso. Considera los desniveles de los cerros y la exposición al viento marino." },
            { titulo: "Rejas para ventanas", desc: "Protección en ventanas de primer y segundo piso. Especialmente importante en sectores de alta densidad urbana." },
            { titulo: "Balcones y terrazas", desc: "Rejas tipo barandal para balcones y terrazas con vista al mar. Diseño que permita la ventilación y la vista." },
            { titulo: "Cerco perimetral", desc: "Cierre completo del perímetro para casas en cerros y sectores residenciales de Valparaíso." },
          ].map((item) => (
            <div key={item.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-santiago", label: "Rejas en Santiago", desc: "Comunas RM" },
            { href: "/cercos-perimetrales-valparaiso", label: "Cercos Valparaíso", desc: "Cerco perimetral V Región" },
            { href: "/portones-metalicos", label: "Portones Metálicos", desc: "Acceso vehicular" },
            { href: "/rejas-metalicas-precio", label: "Precio de Rejas", desc: "Cuánto cuesta una reja" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tus rejas para Valparaíso</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo de reja, medidas y dirección. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito rejas metálicas para Valparaíso. Tipo: [DATO]. Medidas: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
