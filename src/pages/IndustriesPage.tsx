import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollAnimation } from "../components/ScrollAnimation";
import {
  ArrowRight,
  ShoppingBag,
  Building2,
  Rocket,
  Briefcase,
  Home,
  Laptop,
  CheckCircle2
} from "lucide-react";

interface IndustriesPageProps {
  onNavigate: (page: string) => void;
}

export function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  const industries = [
    {
      icon: ShoppingBag,
      title: "eCommerce & Shopify Merchants",
      description: "Scale your online store with dedicated support teams that handle customer inquiries, order management, and fulfillment coordination.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZWNvbW1lcmNlJTIwb25saW5lJTIwc2hvcHBpbmd8ZW58MHx8fHwxNjk2MDAwMDAwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      benefits: [
        "24/7 customer support coverage",
        "Order and fulfillment management",
        "Product listing and catalog updates",
        "Returns and refund processing"
      ],
      metrics: { label: "Avg. Response Time", value: "<2 min" }
    },
    {
      icon: Home,
      title: "Property Management & Real Estate",
      description: "Streamline tenant communication, maintenance coordination, and leasing administration with experienced property support teams.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHx8fDE2OTYwMDAwMDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
      benefits: [
        "Tenant inquiry management",
        "Maintenance request coordination",
        "Leasing and application processing",
        "Property documentation support"
      ],
      metrics: { label: "Tenant Satisfaction", value: "94%" }
    },
    {
      icon: Rocket,
      title: "Startups & SaaS Companies",
      description: "Build your operations infrastructure without the overhead. Get customer success, admin support, and back-office operations from day one.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8c3RhcnR1cCUyMHRlYW18ZW58MHx8fHwxNjk2MDAwMDAwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      benefits: [
        "Customer onboarding support",
        "Help desk and ticket management",
        "Product feedback collection",
        "Administrative assistance"
      ],
      metrics: { label: "Time to Launch", value: "2 weeks" }
    },
    {
      icon: Briefcase,
      title: "Service-Based Businesses",
      description: "Focus on delivering your services while we handle scheduling, client communication, and administrative tasks.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBzZXJ2aWNlc3xlbnwwfHx8fDE2OTYwMDAwMDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
      benefits: [
        "Appointment scheduling",
        "Client communication management",
        "Invoice and billing support",
        "CRM updates and data entry"
      ],
      metrics: { label: "Admin Time Saved", value: "30%" }
    },
    {
      icon: Building2,
      title: "Growing SMBs",
      description: "Whether you're a local business going national or a mid-size company optimizing operations, we scale with you.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNjk2MDAwMDAwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      benefits: [
        "Scalable team solutions",
        "Multi-channel support",
        "Process documentation",
        "Quality assurance programs"
      ],
      metrics: { label: "Cost Reduction", value: "35%" }
    },
    {
      icon: Laptop,
      title: "Digital Agencies & Consultants",
      description: "Expand your service offerings without expanding your payroll. White-label support for your clients.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZGlnaXRhbCUyMGFnZW5jeXxlbnwwfHx8fDE2OTYwMDAwMDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
      benefits: [
        "White-label client support",
        "Project coordination",
        "Research and reporting",
        "Administrative operations"
      ],
      metrics: { label: "Capacity Increase", value: "+50%" }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F3E8FF] via-white to-[#F9F8FB] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white/90 text-[#8E3AFF] border-[#B14EFF]/30">
              Industries We Serve
            </Badge>
            <h1 className="text-[#1C1B20] mb-6">
              BPO solutions tailored for <span className="gradient-text">your industry</span>
            </h1>
            <p className="text-xl text-[#6D6A73] leading-relaxed">
              We understand that every industry has unique challenges. That's why we build dedicated teams 
              with specialized expertise to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="overflow-hidden border-[#E7E2EE] hover:border-[#B14EFF]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8E3AFF]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center">
                        <industry.icon className="w-6 h-6 text-[#8E3AFF]" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl text-[#1C1B20] mb-2">{industry.title}</h3>
                    <p className="text-[#6D6A73] mb-4 text-sm">{industry.description}</p>
                    
                    <ul className="space-y-2 mb-6 flex-1">
                      {industry.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#6D6A73]">
                          <CheckCircle2 className="w-4 h-4 text-[#8E3AFF] shrink-0 mt-0.5" aria-hidden="true" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-[#E7E2EE] flex items-center justify-between">
                      <div>
                        <p className="text-xs text-[#6D6A73]">{industry.metrics.label}</p>
                        <p className="text-lg gradient-text font-semibold">{industry.metrics.value}</p>
                      </div>
                      <Button
                        onClick={() => onNavigate("contact")}
                        variant="outline"
                        size="sm"
                        className="border-[#B14EFF] text-[#8E3AFF] hover:bg-[#F3E8FF]"
                        aria-label={`Learn more about ${industry.title}`}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-20 lg:py-28 bg-[#F9F8FB]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#1C1B20] mb-4">
              Why <span className="gradient-text">industry expertise</span> matters
            </h2>
            <p className="text-xl text-[#6D6A73]">
              Generic outsourcing doesn't work. We invest in understanding your industry's 
              specific needs, terminology, and challenges.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Faster Onboarding",
                description: "Teams familiar with your industry ramp up faster, reducing training time and errors."
              },
              {
                title: "Better Customer Experience",
                description: "Support agents who understand your product and industry provide more relevant, helpful responses."
              },
              {
                title: "Industry Best Practices",
                description: "We bring proven processes and insights from working with similar businesses."
              }
            ].map((item, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="p-8 border-[#E7E2EE] hover:border-[#B14EFF]/30 transition-colors text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B14EFF]/10 to-[#FF72E1]/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl gradient-text font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-[#1C1B20] mb-3">{item.title}</h4>
                  <p className="text-[#6D6A73]">{item.description}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-white mb-6">
              Don't see your industry?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our flexible approach means we can adapt to any industry. Let's talk about your specific needs.
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate("contact")}
              className="bg-white !text-[#8E3AFF] hover:bg-white/90 transition-lift hover-lift min-w-[44px] min-h-[44px]"
              aria-label="Contact us to discuss your industry needs"
            >
              <span className="text-[#8E3AFF]">Let's Talk About Your Business</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#8E3AFF]" aria-hidden="true" />
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-white border-t border-[#E7E2EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[#6D6A73]">
              <strong>SageStone Inc Industry Solutions:</strong> BPO and virtual assistant services for eCommerce, 
              Shopify merchants, property management, real estate, startups, SaaS companies, service businesses, 
              SMBs, and digital agencies. Industry-specific expertise for customer support, back-office operations, 
              and administrative services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
