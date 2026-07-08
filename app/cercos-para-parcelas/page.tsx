import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos para Parcelas de Agrado — Fabricante Santiago | Buenos Pal Catre",
  description: "Cercos metálicos para parcelas de agrado en Chile. Reja tubular, malla y portones vehiculares. Fabricante en Santiago con despacho a toda la zona central. Cotiza por metro lineal.",
  keywords: ["cerco para parcela de agrado", "cercos para parcelas", "reja para parcela", "cierre perimetral parcela", "cerco parcela agrado precio", "cerco metalico parcela chile", "portón parcela de agrado", "cerco para campo", "cierre parcela santiago", "rejas para sitios rurales"],
  alternates: { canonical: "https://rinon.cl/cercos-para-parcelas" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosParaParcelasPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué tipo de cerco es mejor para una parcela de agrado?", acceptedAnswer: { "@type": "Answer", text: "Para parcelas de agrado en Chile lo más frecuente es la combinación de reja tubular en el frontis (para la vista desde la calle) y malla de acero o reja más económica en el resto del perímetro. El portón vehicular puede ser corredizo o batiente según el ancho del acceso." } },
          { "@type": "Question", name: "¿Cuánto cuesta cercar una parcela de agrado?", acceptedAnswer: { "@type": "Answer", text: "El costo depende del perímetro total en metros lineales, el tipo de cerco elegido (reja tubular, malla, galvanizado) y si incluye portón. Cotiza enviándonos el perímetro aproximado y la región donde está la parcela." } },
          { "@type": "Question", name: "¿Pueden hacer cercos para parcelas en regiones fuera de Santiago?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos en Santiago y despachamos a regiones. Para parcelas en la V, VI, VII Región y Región Metropolitana el despacho está disponible. El flete se cotiza según el destino." } },
          { "@type": "Question", name: "¿Conviene galvanizado para un cerco rural?", acceptedAnswer: { "@type": "Answer", text: "Sí, especialmente en zonas húmedas o con exposición a la intemperie permanente. El galvanizado dura décadas sin mantenimiento, lo que para un cerco rural que no recibirá mantenimiento frecuente es la mejor inversión a largo plazo." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Cercos para Parcelas</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho zona central</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos para Parcelas de Agrado en Chile</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos cercos metálicos para parcelas de agrado: reja tubular para el frontis, malla metálica para el perímetro, portón vehicular y puerta peatonal. Todo a medida, con despacho a la zona central de Chile.
          </p>
          <a href={wa("Hola, necesito cotizar un cerco para mi parcela de agrado. El perímetro aproximado es de [METROS] ml. Está ubicada en [REGIÓN/SECTOR].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">La solución más común para parcelas</h2>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-4">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              La mayoría de los dueños de parcelas de agrado en Chile opta por una combinación: <strong>reja tubular en el frontis</strong> (que da buena imagen desde la calle) y <strong>malla de acero o reja más económica en los costados y el fondo</strong> del perímetro. Así el presupuesto se concentra donde más se ve.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              El portón de acceso vehicular es la pieza más importante: si el acceso es amplio (4 m o más), se recomienda portón corredizo. Para accesos de 2 a 3 m, un batiente doble es más económico.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Productos para parcelas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja tubular para el frontis", d: "Tubo cuadrado de 1\" con barrotes verticales. El acabado estándar es pintura negra o gris. Altura recomendada: 1,50 a 1,80 m." },
              { t: "Malla de acero para perímetro", d: "Para cercar los costados y el fondo a menor costo. Opción galvanizada disponible para mayor durabilidad en zonas con lluvia." },
              { t: "Portón vehicular corredizo", d: "Para accesos de 3 m o más. Se desliza lateralmente sin necesidad de espacio de barrido interior." },
              { t: "Portón batiente doble", d: "Para accesos de hasta 3 m. Más económico que el corredizo, ideal cuando hay espacio de barrido disponible." },
              { t: "Puerta peatonal", d: "Acceso peatonal independiente o integrado al portón. Con cerradura o pasador según preferencia." },
              { t: "Galvanizado en caliente", d: "Acabado premium para parcelas en zonas húmedas o con alta exposición climática — dura décadas sin pintura." },
            ].map((item) => (
              <div key={item.t} className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Zonas que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["RM — Curacaví","RM — Melipilla","RM — Talagante","RM — Buin","RM — Pirque","V Región — Casablanca","V Región — Quillota","V Región — San Felipe","VI Región — Rancagua","VI Región — San Fernando","VI Región — Santa Cruz","VII Región — Talca","VII Región — Curicó","Otras regiones — consultar"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas", label: "Rejas metálicas", desc: "Todos los tipos disponibles" },
            { href: "/portones-industriales", label: "Portones vehiculares", desc: "Corredizos y batientes" },
            { href: "/cierres-perimetrales", label: "Cercos perimetrales", desc: "Catálogo completo de cercos" },
            { href: "/rejas-metalicas-por-mayor", label: "Por mayor", desc: "Para proyectos grandes o varios" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros tiene el perímetro de tu parcela?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos la superficie aproximada o el perímetro, la región y qué tipo de cerco prefieres. Cotizamos con flete incluido.</p>
          <a href={wa("Hola, necesito cotizar un cerco para mi parcela de agrado. Perímetro: [METROS] ml aprox. Región: [REGIÓN]. Tipo preferido: [REJA TUBULAR / MALLA / COMBINADO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
