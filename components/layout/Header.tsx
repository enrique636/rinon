"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/camarotes", label: "Camarotes" },
  { href: "/empresas", label: "Empresas" },
  { href: "/cierres-perimetrales", label: "Cercos" },
  { href: "/contacto", label: "Contacto" },
];

const WA = `https://wa.me/56912345678?text=${encodeURIComponent("Hola, me interesa cotizar. ¿Pueden ayudarme?")}`;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-sm font-bold text-gray-900 tracking-tight">
          Rinon.cl
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-900 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
        >
          WhatsApp
        </a>

        {/* Hamburger mobile */}
        <button
          className="md:hidden p-2 text-gray-500"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 text-center bg-[#25D366] text-white text-sm font-semibold py-2.5 rounded-xl"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
