import type { Metadata } from "next";
import Link from "next/link";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cama Institucional Metálica Gris Chile | Carabineros, Ejército, Gendarmería — Despacho Nacional",
  description: "Cama metálica gris institucional para fuerzas de orden de Chile. Funciona como cama individual o apilada como camarote desmontable. Para Carabineros, Ejército, Gendarmería, Armada, Fuerza Aérea, PDI y Bomberos.",
  keywords: [
    "cama carabineros chile",
    "cama institucional metalica",
    "cama gendarmeria chile",
    "cama ejercito de chile",
    "cama armada de chile",
    "cama fuerza aerea chile",
    "cama PDI chile",
    "cama bomberos chile",
    "cama CONAF chile",
    "cama aduana chile",
    "cama fuerzas de orden chile",
    "camarote desmontable institucional",
    "cama metalica gris institucional",
    "cama para cuartel chile",
    "proveedor camas institucionales chile",
    "cama individual que se apila como camarote",
    "camas para dormitorio institucional chile",
    "cama carabineros de chile precio",
    "camarote desmontable para cuartel",
    "cama metalica gris carabineros",
    "camas para academia policial chile",
    "fabricante camas institucionales chile",
  ],
  alternates: { canonical: "https://rinon.cl/cama-institucional-metalica" },
  openGraph: {
    title: "Cama Institucional Metálica | Carabineros, Ejército, Gendarmería — Rinon.cl",
    description: "Cama metálica gris para instituciones de orden chilenas. Funciona como cama individual o camarote desmontable apilado.",
    type: "website",
    locale: "es_CL",
  },
};

const imgs = [
  { src: "/images/camarotes/cama-institucional-gris-individual-y-camarote.jpg", alt: "Cama institucional metálica gris — configuración individual y camarote apilado" },
  { src: "/images/camarotes/camarote-institucional-gris-cuartel.jpg", alt: "Cama institucional en cuartel con botas alineadas" },
  { src: "/images/camarotes/camas-institucionales-dormitorio-multiple.jpg", alt: "Dormitorio institucional con múltiples camas grises" },
  { src: "/images/camarotes/cama-metalica-gris-individual-institucional.jpg", alt: "Cama metálica gris individual con radio y velador" },
  { src: "/images/camarotes/camarote-desmontable-institucional-locker.jpg", alt: "Camarote desmontable institucional con locker" },
  { src: "/images/camarotes/dormitorio-institucional-camas-grises.jpg", alt: "Dormitorio institucional con lockers y camas grises" },
  { src: "/images/camarotes/cama-metalica-gris-pension-hospedaje.jpg", alt: "Cama metálica gris en pensión o hospedaje" },
  { src: "/images/camarotes/camarote-institucional-moderno-led.jpg", alt: "Camarote institucional moderno con iluminación LED" },
];

const instituciones = [
  "Carabineros de Chile",
  "Gendarmería de Chile",
  "Ejército de Chile",
  "Armada de Chile",
  "Fuerza Aérea de Chile",
  "PDI — Policía de Investigaciones",
  "Bomberos de Chile",
  "CONAF",
  "Aduana de Chile",
];

const faqs = [
  {
    q: "¿Esta cama se puede apilar como camarote?",
    a: "Sí. Esa es su característica principal — se vende como cama individual pero dos unidades se apilan formando un camarote desmontable. Se puede usar de las dos formas según la necesidad del recinto.",
  },
  {
    q: "¿Por qué la usan las instituciones de orden?",
    a: "La estructura gris metálica reforzada, el diseño austero y funcional, y la posibilidad de configurarla como cama individual o camarote la hacen ideal para cuarteles, academias y recintos institucionales.",
  },
  {
    q: "¿Emiten factura para licitaciones?",
    a: "Sí. Emitimos facturas y podemos participar como proveedores en procesos de compra institucional. Contáctanos para coordinar.",
  },
  {
    q: "¿Cuántas unidades mínimas se pueden pedir?",
    a: "No hay mínimo para compras individuales. Para compras por volumen (10+ unidades) tenemos precios especiales. Consúltanos.",
  },
  {
    q: "¿Hacen despacho a regiones y zonas extremas?",
    a: "Sí, coordinamos despacho a todo Chile incluyendo regiones extremas. El costo y plazo dependen del destino.",
  },
];

