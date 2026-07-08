import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Instalación de Rejas en Santiago — Servicio con Garantía",
  description: "Servicio de instalación de rejas metálicas en Santiago. Fabricamos e instalamos rejas para frontis, ventanas, puertas y perímetros. Instalación con garantía en toda la RM. Cotiza hoy.",
  keywords: [
    "instalacion de rejas santiago",
    "instalar reja metalica santiago",
    "instalacion rejas metalicas",
    "servicio instalacion rejas",
    "instalacion reja frontis santiago",
    "empresa instalacion rejas santiago",
    "instalar reja puerta",
    "instalar reja ventana santiago",
    "instalacion portones santiago",
    "quien instala rejas en santiago",
  ],
  alternates: { canonical: "https://rinon.cl/instalacion-de-rejas" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function InstalacionDeRejasPage() {
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
                name: "¿Cuánto tarda la instalación de una reja en Santiago?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La instalación de una reja de frontis estándar (8–12 metros con portón) toma 1 día. Rejas de ventana o puerta individuales toman 2–4 horas. El equipo va al domicilio, instala y ajusta todos los mecanismos antes de retirarse.",
                },
              },
              {
                "@type": "Question",
                name: "¿La instalación está incluida en el precio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Todos nuestros presupuestos incluyen la instalación en Santiago. No cobramos transporte ni mano de obra por separado. El precio cotizado es el precio final con la reja instalada en tu domicilio.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué necesito tener listo para la instalación?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El acceso libre al sector donde va la reja y un punto de agua cercano para mezclar el cemento de los postes. Para rejas de ventana, no se necesita preparación especial. Para frontis con portón, se necesita que la vereda esté libre el día de la instalación.",
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
          <span className="text-gray-700 font-medium">Instalación de Rejas</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Instalación incluida · Garantía de trabajo · Toda la RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Instalación de Rejas en Santiago — Fabricamos e Instalamos
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            No vendemos rejas sin instalar. Fabricamos la reja a medida y nuestro equipo
            la instala en tu domicilio. Frontis, ventanas, puertas, portones y perímetros
            en toda la Región Metropolitana. La instalación está siempre incluida en el precio.
          </p>
          <a
            href={wa("Hola, necesito cotizar la instalación de una reja. Tipo: [FRONTIS / VENTANA / PUERTA / PORTÓN]. Medidas: [DATO]. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar con instalación incluida
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Cómo funciona el proceso</h2>
          <div className="space-y-3">
            {[
              { n: "1", t: "Cotización por WhatsApp", d: "Mandas las medidas y el tipo de reja. Te respondemos con el precio el mismo día — sin visita técnica para la mayoría de los trabajos estándar." },
              { n: "2", t: "Confirmación y anticipo", d: "Confirmas el pedido con un anticipo. Comenzamos la fabricación de tu reja a medida en nuestro taller en Santiago." },
              { n: "3", t: "Fabricación", d: "7–10 días hábiles para rejas estándar. Cortamos, soldamos, pintamos al horno y controlamos calidad antes de salir a instalar." },
              { n: "4", t: "Instalación en tu domicilio", d: "Nuestro equipo llega con la reja terminada y la instala el mismo día. Para frontis: excavamos, colocamos postes y ajustamos portón y puerta peatonal." },
              { n: "5", t: "Entrega y pago del saldo", d: "Revisas el trabajo junto a nosotros. Si todo está conforme, pagas el saldo restante. El trabajo tiene garantía." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{step.n}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{step.t}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tiempos de instalación</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Tipo de trabajo</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Tiempo de instalación</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Reja de ventana (1 unidad)", "1–2 horas"],
                  ["Rejas de ventana (2–4 unidades)", "2–4 horas"],
                  ["Reja para puerta", "2–3 horas"],
                  ["Frontis de casa (8–12 m) sin portón", "4–6 horas"],
                  ["Frontis con portón vehicular + puerta peatonal", "1 día completo"],
                  ["Perímetro completo de casa (30–50 m)", "1–2 días"],
                ].map(([tipo, tiempo]) => (
                  <tr key={tipo} className="border-t border-gray-100">
                    <td className="p-3 text-gray-700">{tipo}</td>
                    <td className="p-3 text-gray-500 font-medium">{tiempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Frontis completo con portón" },
            { href: "/rejas-para-ventanas", label: "Rejas para ventanas", desc: "Instalación en ventanas de primer piso" },
            { href: "/rejas-para-puertas", label: "Rejas para puertas", desc: "Seguridad en la entrada" },
            { href: "/blog/como-cotizar-rejas-metalicas", label: "Cómo cotizar rejas", desc: "Qué información necesitas para el precio" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Fabricamos e instalamos — precio todo incluido</h2>
          <p className="text-gray-400 text-sm mb-5">
            Dinos qué necesitas y dónde estás. Cotizamos con instalación el mismo día.
          </p>
          <a
            href={wa("Hola, necesito cotizar rejas con instalación. Tipo: [FRONTIS / VENTANA / PUERTA / PORTÓN]. Medidas: [DATO]. Estoy en [COMUNA].")}
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
