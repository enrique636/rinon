import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Anti-Trepa — Seguridad Perimetral de Alta Dificultad",
  description: "Cercos anti-trepa en Chile. Fabricante directo. Cercos con remate de alta seguridad que dificultan el escalamiento: lanzas, inclinación anti-trepa y alambre de cuchillas. Para empresas, industrias y establecimientos.",
  keywords: ["cercos anti trepa","cerco anti escalamiento","cerco de seguridad anti trepa","malla anti trepa","remate anti trepa cerco","reja anti trepa chile","cerco alta seguridad chile","fabricante cercos anti trepa","cerco anti intrusión chile","cerco perimetral seguridad maxima"],
  alternates: { canonical: "https://dumar.cl/cercos-anti-trepa" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosAntiTrepaPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Qué es un cerco anti-trepa?", acceptedAnswer: { "@type": "Answer", text: "Un cerco anti-trepa es un cerco perimetral con un remate en la parte superior diseñado para dificultar o impedir el escalamiento. Los sistemas más comunes son: lanzas o puntas de acero, inclinación exterior de 45°, alambre de cuchillas (razor wire) y paneles con textura anti-agarre." } },
              { "@type": "Question", name: "¿Cuándo se usa un cerco anti-trepa?", acceptedAnswer: { "@type": "Answer", text: "Se usa cuando el cerco perimetral estándar no ofrece suficiente disuasión: industrias con alto valor de activos, bodegas logísticas, centros de datos, establecimientos penitenciarios, y cualquier instalación donde se quiera maximizar la dificultad de intrusión." } },
              { "@type": "Question", name: "¿El alambre de cuchillas es legal en Chile?", acceptedAnswer: { "@type": "Answer", text: "Sí, el alambre de cuchillas (razor wire) es legal en Chile para uso perimetral en propiedades privadas. Sin embargo, en zonas con plan regulador específico o cercos frontales visibles desde la calle, algunos municipios pueden tener restricciones. Consultar con la Dirección de Obras antes de instalar." } },
            ],
          }),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Cercos Anti-Trepa</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Alta seguridad · Disuasión de escalamiento · Industrial</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Anti-Trepa — Seguridad Perimetral de Alta Dificultad</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Un cerco estándar de 2 metros se puede escalar en segundos. Un cerco anti-trepa bien diseñado multiplica la dificultad y el tiempo de intrusión. Fabricamos cercos perimetrales con sistemas anti-trepa para industrias, bodegas, colegios y establecimientos que requieren mayor nivel de seguridad.</p>
          <a href={wa("Hola, necesito cotizar cerco anti-trepa. Perímetro: [METROS] ml. Altura base del cerco: [ALTURA] m. Sistema anti-trepa preferido: [LANZAS / INCLINACIÓN / ALAMBRE DE CUCHILLAS / CONSULTAR]. Uso: [EMPRESA / BODEGA / COLEGIO / OTRO]. Ubicación: [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar cerco anti-trepa</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sistemas anti-trepa disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Lanzas y puntas de acero", d: "Barrotes superiores terminados en punta de lanza o pirámide. El sistema más estético y más usado en colegios y empresas que quieren seguridad sin aspecto carcelario." },
              { t: "Remate inclinado 45°", d: "El cerco termina con una sección inclinada hacia el exterior. Cualquier intento de trepar hace que el cuerpo quede colgando hacia afuera — sistema muy efectivo y sin piezas cortantes." },
              { t: "Alambre de cuchillas (razor wire)", d: "Espiral de alambre con cuchillas de acero en el remate. El nivel de disuasión más alto disponible. Se usa en industrias, bodegas de alto valor y establecimientos con exigencia máxima." },
              { t: "Panel de púas soldadas", d: "Extensión del cerco con panel de púas o malla con punta al tope. Alternativa al alambre de cuchillas para instalaciones donde se prefiere una solución más integrada visualmente." },
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
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial", desc: "Alta seguridad para empresas" },
            { href: "/cercos-para-colegios", label: "Cercos para colegios", desc: "Seguridad en establecimientos educacionales" },
            { href: "/cercos-perimetrales-precio", label: "Precio de cercos", desc: "Cuánto cuesta por metro lineal" },
            { href: "/cierres-perimetrales", label: "Tipos de cierres", desc: "Guía comparativa completa" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco anti-trepa</h2>
          <p className="text-gray-400 text-sm mb-5">Perímetro, altura y sistema preferido. Orientamos sobre la mejor opción para tu caso.</p>
          <a href={wa("Hola, necesito cerco anti-trepa. Perímetro: [METROS] ml. Altura: [ALTURA] m. Sistema: [LANZAS / INCLINACIÓN / ALAMBRE CUCHILLAS]. Ubicación: [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
