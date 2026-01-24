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

          {/* RealScout Widget - Live MLS Listings */}
          <div className="max-w-7xl mx-auto">
            <div
              dangerouslySetInnerHTML={{
                __html: `<realscout-office-listings 
                  agent-encoded-id="QWdlbnQtMjI1MDUw" 
                  sort-order="NEWEST" 
                  listing-status="For Sale" 
                  property-types=",SFR,MF,TC" 
                  price-min="500000" 
                  price-max="800000"
                ></realscout-office-listings>`,
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
