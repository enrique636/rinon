import type { Metadata } from "next";
import { seoPages } from "@/lib/seo";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = seoPages.cotizar;

export default function CotizarPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Solicitar Cotización
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Cotiza camarotes, estructuras metálicas, portones, rejas,
            cierres, pintura electrostática u otro trabajo.
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
          <WhatsAppButton
            size="lg"
            className="mx-auto"
            message="Hola, quiero solicitar una cotización. Necesito [producto o servicio], cantidad [cantidad], en [comuna o ciudad]."
          >
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
              <span><strong>¿Qué necesitas?</strong> (camarotes, estructuras, portones, pintura electrostática u otro)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-0.5">2.</span>
              <span><strong>Cantidad requerida</strong> de productos, piezas o metros aproximados</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-0.5">3.</span>
              <span><strong>Medidas aproximadas</strong> y cualquier requisito importante</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-0.5">4.</span>
              <span><strong>Comuna, ciudad y región</strong> donde necesitas el producto o servicio</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-0.5">5.</span>
              <span><strong>Plazo o fecha estimada</strong> si tienes una necesidad urgente</span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <ContactForm />
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
