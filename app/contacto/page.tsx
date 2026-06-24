import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SITE_CONFIG, formatPrice } from "@/lib/config";
import { getLocalBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contacto — Camarotes Chile | Santiago y Alrededores",
  description:
    "Contáctanos para cotizar un camarote metálico en Santiago. Atención por WhatsApp, despacho en la Región Metropolitana. Pago contra entrega.",
  keywords: [
    "contacto camarotes Chile",
    "cotizar camarote Santiago",
    "camarote metalico contacto",
    "despacho camarotes Santiago",
  ],
  alternates: { canonical: "https://dumar.cl/contacto" },
  openGraph: {
    title: "Contacto — Camarotes Chile",
    description: "Cotiza tu camarote metálico por WhatsApp. Despacho en Santiago con pago contra entrega.",
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
              Escríbenos por WhatsApp para cotizar, preguntar medidas o coordinar despacho.
              Respondemos de lunes a viernes de 9:00 a 18:00 y sábados de 9:00 a 14:00.
            </p>
            <WhatsAppButton
              size="lg"
              message="Hola, me interesa cotizar un camarote. ¿Me pueden ayudar?"
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
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Zona de despacho</p>
              <p className="text-gray-700 font-medium">Santiago y alrededores</p>
              <p className="text-gray-500 text-sm">Región Metropolitana</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Costo de despacho</p>
              <p className="text-gray-700 font-medium">{formatPrice(SITE_CONFIG.despacho.precio)} CLP fijo</p>
              <p className="text-gray-500 text-sm">Incluye instalación en el domicilio</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Forma de pago</p>
              <p className="text-gray-700 font-medium">Pago contra entrega</p>
              <p className="text-gray-500 text-sm">Pagas cuando el camarote llega instalado</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Plazo de entrega</p>
              <p className="text-gray-700 font-medium">{SITE_CONFIG.despacho.dias}</p>
              <p className="text-gray-500 text-sm">Coordinamos día y horario contigo</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Horario de atención</p>
              <p className="text-gray-700 font-medium">Lun–Vie: 9:00–18:00</p>
              <p className="text-gray-500 text-sm">Sábados: 9:00–14:00</p>
            </div>
          </div>
        </div>

        {/* Comunas con cobertura */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Comunas con despacho</h2>
          <p className="text-gray-500 text-sm mb-5">
            Despachamos a toda la Región Metropolitana. Algunas comunas de referencia:
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
            ¿No ves tu comuna? Consúltanos igual — cubrimos toda la RM y algunas zonas fuera de ella.
          </p>
        </div>

        {/* Cómo cotizar — pasos */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">¿Cómo cotizar un camarote?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { num: "1", title: "Elige el modelo", desc: "Mira los modelos disponibles y elige el que se adapta a tu espacio y necesidad." },
              { num: "2", title: "Escríbenos por WhatsApp", desc: "Cuéntanos qué modelo te interesa, las medidas de tu pieza y tu comuna." },
              { num: "3", title: "Coordina la entrega", desc: "Te enviamos precio y disponibilidad. Si confirmas, coordinamos día y horario." },
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
            Pago contra entrega · Santiago
          </p>
          <h2 className="text-2xl font-bold mb-3">¿Listo para cotizar?</h2>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Escríbenos el modelo que te interesa y las medidas de tu espacio. Te respondemos con precio en minutos.
          </p>
          <WhatsAppButton
            message="Hola, quiero cotizar un camarote. Estoy en [tu comuna] y necesito un [modelo]."
            size="lg"
          >
            Cotizar por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
