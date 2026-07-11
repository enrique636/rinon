import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio para Pieza Arrendada — ¿Vale la Pena? | Camarotes Chile",
  description:
    "¿Vale la pena comprar un camarote con escritorio si arriendan una pieza? Sí — y acá te explicamos exactamente por qué y cómo elegir el modelo correcto para una pieza arrendada.",
  keywords: [
    "camarote escritorio pieza arrendada",
    "cama alta escritorio arriendo",
    "camarote para arrendatario",
    "mueble pieza arrendada cama escritorio",
    "camarote para arrendatario santiago",
    "comprar camarote pieza arrendada",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-pieza-arrendada" },
};

export default function CamaroteEscritorioPiezaArrendadaPage() {
  const wa = getWhatsAppUrl("Hola, arriendo una pieza y quiero un camarote con escritorio. Tengo algunas preguntas antes de comprar.");
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Puedo llevarme el camarote si me cambio de pieza?", acceptedAnswer: { "@type": "Answer", text: "Sí. El camarote metálico se desmonta y se vuelve a armar. Puedes llevarlo a otra pieza sin problema. Algunos modelos son completamente atornillados — sin herramienta ni soldadura. La mudanza del camarote no es más compleja que la de cualquier otro mueble grande." } },
          { "@type": "Question", name: "¿Vale la pena comprar un camarote si arriendo?", acceptedAnswer: { "@type": "Answer", text: "Sí, si llevas más de 6 meses en la misma pieza o planeas quedarte un año o más. El camarote mejora tu calidad de vida (mejor sueño, escritorio siempre disponible, más espacio libre) y te lo puedes llevar cuando te cambies. No es una inversión perdida." } },
          { "@type": "Question", name: "¿La pieza queda marcada cuando desmontan el camarote?", acceptedAnswer: { "@type": "Answer", text: "El camarote no se ancla a las paredes ni al piso — se sostiene por su propio peso y estructura. Al desmontarlo, la pieza queda exactamente igual que antes. No hay perforaciones ni marcas en paredes o piso." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Pieza Arrendada</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 text-sm text-amber-700 font-medium mb-5">🏠 Pieza arrendada · Se desmonta · Sin daño al inmueble</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarote con Escritorio para Pieza Arrendada</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Una pregunta que nos llega todos los días: "Arriendo una pieza, ¿vale la pena invertir
            en un camarote?" La respuesta corta es sí — con condiciones. Acá te explicamos cuándo
            tiene sentido y cómo elegir el modelo correcto.
          </p>
          
          <div className="my-5 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-con-escritorio-economico-real.jpg" alt="Camarote con escritorio para pieza arrendada — pago contra entrega" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Consultar por WhatsApp</a>
        </div>

        {/* La pregunta central */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Vale la pena comprar si arriendas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-3">✅ Vale la pena si...</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Llevas o planeas llevar 6+ meses en la misma pieza</li>
                <li>• Tu pieza no tiene escritorio incluido</li>
                <li>• Estudias o trabajas desde casa y necesitas zona de trabajo fija</li>
                <li>• La pieza tiene menos de 14 m² y no te caben cama + escritorio separados</li>
                <li>• Piensas cambiarte a otra pieza (el camarote te acompaña)</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <h3 className="font-bold text-red-800 mb-3">⚠️ Revisa antes si...</h3>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• Tu contrato termina en menos de 3 meses y no sabes si vas a renovar</li>
                <li>• La pieza tiene techo bajo (verificar altura útil necesaria)</li>
                <li>• La pieza viene completamente amoblada y el dueño no permite muebles propios</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Qué preguntar al dueño */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Qué preguntarle al dueño antes de comprar</h2>
          <div className="space-y-3">
            {[
              { q: "¿Cuánto mide el techo de la pieza?", a: "Necesitas al menos 2,00 m de altura libre para un camarote estándar. El camarote mide aproximadamente 1,65-1,70 m de alto." },
              { q: "¿El contrato permite agregar muebles propios?", a: "En piezas sin amoblar siempre. En piezas amobladas, confirmarlo con el dueño para no tener problemas al término del contrato." },
              { q: "¿Tiene algún problema con que instale un camarote?", a: "El camarote no necesita anclarse a paredes ni piso. No hace daño al inmueble. Pero mejor comunicarlo de todas formas." },
            ].map((item) => (
              <div key={item.q} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{item.q}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lo que te llevas cuando te cambias */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">El camarote se va contigo cuando te cambias</h2>
          <p className="text-gray-500 text-sm mb-4">
            El camarote metálico se desmonta completamente. Cuando te cambies de pieza, lo
            desarmas, lo transportas y lo vuelves a armar en el nuevo lugar. Es el mueble que
            menos "pierde" al mudarte porque lo llevas contigo — no se queda en la pieza como
            la pintura o los muebles del dueño.
          </p>
          <p className="text-gray-500 text-sm">
            Para la mudanza, el camarote se divide en piezas que caben en cualquier camioneta.
            No necesitas flete especial.
          </p>
        </div>

        {/* Modelos recomendados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarote-con-escritorio", label: "Camarote con Escritorio Estándar", desc: "El más pedido. Escritorio integrado. Cama 1 plaza arriba." },
            { href: "/camarote-con-escritorio-universitario", label: "Para Universitarios", desc: "Con zona de estudio integrada. Favorito de estudiantes en piezas." },
            { href: "/camarote-con-escritorio-home-office", label: "Para Home Office", desc: "Trabajas desde casa y arriendas. La combinación perfecta." },
            { href: "/camarote-con-escritorio-habitacion-pequena", label: "Habitación Pequeña", desc: "Para piezas de 9-12 m² donde no entra otra alternativa." },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Tienes dudas sobre si aplica para tu pieza?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos las medidas de la pieza y el uso. Te decimos en 5 minutos si el camarote es la solución correcta.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Consultar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
