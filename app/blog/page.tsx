import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog de Camarotes | Guías, Comparativas y Consejos — Camarotes Chile",
  description: "Artículos sobre camarotes metálicos, literas, camas altas y más. Guías de compra, comparativas y consejos para elegir el mejor camarote en Chile.",
  keywords: ["blog camarotes Chile", "guía camarotes", "litera metálica", "cama alta Chile"],
  alternates: { canonical: "https://dumar.cl/blog" },
};

const categoriasColor: Record<string, string> = {
  "Guías": "bg-blue-100 text-blue-700",
  "Productos": "bg-green-100 text-green-700",
  "Comparativas": "bg-purple-100 text-purple-700",
  "Inspiración": "bg-orange-100 text-orange-700",
};

export default function BlogPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Blog</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog de Camarotes</h1>
          <p className="text-gray-500">
            Guías, comparativas y consejos para elegir el mejor camarote en Chile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoriasColor[post.categoria] ?? "bg-gray-100 text-gray-600"}`}>
                  {post.categoria}
                </span>
                <span className="text-xs text-gray-400">{post.tiempoLectura} lectura</span>
              </div>
              <h2 className="font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-green-700 transition-colors">
                {post.titulo}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.subtitulo}</p>
              <p className="text-green-600 text-sm font-medium mt-4">Leer artículo →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
