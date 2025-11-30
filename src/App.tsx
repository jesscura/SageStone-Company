import { useState, useEffect } from "react";
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

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "industries":
        return <IndustriesPage onNavigate={handleNavigate} />;
      case "how-it-works":
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case "pricing":
        return <PricingPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage onNavigate={handleNavigate} />;
      case "blog":
        return <BlogPage onNavigate={handleNavigate} />;
      case "case-studies":
        return <CaseStudiesPage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "careers":
        return <CareersPage onNavigate={handleNavigate} />;
      case "privacy":
        return <PrivacyPage onNavigate={handleNavigate} />;
      case "terms":
        return <TermsPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0118]">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      {renderPage()}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}