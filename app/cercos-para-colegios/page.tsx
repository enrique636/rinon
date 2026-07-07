import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos para Colegios — Fabricante de Cierres para Establecimientos Educacionales",
  description: "Cercos perimetrales para colegios y establecimientos educacionales en Chile. Fabricante directo. Cercos seguros, anti-trepa y con diseño controlado para escuelas, liceos y universidades.",
  keywords: ["cercos para colegios","cerco perimetral colegio","cierre perimetral establecimiento educacional","cerco para escuela","cerco para liceo chile","cerco anti trepa colegio","fabricante cercos colegios chile","cerco perimetral establecimiento educativo","cierre colegio precio","cerco para universidad"],
  alternates: { canonical: "https://dumar.cl/cercos-para-colegios" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosParaColegiosPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Qué altura debe tener el cerco de un colegio?", acceptedAnswer: { "@type": "Answer", text: "Los colegios y liceos en Chile suelen trabajar con cercos de 2,00 a 2,40 m de altura para el perímetro exterior. Para sectores de patio interior o separación de zonas dentro del establecimiento, se usan cercos de 1,20 a 1,80 m. La altura depende del plan regulador comunal y del nivel de seguridad requerido." } },
              { "@type": "Question", name: "¿Qué tipo de cerco se usa en colegios?", acceptedAnswer: { "@type": "Answer", text: "El cerco tubular con barrotes verticales es el más usado en colegios: disuade el escalamiento sin bloquear la visibilidad desde adentro hacia afuera. Para establecimientos con mayor exigencia de seguridad se agrega inclinación anti-trepa en el remate superior." } },
              { "@type": "Question", name: "¿Cuánto cuesta el cerco perimetral de un colegio?", acceptedAnswer: { "@type": "Answer", text: "El precio depende del perímetro total, la altura y el tipo de cerco. Los establecimientos educacionales suelen tener perímetros de 100 a 500 metros lineales. Enviamos cotización detallada para proyectos de este tamaño tras visita técnica o plano del terreno." } },
            ],
          }),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Cercos para Colegios</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Establecimientos educacionales · Seguridad perimetral · Anti-trepa</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales para Colegios y Establecimientos Educacionales</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Un colegio necesita un cerco que proteja sin encerrar — que controle los accesos, disuada el escalamiento y resista el uso intensivo de niños y adolescentes. Fabricamos cercos perimetrales para escuelas, liceos, jardines infantiles y universidades. Proyectos desde cotización hasta instalación.</p>
          <a href={wa("Hola, necesito cotizar cerco perimetral para un colegio o establecimiento educacional. Perímetro aproximado: [METROS] ml. Altura: [ALTURA] m. Tipo de establecimiento: [ESCUELA / LICEO / JARDÍN INFANTIL / UNIVERSIDAD]. Ubicación: [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco para colegio</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lo que exige un cerco para colegio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Control de acceso", d: "El cerco debe canalizar el ingreso y salida hacia puntos controlados — portones de entrada y salidas de emergencia. Ningún punto sin control." },
              { t: "Disuasión de escalamiento", d: "2,00–2,40 m de altura es el estándar. Para mayor seguridad se agrega inclinación anti-trepa en el remate o puntas de lanza en los barrotes superiores." },
              { t: "Resistencia al uso intensivo", d: "Los cercos de colegios reciben golpes, presión de grupos y juegos. Se especifica acero de mayor espesor y soldaduras reforzadas en el tubular." },
              { t: "Visibilidad exterior", d: "El cerco perimetral de un colegio debe permitir ver desde adentro hacia afuera — no solo por seguridad, sino para el control de acceso de adultos externos." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-anti-trepa", label: "Cercos anti-trepa", desc: "Remate de seguridad en la parte superior" },
            { href: "/cierres-perimetrales", label: "Tipos de cierres", desc: "Guía para elegir el correcto" },
            { href: "/cercos-para-canchas", label: "Cercos para canchas", desc: "Recintos deportivos del establecimiento" },
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial", desc: "Alta seguridad perimetral" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza el cerco de tu establecimiento</h2>
          <p className="text-gray-400 text-sm mb-5">Perímetro, altura y tipo de establecimiento. Para proyectos grandes, coordinamos visita técnica.</p>
          <a href={wa("Hola, necesito cotizar cerco para establecimiento educacional. Perímetro: [METROS] ml. Altura: [ALTURA] m. Establecimiento: [TIPO]. Ubicación: [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
