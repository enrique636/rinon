import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { CierresForm } from "@/components/ui/CierresForm";

export const metadata: Metadata = {
  title: "Cierres Perimetrales | Fabricante e Instalador — Santiago",
  description: "Fabricamos e instalamos cierres perimetrales en Chile: malla electrosoldada, reja tubular, cercos y más. Para constructoras, industrias, bodegas y condominios. Cotiza por WhatsApp.",
  keywords: [
    "cierres perimetrales chile",
    "cierre perimetral santiago",
    "fabricante cierres perimetrales",
    "malla electrosoldada chile",
    "reja tubular perimetral",
    "cierre perimetral constructoras",
    "cerco perimetral industria",
    "cierre perimetral precio",
  ],
  alternates: { canonical: "https://rinon.cl/cierres-perimetrales" },
};

const WA = `https://wa.me/${SITE_CONFIG.whatsapp.numero}`;
const getWA = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

const TIPOS = [
  {
    icon: "🔲",
    nombre: "Malla metálica electrosoldada",
    desc: "Paneles de malla de acero soldada en frío. La solución más económica y de mayor velocidad de instalación para cerrar terrenos, obras, bodegas e industrias. Disponible en distintas alturas y calibres.",
    usos: ["Obras en construcción", "Terrenos sin edificar", "Bodegas y galpones", "Faenas temporales"],
  },
  {
    icon: "⬛",
    nombre: "Reja tubular perimetral",
    desc: "Estructura de tubos de acero soldados, más robusta y estética que la malla. Ideal para cierres definitivos en condominios, empresas, estacionamientos y cualquier proyecto donde el aspecto visual importa.",
    usos: ["Condominios", "Empresas y oficinas", "Estacionamientos", "Predios industriales"],
  },
  {
    icon: "〰️",
    nombre: "Cerco de alambre galvanizado",
    desc: "Alambre de acero galvanizado tensado entre postes. La opción más rápida para cerrar superficies grandes. Común en terrenos agrícolas, parcelas, predios rurales y etapas previas a construcción.",
    usos: ["Terrenos grandes", "Parcelas y predios rurales", "Separación de lotes", "Cierre temporal"],
  },
  {
    icon: "🏗️",
    nombre: "Panel prefabricado tipo claro",
    desc: "Paneles modulares de acero que se instalan y retiran sin obra civil permanente. Perfectos para faenas y obras que necesitan cerrar hoy y retirar el cierre al terminar el proyecto.",
    usos: ["Faenas y obras temporales", "Eventos", "Recintos temporales", "Obras en vía pública"],
  },
  {
    icon: "🧱",
    nombre: "Plancha ondulada metálica",
    desc: "Cierre opaco con plancha de acero galvanizada u ondulada. Oculta el interior del predio, resiste el viento y no requiere mantenimiento. Muy usado en bodegas, talleres e industrias.",
    usos: ["Bodegas e industrias", "Talleres", "Patios de maquinaria", "Zonas de carga y descarga"],
  },
  {
    icon: "🚧",
    nombre: "Cierre de obra con valla",
    desc: "Vallas modulares de acero para cercar obras en vía pública o zonas urbanas. Cumplen normativa de vialidad, protegen al peatón y delimitan el área de trabajo con claridad.",
    usos: ["Obras en calzada", "Renovaciones urbanas", "Trabajos en vía pública", "Eventos en espacio público"],
  },
];

const SECTORES = [
  { icon: "🏗️", titulo: "Constructoras y obras", desc: "El cierre perimetral de obra es obligatorio en la mayoría de los permisos de construcción. Fabricamos e instalamos cierres temporales y definitivos para proyectos de cualquier escala. Emitimos factura y podemos adecuarnos a los plazos de avance de obra." },
  { icon: "🏭", titulo: "Industrias y bodegas", desc: "Las industrias necesitan cierres que definan el perímetro del predio, controlen los accesos y soporten el uso intensivo. Fabricamos con acero estructural y pintura electrostática — durabilidad que se mide en décadas, no en años." },
  { icon: "🏘️", titulo: "Condominios y conjuntos habitacionales", desc: "El cierre perimetral de un condominio es el primer filtro de seguridad. Diseñamos soluciones que combinan seguridad, estética y facilidad de mantención. Con portón de acceso peatonal y vehicular integrado si se requiere." },
  { icon: "🅿️", titulo: "Estacionamientos", desc: "Cierres para estacionamientos al aire libre o cubiertos. Controlamos el perímetro, definimos accesos y podemos incluir portón motorizado. Experiencia con estacionamientos comerciales, de edificios y playas de estacionamiento." },
  { icon: "⛏️", titulo: "Faenas y campamentos mineros", desc: "Las faenas en zonas remotas necesitan cierres resistentes al clima extremo y fáciles de instalar con equipos en terreno. Despachamos a todo Chile y podemos incluir las instrucciones para instalación in situ por el propio equipo de faena." },
  { icon: "📦", titulo: "Bodegas logísticas y centros de distribución", desc: "El cierre perimetral de una bodega define las zonas de carga, controla el acceso de personal y vehículos y protege el inventario. Compatibles con sistemas de control de acceso y CCTV." },
];

