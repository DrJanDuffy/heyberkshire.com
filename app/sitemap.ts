import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://heyberkshire.com";
  const lastModified = new Date();

  // Core pages
  const corePages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/listings`, priority: 0.9, changeFrequency: "daily" as const },
    { url: `${baseUrl}/why-berkshire-hathaway`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/market-report`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/faq`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // Service pages
  const servicePages = [
    { url: `${baseUrl}/buyers`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/sellers`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/luxury-homes`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/new-construction`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/investment-properties`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/relocation`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/home-valuation`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  // Neighborhood pages
  const neighborhoodPages = [
    { url: `${baseUrl}/neighborhoods`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/neighborhoods/summerlin`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/neighborhoods/henderson`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/neighborhoods/green-valley`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/neighborhoods/the-ridges`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/neighborhoods/southern-highlands`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/neighborhoods/north-las-vegas`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/neighborhoods/skye-canyon`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/neighborhoods/centennial-hills`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/neighborhoods/inspirada`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/neighborhoods/mountains-edge`, priority: 0.7, changeFrequency: "weekly" as const },
  ];

  const allPages = [...corePages, ...servicePages, ...neighborhoodPages];

  return allPages.map((page) => ({
    url: page.url,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
