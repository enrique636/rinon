import type { Metadata } from "next";
import Link from "next/link";
import { seoPages } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = seoPages.home;

const WA = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

const CATEGORIAS = [
  {
    titulo: "Camarotes y camas metálicas",
    descripcion:
      "Camarotes metálicos, camas altas, modelos con escritorio, institucionales, faeneros y militares. Para hogares, empresas e instituciones.",
    href: "/camarotes",
    img: "/images/camarotes/camarote-metalico-negro-fondo-blanco.jpg",
    cta: "Ver camarotes y camas",
    dark: false,
  },
  {
    titulo: "Cierres perimetrales, rejas y portones",
    descripcion:
      "Fabricación e instalación de cierres perimetrales, rejas metálicas, portones, mallas y protecciones para terrenos, empresas, industrias y viviendas.",
    href: "/cierres-perimetrales",
    img: null,
    cta: "Ver cierres y rejas",
    dark: true,
  },
  {
    titulo: "Estructuras metálicas",
    descripcion:
      "Diseño y fabricación de estructuras a medida: techos, galpones, escaleras, soportes, terrazas y cualquier proyecto especial en acero.",
    href: "/estructuras-metalicas",
    img: null,
    cta: "Ver estructuras metálicas",
    dark: true,
  },
  {
    titulo: "Pintura electrostática",
    descripcion:
      "Servicio de pintura electrostática para rejas, muebles, estructuras y piezas metálicas. Terminaciones resistentes para empresas y particulares.",
    href: "/pintura-electrostatica",
    img: null,
    cta: "Ver pintura electrostática",
    dark: true,
  },
];

const SERVICIOS = [
  "Fabricación directa sin intermediarios",
  "Trabajos a medida por unidad o volumen",
  "Soldadura y armado estructural",
  "Corte y dimensionado",
  "Pintura electrostática al horno",
  "Reparación y recuperación de estructuras",
  "Despacho e instalación en Santiago",
  "Atención a empresas e instituciones",
];

const DESTACADOS = [
  {
    titulo: "Camarote con Escritorio",
    desc: "Cama arriba, escritorio abajo. Ideal para estudiantes, gamers y home office.",
    href: "/camarote-con-escritorio",
    img: "/images/camarotes/camarote-escritorio-full-negro.jpg",
    tag: "Camarotes",
  },
  {
    titulo: "Camarote Institucional",
    desc: "Para faenas, campamentos, cuarteles, hostales y residencias. Producción por volumen.",
    href: "/camarotes-faenas",
    img: "/images/camarotes/camarote-faenero-campamento-construccion.jpg",
    tag: "Institucional",
  },
  {
    titulo: "Camarote Nido",
    desc: "3 camas en el espacio de 1. La cama inferior se desliza y guarda durante el día.",
    href: "/camarote-nido",
    img: "/images/camarotes/camarote-petalo-nido-estructura-completa.jpg",
    tag: "Hogar",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="bg-gray-950 text-white py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.05) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.05) 40px)" }}
        />
        <div className="max-w-5xl mx-auto relative">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-5">
            Fabricante directo · Santiago de Chile
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
            Fábrica de estructuras y productos metálicos
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-10 leading-relaxed">
            Fabricamos camarotes y camas metálicas, cierres perimetrales, rejas, portones y estructuras a medida. También contamos con servicio de pintura electrostática para empresas y particulares.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/camarotes"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition-colors">
              🛏️ Ver camarotes y camas
            </Link>
            <Link href="/cierres-perimetrales"
              className="inline-flex items-center gap-2 border border-gray-600 text-white font-semibold px-6 py-3 rounded-full text-sm hover:border-gray-400 transition-colors">
              🔩 Ver cierres perimetrales
            </Link>
            <a href={WA("Hola, quisiera cotizar un proyecto metálico. ¿Pueden ayudarme?")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#1ebe5d] transition-colors">
              💬 Cotizar proyecto
            </a>
          </div>
        </div>
      </section>

      {/* ─── LÍNEAS DE NEGOCIO ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
            Líneas de producción
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-10">¿Qué necesitas fabricar?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CATEGORIAS.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`group rounded-2xl overflow-hidden border transition-all hover:shadow-md ${cat.dark ? "bg-gray-900 border-gray-800 hover:border-gray-600" : "bg-white border-gray-200 hover:border-gray-400"}`}
              >
                {cat.img ? (
                  <div className="aspect-[16/7] overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/7] bg-gray-800 flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-gray-600 rounded-xl flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-gray-500 rotate-45" />
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className={`font-bold text-base mb-2 ${cat.dark ? "text-white" : "text-gray-900"}`}>
                    {cat.titulo}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${cat.dark ? "text-gray-400" : "text-gray-500"}`}>
                    {cat.descripcion}
                  </p>
                  <span className={`text-xs font-semibold ${cat.dark ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"} transition-colors`}>
                    {cat.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="md:w-72 flex-shrink-0">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
                Servicios
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Fabricación y terminación metálica
              </h2>
              <a
                href={WA("Hola, quisiera cotizar un proyecto metálico.")}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                Solicitar cotización
              </a>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICIOS.map((s) => (
                <div key={s} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                  <span className="text-gray-400 mt-0.5 flex-shrink-0">—</span>
                  <p className="text-sm text-gray-700">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DESTACADOS ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
            Productos destacados
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Algunos de nuestros trabajos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {DESTACADOS.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 hover:shadow-sm transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                  <img
                    src={d.img}
                    alt={d.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{d.tag}</span>
                  <h3 className="font-bold text-gray-900 text-sm mt-1 mb-2">{d.titulo}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{d.desc}</p>
                  <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">Ver más →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/camarotes"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-600 text-gray-700 font-semibold px-6 py-3 rounded-full text-sm transition-colors">
              Ver catálogo completo de camarotes →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FABRICANTE / CONFIANZA ───────────────────────────────────────────── */}
      <section className="py-16 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
                Quiénes somos
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Fabricación metálica para particulares, empresas e instituciones
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Fabricamos directamente en nuestro taller en Santiago. Trabajamos tanto por unidad como por volumen, para hogares, empresas, faenas, instituciones y proyectos especiales. Cada trabajo puede hacerse en medidas estándar o completamente a medida.
              </p>
              <a
                href={WA("Hola, tengo un proyecto metálico y quisiera cotizar.")}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                💬 Hablar con un fabricante
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { titulo: "Fabricación directa", desc: "Sin intermediarios. Hablás con quien fabrica." },
                { titulo: "A medida o estándar", desc: "Productos de catálogo o diseño a pedido." },
                { titulo: "Empresas e instituciones", desc: "Producción por volumen y cotizaciones formales." },
                { titulo: "Despacho e instalación", desc: "Coordinamos entrega e instalación en Santiago." },
                { titulo: "Pintura al horno incluida", desc: "Acabado electrostático resistente de fábrica." },
                { titulo: "Acero de calidad", desc: "Tubos y planchas estructurales con soldadura MIG." },
              ].map((attr) => (
                <div key={attr.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 text-xs mb-1">{attr.titulo}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{attr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────────────────── */}
      <section className="bg-gray-950 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            Cuéntanos qué necesitas fabricar. Te respondemos con una cotización directa, sin rodeos.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={WA("Hola, quisiera cotizar. Mi proyecto es: [DESCRIBE TU PROYECTO]")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              💬 Cotizar por WhatsApp
            </a>
            <Link href="/cotizar"
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors">
              Formulario de cotización
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
