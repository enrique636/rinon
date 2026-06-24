"use client";

import Link from "next/link";
import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

const navLinks = [
  { href: "/camarotes", label: "Camarotes" },
  { href: "/camarote-con-escritorio", label: "Con Escritorio" },
  { href: "/camarote-nido", label: "Nido" },
  { href: "/blog", label: "Blog" },
  { href: "/empresas", label: "Empresas" },
  { href: "/calculadora", label: "Calculadora" },
  { href: "/preguntas-frecuentes", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-bold text-gray-900">Camarotes</span>
          <span className="hidden sm:block text-xs font-medium text-white bg-green-600 rounded-full px-2 py-0.5">
            Chile
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <WhatsAppButton size="sm" className="hidden md:inline-flex">
          WhatsApp
        </WhatsAppButton>

        {/* Hamburger mobile */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
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
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 px-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <WhatsAppButton className="w-full justify-center">Consultar por WhatsApp</WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
