import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Star, Shield, Globe, Eye, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Las Vegas Luxury Homes | Berkshire Hathaway HomeServices",
  description:
    "Discover Las Vegas luxury real estate with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. The Ridges, Summerlin, Southern Highlands. $1M+ homes. Call (702) 500-1942.",
  keywords: [
    "Las Vegas luxury homes",
    "The Ridges Las Vegas",
    "Summerlin luxury real estate",
    "Southern Highlands homes",
    "Berkshire Hathaway luxury",
    "million dollar homes Las Vegas",
  ],
};

const luxuryNeighborhoods = [
  {
    name: "The Ridges",
    location: "Summerlin",
    priceRange: "$2M - $15M+",
    description:
      "Ultra-exclusive guard-gated community with custom estates, celebrity residents, and Bear's Best Golf Club.",
  },
  {
    name: "MacDonald Highlands",
    location: "Henderson",
    priceRange: "$1.5M - $10M+",
    description:
      "Prestigious hillside community with Dragon Ridge Country Club and panoramic Strip views.",
  },
  {
    name: "Southern Highlands",
    location: "Las Vegas",
    priceRange: "$800K - $5M+",
    description:
      "Guard-gated luxury community featuring championship golf and stunning mountain views.",
  },
  {
    name: "The Summit Club",
    location: "Summerlin",
    priceRange: "$3M - $20M+",
    description:
      "Ultra-private Tom Fazio golf community with only 250 homesites. Las Vegas's most exclusive address.",
  },
  {
    name: "Ascaya",
    location: "Henderson",
    priceRange: "$2M - $12M+",
    description:
      "Modern architectural community with panoramic views and contemporary custom homes.",
  },
  {
    name: "Lake Las Vegas",
    location: "Henderson",
    priceRange: "$800K - $8M+",
    description:
      "Resort-style living on a 320-acre private lake with Mediterranean-inspired architecture.",
  },
];

export default function LuxuryHomesPage() {
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
              Las Vegas Luxury Real Estate
            </h1>
            <p className="text-xl text-slate-600">
              <strong>Berkshire Hathaway HomeServices</strong> represents the gold standard in
              luxury real estate. When you're buying or selling a $1M+ home, trust matters more than
              ever.
            </p>
          </div>

          {/* Luxury Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Las Vegas Luxury Market | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$1.2M</div>
                <div className="text-slate-300 text-sm">Median Luxury Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+8.5%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">890</div>
                <div className="text-slate-300 text-sm">Active $1M+ Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">45 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
            </div>
          </section>

          {/* Why BHHS for Luxury */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Why Choose Berkshire Hathaway for Luxury Real Estate
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Trusted Brand",
                  desc: "The Berkshire Hathaway name commands respect and attracts serious buyers",
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  desc: "50,000+ agents worldwide connecting your property to affluent buyers",
                },
                {
                  icon: Eye,
                  title: "Discretion",
                  desc: "Privacy-focused marketing for clients who value confidentiality",
                },
                {
                  icon: Star,
                  title: "White Glove",
                  desc: "Concierge-level service for luxury transactions",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="text-center p-6">
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Luxury buyers expect discretion, market expertise, and flawless execution. In this
                price range, one wrong move can cost hundreds of thousands of dollars. That's why
                the Berkshire Hathaway HomeServices name matters—it tells buyers and sellers alike
                that they're working with the best."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* Luxury Neighborhoods */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Premier Las Vegas Luxury Communities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {luxuryNeighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood.name}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{neighborhood.name}</h3>
                      <p className="text-sm text-slate-500">{neighborhood.location}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      {neighborhood.priceRange}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">{neighborhood.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Luxury Services */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Luxury Home Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Private, off-market listing opportunities",
                "Professional architectural photography",
                "Drone and video marketing",
                "Global syndication to luxury platforms",
                "Targeted marketing to high-net-worth buyers",
                "Confidential transactions available",
                "International buyer connections",
                "Concierge closing coordination",
              ].map((service) => (
                <div key={service} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3 flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Luxury Home FAQs</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What defines a luxury home in Las Vegas?",
                  a: "Generally, homes priced at $1 million and above are considered luxury in Las Vegas. The ultra-luxury segment starts around $3 million. Features typically include custom architecture, premium locations, high-end finishes, and exclusive amenities.",
                },
                {
                  q: "How long do luxury homes take to sell?",
                  a: "Luxury homes average 45 days on market, longer than the overall market. However, exceptional properties priced correctly can sell quickly. Marketing strategy and pricing are crucial at this level.",
                },
                {
                  q: "Can I sell my luxury home privately?",
                  a: "Yes. Dr. Jan offers confidential, off-market sales for clients who prefer discretion. BHHS's network can connect your property with qualified buyers without public marketing.",
                },
                {
                  q: "What commission do you charge for luxury homes?",
                  a: "Commission rates are negotiable. Dr. Jan provides transparent pricing during your consultation. The value of Berkshire Hathaway's global reach and reputation often results in higher sale prices that more than offset commission.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Las Vegas Luxury Living
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Whether buying or selling a luxury property, Dr. Jan Duffy provides the expertise and
              Berkshire Hathaway prestige your transaction deserves.
            </p>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-1942
            </a>
            <p className="mt-4 text-slate-400 text-sm">
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