export default function CamaInstitucionalMetalicaPage() {
  const waUrl = getProductWhatsAppUrl("Cama Institucional Metálica");

  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl" },
            { "@type": "ListItem", position: 2, name: "Camarotes", item: "https://rinon.cl/camarotes" },
            { "@type": "ListItem", position: 3, name: "Cama Institucional Metálica", item: "https://rinon.cl/cama-institucional-metalica" },
          ],
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Cama Institucional Metálica Gris",
          description: "Cama metálica gris para instituciones de orden chilenas. Funciona como cama individual o apilada como camarote desmontable. Carabineros, Ejército, Gendarmería, Armada, Fuerza Aérea, PDI, Bomberos.",
          provider: {
            "@type": "LocalBusiness",
            name: "Camarotes Chile",
            address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
          },
          serviceType: "Fabricación de camarotes metálicos",
          areaServed: { "@type": "Country", name: "Chile" },
          brand: { "@type": "Brand", name: "Camarotes Chile" },
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}} />

        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link><span>/</span>
          <span className="text-gray-700 font-medium">Cama Institucional Metálica</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="grid grid-cols-2 gap-2">
            {imgs.slice(0, 4).map((img) => (
              <div key={img.src} className="aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div>
            <span className="inline-block bg-gray-700 text-white text-xs font-semibold rounded-full px-3 py-1 mb-3">Fuerzas de Orden · Chile</span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Cama Institucional Metálica</h1>
            <p className="text-gray-500 font-medium mb-4">Cama individual gris o camarote desmontable — para instituciones de orden</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              La <strong>cama metálica institucional gris</strong> es el modelo estándar de las fuerzas de orden de Chile. Se usa como <strong>cama individual</strong> o se apila sobre otra unidad idéntica formando un <strong>camarote desmontable institucional</strong>. Diseño austero, robusto y funcional para cuarteles, academias y recintos de las instituciones uniformadas.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {[
                { label: "Color", value: "Gris metálico" },
                { label: "Uso 1", value: "Cama individual" },
                { label: "Uso 2", value: "Camarote apilado" },
                { label: "Despacho", value: "Todo Chile" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
                  <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                  <p className="text-gray-700 font-bold text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 mb-6 text-sm text-gray-700">
              Escalera soldada en respaldo incluida. Escalera lateral y baranda se venden por separado.
            </div>

            <div className="flex flex-col gap-3">
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="w-full text-center inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full transition-colors">
                Cotizar por WhatsApp
              </a>
              <Link href="/cotizar" className="w-full text-center py-3.5 border-2 border-gray-200 hover:border-gray-400 text-gray-700 font-semibold rounded-full transition-colors">
                Solicitar cotización institucional
              </Link>
            </div>
          </div>
        </div>


        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Instituciones que la utilizan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {instituciones.map((inst) => (
              <div key={inst} className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 font-medium">
                {inst}
              </div>
            ))}
          </div>
        </div>

        <div className="prose prose-gray max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Cama o camarote — dos usos en una estructura</h2>
          <p className="text-gray-600 leading-relaxed">
            La <strong>cama institucional metálica gris</strong> tiene una ventaja única sobre el camarote estándar: es modular. Cada unidad funciona perfectamente como cama individual, pero si el recinto necesita más capacidad, dos unidades se apilan formando un camarote desmontable. Sin tornillería compleja — la misma estructura que sirve de dos formas.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Proveedores para compras institucionales</h2>
          <p className="text-gray-600 leading-relaxed">
            Trabajamos con instituciones del Estado, contratistas y empresas de abastecimiento. Emitimos facturas, podemos participar en licitaciones y coordinamos despacho a cualquier región de Chile, incluyendo zonas extremas. Para volúmenes de 10 unidades o más, contáctanos para precio especial.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 text-center text-white mb-12">
          <h2 className="text-xl font-bold mb-2">Cotiza camas institucionales para tu recinto</h2>
          <p className="text-gray-400 text-sm mb-5">Despacho a todo Chile. Facturas disponibles. Precios por volumen.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-1.5">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
          {imgs.slice(4).map((img) => (
            <div key={img.src} className="aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">También puede interesarte</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/camarote-militar", label: "Camarote Militar" },
              { href: "/camarote-desmontable", label: "Camarote Desmontable" },
              { href: "/camarote-faenero", label: "Camarote Faenero" },
              { href: "/camarotes-militares", label: "Camarotes Militares" },
            ].map((p) => (
              <Link key={p.href} href={p.href}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all text-center">
                <p className="text-sm font-medium text-gray-700">{p.label}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
