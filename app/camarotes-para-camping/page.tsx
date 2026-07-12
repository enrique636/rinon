import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Camping y Glamping — Literas para Refugios y Cabañas | Chile",
  description: "Camarotes metálicos para camping, glamping, refugios de montaña y cabañas. Estructura resistente a la intemperie y condiciones extremas. Fabricante en Chile.",
  keywords: ["camarotes para camping","literas metalicas camping","camarotes glamping","camarotes refugio montana","literas cabanas chile","camarotes metalicos camping","camarotes para cabanas","literas para refugio","camarotes glamping chile","camarote metalico cabana"],
  alternates: { canonical: "https://rinon.cl/camarotes-para-camping" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamarotesParaCampingPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes a para Camping y Glamping?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a para Camping y Glamping. Para Santiago RM el despacho incluye instalación. Para regiones coordinamos transporte al cotizar — solo necesitamos la dirección." } },
          { "@type": "Question", name: "¿Cuánto tarda el despacho?", acceptedAnswer: { "@type": "Answer", text: "En Santiago RM la entrega e instalación se realiza en un día acordado, generalmente dentro de la semana de confirmado el pedido. Para regiones coordinamos transporte — el plazo depende de la distancia y disponibilidad de flete." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Camping y Glamping</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Resistente a intemperie · Refugios y cabañas</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes para Camping, Glamping y Refugios de Montaña</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos camarotes metálicos para refugios de montaña, glamping, cabañas turísticas y campamentos organizados. El metal es la elección correcta para ambientes donde la humedad, los cambios de temperatura y el uso por múltiples personas requieren un mueble que no se pudra ni deforme.</p>
          <div className="my-5 rounded-2xl overflow-hidden shadow-sm"><img src="/images/camarotes/camarote-triple-campamento-premium.jpg" alt="Camarote metálico para camping y glamping Chile" className="w-full object-cover" loading="lazy" /></div>
          <a href={wa("Hola, necesito cotizar camarotes para camping/glamping/refugio. Uso: [REFUGIO MONTAÑA / GLAMPING / CABAÑA / CAMPAMENTO]. Cantidad: [UNIDADES]. Ubicación: [DATO]. ¿Necesitas acabado especial para exterior?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para mi proyecto</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            { titulo: "Refugios de montaña", desc: "Condiciones extremas: nieve, humedad, congelamiento. La estructura metálica no se contrae ni expande con los cambios de temperatura como la madera." },
            { titulo: "Glamping", desc: "Camarotes para domos, carpas permanentes y módulos de glamping. Disponibles en colores oscuros que se integran con la estética natural del espacio." },
            { titulo: "Cabañas turísticas", desc: "Para operadores de cabañas con habitaciones compartidas. Mayor durabilidad y menor mantenimiento que la madera en ambientes húmedos del sur de Chile." },
            { titulo: "Campamentos escolares y scout", desc: "Camarotes para campamentos de verano, retiros escolares y sedes scout. Precio por volumen y posibilidad de arriendo para temporadas." },
          ].map((item) => (
            <div key={item.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-forestales", label: "Camarotes para Forestales", desc: "Campamentos sur de Chile" },
            { href: "/camarotes-hostal", label: "Camarotes para Hostal", desc: "Uso turístico intensivo" },
            { href: "/camarote-triple", label: "Camarote Triple", desc: "3 plazas máxima capacidad" },
            { href: "/camarotes-metalicos", label: "Ver todos los modelos", desc: "Catálogo completo" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Diseña los camarotes para tu espacio</h2>
          <p className="text-gray-400 text-sm mb-5">Refugio, glamping, cabaña o campamento. Cotizamos a medida y con acabados para exterior si se necesita.</p>
          <a href={wa("Hola, necesito camarotes para camping/glamping/refugio. Uso: [DATO]. Cantidad: [UNIDADES]. Ubicación del proyecto: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
