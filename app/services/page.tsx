import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Home,
  TrendingUp,
  DollarSign,
  Building,
  Plane,
  Calculator,
  Star,
  Users,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Services | Berkshire Hathaway HomeServices Las Vegas",
  description:
    "Comprehensive real estate services from Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Buying, selling, luxury, investment, relocation, and new construction.",
  keywords: [
    "Las Vegas real estate services",
    "Berkshire Hathaway services",
    "home buying Las Vegas",
    "home selling Henderson",
    "luxury real estate services",
  ],
};

const services = [
  {
    icon: Home,
    title: "Home Buying",
    slug: "buyers",
    description:
      "Expert guidance through every step of the home buying process. Free buyer representation—the seller pays the commission.",
    highlights: ["Full MLS access", "Expert negotiation", "Contract protection"],
  },
  {
    icon: TrendingUp,
    title: "Home Selling",
    slug: "sellers",
    description:
      "Maximize your home's value with professional marketing, accurate pricing, and expert negotiation from BHHS.",
    highlights: ["World-class marketing", "Accurate pricing", "Global exposure"],
  },
  {
    icon: Star,
    title: "Luxury Homes",
    slug: "luxury-homes",
    description:
      "Specialized expertise in Las Vegas luxury real estate. The Ridges, MacDonald Highlands, Southern Highlands, and more.",
    highlights: ["Discretion", "Global buyer network", "White-glove service"],
  },
  {
    icon: Building,
    title: "New Construction",
    slug: "new-construction",
    description:
      "Free buyer representation on any new construction purchase. The builder pays—you get protection at no cost.",
    highlights: ["Free representation", "Upgrade negotiation", "Contract review"],
  },
  {
    icon: DollarSign,
    title: "Investment Properties",
    slug: "investment-properties",
    description:
      "Strategic consulting for rental properties, fix-and-flip opportunities, and portfolio building in Las Vegas.",
    highlights: ["ROI analysis", "Market research", "1031 exchange help"],
  },
  {
    icon: Plane,
    title: "Relocation",
    slug: "relocation",
    description:
      "Comprehensive relocation assistance for moves to Las Vegas. BHHS's global network makes transitions seamless.",
    highlights: ["Neighborhood matching", "School research", "Remote buying"],
  },
  {
    icon: Calculator,
    title: "Home Valuation",
    slug: "home-valuation",
    description:
      "Free, no-obligation home valuations using current market data and 15+ years of Las Vegas expertise.",
    highlights: ["Accurate pricing", "No obligation", "Detailed analysis"],
  },
  {
    icon: Users,
    title: "Market Analysis",
    slug: "market-report",
    description:
      "In-depth Las Vegas real estate market insights and trends from Berkshire Hathaway HomeServices.",
    highlights: ["Current data", "Expert analysis", "Neighborhood stats"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Real Estate Services
            </h1>
            <p className="text-xl text-slate-600">
              Comprehensive real estate solutions from Dr. Jan Duffy, backed by the most trusted
              name in the business—<strong>Berkshire Hathaway HomeServices</strong>.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg hover:border-blue-300 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-lg p-3 group-hover:bg-blue-600 transition-colors">
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Value Proposition */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              The Berkshire Hathaway HomeServices Difference
            </h2>
            <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-8">
              When you work with a Berkshire Hathaway HomeServices agent, you're backed by a name
              synonymous with trust, ethical standards, and financial strength—the same principles
              that built Warren Buffett's empire.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">50,000+</div>
                <div className="text-slate-300">Agents Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-slate-300">Years Local Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">$127M+</div>
                <div className="text-slate-300">Volume Closed</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy for a free consultation about any of our real estate services.
            </p>
            <a
              href="tel:+17022221964"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 222-1964
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
