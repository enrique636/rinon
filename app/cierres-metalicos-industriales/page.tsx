import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cierres Metálicos Industriales | Fabricante Chile",
  description:
    "Cierres metálicos industriales para bodegas, plantas y faenas en Chile. Alta resistencia, postes reforzados y galvanizado disponible. Fabricante directo con instalación.",
  keywords: [
    "cierres metalicos industriales",
    "cierre metalico industrial chile",
    "cerco metalico galpones bodegas",
    "cierres alta resistencia chile",
  ],
  alternates: { canonical: "https://rinon.cl/cierres-metalicos-industriales" },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const faqs = [
  {
    q: "¿En qué se diferencia el cierre metálico industrial del residencial?",
    a: "Los cierres industriales utilizan tubería de mayor calibre (generalmente 2\" o más), malla de mayor grosor, postes más anchos y enterrados a mayor profundidad. La altura estándar parte en 2,00 m y puede llegar a 4,00 m.",
  },
  {
    q: "¿Hacen galvanizado en los cierres industriales?",
    a: "Sí. Ofrecemos cierre metálico con galvanizado en frío (pintura galvanizante) y coordinamos galvanizado en caliente para proyectos que lo requieran por normativa o por ambiente agresivo.",
  },
  {
    q: "¿Cuánto aguanta una embestida vehicular?",
    a: "Los cierres industriales de tubo 2\" con postes cada 2,5 m están diseñados para detener intentos de embestida con vehículos menores. Para recintos críticos fabricamos barreras vehiculares de mayor resistencia.",
  },
  {
    q: "¿Qué altura máxima fabrican?",
    a: "La altura máxima estándar es 3,00 m. Para proyectos especiales (faenas mineras, recintos de alta seguridad) fabricamos hasta 4,00 m con estructura reforzada.",
  },
];

const cards = [
  {
    t: "Mayor calibre de acero",
    d: "Tubería estructural de 2\" o superior, con paredes más gruesas que los cierres residenciales. Mayor resistencia a la deformación y al impacto.",
  },
  {
    t: "Galvanizado disponible",
    a: "Aplicamos galvanizado en frío o coordinamos galvanizado en caliente para ambientes agresivos: marítimos, mineros, químicos o con alta humedad.",
  },
  {
    t: "Altura extra",
    d: "Fabricamos desde 2,00 m hasta 4,00 m de altura. Cubrimos las exigencias de normativas de seguridad industrial y control de acceso.",
  },
  {
    t: "Postes de refuerzo",
    d: "Postes de tubo cuadrado 100x100 mm o redondo 3\" con placa base y hormigonado profundo para garantizar estabilidad en terrenos de obra.",
  },
];

const casosDeUso = [
  "Bodegas y centros de distribución",
  "Galpones industriales",
  "Plantas de manufactura",
  "Faenas de construcción",
  "Recintos mineros",
  "Parques industriales",
];

const links = [
  { href: "/cierre-perimetral-industrial", label: "Cierre perimetral industrial", desc: "Especificaciones técnicas completas" },
  { href: "/cierres-para-industrias", label: "Cierres para industrias", desc: "Soluciones por tipo de industria" },
  { href: "/cierres-para-bodegas", label: "Cierres para bodegas", desc: "Centros de distribución y logística" },
  { href: "/cercos-metalicos", label: "Cercos metálicos", desc: "Variantes de cerco para empresas" },
];

export default function CierresMetalicosIndustrialesPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl" },
              { "@type": "ListItem", position: 2, name: "Cierres Perimetrales", item: "https://rinon.cl/cierres-perimetrales" },
              { "@type": "ListItem", position: 3, name: "Metálicos Industriales", item: "https://rinon.cl/cierres-metalicos-industriales" },
            ],
          }),
        }}
      />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Metálicos Industriales</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            Uso industrial · Alta resistencia
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Cierres Metálicos Industriales
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Los cierres metálicos industriales no son una versión grande del cierre residencial:
            son un producto distinto. Calibres más gruesos, mayor altura, postes reforzados y
            tratamientos de superficie para ambientes de uso intensivo.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6 leading-relaxed">
            Fabricamos para bodegas, galpones, plantas industriales, faenas de construcción y
            recintos mineros. Sin compromisos de calidad en el acero ni en el acabado.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={getWAUrl("Hola, necesito un cierre metálico industrial para [bodegas/planta/faena]. ¿Pueden cotizarme?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              Cotizar cierre industrial
            </a>
            <Link
              href="/cierre-perimetral-industrial"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors"
            >
              Ver especificaciones técnicas
            </Link>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Diferencias con el cierre residencial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((c) => (
              <div key={c.t} className="bg-zinc-50 border border-zinc-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{c.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.d ?? c.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Casos de uso industriales</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {casosDeUso.map((s) => (
              <div key={s} className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700">
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all"
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros tiene tu perímetro industrial?</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">
            Metros, altura, tipo de uso y ciudad. Con eso cotizamos en el día — fabricación e instalación incluidas.
          </p>
          <a
            href={getWAUrl("Hola, necesito un cierre metálico industrial para [bodegas/planta/faena]. ¿Pueden cotizarme?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
