import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Política de Privacidad | Rinon.cl", description: "Cómo Rinon.cl recopila, utiliza y protege los datos enviados mediante sus formularios.", alternates: { canonical: "https://rinon.cl/politica-de-privacidad" } };

export default function PrivacyPage() {
  return <main className="max-w-3xl mx-auto px-4 py-12"><Link href="/" className="text-sm text-gray-500">← Volver al inicio</Link><h1 className="text-3xl font-bold mt-6 mb-8">Política de privacidad</h1><div className="space-y-7 text-gray-600 leading-relaxed">
    <section><h2 className="text-xl font-bold text-gray-900 mb-2">Datos que recopilamos</h2><p>Cuando envías una consulta podemos recopilar tu nombre, teléfono, correo, comuna, servicio solicitado, mensaje, canal preferido y página desde donde escribiste.</p></section>
    <section><h2 className="text-xl font-bold text-gray-900 mb-2">Para qué los usamos</h2><p>Los utilizamos para responder tu solicitud, preparar una cotización, coordinar una visita o entrega y mantener el seguimiento comercial relacionado con tu consulta. No vendemos tus datos.</p></section>
    <section><h2 className="text-xl font-bold text-gray-900 mb-2">Conservación y seguridad</h2><p>Conservamos la información durante el tiempo necesario para atender la solicitud y cumplir obligaciones legales. Aplicamos controles de acceso para que solo personal autorizado pueda revisar los contactos.</p></section>
    <section><h2 className="text-xl font-bold text-gray-900 mb-2">Tus derechos</h2><p>Puedes solicitar acceso, rectificación o eliminación de tus datos escribiendo a ventas@dumar.cl.</p></section>
    <section><h2 className="text-xl font-bold text-gray-900 mb-2">Cookies</h2><p>Consulta la <Link href="/politica-de-cookies" className="underline text-gray-900">política de cookies</Link> para conocer las preferencias disponibles.</p></section>
  </div></main>;
}
