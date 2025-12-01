import logo from "figma:asset/6d38b07fe447faa80ae1170d286b77773d2ec3dc.png";
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0A0118] text-white border-t border-[#2A1B3D]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <ImageWithFallback 
              src={logo} 
              alt="SageStone Inc logo" 
              className="h-10 w-auto mb-4" 
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <h2 className="text-white text-lg mb-2">
              SageStone Inc
            </h2>
            <p className="text-sm text-[#C4B8D4] mb-6 max-w-xs">
              Accountable people. Global operations. We help businesses scale smarter with tailored virtual support and automation.
            </p>

            <div className="flex items-center gap-4 mb-6" role="list" aria-label="Social media links">
              <a 
                href="https://www.linkedin.com/company/sagestonelab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#2A1B3D] hover:bg-[#B14EFF] flex items-center justify-center transition-colors"
                aria-label="Follow us on LinkedIn"
                role="listitem"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="https://twitter.com/sagestonelab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#2A1B3D] hover:bg-[#B14EFF] flex items-center justify-center transition-colors"
                aria-label="Follow us on Twitter"
                role="listitem"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="https://www.youtube.com/@sagestonelab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#2A1B3D] hover:bg-[#B14EFF] flex items-center justify-center transition-colors"
                aria-label="Subscribe to our YouTube channel"
                role="listitem"
              >
                <Youtube className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-[#C4B8D4]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B14EFF]" aria-hidden="true" />
                <span>hello@sagestoneinc.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B14EFF]" aria-hidden="true" />
                <span>USA & Philippines</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-white font-semibold mb-4" id="footer-solutions">Solutions</h3>
            <ul className="space-y-3 text-sm" aria-labelledby="footer-solutions">
              <li>
                <button 
                  onClick={() => onNavigate("services")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  Customer Support
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("services")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  Virtual Assistance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("services")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  Shopify / E-commerce
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("services")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  Back-Office Operations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("services")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  Property Management
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("services")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  Automation & AI
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4" id="footer-company">Company</h3>
            <ul className="space-y-3 text-sm" aria-labelledby="footer-company">
              <li>
                <button 
                  onClick={() => onNavigate("about")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("how-it-works")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("case-studies")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("careers")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("contact")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4" id="footer-resources">Resources</h3>
            <ul className="space-y-3 text-sm" aria-labelledby="footer-resources">
              <li>
                <button 
                  onClick={() => onNavigate("pricing")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("blog")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("industries")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  Industries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("services")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  All Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("contact")}
                  className="text-[#C4B8D4] hover:text-[#B14EFF] transition-colors"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2A1B3D] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#C4B8D4]">
          <p>© 2025 SageStone Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate("privacy")} className="hover:text-[#B14EFF] transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate("terms")} className="hover:text-[#B14EFF] transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
