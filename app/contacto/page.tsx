import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SITE_CONFIG } from "@/lib/config";
import { getLocalBusinessSchema } from "@/lib/structured-data";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto y Cotizaciones de Metalurgia | Rinon.cl",
  description:
    "Solicita una cotización para camarotes, rejas, cercos, portones, pintura electrostática y estructuras metálicas. Déjanos tu teléfono y consulta.",
  keywords: [
    "cotizar estructuras metálicas Chile",
    "cotizar camarotes Santiago",
    "cotizar pintura electrostática",
    "cotizar portones metálicos",
  ],
  alternates: { canonical: "https://rinon.cl/contacto" },
  openGraph: {
    title: "Contacto y cotizaciones — Rinon.cl",
    description: "Cotiza camarotes, estructuras metálicas, portones, rejas, cierres y pintura electrostática.",
    type: "website",
    locale: "es_CL",
  },
};

const comunas = [
  "Santiago Centro", "Providencia", "Las Condes", "Ñuñoa", "La Florida",
  "Maipú", "Pudahuel", "Quilicura", "Renca", "Conchalí",
  "Independencia", "Recoleta", "Cerrillos", "Estación Central", "Lo Prado",
  "Peñalolén", "Macul", "San Joaquín", "La Granja", "El Bosque",
  "La Pintana", "San Bernardo", "Puente Alto", "La Cisterna", "San Miguel",
  "Pedro Aguirre Cerda", "Lo Espejo", "Lo Barnechea", "Huechuraba", "Vitacura",
];

export default function ContactoPage() {
  return (
    <div className="py-10 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Contacto</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Contacto y Cotizaciones</h1>
          <p className="text-gray-500 text-lg">
            La forma más rápida de cotizar es por WhatsApp. Respondemos en minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* WhatsApp — canal principal */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">WhatsApp (recomendado)</h2>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Escríbenos para cotizar camarotes, estructuras metálicas, portones, rejas,
              cierres, pintura electrostática u otro trabajo.
              Respondemos de lunes a viernes de 9:00 a 18:00 y sábados de 9:00 a 14:00.
            </p>
            <WhatsAppButton
              size="lg"
              message="Hola, quiero solicitar una cotización. Necesito [indica el producto o servicio], cantidad [indica la cantidad], en [comuna o ciudad]."
              className="w-full justify-center"
            >
              Escribir por WhatsApp
            </WhatsAppButton>
            <p className="text-xs text-gray-400 mt-3 text-center">{SITE_CONFIG.telefono}</p>
          </div>

          {/* Info de contacto */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Información</h2>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Productos y servicios</p>
              <p className="text-gray-700 font-medium">Fabricación y trabajos metálicos</p>
              <p className="text-gray-500 text-sm">Para hogares, empresas e instituciones</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Cobertura</p>
              <p className="text-gray-700 font-medium">Región Metropolitana y otras regiones</p>
              <p className="text-gray-500 text-sm">La disponibilidad depende del producto o servicio</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Cotización</p>
              <p className="text-gray-700 font-medium">Según medidas, cantidades y ubicación</p>
              <p className="text-gray-500 text-sm">Cuéntanos los detalles para orientarte mejor</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Respuesta</p>
              <p className="text-gray-700 font-medium">Directamente por WhatsApp</p>
              <p className="text-gray-500 text-sm">Revisamos tu solicitud y te contactamos</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Horario de atención</p>
              <p className="text-gray-700 font-medium">Lun–Vie: 9:00–18:00</p>
              <p className="text-gray-500 text-sm">Sábados: 9:00–14:00</p>
            </div>
          </div>
        </div>

        <div className="mb-14"><ContactForm /></div>

        {/* Comunas con cobertura */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Cobertura en Santiago</h2>
          <p className="text-gray-500 text-sm mb-5">
            Atendemos proyectos y despachos en toda la Región Metropolitana. Algunas comunas de referencia:
          </p>
          <div className="flex flex-wrap gap-2">
            {comunas.map((c) => (
              <span key={c} className="bg-gray-100 text-gray-600 text-sm rounded-full px-3 py-1">
                {c}
              </span>
            ))}
            <span className="bg-gray-100 text-gray-500 text-sm rounded-full px-3 py-1 italic">
              y más comunas…
            </span>
          </div>
          <p className="text-gray-400 text-xs mt-3">
            ¿Estás en otra comuna o región? Consúltanos igualmente: la cobertura depende del producto o servicio solicitado.
          </p>
        </div>

        {/* Cómo cotizar — pasos */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">¿Cómo solicitar una cotización?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { num: "1", title: "Indica lo que necesitas", desc: "Selecciona camarotes, estructuras, portones, pintura electrostática u otro trabajo." },
              { num: "2", title: "Agrega los detalles", desc: "Cuéntanos cantidades, medidas aproximadas, comuna o ciudad y cualquier requisito especial." },
              { num: "3", title: "Recibe nuestra respuesta", desc: "Revisamos tu solicitud y te contactamos por WhatsApp con orientación y próximos pasos." },
            ].map((step) => (
              <div key={step.num} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 text-center">
          <p className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Productos y servicios metálicos
          </p>
          <h2 className="text-2xl font-bold mb-3">¿Listo para cotizar?</h2>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Cuéntanos qué necesitas, la cantidad y tu ubicación. Revisaremos la información para preparar tu cotización.
          </p>
          <WhatsAppButton
            message="Hola, quiero solicitar una cotización. Necesito [producto o servicio], cantidad [cantidad], en [comuna o ciudad]."
            size="lg"
          >
            Cotizar por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
