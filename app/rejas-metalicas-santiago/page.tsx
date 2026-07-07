import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Metálicas Santiago — Fabricante con Instalación | Santiago RM",
  description: "Rejas metálicas en Santiago. Fabricante directo. Frontis de casa, portón vehicular y reja de ventana para todas las comunas de Santiago. Cotización el mismo día.",
  keywords: [
    "rejas metalicas santiago",
    "reja metalica santiago",
    "reja de fierro santiago",
    "fabricante rejas metalicas santiago",
    "rejas para casa santiago",
    "instalacion rejas metalicas santiago",
    "reja metalica precio santiago",
    "rejas santiago chile",
    "reja metalica santiago centro",
    "rejas para frontis santiago",
  ],
  alternates: { canonical: "https://dumar.cl/rejas-metalicas-santiago" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasSantiagoPage() {
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
                name: "¿Cuánto cuesta una reja metálica en Santiago?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio depende de los metros lineales del frontis, la altura (1,20 m, 1,50 m o 1,80 m) y si incluye portón vehicular y puerta peatonal. Cotizamos con esos tres datos el mismo día por WhatsApp.",
                },
              },
              {
                "@type": "Question",
                name: "¿Fabrican e instalan en todas las comunas de Santiago?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Atendemos todas las comunas de la Región Metropolitana — sur, norte, poniente y oriente. La fabricación es en nuestro taller y la instalación se coordina directamente con el cliente.",
                },
              },
            ],
          }),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Santiago</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Toda la RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Santiago — Fabricante con Instalación</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en todas las comunas de Santiago. Frontis de
            casa, portón vehicular, puerta peatonal y reja de ventana — todo en tubo de
            acero estructural con pintura electrostática al horno. Sin intermediarios,
            directo del taller al frontis.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja metálica en Santiago. Metros del frontis: [METROS] ml. Altura: [ALTURA] m. Con portón vehicular: [SÍ / NO]. Puerta peatonal: [SÍ / NO]. Comuna: [DATO].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja en Santiago
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Qué incluye la reja de frontis completa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja de frontis", d: "Barrotes verticales en tubo cuadrado de 25×25 mm o 30×30 mm. Anclada en fundación de hormigón o sobre muretes de albañilería existentes. Altura estándar: 1,20 m, 1,50 m o 1,80 m." },
              { t: "Portón vehicular corredizo", d: "Se desliza sobre riel inferior. Ancho habitual: 3 a 4,5 metros. Cerradura integrada y manija interna. Opción de motor automático disponible." },
              { t: "Puerta peatonal abatible", d: "Hoja simple de 0,90 m con cerradura de manilla y llave. Se puede integrar en el panel de reja o como elemento independiente." },
              { t: "Reja de ventana", d: "Reja interior o exterior de ventana en tubo o barra de acero. Con palanca de apertura de emergencia cuando se requiere vía de escape." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Comunas de Santiago que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Santiago Centro","Providencia","Ñuñoa","San Miguel","La Florida","Maipú","Puente Alto",
              "Las Condes","Vitacura","Lo Barnechea","Macul","Peñalolén","La Reina","Recoleta","Conchalí",
              "Huechuraba","Quilicura","Pudahuel","Lo Prado","Cerrillos","El Bosque","La Granja","La Cisterna",
              "La Pintana","San Ramón","Pedro Aguirre Cerda","Lo Espejo","San Joaquín","Estación Central",
              "Renca","Lo Prado","Independencia","Colina","Lampa","Buin","Padre Hurtado","Talagante",
            ].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Guía completa del frontis" },
            { href: "/portones-para-casas", label: "Portones para casas", desc: "Corredizo vs batiente" },
            { href: "/instalacion-de-rejas", label: "Instalación de rejas", desc: "Cómo es el proceso" },
            { href: "/rejas-metalicas-precio", label: "Precio de rejas metálicas", desc: "Qué influye en el costo" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Santiago hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Metros lineales, altura y tu comuna. Respondemos el mismo día con precio y plazo.</p>
          <a href={wa("Hola, necesito cotizar reja metálica en Santiago. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón: [SÍ / NO]. Comuna: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
