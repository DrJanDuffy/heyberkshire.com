import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
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

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Neighborhood Cards */}
            {[
              { name: "Summerlin", description: "Master-planned community with parks, trails, and top schools" },
              { name: "Henderson", description: "Family-friendly city with excellent amenities" },
              { name: "Green Valley", description: "Established community with mature landscaping" },
              { name: "Las Vegas Strip Area", description: "Urban living near world-class entertainment" },
              { name: "North Las Vegas", description: "Affordable homes with growing communities" },
              { name: "Southern Highlands", description: "Luxury homes with golf course views" },
            ].map((neighborhood) => (
              <div key={neighborhood.name} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{neighborhood.name}</h3>
                <p className="text-slate-600">{neighborhood.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
