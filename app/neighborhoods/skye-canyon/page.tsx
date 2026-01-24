import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Home, Mountain, GraduationCap, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skye Canyon Las Vegas Homes | Berkshire Hathaway HomeServices",
  description:
    "Find homes in Skye Canyon, Las Vegas with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. New master-planned community with mountain views. Call 702-222-1964.",
  keywords: [
    "Skye Canyon homes for sale",
    "Skye Canyon Las Vegas",
    "Skye Canyon real estate",
    "northwest Las Vegas homes",
    "new construction Las Vegas",
  ],
};

export default function SkyeCanyonPage() {
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
              <span className="text-slate-900">Skye Canyon</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Skye Canyon Real Estate
            </h1>
            <p className="text-xl text-slate-600">
              Northwest Las Vegas's premier new community. Explore Skye Canyon with{" "}
              <strong>Berkshire Hathaway HomeServices</strong>.
            </p>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Skye Canyon Market | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$550,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+5.5%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">21 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1,700</div>
                <div className="text-slate-300 text-sm">Acres</div>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">About Skye Canyon</h2>
                <div className="prose prose-lg text-slate-700">
                  <p>
                    <strong>Skye Canyon</strong> is northwest Las Vegas's fastest-growing
                    master-planned community, offering a perfect blend of new construction homes,
                    mountain views, and family-friendly amenities.
                  </p>
                  <p>
                    The community features Skye Center—a 15-acre park with resort-style pools, a
                    fitness center, and event spaces. New homes from top builders offer modern
                    designs and energy-efficient construction.
                  </p>
                  <p>
                    <strong>Berkshire Hathaway HomeServices</strong> provides free buyer
                    representation on all Skye Canyon new construction, ensuring you get the best
                    deal and protection.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Skye Canyon Features</h3>
                {[
                  { icon: Mountain, text: "Stunning mountain backdrop" },
                  { icon: Home, text: "New construction from top builders" },
                  { icon: Users, text: "Skye Center community amenities" },
                  { icon: GraduationCap, text: "New schools serving the community" },
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

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Skye Canyon Home</h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready for new construction in Skye Canyon? Get free buyer representation from Dr. Jan
              Duffy.
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
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
