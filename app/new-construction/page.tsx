import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Building, Shield, DollarSign, CheckCircle, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Construction Homes Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Buy new construction in Las Vegas with free buyer representation from Dr. Jan Duffy at Berkshire Hathaway HomeServices. Toll Brothers, Lennar, KB Home. The builder pays—you're protected.",
  keywords: [
    "new construction Las Vegas",
    "new homes Henderson",
    "Las Vegas home builders",
    "Toll Brothers Las Vegas",
    "Lennar Las Vegas",
    "new build homes Nevada",
  ],
};

const builders = [
  { name: "Toll Brothers", specialty: "Luxury homes", priceRange: "$600K - $2M+" },
  { name: "Lennar", specialty: "Family homes", priceRange: "$400K - $800K" },
  { name: "KB Home", specialty: "Entry to mid-range", priceRange: "$350K - $600K" },
  { name: "Taylor Morrison", specialty: "Master-planned communities", priceRange: "$400K - $900K" },
  { name: "Pulte Homes", specialty: "Energy-efficient homes", priceRange: "$400K - $700K" },
  { name: "Century Communities", specialty: "Affordable luxury", priceRange: "$350K - $600K" },
  { name: "Shea Homes", specialty: "55+ communities", priceRange: "$400K - $800K" },
  { name: "Richmond American", specialty: "Customizable homes", priceRange: "$400K - $700K" },
];

const newConstructionAreas = [
  { area: "Skye Canyon", builder: "Multiple builders", priceRange: "$450K - $800K" },
  { area: "Summerlin West", builder: "Toll Brothers, Lennar", priceRange: "$500K - $1.5M" },
  { area: "Inspirada", builder: "Century, Taylor Morrison", priceRange: "$400K - $700K" },
  { area: "Cadence", builder: "Lennar, KB Home", priceRange: "$350K - $600K" },
  { area: "Valley Vista", builder: "Multiple builders", priceRange: "$400K - $700K" },
  { area: "Reverence", builder: "Pulte, Taylor Morrison", priceRange: "$450K - $900K" },
];

export default function NewConstructionPage() {
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
              New Construction Homes in Las Vegas
            </h1>
            <p className="text-xl text-slate-600">
              Get <strong>free buyer representation</strong> on any new construction purchase. The
              builder pays Dr. Jan's commission—you get protection at no cost.
            </p>
          </div>

          {/* Why You Need Representation */}
          <section className="mb-16 bg-amber-50 border border-amber-200 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Why You Need Your Own Agent for New Construction
                </h2>
                <p className="text-slate-700 mb-4">
                  The friendly sales agent at the model home works for the builder, not you. Their
                  job is to sell homes at the highest price with the most profitable options. Having
                  a <strong>Berkshire Hathaway HomeServices</strong> agent costs you nothing—the
                  builder pays the commission—but gives you an advocate who protects your interests.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Without representation:</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Builder's agent negotiates against you</li>
                      <li>• No one reviews your contract for issues</li>
                      <li>• You may overpay on upgrades</li>
                      <li>• Limited leverage on incentives</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">With Dr. Jan representing you:</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Expert negotiation on your behalf</li>
                      <li>• Contract review and protection</li>
                      <li>• Guidance on valuable upgrades</li>
                      <li>• Maximum incentives secured</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Builders have sales agents who work for them, not you. Having your own
                representation costs you nothing but can save you tens of thousands in upgrades and
                negotiations. I've seen buyers leave $30,000 in incentives on the table simply
                because they didn't know to ask."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* What Dr. Jan Provides */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Free New Construction Buyer Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Accompany you on all builder visits",
                "Negotiate price, upgrades, and incentives",
                "Review purchase contract for issues",
                "Coordinate inspections during construction",
                "Monitor construction progress",
                "Final walkthrough representation",
                "Negotiate punch list items",
                "Coordinate with your lender",
                "Advise on high-value upgrades",
                "Protect your interests at closing",
              ].map((service) => (
                <div key={service} className="flex items-center bg-white p-4 rounded-lg border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-6">
              All services provided at no cost to you—the builder pays the commission
            </p>
          </section>

          {/* Builders */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Las Vegas Home Builders
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {builders.map((builder) => (
                <div key={builder.name} className="bg-white border border-slate-200 rounded-lg p-4">
                  <h3 className="font-bold text-slate-900">{builder.name}</h3>
                  <p className="text-sm text-slate-500">{builder.specialty}</p>
                  <p className="text-sm text-blue-600 font-medium mt-1">{builder.priceRange}</p>
                </div>
              ))}
            </div>
          </section>

          {/* New Construction Areas */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Hot New Construction Communities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newConstructionAreas.map((area) => (
                <div key={area.area} className="bg-slate-800 rounded-lg p-4">
                  <h3 className="font-bold text-lg">{area.area}</h3>
                  <p className="text-sm text-slate-400">{area.builder}</p>
                  <p className="text-sm text-blue-400 mt-1">{area.priceRange}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              New Construction FAQs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Do I really need an agent for new construction?",
                  a: "Yes! The builder's sales agent works for the builder, not you. Having your own Berkshire Hathaway HomeServices agent costs you nothing—the builder pays the commission—but gives you expert representation, negotiation, and contract review.",
                },
                {
                  q: "Will the builder give me a better price without an agent?",
                  a: "No. Builder prices are set regardless of agent involvement. The commission is already factored into the price. Without an agent, the builder simply keeps that money instead of paying it to someone representing you.",
                },
                {
                  q: "What incentives can you help me get?",
                  a: "Builders often offer closing cost credits, rate buydowns, upgrade packages, and price reductions. Dr. Jan knows which incentives are negotiable and how to maximize what you receive.",
                },
                {
                  q: "How long does new construction take?",
                  a: "Typically 6-12 months depending on the builder, community, and home size. Dr. Jan monitors construction progress and keeps you informed throughout the process.",
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
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Free New Construction Representation
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Before you visit another model home, call Dr. Jan Duffy. Free representation on any
              new construction purchase in Las Vegas.
            </p>
            <a
              href="tel:+17022221964"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call 702-222-1964
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
