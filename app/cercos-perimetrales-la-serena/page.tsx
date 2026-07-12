import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales La Serena — Fabricante con Despacho a Coquimbo",
  description: "Cercos perimetrales metálicos para La Serena, Coquimbo y la Región de Coquimbo. Fabricante en Santiago con despacho. Rejas galvanizadas para el ambiente costero del norte chico.",
  keywords: [
    "cercos perimetrales la serena",
    "cerco metalico la serena",
    "reja perimetral la serena",
    "rejas metalicas la serena",
    "cerco para casa la serena",
    "fabricante cercos la serena",
    "cerco coquimbo",
    "reja galvanizada la serena",
    "cerco perimetral region coquimbo",
    "portones la serena",
  ],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-la-serena" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesLaSerenaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan cercos perimetrales en La Serena?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos los cercos en nuestro taller en Santiago y realizamos la instalación en La Serena. Cotizamos el mismo día — solo necesitamos los metros lineales, la altura y el tipo de uso (casa, condominio o industria)." } },
          { "@type": "Question", name: "¿Cuánto cuesta el metro lineal de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo: malla eslabonada es la opción más económica, tubo estructural pintado al horno tiene un costo medio, y el cerco galvanizado es el de mayor durabilidad y costo. Cotiza por WhatsApp con los metros y altura para obtener un precio exacto." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">La Serena</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante en Santiago · Despacho Región de Coquimbo
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cercos Perimetrales para La Serena, Coquimbo y el Norte Chico
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos y despachamos cercos perimetrales metálicos a La Serena, Coquimbo,
            Ovalle y toda la Región de Coquimbo. Zona costera con ambiente salino —
            galvanizado en caliente para cercos que resistan la humedad y el salitre del Pacífico.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-900">
            <strong className="block mb-1">Zona costera — galvanizado obligatorio en primera línea</strong>
            <p className="text-xs text-amber-800 leading-relaxed">
              La Serena y Coquimbo tienen ambiente marino. La brisa salina del Pacífico deteriora
              el acero con pintura convencional en 2–4 años. Para propiedades a menos de 3 km
              del mar, recomendamos galvanizado en caliente como único acabado viable a largo plazo.
            </p>
          </div>

          <a
            href={wa("Hola, necesito cotizar un cerco perimetral para La Serena / Coquimbo. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / PARCELA / EMPRESA]. Ciudad: [CIUDAD]. ¿Cerca del mar? [SÍ / NO].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades de Coquimbo que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["La Serena","Coquimbo","Ovalle","Vicuña","Illapel","Andacollo",
              "Monte Patria","Combarbalá","Salamanca","Los Vilos"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Usos frecuentes en la Región de Coquimbo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Casas de playa y segunda residencia",
                d: "La Serena y Coquimbo son destino turístico. Casas de playa y segundas residencias que necesitan cerco galvanizado resistente al ambiente salino.",
              },
              {
                t: "Parcelas del Valle del Elqui",
                d: "El Valle del Elqui tiene creciente demanda de parcelas y propiedades rurales. Cercos perimetrales para delimitar predios con portón vehicular.",
              },
              {
                t: "Empresas y minería del norte chico",
                d: "La Región de Coquimbo tiene actividad minera y agroindustrial. Cercos perimetrales para instalaciones industriales y perímetros de faenas.",
              },
              {
                t: "Condominios y casas residenciales",
                d: "La Serena ha crecido enormemente en los últimos años. Proyectos residenciales que necesitan cercos para casas y accesos vehiculares.",
              },
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
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "El acabado correcto para zonas costeras" },
            { href: "/cercos-perimetrales-arica", label: "Cercos Arica", desc: "Zona costera extremo norte" },
            { href: "/cercos-perimetrales-copiapo", label: "Cercos Copiapó", desc: "Región de Atacama" },
            { href: "/blog/galvanizado-vs-pintado-cuando-elegir", label: "Galvanizado vs pintado", desc: "Cuándo usar cada acabado" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco para La Serena</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros, altura y distancia al mar. Coordinamos el despacho a La Serena y Coquimbo.
          </p>
          <a
            href={wa("Hola, necesito un cerco perimetral para La Serena / Coquimbo. Metros: [METROS] ml. Altura: [ALTURA] m. Ciudad: [CIUDAD]. Cerca del mar: [SÍ / NO].")}
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
