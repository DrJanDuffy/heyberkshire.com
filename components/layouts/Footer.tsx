import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">Berkshire Hathaway HomeServices</h3>
            <p className="text-slate-300 mb-4 text-sm">
              Nevada Properties - Your trusted real estate partner in Las Vegas and Henderson.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/listings" className="text-slate-300 hover:text-white transition-colors text-sm">
                  All Properties
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Neighborhoods
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-slate-300 text-sm">Home Buying</li>
              <li className="text-slate-300 text-sm">Home Selling</li>
              <li className="text-slate-300 text-sm">Property Valuation</li>
              <li className="text-slate-300 text-sm">Investment Properties</li>
              <li className="text-slate-300 text-sm">Relocation Services</li>
            </ul>
          </div>

          {/* Contact Info - NAP (Name, Address, Phone) */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  123 Main Street<br />
                  Las Vegas, NV 89101
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href="tel:+17025551234"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  (702) 555-1234
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href="mailto:info@heyberkshire.com"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  info@heyberkshire.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Berkshire Hathaway HomeServices Nevada Properties. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            License S.0197614.LLC | Dr. Jan Duffy, Realtor
          </p>
        </div>
      </div>
    </footer>
  );
}
