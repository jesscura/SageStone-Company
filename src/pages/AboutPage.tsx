import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { SEO } from "../components/SEO";
import { 
  Target, 
  Users, 
  TrendingUp, 
  Heart, 
  ArrowRight, 
  Award, 
  Globe, 
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Cog,
  BarChart3,
  Zap
} from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Target,
      title: "Accountability",
      description: "We own outcomes, not just tasks. Every team member takes responsibility for results, not hours logged."
    },
    {
      icon: Users,
      title: "Clarity",
      description: "Transparent communication, honest timelines, and clear expectations—always. No surprises, no runarounds."
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "Your success is our success. We build relationships, not transactions. Your goals become our goals."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous improvement for our clients, our team members, and our processes. We're always learning."
    }
  ];

  const expertiseAreas = [
    {
      icon: Briefcase,
      title: "Operational Leadership",
      description: "Streamlined business processes and workflow design from startups to global enterprises"
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Proven results increasing client satisfaction and retention for top brands"
    },
    {
      icon: Cog,
      title: "Project Management",
      description: "Certified in Lean Six Sigma methods and experts in strategic change management"
    },
    {
      icon: Zap,
      title: "Tech Expertise",
      description: "Shopify, property management, CRM, web design, and automation tools"
    }
  ];

  const teamCredentials = [
    { label: "Years Combined Experience", value: "25+" },
    { label: "Industries Covered", value: "10+" },
    { label: "Projects Delivered", value: "500+" },
    { label: "Countries Served", value: "15+" }
  ];

  const industryExperience = [
    "E-commerce & Shopify",
    "Real Estate & Property Management",
    "Banking & Financial Services",
    "BPO & Contact Centers",
    "SaaS & Tech Startups",
    "Healthcare Administration"
  ];

  const certifications = [
    "Lean Six Sigma White Belt",
    "Project Management Professional",
    "IT Management Certification",
    "Customer Success Management",
    "Process Optimization Specialist"
  ];

  return (
    <>
      <SEO
        title="About Us | SageStone Inc - Your Trusted BPO Partner"
        description="Learn about SageStone Inc, a leading BPO agency offering virtual assistants, customer support outsourcing, and eCommerce management. Meet our team of experienced professionals dedicated to scaling your business."
        keywords="about SageStone, BPO company, virtual assistant team, customer support experts, eCommerce specialists, business process outsourcing team"
        canonical="https://www.sagestoneinc.com/aboutus"
        ogTitle="About SageStone Inc | BPO & Virtual Operations Experts"
        ogDescription="Meet the team behind SageStone Inc. We're a dedicated BPO agency helping businesses scale through expert virtual operations, customer support, and back-office management."
      />
      <div className="min-h-screen bg-[var(--dark-bg)]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--dark-bg)] via-[var(--dark-bg-secondary)] to-[var(--dark-bg)] py-20 lg:py-28">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-[var(--color-primary-400)]/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-[var(--color-primary-400)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/30">
              Meet Our Team of Experts
            </Badge>
            <h1 className="text-white mb-6">
              A diverse team of <span className="text-[var(--color-primary-400)]">operational, tech, and customer success</span> experts
            </h1>
            <p className="text-xl text-[var(--dark-text-muted)] leading-relaxed">
              At Sagestone Inc., we are united by our passion for helping businesses scale smarter. 
              With decades of combined experience across digital operations, e-commerce, project management, 
              and business transformation, we bring practical know-how to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats Bar */}
      <section className="py-6 bg-[var(--dark-bg-secondary)]/50 border-y border-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamCredentials.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[var(--color-primary-400)] mb-1">{stat.value}</div>
                <p className="text-sm text-[var(--dark-text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Narrative Section */}
      <section className="py-20 lg:py-28 bg-[var(--dark-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeInLeft">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden border border-[var(--dark-surface)]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3MzI5NDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="SageStone team of experts collaborating"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)]/80 to-transparent" />
                </div>
                
                {/* Credentials Card */}
                <Card className="absolute -bottom-6 -right-6 p-6 bg-[var(--dark-bg-secondary)] border-[var(--dark-surface)] max-w-xs">
                  <h4 className="text-white mb-3">Team Credentials</h4>
                  <div className="space-y-2 text-sm text-[var(--dark-text-muted)]">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[var(--color-primary-400)]" />
                      <span>Lean Six Sigma Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[var(--color-primary-400)]" />
                      <span>Advanced IT & PM Degrees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[var(--color-primary-400)]" />
                      <span>USA & Philippines Teams</span>
                    </div>
                  </div>
                </Card>
                
                {/* Glow effect */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--color-primary-400)]/30 rounded-full blur-2xl" aria-hidden="true" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight">
              <Badge className="mb-6 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/20">
                Our Story
              </Badge>
              <h2 className="text-white mb-6">
                Built by operators who believe in <span className="text-[var(--color-primary-400)]">better outsourcing</span>
              </h2>
              <div className="space-y-4 text-lg text-[var(--dark-text-muted)] leading-relaxed">
                <p>
                  Our diverse backgrounds span industries like SaaS, real estate, banking, BPO, and tech consulting. 
                  We've seen the same problem over and over: outsourcing companies that prioritized volume over value.
                </p>
                <p>
                  SageStone Inc was founded to change that — to build a BPO where accountability matters more than scale, 
                  where team members are invested in your success because they're treated like partners, not vendors.
                </p>
                <p>
                  We combine agile thinking with practical know-how: from launching products and leading high-performance 
                  teams to transforming operational KPIs and delivering measurable growth.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[var(--dark-bg)] to-[var(--dark-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/20">
              Our Expertise
            </Badge>
            <h2 className="text-white mb-4">
              Specialists who <span className="text-[var(--color-primary-400)]">deliver results</span>
            </h2>
            <p className="text-xl text-[var(--dark-text-muted)]">
              Our team brings together expertise across multiple domains
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="p-6 bg-[var(--dark-bg-secondary)]/50 backdrop-blur-sm border-[var(--dark-surface)] hover:border-[var(--color-primary-400)]/50 transition-all text-center h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-400)]/20 to-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <area.icon className="w-8 h-8 text-[var(--color-primary-400)]" />
                  </div>
                  <h4 className="text-white mb-3">{area.title}</h4>
                  <p className="text-[var(--dark-text-muted)]">{area.description}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience & Certifications */}
      <section className="py-20 lg:py-28 bg-[var(--dark-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Industry Experience */}
            <ScrollAnimation animation="fadeInLeft">
              <Card className="p-8 bg-[var(--dark-bg)]/50 border-[var(--dark-surface)] h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-400)]/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-[var(--color-primary-400)]" />
                  </div>
                  <h3 className="text-white">Industry Experience</h3>
                </div>
                <p className="text-[var(--dark-text-muted)] mb-6">
                  Our team has hands-on experience across multiple industries, bringing diverse perspectives to every client engagement.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {industryExperience.map((industry, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-400)] shrink-0" />
                      <span className="text-sm text-[var(--dark-text-muted)]">{industry}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollAnimation>

            {/* Certifications */}
            <ScrollAnimation animation="fadeInRight">
              <Card className="p-8 bg-[var(--dark-bg)]/50 border-[var(--dark-surface)] h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-400)]/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[var(--color-primary-400)]" />
                  </div>
                  <h3 className="text-white">Certifications & Training</h3>
                </div>
                <p className="text-[var(--dark-text-muted)] mb-6">
                  We invest in continuous learning and professional development to ensure we deliver best-in-class service.
                </p>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-400)] shrink-0" />
                      <span className="text-sm text-[var(--dark-text-muted)]">{cert}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[var(--dark-bg-secondary)] to-[var(--dark-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/20">
              Global Reach
            </Badge>
            <h2 className="text-white mb-4">
              Specialists from <span className="text-[var(--color-primary-400)]">around the world</span>
            </h2>
            <p className="text-xl text-[var(--dark-text-muted)]">
              Our team includes specialists from the USA and the Philippines with multinational exposure, 
              bringing global perspectives and 24/7 coverage to your operations.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <Card className="p-8 bg-[var(--dark-bg-secondary)]/50 border-[var(--dark-surface)] text-center h-full">
                <Globe className="w-12 h-12 text-[var(--color-primary-400)] mx-auto mb-4" />
                <h4 className="text-white mb-2">Global Coverage</h4>
                <p className="text-sm text-[var(--dark-text-muted)]">
                  Teams strategically located to provide round-the-clock support for your business
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={100}>
              <Card className="p-8 bg-[var(--dark-bg-secondary)]/50 border-[var(--dark-surface)] text-center h-full">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-white mb-2">Diverse Expertise</h4>
                <p className="text-sm text-[var(--dark-text-muted)]">
                  Multinational team with experience across cultures and business practices
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={200}>
              <Card className="p-8 bg-[var(--dark-bg-secondary)]/50 border-[var(--dark-surface)] text-center h-full">
                <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-white mb-2">Innovation Focus</h4>
                <p className="text-sm text-[var(--dark-text-muted)]">
                  Combining best practices from different markets to drive continuous improvement
                </p>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-[var(--dark-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fadeInUp" className="text-center mb-12">
              <h2 className="text-white mb-4">
                Our <span className="text-[var(--color-primary-400)]">mission</span>
              </h2>
            </ScrollAnimation>
            
            <Card className="p-12 text-center bg-[var(--dark-bg-secondary)]/50 border-[var(--dark-surface)]" style={{ borderTopColor: 'var(--color-primary-400)', borderTopWidth: '2px' }}>
              <blockquote className="text-2xl text-white leading-relaxed mb-6">
                "To empower growing businesses with <span className="text-[var(--color-primary-400)]">accountable people</span> and
                <span className="text-[var(--color-primary-400)]"> efficient processes.</span>"
              </blockquote>
              <p className="text-lg text-[var(--dark-text-muted)] leading-relaxed">
                SageStone Inc. is your partner for tailored virtual assistance, intelligent automation, 
                and scalable support—powered by people with real experience and a commitment to your success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[var(--dark-bg)] to-[var(--dark-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-white mb-4">
              Our <span className="text-[var(--color-primary-400)]">values</span>
            </h2>
            <p className="text-xl text-[var(--dark-text-muted)]">
              The principles that guide every decision we make
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="p-8 text-center bg-[var(--dark-bg-secondary)]/50 border-[var(--dark-surface)] hover:border-[var(--color-primary-400)]/50 transition-colors h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-400)]/20 to-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-[var(--color-primary-400)]" />
                  </div>
                  <h4 className="text-white mb-3">{value.title}</h4>
                  <p className="text-[var(--dark-text-muted)]">{value.description}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-20 lg:py-28 bg-[var(--dark-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Core Skills
            </Badge>
            <h2 className="text-white mb-4">
              What we <span className="text-[var(--color-primary-400)]">bring to the table</span>
            </h2>
          </ScrollAnimation>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Customer Success",
              "Project Change Management",
              "Process Optimization",
              "Strategic Growth",
              "Property Management",
              "Workflow Automation",
              "Web Design",
              "CRM Management",
              "Data Analysis",
              "Team Leadership",
              "Quality Assurance",
              "Training & Development"
            ].map((skill, index) => (
              <Badge 
                key={index} 
                className="px-4 py-2 bg-[var(--dark-bg)]/50 text-[var(--dark-text-muted)] border-[var(--dark-surface)] hover:border-[var(--color-primary-400)]/50 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[var(--color-primary-400)] via-primary to-[var(--color-primary-400)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-white mb-6">
              Ready to work with experts who care?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's build something that helps your business run smarter, not harder.
            </p>
            <Button 
              size="lg"
              onClick={() => onNavigate("contact")}
              className="bg-white hover:bg-white/90 text-[var(--color-primary-400)] font-semibold transition-all hover:scale-105 min-w-[44px] min-h-[44px]"
              aria-label="Start building your team"
            >
              Start your build
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-[var(--dark-bg)] border-t border-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[var(--dark-text-muted)]">
              <strong className="text-white">About SageStone Inc:</strong> A team of seasoned experts in digital operations, e-commerce, 
              project management, and customer success. With experience spanning SaaS, real estate, banking, BPO, and tech consulting, 
              we deliver BPO and virtual assistance services built on accountability, clarity, partnership, and growth.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
