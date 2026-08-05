import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies — Rinon.cl",
  description: "Información sobre el uso de cookies en rinon.cl. Qué cookies usamos, para qué y cómo puedes desactivarlas.",
  alternates: { canonical: "https://rinon.cl/politica-de-cookies" },
  robots: { index: false },
};

export default function PoliticaDeCookiesPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Política de Cookies</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Cookies</h1>
        <p className="text-gray-400 text-sm mb-10">Última actualización: julio 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">¿Qué son las cookies?</h2>
            <p className="text-gray-600 leading-relaxed">Las cookies son pequeños archivos de texto que un sitio web almacena en tu dispositivo (computador, tablet o teléfono) cuando lo visitas. Sirven para que el sitio funcione correctamente, recuerde tus preferencias o analice cómo se usa.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">¿Qué cookies usamos?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Tipo</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Nombre</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Finalidad</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">Duración</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="p-3 border border-gray-200">Técnica</td>
                    <td className="p-3 border border-gray-200">__vercel_*</td>
                    <td className="p-3 border border-gray-200">Funcionamiento del servidor y caché</td>
                    <td className="p-3 border border-gray-200">Sesión</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Análisis</td>
                    <td className="p-3 border border-gray-200">_ga, _gid</td>
                    <td className="p-3 border border-gray-200">Google Analytics — estadísticas de visitas anónimas</td>
                    <td className="p-3 border border-gray-200">2 años / 24 horas</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Preferencias</td>
                    <td className="p-3 border border-gray-200">rinon_cookie_consent</td>
                    <td className="p-3 border border-gray-200">Recuerda si aceptaste esta política</td>
                    <td className="p-3 border border-gray-200">Hasta que elimines los datos del navegador</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies de terceros</h2>
            <p className="text-gray-600 leading-relaxed">Este sitio puede cargar contenido de servicios externos (Google Maps, WhatsApp) que instalan sus propias cookies. Rinon.cl no controla esas cookies. Para más información consulta las políticas de privacidad de cada servicio:</p>
            <ul className="mt-3 space-y-1 text-gray-600 list-disc list-inside">
              <li>Google: <span className="text-gray-500">policies.google.com/privacy</span></li>
              <li>WhatsApp / Meta: <span className="text-gray-500">www.whatsapp.com/legal/privacy-policy</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">¿Cómo desactivar las cookies?</h2>
            <p className="text-gray-600 leading-relaxed">Puedes configurar tu navegador para rechazar o eliminar cookies en cualquier momento. Ten en cuenta que desactivar ciertas cookies puede afectar el funcionamiento del sitio.</p>
            <ul className="mt-3 space-y-1 text-gray-600 list-disc list-inside">
              <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
              <li>Firefox: Opciones → Privacidad y seguridad</li>
              <li>Safari: Preferencias → Privacidad</li>
              <li>Edge: Configuración → Cookies y permisos del sitio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Base legal</h2>
            <p className="text-gray-600 leading-relaxed">El uso de cookies en rinon.cl se rige por la Ley N° 19.628 sobre Protección de la Vida Privada (Chile) y las directrices aplicables sobre privacidad en línea.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contacto</h2>
            <p className="text-gray-600 leading-relaxed">Para cualquier consulta relacionada con esta política puedes escribirnos a <a href="mailto:ventas@dumar.cl" className="text-gray-900 underline">ventas@dumar.cl</a>.</p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-700">← Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
