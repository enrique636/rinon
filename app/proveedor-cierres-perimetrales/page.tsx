import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Proveedor Cierres Perimetrales | Rinon.cl Chile",
  description:
    "Rinon.cl como proveedor de cierres perimetrales para proyectos en Chile. Capacidad para proyectos de gran escala con factura, soporte técnico y despacho nacional.",
  keywords: [
    "proveedor cierres perimetrales chile",
    "proveedor cerco perimetral",
    "proveedores rejas cierres chile",
    "proveedor metalico santiago",
  ],
  alternates: { canonical: "https://rinon.cl/proveedor-cierres-perimetrales" },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const faqs = [
  {
    q: "¿Cómo se inicia una relación de proveedor con Rinon?",
    a: "Con una cotización por WhatsApp o correo. Nos envías el proyecto (metros, tipo de cierre, plazo) y te entregamos una propuesta técnica y económica. A partir de ahí definimos condiciones de trabajo.",
  },
  {
    q: "¿Cuál es el tiempo de respuesta para proyectos nuevos?",
    a: "Para cotizaciones respondemos dentro de 24 horas hábiles. Para proyectos de gran volumen coordinamos reunión técnica y entregamos presupuesto detallado en 2 días hábiles.",
  },
  {
    q: "¿Tienen referencias de proyectos anteriores?",
    a: "Sí. Podemos compartir referencias de proyectos anteriores: constructoras, inmobiliarias y empresas industriales con las que hemos trabajado. Solícitalas al contactarnos.",
  },
  {
    q: "¿Se puede pagar a crédito o con plazo?",
    a: "Para empresas con las que establecemos relación comercial evaluamos condiciones de pago con plazo. Al inicio se trabaja con anticipo del 50% y saldo contra entrega.",
  },
];

const cards = [
  {
    t: "Capacidad de producción",
    d: "Taller propio en Santiago con capacidad para producir cientos de metros lineales por mes. Sin cuellos de botella para proyectos de gran escala.",
  },
  {
    t: "Factura electrónica",
    d: "Emitimos factura electrónica para todos los proyectos. Órdenes de compra, contratos y respaldo tributario completo.",
  },
  {
    t: "Soporte técnico",
    d: "Equipo técnico disponible para resolver dudas de proyecto, especificaciones de materiales y dimensiones. Acompañamos desde la cotización hasta la postventa.",
  },
  {
    t: "Despacho nacional",
    d: "Coordinamos despacho a todo Chile en camión propio o carga consolidada. Entrega en obra o bodega según lo que necesite el proyecto.",
  },
];

const proceso = [
  { n: "1", t: "Cotización", d: "Envías los metros, tipo de cierre y plazo requerido." },
  { n: "2", t: "Aprobación", d: "Revisamos la propuesta técnica y económica juntos." },
  { n: "3", t: "Fabricación", d: "Producción en nuestro taller según especificaciones aprobadas." },
  { n: "4", t: "Instalación", d: "Equipo de instalación en terreno con coordinación de obra." },
  { n: "5", t: "Factura", d: "Emitimos factura electrónica al cierre del proyecto." },
];

const links = [
  { href: "/cierres-perimetrales", label: "Cierres perimetrales", desc: "Catálogo de tipos disponibles" },
  { href: "/fabricante-cierres-perimetrales", label: "Fabricante directo", desc: "Por qué comprar al fabricante" },
  { href: "/cierres-perimetrales-para-empresas", label: "Para empresas", desc: "Condiciones B2B y cotización" },
];

export default function ProveedorCierresPerimetralesPage() {
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
              { "@type": "ListItem", position: 3, name: "Proveedor", item: "https://rinon.cl/proveedor-cierres-perimetrales" },
            ],
          }),
        }}
      />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Proveedor</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            Proveedor certificado · Despacho nacional
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Proveedor de Cierres Perimetrales en Chile
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Trabajar con Rinon como proveedor significa tener fabricación propia, capacidad para
            proyectos de gran escala, factura electrónica y soporte técnico desde la cotización
            hasta la postventa. Sin intermediarios, sin sorpresas.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6 leading-relaxed">
            Somos el proveedor habitual de constructoras, inmobiliarias e industrias que necesitan
            un fabricante confiable para sus proyectos de cierre perimetral en Chile.
          </p>
          <a
            href={getWAUrl("Hola, queremos trabajar con ustedes como proveedores de cierres perimetrales. ¿Pueden enviarnos información?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Iniciar relación comercial
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Lo que obtienes al trabajar con nosotros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((c) => (
              <div key={c.t} className="bg-zinc-50 border border-zinc-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{c.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Proceso B2B paso a paso</h2>
          <div className="space-y-3">
            {proceso.map((p) => (
              <div key={p.n} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {p.n}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{p.t}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Preguntas frecuentes de proveedores</h2>
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
          <h2 className="text-2xl font-bold mb-2">Hablemos de tu proyecto</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">
            Envíanos los metros, tipo de cierre y plazo. Te respondemos en el día con una propuesta técnica.
          </p>
          <a
            href={getWAUrl("Hola, queremos trabajar con ustedes como proveedores de cierres perimetrales. ¿Pueden enviarnos información?")}
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
