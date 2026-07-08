import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portones Automáticos Santiago — Fabricante e Instalación",
  description: "Portones automáticos en Santiago. Fabricante e instalación incluida. Portón corredizo motorizado, portón batiente automático y acceso vehicular con control remoto o tarjeta. Cotiza hoy.",
  keywords: ["porton automatico santiago", "portones automaticos santiago", "porton motorizado santiago", "portón corredizo automatico", "portón batiente automatico", "portón automatico precio chile", "instalacion portón automatico", "portones con motor santiago", "portón garage automatico"],
  alternates: { canonical: "https://rinon.cl/portones-automaticos" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesAutomaticosPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué tipos de portones automáticos ofrecen?", acceptedAnswer: { "@type": "Answer", text: "Instalamos principalmente portones corredizos automáticos y portones batientes automáticos. El corredizo es más recomendado para espacios residenciales donde el portón no puede abrirse hacia afuera ni hacia adentro. El batiente automático requiere espacio libre para el arco de apertura, pero es más económico." } },
          { "@type": "Question", name: "¿Qué sistema de control incluye el portón automático?", acceptedAnswer: { "@type": "Answer", text: "El sistema incluye motor, rieles (en corredizo), control remoto y cuadro eléctrico. Se puede agregar control por tarjeta de proximidad, teclado de código, intercomunicador o integración con portero. Cotiza el sistema que necesitas." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación de un portón automático?", acceptedAnswer: { "@type": "Answer", text: "La instalación típica de un portón automático corredizo residencial es de 1 a 2 días — fabricación del portón + instalación del motor y rieles. Para portones industriales más grandes, el plazo depende del proyecto." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/portones-industriales" className="hover:text-gray-600">Portones</Link><span>/</span>
          <span className="text-gray-700 font-medium">Automáticos</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Motor incluido · Santiago</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portones Automáticos en Santiago — Fabricante e Instalación</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos el portón metálico e instalamos el sistema de automatización en un solo proyecto. Corredizo o batiente, residencial o industrial — con motor, rieles y control remoto incluidos.
          </p>
          <a href={wa("Hola, necesito cotizar un portón automático en Santiago. Tipo: [CORREDIZO / BATIENTE]. Ancho del vano: [METROS] m. Uso: [CASA / EMPRESA / CONDOMINIO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar portón automático
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de portón automático</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Portón corredizo automático", d: "El más recomendado para casas y condominios. Se desliza lateralmente — no necesita espacio de barrido. Ideal cuando el espacio frente al vano es limitado. Motor en el riel inferior." },
              { t: "Portón batiente automático", d: "Abre como una puerta, hacia adentro o hacia afuera. Requiere espacio libre en el arco de apertura. Más económico que el corredizo. Disponible en 1 hoja o 2 hojas." },
              { t: "Portón seccional industrial", d: "Sube verticalmente por guías laterales. Ocupa el mínimo espacio. Muy usado en galpones, bodegas y garajes industriales. Motor con sistema de contrapeso." },
              { t: "Portón levadizo", d: "Una sola hoja que sube recto hacia arriba. Para garajes con techos altos. Sencillo y resistente." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Corredizo o batiente?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 text-gray-500 font-medium text-xs">Factor</th>
                  <th className="text-center py-3 px-4 text-gray-900 font-semibold text-xs">Corredizo</th>
                  <th className="text-center py-3 px-4 text-gray-700 font-semibold text-xs">Batiente</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Espacio necesario", "Hacia el costado (igual al ancho del portón)", "Arco de apertura (1 m frente al vano)"],
                  ["Costo aproximado", "Más alto (rieles + motor)", "Más económico"],
                  ["Instalación", "Requiere riel en el suelo", "Más sencilla"],
                  ["Vanos disponibles", "Cualquier ancho", "Hasta ~4 m por hoja"],
                  ["Uso recomendado", "Casas, condominios, empresas", "Casas con patio amplio"],
                ].map(([f, c, b]) => (
                  <tr key={f}>
                    <td className="py-3 pr-4 text-gray-600 text-xs font-medium">{f}</td>
                    <td className="py-3 px-4 text-center text-gray-800 text-xs">{c}</td>
                    <td className="py-3 px-4 text-center text-gray-600 text-xs">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sistemas de control disponibles</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {["Control remoto (incluido)","Tarjeta de proximidad","Teclado numérico","Intercomunicador","Sensor de presencia","Integración domótica","Apertura por smartphone","Botón de emergencia manual"].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600">{item}</div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/portones-industriales", label: "Portones industriales", desc: "Para galpones y empresas" },
            { href: "/portones-residenciales", label: "Portones residenciales", desc: "Diseños para casas" },
            { href: "/cercos-para-condominios", label: "Cercos para condominios", desc: "Cierre completo de condominio" },
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial completo", desc: "Reja + portón para empresa" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros tiene el vano de tu portón?</h2>
          <p className="text-gray-400 text-sm mb-5">Ancho del vano, tipo (corredizo/batiente) y sistema de control. Cotizamos el mismo día.</p>
          <a href={wa("Hola, quiero cotizar un portón automático. Tipo: [CORREDIZO / BATIENTE]. Ancho: [METROS] m. Altura: [METROS] m. Ubicación: [COMUNA]. Sistema de control: [REMOTO / TARJETA / OTRO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
