import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Search,
  FileText,
  Home,
  Key,
  CheckCircle,
  DollarSign,
  Shield,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Buying Guide Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Looking to buy a home in Las Vegas? Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties guides you through every step. Free buyer consultation. Call 702-222-1964.",
  keywords: [
    "buy home Las Vegas",
    "Las Vegas home buyer",
    "Berkshire Hathaway buyer agent",
    "Henderson homes for sale",
    "first time home buyer Las Vegas",
  ],
};

const buyingSteps = [
  {
    icon: DollarSign,
    title: "Get Pre-Approved",
    description:
      "Know your budget before you start looking. Dr. Jan connects you with trusted local lenders who offer competitive rates and programs for every situation.",
  },
  {
    icon: Search,
    title: "Search for Homes",
    description:
      "Dr. Jan provides access to all MLS listings, off-market opportunities, and new construction. She'll find homes that match your criteria and arrange private showings.",
  },
  {
    icon: FileText,
    title: "Make an Offer",
    description:
      "Dr. Jan's market expertise ensures your offer is competitive yet protects your interests. She negotiates on your behalf to get the best terms possible.",
  },
  {
    icon: Home,
    title: "Inspections & Due Diligence",
    description:
      "Coordinate inspections, review disclosures, and ensure you understand exactly what you're buying. No surprises after closing.",
  },
  {
    icon: Key,
    title: "Close & Get Keys",
    description:
      "Dr. Jan coordinates with lenders, title, and escrow to ensure a smooth closing. Then you get the keys to your new home!",
  },
];

export default function BuyersPage() {
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
              Buy Your Las Vegas Home with Confidence
            </h1>
            <p className="text-xl text-slate-600">
              When you work with a <strong>Berkshire Hathaway HomeServices</strong> buyer's agent,
              you're backed by the most trusted name in real estate—and it costs you nothing.
            </p>
          </div>

          {/* Value Prop */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Free Buyer Representation</h2>
                <p className="text-slate-300 mb-6">
                  Here's what many buyers don't know: having your own agent costs you nothing. The
                  seller pays the commission, but the representation is yours.{" "}
                  <strong>Berkshire Hathaway HomeServices</strong> agents protect your interests,
                  not the seller's.
                </p>
                <ul className="space-y-2">
                  {[
                    "Full MLS access + off-market opportunities",
                    "Expert negotiation on your behalf",
                    "Contract and disclosure review",
                    "Inspection coordination",
                    "Lender and service provider referrals",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <p className="text-2xl font-bold mb-2">Your Agent, Your Advocate</p>
                <p className="text-slate-400">
                  Dr. Jan Duffy works exclusively for your interests throughout the entire
                  transaction
                </p>
              </div>
            </div>
          </section>

          {/* Buying Process */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              The Home Buying Process
            </h2>
            <div className="space-y-6">
              {buyingSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex gap-6 items-start bg-white border border-slate-200 rounded-lg p-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "My job isn't just to show you houses—it's to make sure you don't overpay, that you
                understand what you're buying, and that you're protected through every step of the
                transaction. That's what Berkshire Hathaway HomeServices representation means."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* Market Stats */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Las Vegas Buyer Market Stats | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">$450K</div>
                <div className="text-blue-200 text-sm">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">4,850</div>
                <div className="text-blue-200 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">28 Days</div>
                <div className="text-blue-200 text-sm">Avg. Time to Close</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">6.5%</div>
                <div className="text-blue-200 text-sm">Current Rates</div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Home Buying FAQs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How much do I need for a down payment?",
                  a: "Down payments vary by loan type: FHA (3.5%), Conventional (3-20%), VA (0%), USDA (0%). Dr. Jan can connect you with lenders who specialize in low down payment programs.",
                },
                {
                  q: "Should I get pre-approved before looking at homes?",
                  a: "Yes! Pre-approval shows sellers you're serious and helps you understand your budget. In competitive situations, pre-approved buyers have a significant advantage.",
                },
                {
                  q: "Does BHHS help with new construction?",
                  a: "Yes! Dr. Jan provides free representation for new construction purchases. The builder pays her commission, but she works for you—protecting your interests during the build process.",
                },
                {
                  q: "What if I'm relocating from another state?",
                  a: "Berkshire Hathaway's global network makes relocations seamless. Dr. Jan can coordinate with agents in your current city while helping you find the perfect Las Vegas home remotely.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Home?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Questions about buying in Las Vegas? Call or text Dr. Jan Duffy for a free buyer
              consultation.
            </p>
            <a
              href="tel:+17022221964"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call 702-222-1964
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
