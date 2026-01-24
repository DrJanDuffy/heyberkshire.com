import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, MapPin, Home, GraduationCap, TreePine, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Valley Henderson Real Estate | Berkshire Hathaway HomeServices",
  description:
    "Find homes in Green Valley, Henderson with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Established community, golf courses, excellent schools. Call 702-222-1964.",
  keywords: [
    "Green Valley homes for sale",
    "Green Valley Henderson",
    "Green Valley real estate",
    "Henderson Nevada homes",
    "Green Valley Ranch",
  ],
};

export default function GreenValleyPage() {
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
              <span className="text-slate-900">Green Valley</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Green Valley Real Estate
            </h1>
            <p className="text-xl text-slate-600">
              Henderson's most established community. Find your Green Valley home with{" "}
              <strong>Berkshire Hathaway HomeServices</strong>.
            </p>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Green Valley Market Stats | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$520,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+4.8%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">26 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1988</div>
                <div className="text-slate-300 text-sm">Year Established</div>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">About Green Valley</h2>
                <div className="prose prose-lg text-slate-700">
                  <p>
                    <strong>Green Valley</strong> is Henderson's original master-planned community
                    and one of the most desirable neighborhoods in Southern Nevada. Established in
                    1988, Green Valley offers mature landscaping, established schools, and a strong
                    sense of community that newer developments simply can't replicate.
                  </p>
                  <p>
                    The community is anchored by The District at Green Valley Ranch—a premier
                    shopping, dining, and entertainment destination. Multiple golf courses,
                    including Legacy Golf Club, provide recreation for golf enthusiasts.
                  </p>
                  <p>
                    <strong>Berkshire Hathaway HomeServices</strong> agents have deep expertise in
                    Green Valley's diverse housing options, from condos and townhomes to luxury
                    custom estates.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Green Valley Highlights</h3>
                {[
                  { icon: TreePine, text: "Mature landscaping & tree-lined streets" },
                  { icon: GraduationCap, text: "Top-rated Henderson schools" },
                  { icon: ShoppingBag, text: "The District at Green Valley Ranch" },
                  { icon: MapPin, text: "Central Henderson location" },
                  { icon: Home, text: "Homes from $400K to $1.2M+" },
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
                "Green Valley offers something newer communities can't—established neighborhoods
                with mature trees, proven schools, and a real sense of community. It's where
                Henderson families have put down roots for over 35 years."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Green Valley Home</h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to explore Green Valley? Call Dr. Jan Duffy, your Berkshire Hathaway
              HomeServices Henderson expert.
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
