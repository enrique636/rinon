import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Presupuesto Cierre Perimetral | Cotización Gratis",
  description:
    "Solicita tu presupuesto de cierre perimetral gratis en Chile. Respondemos por WhatsApp con precio por metro lineal y total según tu proyecto. Sin visita previa necesaria.",
  keywords: [
    "presupuesto cierre perimetral",
    "cotizacion cierre perimetral gratis",
    "cierre perimetral precio metro lineal",
    "presupuesto cerco perimetral online",
  ],
  alternates: { canonical: "https://rinon.cl/presupuesto-cierre-perimetral" },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const faqs = [
  {
    q: "¿Cuánto cuesta el presupuesto?",
    a: "El presupuesto es completamente gratis. No cobramos por cotizar. Envías los datos por WhatsApp y te respondemos con el precio detallado sin compromiso.",
  },
  {
    q: "¿Necesitan venir al terreno primero para dar el precio?",
    a: "No. Con los metros lineales aproximados, la altura y el tipo de uso entregamos un precio orientativo el mismo día. La visita técnica es opcional y se coordina para proyectos más complejos o para confirmar el precio final.",
  },
  {
    q: "¿Cuándo me responden el presupuesto?",
    a: "Respondemos dentro de las 24 horas hábiles. Para proyectos simples (casa, parcela, empresa pequeña) respondemos el mismo día. Para proyectos de gran escala podemos tardar 1 a 2 días hábiles.",
  },
  {
    q: "¿El precio incluye instalación?",
    a: "Sí. El presupuesto que enviamos incluye fabricación e instalación para la Región Metropolitana. Para otras regiones, el transporte se detalla por separado.",
  },
];

const datosNecesarios = [
  {
    n: "1",
    t: "Metros lineales aproximados",
    d: "El perímetro total que necesitas cercar. Si no tienes la medida exacta, un estimado aproximado (±10%) es suficiente para cotizar.",
  },
  {
    n: "2",
    t: "Altura deseada",
    d: "La altura más común es 1,80 m para casas y 2,00–2,40 m para empresas. Indica la que necesitas o te asesoramos según el uso.",
  },
  {
    n: "3",
    t: "Tipo de terreno",
    d: "Plano, con pendiente, suelo blando o rocoso. Afecta el tipo de fundación y el precio de instalación.",
  },
  {
    n: "4",
    t: "Ciudad o comuna",
    d: "Determina el costo de despacho e instalación, y en zonas costeras o del sur, el tipo de acabado recomendado.",
  },
];

const proceso = [
  { n: "1", t: "WhatsApp", d: "Envías los 4 datos básicos al número de contacto." },
  { n: "2", t: "Cotización", d: "Respondemos con precio por metro lineal y total del proyecto." },
  { n: "3", t: "Visita técnica opcional", d: "Para proyectos complejos coordinamos visita gratuita al terreno." },
  { n: "4", t: "Presupuesto final", d: "Presupuesto detallado con fabricación, instalación y plazos." },
];

const links = [
  { href: "/cierres-perimetrales", label: "Tipos de cierres", desc: "Malla, reja tubular, plancha — cuál conviene" },
  { href: "/presupuesto-cerco-perimetral", label: "Presupuesto cerco perimetral", desc: "Para la keyword cerco — mismo servicio" },
  { href: "/cotizar", label: "Cotizar online", desc: "Formulario de cotización directo" },
];

export default function PresupuestoCierrePerimetralPage() {
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
              { "@type": "ListItem", position: 3, name: "Presupuesto", item: "https://rinon.cl/presupuesto-cierre-perimetral" },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Presupuesto</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            Presupuesto gratis · Respuesta en el día
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Presupuesto de Cierre Perimetral Gratis
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            No necesitas una visita técnica para saber el precio de tu cierre perimetral. Con
            cuatro datos básicos te respondemos por WhatsApp con el precio por metro lineal y el
            total del proyecto — el mismo día.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6 leading-relaxed">
            El presupuesto es gratis y sin compromiso. Si el proyecto es complejo, coordinamos
            visita técnica gratuita al terreno para afinar el precio final.
          </p>
          <a
            href={getWAUrl("Hola, quiero un presupuesto de cierre perimetral. Necesito aproximadamente [X] metros lineales en [ciudad].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Pedir presupuesto ahora
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">¿Qué necesitas para cotizar?</h2>
          <div className="space-y-3">
            {datosNecesarios.map((d) => (
              <div key={d.n} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {d.n}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{d.t}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{d.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Cómo funciona el proceso</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {proceso.map((p) => (
              <div key={p.n} className="bg-zinc-50 border border-zinc-100 rounded-xl p-4 text-center">
                <span className="w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center mx-auto mb-3">
                  {p.n}
                </span>
                <p className="font-semibold text-gray-900 text-sm mb-1">{p.t}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{p.d}</p>
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
          <h2 className="text-2xl font-bold mb-2">Tu presupuesto de cierre en el día</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">
            Metros, altura, tipo de terreno y ciudad. Con esos datos tienes el precio completo hoy mismo. Gratis.
          </p>
          <a
            href={getWAUrl("Hola, quiero un presupuesto de cierre perimetral. Necesito aproximadamente [X] metros lineales en [ciudad].")}
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
