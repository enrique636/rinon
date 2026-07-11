import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote 2 Plazas Metálico — 130×190 cm | Precio y Medidas",
  description: "Camarote 2 plazas en acero: cama abajo 130×190 cm, cama arriba 90×190 cm. Ideal para piezas pequeñas. Precio, medidas técnicas y disponibilidad.",
  keywords: ["camarote 2 plazas","camarote dos plazas metalico","litera 2 plazas","camarote plaza y media","camarote 130x190","camarote cama abajo 2 plazas","camarote metalico 2 plazas chile","precio camarote 2 plazas"],
  alternates: { canonical: "https://rinon.cl/camarote-2-plazas" },
  openGraph: {
    title: "Camarote 2 Plazas Metálico — 130×190 cm",
    description: "Cama abajo 2 plazas (130 cm) + cama arriba 1 plaza (90 cm). Estructura de acero, pintura electrostática.",
  },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

const specs = [
  { label: "Cama inferior", value: "130 × 190 cm (2 plazas)" },
  { label: "Cama superior", value: "90 × 190 cm (1 plaza)" },
  { label: "Altura total", value: "175 – 185 cm" },
  { label: "Altura libre inferior", value: "85 – 95 cm" },
  { label: "Material", value: "Acero estructural tubo cuadrado" },
  { label: "Acabado", value: "Pintura electrostática al horno" },
  { label: "Escalera", value: "Lateral integrada con peldaños antideslizantes" },
  { label: "Barandas superiores", value: "Baranda de seguridad 4 lados" },
  { label: "Capacidad inferior", value: "250 kg" },
  { label: "Capacidad superior", value: "150 kg" },
  { label: "Colores disponibles", value: "Negro mate, blanco, gris, café" },
];

export default function Camarote2PlazasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Camarote Metálico 2 Plazas",
    description: "Camarote de acero con cama inferior de 2 plazas (130×190 cm) y cama superior de 1 plaza (90×190 cm). Pintura electrostática al horno.",
    brand: { "@type": "Brand", name: SITE_CONFIG.nombre },
    offers: {
      "@type": "Offer",
      priceCurrency: "CLP",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: SITE_CONFIG.nombre },
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Material", value: "Acero estructural" },
      { "@type": "PropertyValue", name: "Cama inferior", value: "130x190 cm" },
      { "@type": "PropertyValue", name: "Acabado", value: "Pintura electrostática al horno" },
    ],
  };

  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Camarote 2 Plazas</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Camarotes Metálicos · Cama inferior 130 cm · Fabricante</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarote 2 Plazas Metálico</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">La opción más cómoda para dormitorios compartidos: cama abajo de 2 plazas (130 cm de ancho) para el adulto, cama arriba de 1 plaza (90 cm) para el niño o el segundo ocupante. Estructura de acero, sin madera que se deteriore.</p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-escritorio-2-plazas-juvenil.jpg" alt="Camarote 2 plazas con escritorio full en habitación juvenil moderna" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa("Hola, quiero cotizar un camarote metálico 2 plazas (cama inferior 130×190). ¿Precio y disponibilidad?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10 overflow-x-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ficha técnica</h2>
          <table className="w-full text-sm">
            <tbody>
              {specs.map((row) => (
                <tr key={row.label} className="border-b border-gray-100 last:border-0">
                  <td className="py-3 pr-4 font-medium text-gray-700 whitespace-nowrap w-40">{row.label}</td>
                  <td className="py-3 text-gray-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Para quién es este camarote?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { tipo: "Dormitorios familiares", desc: "Papá o mamá abajo en cama grande, el hijo arriba en 1 plaza." },
              { tipo: "Cuartos de empleados", desc: "Trabajadores de jornada rotan en la cama inferior más amplia." },
              { tipo: "Hospedajes y cabañas", desc: "Ofrece una cama cómoda y una plaza adicional en el mismo espacio." },
              { tipo: "Internados y residencias", desc: "Máxima comodidad para la plaza principal del ocupante fijo." },
            ].map((item) => (
              <div key={item.tipo} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{item.tipo}</p>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarote-una-plaza", label: "Camarote 1 Plaza (90×190)", desc: "Modelo estándar institucional" },
            { href: "/camarotes-precio", label: "Precios de Camarotes", desc: "Rangos y modelos disponibles" },
            { href: "/camarotes-metalicos", label: "Catálogo Completo", desc: "Todos los modelos en acero" },
            { href: "/camarotes-adultos", label: "Camarotes para Adultos", desc: "Resistencia y medidas adulto" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu camarote 2 plazas</h2>
          <p className="text-gray-400 text-sm mb-5">Color, cantidad y ciudad de entrega. Respondemos el mismo día.</p>
          <a href={wa("Hola, quiero cotizar camarotes metálicos 2 plazas. Cantidad: [NÚMERO]. Color: [DATO]. Entrega en: [CIUDAD].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
