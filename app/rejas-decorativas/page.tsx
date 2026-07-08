import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Decorativas Santiago — Diseño en Fierro Forjado y Acero",
  description: "Rejas decorativas en Santiago. Fabricante de rejas con diseño en fierro forjado, rombos, curvas y elementos ornamentales. Para frontis, ventanas y puertas. Instalación incluida.",
  keywords: [
    "rejas decorativas santiago",
    "reja decorativa metalica",
    "rejas con diseño santiago",
    "reja ornamental fierro forjado",
    "rejas de fierro forjado santiago",
    "reja metalica decorativa precio",
    "rejas con adornos santiago",
    "reja con diseño para frontis",
    "reja colonial santiago",
    "rejas artisticas chile",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-decorativas" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasDecorativasPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Rejas Decorativas</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Diseño a pedido · Forja y acero · Instalación en Santiago
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas Decorativas — Diseño en Fierro Forjado y Acero
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos rejas decorativas con diseño personalizado en Santiago. Elementos
            de fierro forjado, rombos, curvas, flores y ornamentos — combinados con la
            resistencia del tubo de acero estructural. Para frontis, ventanas y puertas,
            con la misma pintura electrostática al horno que nuestras rejas estándar.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja decorativa. Uso: [FRONTIS / VENTANA / PUERTA]. Medidas o metros: [DATO]. Estilo: [COLONIAL / MODERNO / ROMBOS / FORJA / CON FOTO]. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja decorativa
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Estilos de reja decorativa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Reja con rombos",
                d: "El diseño decorativo más clásico en Chile. La diagonal del rombo da movimiento visual a la reja sin perder resistencia estructural. Compatible con frontis, ventanas y puertas.",
              },
              {
                t: "Reja con forja ornamental",
                d: "Elementos en espiral, flores, hojas o ramas de fierro forjado integrados en la reja tubular. Para casas con arquitectura clásica, colonial o mediterránea.",
              },
              {
                t: "Reja minimalista con tubo plano",
                d: "Perfil plano laminado en lugar de tubo cuadrado. Líneas más delgadas y un aspecto más contemporáneo. Muy popular en casas de arquitectura moderna.",
              },
              {
                t: "Reja mixta con vidrio o madera",
                d: "Estructura de acero combinada con vidrio templado o paneles de madera. Para frontis o portones que buscan privacidad con un acabado arquitectónico especial.",
              },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Cómo cotizar una reja con diseño?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Para rejas decorativas, lo más fácil es mandar una <strong>foto de referencia</strong>
            junto con las medidas. No necesitas planos técnicos — una foto de una reja que te
            guste, los metros y la altura es todo lo que necesitamos para presupuestar.
          </p>
          <div className="space-y-2">
            {[
              ["Foto de referencia", "Una foto de una reja con el estilo que te gusta — de internet, de un vecino o de cualquier fuente"],
              ["Uso", "Frontis de casa / ventana / puerta / portón"],
              ["Metros o medidas", "Largo total o ancho × alto del vano exacto"],
              ["Color", "Negro mate (estándar), negro brillante, antracita u otro"],
              ["Comuna", "Para coordinar la instalación"],
            ].map(([campo, desc]) => (
              <div key={campo} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-3 text-xs">
                <span className="font-medium text-gray-700 w-32 flex-shrink-0">{campo}</span>
                <span className="text-gray-500">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Frontis completo con portón" },
            { href: "/reja-tubular", label: "Reja tubular", desc: "El modelo estándar sin ornamentos" },
            { href: "/rejas-metalicas-vitacura", label: "Rejas Vitacura", desc: "Diseño en el sector alto oriente" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "El acabado de nuestras rejas" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Mándanos la foto del diseño que quieres</h2>
          <p className="text-gray-400 text-sm mb-5">
            Foto de referencia + metros + altura. Cotizamos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja decorativa. Te mando foto de referencia. Uso: [FRONTIS / VENTANA / PUERTA]. Metros: [METROS] ml o medidas: [DATO]. Estoy en [COMUNA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
