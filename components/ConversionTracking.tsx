"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CONSENT_KEY = "rinon_cookie_consent";
const VISITOR_KEY = "rinon_analytics_visitor";
const SESSION_KEY = "rinon_analytics_session";

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

function getAnonymousId(storage: Storage, key: string) {
  const saved = storage.getItem(key);
  if (saved) return saved;
  const value = crypto.randomUUID().replaceAll("-", "");
  storage.setItem(key, value);
  return value;
}

function sendAnalyticsEvent(eventName: "page_view" | "contact_whatsapp" | "contact_phone" | "generate_lead") {
  const visitorId = getAnonymousId(localStorage, VISITOR_KEY);
  const sessionId = getAnonymousId(sessionStorage, SESSION_KEY);
  let referrerHost = "";
  try { referrerHost = document.referrer ? new URL(document.referrer).hostname : ""; } catch { referrerHost = ""; }

  const payload = JSON.stringify({
    eventName,
    pagePath: window.location.pathname,
    pageTitle: document.title,
    referrerHost,
    visitorId,
    sessionId,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/analytics", new Blob([payload], { type: "application/json" }));
  } else {
    void fetch("/api/analytics", { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true });
  }
}

export function ConversionTracking() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => setEnabled(hasAnalyticsConsent());
    syncConsent();
    window.addEventListener("rinon-cookie-consent", syncConsent);
    return () => window.removeEventListener("rinon-cookie-consent", syncConsent);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    sendAnalyticsEvent("page_view");
  }, [enabled, pathname]);

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
      sendAnalyticsEvent(eventName);
    };

    const trackForm = () => {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ event: "generate_lead", page_path: window.location.pathname });
      sendAnalyticsEvent("generate_lead");
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
