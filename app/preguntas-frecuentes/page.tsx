import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Camarotes en Chile | Camarotes Chile",
  description:
    "Respuestas a las preguntas más comunes sobre camarotes metálicos en Chile: precios, medidas, modelos, despacho, armado, colchones y más. Pago contra entrega en Santiago.",
  keywords: [
    "preguntas frecuentes camarotes",
    "FAQ camarote Chile",
    "dudas camarote metálico",
    "camarote medidas preguntas",
    "camarote precio pregunta",
    "camarote Santiago preguntas",
  ],
  alternates: { canonical: "https://rinon.cl/preguntas-frecuentes" },
  openGraph: {
    title: "Preguntas Frecuentes — Camarotes Chile",
    description: "Todo lo que necesitas saber antes de comprar un camarote metálico en Santiago. 15+ respuestas a las dudas más comunes.",
    type: "website",
    locale: "es_CL",
  },
};

const faqs: { categoria: string; preguntas: { q: string; a: string | React.ReactNode }[] }[] = [
  {
    categoria: "Modelos y tipos",
    preguntas: [
      {
        q: "¿Qué modelos de camarote tienen disponibles?",
        a: "Tenemos 7 modelos: Camarote Titanic (reforzado), camarote 1.5 plazas (plaza y media + plaza), cama alta (sin segunda cama), camarote doble (2 plazas abajo), camarote nido (3 camas en 1), camarote triple (3 niveles) y camarote con escritorio (cama + escritorio integrado).",
      },
      {
        q: "¿Qué es un camarote nido?",
        a: "El camarote nido es un camarote de 2 pisos tradicional con una tercera cama extra que se desliza y guarda debajo de la cama inferior cuando no se usa. De día parece un camarote normal; de noche se sacan las 3 camas en segundos.",
      },
      {
        q: "¿Cuál es la diferencia entre cama alta y camarote con escritorio?",
        a: "La cama alta eleva la cama y deja el espacio inferior libre para lo que quieras (escritorio suelto, sofá, almacenamiento). El camarote con escritorio tiene el escritorio integrado en la estructura metálica, lo que da más estabilidad al escritorio y mejor acabado.",
      },
      {
        q: "¿Qué es el camarote Titanic?",
        a: "El Titanic es nuestro modelo de mayor robustez. Usa acero de mayor calibre (más grueso) que el estándar, soporta más peso y está diseñado para uso intensivo o adultos con mayor peso corporal.",
      },
      {
        q: "¿Tienen camarotes solo para adultos?",
        a: "Todos nuestros camarotes son aptos para adultos. Los modelos más recomendados para adultos son el camarote doble (2 plazas abajo), el camarote plaza y media y el camarote Titanic. Especifica al cotizar que es para adultos y te recomendamos el modelo correcto.",
      },
    ],
  },
  {
    categoria: "Medidas y espacio",
    preguntas: [
      {
        q: "¿Cuáles son las medidas estándar de un camarote?",
        a: "Un camarote estándar de 1 plaza tiene camas de aproximadamente 90 cm de ancho por 190-200 cm de largo. El alto total varía según el modelo. El camarote plaza y media tiene ~105 cm de ancho. El camarote doble tiene ~135 cm de ancho en la cama inferior. Confirma las medidas exactas al cotizar.",
      },
      {
        q: "¿Cuánta altura de techo necesito?",
        a: "Para camarotes estándar: mínimo 180 cm. Para camarote con escritorio o cama alta: mínimo 210-220 cm (necesitas espacio para sentarte en la cama y espacio para trabajar debajo). Para camarote triple: mínimo 230-250 cm. Mide tu techo antes de cotizar.",
      },
      {
        q: "¿Puedo pedir medidas personalizadas?",
        a: `Sí. Aceptamos hasta 3 cambios de medida por pedido a ${formatPrice(SITE_CONFIG.cambioMedida.precio)} cada uno. Puedes ajustar el largo, el ancho de las camas o la altura total de la estructura.`,
      },
      {
        q: "¿El camarote entra por la puerta de mi departamento?",
        a: "Sí, porque se entrega desarmado. Las piezas individuales (tubos, travesaños, escalera) tienen dimensiones manejables que entran por puertas estándar. Se arma directamente dentro de la habitación.",
      },
    ],
  },
  {
    categoria: "Despacho y pago",
    preguntas: [
      {
        q: "¿A qué zonas despachan?",
        a: "Despachamos a toda la Región Metropolitana de Santiago. Consulta si tu comuna específica está cubierta al cotizar.",
      },
      {
        q: "¿Cuánto cuesta el despacho?",
        a: `El despacho tiene un costo fijo de ${formatPrice(SITE_CONFIG.despacho.precio)} CLP independiente del modelo elegido. Incluye traslado e instalación en tu domicilio.`,
      },
      {
        q: "¿Cómo funciona el pago contra entrega?",
        a: "Pagas en el momento en que el camarote llega instalado a tu casa y estás conforme con lo recibido. No pagas nada antes. Es la forma más segura de comprar.",
      },
      {
        q: "¿Cuánto tiempo demora el despacho?",
        a: `El plazo estimado de entrega es de ${SITE_CONFIG.despacho.dias} desde el pedido confirmado. Coordinamos contigo el día y horario exacto antes de despachar.`,
      },
      {
        q: "¿El despacho incluye instalación?",
        a: "Sí. El equipo de entrega instala el camarote en la habitación que indiques. No necesitas armarlo tú mismo.",
      },
    ],
  },
  {
    categoria: "Accesorios",
    preguntas: [
      {
        q: "¿Puedo agregar parrillas metálicas adicionales?",
        a: "Sí. Puedes agregar hasta 2 parrillas adicionales por pedido (o hasta 3 en el camarote nido, una por cada nivel). Consulta el precio al cotizar.",
      },
      {
        q: "¿Puedo agregar barandas adicionales?",
        a: "Sí. Puedes agregar hasta 2 barandas de seguridad adicionales. Recomendado especialmente cuando el nivel superior lo usan niños o para mayor tranquilidad.",
      },
    ],
  },
  {
    categoria: "Colchones",
    preguntas: [
      {
        q: "¿Qué colchón debo usar en un camarote de 1 plaza?",
        a: "Colchón estándar de 1 plaza: 90 cm de ancho x 190-200 cm de largo. Para el nivel superior, recomendamos un grosor de 10-18 cm. Colchones más gruesos reducen el espacio libre sobre la cama.",
      },
      {
        q: "¿Qué grosor de colchón necesita la cama nido?",
        a: "La cama nido deslizante requiere un colchón delgado de máximo 12-15 cm de grosor para que pueda deslizarse correctamente bajo la cama inferior.",
      },
    ],
  },
];

