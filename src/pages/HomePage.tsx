import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp,
  DollarSign,
  Clock,
  Headphones,
  UserCheck,
  ShoppingBag,
  FileText,
  Home,
  Star,
  Zap,
  Users,
  Bot
} from "lucide-react";

// Hero image - Professional customer support team
const heroImage = "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWFtfGVufDF8fHx8MTczMjk0MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080";

// About Us section image - Professional team collaboration
const aboutImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3MzI5NDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Headphones,
      title: "Customer Support",
      description: "24/7 omnichannel support via chat, email, and voice. Never miss a customer inquiry.",
      color: "#B14EFF"
    },
    {
      icon: ShoppingBag,
      title: "Shopify / E-com",
      description: "Store updates, orders, fulfillment, and returns handled by eCommerce experts.",
      color: "#00FF88"
    },
    {
      icon: FileText,
      title: "Back Office",
      description: "Data entry, billing, QA, and reporting done accurately and on time.",
      color: "#FF72E1"
    },
    {
      icon: UserCheck,
      title: "Virtual Assistance",
      description: "Inbox management, scheduling, CRM updates, and admin tasks handled efficiently.",
      color: "#B14EFF"
    },
    {
      icon: Home,
      title: "Property Management",
      description: "Tenant communication, maintenance coordination, and leasing support.",
      color: "#00FF88"
    },
    {
      icon: Bot,
      title: "Automation & AI",
      description: "Workflow automation, AI integration, and process optimization for scale.",
      color: "#FF72E1"
    }
  ];

  const testimonials = [
    {
      quote: "SageStone reduced our eCommerce support response times by 42%. Their team feels like part of our company.",
      author: "Amanda Foster",
      role: "Founder, Flourish Boutique",
      metric: "42% faster response"
    },
    {
      quote: "Every process they streamline means one less fire for me to put out. I can finally focus on growth.",
      author: "Carlos Mendez",
      role: "Director, Summit Properties",
      metric: "35% cost reduction"
    },
    {
      quote: "From onboarding to daily support, the team at SageStone has been exceptional. Real accountability.",
      author: "Priya Sharma",
      role: "COO, CloudSync",
      metric: "14 days to launch"
    }
  ];

  const whoWeServe = [
    {
      title: "Shopify Merchants",
      description: "Scale your store with dedicated eCommerce support",
      icon: ShoppingBag
    },
    {
      title: "SaaS Startups",
      description: "Build operations without building overhead",
      icon: Zap
    },
    {
      title: "Real Estate Firms",
      description: "Property coordination and tenant communication",
      icon: Home
    },
    {
      title: "Service Companies",
      description: "Customer success and admin management",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0118]">
      {/* Hero Section - Dark Mode Premium */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0118] via-[#1A0B2E] to-[#0A0118]">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#B14EFF]/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#00FF88]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="fade-in-up">
              <Badge className="mb-6 bg-[#B14EFF]/10 text-[#B14EFF] border-[#B14EFF]/30 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />
                Virtual Support & Automation Solutions
              </Badge>
              
              <h1 className="text-white mb-6">
                Scale your operations <span className="text-[#00FF88]">40% faster</span> with tailored virtual support and automation.
              </h1>
              
              <p className="text-xl text-[#C4B8D4] leading-relaxed mb-10">
                We build dedicated remote teams that handle your customer support, admin, and back-office — so you can focus on growth.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Button 
                  size="lg" 
                  onClick={() => onNavigate("contact")}
                  className="bg-[#00FF88] hover:bg-[#00DD77] text-[#0A0118] font-semibold transition-all hover:scale-105 min-w-[44px] min-h-[44px]"
                  aria-label="Book a free consultation"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => onNavigate("how-it-works")}
                  className="border-[#B14EFF] text-[#B14EFF] hover:bg-[#B14EFF]/10 transition-all min-w-[44px] min-h-[44px]"
                  aria-label="See how it works"
                >
                  See How It Works
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#2A1B3D]">
                <ImageWithFallback
                  src={heroImage}
                  alt="Customer support team collaborating on business solutions"
                  className="w-full aspect-[4/3] object-cover"
                  eager
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118]/80 via-transparent to-transparent" aria-hidden="true" />
              </div>
              {/* Glow effect */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#B14EFF] to-[#00FF88] rounded-full blur-3xl opacity-30" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="py-6 bg-[#1A0B2E]/50 border-y border-[#2A1B3D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="flex items-center gap-2 text-white mb-1">
                <TrendingUp className="w-5 h-5 text-[#00FF88]" aria-hidden="true" />
                <span className="text-2xl font-bold text-[#00FF88]">+18%</span>
              </div>
              <p className="text-xs text-[#C4B8D4]">CSAT Improvement</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#2A1B3D]" aria-hidden="true" />
            <div className="text-center">
              <div className="flex items-center gap-2 text-white mb-1">
                <DollarSign className="w-5 h-5 text-[#00FF88]" aria-hidden="true" />
                <span className="text-2xl font-bold text-[#00FF88]">−35%</span>
              </div>
              <p className="text-xs text-[#C4B8D4]">Cost Reduction</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#2A1B3D]" aria-hidden="true" />
            <div className="text-center">
              <div className="flex items-center gap-2 text-white mb-1">
                <Clock className="w-5 h-5 text-[#00FF88]" aria-hidden="true" />
                <span className="text-2xl font-bold text-[#00FF88]">2 weeks</span>
              </div>
              <p className="text-xs text-[#C4B8D4]">To Launch</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#2A1B3D]" aria-hidden="true" />
            <div className="text-center">
              <div className="flex items-center gap-2 text-white mb-1">
                <Users className="w-5 h-5 text-[#00FF88]" aria-hidden="true" />
                <span className="text-2xl font-bold text-[#00FF88]">50+</span>
              </div>
              <p className="text-xs text-[#C4B8D4]">Global Brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve - Glass Effect Grid */}
      <section className="py-20 lg:py-28 bg-[#0A0118]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-white mb-4">Who we serve</h2>
            <p className="text-xl text-[#C4B8D4]">
              Growing brands that need operations support without the overhead
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((segment, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="p-6 bg-[#1A0B2E]/50 backdrop-blur-sm border-[#2A1B3D] hover:border-[#B14EFF]/50 transition-all duration-300 text-center h-full group">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#B14EFF]/20 to-[#00FF88]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <segment.icon className="w-7 h-7 text-[#B14EFF]" aria-hidden="true" />
                  </div>
                  <h4 className="text-white mb-2">{segment.title}</h4>
                  <p className="text-sm text-[#C4B8D4]">{segment.description}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Dark Mode Cards */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0A0118] to-[#1A0B2E]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[#B14EFF]/10 text-[#B14EFF] border-[#B14EFF]/20">
              Our Services
            </Badge>
            <h2 className="text-white mb-4">
              Outsourced operations built for <span className="text-[#00FF88]">scale</span>
            </h2>
            <p className="text-xl text-[#C4B8D4]">
              We build teams that help businesses run smarter, not harder.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card 
                  className="p-6 bg-[#1A0B2E]/60 backdrop-blur-sm border-[#2A1B3D] hover:border-[#B14EFF]/50 hover:bg-[#1A0B2E]/80 transition-all duration-300 group h-full"
                  style={{ borderTopColor: service.color, borderTopWidth: '2px' }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <service.icon className="w-6 h-6" style={{ color: service.color }} aria-hidden="true" />
                  </div>
                  <h4 className="text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-[#C4B8D4] mb-4">{service.description}</p>
                  <button 
                    onClick={() => onNavigate("services")}
                    className="text-sm text-[#B14EFF] hover:text-[#00FF88] flex items-center gap-1 group/btn min-w-[44px] min-h-[44px]"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Get a Tailored Plan
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fadeInUp" className="text-center mt-12">
            <Button 
              onClick={() => onNavigate("services")}
              variant="outline"
              className="border-[#B14EFF] text-[#B14EFF] hover:bg-[#B14EFF]/10 min-w-[44px] min-h-[44px]"
              aria-label="View all services"
            >
              View all services
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="py-24 lg:py-32 bg-[#1A0B2E]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-white mb-4">
              Built on <span className="text-[#00FF88]">real results</span>
            </h2>
            <p className="text-xl text-[#C4B8D4]">
              Proven metrics from real client partnerships
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <Card className="p-8 text-center bg-[#0A0118]/50 border-[#2A1B3D] relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B14EFF]/20 to-transparent rounded-full -mr-16 -mt-16" aria-hidden="true" />
                <TrendingUp className="w-12 h-12 text-[#B14EFF] mx-auto mb-4" aria-hidden="true" />
                <div className="text-5xl font-bold text-[#00FF88] mb-2">+18%</div>
                <div className="text-white mb-2">CSAT Uplift</div>
                <p className="text-sm text-[#C4B8D4]">
                  Average customer satisfaction improvement with dedicated support teams
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={100}>
              <Card className="p-8 text-center bg-[#0A0118]/50 border-[#2A1B3D] relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF72E1]/20 to-transparent rounded-full -mr-16 -mt-16" aria-hidden="true" />
                <DollarSign className="w-12 h-12 text-[#FF72E1] mx-auto mb-4" aria-hidden="true" />
                <div className="text-5xl font-bold text-[#00FF88] mb-2">−35%</div>
                <div className="text-white mb-2">Cost to Serve</div>
                <p className="text-sm text-[#C4B8D4]">
                  Reduction in operational costs without compromising quality
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={200}>
              <Card className="p-8 text-center bg-[#0A0118]/50 border-[#2A1B3D] relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00FF88]/20 to-transparent rounded-full -mr-16 -mt-16" aria-hidden="true" />
                <Clock className="w-12 h-12 text-[#00FF88] mx-auto mb-4" aria-hidden="true" />
                <div className="text-5xl font-bold text-[#00FF88] mb-2">2 weeks</div>
                <div className="text-white mb-2">Onboarding</div>
                <p className="text-sm text-[#C4B8D4]">
                  From kickoff to fully operational team, ready to support your growth
                </p>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#1A0B2E] to-[#0A0118]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[#FF72E1]/10 text-[#FF72E1] border-[#FF72E1]/20">
              Client Success
            </Badge>
            <h2 className="text-white mb-4">
              Your success story <span className="text-[#00FF88]">starts here</span>
            </h2>
            <p className="text-xl text-[#C4B8D4]">
              Real results from real partnerships
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="p-6 bg-[#1A0B2E]/50 backdrop-blur-sm border-[#2A1B3D] hover:border-[#B14EFF]/30 transition-all h-full">
                  <div className="flex gap-1 mb-4" role="img" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF72E1] text-[#FF72E1]" aria-hidden="true" />
                    ))}
                  </div>
                  {testimonial.metric && (
                    <div className="mb-4 px-4 py-2 bg-[#00FF88]/10 rounded-lg border border-[#00FF88]/20">
                      <p className="text-sm text-[#00FF88] font-medium">{testimonial.metric}</p>
                    </div>
                  )}
                  <blockquote className="text-white mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-sm text-[#C4B8D4]">{testimonial.role}</p>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fadeInUp" className="text-center mt-12">
            <Button 
              onClick={() => onNavigate("case-studies")}
              variant="outline"
              className="border-[#B14EFF] text-[#B14EFF] hover:bg-[#B14EFF]/10 min-w-[44px] min-h-[44px]"
              aria-label="Read more success stories"
            >
              Read more success stories
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 lg:py-28 bg-[#0A0118]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeInLeft">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden border border-[#2A1B3D]">
                  <ImageWithFallback
                    src={aboutImage}
                    alt="SageStone team delivering exceptional business process outsourcing services"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118]/80 to-transparent" aria-hidden="true" />
                </div>
                {/* Glow */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#B14EFF]/30 rounded-full blur-2xl" aria-hidden="true" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight">
              <Badge className="mb-6 bg-[#B14EFF]/10 text-[#B14EFF] border-[#B14EFF]/30">
                About Us
              </Badge>
              <h2 className="text-white mb-4">
                Your trusted partner for <span className="text-[#00FF88]">business growth</span>
              </h2>
              <p className="text-lg text-[#C4B8D4] leading-relaxed mb-6">
                SageStone Inc is a global BPO agency dedicated to helping businesses scale their operations efficiently. 
                We specialize in customer support outsourcing, virtual assistance, and back-office solutions.
              </p>
              <p className="text-lg text-[#C4B8D4] leading-relaxed mb-8">
                With a team of experienced professionals and a commitment to excellence, we deliver 
                accountable people and efficient processes that help our clients achieve their goals.
              </p>
              <Button 
                onClick={() => onNavigate("about")}
                variant="outline"
                className="border-[#B14EFF] text-[#B14EFF] hover:bg-[#B14EFF]/10 min-w-[44px] min-h-[44px]"
                aria-label="Learn more about us"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#B14EFF] via-[#8E3AFF] to-[#B14EFF] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-white mb-6">
              Let's build your remote operations team
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Tell us what your business needs. We'll reply within one business day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                onClick={() => onNavigate("contact")}
                className="bg-[#00FF88] hover:bg-[#00DD77] text-[#0A0118] font-semibold transition-all hover:scale-105 min-w-[44px] min-h-[44px]"
                aria-label="Start your build"
              >
                Start your build
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
              <Button 
                size="lg"
                onClick={() => onNavigate("how-it-works")}
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white/10 min-w-[44px] min-h-[44px]"
                aria-label="See how it works"
              >
                See how it works
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="py-12 bg-[#0A0118] border-t border-[#2A1B3D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[#C4B8D4]">
              <strong className="text-white">SageStone Inc</strong> — Global BPO agency offering virtual assistants and customer support outsourcing. 
              Specializing in eCommerce customer service, Shopify support specialists, back-office solutions, and remote operations management 
              for growing brands, startups, and property management companies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
