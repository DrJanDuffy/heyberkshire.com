import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Las Vegas Real Estate Experts",
  description:
    "Meet Dr. Jan Duffy, your trusted real estate professional in Las Vegas and Henderson. Licensed Realtor with Berkshire Hathaway HomeServices Nevada Properties.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              About Us
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your trusted real estate partner in Southern Nevada
            </p>
          </div>

          {/* Agent Profile */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Dr. Jan Duffy
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  Licensed Real Estate Agent | License S.0197614.LLC
                </p>
                <p className="text-slate-700 mb-4">
                  With over 15 years of experience in the Las Vegas and Henderson real estate
                  markets, Dr. Jan Duffy brings expertise, integrity, and personalized service to
                  every transaction.
                </p>
                <p className="text-slate-700 mb-4">
                  As a trusted member of Berkshire Hathaway HomeServices Nevada Properties, Dr.
                  Duffy specializes in residential sales, luxury properties, investment real estate,
                  and relocation services throughout Southern Nevada.
                </p>
                <div className="mt-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Specializations:</h3>
                  <ul className="list-disc list-inside text-slate-700 space-y-1">
                    <li>Residential Home Sales & Purchases</li>
                    <li>Luxury Properties</li>
                    <li>Investment Real Estate</li>
                    <li>Relocation Services</li>
                    <li>Property Valuation</li>
                    <li>Neighborhood Expertise</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg p-8">
                <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
                  <span className="text-slate-400">Agent Photo</span>
                </div>
              </div>
            </div>
          </section>

          {/* Company Info */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Berkshire Hathaway HomeServices
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-700 mb-4">
                Berkshire Hathaway HomeServices Nevada Properties is one of the region's most
                respected real estate brokerages, known for exceptional service, market expertise,
                and innovative technology.
              </p>
              <p className="text-lg text-slate-700 mb-4">
                Our commitment to excellence, combined with deep local knowledge, ensures that
                every client receives personalized attention and achieves their real estate goals.
              </p>
            </div>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-700">Properties Sold</div>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-slate-700">Years Experience</div>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9★</div>
              <div className="text-slate-700">Average Rating</div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
