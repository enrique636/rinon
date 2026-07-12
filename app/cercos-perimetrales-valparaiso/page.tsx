import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Valparaíso y Viña del Mar — Fabricante Chile",
  description: "Cercos perimetrales metálicos para Valparaíso, Viña del Mar y la V Región. Fabricante en Santiago, despacho a toda la costa. Reja galvanizada resistente a la corrosión marina.",
  keywords: ["cercos perimetrales valparaiso", "reja metalica valparaiso", "cerco perimetral viña del mar", "reja galvanizada valparaiso", "cerco metalico quinta region", "fabrica cercos valparaiso", "rejas metalicas vina del mar", "cerco perimetral san antonio", "rejas metalicas quilpue"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-valparaiso" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosValparaisoPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan cercos perimetrales en Valparaíso y Viña del Mar?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos los cercos en nuestro taller en Santiago y realizamos la instalación en Valparaíso y Viña del Mar. Cotizamos el mismo día — solo necesitamos los metros lineales, la altura y el tipo de uso (casa, condominio o industria)." } },
          { "@type": "Question", name: "¿Cuánto cuesta el metro lineal de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo: malla eslabonada es la opción más económica, tubo estructural pintado al horno tiene un costo medio, y el cerco galvanizado es el de mayor durabilidad y costo. Cotiza por WhatsApp con los metros y altura para obtener un precio exacto." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Valparaíso</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho V Región</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales para Valparaíso y Viña del Mar</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Fabricamos cercos metálicos en Santiago y despachamos a Valparaíso, Viña del Mar, San Antonio, Quilpué, Villa Alemana y toda la V Región. Para la zona costera recomendamos reja galvanizada — resistencia máxima a la corrosión marina.
          </p>
          <a href={wa("Hola, necesito cercos perimetrales para Valparaíso/Viña del Mar. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-2 text-sm">Zona costera — recomendamos galvanizado</h3>
            <p className="text-blue-700 text-xs leading-relaxed">En Valparaíso y Viña del Mar la sal marina acelera la corrosión del acero. Para cercos en primera y segunda línea costera o zonas con exposición al viento marino, recomendamos galvanizado en caliente — la protección más duradera disponible.</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades que atendemos en la V Región</h2>
          <div className="flex flex-wrap gap-2">
            {["Valparaíso","Viña del Mar","San Antonio","Quilpué","Villa Alemana","Quillota","Los Andes","San Felipe","La Calera","Limache","Casablanca","Cartagena","El Quisco","Algarrobo"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas", label: "Rejas metálicas", desc: "Todos los tipos disponibles" },
            { href: "/portones-metalicos", label: "Portones metálicos", desc: "Corredizos y batientes" },
            { href: "/cierres-perimetrales", label: "Ver todos los cercos", desc: "Catálogo completo" },
            { href: "/camarotes-los-andes", label: "Camarotes Los Andes", desc: "También fabricamos camarotes para la V Región" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Proyecto en Valparaíso o Viña del Mar</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el tipo de cerco, los metros y la ciudad. Cotizamos con flete incluido.</p>
          <a href={wa("Hola, necesito cotizar cercos perimetrales para [CIUDAD V REGIÓN]. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
