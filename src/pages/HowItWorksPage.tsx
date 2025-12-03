import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Search,
  Users,
  Rocket,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageSquare,
  FileCheck,
  Star
} from "lucide-react";
import heroImage from "figma:asset/73ebba38b0c336d4ff0cd35782588b2536f28ee3.png";

interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
}

export function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      subtitle: "Understand goals and systems",
      description: "We start with a conversation about your business, current challenges, and what success looks like for you. No one-size-fits-all solutions here.",
      details: [
        "45-minute discovery call to understand your needs",
        "Review of current workflows and systems",
        "Identification of pain points and opportunities",
        "Clear success metrics and expectations"
      ],
      timeline: "Day 1"
    },
    {
      number: "02",
      icon: Users,
      title: "Recruitment",
      subtitle: "Hand-select trained support specialists",
      description: "We source, screen, and select team members who fit your needs and culture. Every person is vetted for skills, communication, and reliability.",
      details: [
        "Targeted candidate sourcing based on your requirements",
        "Multi-stage skills and culture assessment",
        "Background verification and reference checks",
        "Final team presentation for your approval"
      ],
      timeline: "Days 2-7"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Onboarding",
      subtitle: "Integrate tools, workflows, and reporting",
      description: "Your new team is trained on your specific processes, tools, and brand voice. We set up reporting dashboards so you always know what's happening.",
      details: [
        "Custom training on your tools and workflows",
        "Brand voice and communication guidelines",
        "Systems access and security setup",
        "Performance dashboards and reporting structure"
      ],
      timeline: "Days 8-14"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Scale & Optimize",
      subtitle: "Ongoing optimization and performance reviews",
      description: "We continuously monitor performance, gather feedback, and optimize processes. As your business grows, your team scales with you.",
      details: [
        "Weekly performance reviews and optimization",
        "Monthly strategic check-ins",
        "Flexible team scaling up or down",
        "Continuous training and development"
      ],
      timeline: "Ongoing"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "2-Week Onboarding",
      description: "From kickoff to fully operational faster than traditional hiring"
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Work directly with your team—no layers of account managers"
    },
    {
      icon: FileCheck,
      title: "Transparent Reporting",
      description: "Real-time dashboards and performance metrics you can trust"
    }
  ];

  return (
    <>
      <SEO
        title="How It Works | Our 4-Step BPO Process | SageStone Inc"
        description="Learn how SageStone Inc builds and manages your remote team in 4 simple steps: Discovery, Recruitment, Onboarding, and Ongoing Support. Get started in 2 weeks."
        keywords="BPO process, remote team onboarding, virtual assistant hiring, outsourcing workflow, team management"
        canonical="https://www.sagestoneinc.com/howitworks"
        ogTitle="How It Works | Simple 4-Step BPO Process"
        ogDescription="From discovery to ongoing support, we handle everything. Build your dedicated remote team in 2 weeks with our proven process."
      />
      <div className="min-h-screen bg-[var(--dark-bg)]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--dark-bg)] via-[var(--dark-bg-secondary)] to-[var(--dark-bg)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/30">
              BPO Onboarding Process & Team Setup
            </Badge>
            <h1 className="text-white mb-6">
              Built for <span className="text-[var(--color-primary-400)]">clarity and speed</span>
            </h1>
            <p className="text-xl text-[var(--dark-text-muted)] leading-relaxed mb-8">
              We've refined our process over hundreds of successful team builds. 
              Here's exactly how we'll get you from first call to fully operational.
            </p>
            <Button 
              onClick={() => onNavigate("contact")}
              className="bg-[var(--color-primary-400)] hover:bg-primary text-white transition-all hover:scale-105"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-[67px] top-32 w-0.5 h-32 bg-gradient-to-b from-[var(--color-primary-400)] to-[var(--color-secondary-200)]" />
              )}
              
              <div className="grid lg:grid-cols-[auto,1fr] gap-8">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[var(--color-primary-400)] to-primary flex items-center justify-center mb-4 shadow-lg">
                    <step.icon className="w-14 h-14 text-white" />
                  </div>
                  <Badge className="bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/20">
                    {step.timeline}
                  </Badge>
                </div>

                <Card className="p-8 bg-[var(--dark-bg-secondary)]/60 backdrop-blur-sm border-[var(--dark-surface)] hover:border-[var(--color-primary-400)]/50 transition-all duration-300">
                  <div className="text-6xl text-[var(--color-primary-400)]/20 mb-4">{step.number}</div>
                  <h3 className="text-white mb-2">{step.title}</h3>
                  <p className="text-[var(--color-primary-400)] mb-4">{step.subtitle}</p>
                  <p className="text-[var(--dark-text-muted)] mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-3">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-400)] shrink-0 mt-0.5" />
                        <span className="text-white">{detail}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA After Process */}
      <section className="py-12 bg-[var(--dark-bg)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Button 
            size="lg"
            onClick={() => onNavigate("contact")}
            className="bg-[var(--color-primary-400)] hover:bg-primary text-white transition-all hover:scale-105 min-w-[44px] min-h-[44px]"
            aria-label="Start building your team"
          >
            Start Your Build
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Button>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 lg:py-28 bg-[var(--dark-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-white mb-4">
              What makes SageStone Inc <span className="text-[var(--color-primary-400)]">different</span>
            </h2>
            <p className="text-xl text-[var(--dark-text-muted)]">
              We build teams that help businesses run smarter, not harder.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center bg-[var(--dark-bg-secondary)]/50 backdrop-blur-sm border-[var(--dark-surface)] hover:border-[var(--color-primary-400)]/50 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-400)]/20 to-accent/10 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-[var(--color-primary-400)]" />
                </div>
                <h4 className="text-white mb-3">{feature.title}</h4>
                <p className="text-[var(--dark-text-muted)]">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-[var(--dark-bg)]">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="p-8 bg-[var(--dark-bg-secondary)]/60 backdrop-blur-sm border-[var(--color-primary-400)]/50 text-center">
            <div className="flex gap-1 justify-center mb-4" role="img" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="text-xl text-white mb-4 leading-relaxed">
              "From first call to fully operational in 2 weeks. The team at SageStone has been exceptional. Real accountability."
            </blockquote>
            <cite className="text-[var(--dark-text-muted)] not-italic">
              — Priya Sharma, COO at CloudSync
            </cite>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[var(--color-primary-400)] via-primary to-[var(--color-primary-400)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-white mb-6">
                Build your team. Scale your operations.
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Talk to us about your goals — we'll help you get the right people in place within days.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  onClick={() => onNavigate("contact")}
                  className="bg-white hover:bg-white/90 text-[var(--color-primary-400)] transition-all hover:scale-105 min-w-[44px] min-h-[44px]"
                  aria-label="Book a free consult"
                >
                  <span className="text-[var(--color-primary-400)]">Book a free consult</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-[var(--color-primary-400)]" aria-hidden="true" />
                </Button>
                <Button 
                  size="lg"
                  onClick={() => onNavigate("pricing")}
                  variant="outline"
                  className="border-2 border-white bg-transparent hover:bg-white/15 min-w-[44px] min-h-[44px] group"
                  aria-label="See pricing plans"
                >
                  <span className="text-white group-hover:text-white">See pricing plans</span>
                </Button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src={heroImage}
                alt="Professional team collaboration - business people discussing strategy"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-[var(--dark-bg)] border-t border-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[var(--dark-text-muted)]">
              <strong className="text-white">SageStone Inc BPO Onboarding Process:</strong> Fast 2-week team setup with discovery, recruitment of trained support specialists, 
              comprehensive onboarding with tool integration and workflow training, plus ongoing optimization and performance reviews for continuous improvement.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
