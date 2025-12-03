import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const plans = [
    {
      name: "Starter",
      description: "Shared virtual assistant (ideal for solopreneurs)",
      idealFor: "Solopreneurs and small businesses",
      price: "1,200",
      period: "per month",
      features: [
        "Shared virtual assistant (20 hrs/month)",
        "Email and calendar management",
        "Basic admin tasks",
        "Monthly performance reports",
        "Email support",
        "Flexible month-to-month"
      ],
      cta: "Get started",
      highlighted: false
    },
    {
      name: "Growth",
      description: "Dedicated team (customer support, admin, or eCommerce)",
      idealFor: "Growing companies and eCommerce brands",
      price: "2,500",
      period: "per seat/month",
      features: [
        "Dedicated full-time team member",
        "Custom training on your workflows",
        "Manager oversight included",
        "Performance dashboards",
        "Onboarding in 2 weeks",
        "Direct team communication",
        "Weekly performance reviews",
        "Flexible scaling"
      ],
      cta: "Let's build your team",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "Custom operations management",
      idealFor: "Established businesses with complex needs",
      price: "Custom",
      period: "tailored pricing",
      features: [
        "Multi-person dedicated teams",
        "White-glove onboarding",
        "Dedicated account manager",
        "Custom workflow automation",
        "Real-time analytics",
        "SLA guarantees",
        "Quarterly strategic reviews",
        "Priority support 24/7"
      ],
      cta: "Get your custom quote",
      highlighted: false
    }
  ];

  return (
    <>
      <SEO
        title="Pricing | Flexible BPO Plans Starting at $1,200/month | SageStone Inc"
        description="Transparent BPO pricing with no hidden fees. Starter plans from $1,200/month, dedicated teams from $2,500/seat. Save 35% compared to in-house hiring."
        keywords="BPO pricing, virtual assistant cost, customer support pricing, outsourcing rates, dedicated team pricing"
        canonical="https://www.sagestoneinc.com/pricing"
        ogTitle="BPO Pricing | Flexible Plans with 35% Cost Savings"
        ogDescription="Affordable BPO services starting at $1,200/month. No hidden fees, flexible contracts, 35% cost savings. Get a custom quote today."
      />
      <div className="min-h-screen bg-[var(--dark-bg)]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--dark-bg)] via-[var(--dark-bg-secondary)] to-[var(--dark-bg)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/30">
              Transparent BPO Pricing for Startups & Growing Companies
            </Badge>
            <h1 className="text-white mb-6">
              <span className="text-[var(--color-primary-400)]">Transparent pricing.</span> Flexible plans.
            </h1>
            <p className="text-xl text-[var(--dark-text-muted)] leading-relaxed">
              No hidden fees. No surprises. Each plan includes manager oversight, onboarding, 
              and performance analytics. You pay for results, not just hours.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 relative bg-[var(--dark-bg-secondary)]/60 backdrop-blur-sm ${
                  plan.highlighted 
                    ? 'border-2 border-[var(--color-primary-400)] shadow-2xl' 
                    : 'border-[var(--dark-surface)]'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[var(--color-primary-400)] to-accent text-white border-0">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <h3 className="text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-[var(--dark-text-muted)] mb-2">{plan.description}</p>
                <p className="text-xs text-[var(--color-primary-400)] mb-6">Ideal for: {plan.idealFor}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    {plan.price === "Custom" ? (
                      <div className="text-4xl text-[var(--color-primary-400)]">Custom</div>
                    ) : (
                      <>
                        <span className="text-sm text-[var(--dark-text-muted)]">$</span>
                        <span className="text-5xl text-[var(--color-primary-400)]">{plan.price}</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-[var(--dark-text-muted)] mt-1">{plan.period}</p>
                </div>

                <Button 
                  onClick={() => onNavigate("contact")}
                  className={`w-full mb-8 min-w-[44px] min-h-[44px] ${
                    plan.highlighted
                      ? 'bg-[var(--color-primary-400)] hover:bg-primary text-white'
                      : 'border-[var(--color-primary-400)] text-[var(--color-primary-400)] hover:bg-[var(--color-primary-400)]/10'
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                  aria-label={plan.cta}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-400)] shrink-0 mt-0.5" />
                      <span className="text-sm text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[var(--dark-text-muted)] mb-4">
              Not sure which plan is right for you?
            </p>
            <Button 
              onClick={() => onNavigate("contact")}
              variant="outline"
              className="border-[var(--color-primary-400)] text-[var(--color-primary-400)] hover:bg-[var(--color-primary-400)]/10 min-w-[44px] min-h-[44px]"
              aria-label="Get your custom quote"
            >
              Get your custom quote
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-[var(--dark-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              What's <span className="text-[var(--color-primary-400)]">included</span>
            </h2>
            <p className="text-xl text-[var(--dark-text-muted)]">
              Every plan comes with the essentials for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Vetted and trained team members",
              "Manager oversight and quality control",
              "2-week onboarding process",
              "Performance dashboards",
              "Direct team communication",
              "Weekly or monthly check-ins",
              "Process documentation",
              "Flexible month-to-month contracts",
              "No setup fees or hidden costs"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-400)] shrink-0 mt-0.5" />
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[var(--dark-bg)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              Pricing <span className="text-[var(--color-primary-400)]">FAQs</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What's included in the monthly price?",
                a: "Each plan includes a fully vetted and trained team member (or shared assistant for Starter), manager oversight, performance tracking, and all the tools needed to get started. No hidden fees."
              },
              {
                q: "Are there any setup or onboarding fees?",
                a: "No. Onboarding and training are included in your monthly rate. We want you to see value from day one."
              },
              {
                q: "Can I scale my team up or down?",
                a: "Yes. All plans are month-to-month. You can add team members, reduce hours, or adjust your plan with 30 days' notice."
              },
              {
                q: "What if I'm not satisfied?",
                a: "We offer a 30-day performance guarantee. If you're not completely satisfied, we'll work to make it right or provide a full refund."
              },
              {
                q: "Do you work with Shopify stores?",
                a: "Absolutely. We specialize in eCommerce support, including Shopify product management, fulfillment coordination, and customer service."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 bg-[var(--dark-bg-secondary)]/60 backdrop-blur-sm border-[var(--dark-surface)] hover:border-[var(--color-primary-400)]/50 transition-colors">
                <h4 className="text-white mb-2">{faq.q}</h4>
                <p className="text-[var(--dark-text-muted)]">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[var(--color-primary-400)] via-primary to-[var(--color-primary-400)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">
            Ready to build your team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your custom quote tailored to your specific needs.
          </p>
          <Button 
            size="lg"
            onClick={() => onNavigate("contact")}
            className="bg-white hover:bg-white/90 text-[var(--color-primary-400)] transition-all hover:scale-105 min-w-[44px] min-h-[44px]"
            aria-label="Get your custom quote"
          >
            <span className="text-[var(--color-primary-400)]">Get your custom quote</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[var(--color-primary-400)]" aria-hidden="true" />
          </Button>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-[var(--dark-bg)] border-t border-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[var(--dark-text-muted)]">
              <strong className="text-white">Transparent BPO Pricing:</strong> Flexible plans for solopreneurs, startups, and growing companies. 
              Virtual assistant services starting at $1,200/month, dedicated teams from $2,500/seat, and custom enterprise solutions. 
              All plans include manager oversight, onboarding, and performance analytics with no hidden fees.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
