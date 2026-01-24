import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layouts/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Las Vegas & Henderson Real Estate | Expert Real Estate Services",
  description:
    "Find your dream home in Las Vegas and Henderson with Dr. Jan Duffy. Expert real estate services, property listings, and personalized guidance. Licensed Realtor with Berkshire Hathaway HomeServices.",
};

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in Las Vegas and Henderson, Nevada, including Summerlin, Green Valley, and surrounding communities. Our expertise covers residential, luxury, and investment properties throughout Southern Nevada.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the home buying process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically, the home buying process takes 30-45 days from offer acceptance to closing. However, this can vary based on financing, inspections, and other factors. We'll guide you through each step to ensure a smooth transaction.",
      },
    },
    {
      "@type": "Question",
      name: "Do you help with home valuations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We provide free, no-obligation home valuations using current market data and comparable sales. This helps you understand your home's value whether you're considering selling or just curious about your investment.",
      },
    },
    {
      "@type": "Question",
      name: "What makes you different from other real estate agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With 15+ years of experience and 500+ successful transactions, we combine deep local market knowledge with personalized service. As part of Berkshire Hathaway HomeServices, we have access to extensive resources and technology to serve you better.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with investment properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We specialize in investment real estate including rental properties, fix-and-flip opportunities, and commercial properties. We'll help you identify profitable opportunities and navigate the investment process.",
      },
    },
    {
      "@type": "Question",
      name: "What are your fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For buyers, our services are typically free as commissions are paid by the seller. For sellers, we offer competitive commission structures. Contact us for a personalized consultation to discuss your specific situation.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProperties />
        <WhyChooseUs />
        <ReviewsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
