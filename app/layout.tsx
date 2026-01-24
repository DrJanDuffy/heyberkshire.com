import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { cn } from "lib/utils";
import AIChatWidget from "@/components/chat/AIChatWidget";

const title = "Las Vegas & Henderson Real Estate | Berkshire Hathaway HomeServices";
const description =
  "Expert real estate services in Las Vegas and Henderson, NV. Buy, sell, or invest with Dr. Jan Duffy. Licensed Realtor with Berkshire Hathaway HomeServices Nevada Properties.";
const url = "https://heyberkshire.com";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  keywords: [
    "Las Vegas real estate",
    "Henderson real estate",
    "Nevada properties",
    "home for sale Las Vegas",
    "real estate agent Henderson",
    "Berkshire Hathaway HomeServices",
    "Dr. Jan Duffy",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: "Berkshire Hathaway HomeServices Nevada Properties",
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
};

// LocalBusiness Schema for GBP optimization
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${url}#organization`,
  name: "Berkshire Hathaway HomeServices Nevada Properties",
  alternateName: "Berkshire Hathaway HomeServices",
  url,
  logo: `${url}/favicon-32x32.png`,
  image: `${url}/favicon-32x32.png`,
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main Street",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89101",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.1699",
    longitude: "-115.1398",
  },
  telephone: "+17025551234",
  email: "info@heyberkshire.com",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: ["Las Vegas", "Henderson"],
  },
  memberOf: {
    "@type": "Organization",
    name: "Berkshire Hathaway HomeServices",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Real Estate License",
    recognizedBy: {
      "@type": "Organization",
      name: "Nevada Real Estate Division",
    },
    credentialNumber: "S.0197614.LLC",
  },
  sameAs: [
    // Add social media profiles when available
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
      </body>
    </html>
  );
}
