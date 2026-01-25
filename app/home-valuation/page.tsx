"use client";

import { useState } from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Home, TrendingUp, CheckCircle, BarChart, DollarSign } from "lucide-react";

export default function HomeValuationPage() {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    zip: "",
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    name: "",
    email: "",
    phone: "",
    timeline: "just-curious",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Valuation request:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              What's Your Home Worth?
            </h1>
            <p className="text-xl text-slate-600">
              Get a free, no-obligation home valuation from Dr. Jan Duffy at{" "}
              <strong>Berkshire Hathaway HomeServices</strong>. Accurate pricing backed by expertise
              serving Las Vegas since 2008.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-white border border-slate-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Request Your Free Valuation</h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-600 mb-4">
                    Dr. Jan Duffy will analyze your property and provide a detailed valuation within
                    24 hours.
                  </p>
                  <p className="text-sm text-slate-500">
                    Berkshire Hathaway HomeServices Nevada Properties
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Property Address *
                    </label>
                    <Input
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">City *</label>
                      <Input
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Las Vegas"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">ZIP *</label>
                      <Input
                        name="zip"
                        required
                        value={formData.zip}
                        onChange={handleChange}
                        placeholder="89134"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Beds</label>
                      <Input
                        name="bedrooms"
                        type="number"
                        value={formData.bedrooms}
                        onChange={handleChange}
                        placeholder="3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Baths</label>
                      <Input
                        name="bathrooms"
                        type="number"
                        value={formData.bathrooms}
                        onChange={handleChange}
                        placeholder="2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Sq Ft</label>
                      <Input
                        name="sqft"
                        type="number"
                        value={formData.sqft}
                        onChange={handleChange}
                        placeholder="1800"
                      />
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4 mt-4">
                    <h3 className="font-semibold text-slate-900 mb-4">Your Contact Information</h3>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                    <Input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
                      <Input
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(702) 500-1942"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Are you thinking of selling?
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md"
                    >
                      <option value="just-curious">Just curious about my home's value</option>
                      <option value="6-12-months">Maybe in 6-12 months</option>
                      <option value="3-6-months">Thinking about 3-6 months</option>
                      <option value="asap">Ready to sell now</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                    Get My Free Valuation
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    No obligation. No pressure. Just accurate information from Berkshire Hathaway
                    HomeServices.
                  </p>
                </form>
              )}
            </div>

            {/* Value Prop */}
            <div className="space-y-8">
              <div className="bg-slate-900 text-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Why Request a BHHS Valuation?</h2>
                <p className="text-slate-300 mb-6">
                  Online estimators like Zillow's "Zestimate" can be off by 10% or more. Dr. Jan
                  Duffy provides a comprehensive market analysis using current MLS data, recent
                  comparable sales, and her expertise serving Las Vegas since 2008.
                </p>
                <div className="space-y-3">
                  {[
                    "Accurate pricing based on actual market data",
                    "Consideration of your home's unique features",
                    "Current buyer demand analysis",
                    "No obligation or pressure to sell",
                  ].map((item) => (
                    <div key={item} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Stats */}
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="font-bold text-slate-900 mb-4">Las Vegas Market | January 2026</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$450K</div>
                    <div className="text-sm text-slate-600">Median Home Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+4.2%</div>
                    <div className="text-sm text-slate-600">YoY Appreciation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">28 Days</div>
                    <div className="text-sm text-slate-600">Avg. Days on Market</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2.1 Mo</div>
                    <div className="text-sm text-slate-600">Inventory</div>
                  </div>
                </div>
              </div>

              {/* Expert Quote */}
              <div className="bg-slate-50 rounded-lg p-6">
                <blockquote className="text-slate-700 italic mb-3">
                  "Pricing your home correctly from day one is the single most important factor in
                  getting top dollar. That's why I use comprehensive market analysis—not just
                  algorithms—to determine your home's true value."
                </blockquote>
                <cite className="text-slate-900 font-semibold text-sm">
                  — Dr. Jan Duffy, BHHS Nevada Properties
                </cite>
              </div>

              {/* Call Option */}
              <div className="text-center">
                <p className="text-slate-600 mb-4">Prefer to talk? Call Dr. Jan directly:</p>
                <a
                  href="tel:+17025001942"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  (702) 500-1942
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
