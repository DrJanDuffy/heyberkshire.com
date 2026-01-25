import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { cn } from "lib/utils";
import AIChatWidget from "@/components/chat/AIChatWidget";
import CalendlyBadge from "@/components/calendly/CalendlyBadge";
import SchemaScript from "@/components/SchemaScript";
import {
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
  combineSchemas,
} from "@/lib/schema";

const title = "Berkshire Hathaway HomeServices Las Vegas | Dr. Jan Duffy, REALTOR®";
const description =
  "Looking for a Berkshire Hathaway HomeServices agent in Las Vegas? Dr. Jan Duffy with BHHS Nevada Properties offers expert real estate services—backed by Warren Buffett's legacy of trust.";
const url = "https://heyberkshire.com";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Berkshire Hathaway HomeServices Nevada Properties",
  },
  description,
  metadataBase: new URL(url),
  keywords: [
    "Berkshire Hathaway HomeServices",
    "Berkshire Hathaway HomeServices Nevada Properties",
    "Berkshire Hathaway HomeServices Las Vegas",
    "BHHS real estate agent",
    "Berkshire Hathaway realtor Las Vegas",
    "Dr. Jan Duffy",
    "Las Vegas real estate",
    "Henderson real estate",
    "Las Vegas homes for sale",
    "Henderson homes for sale",
    "Summerlin real estate",
    "luxury homes Las Vegas",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: "HeyBerkshire - Berkshire Hathaway HomeServices Nevada Properties",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: url,
  },
};

// Combined site-wide schemas using the schema utility
const siteWideSchemas = combineSchemas(
  generateRealEstateAgentSchema(),
  generateWebSiteSchema()
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        {/* Site-wide JSON-LD Schema: RealEstateAgent + WebSite */}
        <SchemaScript schema={siteWideSchemas} id="site-schema" />
        {/* RealScout Widget Script - loaded once globally */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="beforeInteractive"
        />
        {/* Calendly Widget Script - loaded once globally */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          "antialiased bg-white text-sm md:text-base text-slate-800",
        )}
      >
        {children}
        <AIChatWidget />
        <CalendlyBadge />
      </body>
    </html>
  );
}
