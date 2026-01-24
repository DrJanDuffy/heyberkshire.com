import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties for Sale | Las Vegas & Henderson Real Estate",
  description:
    "Browse all available properties for sale in Las Vegas and Henderson, NV. Find your dream home with our comprehensive property listings.",
};

export default function ListingsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              All Properties
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover your perfect home in Las Vegas and Henderson
            </p>
          </div>

          {/* RealScout Widget Integration Point */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-12 text-center">
              <p className="text-slate-600 mb-4">
                Property listings will be integrated with RealScout MLS
              </p>
              <p className="text-sm text-slate-500">
                This section will display live property data from RealScout
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
