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
  Star
} from "lucide-react";

// Hero image - Professional customer support team
const heroImage = "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWFtfGVufDF8fHx8MTczMjk0MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080";

// About Us section image - Professional team collaboration
const aboutImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3MzI5NDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const trustedBy = [
    "Shopify Merchants",
    "Property Managers", 
    "SaaS Startups",
    "Service Companies",
    "eCommerce Brands",
    "Real Estate Firms"
  ];

  const services = [
    {
      icon: Headphones,
      title: "Customer Support Outsourcing",
      description: "Never miss a customer inquiry — we handle chat, email, and voice 24/7.",
      seo: "customer success outsourcing"
    },
    {
      icon: UserCheck,
      title: "Virtual Assistant Services",
      description: "Focus on strategy while we manage scheduling, inbox, and admin.",
      seo: "virtual assistant services"
    },
    {
      icon: ShoppingBag,
      title: "Shopify & eCommerce Management",
      description: "Store updates, orders, and fulfillment handled by experts.",
      seo: "Shopify support specialists"
    },
    {
      icon: FileText,
      title: "Back-Office Operations",
      description: "Data, billing, QA, and reporting done accurately and on time.",
      seo: "back-office solutions"
    },
    {
      icon: Home,
      title: "Property Coordination",
      description: "Smooth tenant communication, vendor management, and leasing support.",
      seo: "remote operations management"
    }
  ];

  const testimonials = [
    {
      quote: "SageStone reduced our eCommerce support response times by 42%. Their team feels like part of our company.",
      author: "Amanda Foster",
      role: "Founder, Flourish Boutique",
      metric: "42% faster response time"
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
      metric: "Launched in 14 days"
    }
  ];

  const whoWeServe = [
    {
      title: "Shopify Merchants",
      description: "Scale your store with dedicated eCommerce support"
    },
    {
      title: "Startups",
      description: "Build operations without building overhead"
    },
    {
      title: "Real Estate Firms",
      description: "Property coordination and tenant communication"
    },
    {
      title: "Service Companies",
      description: "Customer success and admin management"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - REDESIGNED */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F3E8FF] via-white to-[#F9F8FB]">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-[#B14EFF]/5 via-transparent to-[#FF72E1]/5" style={{ backgroundSize: '200% 200%' }} />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="fade-in-up">
              <Badge className="mb-6 bg-white/90 text-[#8E3AFF] border-[#B14EFF]/30">
                <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />
                Business Process Outsourcing & Virtual Operations
              </Badge>
              
              <h1 className="text-[#1C1B20] mb-6">
                Scale your operations <span className="gradient-text">40% faster</span> with a BPO partner built by a Customer Success veteran.
              </h1>
              
              <p className="text-xl text-[#6D6A73] leading-relaxed mb-10">
                We build dedicated remote teams that handle your customer support, admin, and back-office — so you can focus on growth.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Button 
                  size="lg" 
                  onClick={() => onNavigate("contact")}
                  className="gradient-bg text-white glow-button transition-lift hover-lift min-w-[44px] min-h-[44px]"
                  aria-label="Book a free consultation"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => onNavigate("how-it-works")}
                  className="border-[#B14EFF] text-[#8E3AFF] hover:bg-[#F3E8FF] transition-lift hover-lift min-w-[44px] min-h-[44px]"
                  aria-label="See how it works"
                >
                  See How It Works
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-[#E7E2EE]">
                <p className="text-sm text-[#6D6A73] mb-4">Trusted by 50+ global brands</p>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-[#1C1B20] mb-1">
                      <TrendingUp className="w-5 h-5 text-[#8E3AFF]" aria-hidden="true" />
                      <span className="text-sm">+18% CSAT</span>
                    </div>
                    <p className="text-xs text-[#6D6A73]">Average uplift</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#1C1B20] mb-1">
                      <DollarSign className="w-5 h-5 text-[#8E3AFF]" aria-hidden="true" />
                      <span className="text-sm">−35% cost</span>
                    </div>
                    <p className="text-xs text-[#6D6A73]">To serve</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#1C1B20] mb-1">
                      <Clock className="w-5 h-5 text-[#8E3AFF]" aria-hidden="true" />
                      <span className="text-sm">2 weeks</span>
                    </div>
                    <p className="text-xs text-[#6D6A73]">Onboarding</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={heroImage}
                  alt="Professional team collaborating on customer support solutions"
                  className="w-full aspect-[4/3] object-cover"
                  eager
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8E3AFF]/30 to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#B14EFF] to-[#FF72E1] rounded-full blur-3xl opacity-30" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-[#F9F8FB] border-y border-[#E7E2EE]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center mb-12">
            <h2 className="text-[#1C1B20] mb-4">Who we serve</h2>
            <p className="text-xl text-[#6D6A73]">
              Growing brands that need operations support without the overhead
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((segment, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="p-6 border-[#E7E2EE] hover:border-[#B14EFF]/30 transition-colors text-center h-full">
                  <h4 className="text-[#1C1B20] mb-2">{segment.title}</h4>
                  <p className="text-sm text-[#6D6A73]">{segment.description}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - Services */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[#F3E8FF] text-[#8E3AFF] border-[#B14EFF]/20">
              What We Do
            </Badge>
            <h2 className="text-[#1C1B20] mb-4">
              Operations designed for <span className="gradient-text">founders who want to focus on growth</span>
            </h2>
            <p className="text-xl text-[#6D6A73]">
              We build teams that help businesses run smarter, not harder.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card 
                  className="p-6 border-t-4 gradient-border hover:shadow-xl transition-all duration-300 group h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B14EFF]/10 to-[#FF72E1]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-[#8E3AFF]" aria-hidden="true" />
                  </div>
                  <h4 className="text-[#1C1B20] mb-2">{service.title}</h4>
                  <p className="text-sm text-[#6D6A73] mb-4">{service.description}</p>
                  <button 
                    onClick={() => onNavigate("services")}
                    className="text-sm text-[#8E3AFF] hover:text-[#B14EFF] flex items-center gap-1 group min-w-[44px] min-h-[44px]"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Get a Tailored Plan
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fadeInUp" className="text-center mt-12">
            <Button 
              onClick={() => onNavigate("services")}
              variant="outline"
              className="border-[#B14EFF] text-[#8E3AFF] hover:bg-[#F3E8FF] min-w-[44px] min-h-[44px]"
              aria-label="View all services"
            >
              View all services
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="py-24 lg:py-32 bg-[#F9F8FB]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#1C1B20] mb-4">
              Built on <span className="gradient-text">real results</span>
            </h2>
            <p className="text-xl text-[#6D6A73]">
              We build teams that help businesses run smarter, not harder.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <Card className="p-8 text-center border-[#E7E2EE] hover:border-[#B14EFF]/30 transition-colors relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B14EFF]/10 to-transparent rounded-full -mr-16 -mt-16" aria-hidden="true" />
                <TrendingUp className="w-12 h-12 text-[#8E3AFF] mx-auto mb-4" aria-hidden="true" />
                <div className="text-5xl gradient-text mb-2">+18%</div>
                <div className="text-[#1C1B20] mb-2">CSAT Uplift</div>
                <p className="text-sm text-[#6D6A73]">
                  Average customer satisfaction improvement with dedicated support teams
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={100}>
              <Card className="p-8 text-center border-[#E7E2EE] hover:border-[#B14EFF]/30 transition-colors relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF72E1]/10 to-transparent rounded-full -mr-16 -mt-16" aria-hidden="true" />
                <DollarSign className="w-12 h-12 text-[#FF72E1] mx-auto mb-4" aria-hidden="true" />
                <div className="text-5xl gradient-text mb-2">−35%</div>
                <div className="text-[#1C1B20] mb-2">Cost to Serve</div>
                <p className="text-sm text-[#6D6A73]">
                  Reduction in operational costs without compromising quality
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={200}>
              <Card className="p-8 text-center border-[#E7E2EE] hover:border-[#B14EFF]/30 transition-colors relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C37BFF]/10 to-transparent rounded-full -mr-16 -mt-16" aria-hidden="true" />
                <Clock className="w-12 h-12 text-[#8E3AFF] mx-auto mb-4" aria-hidden="true" />
                <div className="text-5xl gradient-text mb-2">2 weeks</div>
                <div className="text-[#1C1B20] mb-2">Onboarding</div>
                <p className="text-sm text-[#6D6A73]">
                  From kickoff to fully operational team, ready to support your growth
                </p>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[#F3E8FF] text-[#8E3AFF] border-[#B14EFF]/20">
              Client Success
            </Badge>
            <h2 className="text-[#1C1B20] mb-4">
              Your success story <span className="gradient-text">starts here</span>
            </h2>
            <p className="text-xl text-[#6D6A73]">
              Real results from real partnerships
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="p-6 gradient-border hover:shadow-lg transition-all h-full">
                  <div className="flex gap-1 mb-4" role="img" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF72E1] text-[#FF72E1]" aria-hidden="true" />
                    ))}
                  </div>
                  {testimonial.metric && (
                    <div className="mb-4 px-4 py-2 bg-[#F3E8FF] rounded-lg border border-[#B14EFF]/20">
                      <p className="text-sm text-[#8E3AFF]">{testimonial.metric}</p>
                    </div>
                  )}
                  <blockquote className="text-[#1C1B20] mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="text-[#1C1B20]">{testimonial.author}</p>
                    <p className="text-sm text-[#6D6A73]">{testimonial.role}</p>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fadeInUp" className="text-center mt-12">
            <Button 
              onClick={() => onNavigate("case-studies")}
              variant="outline"
              className="border-[#B14EFF] text-[#8E3AFF] hover:bg-[#F3E8FF] min-w-[44px] min-h-[44px]"
              aria-label="Read more success stories"
            >
              Read more success stories
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#F3E8FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeInLeft">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={aboutImage}
                    alt="SageStone team delivering exceptional business process outsourcing services"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8E3AFF]/30 to-transparent" aria-hidden="true" />
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight">
              <Badge className="mb-6 bg-white/90 text-[#8E3AFF] border-[#B14EFF]/30">
                About Us
              </Badge>
              <h2 className="text-[#1C1B20] mb-4">
                Your trusted partner for <span className="gradient-text">business growth</span>
              </h2>
              <p className="text-lg text-[#6D6A73] leading-relaxed mb-6">
                SageStone Inc is a global BPO agency dedicated to helping businesses scale their operations efficiently. 
                We specialize in customer support outsourcing, virtual assistance, and back-office solutions.
              </p>
              <p className="text-lg text-[#6D6A73] leading-relaxed mb-8">
                With a team of experienced professionals and a commitment to excellence, we deliver 
                accountable people and efficient processes that help our clients achieve their goals.
              </p>
              <Button 
                onClick={() => onNavigate("about")}
                variant="outline"
                className="border-[#B14EFF] text-[#8E3AFF] hover:bg-[#F3E8FF] min-w-[44px] min-h-[44px]"
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
      <section className="py-20 lg:py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-white mb-6">
              Let&apos;s build your remote operations team
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Tell us what your business needs. We&apos;ll reply within one business day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                onClick={() => onNavigate("contact")}
                className="bg-white !text-[#8E3AFF] hover:bg-white/90 transition-lift hover-lift min-w-[44px] min-h-[44px]"
                aria-label="Start your build"
              >
                <span className="text-[#8E3AFF]">Start your build</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#8E3AFF]" aria-hidden="true" />
              </Button>
              <Button 
                size="lg"
                onClick={() => onNavigate("how-it-works")}
                variant="outline"
                className="border-2 border-white bg-transparent hover:bg-white/15 min-w-[44px] min-h-[44px]"
                aria-label="See how it works"
              >
                <span className="text-white">See how it works</span>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="py-12 bg-[#F9F8FB] border-t border-[#E7E2EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[#6D6A73]">
              <strong>SageStone Inc</strong> — Global BPO agency offering virtual assistants and customer support outsourcing. 
              Specializing in eCommerce customer service, Shopify support specialists, back-office solutions, and remote operations management 
              for growing brands, startups, and property management companies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
