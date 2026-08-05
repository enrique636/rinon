"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "rinon_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(!localStorage.getItem(KEY)), 0);
    return () => window.clearTimeout(timer);
  }, []);
  if (!visible) return null;

  function choose(value: "necessary" | "all") {
    localStorage.setItem(KEY, JSON.stringify({ value, date: new Date().toISOString() }));
    setVisible(false);
    window.dispatchEvent(new CustomEvent("rinon-cookie-consent", { detail: value }));
  }

  return <aside aria-label="Preferencias de cookies" className="fixed z-[60] bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-lg bg-white border border-gray-200 shadow-2xl rounded-2xl p-5">
    <h2 className="font-bold text-gray-900">Tu privacidad importa</h2>
    <p className="text-sm text-gray-600 mt-2">Usamos almacenamiento necesario para recordar tus preferencias. Las cookies de medición solo se activarán si las aceptas.</p>
    <div className="flex flex-col sm:flex-row gap-2 mt-4"><button onClick={() => choose("all")} className="bg-gray-900 text-white rounded-lg px-4 py-2 text-sm font-semibold">Aceptar todas</button><button onClick={() => choose("necessary")} className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700">Solo necesarias</button><Link href="/politica-de-cookies" className="px-2 py-2 text-sm underline text-gray-500 text-center">Ver política</Link></div>
  </aside>;
}
