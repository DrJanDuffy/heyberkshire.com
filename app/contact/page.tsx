"use client";

import { useState } from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "buying",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Contact Dr. Jan Duffy
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Questions about Las Vegas real estate? Your{" "}
              <strong>Berkshire Hathaway HomeServices</strong> expert is here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-slate-700 mb-8">
                Whether you're buying your first home, selling a luxury property, or exploring
                investment opportunities, I'm here to provide expert guidance backed by the trusted{" "}
                <strong>Berkshire Hathaway HomeServices</strong> brand.
              </p>

              {/* NAP Information */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone (Call or Text)</h3>
                    <a
                      href="tel:+17022221964"
                      className="text-2xl font-bold text-blue-600 hover:text-blue-700"
                    >
                      (702) 222-1964
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Available 7 days a week, 9am-6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:jan@heyberkshire.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      jan@heyberkshire.com
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Typically respond within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Address</h3>
                    <address className="not-italic text-slate-700">
                      Berkshire Hathaway HomeServices
                      <br />
                      Nevada Properties
                      <br />
                      9406 W Lake Mead Blvd, Suite 100
                      <br />
                      Las Vegas, NV 89134
                    </address>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Hours</h3>
                    <p className="text-slate-700">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday - Sunday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Available by appointment outside these hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-500">Google Map</p>
                  <p className="text-xs text-slate-400">9406 W Lake Mead Blvd, Las Vegas</p>
                </div>
              </div>

              {/* Credentials */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>Dr. Jan Duffy, REALTOR®</strong>
                  <br />
                  License S.0197614.LLC
                  <br />
                  Berkshire Hathaway HomeServices Nevada Properties
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white border border-slate-200 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">
                      Thank you for contacting Berkshire Hathaway HomeServices. Dr. Jan Duffy will
                      respond within 2 hours during business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Phone *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(702) 555-1234"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        I'm interested in...
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="buying">Buying a Home</option>
                        <option value="selling">Selling My Home</option>
                        <option value="both">Buying & Selling</option>
                        <option value="investing">Investment Properties</option>
                        <option value="relocation">Relocating to Las Vegas</option>
                        <option value="valuation">Home Valuation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell me about your real estate goals..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      By submitting, you agree to be contacted by Berkshire Hathaway HomeServices
                      Nevada Properties regarding your real estate inquiry.
                    </p>
                  </form>
                )}
              </div>

              {/* Value Proposition */}
              <div className="mt-8 bg-slate-900 text-white rounded-lg p-6">
                <h3 className="font-bold mb-3">Why Contact Berkshire Hathaway HomeServices?</h3>
                <p className="text-slate-300 text-sm">
                  When you work with a Berkshire Hathaway HomeServices agent, you're backed by a
                  name synonymous with trust, ethical standards, and financial strength—the same
                  principles that built Warren Buffett's empire.
                </p>
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
