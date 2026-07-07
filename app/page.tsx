"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, SITE_CONFIG } from "@/lib/config";
import { blogPosts } from "@/lib/blog";

const WA = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function Home() {
  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-5">
            Fabricante directo · Santiago de Chile
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Camarotes y estructuras
            <br />
            <span className="text-gray-500 font-light">metálicas a medida</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Fabricamos en acero. Entregamos en Santiago. Despachamos a todo Chile para empresas, faenas y campamentos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WA("Hola, me interesa un camarote. ¿Pueden cotizarme?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              Cotizar por WhatsApp
            </a>
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-400 text-gray-600 font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              Ver modelos
            </a>
          </div>
        </div>
      </section>

      {/* ─── 4 LÍNEAS PRINCIPALES ───────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium text-center mb-8">
            Lo que fabricamos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: "01",
                titulo: "Camarotes metálicos",
                desc: "Clásico, Titanic, nido, triple y más. 1 plaza, 1½ y 2 plazas.",
                href: "#productos",
              },
              {
                num: "02",
                titulo: "Camarotes con escritorio",
                desc: "Modelo estándar, económico y full con estantería. Ideal para universitarios y teletrabajo.",
                href: "/camarote-con-escritorio",
              },
              {
                num: "03",
                titulo: "Estructuras a pedido",
                desc: "Mesas, estantes, repisas y cualquier estructura en acero según diseño del cliente.",
                href: "#estructuras",
              },
              {
                num: "04",
                titulo: "Cercos perimetrales",
                desc: "Reja tubular, malla y estructuras de cierre para obras, bodegas y terrenos.",
                href: "/cierres-perimetrales",
              },
            ].map((cat) => (
              <a
                key={cat.num}
                href={cat.href}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-sm transition-all"
              >
                <p className="text-2xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors mb-3">
                  {cat.num}
                </p>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{cat.titulo}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{cat.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATÁLOGO ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-4" id="productos">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
              Modelos disponibles
            </p>
            <h2 className="text-2xl font-bold text-gray-900">Camarotes metálicos</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PERSONALIZACIÓN ────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
              Personalización
            </p>
            <h2 className="text-2xl font-bold text-gray-900">Todo se puede ajustar</h2>
            <p className="text-gray-500 text-sm mt-2">
              Al cotizar nos indicas qué necesitas — lo fabricamos a tu medida.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                titulo: "Medidas a pedido",
                desc: "Largo, ancho y alto se pueden modificar según el espacio disponible. Ideal para piezas con techos bajos o espacios irregulares.",
              },
              {
                titulo: "Sommier metálico (parrilla)",
                desc: "El modelo estándar incluye sommier de madera (pino seco 3×1\"). La parrilla metálica lo reemplaza por una base de metal — más resistente, ideal para uso intensivo o climas húmedos.",
              },
              {
                titulo: "Baranda de seguridad",
                desc: "Para la cama superior. Recomendada para niños pequeños o personas que se mueven mucho al dormir. Se puede agregar 1 o 2 barandas por cama.",
              },
              {
                titulo: "Escalera lateral",
                desc: "Además de la escalera incorporada en la estructura, se puede agregar una escalera lateral que facilita subir por el centro — más cómodo que subir por las puntas.",
              },
              {
                titulo: "Anclaje a la pared",
                desc: "Fijación estructural del camarote a la pared mediante platinas soldadas y pernos. Para instalaciones permanentes donde se requiere máxima seguridad y estabilidad.",
              },
              {
                titulo: "Colchones incluidos",
                desc: "Se pueden incluir colchones (resorte o espuma) junto con el camarote. Se cotiza por separado y se entrega todo junto el mismo día.",
              },
            ].map((item) => (
              <div key={item.titulo} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{item.titulo}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIEMPOS DE ENTREGA ─────────────────────────────────────────────── */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
              Plazos de entrega
            </p>
            <h2 className="text-2xl font-bold text-gray-900">Entrega según pedido</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Particulares */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Particulares
              </p>
              <p className="text-3xl font-bold text-gray-900 mb-1">2 – 6</p>
              <p className="text-gray-500 text-sm mb-4">días hábiles según disponibilidad</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">—</span>
                  Entrega e instalación en Santiago y alrededores
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">—</span>
                  Coordinamos día y hora por WhatsApp
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">—</span>
                  Pago contra entrega disponible
                </li>
              </ul>
              <a
                href={WA("Hola, soy particular y me interesa un camarote. ¿Cuál es el plazo de entrega actual?")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                Consultar disponibilidad
              </a>
            </div>
            {/* Empresas */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Empresas / Por mayor
              </p>
              <p className="text-3xl font-bold text-white mb-1">A cotizar</p>
              <p className="text-gray-400 text-sm mb-4">según volumen y destino</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">—</span>
                  Despacho a todo Chile — minería, faenas, constructoras
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">—</span>
                  Precios por volumen según cantidad
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">—</span>
                  Factura disponible
                </li>
              </ul>
              <a
                href={WA("Hola, somos empresa y necesitamos cotizar camarotes al por mayor. ¿Pueden contactarnos?")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                Cotizar por mayor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ESTRUCTURAS A PEDIDO ───────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4 border-t border-gray-100" id="estructuras">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
              Fabricación especial
            </p>
            <h2 className="text-2xl font-bold text-gray-900">Estructuras metálicas a pedido</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl">
              Fabricamos cualquier estructura en acero según el diseño del cliente — mesas industriales, estantes, repisas, soportes, racks y más. Para empresas y particulares.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              "Mesas de trabajo",
              "Estantes y racks",
              "Soportes industriales",
              "Repisas a medida",
              "Estructuras para campamentos",
              "Mobiliario metálico",
              "Cercos y portones",
              "Diseño personalizado",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-gray-600 font-medium text-center"
              >
                {item}
              </div>
            ))}
          </div>

          <EstructurasForm />
        </div>
      </section>

      {/* ─── CERCOS PERIMETRALES ────────────────────────────────────────────── */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
                Otra línea de productos
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cercos perimetrales metálicos
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Fabricamos e instalamos cercos en reja tubular, malla y estructuras de cierre para obras en construcción, bodegas industriales, condominios y terrenos.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 mb-6">
                {[
                  "Reja tubular galvanizada",
                  "Mallas separadoras para bodegas",
                  "Portones corredizos y batientes",
                  "Cercos para obras y constructoras",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/cierres-perimetrales"
                className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
              >
                Ver cercos y mallas →
              </Link>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <p className="text-5xl font-bold text-gray-200 mb-2">⬜</p>
              <p className="text-gray-400 text-xs">Foto próximamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{faq.q}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG ───────────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm font-semibold text-gray-600">Guías y artículos</p>
            <Link href="/blog" className="text-xs text-gray-400 hover:text-gray-600">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {blogPosts.slice(-4).reverse().map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-gray-300 transition-all"
              >
                <span className="inline-block text-xs text-gray-400 mb-2">{post.categoria}</span>
                <h3 className="font-medium text-gray-800 text-xs leading-snug group-hover:text-gray-900 transition-colors">
                  {post.titulo}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ──────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 text-center border-t border-gray-100">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-3">¿Tienes un proyecto en mente?</h2>
          <p className="text-gray-500 text-sm mb-6">
            Escríbenos y cotizamos en el día — camarotes, estructuras o cercos.
          </p>
          <a
            href={WA("Hola, quiero cotizar. ¿Pueden ayudarme?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      {/* Schema JSON-LD (invisible) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Buenos Pal Catre",
            description: "Fabricante de camarotes metálicos y estructuras en acero. Santiago, Chile.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Santiago",
              addressRegion: "Región Metropolitana",
              addressCountry: "CL",
            },
            areaServed: "Chile",
          }),
        }}
      />
    </>
  );
}

// ─── Componente ProductCard ────────────────────────────────────────────────────

import type { Product } from "@/lib/products";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-sm hover:border-gray-300 transition-all flex flex-col">
      {/* Imagen placeholder */}
      <div className="bg-gray-50 aspect-[4/3] flex items-center justify-center border-b border-gray-100 relative">
        <span className="text-gray-200 text-5xl font-bold select-none">
          {product.emoji}
        </span>
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-900 text-white">
            {product.badge}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-base mb-1">{product.nombre}</h3>
        <p className="text-gray-400 text-xs mb-3">{product.subtitulo}</p>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{product.descripcion}</p>

        <div className="flex gap-2 text-xs mb-4">
          {product.plazasAbajo !== "—" && (
            <span className="bg-gray-100 text-gray-500 rounded-lg px-2.5 py-1">
              Abajo: {product.plazasAbajo}
            </span>
          )}
          <span className="bg-gray-100 text-gray-500 rounded-lg px-2.5 py-1">
            Arriba: {product.plazasArriba}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={getProductWhatsAppUrl(product.nombre)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold rounded-xl text-xs transition-colors"
          >
            Cotizar por WhatsApp
          </a>
          <Link
            href={`/${product.slug}`}
            className="w-full text-center py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-500 font-medium rounded-xl text-xs transition-colors"
          >
            Ver ficha técnica
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Componente EstructurasForm ────────────────────────────────────────────────

function EstructurasForm() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", descripcion: "" });

  const handleWA = () => {
    const msg = `Hola, quiero cotizar una estructura a pedido.\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nEmail: ${form.email}\nDescripción: ${form.descripcion}`;
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Cotización — Estructura metálica a pedido");
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nTeléfono: ${form.telefono}\nDescripción del proyecto:\n${form.descripcion}`
    );
    window.open(`mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
      <h3 className="font-bold text-gray-900 text-base mb-1">Solicitar cotización</h3>
      <p className="text-gray-400 text-xs mb-5">
        Cuéntanos qué necesitas fabricar y te respondemos con precio y plazo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs text-gray-500 font-medium mb-1.5">Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 font-medium mb-1.5">Teléfono o email</label>
          <input
            type="text"
            placeholder="+56 9 XXXX XXXX"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs text-gray-500 font-medium mb-1.5">
          ¿Qué necesitas fabricar?
        </label>
        <textarea
          rows={4}
          placeholder="Ej: Mesa de trabajo 1.5×0.8 m, reja para bodega de 20 m lineales, estante 3 niveles para depósito..."
          value={form.descripcion}
          onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400 transition-colors resize-none"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleWA}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 rounded-xl text-sm transition-colors"
        >
          Enviar por WhatsApp
        </button>
        <button
          onClick={handleEmail}
          className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-400 text-gray-600 font-semibold py-3 rounded-xl text-sm transition-colors"
        >
          Enviar por correo
        </button>
      </div>
    </div>
  );
}

// ─── FAQs ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "¿Las medidas de los camarotes son fijas?",
    a: "No. Todos los modelos se pueden fabricar con medidas personalizadas — largo, ancho y alto. Al cotizar nos indicas el espacio disponible y ajustamos el camarote a tu pieza.",
  },
  {
    q: "¿Qué diferencia hay entre sommier de madera y parrilla metálica?",
    a: "El modelo estándar trae sommier de pino seco (3×1 pulgadas). La parrilla metálica lo reemplaza por una base de metal soldada — más resistente, ideal para uso intensivo, faenas o climas húmedos. Se puede agregar al cotizar.",
  },
  {
    q: "¿Se pueden anclar a la pared?",
    a: "Sí. Para instalaciones permanentes fabricamos un sistema de anclaje con platinas soldadas y pernos que fijan el camarote a la pared. Recomendado para campamentos y faenas donde la seguridad es crítica.",
  },
  {
    q: "¿En cuánto tiempo llega un pedido particular?",
    a: "Entre 2 y 6 días hábiles según disponibilidad. Te avisamos por WhatsApp con fecha exacta al confirmar el pedido.",
  },
  {
    q: "¿Y para pedidos de empresa o por mayor?",
    a: "El plazo se cotiza junto con el precio según el volumen y el destino. Despachamos a todo Chile para minería, constructoras, forestales y agrícolas.",
  },
  {
    q: "¿Fabrican estructuras que no son camarotes?",
    a: "Sí. Fabricamos cualquier estructura en acero a pedido: mesas de trabajo, estantes, soportes, cercos, rejas y más. Completar el formulario en la sección de arriba o escribirnos por WhatsApp.",
  },
];