const FAQS = [
  { q: "¿Cuánto cuesta un cierre perimetral?", a: "El precio depende del tipo de cierre (malla, reja tubular, plancha), la longitud en metros lineales, la altura y si incluye instalación. No publicamos precios unitarios porque cada proyecto tiene variables distintas. Cotizamos por WhatsApp con los metros y el tipo de terreno." },
  { q: "¿Fabrican e instalan, o solo fabrican?", a: "Hacemos ambas cosas. Podemos entregar el cierre fabricado para que lo instale tu propio equipo, o nos encargamos de la instalación completa. Para proyectos en Santiago RM siempre podemos instalar. Para regiones, evaluamos según el volumen." },
  { q: "¿Cuánto demora fabricar un cierre perimetral?", a: "Depende del tipo y el volumen. Un cierre de malla electrosoldada estándar puede estar listo en 5-10 días hábiles. Rejas tubulares a medida o proyectos de mayor envergadura toman 2-4 semanas. El plazo exacto se confirma al cotizar." },
  { q: "¿Trabajan con constructoras con factura y crédito?", a: "Sí. Emitimos factura electrónica. Para empresas con proyectos frecuentes podemos evaluar condiciones de pago diferidas. El primer proyecto generalmente es al contado o con abono. Consúltanos tu caso." },
  { q: "¿Pueden hacer cierres temporales que se retiren al terminar la obra?", a: "Sí. Los paneles modulares tipo claro se instalan sin obra civil permanente y se retiran sin dejar huella. Son la solución estándar para obras en construcción que necesitan cerrar el perímetro durante la faena." },
  { q: "¿Qué altura tienen los cierres perimetrales?", a: "La altura estándar más solicitada es 2,00 m para usos industriales y de obra. Para condominios y comercio, 1,50-1,80 m es lo habitual. Fabricamos a la altura que el proyecto requiera." },
  { q: "¿Hacen despacho a regiones fuera de la RM?", a: "Sí. Despachamos a todo Chile con empresa de transporte. Hemos atendido proyectos en Valparaíso, Rancagua, Concepción, Temuco y el norte minero. El costo de flete se cotiza según la región y el volumen." },
  { q: "¿Incluyen portones en el cierre perimetral?", a: "Sí. Podemos fabricar portones peatonales y vehiculares que integren al cierre. El portón puede ser batiente, corredizo o con cerradura de llave según el uso. Los portones motorizados los subcontratamos con partners especializados." },
];

