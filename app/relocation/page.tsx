import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Plane, MapPin, Users, CheckCircle, Sun, DollarSign, Building } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relocating to Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Moving to Las Vegas? Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties provides comprehensive relocation services. Schools, neighborhoods, cost of living. Call (702) 500-1942.",
  keywords: [
    "relocating to Las Vegas",
    "moving to Las Vegas",
    "Las Vegas relocation services",
    "moving to Henderson Nevada",
    "California to Las Vegas",
    "Las Vegas relocation agent",
  ],
};

const popularRelocationAreas = [
  {
    name: "Summerlin",
    best: "Families, professionals",
    highlights: "Top schools, parks, Red Rock proximity",
    from: "$500K",
  },
  {
    name: "Henderson",
    best: "Families, retirees",
    highlights: "Low crime, excellent schools, community feel",
    from: "$450K",
  },
  {
    name: "Green Valley",
    best: "Established families",
    highlights: "Mature landscaping, golf, shopping",
    from: "$480K",
  },
  {
    name: "Skye Canyon",
    best: "Young families",
    highlights: "New construction, mountain views, modern amenities",
    from: "$500K",
  },
  {
    name: "Southern Highlands",
    best: "Luxury buyers, golfers",
    highlights: "Guard-gated, golf community, mountain views",
    from: "$700K",
  },
  {
    name: "Inspirada",
    best: "Families, active adults",
    highlights: "Resort pools, trails, new homes",
    from: "$450K",
  },
];

export default function RelocationPage() {
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
              Relocating to Las Vegas?
            </h1>
            <p className="text-xl text-slate-600">
              <strong>Berkshire Hathaway HomeServices</strong> makes your move seamless. With
              50,000+ agents nationwide, we coordinate your relocation from anywhere in the country.
            </p>
          </div>

          {/* Why Las Vegas */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Why People Are Moving to Las Vegas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-3" />
                <h3 className="font-bold mb-1">No State Income Tax</h3>
                <p className="text-slate-400 text-sm">Keep more of what you earn</p>
              </div>
              <div className="text-center">
                <Sun className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold mb-1">300+ Days of Sun</h3>
                <p className="text-slate-400 text-sm">Year-round outdoor lifestyle</p>
              </div>
              <div className="text-center">
                <Building className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-1">Affordable Housing</h3>
                <p className="text-slate-400 text-sm">50% less than CA coastal cities</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                <h3 className="font-bold mb-1">Growing Economy</h3>
                <p className="text-slate-400 text-sm">Sports, tech, healthcare jobs</p>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Moving to a new city is stressful enough. I handle everything from neighborhood
                tours to school research to contractor referrals so you can focus on your new
                beginning. And because Berkshire Hathaway HomeServices has agents nationwide, I can
                coordinate with your agent back home to make the transition seamless."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* Relocation Services */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Comprehensive Relocation Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Personalized neighborhood matching",
                "School district research & tours",
                "Virtual home tours before you arrive",
                "Coordination with your current agent",
                "Cost of living comparison",
                "Commute time analysis",
                "Community and lifestyle matching",
                "Moving company referrals",
                "Utility setup assistance",
                "Local service provider recommendations",
              ].map((service) => (
                <div key={service} className="flex items-center bg-white p-4 rounded-lg border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Neighborhoods */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Popular Relocation Destinations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularRelocationAreas.map((area) => (
                <div
                  key={area.name}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{area.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">Best for: {area.best}</p>
                  <p className="text-slate-600 text-sm mb-3">{area.highlights}</p>
                  <p className="text-slate-900 font-medium">Homes from {area.from}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/neighborhoods" className="text-blue-600 hover:text-blue-700 font-semibold">
                Explore All Neighborhoods →
              </Link>
            </div>
          </section>

          {/* Coming From California */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Moving from California?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3">What You'll Save</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• No state income tax (CA: up to 13.3%)</li>
                  <li>• 50%+ lower home prices vs. LA/SF</li>
                  <li>• Lower property taxes</li>
                  <li>• Affordable cost of living</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">What You'll Gain</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Larger homes for your budget</li>
                  <li>• Short commute times</li>
                  <li>• Mountain and desert recreation</li>
                  <li>• World-class entertainment</li>
                </ul>
              </div>
            </div>
            <p className="text-center mt-8 text-blue-200">
              Las Vegas is just a 4-hour drive or 1-hour flight from Southern California
            </p>
          </section>

          {/* BHHS Network */}
          <section className="mb-16 max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              The Berkshire Hathaway HomeServices Advantage
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              With 50,000+ agents in 1,500+ offices worldwide, BHHS provides seamless coordination
              for relocations. Your agent back home can connect directly with Dr. Jan to ensure a
              smooth transition—no gaps, no miscommunication.
            </p>
            <p className="text-slate-700">
              <strong>Moving from another state?</strong> Ask your current agent about the BHHS
              referral network, or contact Dr. Jan directly for a recommendation in your area.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Relocation FAQs</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can you help me find a home before I move?",
                  a: "Absolutely. Dr. Jan provides virtual tours, video walkthroughs, and detailed neighborhood analysis so you can purchase confidently before relocating. Many clients buy their Las Vegas home without visiting in person.",
                },
                {
                  q: "What are the best areas for families?",
                  a: "Summerlin, Henderson (especially Green Valley and Inspirada), and Skye Canyon consistently rank highest for families due to excellent schools, low crime, and family-friendly amenities. Dr. Jan can match you with the right area based on your priorities.",
                },
                {
                  q: "How does the cost of living compare to California?",
                  a: "Las Vegas costs about 30-40% less than LA/Orange County and 50%+ less than San Francisco. The biggest savings come from no state income tax and lower housing costs. A family earning $200K in California could save $20,000+ annually just in taxes.",
                },
                {
                  q: "Do you help with the selling side too?",
                  a: "Yes! Through the BHHS referral network, Dr. Jan can connect you with a trusted agent in your current city. This coordination ensures both transactions stay on track.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planning Your Move to Las Vegas?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let Dr. Jan Duffy and Berkshire Hathaway HomeServices make your relocation stress-free.
            </p>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-1942
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
