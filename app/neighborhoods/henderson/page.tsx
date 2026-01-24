import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, MapPin, Home, GraduationCap, Shield, Heart, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Henderson Real Estate | Berkshire Hathaway HomeServices Nevada",
  description:
    "Find homes in Henderson, Nevada with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Nevada's safest city, top schools, Green Valley, Lake Las Vegas. Call 702-222-1964.",
  keywords: [
    "Henderson homes for sale",
    "Henderson Nevada real estate",
    "Green Valley Henderson",
    "Lake Las Vegas homes",
    "Henderson NV neighborhoods",
  ],
};

// Neighborhood Schema
const neighborhoodSchema = {
  "@context": "https://schema.org",
  "@type": "City",
  name: "Henderson, Nevada",
  description:
    "Nevada's second-largest city, consistently ranked as one of America's safest cities with excellent schools and family-friendly communities.",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.0395",
    longitude: "-114.9817",
  },
  containedInPlace: {
    "@type": "State",
    name: "Nevada",
  },
};

const hendersonCommunities = [
  { name: "Green Valley", priceRange: "$480K - $1.2M", type: "Established", highlight: "Mature landscaping" },
  { name: "Lake Las Vegas", priceRange: "$500K - $5M+", type: "Resort Living", highlight: "Waterfront homes" },
  { name: "Inspirada", priceRange: "$450K - $700K", type: "Master-Planned", highlight: "Resort amenities" },
  { name: "MacDonald Highlands", priceRange: "$1.5M - $10M+", type: "Luxury", highlight: "Dragon Ridge Golf" },
  { name: "Cadence", priceRange: "$350K - $600K", type: "New Construction", highlight: "Modern amenities" },
  { name: "Anthem", priceRange: "$450K - $1.5M", type: "Master-Planned", highlight: "Active lifestyle" },
];

export default function HendersonPage() {
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
              <span className="text-slate-900">Henderson</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Henderson Real Estate
            </h1>
            <p className="text-xl text-slate-600">
              Nevada's second-largest city and one of America's safest. Find your Henderson home
              with <strong>Berkshire Hathaway HomeServices</strong>.
            </p>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Henderson Market Stats | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$485,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+5.1%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">24 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">#2</div>
                <div className="text-slate-300 text-sm">Safest US City (100K+)</div>
              </div>
            </div>
          </section>

          {/* About Henderson */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  About Henderson
                </h2>
                <div className="prose prose-lg text-slate-700">
                  <p>
                    <strong>Henderson</strong> is Nevada's second-largest city and consistently
                    ranks among America's safest cities with populations over 100,000. Located just
                    southeast of Las Vegas, Henderson offers a perfect blend of suburban tranquility
                    and urban convenience.
                  </p>
                  <p>
                    From the established charm of Green Valley to the resort lifestyle of Lake Las
                    Vegas to the modern amenities of Inspirada, Henderson offers diverse living
                    options for every lifestyle. The city is known for excellent schools, low crime,
                    and strong community values.
                  </p>
                  <p>
                    <strong>Berkshire Hathaway HomeServices</strong> agents like Dr. Jan Duffy have
                    deep expertise in Henderson's many communities, helping buyers find the perfect
                    neighborhood match.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Why Henderson?</h3>
                {[
                  { icon: Shield, text: "Ranked among America's safest cities" },
                  { icon: GraduationCap, text: "Top-rated schools in Clark County" },
                  { icon: Heart, text: "Strong community & family values" },
                  { icon: MapPin, text: "Easy access to Strip & airport" },
                  { icon: Home, text: "Diverse housing options" },
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

          {/* Communities */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Henderson Communities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hendersonCommunities.map((community) => (
                <div
                  key={community.name}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{community.name}</h3>
                  <p className="text-sm text-blue-600 mb-1">{community.type}</p>
                  <p className="text-sm text-slate-500 mb-2">{community.highlight}</p>
                  <p className="text-slate-700 font-medium">{community.priceRange}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Henderson is where Las Vegas families come to settle down. The combination of
                safety, schools, and community makes it ideal for families. And with options
                ranging from Cadence's affordable new construction to MacDonald Highlands' luxury
                estates, there's a Henderson home for every budget."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Henderson Real Estate FAQs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is Henderson safer than Las Vegas?",
                  a: "Yes. Henderson consistently ranks among the safest cities in America for cities over 100,000 population. Crime rates are significantly lower than Las Vegas, making it popular with families.",
                },
                {
                  q: "What's the difference between Green Valley and Henderson?",
                  a: "Green Valley is a community within Henderson, one of its oldest and most established neighborhoods. Henderson is the city; Green Valley, Lake Las Vegas, Inspirada, and others are communities within it.",
                },
                {
                  q: "How far is Henderson from the Las Vegas Strip?",
                  a: "Most Henderson neighborhoods are 15-25 minutes from the Strip via the 215 Beltway or I-515. Lake Las Vegas is further out at about 30-35 minutes.",
                },
                {
                  q: "What are the best Henderson schools?",
                  a: "Henderson has many top-rated schools including Coronado High School, Green Valley High School, and numerous excellent elementary and middle schools. Dr. Jan can provide school boundary information for any property.",
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
              Find Your Henderson Home
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to explore Henderson? Dr. Jan Duffy is your Berkshire Hathaway HomeServices
              Henderson expert.
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
