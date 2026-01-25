import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Users,
  Home as HomeIcon,
  Dumbbell,
  Calendar,
  Shield,
  DollarSign,
  MapPin,
  Heart,
  HelpCircle,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berkshire Hathaway HomeServices 55+ Communities Las Vegas | Active Adult Living",
  description:
    "Find 55+ communities in Las Vegas with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy specializes in Sun City, Del Webb, and active adult communities. Call (702) 500-1942.",
  keywords: [
    "Berkshire Hathaway HomeServices 55+ communities Las Vegas",
    "55 plus communities Las Vegas",
    "active adult communities Las Vegas",
    "Sun City Summerlin",
    "Del Webb Las Vegas",
    "retirement communities Nevada",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the age requirements for 55+ communities in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per the Housing for Older Persons Act (HOPA), at least 80% of occupied units must have one resident 55 or older. The remaining 20% can be younger, but some communities require all residents to be 55+. Spouses can be younger in most communities.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy in a 55+ community if I'm under 55?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally no, but there are exceptions. You may purchase if you'll be 55 by close of escrow, or as an investor who will rent to 55+ tenants. Some communities allow residents 45-54 in limited circumstances. A BHHS agent can explain each community's specific rules.",
      },
    },
    {
      "@type": "Question",
      name: "What do HOA fees cover in 55+ communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HOA fees in Las Vegas 55+ communities typically cover access to clubhouses, pools, fitness centers, golf courses, organized activities, landscaping, and exterior maintenance. Fees range from $150-$500/month depending on amenities. Some communities have separate golf memberships.",
      },
    },
    {
      "@type": "Question",
      name: "Are 55+ communities a good investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Las Vegas 55+ communities have shown strong appreciation due to limited supply and growing demand from retiring Baby Boomers. Sun City Summerlin homes have appreciated 40%+ over 5 years. The lifestyle amenities also make properties easier to sell.",
      },
    },
    {
      "@type": "Question",
      name: "Can grandchildren visit or stay in 55+ communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most communities allow guests of any age to visit and stay temporarily (typically 30-90 days per year). However, children cannot be permanent residents. Each community has specific guest policies that Dr. Jan Duffy can explain.",
      },
    },
    {
      "@type": "Question",
      name: "What financing options are available for 55+ homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All standard financing options apply—conventional, FHA, VA, and cash purchases. Some buyers use reverse mortgages (HECM) if 62+. Lenders may review HOA financial health for condos. BHHS can connect you with lenders experienced in 55+ community purchases.",
      },
    },
  ],
};

const communities = [
  {
    name: "Sun City Summerlin",
    location: "Summerlin, Las Vegas",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$155-$195/month",
    priceRange: "$320,000 - $850,000",
    homes: "7,700+ homes",
    highlights: [
      "3 golf courses (Highland Falls, Palm Valley, Eagle Crest)",
      "4 recreation centers with pools",
      "100+ clubs and activities",
      "Mountain View Hospital nearby",
    ],
    description:
      "Nevada's largest 55+ community, Sun City Summerlin offers unparalleled amenities and an active lifestyle against the backdrop of the Spring Mountains.",
  },
  {
    name: "Sun City Anthem",
    location: "Henderson",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$180-$230/month",
    priceRange: "$350,000 - $1,200,000",
    homes: "7,100+ homes",
    highlights: [
      "2 championship golf courses",
      "Anthem Center with indoor/outdoor pools",
      "Revere Golf Club adjacent",
      "Henderson's top-rated community",
    ],
    description:
      "Henderson's premier 55+ community offers stunning mountain views, exceptional golf, and the safety Henderson is known for.",
  },
  {
    name: "Del Webb at Lake Las Vegas",
    location: "Henderson (Lake Las Vegas)",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$200-$280/month",
    priceRange: "$400,000 - $900,000",
    homes: "1,800+ homes",
    highlights: [
      "Lakefront and mountain views",
      "Resort-style amenities",
      "Del Webb lifestyle programming",
      "Newer construction (2016+)",
    ],
    description:
      "The newest Del Webb community in Las Vegas combines modern construction with the stunning Lake Las Vegas setting.",
  },
  {
    name: "Solera at Anthem",
    location: "Henderson",
    ageRequirement: "55+ (all residents)",
    hoaFees: "$170-$210/month",
    priceRange: "$380,000 - $650,000",
    homes: "1,200+ homes",
    highlights: [
      "Guard-gated security",
      "Clubhouse with fitness center",
      "Smaller, more intimate community",
      "Lower HOA than larger communities",
    ],
    description:
      "A more intimate alternative to larger 55+ communities, Solera offers guard-gated security and a close-knit atmosphere.",
  },
  {
    name: "Trilogy at Summerlin",
    location: "Summerlin",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$250-$350/month",
    priceRange: "$500,000 - $1,100,000",
    homes: "800+ homes",
    highlights: [
      "Luxury resort-style living",
      "Farm-to-table restaurant on-site",
      "Spa and wellness center",
      "Newer construction with modern designs",
    ],
    description:
      "Trilogy brings luxury resort-style living to the 55+ market with upscale amenities and contemporary home designs.",
  },
  {
    name: "Siena",
    location: "Summerlin",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$140-$180/month",
    priceRange: "$280,000 - $550,000",
    homes: "2,300+ homes",
    highlights: [
      "Most affordable Summerlin 55+ option",
      "18-hole golf course",
      "Established community (1990s)",
      "Strong sense of community",
    ],
    description:
      "Siena offers the Summerlin lifestyle at more accessible price points, perfect for budget-conscious active adults.",
  },
];

