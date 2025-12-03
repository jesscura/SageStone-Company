import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollAnimation } from "../components/ScrollAnimation";
import {
  ArrowRight,
  Heart,
  Users,
  TrendingUp,
  Globe,
  Clock,
  Award,
  CheckCircle2,
  MapPin,
  Briefcase
} from "lucide-react";

interface CareersPageProps {
  onNavigate: (page: string) => void;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  const benefits = [
    {
      icon: Globe,
      title: "Work From Anywhere",
      description: "100% remote positions with flexible schedules that fit your lifestyle."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear paths for advancement with ongoing training and development opportunities."
    },
    {
      icon: Users,
      title: "Supportive Team",
      description: "Join a collaborative environment where your contributions are valued and recognized."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We believe happy team members deliver better results. Your wellbeing matters."
    },
    {
      icon: Award,
      title: "Competitive Pay",
      description: "Fair compensation that reflects your skills and experience, plus performance bonuses."
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Choose shifts that work for you across various time zones and schedules."
    }
  ];

  const openPositions = [
    {
      title: "Customer Support Specialist",
      type: "Full-time",
      location: "Remote",
      description: "Help clients deliver exceptional customer experiences through email, chat, and voice support.",
      requirements: [
        "Excellent written and verbal English communication",
        "Previous customer service experience preferred",
        "Strong problem-solving skills",
        "Reliable internet connection and quiet workspace"
      ]
    },
    {
      title: "Virtual Assistant",
      type: "Full-time / Part-time",
      location: "Remote",
      description: "Provide administrative support including calendar management, email handling, and data entry.",
      requirements: [
        "Proficiency in Google Workspace and Microsoft Office",
        "Strong organizational and time management skills",
        "Attention to detail",
        "Experience with CRM systems a plus"
      ]
    },
    {
      title: "eCommerce Support Agent",
      type: "Full-time",
      location: "Remote",
      description: "Assist Shopify merchants with order management, customer inquiries, and store operations.",
      requirements: [
        "Experience with Shopify or similar platforms",
        "Understanding of eCommerce operations",
        "Customer-focused mindset",
        "Ability to handle multiple tasks efficiently"
      ]
    },
    {
      title: "Property Coordination Specialist",
      type: "Full-time",
      location: "Remote",
      description: "Support property managers with tenant communication, maintenance coordination, and admin tasks.",
      requirements: [
        "Experience in property management or real estate",
        "Strong communication and follow-up skills",
        "Familiarity with property management software",
        "Professional and empathetic demeanor"
      ]
    },
    {
      title: "Back-Office Operations Associate",
      type: "Full-time",
      location: "Remote",
      description: "Handle data entry, billing support, document processing, and reporting tasks.",
      requirements: [
        "High accuracy in data entry and processing",
        "Experience with spreadsheets and databases",
        "Ability to meet deadlines consistently",
        "Strong analytical skills"
      ]
    }
  ];

  const values = [
    "We invest in your growth with training and mentorship",
    "Your ideas matter - we encourage innovation and feedback",
    "Work with clients across multiple industries",
    "Be part of a company that values accountability over micromanagement"
  ];

  return (
    <>
      <SEO
        title="Careers | Join Our Remote Team | SageStone Inc"
        description="Join SageStone Inc's remote team. We're hiring customer support specialists, virtual assistants, and operations professionals. Work from anywhere with competitive pay and growth opportunities."
        keywords="remote BPO jobs, virtual assistant careers, customer support jobs, work from home opportunities, BPO careers"
        canonical="https://www.sagestoneinc.com/careers"
        ogTitle="Careers at SageStone Inc | Remote BPO Opportunities"
        ogDescription="Join our growing remote team. Customer support, virtual assistant, and operations roles available. Competitive pay, flexible schedule, career growth."
      />
      <div className="min-h-screen bg-[var(--dark-bg)]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--dark-bg)] via-[var(--dark-bg-secondary)] to-[var(--dark-bg)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/30">
                Join Our Team
              </Badge>
              <h1 className="text-white mb-6">
                Build your career with <span className="gradient-text">SageStone Inc</span>
              </h1>
              <p className="text-xl text-[var(--dark-text-muted)] leading-relaxed mb-8">
                We're looking for talented, accountable professionals who want to grow with us. 
                Join a team where your work matters and your development is a priority.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  const positionsSection = document.getElementById('open-positions');
                  positionsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="gradient-bg text-white glow-button transition-lift hover-lift min-w-[44px] min-h-[44px]"
                aria-label="View open positions"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dGVhbSUyMHdvcmtpbmd8ZW58MHx8fHwxNjk2MDAwMDAwfDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Remote team working together"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-white mb-4">
              Why work with <span className="gradient-text">SageStone Inc</span>
            </h2>
            <p className="text-xl text-[var(--dark-text-muted)]">
              We believe in building teams, not just filling roles
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="p-6 border-border hover:border-[var(--color-primary-400)]/30 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary-400)]/10 to-accent/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h4 className="text-white mb-2">{benefit.title}</h4>
                  <p className="text-[var(--dark-text-muted)] text-sm">{benefit.description}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeInLeft">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cmVtb3RlJTIwd29ya3xlbnwwfHx8fDE2OTYwMDAwMDB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Our remote work culture"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" aria-hidden="true" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight">
              <Badge className="mb-6 bg-white text-primary border-[var(--color-primary-400)]/20">
                Our Culture
              </Badge>
              <h2 className="text-white mb-6">
                Accountability over <span className="gradient-text">micromanagement</span>
              </h2>
              <p className="text-lg text-[var(--dark-text-muted)] leading-relaxed mb-6">
                At SageStone Inc, we trust our team members to deliver results. We provide the training, 
                tools, and support you need to succeed — then we get out of your way.
              </p>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[var(--dark-text-muted)]">{value}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-white mb-4">
              Open <span className="gradient-text">positions</span>
            </h2>
            <p className="text-xl text-[var(--dark-text-muted)]">
              Find your next opportunity with SageStone Inc
            </p>
          </ScrollAnimation>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="p-6 border-border hover:border-[var(--color-primary-400)]/30 hover:shadow-lg transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl text-white">{position.title}</h3>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="bg-[var(--color-primary-100)] text-primary border-none">
                            <Briefcase className="w-3 h-3 mr-1" aria-hidden="true" />
                            {position.type}
                          </Badge>
                          <Badge variant="secondary" className="bg-[var(--color-primary-100)] text-primary border-none">
                            <MapPin className="w-3 h-3 mr-1" aria-hidden="true" />
                            {position.location}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-[var(--dark-text-muted)] mb-4">{position.description}</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {position.requirements.map((req, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-[var(--dark-text-muted)]">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                            {req}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:shrink-0">
                      <Button
                        onClick={() => onNavigate("contact")}
                        className="gradient-bg text-white glow-button w-full lg:w-auto min-w-[44px] min-h-[44px]"
                        aria-label={`Apply for ${position.title}`}
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
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
              Don't see the right role?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We're always looking for talented people. Send us your resume and let's talk about how you can contribute.
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate("contact")}
              className="bg-white !text-primary hover:bg-white/90 transition-lift hover-lift min-w-[44px] min-h-[44px]"
              aria-label="Contact us with your resume"
            >
              <span className="text-primary">Send Your Resume</span>
              <ArrowRight className="w-4 h-4 ml-2 text-primary" aria-hidden="true" />
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[var(--dark-text-muted)]">
              <strong>Careers at SageStone Inc:</strong> Remote customer support jobs, virtual assistant positions, 
              eCommerce support roles, property coordination careers, and back-office operations opportunities. 
              Join our global team and build your career from anywhere.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
