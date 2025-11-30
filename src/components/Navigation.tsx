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
    <nav 
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-[#E7E2EE] shadow-sm transition-all duration-300" 
      aria-label="Main navigation"
      style={{ boxShadow: '0 2px 20px rgba(142, 58, 255, 0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 hover:opacity-90 transition-all duration-200 group"
            aria-label="SageStone Inc - Go to homepage"
          >
            <div className="relative">
              <img 
                src={image_6d38b07fe447faa80ae1170d286b77773d2ec3dc} 
                alt="SageStone Inc logo" 
                className="h-10 w-auto transition-transform duration-200 group-hover:scale-105" 
              />
            </div>
            <span className="text-xl font-bold text-[#1C1B20] tracking-tight">SageStone</span>
          </button>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-1" role="menubar">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 min-w-[44px] min-h-[44px] ${
                  currentPage === item.page
                    ? "text-[#8E3AFF] bg-[#F3E8FF]"
                    : "text-[#6D6A73] hover:text-[#8E3AFF] hover:bg-[#F9F8FB]"
                }`}
                aria-label={`Navigate to ${item.label}`}
                aria-current={currentPage === item.page ? "page" : undefined}
                role="menuitem"
              >
                {item.label}
                {currentPage === item.page && (
                  <span 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-[#B14EFF] to-[#8E3AFF] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => onNavigate("contact")}
            className="gradient-bg text-white glow-button transition-all duration-200 hover:scale-105 min-w-[44px] min-h-[44px] font-semibold"
            aria-label="Contact us - Let's talk about your project"
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </nav>
  );
}
