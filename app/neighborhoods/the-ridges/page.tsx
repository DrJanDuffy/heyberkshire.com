import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Shield, Star, Eye, Home, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ridges Summerlin Luxury Homes | Berkshire Hathaway HomeServices",
  description:
    "Discover The Ridges, Las Vegas's most exclusive luxury community. Dr. Jan Duffy at Berkshire Hathaway HomeServices specializes in Ridges estates from $2M-$15M+. Call 702-222-1964.",
  keywords: [
    "The Ridges Las Vegas",
    "The Ridges Summerlin",
    "Las Vegas luxury homes",
    "celebrity homes Las Vegas",
    "ultra luxury real estate Las Vegas",
  ],
};

export default function TheRidgesPage() {
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
              <Link href="/neighborhoods" className="hover:text-blue-600">Neighborhoods</Link>
              {" / "}
              <span className="text-slate-900">The Ridges</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              The Ridges Luxury Real Estate
            </h1>
            <p className="text-xl text-slate-600">
              Las Vegas's most exclusive address. Ultra-luxury estates in Summerlin's premier
              guard-gated community—available through{" "}
              <strong>Berkshire Hathaway HomeServices</strong>.
            </p>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              The Ridges Market Stats | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$2.5M</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+8.5%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">$2M-$15M+</div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">60 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
            </div>
          </section>

          {/* About The Ridges */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  About The Ridges
                </h2>
                <div className="prose prose-lg text-slate-700">
                  <p>
                    <strong>The Ridges</strong> represents the pinnacle of Las Vegas luxury living.
                    This ultra-exclusive guard-gated community in Summerlin is home to celebrities,
                    executives, and discerning buyers who demand the absolute best.
                  </p>
                  <p>
                    With custom estates ranging from $2 million to over $15 million, The Ridges
                    offers architectural masterpieces featuring panoramic Strip and mountain views,
                    resort-style amenities, and access to Bear's Best Golf Club.
                  </p>
                  <p>
                    <strong>Berkshire Hathaway HomeServices</strong> is uniquely positioned to
                    represent buyers and sellers at this level. The BHHS name commands respect and
                    attracts serious, qualified buyers—essential in the ultra-luxury market.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 text-lg mb-4">The Ridges Lifestyle</h3>
                {[
                  { icon: Shield, text: "24/7 guard-gated security" },
                  { icon: Star, text: "Celebrity and executive residents" },
                  { icon: Eye, text: "Panoramic Strip & mountain views" },
                  { icon: Award, text: "Bear's Best Golf Club access" },
                  { icon: Home, text: "Custom architectural estates" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center bg-slate-50 p-4 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600 mr-4" />
                      <span className="text-slate-700">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Luxury buyers expect discretion, market expertise, and flawless execution. In The
                Ridges, one wrong move can cost hundreds of thousands of dollars. That's why the
                Berkshire Hathaway HomeServices name matters at this level—it tells buyers and
                sellers alike that they're working with the best."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore The Ridges
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Interested in Las Vegas's most exclusive community? Dr. Jan Duffy provides
              confidential, white-glove service for Ridges buyers and sellers.
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
