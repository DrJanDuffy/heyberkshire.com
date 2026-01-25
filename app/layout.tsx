import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { cn } from "lib/utils";
import AIChatWidget from "@/components/chat/AIChatWidget";
import CalendlyBadge from "@/components/calendly/CalendlyBadge";

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

// LocalBusiness Schema for GBP optimization
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${url}#organization`,
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  alternateName: ["HeyBerkshire", "BHHS Nevada Properties", "Berkshire Hathaway HomeServices"],
  url,
  logo: `${url}/favicon-32x32.png`,
  image: `${url}/favicon-32x32.png`,
  description:
    "Dr. Jan Duffy is a licensed REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, serving Las Vegas, Henderson, Summerlin, and surrounding areas with 15+ years of experience and $127M+ in closed transactions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9406 W Lake Mead Blvd, Suite 100",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.1893",
    longitude: "-115.2821",
  },
  telephone: "+17025001942",
  email: "jan@heyberkshire.com",
  priceRange: "$$-$$$$",
  areaServed: [
    {
      "@type": "City",
      name: "Las Vegas",
      sameAs: "https://en.wikipedia.org/wiki/Las_Vegas",
    },
    {
      "@type": "City",
      name: "Henderson",
      sameAs: "https://en.wikipedia.org/wiki/Henderson,_Nevada",
    },
    {
      "@type": "Place",
      name: "Summerlin",
    },
    {
      "@type": "Place",
      name: "North Las Vegas",
    },
  ],
  memberOf: {
    "@type": "Organization",
    name: "Berkshire Hathaway HomeServices",
    url: "https://www.bhhs.com",
  },
  parentOrganization: {
    "@type": "RealEstateAgent",
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    url: "https://www.bfrre.com",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Real Estate License",
    recognizedBy: {
      "@type": "Organization",
      name: "Nevada Real Estate Division",
    },
    validIn: {
      "@type": "State",
      name: "Nevada",
    },
    credentialNumber: "S.0197614.LLC",
  },
  knowsAbout: [
    "Las Vegas real estate",
    "Henderson homes",
    "Summerlin properties",
    "Luxury homes",
    "New construction",
    "Investment properties",
    "Relocation services",
  ],
  slogan: "Your Berkshire Hathaway HomeServices expert in Las Vegas",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
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
        {/* RealScout Widget Script - loaded once globally */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
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
