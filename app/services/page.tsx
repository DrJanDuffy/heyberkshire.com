import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Home, TrendingUp, DollarSign, MapPin, FileText, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Services | Las Vegas & Henderson",
  description:
    "Comprehensive real estate services including home buying, selling, property valuation, investment consulting, and relocation services in Las Vegas and Henderson, NV.",
};

const services = [
  {
    icon: Home,
    title: "Home Buying",
    description:
      "Expert guidance through every step of the home buying process. From search to closing, we make it seamless.",
  },
  {
    icon: TrendingUp,
    title: "Home Selling",
    description:
      "Maximize your home's value with professional staging, marketing, and negotiation expertise.",
  },
  {
    icon: DollarSign,
    title: "Property Valuation",
    description:
      "Accurate market analysis and property valuations to help you make informed decisions.",
  },
  {
    icon: MapPin,
    title: "Investment Properties",
    description:
      "Strategic investment consulting for rental properties, fix-and-flip opportunities, and commercial real estate.",
  },
  {
    icon: Users,
    title: "Relocation Services",
    description:
      "Comprehensive relocation assistance for individuals and families moving to Southern Nevada.",
  },
  {
    icon: FileText,
    title: "Market Analysis",
    description:
      "In-depth market reports and neighborhood insights to guide your real estate decisions.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="bg-blue-100 rounded-lg p-4 w-fit mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-700">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-blue-600 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Contact us today for a free consultation and discover how we can help you achieve your
              real estate goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
