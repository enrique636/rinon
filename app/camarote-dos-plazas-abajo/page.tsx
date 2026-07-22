import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote 2 Plazas Abajo | Doble + Individual — Chile",
  description:
    "Camarote con cama de 2 plazas abajo y 1 plaza arriba. Fabricado en Chile con tubo de acero 2\". Medidas reales: 150 cm largo × 160 cm ancho × 150 cm alto. Cotiza sin compromiso.",
  keywords: [
    "camarote dos plazas abajo",
    "camarote cama doble abajo",
    "camarote 2 plazas y 1 plaza",
    "litera doble abajo simple arriba",
    "camarote matrimonial abajo",
    "camarote 2 x 1",
    "camarote cama doble con individual arriba",
    "camarote santiago fabricante",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-dos-plazas-abajo" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

const FOTOS = [
  {
    src: "/productos/camarote-dos-plazas/foto-1.jpg",
    alt: "Camarote con cama doble abajo y plaza arriba — vista frontal — Rinon.cl Santiago",
    titulo: "Vista frontal",
  },
  {
    src: "/productos/camarote-dos-plazas/foto-2.jpg",
    alt: "Camarote 2 plazas abajo 1 plaza arriba — escalera lateral incorporada — fabricado en acero 2 pulgadas",
    titulo: "Escalera incorporada",
  },
  {
    src: "/productos/camarote-dos-plazas/foto-3.jpg",
    alt: "Detalle estructura camarote cama matrimonial abajo cama simple arriba — soldadura MIG — Santiago Chile",
    titulo: "Detalle estructura",
  },
];

export default function CamaroteDosPlazasAbajoPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Camarote 2 Plazas Abajo + 1 Plaza Arriba",
            description:
              "Camarote con cama de 2 plazas en el nivel inferior y cama de 1 plaza en el nivel superior. Fabricado en tubo de acero 2\" en Santiago.",
            provider: {
              "@type": "LocalBusiness",
              name: "Camarotes Chile",
              address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
            },
            serviceType: "Fabricación de camarotes metálicos",
            areaServed: { "@type": "Country", name: "Chile" },
            brand: { "@type": "Brand", name: "Camarotes Chile" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto mide el camarote 2 plazas abajo 1 plaza arriba?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La cama inferior mide 150 cm de ancho interno (160 cm externo) × 190 cm de largo. La cama superior puede ser 1 plaza (90 cm interno) o 1½ plazas (105 cm interno). La altura total del mueble es 150 cm. La distancia del suelo a la primera cama es 43 cm.",
                },
              },
              {
                "@type": "Question",
                name: "¿La cama de arriba puede ser de 1½ plazas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. El nivel superior puede fabricarse en 1 plaza (90 cm interno) o 1½ plazas (105 cm interno). Se elige al hacer el pedido según el uso y el espacio disponible.",
                },
              },
              {
                "@type": "Question",
                name: "¿Este camarote cabe en una pieza estándar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El ancho externo mínimo es 160 cm (cama de 2 plazas abajo). Es importante medir el espacio antes de cotizar. Nos puedes enviar las medidas de la pieza por WhatsApp y te confirmamos si entra.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tiempo tarda la entrega?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El tiempo de fabricación y entrega varía según la carga de trabajo del taller. Consulta la disponibilidad actual por WhatsApp al momento de cotizar.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">
            Camarotes
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Camarote 2 Plazas Abajo</span>
        </nav>

        {/* Hero con galería */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-sm text-blue-700 font-medium mb-5">
            🛏️ Cama doble abajo · 1 plaza arriba · 3 personas en 1 estructura
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarote 2 Plazas Abajo + 1 Plaza Arriba
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Cama matrimonial abajo y cama individual dispuesta en el nivel superior.
            La solución para familias, parejas con hijo o piezas donde hay que acomodar
            a tres personas sin llenar el suelo de camas. Fabricado en acero 2&quot; en
            nuestro taller en Santiago.
          </p>

          {/* Galería de fotos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {FOTOS.map((foto, i) => (
              <div
                key={foto.src}
                className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 ${
                  i === 0 ? "md:col-span-2 aspect-[4/3]" : "aspect-square"
                }`}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  className="object-cover object-center"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                  priority={i === 0}
                />
                <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                  {foto.titulo}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
                      <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-escritorio-2-plazas-nordico.jpg" alt="Camarote con 2 plazas abajo y escritorio — estilo nórdico minimalista" className="w-full object-cover" loading="lazy" />
          </div>
<a
              href={wa(
                "Hola, me interesa el camarote con 2 plazas abajo y 1 plaza arriba. ¿Pueden darme las medidas y el precio?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
            >
              Cotizar por WhatsApp
            </a>
            <Link
              href="/camarotes"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-base hover:border-gray-400 transition-colors"
            >
              Ver todos los modelos
            </Link>
          </div>
        </div>

        {/* Ficha técnica real */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Ficha Técnica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Medidas */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">
                Medidas
              </h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-blue-100">
                  {[
                    ["Altura total", "150 cm"],
                    ["Largo", "190 cm"],
                    ["Ancho cama abajo (2 plazas)", "150 cm interno / 160 cm externo"],
                    ["Ancho cama arriba (1 plaza)", "90 cm interno / 100 cm externo"],
                    ["Ancho cama arriba (1½ plazas)", "105 cm interno / 115 cm externo"],
                    ["Separación entre camas", "90 cm"],
                    ["Altura suelo → primera cama", "43 cm"],
                  ].map(([label, value]) => (
                    <tr key={label} className="py-2">
                      <td className="py-2 text-gray-500 pr-3">{label}</td>
                      <td className="py-2 text-gray-900 font-semibold text-right">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Materiales */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">
                Materiales y construcción
              </h3>
              <ul className="space-y-2">
                {[
                  "Tubo de acero en 2 pulgadas",
                  "Travesaños tubulares de ⅝\"",
                  "Soldadura MIG reforzada para adultos",
                  "Tratamiento antioxidante",
                  "Pintura electrostática, secado al horno",
                  "Escalera incorporada y soldada en un cuerpo",
                  "Sommier en pino seco de 3 × 1 pulgadas",
                  "Sommier tipo roller embalado enrollable",
                  "Tapas regatones tipo bola en PVC",
                  "Tapas regatones planas en patas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Opciones al cotizar */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Opciones disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: "🪜", t: "Escalera lateral", d: "Facilita la bajada por el centro — más cómodo que subir por las puntas." },
              { icon: "🛡️", t: "Baranda de seguridad", d: "Para el nivel superior. Recomendada si el durmiente de arriba se mueve mucho." },
              { icon: "⚙️", t: "Sommier metálico", d: "Cambio del sommier de pino por uno metálico (tipo antiguo). Más resistente." },
              { icon: "📐", t: "Medidas personalizadas", d: "Se pueden ajustar largo, ancho o alto según el espacio disponible." },
              { icon: "🛏️", t: "Cama arriba 1½ plazas", d: "El nivel superior puede ser 1 plaza (90 cm) o 1½ plazas (105 cm)." },
              { icon: "😴", t: "Colchones", d: "Disponibles al cotizar. Se consiguen juntos con el camarote." },
            ].map((o) => (
              <div
                key={o.t}
                className="flex gap-3 bg-white border border-gray-200 rounded-xl p-4"
              >
                <span className="text-xl flex-shrink-0">{o.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{o.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{o.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Para quién es */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Para quién es este modelo?</h2>
          <div className="space-y-3">
            {[
              {
                t: "Padres con hijo pequeño",
                d: "Los padres duermen en la cama de 2 plazas abajo y el hijo en la cama individual arriba. Toda la familia en un solo mueble, cada uno en su espacio.",
              },
              {
                t: "Hermanos con necesidades distintas",
                d: "Cuando el mayor ya no cabe en una plaza pero el menor sí. El mayor va abajo con 2 plazas y el menor arriba. Sin comprar dos camas separadas.",
              },
              {
                t: "Piezas de arriendo para grupos",
                d: "Habitaciones compartidas donde hay que maximizar la capacidad. Este modelo da 3 posiciones de dormir en el espacio de 1½ camas.",
              },
            ].map((c) => (
              <div key={c.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{c.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alerta medidas */}
        <div className="mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h3 className="font-bold text-amber-900 mb-2 text-sm">
              ⚠️ Mide tu pieza antes de cotizar
            </h3>
            <p className="text-amber-700 text-xs leading-relaxed">
              El ancho externo mínimo de este modelo es <strong>160 cm</strong> (cama de 2 plazas
              abajo). Si tu pieza tiene menos espacio libre, este modelo no entra. Escríbenos las
              medidas por WhatsApp y te decimos si cabe o qué ajuste hacemos.
            </p>
          </div>
        </div>

        {/* Links internos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            {
              href: "/camarote-titanic",
              label: "Camarote Titanic",
              desc: "El más robusto — para uso intensivo fijo",
            },
            {
              href: "/camarote-nido",
              label: "Camarote con Nido",
              desc: "3 camas en 1 — cuando el espacio es mínimo",
            },
            {
              href: "/camarote-triple",
              label: "Camarote Triple",
              desc: "3 niveles — para familias con 3 hijos",
            },
            {
              href: "/camarote-1-5-plazas",
              label: "Camarote 1½ + 1 Plaza",
              desc: "Más cómodo abajo que el estándar — sin llegar a 2 plazas",
            },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-400 transition-all"
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        {/* CTA final */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuánto mide tu pieza?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Necesitamos el ancho y el alto disponible para confirmarte que el modelo entra
            y cotizarte sin sorpresas. Te respondemos hoy.
          </p>
          <a
            href={wa(
              "Hola, me interesa el camarote con 2 plazas abajo y 1 plaza arriba. La pieza mide [ANCHO] x [LARGO] x [ALTO]. ¿Pueden cotizarme?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
