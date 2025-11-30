import image_6d38b07fe447faa80ae1170d286b77773d2ec3dc from 'figma:asset/6d38b07fe447faa80ae1170d286b77773d2ec3dc.png';
import { Button } from "./ui/button";
import logo from "figma:asset/1fa2c487b0dad34a92a63b9efa064728a81b6ae1.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { label: "Services", page: "services" },
    { label: "Industries", page: "industries" },
    { label: "How It Works", page: "how-it-works" },
    { label: "Pricing", page: "pricing" },
    { label: "Blog", page: "blog" },
    { label: "About Us", page: "about" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[#E7E2EE]" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="SageStone Inc - Go to homepage"
          >
            <img src={image_6d38b07fe447faa80ae1170d286b77773d2ec3dc} alt="SageStone Inc logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-[#1C1B20]">SageStone</span>
          </button>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8" role="menubar">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`transition-colors min-w-[44px] min-h-[44px] ${
                  currentPage === item.page
                    ? "text-[#8E3AFF]"
                    : "text-[#6D6A73] hover:text-[#8E3AFF]"
                }`}
                aria-label={`Navigate to ${item.label}`}
                aria-current={currentPage === item.page ? "page" : undefined}
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => onNavigate("contact")}
            className="gradient-bg text-white glow-button transition-lift hover-lift min-w-[44px] min-h-[44px]"
            aria-label="Contact us - Let's talk about your project"
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </nav>
  );
}
