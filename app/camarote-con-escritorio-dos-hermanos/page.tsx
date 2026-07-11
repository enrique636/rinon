import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio para Dos Hermanos — Cómo Organizar el Espacio | Camarotes Chile",
  description:
    "¿Dos hermanos en una misma pieza? El camarote con escritorio resuelve el dormitorio para dos. Opciones, distribuciones y consejos desde la experiencia de fabricantes.",
  keywords: [
    "camarote con escritorio dos hermanos",
    "camarote dos niños escritorio",
    "habitación compartida dos hermanos cama escritorio",
    "camarote para hermanos con escritorio",
    "dos camas y escritorio pieza pequeña",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-dos-hermanos" },
};

export default function CamaroteEscritorioDosHermanosPage() {
  const wa = getWhatsAppUrl("Hola, tengo dos hijos que comparten pieza y quiero un camarote con escritorio. ¿Qué opciones tienen para ese caso?");
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Qué tipo de camarote conviene para dos hermanos que necesitan escritorio?", acceptedAnswer: { "@type": "Answer", text: "Depende del espacio y los usos. Si ambos estudian, la mejor opción es un camarote estándar (cama arriba y abajo) más un escritorio aparte, o un camarote con escritorio donde uno estudia arriba en la cama y otro en el escritorio de abajo. Si la pieza tiene menos de 10 m², el camarote doble con escritorio integrado solo abajo suele ser la única alternativa viable." } },
          { "@type": "Question", name: "¿El niño de arriba puede estudiar también?", acceptedAnswer: { "@type": "Answer", text: "En el nivel superior del camarote el espacio entre la cama y el techo limita las posibilidades de estudio. Lo más común es que el niño de arriba estudie en el escritorio cuando el de abajo no lo está usando, o se agregue una mesita plegable al nivel superior. Para dos estudiantes simultáneos, lo óptimo es un escritorio largo integrado o dos escritorios aparte." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Dos Hermanos</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 text-sm text-indigo-700 font-medium mb-5">👫 Dos hermanos · Pieza compartida · Escritorio integrado</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarote con Escritorio para Dos Hermanos</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Dos hijos en una misma pieza es uno de los escenarios más comunes que nos consultan.
            La solución no es única — depende del espacio, las edades y si ambos estudian al
            mismo tiempo. Acá te explicamos las opciones reales desde nuestra experiencia fabricando.
          </p>
          
          <div className="my-5 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-escritorio-full-gamer.jpg" alt="Camarote con escritorio para dos hermanos compartiendo pieza" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Consultar mi caso específico</a>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Las 3 configuraciones más frecuentes</h2>
          <div className="space-y-5">
            {[
              {
                num: "1",
                titulo: "Camarote + escritorio abajo (solo uno estudia a la vez)",
                desc: "El camarote estándar con escritorio integrado debajo. El niño de abajo tiene el escritorio permanente. El de arriba baja cuando necesita estudiar y usa el mismo escritorio (en turnos). Funciona bien si los hermanos no necesitan estudiar al mismo tiempo.",
                ideal: "Niños con diferencia de 3+ años. Horarios de estudio distintos.",
                color: "border-blue-200 bg-blue-50",
              },
              {
                num: "2",
                titulo: "Camarote + escritorio externo (dos estudian simultáneo)",
                desc: "El camarote sin escritorio integrado (o con escritorio más compacto) más un escritorio independiente contra la pared. Ocupa más espacio pero permite que ambos estudien al mismo tiempo sin interrumpirse.",
                ideal: "Hermanos en la misma etapa escolar que hacen tareas juntos.",
                color: "border-indigo-200 bg-indigo-50",
              },
              {
                num: "3",
                titulo: "Camarote con escritorio largo lateral",
                desc: "Si la pieza lo permite, se puede fabricar un camarote con escritorio que corra a lo largo de toda la pared. Los dos hermanos tienen zona de trabajo propia. Requiere cotización específica por las medidas.",
                ideal: "Pieza de 12+ m² con pared larga disponible. Necesita cotización a medida.",
                color: "border-violet-200 bg-violet-50",
              },
            ].map((c) => (
              <div key={c.titulo} className={`border rounded-xl p-5 ${c.color}`}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{c.num}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{c.titulo}</h3>
                    <p className="text-gray-600 text-sm mb-2 leading-relaxed">{c.desc}</p>
                    <p className="text-xs text-gray-500"><strong>Ideal para:</strong> {c.ideal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Modelos para pieza compartida</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/camarote-con-escritorio", label: "Camarote con Escritorio", desc: "El base. Dos camas + un escritorio." },
              { href: "/camarote-con-escritorio-nino", label: "Para Niños", desc: "Diseñado pensando en dos niños en la misma pieza." },
              { href: "/camarote-con-escritorio-adolescente", label: "Para Adolescentes", desc: "Cuando los hermanos ya estudian en serio." },
              { href: "/camarote-con-escritorio-a-medida", label: "A Medida", desc: "Configuraciones especiales para tu pieza específica." },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
                <p className="text-gray-500 text-xs">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos m² tiene la pieza?</h2>
          <p className="text-gray-400 text-sm mb-5">Con las medidas y las edades de los niños te decimos cuál de las 3 configuraciones aplica para ti.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Consultar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
