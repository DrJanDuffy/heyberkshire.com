import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neighborhoods | Las Vegas & Henderson Real Estate",
  description:
    "Explore neighborhoods in Las Vegas and Henderson, NV. Discover community features, schools, amenities, and available properties in each area.",
};

export default function NeighborhoodsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Explore Neighborhoods
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover the best communities in Las Vegas and Henderson
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-12 text-center">
              <p className="text-slate-600 mb-4">
                Neighborhood pages will showcase local communities
              </p>
              <p className="text-sm text-slate-500">
                This section will include neighborhood profiles, amenities, schools, and available
                properties
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
