import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Puertas Peatonales Metálicas Santiago — Fabricante con Instalación",
  description: "Puertas peatonales metálicas en Santiago. Fabricante directo. Puertas de reja para acceso peatonal en frontis, cercos y perímetros. A medida con instalación incluida en la RM.",
  keywords: [
    "puertas peatonales",
    "puerta peatonal metalica",
    "puerta peatonal santiago",
    "puerta de reja peatonal",
    "puerta peatonal para frontis",
    "puerta peatonal cerco perimetral",
    "fabricante puertas peatonales santiago",
    "puerta de acceso peatonal metalica",
    "puerta peatonal precio chile",
    "puerta peatonal instalacion santiago",
  ],
  alternates: { canonical: "https://rinon.cl/puertas-peatonales" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PuertasPeatonalesPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto mide una puerta peatonal estándar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El ancho estándar de una puerta peatonal es 90–100 cm — suficiente para el paso de una persona con carga. Para accesos de mayor flujo o con necesidad de accesibilidad, se usa 1,00–1,20 m. La altura va igual al cerco del frontis: 1,50–1,80 m.",
                },
              },
              {
                "@type": "Question",
                name: "¿La puerta peatonal se fabrica junto con la reja del frontis?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, lo más común es fabricar la reja del frontis, el portón vehicular y la puerta peatonal como un conjunto. Así el diseño, el color y el acabado quedan uniformes. También fabricamos puertas peatonales de reemplazo para frontis existentes.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué cerradura lleva una puerta peatonal de reja?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La cerradura más usada en puertas peatonales metálicas es la cerradura tipo barril de embutir — robusta y de largo alcance. Para puertas con mayor exigencia de seguridad, se agrega cerradura de seguridad con tres puntos de bloqueo o cerrojo adicional.",
                },
              },
            ],
          }),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/portones-metalicos" className="hover:text-gray-600">Portones</Link><span>/</span>
          <span className="text-gray-700 font-medium">Puertas Peatonales</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Acceso peatonal · A medida · Instalación en Santiago
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Puertas Peatonales Metálicas — Acceso Seguro en Frontis y Cercos
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            La puerta peatonal es el acceso diario de las personas a tu propiedad — la que se
            abre y cierra más veces al día. Fabricamos puertas peatonales metálicas a medida
            para frontis de casas, cercos perimetrales y accesos de empresas. Solo o en
            conjunto con la reja del frontis y el portón vehicular.
          </p>
          <a
            href={wa("Hola, necesito cotizar una puerta peatonal metálica. Ancho: [90 / 100 / 120 cm]. Altura: [ALTURA] m. Es para: [FRONTIS DE CASA / CERCO PERIMETRAL / EMPRESA]. Incluye reja de frontis: [SÍ / NO]. Estoy en [COMUNA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar puerta peatonal
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Opciones de apertura y cerradura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Bisagra estándar", d: "La opción más simple y robusta. La puerta gira sobre 2 bisagras soldadas al marco. Sin piezas móviles adicionales que mantener." },
              { t: "Cerradura de barril", d: "La cerradura más usada en puertas de reja. Embutida en el tubo del marco, se abre con llave desde ambos lados. Resistente y discreta." },
              { t: "Cerradura eléctrica", d: "Para accesos controlados desde el interior de la propiedad. Permite abrir la puerta peatonal sin desplazarse hasta ella — muy usado en oficinas y edificios." },
              { t: "Con mirilla o pulsador", d: "Combinación de puerta peatonal metálica con portero eléctrico o videoportero integrado al marco. Acceso identificado antes de abrir." },
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
            { href: "/portones-para-casas", label: "Portones para casas", desc: "Portón vehicular + puerta peatonal" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Frontis completo con reja" },
            { href: "/rejas-para-puertas", label: "Rejas para puertas", desc: "Reja sobre puerta interior" },
            { href: "/portones-electricos", label: "Portones eléctricos", desc: "Automatizar el portón vehicular" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu puerta peatonal</h2>
          <p className="text-gray-400 text-sm mb-5">
            Ancho, altura y tipo de cerradura. Fabricamos e instalamos el mismo equipo.
          </p>
          <a
            href={wa("Hola, necesito puerta peatonal metálica. Ancho: [90 / 100 cm]. Altura: [DATO] m. Para: [FRONTIS / CERCO / EMPRESA]. Estoy en [COMUNA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
