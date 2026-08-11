"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "rinon_cookie_consent";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function hasAnalyticsConsent() {
  try {
    const saved = JSON.parse(localStorage.getItem(CONSENT_KEY) ?? "null");
    return saved?.value === "all";
  } catch {
    return false;
  }
}

export function ConversionTracking() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => setEnabled(hasAnalyticsConsent());
    syncConsent();
    window.addEventListener("rinon-cookie-consent", syncConsent);
    return () => window.removeEventListener("rinon-cookie-consent", syncConsent);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const trackClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.href;
      const eventName = href.includes("wa.me/")
        ? "contact_whatsapp"
        : href.startsWith("tel:")
          ? "contact_phone"
          : null;

      if (!eventName) return;
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({
        event: eventName,
        page_path: window.location.pathname,
        link_text: link.textContent?.trim().slice(0, 80) || eventName,
      });
    };

    const trackForm = () => {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ event: "generate_lead", page_path: window.location.pathname });
    };

    document.addEventListener("click", trackClick);
    window.addEventListener("rinon-lead-submitted", trackForm);
    return () => {
      document.removeEventListener("click", trackClick);
      window.removeEventListener("rinon-lead-submitted", trackForm);
    };
  }, [enabled]);

  if (!enabled || !gtmId) return null;

  return (
    <>
      <Script id="gtm-data-layer" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});`}
      </Script>
      <Script
        id="google-tag-manager"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
        strategy="afterInteractive"
      />
    </>
  );
}
