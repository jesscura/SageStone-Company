import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Headphones, 
  UserCheck, 
  ShoppingBag, 
  FileText,
  Home,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Mail,
  Facebook,
  BarChart3,
  Package,
  RefreshCw,
  Users,
  Calculator,
  FileCheck,
  Key
} from "lucide-react";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Headphones,
      title: "Customer Support Outsourcing",
      tagline: "Never miss a customer inquiry — we handle chat, email, and voice 24/7",
      description: "Omnichannel support that feels like your in-house team. CSAT tracking, feedback loops, and continuous improvement built in.",
      image: "https://images.unsplash.com/photo-1748261500463-d15e624baf8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc2MjczMDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        {
          icon: Mail,
          text: "Email and ticket support management"
        },
        {
          icon: MessageSquare,
          text: "Live chat and messaging support"
        },
        {
          icon: Facebook,
          text: "Social media customer service"
        },
        {
          icon: BarChart3,
          text: "CSAT and performance tracking"
        }
      ],
      metrics: [
        { label: "Avg. CSAT", value: "92%" },
        { label: "Response Time", value: "<2 min" },
        { label: "Channels", value: "Omni" }
      ],
      seoKeyword: "customer success outsourcing"
    },
    {
      icon: UserCheck,
      title: "Virtual Assistant Services",
      tagline: "Focus on strategy while we manage scheduling, inbox, and admin",
      description: "Inbox management, scheduling, CRM updates, and administrative tasks handled by skilled professionals who understand your workflow.",
      image: "https://images.unsplash.com/photo-1590650467980-8eadfa86ff48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmd8ZW58MXx8fHwxNzYyNzI4ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        {
          icon: Mail,
          text: "Email and inbox management"
        },
        {
          icon: Users,
          text: "Calendar and scheduling coordination"
        },
        {
          icon: FileCheck,
          text: "CRM updates and data entry"
        },
        {
          icon: BarChart3,
          text: "Research and reporting tasks"
        }
      ],
      metrics: [
        { label: "Time Saved", value: "20+ hrs/wk" },
        { label: "Accuracy", value: "99.5%" },
        { label: "Availability", value: "24/7" }
      ],
      seoKeyword: "virtual assistant services"
    },
    {
      icon: ShoppingBag,
      title: "Shopify & eCommerce Management",
      tagline: "Store updates, orders, and fulfillment handled by experts",
      description: "Product updates, fulfillment coordination, returns processing, and store health checks. Keep your Shopify store running smoothly while you focus on growth.",
      image: "https://images.unsplash.com/photo-1539278383962-a7774385fa02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MjcyODg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        {
          icon: Package,
          text: "Product listing and catalog management"
        },
        {
          icon: RefreshCw,
          text: "Order fulfillment coordination"
        },
        {
          icon: MessageSquare,
          text: "Customer inquiry and returns handling"
        },
        {
          icon: BarChart3,
          text: "Store performance monitoring"
        }
      ],
      metrics: [
        { label: "Order Accuracy", value: "99.8%" },
        { label: "Response Time", value: "<1 hr" },
        { label: "Store Health", value: "A+" }
      ],
      seoKeyword: "Shopify support specialists"
    },
    {
      icon: FileText,
      title: "Back-Office Operations",
      tagline: "Data, billing, QA, and reporting done accurately and on time",
      description: "Billing, data entry, reports, and documentation. The behind-the-scenes work that keeps everything moving forward.",
      image: "https://images.unsplash.com/photo-1758873269811-4e62e346b4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzYyNzE3MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        {
          icon: Calculator,
          text: "Accounts payable and receivable"
        },
        {
          icon: FileCheck,
          text: "Data entry and document processing"
        },
        {
          icon: BarChart3,
          text: "Report generation and analysis"
        },
        {
          icon: Users,
          text: "HR and payroll administration"
        }
      ],
      metrics: [
        { label: "Cost Savings", value: "40%" },
        { label: "Processing Speed", value: "+50%" },
        { label: "Error Rate", value: "<0.1%" }
      ],
      seoKeyword: "back-office solutions"
    },
    {
      icon: Home,
      title: "Property Coordination",
      tagline: "Smooth tenant communication, vendor management, and leasing support",
      description: "Tenant communication, maintenance coordination, and leasing admin. Professional property management support that enhances tenant satisfaction.",
      image: "https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MjcyODg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        {
          icon: MessageSquare,
          text: "Tenant communication and inquiries"
        },
        {
          icon: Users,
          text: "Maintenance request coordination"
        },
        {
          icon: Key,
          text: "Leasing and application processing"
        },
        {
          icon: FileCheck,
          text: "Property documentation management"
        }
      ],
      metrics: [
        { label: "Tenant Satisfaction", value: "94%" },
        { label: "Response Time", value: "<4 hrs" },
        { label: "Admin Time Saved", value: "30%" }
      ],
      seoKeyword: "remote operations management"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0118]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0118] via-[#1A0B2E] to-[#0A0118] py-20 lg:py-28">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#B14EFF]/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#3DD6C4]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-[#B14EFF]/10 text-[#B14EFF] border-[#B14EFF]/30">
              Outsourced Operations & Customer Support Services
            </Badge>
            <h1 className="text-white mb-6">
              Services designed for <span className="text-[#3DD6C4]">founders who want to focus on growth</span>
            </h1>
            <p className="text-xl text-[#C4B8D4] leading-relaxed">
              Our services are designed for founders who want to focus on growth while we handle 
              the operations that keep business running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 lg:py-28 bg-[#0A0118]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B14EFF]/20 to-[#3DD6C4]/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-[#B14EFF]" />
                  </div>
                  <div>
                    <h2 className="text-white">{service.title}</h2>
                  </div>
                </div>
                
                <p className="text-lg text-[#3DD6C4] mb-4">
                  {service.tagline}
                </p>

                <p className="text-lg text-[#C4B8D4] mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#B14EFF]/20 flex items-center justify-center shrink-0">
                        <feature.icon className="w-4 h-4 text-[#B14EFF]" />
                      </div>
                      <span className="text-sm text-white">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {service.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-[#1A0B2E]/50 border border-[#2A1B3D]">
                      <div className="text-2xl text-[#3DD6C4] font-bold mb-1">{metric.value}</div>
                      <div className="text-xs text-[#C4B8D4]">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => onNavigate("contact")}
                  className="bg-[#3DD6C4] hover:bg-[#35C0B0] text-[#0A0118] font-semibold transition-all hover:scale-105 min-w-[44px] min-h-[44px]"
                  aria-label="Get a tailored plan"
                >
                  Get a Tailored Plan
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative rounded-3xl overflow-hidden border border-[#2A1B3D]">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118]/80 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose SageStone */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0A0118] to-[#1A0B2E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-white mb-4">
              Why choose <span className="text-[#3DD6C4]">SageStone Inc</span>
            </h2>
            <p className="text-xl text-[#C4B8D4]">
              More than just outsourcing — a partnership built for your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Built for Trust, Not Turnover",
                description: "We invest in long-term team members who become true extensions of your company."
              },
              {
                icon: BarChart3,
                title: "Performance-Driven",
                description: "CSAT tracking, feedback loops, and continuous improvement are built into every engagement."
              },
              {
                icon: CheckCircle2,
                title: "Operationally Sharp",
                description: "Founded by operators with 10 years of experience building global teams."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 bg-[#1A0B2E]/50 border-[#2A1B3D] hover:border-[#B14EFF]/50 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B14EFF]/20 to-[#3DD6C4]/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#B14EFF]" />
                </div>
                <h4 className="text-white mb-3">{feature.title}</h4>
                <p className="text-[#C4B8D4] leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#B14EFF] via-[#8E3AFF] to-[#B14EFF] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">
            Ready to build your team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Tell us what your business needs. We'll reply within one business day.
          </p>
          <Button 
            size="lg"
            onClick={() => onNavigate("contact")}
            className="bg-[#3DD6C4] hover:bg-[#35C0B0] text-[#0A0118] font-semibold transition-all hover:scale-105"
          >
            Let's build your remote operations team
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-[#0A0118] border-t border-[#2A1B3D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[#C4B8D4]">
              <strong className="text-white">SageStone Inc BPO Services:</strong> Customer support outsourcing, virtual assistant services, 
              eCommerce customer service, Shopify support specialists, back-office solutions, and remote operations management 
              for Shopify merchants, property managers, startups, and service-based companies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
