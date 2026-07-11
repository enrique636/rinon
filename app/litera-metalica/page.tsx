import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Litera Metálica — Fabricante de Literas de Acero | Santiago Chile",
  description: "Literas metálicas fabricadas en acero. 1 plaza, 1,5 plazas y 2 plazas. Para dormitorios, habitaciones y uso institucional. Fabricante directo en Santiago. Despacho a Chile.",
  keywords: ["litera metalica","literas metalicas chile","litera de acero","litera metalica santiago","literas metalicas precio","litera metalica adultos","litera metalica niños","litera metalica 1 plaza","fabricante literas metalicas","litera metalica dos plazas"],
  alternates: { canonical: "https://rinon.cl/litera-metalica" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

const faq = [
  { q: "¿Qué diferencia hay entre litera y camarote?", a: "Ninguna en la práctica: son exactamente lo mismo. 'Litera' es el término que se usa más en España y en algunos contextos de Chile; 'camarote' es el término más común en Chile y el resto de Latinoamérica. Fabricamos el mismo producto." },
  { q: "¿Las literas metálicas son más resistentes que las de madera?", a: "Sí. El acero con soldadura MIG tiene mayor resistencia a la flexión y no se reseca, pudre ni astilla con el tiempo. Con pintura electrostática al horno, el acabado dura muchos más años que el barniz de madera." },
  { q: "¿Fabrican literas para adultos?", a: "Sí. Las medidas estándar son 190 cm de largo, que es el estándar adulto. Las medidas de 90, 120 y 140 cm de ancho aplican tanto para niños como para adultos. También hacemos literas de 200 cm de largo si se requiere." },
  { q: "¿Puedo pedir la litera en un color específico?", a: "Sí. La pintura electrostática al horno permite cualquier color del catálogo RAL. Los colores más solicitados son negro, blanco roto, gris antracita y café metálico." },
];

export default function LiteraMetalicaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Litera Metálica</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · A medida · Acero pintado al horno</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Litera Metálica — Fabricante Directo en Chile</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos literas metálicas (camarotes de acero) para dormitorios, habitaciones compartidas y uso institucional. Estructura en tubo de acero con pintura electrostática al horno. Disponibles en múltiples medidas y colores a pedido.</p>
          <a href={wa("Hola, necesito cotizar litera metálica. Medida: [1 PLAZA / 1,5 PLAZAS / 2 PLAZAS]. Color: [DATO]. Cantidad: [UNIDADES]. ¿Con escalera lateral o diagonal?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar litera metálica</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { titulo: "1 plaza (90 cm)", desc: "La más común. Para niños, adolescentes y dormitorios de trabajo. Ocupa el mínimo espacio horizontal." },
            { titulo: "1,5 plazas (120 cm)", desc: "Ideal para adolescentes mayores y adultos que prefieren más espacio sin ir a 2 plazas completas." },
            { titulo: "2 plazas (140 cm)", desc: "Para adultos o cuando se quiere mayor comodidad en cada nivel. También disponible en 160 cm." },
          ].map((f) => (
            <div key={f.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{f.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faq.map((f) => (
              <div key={f.q} className="border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-metalicos", label: "Ver todos los modelos", desc: "Catálogo completo de camarotes" },
            { href: "/cama-loft-metalica", label: "Cama Loft Metálica", desc: "Una sola plaza, espacio libre abajo" },
            { href: "/camarote-triple", label: "Litera Triple", desc: "3 plazas para máxima capacidad" },
            { href: "/camarote-con-escritorio", label: "Litera con Escritorio", desc: "Cama + espacio de estudio" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Pide tu litera a medida</h2>
          <p className="text-gray-400 text-sm mb-5">Medida, color y cantidad. Cotizamos gratis. Fabricamos en Santiago y despachamos a todo Chile.</p>
          <a href={wa("Hola, quiero cotizar litera metálica. Medida: [DATO]. Color: [DATO]. Cantidad: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
        })}} />
      </div>
    </div>
  );
}
