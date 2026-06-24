import type { Metadata } from "next";
import { seoPages } from "@/lib/seo";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = seoPages.cotizar;

const productOptions = [
  "Camarote con escritorio metálico estándar",
  "Camarote con escritorio premium",
  "Cama alta con escritorio",
  "Cama alta 2 plazas con escritorio",
  "Camarote con escritorio a medida",
  "No estoy seguro, necesito orientación",
];

export default function CotizarPage() {
  const waMsg = encodeURIComponent(
    "Hola, quiero cotizar un camarote con escritorio. ¿Pueden ayudarme?"
  );

  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Solicitar Cotización
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Escríbenos por WhatsApp y te respondemos en menos de una hora
            con precios, disponibilidad y opciones.
          </p>
        </div>

        {/* Opción 1: WhatsApp (principal) */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-6 text-center">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-wider mb-2">
            Recomendado — más rápido
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Cotizar por WhatsApp
          </h2>
          <p className="text-gray-600 mb-6">
            Respuesta en menos de 1 hora en horario de lunes a sábado.
          </p>
          <WhatsAppButton size="lg" className="mx-auto">
            Abrir WhatsApp y cotizar
          </WhatsAppButton>
        </div>

        {/* Opción 2: Info para incluir en el mensaje */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Para cotizar más rápido, incluye esta información:
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-0.5">1.</span>
              <span><strong>¿Qué modelo te interesa?</strong> (metálico, premium, cama alta, a medida)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-0.5">2.</span>
              <span><strong>Medidas disponibles en tu pieza</strong> (largo, ancho, alto del espacio)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-0.5">3.</span>
              <span><strong>¿Para quién es?</strong> (niño, adolescente, adulto, universitario)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-0.5">4.</span>
              <span><strong>¿Necesitas entrega e instalación?</strong> y en qué comuna</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-0.5">5.</span>
              <span><strong>Color preferido</strong> (blanco, negro, gris u otro)</span>
            </li>
          </ul>
        </div>

        {/* Datos de contacto alternativos */}
        <div className="text-center text-gray-500 text-sm">
          <p>También puedes escribirnos al</p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp.numero}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold hover:underline"
          >
            {SITE_CONFIG.telefono}
          </a>
        </div>
      </div>
    </div>
  );
}
