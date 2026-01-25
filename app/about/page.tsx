import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Mail, Award, Users, Home, TrendingUp, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Jan Duffy | Berkshire Hathaway HomeServices Las Vegas",
  description:
    "Meet Dr. Jan Duffy, your trusted Berkshire Hathaway HomeServices Nevada Properties agent. 15+ years experience, $127M+ in transactions, serving Las Vegas, Henderson & Summerlin.",
  keywords: [
    "Dr. Jan Duffy",
    "Berkshire Hathaway HomeServices agent",
    "Las Vegas realtor",
    "BHHS Nevada Properties",
  ],
};

// Person Schema for Dr. Jan Duffy
const personSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy",
  jobTitle: "REALTOR®",
  description:
    "Licensed real estate agent with Berkshire Hathaway HomeServices Nevada Properties, serving Las Vegas, Henderson, and Summerlin with 15+ years of experience.",
  telephone: "+17022221964",
  email: "jan@heyberkshire.com",
  url: "https://heyberkshire.com/about",
  worksFor: {
    "@type": "RealEstateAgent",
    name: "Berkshire Hathaway HomeServices Nevada Properties",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Real Estate License",
    credentialNumber: "S.0197614.LLC",
  },
  knowsAbout: [
    "Las Vegas real estate",
    "Henderson properties",
    "Summerlin homes",
    "Luxury real estate",
    "Investment properties",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Meet Your Berkshire Hathaway HomeServices Agent
            </h1>
            <p className="text-xl text-slate-600">
              Dr. Jan Duffy brings 15+ years of Las Vegas real estate expertise—backed by the most
              trusted name in the business
            </p>
          </div>

          {/* Agent Profile */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <div>
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Berkshire Hathaway HomeServices Nevada Properties
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dr. Jan Duffy</h2>
                <p className="text-lg text-blue-600 mb-6">
                  REALTOR® | License S.0197614.LLC
                </p>

                <div className="prose prose-lg text-slate-700 mb-8">
                  <p>
                    When you choose to work with <strong>Berkshire Hathaway HomeServices</strong>,
                    you're choosing a legacy of trust, integrity, and excellence. I'm proud to
                    represent this iconic brand in the Las Vegas real estate market.
                  </p>
                  <p>
                    With over 15 years of experience and $127 million in closed transactions, I've
                    helped hundreds of families find their perfect home in Las Vegas, Henderson,
                    Summerlin, and throughout Southern Nevada. My expertise spans luxury properties,
                    new construction, investment real estate, and relocations.
                  </p>
                  <p>
                    What sets <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>{" "}
                    apart? We're backed by Warren Buffett's Berkshire Hathaway Inc.—a name synonymous
                    with financial strength and ethical standards. When you're making the biggest
                    financial decision of your life, that trust matters.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="bg-slate-50 rounded-lg p-6 mb-8">
                  <h3 className="font-bold text-slate-900 mb-4">Contact Dr. Jan Duffy</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+17022221964"
                      className="flex items-center text-slate-700 hover:text-blue-600"
                    >
                      <Phone className="h-5 w-5 mr-3 text-blue-600" />
                      (702) 222-1964
                    </a>
                    <a
                      href="mailto:jan@heyberkshire.com"
                      className="flex items-center text-slate-700 hover:text-blue-600"
                    >
                      <Mail className="h-5 w-5 mr-3 text-blue-600" />
                      jan@heyberkshire.com
                    </a>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-blue-600 pl-6 italic text-slate-700">
                  "My job isn't just to show you houses—it's to make sure you don't overpay, that
                  you understand what you're buying, and that you're protected through every step of
                  the transaction."
                  <cite className="block mt-2 text-slate-900 font-semibold not-italic">
                    — Dr. Jan Duffy
                  </cite>
                </blockquote>
              </div>

              {/* Stats & Credentials */}
              <div className="space-y-6">
                {/* Agent Photo Placeholder */}
                <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👩‍💼</div>
                    <p className="text-slate-500">Dr. Jan Duffy</p>
                    <p className="text-sm text-slate-400">BHHS Nevada Properties</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">$127M+</div>
                    <div className="text-sm text-slate-600">Volume Closed</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                    <div className="text-sm text-slate-600">Transactions</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">4.9★</div>
                    <div className="text-sm text-slate-600">Client Rating</div>
                  </div>
                </div>

                {/* Specializations */}
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Specializations</h3>
                  <ul className="space-y-2">
                    {[
                      "Residential Home Sales",
                      "Luxury Properties ($1M+)",
                      "New Construction",
                      "Investment Properties",
                      "Relocation Services",
                      "First-Time Buyers",
                    ].map((item) => (
                      <li key={item} className="flex items-center text-slate-700">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why BHHS Section */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Berkshire Hathaway HomeServices?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Trusted Brand</h3>
                <p className="text-slate-300">
                  The only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Global Network</h3>
                <p className="text-slate-300">
                  50,000+ agents worldwide for seamless referrals and relocations
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Local Expertise</h3>
                <p className="text-slate-300">
                  Deep knowledge of every Las Vegas and Henderson neighborhood
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/why-berkshire-hathaway"
                className="inline-block bg-white text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-slate-100 transition-colors"
              >
                Learn More About BHHS
              </Link>
            </div>
          </section>

          {/* Areas Served */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Areas Served by BHHS Nevada Properties
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Las Vegas",
                "Henderson",
                "Summerlin",
                "Green Valley",
                "North Las Vegas",
                "Southern Highlands",
                "Skye Canyon",
                "Centennial Hills",
                "The Ridges",
                "Inspirada",
                "Mountains Edge",
                "Spring Valley",
              ].map((area) => (
                <div key={area} className="bg-slate-50 rounded-lg p-4 text-center">
                  <Home className="h-5 w-5 mx-auto mb-2 text-blue-600" />
                  <span className="text-slate-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Questions about buying or selling in Las Vegas? Call or text Dr. Jan Duffy today.
            </p>
            <a
              href="tel:+17022221964"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 222-1964
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">
          Last Updated: January 2026
        </div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
