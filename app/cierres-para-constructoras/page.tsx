import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cierres Perimetrales para Constructoras — Fabricante en Chile | Rinon.cl",
  description: "Cierres perimetrales para constructoras en Chile. Fabricamos e instalamos cierres de obra temporales y definitivos. Factura empresa, despacho nacional, plazos flexibles según avance de obra.",
  keywords: ["cierres perimetrales constructoras", "cierre de obra constructora", "fabricante cierre perimetral constructoras chile", "cierres para obras construccion", "malla cierre obra santiago"],
  alternates: { canonical: "https://rinon.cl/cierres-para-constructoras" },
};

const WA = `https://wa.me/${SITE_CONFIG.whatsapp.numero}`;
const wa = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

export default function CierresConstructorasPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿El cierre perimetral de obra es obligatorio en Chile?", acceptedAnswer: { "@type": "Answer", text: "Sí. La mayoría de los permisos de edificación exigen cierre perimetral del terreno durante la construcción. Los municipios y la SEREMI de Vivienda pueden exigirlo como condición del permiso. El tipo y altura del cierre depende de la normativa comunal específica." } },
          { "@type": "Question", name: "¿Cuánto demora fabricar e instalar un cierre de obra?", acceptedAnswer: { "@type": "Answer", text: "Para cierres estándar de malla electrosoldada, podemos tener fabricación e instalación en 5-10 días hábiles desde aprobada la cotización. Para proyectos más grandes o con especificaciones técnicas particulares, el plazo se coordina según el inicio de obra." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Constructoras</span>
        </nav>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">🏗️ Constructoras · Obras · Factura empresa · Chile</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cierres Perimetrales para Constructoras</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            El cierre perimetral de obra no es solo un requisito legal — es el primer elemento que
            define la imagen de tu proyecto ante el barrio, la municipalidad y el cliente final.
            Fabricamos cierres de obra para constructoras de todos los tamaños, desde un proyecto
            residencial hasta un desarrollo de múltiples torres.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Emitimos factura electrónica. Podemos coordinarnos con el jefe de obra. Plazos adaptables
            al cronograma de construcción. Retiro del cierre al terminar la obra incluido en los proyectos
            con instalación.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={wa("Hola, soy de una constructora y necesito cotizar un cierre perimetral de obra. ¿Pueden ayudarme?")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar cierre de obra</a>
            <Link href="/cierres-perimetrales" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver todos los tipos</Link>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Lo que las constructoras más nos piden</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cierre temporal con retiro incluido", d: "Malla electrosoldada sobre postes fácilmente removibles. Se instala al inicio de la obra y se retira al terminar. Sin obra civil permanente." },
              { t: "Cierre definitivo de proyecto terminado", d: "Cuando el edificio está terminado, el cierre de obra se reemplaza por un cierre definitivo (reja tubular, plancha) que forma parte del condominio." },
              { t: "Cierre para vía pública con valla", d: "Para obras que ocupan parte de la vereda o calzada. Vallas metálicas conformes a la normativa de vialidad de cada municipio." },
              { t: "Accesos integrados", d: "Portones peatonales y vehiculares integrados al cierre. Puertas con cerradura o cadena, según la operativa de la obra." },
            ].map(i => (
              <div key={i.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{i.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{i.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { icon: "🧾", t: "Factura empresa", d: "Factura electrónica para todas las OC" },
            { icon: "📅", t: "Plazos flexibles", d: "Coordinamos con el cronograma de obra" },
            { icon: "🔄", t: "Retiro incluido", d: "En proyectos con instalación, retiro al terminar" },
          ].map(f => (
            <div key={f.t} className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-center">
              <span className="text-3xl block mb-3">{f.icon}</span>
              <p className="font-bold text-gray-900 text-sm mb-1">{f.t}</p>
              <p className="text-gray-500 text-xs">{f.d}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cierres-perimetrales", label: "Todos los tipos de cierre", desc: "Malla, reja, plancha, panel modular" },
            { href: "/cierres-para-obras", label: "Cierres para Obras", desc: "Específico para obras en construcción" },
            { href: "/estructuras-metalicas", label: "Estructuras Metálicas", desc: "Escaleras, mezzanines y más para obra" },
            { href: "/portones-metalicos", label: "Portones Metálicos", desc: "Accesos integrados al cierre" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Solicita cotización para tu proyecto</h2>
          <p className="text-slate-400 text-sm mb-5">Metros lineales, tipo de cierre, plazo. Te respondemos en el día.</p>
          <a href={wa("Hola, necesito cotizar cierre perimetral para una constructora. Les envío detalles del proyecto.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