export default function FiftyFiveCommunitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/services" className="hover:text-blue-600">Services</Link>
              {" / "}
              <span className="text-slate-900">55+ Communities</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Berkshire Hathaway HomeServices 55+ Communities Las Vegas
            </h1>
            <p className="text-xl text-slate-600">
              Your complete guide to active adult living in Las Vegas. Find the perfect 55+
              community with Dr. Jan Duffy and{" "}
              <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>.
            </p>
          </div>

          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Las Vegas 55+ Market Overview | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">25,000+</div>
                <div className="text-slate-300 text-sm">55+ Homes in Las Vegas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">$280K-$1.2M</div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">$140-$350</div>
                <div className="text-slate-300 text-sm">Monthly HOA Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+5.8%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Las Vegas Is America's Top Destination for Active Adult Living
              </h2>
              <p>
                Las Vegas has become the nation's premier destination for 55+ buyers, and for good
                reason. With 300+ days of sunshine, no state income tax, world-class healthcare, and
                amenity-rich communities, Southern Nevada offers active adults an unmatched
                lifestyle. <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has
                helped hundreds of active adults find their perfect community in Las Vegas.
              </p>
              <p>
                Whether you're seeking an active golf lifestyle at Sun City Summerlin, waterfront
                living at Del Webb Lake Las Vegas, or luxury resort amenities at Trilogy, Las Vegas
                55+ communities offer options for every lifestyle and budget. Dr. Jan Duffy
                specializes in helping buyers navigate the unique considerations of 55+ purchases—from
                understanding age requirements to evaluating HOA financial health.
              </p>
            </div>
          </section>

          {/* Age Requirements Section */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <div className="flex items-start">
                <Users className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Understanding 55+ Age Requirements
                  </h3>
                  <div className="text-slate-700 space-y-3">
                    <p>
                      <strong>Federal HOPA Guidelines:</strong> At least 80% of occupied units must
                      have one resident 55 or older. The remaining 20% can include younger residents,
                      though individual communities may be more restrictive.
                    </p>
                    <p>
                      <strong>Spouse/Partner Rules:</strong> Most communities allow a spouse or
                      partner under 55 to reside with a qualifying resident. Minimum ages for
                      non-qualifying residents vary (often 40-45 minimum).
                    </p>
                    <p>
                      <strong>Inheritance/Death:</strong> If the qualifying resident passes away, the
                      surviving spouse can typically remain regardless of age. Adult children who
                      inherit may face restrictions on residency.
                    </p>
                    <p className="text-blue-800 font-medium">
                      Each community has specific rules. Dr. Jan Duffy provides detailed guidance on
                      requirements for any community you're considering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Communities Grid */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Top 55+ Communities in Las Vegas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {communities.map((community) => {
                const slugMap: Record<string, string> = {
                  "Sun City Summerlin": "sun-city-summerlin",
                  "Sun City Anthem": "sun-city-anthem",
                  "Del Webb at Lake Las Vegas": "del-webb-lake-las-vegas",
                };
                const slug = slugMap[community.name];
                
                return (
                  <div
                    key={community.name}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-slate-900 text-white p-6">
                      <h3 className="text-xl font-bold mb-1">{community.name}</h3>
                      <div className="flex items-center text-slate-300 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {community.location}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 mb-4">{community.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                            Price Range
                          </div>
                          <div className="font-bold text-slate-900">{community.priceRange}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                            HOA Fees
                          </div>
                          <div className="font-bold text-slate-900">{community.hoaFees}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                            Age Requirement
                          </div>
                          <div className="font-bold text-slate-900">{community.ageRequirement}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                            Community Size
                          </div>
                          <div className="font-bold text-slate-900">{community.homes}</div>
                        </div>
                      </div>

                      <div className="border-t border-slate-100 pt-4">
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-2">
                          Highlights
                        </div>
                        <ul className="space-y-1">
                          {community.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start text-sm text-slate-600">
                              <span className="text-green-500 mr-2">✓</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {slug && (
                        <Link
                          href={`/55-plus-communities/${slug}`}
                          className="block mt-4 text-center bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                        >
                          View {community.name} Details →
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Amenities Overview */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              What 55+ Community Amenities Include
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Dumbbell className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Fitness & Recreation</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• State-of-the-art fitness centers</li>
                  <li>• Indoor & outdoor pools</li>
                  <li>• Tennis & pickleball courts</li>
                  <li>• Golf courses (many communities)</li>
                  <li>• Walking/biking trails</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Social & Activities</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 100+ clubs in larger communities</li>
                  <li>• Organized travel groups</li>
                  <li>• Classes (art, dance, computers)</li>
                  <li>• Card rooms & game nights</li>
                  <li>• Community events & parties</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Convenience & Security</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Guard-gated entries (many)</li>
                  <li>• Exterior maintenance included</li>
                  <li>• On-site restaurants (select)</li>
                  <li>• Healthcare facilities nearby</li>
                  <li>• Concierge services (luxury)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Buying in a 55+ community involves considerations beyond a typical purchase. You need
                to understand HOA rules, age verification processes, and how the community fits your
                lifestyle. As a <strong>Berkshire Hathaway HomeServices</strong> agent specializing
                in active adult communities, I guide clients through every step—from touring
                amenities to reviewing HOA documents. Many clients are relocating from out of state,
                and they rely on my local knowledge to make confident decisions."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              55+ Community Buying FAQs
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  What are the age requirements for 55+ communities in Las Vegas?
                </h3>
                <p className="text-slate-600">
                  Per the Housing for Older Persons Act (HOPA), at least 80% of occupied units must
                  have one resident 55 or older. The remaining 20% can be younger, but some
                  communities require all residents to be 55+. Spouses can be younger in most
                  communities.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Can I buy in a 55+ community if I'm under 55?
                </h3>
                <p className="text-slate-600">
                  Generally no, but there are exceptions. You may purchase if you'll be 55 by close
                  of escrow, or as an investor who will rent to 55+ tenants. Some communities allow
                  residents 45-54 in limited circumstances. A BHHS agent can explain each community's
                  specific rules.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  What do HOA fees cover in 55+ communities?
                </h3>
                <p className="text-slate-600">
                  HOA fees in Las Vegas 55+ communities typically cover access to clubhouses, pools,
                  fitness centers, golf courses, organized activities, landscaping, and exterior
                  maintenance. Fees range from $150-$500/month depending on amenities. Some
                  communities have separate golf memberships.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Are 55+ communities a good investment?
                </h3>
                <p className="text-slate-600">
                  Yes, Las Vegas 55+ communities have shown strong appreciation due to limited supply
                  and growing demand from retiring Baby Boomers. Sun City Summerlin homes have
                  appreciated 40%+ over 5 years. The lifestyle amenities also make properties easier
                  to sell.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Can grandchildren visit or stay in 55+ communities?
                </h3>
                <p className="text-slate-600">
                  Yes, most communities allow guests of any age to visit and stay temporarily
                  (typically 30-90 days per year). However, children cannot be permanent residents.
                  Each community has specific guest policies that Dr. Jan Duffy can explain.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  What financing options are available for 55+ homes?
                </h3>
                <p className="text-slate-600">
                  All standard financing options apply—conventional, FHA, VA, and cash purchases.
                  Some buyers use reverse mortgages (HECM) if 62+. Lenders may review HOA financial
                  health for condos. BHHS can connect you with lenders experienced in 55+ community
                  purchases.
                </p>
              </div>
            </div>
          </section>

          {/* Why BHHS */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Why Choose Berkshire Hathaway HomeServices for 55+ Communities?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Heart className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Specialized Expertise</h3>
                  <p className="text-slate-600 text-sm">
                    Dr. Jan Duffy understands the unique needs of 55+ buyers—from age verification
                    processes to evaluating HOA reserves and understanding community rules.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Relocation Support</h3>
                  <p className="text-slate-600 text-sm">
                    Many 55+ buyers relocate from out of state. Our national BHHS network provides
                    referrals, and Dr. Jan offers virtual tours and detailed community information.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Trusted Brand</h3>
                  <p className="text-slate-600 text-sm">
                    The Berkshire Hathaway name represents trust and integrity—values that matter
                    when making one of life's biggest decisions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">No-Pressure Approach</h3>
                  <p className="text-slate-600 text-sm">
                    We understand 55+ buyers often take time to decide. Dr. Jan provides information
                    and guidance without pressure, letting you move at your own pace.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Perfect 55+ Community
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to explore active adult living in Las Vegas? Contact Dr. Jan Duffy for a free
              consultation and personalized community recommendations.
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
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Request Information
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
