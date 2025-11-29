import logo from "figma:asset/6d38b07fe447faa80ae1170d286b77773d2ec3dc.png";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#2A044A] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <ImageWithFallback 
              src={logo} 
              alt="SageStone Inc logo" 
              className="h-10 w-auto mb-4" 
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <h1 className="text-white mb-2">
              SageStone Inc<br />
              <span className="text-sm text-[#E4D7FF]">Accountable people. Global operations.</span>
            </h1>

            <div className="flex items-center gap-4" role="list" aria-label="Social media links">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#B14EFF] flex items-center justify-center transition-colors"
                aria-label="Follow us on LinkedIn"
                role="listitem"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#B14EFF] flex items-center justify-center transition-colors"
                aria-label="Follow us on Twitter"
                role="listitem"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#B14EFF] flex items-center justify-center transition-colors"
                aria-label="Subscribe to our YouTube channel"
                role="listitem"
              >
                <Youtube className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white mb-4" id="footer-solutions">Solutions</h5>
            <ul className="space-y-3 text-sm" aria-labelledby="footer-solutions">
              <li>
                <button 
                  onClick={() => onNavigate("services")}
                  className="text-[#E4D7FF] hover:text-white transition-colors"
                >
                  Customer Support
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("services")}
                  className="text-[#E4D7FF] hover:text-white transition-colors"
                >
                  Virtual Assistance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("services")}
                  className="text-[#E4D7FF] hover:text-white transition-colors"
                >
                  Back-Office Operations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("services")}
                  className="text-[#E4D7FF] hover:text-white transition-colors"
                >
                  CX Analytics
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white mb-4" id="footer-company">Company</h5>
            <ul className="space-y-3 text-sm" aria-labelledby="footer-company">
              <li>
                <button 
                  onClick={() => onNavigate("about")}
                  className="text-[#E4D7FF] hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("how-it-works")}
                  className="text-[#E4D7FF] hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("case-studies")}
                  className="text-[#E4D7FF] hover:text-white transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("careers")}
                  className="text-[#E4D7FF] hover:text-white transition-colors"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white mb-4" id="footer-resources">Resources</h5>
            <ul className="space-y-3 text-sm" aria-labelledby="footer-resources">
              <li>
                <button 
                  onClick={() => onNavigate("pricing")}
                  className="text-[#E4D7FF] hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("blog")}
                  className="text-[#E4D7FF] hover:text-white transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("contact")}
                  className="text-[#E4D7FF] hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("industries")}
                  className="text-[#E4D7FF] hover:text-white transition-colors"
                >
                  Industries
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#E4D7FF]">
          <p>© 2025 SageStone Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate("privacy")} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate("terms")} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
