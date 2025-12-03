import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { PricingPage } from "./pages/PricingPage";
import { ContactPage } from "./pages/ContactPage";
import { BlogPage } from "./pages/BlogPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";
import { AboutPage } from "./pages/AboutPage";
import { CareersPage } from "./pages/CareersPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page: string) => {
    const pathMap: Record<string, string> = {
      "home": "/",
      "services": "/services",
      "industries": "/industries",
      "how-it-works": "/howitworks",
      "pricing": "/pricing",
      "contact": "/contact",
      "blog": "/blog",
      "case-studies": "/casestudies",
      "about": "/aboutus",
      "careers": "/careers",
      "privacy": "/privacy",
      "terms": "/terms"
    };
    
    navigate(pathMap[page] || "/");
  };

  // Determine current page from location
  const getCurrentPage = () => {
    const path = location.pathname;
    const pageMap: Record<string, string> = {
      "/": "home",
      "/services": "services",
      "/industries": "industries",
      "/howitworks": "how-it-works",
      "/pricing": "pricing",
      "/contact": "contact",
      "/blog": "blog",
      "/casestudies": "case-studies",
      "/aboutus": "about",
      "/careers": "careers",
      "/privacy": "privacy",
      "/terms": "terms"
    };
    return pageMap[path] || "home";
  };

  return (
    <div className="min-h-screen bg-[#0A0118]">
      <ScrollToTop />
      <Navigation
        currentPage={getCurrentPage()}
        onNavigate={handleNavigate}
      />
      <Routes>
        <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
        <Route path="/services" element={<ServicesPage onNavigate={handleNavigate} />} />
        <Route path="/industries" element={<IndustriesPage onNavigate={handleNavigate} />} />
        <Route path="/howitworks" element={<HowItWorksPage onNavigate={handleNavigate} />} />
        <Route path="/pricing" element={<PricingPage onNavigate={handleNavigate} />} />
        <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
        <Route path="/blog" element={<BlogPage onNavigate={handleNavigate} />} />
        <Route path="/casestudies" element={<CaseStudiesPage onNavigate={handleNavigate} />} />
        <Route path="/aboutus" element={<AboutPage onNavigate={handleNavigate} />} />
        <Route path="/careers" element={<CareersPage onNavigate={handleNavigate} />} />
        <Route path="/privacy" element={<PrivacyPage onNavigate={handleNavigate} />} />
        <Route path="/terms" element={<TermsPage onNavigate={handleNavigate} />} />
      </Routes>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}