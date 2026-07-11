import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Hostal — Precio Mayorista Fabricante | Camarotes Chile",
  description: "Camarotes metálicos para hostales, albergues y residencias estudiantiles. Precio mayorista directo del fabricante. Desde 5 unidades. Despacho nacional.",
  keywords: ["camarotes para hostal", "camarotes albergue Chile", "literas hostal precio", "camarotes residencia estudiantil", "camarotes hostal precio mayorista", "literas para hostal Chile"],
  alternates: { canonical: "https://rinon.cl/camarotes-hostal" },
  openGraph: { title: "Camarotes para Hostal — Precio Mayorista Directo del Fabricante", description: "Camarotes metálicos para hostales y albergues. Fabricante directo, precio mayorista.", type: "website", locale: "es_CL" },
};

function getWA(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

export default function CamarotesHostalPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Tienen camarotes especiales para hostales?", acceptedAnswer: { "@type": "Answer", text: "Sí. Para hostales recomendamos el camarote estándar de 2 plazas y el camarote nido (que se puede separar). Ambos son robustos para uso intensivo, fáciles de armar/desarmar y de lavar. Precio mayorista desde 5 unidades." } },
          { "@type": "Question", name: "¿Cuántas unidades es el mínimo para precio mayorista?", acceptedAnswer: { "@type": "Answer", text: "Cotizamos desde 5 unidades con precio preferencial. Para pedidos de 10 o más, el precio mejora significativamente." } },
          { "@type": "Question", name: "¿Pueden personalizar el color para que combine con la decoración del hostal?", acceptedAnswer: { "@type": "Answer", text: "Para pedidos grandes podemos explorar opciones de colores. Consúltanos al cotizar y lo evaluamos según el volumen del pedido." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/empresas" className="hover:text-gray-600">Empresas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Hostales</span>
        </nav>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">🛏️ Hostales · Albergues · Residencias · Precio mayorista</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes para Hostal — Precio Mayorista del Fabricante</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">Somos fabricantes. Vendemos camarotes metálicos directamente a hostales, albergues y residencias estudiantiles con precio mayorista. Sin intermediarios — el precio que recibes es precio de fábrica, con la calidad que exige el uso intensivo de la hospitalidad.</p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-triple-dormitorio-hostal.jpg" alt="Camarote triple metálico para hostal y albergue Chile" className="w-full object-cover" loading="lazy" />
          </div>
<a href={getWA("Hola, tengo un hostal y quiero cotizar camarotes. ¿Cuántas unidades necesito para precio mayorista?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para mi hostal</a>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Por qué camarote metálico en un hostal?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { emoji: "💪", t: "Resistente al uso intensivo", d: "Soporta el uso diario de múltiples huéspedes sin deformarse ni crujir. El acero dura décadas." },
              { emoji: "🧹", t: "Fácil de limpiar", d: "La pintura sobre acero se limpia en segundos. Sin porosidad ni absorción de olores." },
              { emoji: "🔇", t: "Sin ruidos", d: "Las uniones soldadas eliminan los crujidos que generan mal review en Booking." },
              { emoji: "⚖️", t: "Sin pandeo", d: "El acero no cede bajo el peso. El sommier superior soporta igual que el inferior, siempre." },
              { emoji: "📦", t: "Fácil de mover", d: "Si reorganizas las habitaciones, el camarote se desmonta y rearma sin perder estructura." },
              { emoji: "💰", t: "Precio mayorista", d: "Comprando directo al fabricante, el costo por cama es menor que en cualquier tienda." },
            ].map(v => (
              <div key={v.t} className="flex gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl">{v.emoji}</span>
                <div><h3 className="font-semibold text-gray-900 text-sm mb-1">{v.t}</h3><p className="text-gray-500 text-xs leading-relaxed">{v.d}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Modelos recomendados para hostal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { nombre: "Camarote Estándar 2 Plazas", desc: "El más popular para dorm de 4-6 personas. Sólido, silencioso, fácil acceso por escalera lateral.", href: "/camarote-doble" },
              { nombre: "Camarote Nido", desc: "Se puede usar apilado o separado. Ideal si quieres flexibilidad para adaptar el dorm según ocupación.", href: "/camarote-nido" },
            ].map(m => (
              <div key={m.nombre} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 transition-all">
                <h3 className="font-bold text-gray-900 mb-2">{m.nombre}</h3>
                <p className="text-gray-500 text-sm mb-4">{m.desc}</p>
                <div className="flex gap-2">
                  <a href={getWA(`Hola, quiero cotizar el ${m.nombre} para mi hostal. ¿Cuál es el precio mayorista?`)} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#25D366] text-white font-semibold rounded-lg px-3 py-1.5 hover:bg-[#1ebe5d] transition-colors">Cotizar mayorista</a>
                  <Link href={m.href} className="text-xs border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">Ver producto</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Tienen camarotes para dorm de 4, 6 o 8 camas?", a: "Sí. Para un dorm de 4 personas necesitas 2 camarotes. Para 6 personas, 3 camarotes. Para 8 personas, 4 camarotes. El precio mejora cuantos más pides." },
              { q: "¿Puedo visitar para ver la calidad antes de comprar?", a: "Sí. Coordina una visita por WhatsApp. Puedes ver los modelos en persona antes de hacer el pedido." },
              { q: "¿Hacen despacho a todo Chile para hostales?", a: "Sí. Para pedidos de hostal despachamos a todo Chile en camión de carga. El flete se cotiza según destino y volumen." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos camarotes necesitas para tu hostal?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos cuántas camas y te enviamos cotización mayorista.</p>
          <a href={getWA("Hola, tengo un hostal/albergue y necesito [CANTIDAD] camarotes. ¿Pueden cotizarme?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
