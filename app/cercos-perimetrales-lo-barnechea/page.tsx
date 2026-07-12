import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Lo Barnechea — Fabricante con Instalación | Oriente RM",
  description: "Cercos perimetrales en Lo Barnechea. Fabricante directo. Cercos tubulares y galvanizados para casas, parcelas y condominios del oriente norte de Santiago.",
  keywords: ["cercos perimetrales lo barnechea","cerco perimetral lo barnechea santiago","cierre perimetral lo barnechea rm","cerco metalico lo barnechea","fabricante cercos lo barnechea","instalacion cerco lo barnechea"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-lo-barnechea" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesLoBarnecheaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan cercos perimetrales en Lo Barnechea?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos los cercos en nuestro taller en Santiago y realizamos la instalación en Lo Barnechea. Cotizamos el mismo día — solo necesitamos los metros lineales, la altura y el tipo de uso (casa, condominio o industria)." } },
          { "@type": "Question", name: "¿Cuánto cuesta el metro lineal de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo: malla eslabonada es la opción más económica, tubo estructural pintado al horno tiene un costo medio, y el cerco galvanizado es el de mayor durabilidad y costo. Cotiza por WhatsApp con los metros y altura para obtener un precio exacto." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos RM</Link><span>/</span>
          <span className="text-gray-700 font-medium">Lo Barnechea</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Oriente norte RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales en Lo Barnechea — Oriente Norte de Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Lo Barnechea combina condominios de alta gama con parcelas rurales en los faldeos de los Andes. Para condominios, cercos tubulares al horno con acabado premium. Para parcelas y zonas rurales, recomendamos galvanizado en frío por la exposición a mayor humedad y viento.</p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800">
            <strong>Zonas rurales de Lo Barnechea:</strong> Las parcelas en sectores como Farellones, La Dehesa alta o El Arrayán están expuestas a mayor humedad invernal. Para estas ubicaciones recomendamos cercos con recubrimiento galvanizado en frío para mayor durabilidad.
          </div>
          <a href={wa("Hola, necesito cotizar cerco perimetral en Lo Barnechea. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CONDOMINIO / PARCELA / CASA]. Con portón: [SÍ / NO]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco perimetral</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-vitacura", label: "Cercos Vitacura", desc: "Oriente premium" },
            { href: "/cercos-perimetrales-las-condes", label: "Cercos Las Condes", desc: "Oriente RM" },
            { href: "/rejas-metalicas-lo-barnechea", label: "Rejas Lo Barnechea", desc: "Frontis y ventanas" },
            { href: "/pintura-electrostatica-lo-barnechea", label: "Pintura Lo Barnechea", desc: "Acabado al horno" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Lo Barnechea</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, uso y sector. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cerco perimetral en Lo Barnechea. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
