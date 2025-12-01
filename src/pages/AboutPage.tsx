import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollAnimation } from "../components/ScrollAnimation";
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
    <div className="min-h-screen bg-[#0A0118]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0118] via-[#1A0B2E] to-[#0A0118] py-20 lg:py-28">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#B14EFF]/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-[#B14EFF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#B14EFF]/10 text-[#B14EFF] border-[#B14EFF]/30">
              Meet Our Team of Experts
            </Badge>
            <h1 className="text-white mb-6">
              A diverse team of <span className="text-[#B14EFF]">operational, tech, and customer success</span> experts
            </h1>
            <p className="text-xl text-[#C4B8D4] leading-relaxed">
              At Sagestone Inc., we are united by our passion for helping businesses scale smarter. 
              With decades of combined experience across digital operations, e-commerce, project management, 
              and business transformation, we bring practical know-how to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats Bar */}
      <section className="py-6 bg-[#1A0B2E]/50 border-y border-[#2A1B3D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamCredentials.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#B14EFF] mb-1">{stat.value}</div>
                <p className="text-sm text-[#C4B8D4]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Narrative Section */}
      <section className="py-20 lg:py-28 bg-[#0A0118]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeInLeft">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden border border-[#2A1B3D]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3MzI5NDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="SageStone team of experts collaborating"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118]/80 to-transparent" />
                </div>
                
                {/* Credentials Card */}
                <Card className="absolute -bottom-6 -right-6 p-6 bg-[#1A0B2E] border-[#2A1B3D] max-w-xs">
                  <h4 className="text-white mb-3">Team Credentials</h4>
                  <div className="space-y-2 text-sm text-[#C4B8D4]">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#B14EFF]" />
                      <span>Lean Six Sigma Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#B14EFF]" />
                      <span>Advanced IT & PM Degrees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#B14EFF]" />
                      <span>USA & Philippines Teams</span>
                    </div>
                  </div>
                </Card>
                
                {/* Glow effect */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#B14EFF]/30 rounded-full blur-2xl" aria-hidden="true" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight">
              <Badge className="mb-6 bg-[#B14EFF]/10 text-[#B14EFF] border-[#B14EFF]/20">
                Our Story
              </Badge>
              <h2 className="text-white mb-6">
                Built by operators who believe in <span className="text-[#B14EFF]">better outsourcing</span>
              </h2>
              <div className="space-y-4 text-lg text-[#C4B8D4] leading-relaxed">
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
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0A0118] to-[#1A0B2E]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[#B14EFF]/10 text-[#B14EFF] border-[#B14EFF]/20">
              Our Expertise
            </Badge>
            <h2 className="text-white mb-4">
              Specialists who <span className="text-[#B14EFF]">deliver results</span>
            </h2>
            <p className="text-xl text-[#C4B8D4]">
              Our team brings together expertise across multiple domains
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="p-6 bg-[#1A0B2E]/50 backdrop-blur-sm border-[#2A1B3D] hover:border-[#B14EFF]/50 transition-all text-center h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B14EFF]/20 to-[#8E3AFF]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <area.icon className="w-8 h-8 text-[#B14EFF]" />
                  </div>
                  <h4 className="text-white mb-3">{area.title}</h4>
                  <p className="text-[#C4B8D4]">{area.description}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience & Certifications */}
      <section className="py-20 lg:py-28 bg-[#1A0B2E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Industry Experience */}
            <ScrollAnimation animation="fadeInLeft">
              <Card className="p-8 bg-[#0A0118]/50 border-[#2A1B3D] h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#B14EFF]/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-[#B14EFF]" />
                  </div>
                  <h3 className="text-white">Industry Experience</h3>
                </div>
                <p className="text-[#C4B8D4] mb-6">
                  Our team has hands-on experience across multiple industries, bringing diverse perspectives to every client engagement.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {industryExperience.map((industry, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B14EFF] shrink-0" />
                      <span className="text-sm text-[#C4B8D4]">{industry}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollAnimation>

            {/* Certifications */}
            <ScrollAnimation animation="fadeInRight">
              <Card className="p-8 bg-[#0A0118]/50 border-[#2A1B3D] h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#B14EFF]/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#B14EFF]" />
                  </div>
                  <h3 className="text-white">Certifications & Training</h3>
                </div>
                <p className="text-[#C4B8D4] mb-6">
                  We invest in continuous learning and professional development to ensure we deliver best-in-class service.
                </p>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B14EFF] shrink-0" />
                      <span className="text-sm text-[#C4B8D4]">{cert}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#1A0B2E] to-[#0A0118]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[#B14EFF]/10 text-[#B14EFF] border-[#B14EFF]/20">
              Global Reach
            </Badge>
            <h2 className="text-white mb-4">
              Specialists from <span className="text-[#B14EFF]">around the world</span>
            </h2>
            <p className="text-xl text-[#C4B8D4]">
              Our team includes specialists from the USA and the Philippines with multinational exposure, 
              bringing global perspectives and 24/7 coverage to your operations.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <Card className="p-8 bg-[#1A0B2E]/50 border-[#2A1B3D] text-center h-full">
                <Globe className="w-12 h-12 text-[#B14EFF] mx-auto mb-4" />
                <h4 className="text-white mb-2">Global Coverage</h4>
                <p className="text-sm text-[#C4B8D4]">
                  Teams strategically located to provide round-the-clock support for your business
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={100}>
              <Card className="p-8 bg-[#1A0B2E]/50 border-[#2A1B3D] text-center h-full">
                <Users className="w-12 h-12 text-[#8E3AFF] mx-auto mb-4" />
                <h4 className="text-white mb-2">Diverse Expertise</h4>
                <p className="text-sm text-[#C4B8D4]">
                  Multinational team with experience across cultures and business practices
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={200}>
              <Card className="p-8 bg-[#1A0B2E]/50 border-[#2A1B3D] text-center h-full">
                <Lightbulb className="w-12 h-12 text-[#FF72E1] mx-auto mb-4" />
                <h4 className="text-white mb-2">Innovation Focus</h4>
                <p className="text-sm text-[#C4B8D4]">
                  Combining best practices from different markets to drive continuous improvement
                </p>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-[#0A0118]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fadeInUp" className="text-center mb-12">
              <h2 className="text-white mb-4">
                Our <span className="text-[#B14EFF]">mission</span>
              </h2>
            </ScrollAnimation>
            
            <Card className="p-12 text-center bg-[#1A0B2E]/50 border-[#2A1B3D]" style={{ borderTopColor: '#B14EFF', borderTopWidth: '2px' }}>
              <blockquote className="text-2xl text-white leading-relaxed mb-6">
                "To empower growing businesses with <span className="text-[#B14EFF]">accountable people</span> and
                <span className="text-[#B14EFF]"> efficient processes.</span>"
              </blockquote>
              <p className="text-lg text-[#C4B8D4] leading-relaxed">
                SageStone Inc. is your partner for tailored virtual assistance, intelligent automation, 
                and scalable support—powered by people with real experience and a commitment to your success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0A0118] to-[#1A0B2E]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-white mb-4">
              Our <span className="text-[#B14EFF]">values</span>
            </h2>
            <p className="text-xl text-[#C4B8D4]">
              The principles that guide every decision we make
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="p-8 text-center bg-[#1A0B2E]/50 border-[#2A1B3D] hover:border-[#B14EFF]/50 transition-colors h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B14EFF]/20 to-[#8E3AFF]/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-[#B14EFF]" />
                  </div>
                  <h4 className="text-white mb-3">{value.title}</h4>
                  <p className="text-[#C4B8D4]">{value.description}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-20 lg:py-28 bg-[#1A0B2E]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-[#FF72E1]/10 text-[#FF72E1] border-[#FF72E1]/20">
              Core Skills
            </Badge>
            <h2 className="text-white mb-4">
              What we <span className="text-[#B14EFF]">bring to the table</span>
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
                className="px-4 py-2 bg-[#0A0118]/50 text-[#C4B8D4] border-[#2A1B3D] hover:border-[#B14EFF]/50 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#B14EFF] via-[#8E3AFF] to-[#B14EFF] relative overflow-hidden">
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
              className="bg-white hover:bg-white/90 text-[#B14EFF] font-semibold transition-all hover:scale-105 min-w-[44px] min-h-[44px]"
              aria-label="Start building your team"
            >
              Start your build
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-[#0A0118] border-t border-[#2A1B3D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[#C4B8D4]">
              <strong className="text-white">About SageStone Inc:</strong> A team of seasoned experts in digital operations, e-commerce, 
              project management, and customer success. With experience spanning SaaS, real estate, banking, BPO, and tech consulting, 
              we deliver BPO and virtual assistance services built on accountability, clarity, partnership, and growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