export default function CierresPerimetralesPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Manufacturer"],
        name: "Rinon.cl — Cierres Perimetrales",
        description: "Fabricante e instalador de cierres perimetrales en Santiago y todo Chile. Malla electrosoldada, reja tubular, cercos y soluciones a medida para constructoras, industrias y empresas.",
        areaServed: { "@type": "Country", name: "Chile" },
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cierres perimetrales",
          itemListElement: TIPOS.map(t => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: t.nombre } })),
        },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Cierres Perimetrales</span>
        </nav>

        {/* HERO */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🔲 Fabricante · Instalación · Santiago y todo Chile
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Cierres Perimetrales — Fabricación e Instalación en Chile
          </h1>
          <p className="text-gray-500 text-xl max-w-3xl mb-4 leading-relaxed">
            Fabricamos e instalamos cierres perimetrales para constructoras, industrias, bodegas,
            condominios, faenas y terrenos. Desde la malla más económica hasta la reja tubular
            más robusta — todo sale de nuestro taller, sin intermediarios.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-8">
            Más de un tipo de cierre disponible. Cotizamos por metro lineal. Emitimos factura.
            Despachamos a todo Chile. Instalamos en la Región Metropolitana y regiones según el proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={getWA("Hola, necesito cotizar un cierre perimetral. ¿Pueden ayudarme?")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
              Cotizar cierre perimetral
            </a>
            <a href="#cotizar" className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 font-bold px-8 py-4 rounded-full text-base hover:bg-gray-900 hover:text-white transition-colors">
              Enviar medidas
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {[
            { icon: "🏭", t: "Fabricante directo", d: "Desde nuestro taller — sin intermediarios" },
            { icon: "📐", t: "A medida", d: "Cualquier largo, altura y tipo de terreno" },
            { icon: "🚚", t: "Despacho nacional", d: "RM, Valparaíso, Rancagua, Concepción, Temuco" },
            { icon: "🧾", t: "Factura empresa", d: "Factura electrónica para todos los proyectos" },
          ].map(f => (
            <div key={f.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{f.icon}</span>
              <p className="font-semibold text-gray-900 text-sm mb-1">{f.t}</p>
              <p className="text-gray-400 text-xs">{f.d}</p>
            </div>
          ))}
        </div>

        {/* Qué es */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es un cierre perimetral?</h2>
          <div className="prose prose-gray max-w-none text-gray-500 text-base leading-relaxed space-y-3">
            <p>
              Un cierre perimetral es la estructura que delimita y protege el límite exterior de un predio,
              terreno, obra, empresa o instalación. Su función principal es definir el perímetro, controlar
              los accesos y proteger lo que hay dentro — personas, maquinaria, materiales o activos.
            </p>
            <p>
              En Chile, los cierres perimetrales son obligatorios en obras de construcción con permiso municipal,
              en instalaciones industriales con normativa de seguridad y en cualquier proyecto que necesite
              delimitar una zona de trabajo o acceso restringido.
            </p>
            <p>
              No existe un solo tipo de cierre perimetral — hay soluciones para cada presupuesto, duración
              del proyecto y exigencia estética. La elección correcta depende del uso, la duración, el terreno
              y el reglamento aplicable. Nosotros te ayudamos a elegir antes de cotizar.
            </p>
          </div>
        </div>

        {/* Tipos */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tipos de cierres perimetrales que fabricamos</h2>
          <p className="text-gray-500 text-sm mb-6">No vendemos un solo tipo. Te recomendamos el correcto para tu proyecto.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TIPOS.map(t => (
              <div key={t.nombre} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-400 hover:shadow-sm transition-all">
                <span className="text-3xl block mb-3">{t.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{t.nombre}</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{t.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.usos.map(u => <span key={u} className="text-xs bg-slate-100 text-slate-600 rounded-full px-2.5 py-1">{u}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sectores */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Sectores que atendemos</h2>
          <p className="text-gray-500 text-sm mb-6">Experiencia real en proyectos de distintas industrias.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SECTORES.map(s => (
              <div key={s.titulo} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{s.titulo}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proceso */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cómo trabajamos un proyecto de cierre perimetral</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "1", t: "Cotización", d: "Nos envías los metros lineales, el tipo de terreno y el uso. También puedes enviarnos un plano o una foto. Te respondemos con opciones y precios." },
              { n: "2", t: "Visita técnica (si aplica)", d: "Para proyectos grandes o con terreno irregular, hacemos una visita técnica previa a la fabricación para verificar el perímetro y definir puntos de acceso." },
              { n: "3", t: "Fabricación", d: "Fabricamos en nuestro taller con acero de calidad. Pintura electrostática incluida en la mayoría de los modelos. Plazo según tipo y volumen." },
              { n: "4", t: "Instalación o despacho", d: "Instalamos en RM y regiones según el proyecto. Si prefieres instalar tú, despachamos con instrucciones y piezas numeradas." },
            ].map(p => (
              <div key={p.n} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">{p.n}</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{p.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cobertura */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cobertura geográfica</h2>
          <p className="text-gray-500 text-sm mb-5">Fabricamos en Santiago y atendemos proyectos en todo Chile:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { region: "Región Metropolitana", detalle: "Instalación directa en toda la RM" },
              { region: "Valparaíso", detalle: "Valparaíso, Viña del Mar, San Antonio" },
              { region: "O'Higgins", detalle: "Rancagua, Machalí, San Fernando" },
              { region: "Biobío", detalle: "Concepción, Chillán, Los Ángeles" },
              { region: "Araucanía", detalle: "Temuco, Angol, Victoria" },
              { region: "Norte minero", detalle: "Antofagasta, Calama, Copiapó" },
            ].map(c => (
              <div key={c.region} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm">{c.region}</p>
                <p className="text-gray-400 text-xs mt-1">{c.detalle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-páginas internas */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Soluciones específicas por sector</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: "/cierres-para-constructoras", label: "Para Constructoras", icon: "🏗️" },
              { href: "/cierres-para-obras", label: "Para Obras", icon: "🚧" },
              { href: "/cierres-para-bodegas", label: "Para Bodegas", icon: "📦" },
              { href: "/cierres-para-industrias", label: "Para Industrias", icon: "🏭" },
              { href: "/cierres-para-condominios", label: "Para Condominios", icon: "🏘️" },
              { href: "/cierre-de-terrenos", label: "Cierre de Terrenos", icon: "🌍" },
            ].map(l => (
              <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-slate-400 hover:shadow-sm transition-all flex items-center gap-3">
                <span className="text-xl">{l.icon}</span>
                <span className="font-medium text-gray-900 text-sm">{l.label} →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {FAQS.map(f => (
              <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario B2B — client component */}
        <CierresForm />

        {/* Servicios relacionados */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Servicios relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: "/mallas-separadoras", label: "Mallas Separadoras" },
              { href: "/estructuras-metalicas", label: "Estructuras Metálicas" },
              { href: "/pintura-electrostatica", label: "Pintura Electrostática" },
              { href: "/portones-metalicos", label: "Portones Metálicos" },
              { href: "/empresas", label: "Camarotes para Empresas" },
              { href: "/fabricante-camarotes-chile", label: "Fabricante en Chile" },
            ].map(l => (
              <Link key={l.href} href={l.href} className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-white transition-all">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
