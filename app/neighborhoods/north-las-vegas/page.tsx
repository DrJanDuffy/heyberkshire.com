import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, DollarSign, TrendingUp, Home as HomeIcon, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berkshire Hathaway HomeServices North Las Vegas | Affordable Homes",
  description:
    "Find affordable North Las Vegas homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy helps first-time buyers and investors. Median price $385K. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices North Las Vegas",
    "North Las Vegas homes for sale",
    "affordable homes Las Vegas",
    "first time home buyer Las Vegas",
    "new construction North Las Vegas",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the current median home price in North Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of January 2026, North Las Vegas' median home price is $385,000—the most affordable in the Las Vegas Valley. First-time buyers can find homes starting in the $320,000s, while new construction ranges from $380,000 to $550,000.",
      },
    },
    {
      "@type": "Question",
      name: "Is North Las Vegas a good area to buy a home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "North Las Vegas has transformed dramatically with new master-planned communities, improved infrastructure, and major employment centers. It offers excellent value for first-time buyers and investors seeking positive cash flow on rental properties.",
      },
    },
    {
      "@type": "Question",
      name: "What new construction is available in North Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Major builders including Lennar, KB Home, Richmond American, and Century Communities offer new construction in North Las Vegas. Communities like Aliante, Tule Springs, and Valley Vista feature modern designs with energy-efficient features.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Berkshire Hathaway HomeServices for North Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BHHS provides expert guidance for first-time buyers navigating the purchase process, plus free representation on new construction purchases. Dr. Jan Duffy helps clients find value while avoiding common pitfalls in emerging neighborhoods.",
      },
    },
  ],
};

export default function NorthLasVegasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/neighborhoods" className="hover:text-blue-600">Neighborhoods</Link>
              {" / "}
              <span className="text-slate-900">North Las Vegas</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Berkshire Hathaway HomeServices North Las Vegas
            </h1>
            <p className="text-xl text-slate-600">
              Affordable homeownership and investment opportunities. Find your North Las Vegas
              home with <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              North Las Vegas Market | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$385,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">32 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">892</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+3.2%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                North Las Vegas: The Valley's Best Value for First-Time Buyers
              </h2>
              <p>
                <strong>North Las Vegas</strong> has undergone a remarkable transformation over the past
                decade. What was once considered a distant suburb is now a thriving city with new
                master-planned communities, major employers, and infrastructure improvements that make
                it the Las Vegas Valley's best opportunity for affordable homeownership. <strong>Berkshire
                Hathaway HomeServices</strong> is proud to help first-time buyers and investors
                discover North Las Vegas's potential.
              </p>
              <p>
                With a median home price of <strong>$385,000</strong>—roughly $65,000 less than Las Vegas
                and $100,000 less than Henderson—North Las Vegas offers entry to homeownership that's
                increasingly difficult to find elsewhere in Southern Nevada. First-time buyers priced
                out of Summerlin or Henderson find that North Las Vegas delivers modern homes with
                contemporary features at prices they can actually afford. And with Nevada's lack of
                state income tax, more of their income goes toward building equity.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> provides the same
                expert service in North Las Vegas as we do in the valley's luxury markets. Dr. Jan Duffy
                helps first-time buyers understand the purchase process, navigate financing options, and
                avoid common pitfalls. For new construction—where builders' sales agents represent the
                builder, not you—BHHS provides free buyer representation that can save thousands in
                upgrades and negotiations.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Most Affordable in the Valley</h4>
                  </div>
                  <p className="text-slate-600">
                    North Las Vegas offers the lowest median home prices in the Las Vegas Valley, making
                    homeownership attainable for first-time buyers, young families, and investors. Entry-level
                    homes start in the $320,000s, while new construction from quality builders ranges
                    from $380,000 to $550,000—prices that would buy a condo elsewhere.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Rapid Growth & Development</h4>
                  </div>
                  <p className="text-slate-600">
                    North Las Vegas is experiencing unprecedented growth with new retail centers, improved
                    roads, and major employers moving to the area. The city's population has grown over
                    30% in the past decade, bringing new amenities, restaurants, and services. This growth
                    trajectory suggests continued appreciation for today's buyers.
                  </p>
                </div>
              </div>

              <p className="mt-8">
                The current market shows <strong>892 active listings</strong> with homes averaging
                <strong> 32 days on market</strong>—slightly longer than the valley average, giving
                buyers more time to make informed decisions. Year-over-year appreciation of <strong>3.2%</strong>
                is more modest than luxury markets but represents solid, sustainable growth. Investors
                find particularly strong opportunities here, with rental yields often exceeding 6%.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in North Las Vegas means
                getting honest guidance about which neighborhoods offer the best value, which builders
                have the best reputations, and which areas are poised for the strongest appreciation.
                Dr. Jan Duffy won't push you toward a more expensive area when North Las Vegas fits
                your needs—that integrity is what sets BHHS apart from agencies focused solely on
                commission.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "I tell first-time buyers the truth: you don't need to stretch your budget to own a
                great home. North Las Vegas offers brand-new construction with modern features at
                prices that let you build wealth instead of struggling with payments. As a Berkshire
                Hathaway HomeServices agent, my job is to find the right fit—not the highest price."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About North Las Vegas
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What is the current median home price in North Las Vegas?
                </h3>
                <p className="text-slate-600">
                  As of January 2026, North Las Vegas' median home price is $385,000—the most affordable
                  in the Las Vegas Valley. First-time buyers can find homes starting in the $320,000s,
                  while new construction ranges from $380,000 to $550,000.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Is North Las Vegas a good area to buy a home?
                </h3>
                <p className="text-slate-600">
                  North Las Vegas has transformed dramatically with new master-planned communities,
                  improved infrastructure, and major employment centers. It offers excellent value for
                  first-time buyers and investors seeking positive cash flow on rental properties.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What new construction is available in North Las Vegas?
                </h3>
                <p className="text-slate-600">
                  Major builders including Lennar, KB Home, Richmond American, and Century Communities
                  offer new construction in North Las Vegas. Communities like Aliante, Tule Springs,
                  and Valley Vista feature modern designs with energy-efficient features.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Why choose Berkshire Hathaway HomeServices for North Las Vegas?
                </h3>
                <p className="text-slate-600">
                  BHHS provides expert guidance for first-time buyers navigating the purchase process,
                  plus free representation on new construction purchases. Dr. Jan Duffy helps clients
                  find value while avoiding common pitfalls in emerging neighborhoods.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Homeownership Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices North Las Vegas expert,
              for guidance on finding affordable homes that fit your budget.
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
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
