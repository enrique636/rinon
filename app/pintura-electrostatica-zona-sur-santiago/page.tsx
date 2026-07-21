import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pintura Electrostática Zona Sur Santiago | Hub",
  description:
    "Pintura electrostática al horno para la zona sur de Santiago: San Bernardo, El Bosque, La Pintana, La Cisterna, San Ramón, Pedro Aguirre Cerda, Lo Espejo y más comunas.",
  keywords: [
    "pintura electrostatica zona sur santiago",
    "pintura al horno zona sur",
    "pintura electrostatica san bernardo area",
    "pintura metalica sur santiago",
  ],
  alternates: { canonical: "https://rinon.cl/pintura-electrostatica-zona-sur-santiago" },
};

function getWAUrl(msg: string) {
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
}

const faqs = [
  {
    q: "¿Atienden toda la zona sur de Santiago?",
    a: "Sí. Atendemos todas las comunas del sur de Santiago: San Bernardo, El Bosque, La Pintana, Lo Espejo, San Ramón, La Cisterna, Pedro Aguirre Cerda y La Granja, entre otras.",
  },
  {
    q: "¿Pueden retirar las piezas en mi domicilio?",
    a: "Sí. Coordinamos retiro a domicilio en la zona sur de Santiago. Al cotizar te confirmamos disponibilidad y costo de retiro según tu dirección.",
  },
  {
    q: "¿Cuánto tarda la pintura electrostática al horno?",
    a: "Para rejas y portones residenciales el plazo es de 3 a 5 días hábiles. Para volúmenes mayores puede extenderse a 7–10 días hábiles.",
  },
  {
    q: "¿Qué colores tienen disponibles?",
    a: "Manejamos paleta amplia en negro, blanco, gris, azul, verde, café y colores especiales. También hacemos coloring según muestra. Consulta al cotizar.",
  },
];

const comunas = [
  { nombre: "San Bernardo", href: "/pintura-electrostatica-san-bernardo" },
  { nombre: "El Bosque", href: "/pintura-electrostatica-el-bosque" },
  { nombre: "La Pintana", href: "/pintura-electrostatica-la-pintana" },
  { nombre: "Lo Espejo", href: "/pintura-electrostatica-lo-espejo" },
  { nombre: "San Ramón", href: "/pintura-electrostatica-san-ramon" },
  { nombre: "La Cisterna", href: "/pintura-electrostatica-la-cisterna" },
  { nombre: "Pedro Aguirre Cerda", href: "/pintura-electrostatica-pedro-aguirre-cerda" },
  { nombre: "La Granja", href: "/pintura-electrostatica-la-granja" },
];

const proceso = [
  { n: "1", t: "Retiro", d: "Coordinamos el retiro de tus piezas en tu domicilio o las recibes en nuestro taller." },
  { n: "2", t: "Sandblasting", d: "Limpieza a presión para remover óxido, pintura anterior y contaminantes de la superficie." },
  { n: "3", t: "Aplicación", d: "Aplicación electrostática del polvo de pintura en cabina especializada." },
  { n: "4", t: "Horno", d: "Horneado a 180–200°C para fundir y adherir el polvo, creando una película dura y uniforme." },
  { n: "5", t: "Entrega", d: "Entrega en taller o despacho coordinado a tu domicilio en la zona sur." },
];

const links = [
  { href: "/pintura-electrostatica-san-bernardo", label: "San Bernardo", desc: "Pintura al horno en San Bernardo" },
  { href: "/pintura-electrostatica-el-bosque", label: "El Bosque", desc: "Pintura al horno en El Bosque" },
  { href: "/pintura-electrostatica-la-pintana", label: "La Pintana", desc: "Pintura al horno en La Pintana" },
  { href: "/pintura-electrostatica-lo-espejo", label: "Lo Espejo", desc: "Pintura al horno en Lo Espejo" },
  { href: "/pintura-electrostatica-san-ramon", label: "San Ramón", desc: "Pintura al horno en San Ramón" },
  { href: "/pintura-electrostatica-la-cisterna", label: "La Cisterna", desc: "Pintura al horno en La Cisterna" },
  { href: "/pintura-electrostatica-pedro-aguirre-cerda", label: "Pedro Aguirre Cerda", desc: "Pintura al horno en PAC" },
  { href: "/pintura-electrostatica-la-granja", label: "La Granja", desc: "Pintura al horno en La Granja" },
];

export default function PinturaElectrostaticaZonaSurPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl" },
              { "@type": "ListItem", position: 2, name: "Pintura Electrostática", item: "https://rinon.cl/pintura-electrostatica" },
              { "@type": "ListItem", position: 3, name: "Zona Sur Santiago", item: "https://rinon.cl/pintura-electrostatica-zona-sur-santiago" },
            ],
          }),
        }}
      />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/pintura-electrostatica" className="hover:text-gray-600">Pintura Electrostática</Link><span>/</span>
          <span className="text-gray-700 font-medium">Zona Sur Santiago</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            Zona Sur Santiago · Retiro y despacho
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Pintura Electrostática Zona Sur de Santiago
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Servicio de pintura electrostática al horno para todas las comunas del sur de
            Santiago. Rejas de frontis, portones corredizos, estructuras metálicas y mobiliario
            de metal — con retiro coordinado desde tu domicilio.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6 leading-relaxed">
            Atendemos particulares y empresas en San Bernardo, El Bosque, La Pintana, Lo Espejo,
            San Ramón, La Cisterna, Pedro Aguirre Cerda, La Granja y comunas vecinas.
          </p>
          <a
            href={getWAUrl("Hola, necesito pintura electrostática para [objeto]. Estoy en [comuna zona sur]. ¿Pueden retirar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Comunas de la zona sur que atendemos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {comunas.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium hover:border-gray-400 transition-colors text-center"
              >
                {c.nombre}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Cómo funciona el servicio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {proceso.map((p) => (
              <div key={p.n} className="bg-zinc-50 border border-zinc-100 rounded-xl p-4 text-center">
                <span className="w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center mx-auto mb-3">
                  {p.n}
                </span>
                <p className="font-semibold text-gray-900 text-sm mb-1">{p.t}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Ir directo a tu comuna</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all"
              >
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
                <p className="text-gray-500 text-xs">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿En qué comuna estás?</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">
            Dinos qué necesitas pintar y desde dónde. Coordinamos el retiro y te respondemos en el día.
          </p>
          <a
            href={getWAUrl("Hola, necesito pintura electrostática para [objeto]. Estoy en [comuna zona sur]. ¿Pueden retirar?")}
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
