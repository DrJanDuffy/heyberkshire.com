import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, MapPin, Home, GraduationCap, TreePine, ShoppingBag, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summerlin Real Estate | Berkshire Hathaway HomeServices Las Vegas",
  description:
    "Find homes in Summerlin, Las Vegas with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Master-planned community, top schools, Red Rock views. Call 702-222-1964.",
  keywords: [
    "Summerlin homes for sale",
    "Summerlin real estate",
    "Summerlin Las Vegas",
    "homes near Red Rock",
    "Summerlin master planned community",
  ],
};

// Neighborhood Schema
const neighborhoodSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Summerlin, Las Vegas",
  description:
    "Premier master-planned community in Las Vegas featuring 150+ parks, top-rated schools, and stunning Red Rock Canyon views.",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.1672",
    longitude: "-115.3272",
  },
  containedInPlace: {
    "@type": "City",
    name: "Las Vegas",
  },
};

const summerlinVillages = [
  { name: "The Ridges", priceRange: "$2M - $15M+", type: "Ultra-Luxury" },
  { name: "The Summit", priceRange: "$3M - $20M+", type: "Ultra-Luxury" },
  { name: "Red Rock Country Club", priceRange: "$800K - $4M", type: "Golf Community" },
  { name: "Reverence", priceRange: "$450K - $900K", type: "New Construction" },
  { name: "Stonebridge", priceRange: "$500K - $1.2M", type: "Established" },
  { name: "The Paseos", priceRange: "$400K - $800K", type: "Family-Friendly" },
];

export default function SummerlinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(neighborhoodSchema) }}
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
              <span className="text-slate-900">Summerlin</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Summerlin Real Estate
            </h1>
            <p className="text-xl text-slate-600">
              Las Vegas's premier master-planned community. Find your Summerlin home with{" "}
              <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Summerlin Market Stats | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$625,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+6.8%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">22 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">150+</div>
                <div className="text-slate-300 text-sm">Parks & Trails</div>
              </div>
            </div>
          </section>

          {/* About Summerlin */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  About Summerlin
                </h2>
                <div className="prose prose-lg text-slate-700">
                  <p>
                    <strong>Summerlin</strong> is Las Vegas's most desirable master-planned
                    community, spanning 22,500 acres along the western edge of the Las Vegas Valley.
                    Named after Jean Summerlin, whose family sold the land to the Howard Hughes
                    Corporation, Summerlin has evolved into a world-class community that consistently
                    ranks among America's best places to live.
                  </p>
                  <p>
                    With stunning Red Rock Canyon views as a backdrop, Summerlin offers an
                    unparalleled lifestyle featuring over 150 parks, 150+ miles of trails, nine golf
                    courses, and Downtown Summerlin—an open-air shopping, dining, and entertainment
                    destination.
                  </p>
                  <p>
                    <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has helped
                    hundreds of families find their perfect Summerlin home, from affordable condos to
                    ultra-luxury estates in The Ridges and The Summit.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Summerlin Highlights</h3>
                {[
                  { icon: TreePine, text: "150+ parks and 150 miles of trails" },
                  { icon: GraduationCap, text: "Top-rated CCSD schools" },
                  { icon: ShoppingBag, text: "Downtown Summerlin shopping & dining" },
                  { icon: MapPin, text: "Minutes from Red Rock Canyon" },
                  { icon: Home, text: "Homes from $400K to $20M+" },
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

          {/* Villages */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Summerlin Villages & Communities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {summerlinVillages.map((village) => (
                <div
                  key={village.name}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{village.name}</h3>
                  <p className="text-sm text-blue-600 mb-2">{village.type}</p>
                  <p className="text-slate-700">{village.priceRange}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Summerlin isn't just a neighborhood—it's a lifestyle. From young professionals at
                Downtown Summerlin to families in The Paseos to executives in The Ridges, there's a
                Summerlin community for everyone. I've helped clients at every price point find
                their perfect Summerlin home."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Summerlin Real Estate FAQs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What are the best schools in Summerlin?",
                  a: "Summerlin has some of the highest-rated schools in Clark County, including Palo Verde High School, The Meadows School (private), and numerous excellent elementary options. Dr. Jan can provide detailed school boundary information for any property.",
                },
                {
                  q: "Is Summerlin good for families?",
                  a: "Absolutely. With 150+ parks, excellent schools, safe neighborhoods, and family-friendly amenities, Summerlin consistently ranks as one of the best places in Las Vegas to raise a family.",
                },
                {
                  q: "What's the most affordable area in Summerlin?",
                  a: "Older sections of Summerlin South offer homes in the $400K-$500K range. The Paseos and certain parts of Summerlin West also have more affordable options while still providing the Summerlin lifestyle.",
                },
                {
                  q: "How far is Summerlin from the Strip?",
                  a: "Downtown Summerlin is about 15-20 minutes from the Las Vegas Strip via the 215 Beltway. The western edge of Summerlin is about 25-30 minutes from Strip casinos.",
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
              Find Your Summerlin Home
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to explore Summerlin? Dr. Jan Duffy is your Berkshire Hathaway HomeServices
              Summerlin expert.
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
