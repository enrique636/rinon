import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Antofagasta — Fabricante Chile | Buenos Pal Catre",
  description: "Cercos perimetrales metálicos para Antofagasta, Calama y el norte minero. Fabricante en Santiago, despacho a todo el norte de Chile. Rejas tubulares, mallas y portones para faenas y campamentos.",
  keywords: ["cercos perimetrales antofagasta", "reja metalica antofagasta", "cerco perimetral calama", "rejas metalicas norte chile", "cerco perimetral mineria antofagasta", "fabrica cercos antofagasta", "cerco para faena antofagasta", "cerco perimetral atacama"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-antofagasta" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosAntofagastaPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican cercos perimetrales para Antofagasta?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos en nuestro taller en Santiago y despachamos a Antofagasta, Calama, Sierra Gorda, Tocopilla y toda la Región de Antofagasta. El transporte se coordina al cotizar." } },
          { "@type": "Question", name: "¿Hacen cercos para campamentos mineros en el norte?", acceptedAnswer: { "@type": "Answer", text: "Sí. Trabajamos con empresas mineras y contratistas del norte. Fabricamos cercos perimetrales, mallas separadoras y portones para campamentos, faenas y plantas. Cotiza por mayor con volumen y destino." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Antofagasta</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho norte de Chile</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales para Antofagasta y el Norte Minero</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos cercos, rejas tubulares y portones metálicos en Santiago y despachamos a Antofagasta, Calama, Sierra Gorda, Tocopilla y toda la Región de Antofagasta. Precio de fábrica para proyectos mineros y faenas.
          </p>
          <a href={wa("Hola, necesito cotizar cercos perimetrales para Antofagasta. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades que atendemos en el norte</h2>
          <div className="flex flex-wrap gap-2">
            {["Antofagasta","Calama","Sierra Gorda","María Elena","Tocopilla","Copiapó","Diego de Almagro","Chañaral","Vallenar","La Serena","Coquimbo","Salamanca","Illapel","Los Vilos"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Productos para el sector minero y faenas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cercos para campamentos mineros", d: "Perímetro de campamentos con reja tubular o malla. Fabricado para resistir condiciones climáticas extremas del desierto." },
              { t: "Mallas separadoras para plantas", d: "División de espacios dentro de plantas y bodegas. Permite circulación y visibilidad sin construir muros." },
              { t: "Portones industriales", d: "Accesos vehiculares y peatonales para faenas. Corredizos o batientes según el ancho del vano." },
              { t: "Cercos para bodegas", d: "Cierre perimetral de bodegas de materiales y equipos. Con opción galvanizada para mayor durabilidad." },
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
            { href: "/cierres-perimetrales", label: "Ver todos los cercos", desc: "Catálogo completo" },
            { href: "/rejas-metalicas", label: "Rejas metálicas", desc: "Todos los tipos" },
            { href: "/portones-metalicos", label: "Portones", desc: "Industriales y residenciales" },
            { href: "/camarotes-antofagasta", label: "Camarotes para Antofagasta", desc: "También fabricamos camarotes" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Proyecto en el norte de Chile</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos la ciudad, el tipo de cerco y los metros lineales. Cotizamos con despacho incluido.</p>
          <a href={wa("Hola, necesito cercos perimetrales para un proyecto en [CIUDAD, NORTE DE CHILE]. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
