import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Adultos — Literas Metálicas de 1,5 y 2 Plazas | Chile",
  description: "Camarotes metálicos diseñados para adultos. Medidas amplias, mayor capacidad de carga y acabado robusto. 1,5 plazas y 2 plazas. Fabricante directo en Chile.",
  keywords: ["camarotes para adultos","literas adultos chile","camarote adulto metalico","literas adultos 2 plazas","camarote adulto 1 plaza y media","cama camarote adultos","literas adultos precio chile","camarote metalico adultos santiago","literas adultos resistentes"],
  alternates: { canonical: "https://rinon.cl/camarotes-adultos" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamarotesAdultosPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes a para Adultos?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a para Adultos. Para Santiago RM el despacho incluye instalación. Para regiones coordinamos transporte al cotizar — solo necesitamos la dirección." } },
          { "@type": "Question", name: "¿Cuánto tarda el despacho?", acceptedAnswer: { "@type": "Answer", text: "En Santiago RM la entrega e instalación se realiza en un día acordado, generalmente dentro de la semana de confirmado el pedido. Para regiones coordinamos transporte — el plazo depende de la distancia y disponibilidad de flete." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Adultos</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Medidas amplias · Mayor capacidad de carga · Fabricante directo</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos para Adultos</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Los camarotes para adultos no son simplemente "más grandes". Tienen mayor capacidad de carga por nivel (150 kg mínimo), medidas más amplias (1,5 y 2 plazas), longitud de 200 cm y estructura dimensionada para el peso y movimiento de adultos. Fabricamos en Santiago y despachamos a todo Chile.</p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-petalo-dormitorio-hermanas.jpg" alt="Camarote pétalo metálico negro en dormitorio compartido de hermanas" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa("Hola, necesito cotizar camarote para adultos. Medida: [1 PLAZA / 1,5 PLAZAS / 2 PLAZAS]. Cantidad: [UNIDADES]. Color: [DATO]. Uso: [HABITACIONAL / CAMPAMENTO / OTRO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar camarote adulto</a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Qué hace diferente un camarote para adulto?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Característica</th>
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Camarote para adulto</th>
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Camarote infantil estándar</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr><td className="p-3 border border-gray-100 font-medium text-gray-700">Largo</td><td className="p-3 border border-gray-100">190–200 cm</td><td className="p-3 border border-gray-100">190 cm (justo para adulto)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 border border-gray-100 font-medium text-gray-700">Ancho</td><td className="p-3 border border-gray-100">120–140 cm (1,5 o 2 plazas)</td><td className="p-3 border border-gray-100">90 cm (1 plaza)</td></tr>
                <tr><td className="p-3 border border-gray-100 font-medium text-gray-700">Carga por nivel</td><td className="p-3 border border-gray-100">150–200 kg</td><td className="p-3 border border-gray-100">80–120 kg</td></tr>
                <tr className="bg-gray-50"><td className="p-3 border border-gray-100 font-medium text-gray-700">Espesor tubo</td><td className="p-3 border border-gray-100">1,5 mm recomendado</td><td className="p-3 border border-gray-100">1,2 mm suficiente</td></tr>
                <tr><td className="p-3 border border-gray-100 font-medium text-gray-700">Escalera</td><td className="p-3 border border-gray-100">Peldaños 20+ cm de ancho</td><td className="p-3 border border-gray-100">Peldaños estándar</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/litera-metalica", label: "Litera Metálica", desc: "Todos los modelos y medidas" },
            { href: "/cama-loft-metalica", label: "Cama Loft para Adulto", desc: "Cama arriba, espacio libre abajo" },
            { href: "/camarote-con-escritorio", label: "Camarote con Escritorio", desc: "Para adultos que trabajan en casa" },
            { href: "/camarotes-metalicos", label: "Ver catálogo completo", desc: "Todos los modelos disponibles" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu camarote para adultos</h2>
          <p className="text-gray-400 text-sm mb-5">Medida, color y uso. Fabricamos a medida exacta si lo necesitas.</p>
          <a href={wa("Hola, necesito camarote para adultos. Medida: [1,5 PLAZAS / 2 PLAZAS]. Color: [DATO]. Cantidad: [UNIDADES].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