import React from "react";

const schemaFaqs = faqs.flatMap((cat) =>
  cat.preguntas.map((p) => ({
    "@type": "Question",
    name: p.q,
    acceptedAnswer: { "@type": "Answer", text: typeof p.a === "string" ? p.a : String(p.a) },
  }))
);

export default function PreguntasFrecuentesPage() {
  return (
    <div className="py-10 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: schemaFaqs,
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Preguntas Frecuentes</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Preguntas Frecuentes sobre Camarotes en Chile
          </h1>
          <p className="text-gray-500 text-lg">
            Respuestas directas a las dudas más comunes antes de comprar un camarote metálico en Santiago.
          </p>
        </div>

        {/* Índice de categorías */}
        <div className="flex flex-wrap gap-2 mb-10">
          {faqs.map((cat) => (
            <a
              key={cat.categoria}
              href={`#${cat.categoria.toLowerCase().replace(/ /g, "-")}`}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full px-4 py-1.5 transition-colors"
            >
              {cat.categoria}
            </a>
          ))}
        </div>

        {/* FAQs por categoría */}
        <div className="space-y-12">
          {faqs.map((cat) => (
            <section key={cat.categoria} id={cat.categoria.toLowerCase().replace(/ /g, "-")}>
              <h2 className="text-xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-100">
                {cat.categoria}
              </h2>
              <div className="space-y-4">
                {cat.preguntas.map((faq) => (
                  <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {typeof faq.a === "string" ? faq.a : faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* ¿No encontraste tu pregunta? */}
        <div className="mt-14 bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ¿Tu pregunta no está aquí?
          </h2>
          <p className="text-gray-600 text-sm mb-5 max-w-md mx-auto">
            Escríbenos por WhatsApp. Respondemos en minutos con la información exacta para tu caso.
          </p>
          <WhatsAppButton
            message="Hola, tengo una pregunta sobre camarotes antes de decidirme a comprar."
            size="lg"
          >
            Preguntar por WhatsApp
          </WhatsAppButton>
        </div>

        {/* Links a productos relacionados */}
        <div className="mt-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Ver todos los modelos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/camarote-nido", emoji: "🪺", nombre: "Nido" },
              { href: "/camarote-con-escritorio", emoji: "📚", nombre: "Con Escritorio" },
              { href: "/camarote-doble", emoji: "👫", nombre: "Doble" },
              { href: "/camarote-triple", emoji: "🏗️", nombre: "Triple" },
              { href: "/cama-alta", emoji: "🪜", nombre: "Cama Alta" },
              { href: "/camarote-1-5-plazas", emoji: "🛏️", nombre: "Plaza y Media" },
              { href: "/camarote-titanic", emoji: "⚓", nombre: "Titanic" },
              { href: "/camarotes", emoji: "📋", nombre: "Ver todos" },
            ].map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-white border border-gray-200 rounded-xl p-3 hover:border-gray-400 hover:shadow-sm transition-all text-center"
              >
                <span className="text-xl block mb-1">{p.emoji}</span>
                <p className="text-xs font-medium text-gray-700">{p.nombre}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
