import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Heart,
  Home as HomeIcon,
  DollarSign,
  CheckCircle,
  Users,
  ArrowDownRight,
  Shield,
  Sun,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downsizing in Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Ready to simplify? Dr. Jan Duffy helps Las Vegas homeowners extract equity and transition to low-maintenance living. 55+ communities, condos, and more. Call (702) 222-1964.",
  keywords: [
    "downsizing Las Vegas",
    "sell large home Las Vegas",
    "55 plus communities Las Vegas",
    "empty nester Las Vegas",
    "Berkshire Hathaway HomeServices downsizing",
  ],
};

export default function DownsizingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/sellers" className="hover:text-blue-600">Sellers</Link>
              {" / "}
              <span className="text-slate-900">Downsizing</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Embrace Low-Maintenance Living
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Simplify. Downsize. Enjoy.
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Extract your equity. Embrace low-maintenance living. Start your next chapter.
            </p>
            <a
              href="tel:+17022221964"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Let's Talk About Your Options → (702) 222-1964
            </a>
          </div>

          {/* Equity Extraction */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Extract Your Equity, Enjoy Your Life
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <HomeIcon className="h-6 w-6 mr-2 text-blue-400" />
                  Your Current Home
                </h3>
                <p className="text-slate-300 mb-4">
                  Large family home you've owned for 15+ years. 4-5 bedrooms, big yard,
                  endless maintenance. Kids are gone, and it's more space than you need.
                </p>
                <div className="text-2xl font-bold text-blue-400">Value: $650K-$900K</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <ArrowDownRight className="h-6 w-6 mr-2 text-green-400" />
                  Your New Life
                </h3>
                <p className="text-slate-300 mb-4">
                  Low-maintenance 55+ community or modern condo. 2-3 bedrooms, no yard work,
                  resort amenities. Travel when you want.
                </p>
                <div className="text-2xl font-bold text-green-400">Cost: $400K-$550K</div>
                <div className="text-sm text-green-300 mt-1">+ $150K-$350K in your pocket</div>
              </div>
            </div>
            <p className="text-center text-slate-300 text-lg">
              Many downsizers walk away with <strong>$150,000-$350,000+ in equity</strong> while
              upgrading their lifestyle.
            </p>
          </section>

          {/* Transition Options */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Popular Downsizing Destinations
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">55+ Communities</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Sun City Summerlin, Del Webb, Heritage at Stonebridge. Active lifestyle,
                  built-in social network, exterior maintenance included.
                </p>
                <div className="text-blue-600 font-semibold">$375K - $650K</div>
                <Link
                  href="/55-plus-communities"
                  className="block mt-3 text-sm text-blue-600 hover:text-blue-700"
                >
                  Explore 55+ Communities →
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Single-Story Homes</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Right-sized single-story in established neighborhoods. No stairs,
                  smaller yard, lower utility costs. Age-in-place features available.
                </p>
                <div className="text-blue-600 font-semibold">$400K - $600K</div>
                <Link
                  href="/contact"
                  className="block mt-3 text-sm text-blue-600 hover:text-blue-700"
                >
                  Search Single-Story Homes →
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Lock-and-Leave Condos</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Secure, zero-maintenance living. Travel for months without worry.
                  Guard-gated options available in Summerlin and Henderson.
                </p>
                <div className="text-blue-600 font-semibold">$275K - $500K</div>
                <Link
                  href="/contact"
                  className="block mt-3 text-sm text-blue-600 hover:text-blue-700"
                >
                  View Condo Options →
                </Link>
              </div>
            </div>
          </section>

          {/* Dual Transaction Expertise */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              We Handle Both Sides of Your Transition
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">Selling Your Large Home</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Strategic pricing to attract qualified buyers quickly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional staging that showcases family-friendly features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Negotiate closing timeline that works with your purchase</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Coordinate with estate/trust attorneys if needed</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">Finding Your Right-Sized Home</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tour 55+ communities with expert guidance on amenities and fees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identify single-story homes with accessibility features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compare HOA fees, reserves, and community stability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Coordinate timing so you're never without a home</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Emotional Support */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-bold text-lg text-slate-900">
                  We Understand This Is Emotional
                </h3>
              </div>
              <p className="text-slate-700 mb-4">
                Your home holds decades of memories—first steps, holiday dinners, backyard
                barbecues. Downsizing isn't just a real estate transaction; it's a life transition.
              </p>
              <p className="text-slate-700">
                Dr. Jan approaches downsizing with empathy and patience. She'll never rush you,
                and she'll help you find a new home that feels right—not just financially, but
                emotionally. Many of her downsizing clients have become friends because she
                genuinely cares about their happiness, not just the sale.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-xl p-8">
              <blockquote className="text-lg italic mb-4">
                "Downsizing clients are some of my favorite to work with. They've worked hard,
                raised families, and now deserve to enjoy life without maintaining a 4,000 square
                foot house. I help them extract the equity they've earned, find a home that fits
                their current lifestyle, and often pocket significant cash for travel, grandkids,
                or just peace of mind. As a <strong>Berkshire Hathaway HomeServices</strong> agent,
                I have the experience and compassion this transition requires."
              </blockquote>
              <cite className="text-slate-300 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Simplify Your Life?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free home valuation and explore your downsizing options.
              Dr. Jan will show you what's possible without any pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17022221964"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 222-1964
              </a>
              <Link
                href="/home-valuation"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Get Free Valuation
              </Link>
            </div>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
