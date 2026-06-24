import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

// Genera las rutas estáticas para todos los productos
export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.nombre} | Camarotes Chile — Pago Contra Entrega Santiago`,
    description: `${product.descripcion} Pago contra entrega. Despacho ${formatPrice(SITE_CONFIG.despacho.precio)} en Santiago. Consulta por WhatsApp.`,
    keywords: product.seoKeywords,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const waUrl = getProductWhatsAppUrl(product.nombre);

  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link>
          <span>/</span>
          <span className="text-gray-600">{product.nombre}</span>
        </nav>

        {/* Layout principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          {/* Imagen */}
          <div className="bg-gray-50 rounded-2xl border border-gray-100 aspect-square flex flex-col items-center justify-center gap-3">
            <span className="text-7xl">{product.emoji}</span>
            <p className="text-gray-400 text-sm">Fotos próximamente</p>
          </div>

          {/* Info */}
          <div>
            {product.badge && (
              <span className="inline-block bg-gray-900 text-white text-xs font-semibold rounded-full px-3 py-1 mb-3">
                {product.badge}
              </span>
            )}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.nombre}</h1>
            <p className="text-green-600 font-medium mb-4">{product.subtitulo}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{product.descripcion}</p>

            {/* Plazas */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.plazasAbajo !== "—" && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 text-center">
                  <p className="text-xs text-blue-500 font-medium mb-0.5">Cama de abajo</p>
                  <p className="text-blue-800 font-bold text-sm">{product.plazasAbajo}</p>
                </div>
              )}
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-center">
                <p className="text-xs text-gray-400 font-medium mb-0.5">Cama de arriba</p>
                <p className="text-gray-700 font-bold text-sm">{product.plazasArriba}</p>
              </div>
            </div>

            {/* Precio despacho */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-800 font-bold">Pago contra entrega</p>
                  <p className="text-green-600 text-sm">
                    Despacho {formatPrice(SITE_CONFIG.despacho.precio)} · Solo Santiago
                  </p>
                </div>
                <span className="text-2xl">🚚</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <WhatsAppButton
                size="lg"
                message={`Hola, me interesa el *${product.nombre}*. ¿Cuál es el precio y disponibilidad?`}
                className="w-full justify-center"
              >
                Consultar precio por WhatsApp
              </WhatsAppButton>
              <Link
                href="/cotizar"
                className="w-full text-center py-3.5 border-2 border-gray-200 hover:border-gray-400 text-gray-700 font-semibold rounded-full text-base transition-colors"
              >
                Solicitar cotización formal
              </Link>
            </div>
          </div>
        </div>

        {/* Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Características</h2>
            <ul className="space-y-2">
              {product.caracteristicas.map((c) => (
                <li key={c} className="flex items-start gap-3 text-gray-600 text-sm">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Extras disponibles */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Extras disponibles</h2>
            <div className="space-y-3">
              {product.addOns.map((addon) => (
                <div
                  key={addon.id}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm">{addon.nombre}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{addon.descripcion}</p>
                      <p className="text-xs text-gray-400 mt-1">Máx. {addon.maxCantidad} por pedido</p>
                    </div>
                    <p className="text-green-600 font-bold text-sm shrink-0">
                      {addon.precio ? formatPrice(addon.precio) : "A consultar"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info despacho */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Despacho e instalación</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Pago contra entrega</strong> — pagas cuando llega</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>{formatPrice(SITE_CONFIG.despacho.precio)}</strong> despacho en Santiago</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span>Entrega en <strong>{SITE_CONFIG.despacho.dias}</strong></span>
            </div>
          </div>
        </div>

        {/* Otros modelos */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">Otros modelos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/${p.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all text-center"
                >
                  <span className="text-2xl block mb-1">{p.emoji}</span>
                  <p className="text-sm font-medium text-gray-700 leading-tight">{p.nombre}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
