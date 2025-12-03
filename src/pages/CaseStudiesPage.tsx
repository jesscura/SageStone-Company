import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TrendingUp, DollarSign, Clock, ArrowRight, Star, ShoppingBag, Home, Zap } from "lucide-react";

interface CaseStudiesPageProps {
  onNavigate: (page: string) => void;
}

export function CaseStudiesPage({ onNavigate }: CaseStudiesPageProps) {
  const caseStudies = [
    {
      company: "Flourish Boutique",
      industry: "eCommerce / Shopify",
      icon: ShoppingBag,
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI2ODA4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      challenge: "Amanda Foster's Shopify boutique was growing fast, but her small team couldn't keep up with customer inquiries. Response times were over 24 hours, leading to cart abandonment and negative reviews.",
      solution: "SageStone built a dedicated 3-person eCommerce support team trained on Flourish's brand voice, product catalog, and fulfillment process. We integrated with their Shopify store and set up real-time CSAT tracking.",
      results: [
        { metric: "Response Time", value: "−42%", icon: Clock, description: "From 24+ hours to under 2 hours" },
        { metric: "Cart Recovery", value: "+28%", icon: ShoppingBag, description: "Increased abandoned cart recovery" },
        { metric: "CSAT Score", value: "91%", icon: Star, description: "Up from 73% in 90 days" }
      ],
      quote: "SageStone reduced our eCommerce support response times by 42%. Their team feels like part of our company.",
      author: "Amanda Foster, Founder"
    },
    {
      company: "Summit Properties",
      industry: "Property Management",
      icon: Home,
      image: "https://images.unsplash.com/photo-1762340274849-87b569b2f0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMG5ldHdvcmt8ZW58MXx8fHwxNzYyNjI3ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      challenge: "Carlos Mendez's property management firm was spending 30+ hours per week on tenant communications and maintenance coordination, pulling focus from strategic growth initiatives.",
      solution: "We deployed a 2-person property operations team to handle tenant inquiries, maintenance requests, and leasing administration. They integrated with Summit's property management software and established SLAs for response times.",
      results: [
        { metric: "Admin Time", value: "−30%", icon: Clock, description: "Hours saved per week on operations" },
        { metric: "Cost Savings", value: "35%", icon: DollarSign, description: "Reduction in operational costs" },
        { metric: "Tenant Satisfaction", value: "94%", icon: Star, description: "Up from 81% satisfaction" }
      ],
      quote: "Every process they streamline means one less fire for me to put out. I can finally focus on growth.",
      author: "Carlos Mendez, Director"
    },
    {
      company: "CloudSync",
      industry: "SaaS",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWFkc2V0fGVufDF8fHx8MTc2MjY3MTI3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      challenge: "Fast-growing SaaS company needed to scale customer success operations quickly for a major product launch, but traditional hiring would take 3+ months.",
      solution: "SageStone assembled and trained a 5-person customer success team in just 2 weeks. We built custom onboarding materials, integrated with their CRM, and established performance dashboards.",
      results: [
        { metric: "Launch Time", value: "14 days", icon: Clock, description: "From kickoff to launch ready" },
        { metric: "CSAT", value: "+22%", icon: Star, description: "Customer satisfaction improvement" },
        { metric: "Team Ramp", value: "100%", icon: TrendingUp, description: "Full productivity in 2 weeks" }
      ],
      quote: "From first call to fully operational in 2 weeks. The team at SageStone has been exceptional. Real accountability.",
      author: "Priya Sharma, COO"
    }
  ];

  return (
    <>
      <SEO
        title="Case Studies | Real Results from Our BPO Clients | SageStone Inc"
        description="See how SageStone Inc helps businesses scale with BPO services. Real case studies showing 42% faster response times, 35% cost savings, and 94% customer satisfaction."
        keywords="BPO case studies, outsourcing success stories, virtual assistant results, customer support ROI, eCommerce BPO results"
        canonical="https://www.sagestoneinc.com/casestudies"
        ogTitle="Case Studies | Proven BPO Results & Client Success Stories"
        ogDescription="Real results: 42% faster response times, 35% cost savings, 94% satisfaction. See how our BPO services transform businesses."
      />
      <div className="min-h-screen bg-[var(--dark-bg)]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--dark-bg)] via-[var(--dark-bg-secondary)] to-[var(--dark-bg)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/30">
              BPO Results & Client Success Stories
            </Badge>
            <h1 className="text-white mb-6">
              Real teams. <span className="gradient-text">Real results.</span>
            </h1>
            <p className="text-xl text-[var(--dark-text-muted)] leading-relaxed">
              See how Shopify merchants, property managers, and growing companies are scaling smarter with SageStone Inc.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden border-border shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <study.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white">{study.company}</h3>
                    </div>
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                      {study.industry}
                    </Badge>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="mb-8">
                    <h4 className="text-primary mb-3">The Challenge</h4>
                    <p className="text-[var(--dark-text-muted)] leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-primary mb-3">SageStone Inc Solution</h4>
                    <p className="text-[var(--dark-text-muted)] leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-white mb-4">The Results</h4>
                    <div className="grid gap-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted border border-border">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-primary-400)]/10 to-accent/10 flex items-center justify-center shrink-0">
                            <result.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-baseline gap-2 mb-1">
                              <span className="text-sm text-[var(--dark-text-muted)]">{result.metric}:</span>
                              <span className="text-2xl gradient-text">{result.value}</span>
                            </div>
                            <p className="text-xs text-[var(--dark-text-muted)]">{result.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[var(--color-primary-400)] pl-6 mb-4">
                    <p className="text-white italic leading-relaxed mb-2">"{study.quote}"</p>
                    <cite className="text-sm text-[var(--dark-text-muted)] not-italic">— {study.author}</cite>
                  </blockquote>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">
            Your success story starts here
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's talk about what you need. We'll reply within one business day.
          </p>
          <Button 
            size="lg"
            onClick={() => onNavigate("contact")}
            className="bg-white !text-primary hover:bg-white/90 transition-lift hover-lift min-w-[44px] min-h-[44px]"
            aria-label="Start building your team"
          >
            <span className="text-primary">Start your build</span>
            <ArrowRight className="w-4 h-4 ml-2 text-primary" aria-hidden="true" />
          </Button>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[var(--dark-text-muted)]">
              <strong>SageStone Inc BPO Case Studies:</strong> Real results from eCommerce customer service, Shopify support specialists, 
              property operations management, and customer success outsourcing. See how our clients achieved 42% faster response times, 
              35% cost savings, and 2-week team launches.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
