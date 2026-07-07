import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Instalación de Camarotes en Santiago — Entrega e Instalación Incluida",
  description: "Instalamos camarotes metálicos en tu casa en Santiago. Entrega e instalación incluida en el precio. Coordinamos día y hora por WhatsApp. Pago contra entrega disponible.",
  keywords: ["instalacion camarotes santiago", "instalar camarote metalico", "camarote con instalacion santiago", "entrega e instalacion camarote", "servicio instalacion camarotes", "armado camarote santiago", "camarote instalado en casa", "camarotes a domicilio santiago"],
  alternates: { canonical: "https://dumar.cl/instalacion-camarotes" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function InstalacionCamarotesPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Incluye instalación la entrega del camarote?", acceptedAnswer: { "@type": "Answer", text: "Sí. El camarote llega a tu casa ya armado o lo armamos en el lugar. No tienes que contratar a nadie más — la entrega incluye dejar el camarote instalado y funcionando." } },
          { "@type": "Question", name: "¿Cuánto tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "Depende del modelo y las condiciones del espacio. Un camarote estándar se instala en 30 a 60 minutos. Si tiene extras como escalera lateral, baranda o anclajes a la pared puede tomar un poco más." } },
          { "@type": "Question", name: "¿Instalan en todas las comunas de Santiago?", acceptedAnswer: { "@type": "Answer", text: "Sí. Cubrimos toda la Región Metropolitana — desde Las Condes hasta Maipú, desde Colina hasta Puente Alto." } },
          { "@type": "Question", name: "¿Puedo pedir que lo anclen a la pared?", acceptedAnswer: { "@type": "Answer", text: "Sí. Para instalaciones permanentes o donde se requiere máxima seguridad, podemos anclar el camarote a la pared con platinas y pernos soldados. Se indica al cotizar." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Instalación de Camarotes</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
            Entrega + Instalación incluida · Toda la Región Metropolitana
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Instalación de Camarotes en Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            El camarote llega a tu casa ya armado o lo armamos en el lugar. Sin sorpresas, sin costos extras. Pago contra entrega disponible — pagas cuando lo ves instalado y funcionando.
          </p>
          <a href={wa("Hola, me interesa un camarote con instalación en Santiago. ¿Pueden cotizarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar con instalación
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">¿Cómo funciona el servicio?</h2>
          <div className="space-y-3">
            {[
              { n: "1", t: "Cotizas por WhatsApp", d: "Nos dices qué modelo quieres, el tamaño de la pieza y si necesitas extras. Te respondemos con precio y plazo." },
              { n: "2", t: "Coordinamos día y hora", d: "Confirmado el pedido, coordinamos la entrega. Tú eliges el día — te avisamos la hora con anticipación." },
              { n: "3", t: "Llegamos y lo instalamos", d: "El camarote llega armado o lo armamos en el lugar. En 30 a 60 minutos está listo para usarse." },
              { n: "4", t: "Pagas cuando lo ves listo", d: "Pago contra entrega disponible. Pagas en efectivo o transferencia cuando el camarote está instalado y funcionando." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                <span className="w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{s.n}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Extras de instalación disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Anclaje a la pared", d: "Para instalaciones permanentes. Platinas soldadas y pernos que fijan el camarote a la pared — máxima seguridad, especialmente útil en faenas y campamentos." },
              { t: "Escalera lateral", d: "Además de la escalera incorporada, se puede instalar una escalera lateral que facilita bajar por el centro." },
              { t: "Baranda de seguridad", d: "Una o dos barandas para la cama superior. Recomendada para niños o personas que se mueven mucho al dormir." },
              { t: "Retiro del camarote anterior", d: "Si tienes un camarote viejo que necesitas retirar, lo coordinamos al momento de cotizar." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Zonas de instalación en Santiago</h2>
          <div className="flex flex-wrap gap-2">
            {["Las Condes","Providencia","Maipú","La Florida","Pudahuel","Quilicura","San Bernardo","Puente Alto","Ñuñoa","La Reina","Vitacura","Lo Barnechea","Huechuraba","Colina","Lampa","Peñalolén","Macul","Estación Central","Santiago Centro","y todas las comunas RM"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes", label: "Ver todos los modelos", desc: "Catálogo completo" },
            { href: "/camarote-titanic", label: "Camarote Titanic", desc: "El más robusto — uso intensivo" },
            { href: "/camarote-con-escritorio", label: "Camarote con escritorio", desc: "Con instalación incluida" },
            { href: "/camarotes-al-por-mayor", label: "Por mayor", desc: "Para empresas y campamentos" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Para cuándo lo necesitas?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el modelo, la comuna y el plazo. Coordinamos la entrega con instalación el mismo día.</p>
          <a href={wa("Hola, quiero un camarote con instalación en Santiago. El modelo que me interesa es [MODELO], estoy en [COMUNA].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
