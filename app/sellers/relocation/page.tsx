import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Plane,
  Globe,
  Clock,
  CheckCircle,
  Home as HomeIcon,
  MapPin,
  Briefcase,
  Calendar,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relocation Home Sales Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Leaving Las Vegas for a new opportunity? Dr. Jan Duffy helps relocating homeowners sell fast and coordinates with BHHS offices nationwide. Call (702) 500-1942.",
  keywords: [
    "relocation sale Las Vegas",
    "job relocation Las Vegas",
    "sell home fast Las Vegas",
    "Berkshire Hathaway relocation services",
    "corporate relocation Nevada",
  ],
};

export default function RelocationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/sellers" className="hover:text-blue-600">Sellers</Link>
              {" / "}
              <span className="text-slate-900">Relocation</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Plane className="h-4 w-4 mr-2" />
              Nationwide BHHS Network
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              New Opportunity?<br />We Handle Your Sale.
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Sell your Las Vegas home while you focus on your new chapter.
              We coordinate both ends of your move.
            </p>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Start Your Relocation → (702) 500-1942
            </a>
          </div>

          {/* Network Advantage */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 mr-3 text-blue-400" />
              <h2 className="text-3xl font-bold">Berkshire Hathaway HomeServices Network</h2>
            </div>
            <p className="text-center text-slate-300 mb-8 max-w-2xl mx-auto">
              When you work with Dr. Jan, you're not just getting a Las Vegas agent—you're
              tapping into the most trusted real estate network in America.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">50,000+</div>
                <div className="text-slate-300">Agents Nationwide</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">1,500+</div>
                <div className="text-slate-300">Offices Across US</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">#1</div>
                <div className="text-slate-300">Brand Trust Rating</div>
              </div>
            </div>
            <p className="text-center text-slate-300 mt-8">
              Moving to Dallas? Phoenix? Chicago? We connect you with top-rated BHHS agents
              in your new city at no extra cost.
            </p>
          </section>

          {/* How We Help */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              How We Handle Your Relocation Sale
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center">
                  <HomeIcon className="h-6 w-6 text-blue-600 mr-2" />
                  Selling Your Las Vegas Home
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Remote-Friendly Process</strong>
                      <p className="text-slate-600 text-sm">
                        Virtual walkthroughs, electronic signatures, and video updates so you
                        can manage your sale from anywhere.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Property Oversight</strong>
                      <p className="text-slate-600 text-sm">
                        We coordinate showings, staging, and maintenance while you're
                        focused on your new job or location.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Strategic Pricing</strong>
                      <p className="text-slate-600 text-sm">
                        If you need a fast sale, we price for speed. If you have time,
                        we maximize your return. Your timeline, your strategy.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Flexible Closings</strong>
                      <p className="text-slate-600 text-sm">
                        We negotiate closing dates that align with your start date and
                        corporate relocation requirements.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center">
                  <MapPin className="h-6 w-6 text-green-600 mr-2" />
                  Buying in Your New City
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">BHHS Agent Referrals</strong>
                      <p className="text-slate-600 text-sm">
                        We connect you with top-producing BHHS agents in your destination city—
                        professionals we trust to take care of you.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Coordinated Timing</strong>
                      <p className="text-slate-600 text-sm">
                        We communicate with your destination agent to align sale and
                        purchase timelines, minimizing gaps.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Equity Transfer Strategies</strong>
                      <p className="text-slate-600 text-sm">
                        Bridge loans, contingent offers, and lease-back arrangements—
                        we help structure deals that work for both transactions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Corporate Relo Compliance</strong>
                      <p className="text-slate-600 text-sm">
                        We work with corporate relocation companies and understand
                        BVO, appraisal, and buyout processes.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Timeline Options */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Relocation Timeline Options
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-red-600 mr-2" />
                  <h3 className="font-bold text-slate-900">Urgent (2-4 weeks)</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Job starts soon. Aggressive pricing, immediate listing, cash buyer outreach.
                </p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Pre-listing preparation</li>
                  <li>• Investor/cash buyer network</li>
                  <li>• Accelerated marketing</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="font-bold text-slate-900">Standard (30-60 days)</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Typical corporate timeline. Strategic pricing with room for negotiation.
                </p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Professional staging</li>
                  <li>• Full marketing campaign</li>
                  <li>• Maximum exposure</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="font-bold text-slate-900">Flexible (60-90 days)</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Company allows time. Price for maximum return, strategic timing.
                </p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Premium positioning</li>
                  <li>• Rent-back negotiation</li>
                  <li>• Optimal market timing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Corporate Relocation */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-bold text-xl text-slate-900">
                  Corporate Relocation Packages
                </h3>
              </div>
              <p className="text-slate-700 mb-4">
                If your employer offers relocation assistance, we're experienced with major
                relocation management companies and understand their processes:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    BVO (Buyer Value Option)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Guaranteed buyout programs
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Appraisal management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Loss-on-sale provisions
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Home finding services
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Temporary housing coordination
                  </li>
                </ul>
              </div>
              <p className="text-sm text-slate-600">
                Major corporate relo providers we work with: Cartus, SIRVA, Graebel, BGRS, and others.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-xl p-8">
              <blockquote className="text-lg italic mb-4">
                "Relocation sales are complex because you're juggling two markets, two timelines,
                and often a demanding new job. I take the Las Vegas side completely off your plate
                so you can focus on your career. And because I'm part of{" "}
                <strong>Berkshire Hathaway HomeServices</strong>, I can connect you with a trusted
                agent in your new city—someone who'll treat you like a VIP, not just a referral."
              </blockquote>
              <cite className="text-slate-300 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make Your Move?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create a relocation plan that works with your timeline.
              Dr. Jan will coordinate everything so you can focus on your new opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001942"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1942
              </a>
              <Link
                href="/home-valuation"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Get Free Home Valuation
              </Link>
            </div>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
