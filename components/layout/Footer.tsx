import Link from "next/link";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Marca */}
        <div>
          <p className="text-white font-bold text-lg mb-2">
            {SITE_CONFIG.nombre}
          </p>
          <p className="text-sm leading-relaxed">
            {SITE_CONFIG.descripcion}
          </p>
          <p className="text-sm mt-3">
            Santiago, Región Metropolitana, Chile
          </p>
        </div>

        {/* Columna 2: Servicios principales */}
        <div>
          <p className="text-white font-semibold text-sm mb-3">Servicios principales</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/fabricante-camarotes-chile" className="hover:text-white transition-colors">Fabricante de camarotes</Link></li>
            <li><Link href="/camarotes-mineria" className="hover:text-white transition-colors">Camarotes para minería</Link></li>
            <li><Link href="/portones-metalicos" className="hover:text-white transition-colors">Portones metálicos</Link></li>
            <li><Link href="/rejas-metalicas-puente-alto" className="hover:text-white transition-colors">Rejas metálicas</Link></li>
            <li><Link href="/pintura-electrostatica" className="hover:text-white transition-colors">Pintura electrostática</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <p className="text-white font-semibold text-sm mb-3">Contacto</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="text-green-400">●</span>
                WhatsApp
              </a>
            </li>
            <li>
              <Link href="/cotizar" className="hover:text-white transition-colors">
                Solicitar Cotización
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.nombre}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/camarote-con-escritorio" className="hover:text-white transition-colors">Camarotes con escritorio</Link>
            <Link href="/camarotes-la-florida" className="hover:text-white transition-colors">Camarotes La Florida</Link>
            <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
