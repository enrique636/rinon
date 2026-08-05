import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/WhatsAppButton";
import { LeadCapturePopup } from "@/components/LeadCapturePopup";
import { CookieConsent } from "@/components/CookieConsent";
import { seoPages } from "@/lib/seo";
import { getLocalBusinessSchema, getOrganizationSchema, getWebSiteSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  ...seoPages.home,
  verification: {
    google: "DG5fIXNQgMGRpHGC0RwK-R3QvIyx20qjrQQdMRqCymQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <LeadCapturePopup />
        <CookieConsent />
      </body>
    </html>
  );
}
