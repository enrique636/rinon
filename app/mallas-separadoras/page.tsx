"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/config";

const WA = `https://wa.me/${SITE_CONFIG.whatsapp.numero}`;
const getWA = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

const APLICACIONES = [
  { icon: "📦", titulo: "Bodegas y logística", desc: "Separamos zonas de picking, despacho, almacenamiento y circulación de vehículos. Las mallas metálicas para bodegas permiten ver el interior de cada zona manteniendo el control de acceso." },
  { icon: "🏭", titulo: "Industrias y manufactura", desc: "Delimitamos áreas de maquinaria peligrosa, zonas de carga, pasillos de operarios y espacios de trabajo específicos. Fabricamos en acero para resistir el ambiente industrial." },
  { icon: "🚶", titulo: "Protección y control peatonal", desc: "Mallas y barreras para separar flujos de peatones y vehículos, proteger al público en zonas de trabajo o construir pasillos seguros en recintos con circulación mixta." },
  { icon: "🅿️", titulo: "Estacionamientos", desc: "Separamos filas de estacionamiento, delimitamos zonas reservadas, separamos peatones de vehículos y creamos cierres para estacionamientos que necesiten control de acceso." },
  { icon: "🚧", titulo: "Obras y faenas", desc: "Mallas para separar zonas de trabajo activo de áreas de tránsito, proteger perímetros temporales dentro de una obra mayor y delimitar zonas de riesgo." },
  { icon: "🏗️", titulo: "Centros logísticos y distribución", desc: "Divisiones para organizar centros de distribución, separar proveedores de clientes, dividir turnos de trabajo y crear zonas de seguridad alrededor de maquinaria de carga." },
];

const TIPOS = [
  { nombre: "Malla metálica electrosoldada", desc: "La más versátil. Panel rígido de acero soldado, disponible en distintas alturas y longitudes. Se monta sobre postes o estructura metálica existente." },
  { nombre: "Malla tipo reja plegable", desc: "Sistema modular que se puede desplazar lateralmente. Ideal para zonas que necesitan ser habilitadas y cerradas según el turno o el horario." },
  { nombre: "Panel divisorio estático", desc: "Paneles fijos anclados al suelo y al techo (o sólo al suelo). La solución más robusta para separaciones permanentes dentro de bodegas e industrias." },
  { nombre: "Barrera peatonal metálica", desc: "Barrera de tubo o perfiles soldados para controlar el flujo de personas. Modular, resistente y fácil de instalar y reubicar." },
  { nombre: "Solución a medida", desc: "Para proyectos con geometría específica, alturas no estándar o necesidades especiales. Cotizamos con plano o descripción del espacio." },
];

const FAQS = [
  { q: "¿Cuál es la diferencia entre malla separadora y cierre perimetral?", a: "El cierre perimetral delimita el límite exterior de un predio o terreno. La malla separadora divide espacios interiores — dentro de una bodega, una industria o un estacionamiento. Fabricamos ambas." },
  { q: "¿Cuánto mide de alto una malla separadora estándar?", a: "Las alturas más solicitadas son 2,00 m para bodegas e industrias, y 1,00-1,20 m para barreras peatonales y divisiones de pasillos. Fabricamos a la medida que el proyecto requiera." },
  { q: "¿Se pueden instalar sin anclar al piso?", a: "Las barreras peatonales modulares pueden usarse sin anclar — se sostienen por su propio peso o con bases tipo pata. Para divisiones permanentes en bodegas, se recomienda anclar al piso para mayor estabilidad." },
  { q: "¿Cuánto cuesta una malla separadora?", a: "Depende del tipo, la altura, el largo total y si incluye puertas de acceso integradas. Cotizamos por metro lineal. Envíanos las medidas por WhatsApp y te respondemos en el día." },
  { q: "¿Hacen despacho fuera de Santiago?", a: "Sí. Despachamos a todo Chile. Para instalación fuera de la RM, evaluamos según el volumen del proyecto." },
  { q: "¿Pueden incluir puerta de acceso en la malla?", a: "Sí. Podemos fabricar una o más puertas integradas en el panel de malla — batientes o corredizas, con cerradura o sin ella. Se especifica al momento de cotizar." },
];

