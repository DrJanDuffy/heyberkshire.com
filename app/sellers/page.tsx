import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Camera,
  Globe,
  DollarSign,
  TrendingUp,
  CheckCircle,
  BarChart,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Las Vegas Home | Berkshire Hathaway HomeServices",
  description:
    "Sell your Las Vegas or Henderson home for top dollar with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Free home valuation. World-class marketing. Call (702) 222-1964.",
  keywords: [
    "sell home Las Vegas",
    "Las Vegas listing agent",
    "Berkshire Hathaway sell house",
    "Henderson home selling",
    "what is my home worth Las Vegas",
  ],
};

const sellingBenefits = [
  {
    icon: Globe,
    title: "World-Class Marketing",
    description:
      "Your home gets exposure through the most recognized real estate brand in the world. Professional photography, virtual tours, and syndication to 100+ websites.",
  },
  {
    icon: Users,
    title: "Global Network",
    description:
      "Berkshire Hathaway's 50,000+ agents worldwide means your listing reaches qualified buyers from across the globe—especially important for Las Vegas's relocation market.",
  },
  {
    icon: BarChart,
    title: "Pricing Expertise",
    description:
      "Dr. Jan's 15+ years of local experience means accurate pricing that attracts buyers without leaving money on the table. Overpriced homes sit; well-priced homes sell.",
  },
  {
    icon: DollarSign,
    title: "Expert Negotiation",
    description:
      "From offer review to closing negotiations, Dr. Jan protects your interests and maximizes your net proceeds. $127M+ in closed transactions means she knows how to close deals.",
  },
];

export default function SellersPage() {
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
              Sell Your Home for Top Dollar
            </h1>
            <p className="text-xl text-slate-600">
              When you list with <strong>Berkshire Hathaway HomeServices</strong>, you get
              world-class marketing, expert pricing, and a name that buyers trust.
            </p>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Las Vegas Seller Market | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+4.2%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">28 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">2.1 Mo</div>
                <div className="text-slate-300 text-sm">Inventory (Seller's Market)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">98.5%</div>
                <div className="text-slate-300 text-sm">List-to-Sale Ratio</div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              The BHHS Selling Advantage
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {sellingBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Pricing your home correctly from day one is the single most important factor in
                getting top dollar. Overpriced homes sit, and every day on market costs you money.
                That's why I use comprehensive market analysis and 15+ years of Las Vegas
                experience to price homes right the first time."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              What's Included When You List with BHHS
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Professional photography & virtual tour",
                "Comprehensive market analysis & pricing strategy",
                "MLS listing syndicated to 100+ websites",
                "Berkshire Hathaway global network exposure",
                "Social media marketing campaign",
                "Open house coordination",
                "Showing feedback & regular updates",
                "Expert negotiation on all offers",
                "Transaction coordination through closing",
                "Staging consultation",
              ].map((item) => (
                <div key={item} className="flex items-center bg-white p-4 rounded-lg border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Home Valuation CTA */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">What's Your Home Worth?</h2>
                <p className="text-blue-100 mb-6">
                  Get a free, no-obligation home valuation from Dr. Jan Duffy. Using current MLS
                  data and 15+ years of local expertise, you'll know exactly what your home could
                  sell for in today's market.
                </p>
                <Link
                  href="/home-valuation"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors"
                >
                  Get Free Valuation
                </Link>
              </div>
              <div className="text-center">
                <TrendingUp className="h-24 w-24 text-blue-200 mx-auto mb-4" />
                <p className="text-2xl font-bold">$450,000</p>
                <p className="text-blue-200">Median Home Price (Jan 2026)</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Home Selling FAQs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How long will it take to sell my home?",
                  a: "Well-priced Las Vegas homes are selling in an average of 28 days. Luxury homes may take 45+ days. The key is pricing correctly from day one—overpriced homes can sit for months.",
                },
                {
                  q: "What do I need to do to prepare my home?",
                  a: "Dr. Jan provides a personalized preparation checklist for every listing. Generally, decluttering, minor repairs, fresh paint, and professional staging consultation yield the highest ROI.",
                },
                {
                  q: "How does Berkshire Hathaway market my home?",
                  a: "Your home gets professional photography, virtual tours, MLS syndication to 100+ websites, BHHS global network exposure, social media promotion, and targeted digital advertising.",
                },
                {
                  q: "What are your commission rates?",
                  a: "Commission structures are negotiable and competitive. Dr. Jan offers transparent pricing and will walk you through all costs during your listing consultation.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Sell?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Schedule a free listing consultation with Dr. Jan Duffy and discover what your home
              could sell for with Berkshire Hathaway HomeServices.
            </p>
            <a
              href="tel:+17022221964"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 222-1964
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
