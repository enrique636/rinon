import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas de Seguridad Santiago — Fabricante con Instalación",
  description: "Rejas de seguridad metálicas en Santiago. Fabricante directo. Rejas para ventanas, puertas y frontis con foco en seguridad: barrotes reforzados, separación reducida y acabado resistente.",
  keywords: [
    "rejas de seguridad",
    "reja de seguridad metalica",
    "rejas seguridad santiago",
    "reja de seguridad para ventana",
    "reja de seguridad para puerta",
    "reja seguridad casa santiago",
    "rejas anti robo santiago",
    "reja metalica seguridad chile",
    "rejas de proteccion santiago",
    "fabricante rejas seguridad",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-de-seguridad" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasDeSegridadPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Cuál es la reja de seguridad más resistente?", acceptedAnswer: { "@type": "Answer", text: "La resistencia depende más del diseño que del material. Una reja con tubo de 25×25 mm y separación entre barrotes de 8–10 cm es más difícil de forzar que una con tubo delgado de 15×15 mm y separación de 15 cm. El acabado (pintura vs galvanizado) afecta la durabilidad, no la resistencia a la intrusión." } },
              { "@type": "Question", name: "¿Cuánto espacio debe haber entre los barrotes de una reja de seguridad?", acceptedAnswer: { "@type": "Answer", text: "Para seguridad residencial, la separación estándar entre barrotes es 10–12 cm. Con 10 cm o menos es muy difícil introducir una palanca para doblar los barrotes. La separación de 15 cm o más reduce la resistencia al forzado." } },
              { "@type": "Question", name: "¿Las rejas de seguridad necesitan salida de emergencia?", acceptedAnswer: { "@type": "Answer", text: "Para ventanas en dormitorios y habitaciones interiores se recomienda incluir un tramo con cerrojo interior de emergencia — una sección bisagrada que se puede abrir desde adentro. Esto cumple con las recomendaciones de seguridad en caso de incendio u emergencia." } },
            ],
          }),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Rejas de Seguridad</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Barrotes reforzados · Separación reducida · Anti-forzado</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas de Seguridad — Fabricadas para Proteger</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Una reja de seguridad no es solo una reja bonita — es una barrera disuasiva y física diseñada para dificultar la intrusión. Fabricamos rejas con barrotes de mayor espesor, separación reducida y anclaje reforzado para ventanas, puertas y frontis en Santiago.</p>
          <a href={wa("Hola, necesito cotizar una reja de seguridad. Uso: [VENTANA / PUERTA / FRONTIS / PERÍMETRO]. Medidas: [ALTO x ANCHO]. Con salida de emergencia: [SÍ / NO]. Estoy en [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi reja de seguridad</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Qué hace más segura una reja</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Espesor del tubo", d: "Tubo de 25×25 mm o mayor. Los barrotes delgados (15×15 mm) se pueden doblar con palanca. Mayor espesor = mayor resistencia al forzado." },
              { t: "Separación entre barrotes", d: "10 cm o menos. Con 10 cm es muy difícil introducir herramientas para doblar. Con 15 cm o más, el acceso es posible con palancas cortas." },
              { t: "Anclaje al muro", d: "Los barrotes horizontales deben ir empotrados en el muro — no solo atornillados a la superficie. El punto de quiebre más frecuente en una reja forzada es el anclaje, no el barrote." },
              { t: "Salida de emergencia", d: "En ventanas de dormitorios, una sección bisagrada con cerrojo interior. Permite salir en caso de incendio sin comprometer la seguridad diaria." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-para-ventanas", label: "Rejas para ventanas", desc: "Seguridad en primer y segundo piso" },
            { href: "/rejas-para-puertas", label: "Rejas para puertas", desc: "Protección en el acceso" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Frontis completo con portón" },
            { href: "/cercos-anti-trepa", label: "Cercos anti-trepa", desc: "Seguridad perimetral exterior" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja de seguridad</h2>
          <p className="text-gray-400 text-sm mb-5">Uso, medidas y si necesita salida de emergencia. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito reja de seguridad. Uso: [VENTANA / PUERTA / FRONTIS]. Medidas: [ALTO x ANCHO]. Estoy en [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