export default function MallasSeparadorasPage() {
  const [form, setForm] = useState({ nombre: "", empresa: "", telefono: "", ciudad: "", uso: "", metros: "", altura: "", instalacion: "", comentarios: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, quiero cotizar mallas separadoras:\n\nNombre: ${form.nombre}\nEmpresa: ${form.empresa || "—"}\nTeléfono: ${form.telefono}\nCiudad/comuna: ${form.ciudad}\nUso / aplicación: ${form.uso}\nMetros lineales aprox.: ${form.metros}\nAltura requerida: ${form.altura || "estándar"}\nInstalación: ${form.instalacion || "—"}\n\n${form.comentarios ? "Comentarios: " + form.comentarios : ""}`;
    window.open(getWA(msg), "_blank");
  };

  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Manufacturer"],
        name: "Rinon.cl — Mallas Separadoras",
        description: "Fabricante de mallas separadoras metálicas para bodegas, industrias, estacionamientos y control peatonal. Santiago y todo Chile.",
        areaServed: { "@type": "Country", name: "Chile" },
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Mallas Separadoras</span>
        </nav>

        {/* HERO */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            🔲 Mallas y divisiones metálicas · Bodega · Industria · Peatonal
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Mallas Separadoras — División y Delimitación Metálica
          </h1>
          <p className="text-gray-500 text-xl max-w-3xl mb-4 leading-relaxed">
            Fabricamos mallas separadoras, divisiones metálicas y barreras para bodegas, industrias,
            estacionamientos, obras y control peatonal. Soluciones a medida — cualquier largo, altura
            y configuración de acceso.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-8">
            Cotizamos por metro lineal. Fabricamos en Santiago. Instalamos en RM. Despachamos a todo Chile.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={getWA("Hola, necesito cotizar mallas separadoras para [DESCRIBIR USO]. ¿Pueden ayudarme?")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
              Cotizar malla separadora
            </a>
            <a href="#cotizar" className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 font-bold px-8 py-4 rounded-full text-base hover:bg-gray-900 hover:text-white transition-colors">
              Enviar medidas
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {[
            { icon: "📐", t: "A medida", d: "Cualquier largo, alto y configuración" },
            { icon: "🚪", t: "Puertas integradas", d: "Puertas batientes o corredizas incluidas" },
            { icon: "🏭", t: "Acero industrial", d: "Resistente a uso intensivo y ambiente industrial" },
            { icon: "🚚", t: "Todo Chile", d: "Despacho nacional. Instalación en RM." },
          ].map(f => (
            <div key={f.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{f.icon}</span>
              <p className="font-semibold text-gray-900 text-sm mb-1">{f.t}</p>
              <p className="text-gray-400 text-xs">{f.d}</p>
            </div>
          ))}
        </div>

        {/* Aplicaciones */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">¿Para qué se usan las mallas separadoras?</h2>
          <p className="text-gray-500 text-sm mb-6">No existe un único nombre comercial — se llaman mallas divisorias, separadores metálicos, divisiones de bodega, barreras peatonales. Todos son lo mismo. Lo que cambia es el uso.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {APLICACIONES.map(a => (
              <div key={a.titulo} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
                <span className="text-2xl flex-shrink-0">{a.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{a.titulo}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tipos */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos de mallas separadoras que fabricamos</h2>
          <div className="space-y-3">
            {TIPOS.map(t => (
              <div key={t.nombre} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{t.nombre}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subpáginas */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Soluciones específicas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: "/mallas-separadoras-bodegas", label: "Para Bodegas", icon: "📦" },
              { href: "/mallas-separadoras-industriales", label: "Para Industrias", icon: "🏭" },
              { href: "/barreras-peatonales", label: "Barreras Peatonales", icon: "🚶" },
              { href: "/cierres-perimetrales", label: "Cierres Perimetrales", icon: "🔲" },
              { href: "/estructuras-metalicas", label: "Estructuras Metálicas", icon: "🔩" },
              { href: "/portones-metalicos", label: "Portones Metálicos", icon: "🚪" },
            ].map(l => (
              <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-sm transition-all flex items-center gap-3">
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

        {/* Formulario */}
        <div id="cotizar" className="mb-10">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-2">Cotiza tu malla separadora</h2>
            <p className="text-gray-400 text-sm mb-8">Cuéntanos el uso y las medidas. Te respondemos en el día.</p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required placeholder="Nombre *" value={form.nombre} onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400" />
              <input placeholder="Empresa (opcional)" value={form.empresa} onChange={e => setForm(p => ({ ...p, empresa: e.target.value }))}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400" />
              <input required placeholder="Teléfono *" value={form.telefono} onChange={e => setForm(p => ({ ...p, telefono: e.target.value }))}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400" />
              <input required placeholder="Ciudad / Comuna *" value={form.ciudad} onChange={e => setForm(p => ({ ...p, ciudad: e.target.value }))}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400" />
              <select required value={form.uso} onChange={e => setForm(p => ({ ...p, uso: e.target.value }))}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-400 text-white">
                <option value="">Uso / aplicación *</option>
                {["Bodega / Galpón", "Industria / Manufactura", "Control peatonal", "Estacionamiento", "Obra / Faena", "Centro logístico", "Otro"].map(o => <option key={o} value={o}>{o}</option>)}
              </select>
              <input placeholder="Metros lineales aprox." value={form.metros} onChange={e => setForm(p => ({ ...p, metros: e.target.value }))}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400" />
              <input placeholder="Altura requerida (ej: 2 metros)" value={form.altura} onChange={e => setForm(p => ({ ...p, altura: e.target.value }))}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400" />
              <select value={form.instalacion} onChange={e => setForm(p => ({ ...p, instalacion: e.target.value }))}
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-400 text-white">
                <option value="">¿Necesita instalación?</option>
                <option value="Sí, con instalación">Sí, con instalación</option>
                <option value="No, solo fabricación">No, solo fabricación</option>
              </select>
              <textarea placeholder="Comentarios — describe el espacio, el uso, si necesita puertas de acceso..." value={form.comentarios} onChange={e => setForm(p => ({ ...p, comentarios: e.target.value }))}
                rows={3} className="md:col-span-2 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 resize-none" />
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-full text-base transition-colors">
                  Enviar cotización por WhatsApp
                </button>
                <p className="text-gray-500 text-xs text-center mt-3">Se abre WhatsApp con tu consulta lista — solo confirma el mensaje.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
