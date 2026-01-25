import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, TrendingUp, DollarSign, Building, BarChart, CheckCircle, Calculator } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Las Vegas Investment Properties | Berkshire Hathaway HomeServices",
  description:
    "Invest in Las Vegas real estate with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Rental properties, ROI analysis, 1031 exchanges. No state income tax. Call (702) 222-1964.",
  keywords: [
    "Las Vegas investment property",
    "Las Vegas rental property",
    "Henderson real estate investing",
    "Nevada investment homes",
    "1031 exchange Las Vegas",
    "cash flow properties Las Vegas",
  ],
};

const investmentAreas = [
  {
    area: "North Las Vegas",
    avgPrice: "$385K",
    avgRent: "$1,950",
    capRate: "5.2%",
    appreciation: "+3.2%",
  },
  {
    area: "Henderson",
    avgPrice: "$485K",
    avgRent: "$2,300",
    capRate: "4.5%",
    appreciation: "+5.1%",
  },
  {
    area: "Spring Valley",
    avgPrice: "$420K",
    avgRent: "$2,100",
    capRate: "4.8%",
    appreciation: "+4.0%",
  },
  {
    area: "Summerlin",
    avgPrice: "$625K",
    avgRent: "$2,800",
    capRate: "4.0%",
    appreciation: "+6.8%",
  },
  {
    area: "Enterprise",
    avgPrice: "$450K",
    avgRent: "$2,200",
    capRate: "4.6%",
    appreciation: "+4.5%",
  },
  {
    area: "Centennial Hills",
    avgPrice: "$495K",
    avgRent: "$2,400",
    capRate: "4.4%",
    appreciation: "+4.8%",
  },
];

export default function InvestmentPropertiesPage() {
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
              Las Vegas Investment Properties
            </h1>
            <p className="text-xl text-slate-600">
              No state income tax, strong appreciation, and excellent rental yields. Discover why
              investors choose Las Vegas—with guidance from{" "}
              <strong>Berkshire Hathaway HomeServices</strong>.
            </p>
          </div>

          {/* Why Las Vegas */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Invest in Las Vegas?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-3" />
                <h3 className="font-bold mb-1">No State Income Tax</h3>
                <p className="text-slate-400 text-sm">Keep more of your rental income</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-1">Strong Appreciation</h3>
                <p className="text-slate-400 text-sm">+4.2% YoY in 2025</p>
              </div>
              <div className="text-center">
                <Building className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                <h3 className="font-bold mb-1">Growing Population</h3>
                <p className="text-slate-400 text-sm">Constant rental demand</p>
              </div>
              <div className="text-center">
                <BarChart className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold mb-1">Strong Cap Rates</h3>
                <p className="text-slate-400 text-sm">4-6% typical returns</p>
              </div>
            </div>
          </section>

          {/* Market Stats */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Investment Property Markets | January 2026
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                      Area
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                      Avg Price
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                      Avg Rent
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                      Cap Rate
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                      Appreciation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {investmentAreas.map((area, index) => (
                    <tr
                      key={area.area}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-6 py-4 font-medium text-slate-900">{area.area}</td>
                      <td className="px-6 py-4 text-slate-700">{area.avgPrice}</td>
                      <td className="px-6 py-4 text-slate-700">{area.avgRent}/mo</td>
                      <td className="px-6 py-4 text-green-600 font-medium">{area.capRate}</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">{area.appreciation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-slate-500 text-sm mt-4">
              Data represents single-family rental properties. Actual returns vary by property.
            </p>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Las Vegas rental yields are among the best in the country right now. But you need
                to know which neighborhoods are appreciating and which have peaked. Not all zip
                codes perform equally—I help investors identify the properties with the best
                combination of cash flow and appreciation potential."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* Investment Services */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Investment Property Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Property identification based on your criteria",
                "Cash flow and ROI analysis",
                "Neighborhood appreciation research",
                "Rental market comparisons",
                "1031 exchange coordination",
                "Property management referrals",
                "Multi-family opportunity sourcing",
                "Fix-and-flip opportunity identification",
                "Portfolio building strategy",
                "Out-of-state investor support",
              ].map((service) => (
                <div key={service} className="flex items-center bg-white p-4 rounded-lg border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Investment Types */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Investment Strategies We Support
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-700 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Buy & Hold Rentals</h3>
                <p className="text-blue-200 text-sm">
                  Long-term wealth building through rental income and appreciation. Ideal for
                  passive investors seeking steady cash flow.
                </p>
              </div>
              <div className="bg-blue-700 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Fix & Flip</h3>
                <p className="text-blue-200 text-sm">
                  Value-add opportunities for active investors. We identify underpriced properties
                  with renovation potential.
                </p>
              </div>
              <div className="bg-blue-700 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Short-Term Rentals</h3>
                <p className="text-blue-200 text-sm">
                  Vacation rental opportunities in tourist-friendly areas. Higher yields with
                  active management.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Investment Property FAQs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What returns can I expect from Las Vegas rental property?",
                  a: "Typical cap rates range from 4-6%, with appreciation adding another 4-5% annually in recent years. Total returns of 8-10% are achievable in the right neighborhoods. Dr. Jan provides detailed ROI analysis on any property you're considering.",
                },
                {
                  q: "Do you help out-of-state investors?",
                  a: "Yes! Many of Dr. Jan's investment clients are out-of-state buyers. She provides video tours, detailed market analysis, and coordinates with property managers so you can invest remotely with confidence.",
                },
                {
                  q: "Can you help with 1031 exchanges?",
                  a: "Absolutely. Dr. Jan works with qualified intermediaries and can help identify replacement properties within the 45-day identification window. Berkshire Hathaway's nationwide network is particularly valuable for exchanging into or out of Las Vegas.",
                },
                {
                  q: "What's the best area for investment properties?",
                  a: "It depends on your strategy. North Las Vegas offers the best cap rates, while Summerlin provides stronger appreciation. Henderson balances both. Dr. Jan analyzes your goals to recommend the right areas.",
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
              Ready to Invest in Las Vegas?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get expert guidance on Las Vegas investment properties from Dr. Jan Duffy and
              Berkshire Hathaway HomeServices.
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
