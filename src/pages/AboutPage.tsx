import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { Target, Users, TrendingUp, Heart, ArrowRight, Award, Globe, CheckCircle2, Linkedin } from "lucide-react";

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

  const teamMembers = [
    {
      name: "Jesel Cura",
      role: "Founder & CEO",
      bio: "10+ years in Customer Success and Operations. Former Director of Operations leading global teams across eCommerce, property management, and customer service.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8fHwxNjk2MDAwMDAwfDA&ixlib=rb-4.0.3&q=80&w=400",
      linkedin: "#"
    },
    {
      name: "Maria Santos",
      role: "Operations Manager",
      bio: "Expert in process optimization and team management. Ensures smooth operations and consistent service delivery across all client engagements.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8fHwxNjk2MDAwMDAwfDA&ixlib=rb-4.0.3&q=80&w=400",
      linkedin: "#"
    },
    {
      name: "David Chen",
      role: "Client Success Lead",
      bio: "Dedicated to building lasting client relationships. Bridges communication between clients and operations teams to ensure exceptional outcomes.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fHx8MTY5NjAwMDAwMHww&ixlib=rb-4.0.3&q=80&w=400",
      linkedin: "#"
    },
    {
      name: "Sarah Johnson",
      role: "Training & Quality Lead",
      bio: "Develops training programs and quality standards. Ensures every team member is equipped to deliver excellence from day one.",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8fHwxNjk2MDAwMDAwfDA&ixlib=rb-4.0.3&q=80&w=400",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F3E8FF] via-white to-[#F9F8FB] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white/90 text-[#8E3AFF] border-[#B14EFF]/30">
              Meet the Founder — 10 Years in Operations & Customer Success
            </Badge>
            <h1 className="text-[#1C1B20] mb-6">
              Built by operators who believe in <span className="gradient-text">better outsourcing</span>
            </h1>
            <p className="text-xl text-[#6D6A73] leading-relaxed">
              Founded by Jesel Cura, a Customer Success Manager and Director of Operations with 10 years 
              of experience leading global teams. Jesel's background in eCommerce, property management, 
              and customer service inspired SageStone Inc — a BPO built for trust, not turnover.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[#F3E8FF] text-[#8E3AFF] border-[#B14EFF]/20">
                The Story Behind SageStone Inc
              </Badge>
              <h2 className="text-[#1C1B20] mb-6">
                Why <span className="gradient-text">Jesel Cura</span> started SageStone Inc
              </h2>
              <div className="space-y-4 text-lg text-[#6D6A73] leading-relaxed">
                <p>
                  After 10 years managing customer success and operations teams across eCommerce, SaaS, 
                  and property management, Jesel saw the same problem over and over: outsourcing companies 
                  that prioritized volume over value.
                </p>
                <p>
                  Teams were treated like resources, not people. Clients were sold promises, not partnerships. 
                  The result? High turnover, low quality, and frustrated founders.
                </p>
                <p>
                  SageStone Inc was founded to change that. To build a BPO where accountability matters more than scale. 
                  Where team members are invested in your success because they're treated like partners, not vendors.
                </p>
                <p>
                  Every process we streamline means one less fire for you to put out. That's the SageStone Inc difference.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyNjkzNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Jesel Cura, Founder of SageStone Inc"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8E3AFF]/20 to-transparent" />
              </div>
              
              {/* Founder Credentials */}
              <Card className="absolute -bottom-6 -right-6 p-6 bg-white border-[#E7E2EE] shadow-xl max-w-xs">
                <h4 className="text-[#1C1B20] mb-3">Jesel Cura</h4>
                <div className="space-y-2 text-sm text-[#6D6A73]">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#8E3AFF]" />
                    <span>10 years in Customer Success</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#8E3AFF]" />
                    <span>Director of Operations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#8E3AFF]" />
                    <span>Global Team Leadership</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-[#F9F8FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[#1C1B20] mb-4">
                Our <span className="gradient-text">mission</span>
              </h2>
            </div>
            
            <Card className="p-12 text-center border-[#E7E2EE] gradient-border">
              <blockquote className="text-2xl text-[#1C1B20] leading-relaxed mb-6">
                "To empower growing businesses with <span className="gradient-text">accountable people</span> and 
                <span className="gradient-text"> efficient processes.</span>"
              </blockquote>
              <p className="text-lg text-[#6D6A73] leading-relaxed">
                We make outsourcing personal, transparent, and built to last. Every business deserves teams 
                that care as much about outcomes as they do.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#1C1B20] mb-4">
              Our <span className="gradient-text">values</span>
            </h2>
            <p className="text-xl text-[#6D6A73]">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center border-[#E7E2EE] hover:border-[#B14EFF]/30 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B14EFF]/10 to-[#FF72E1]/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#8E3AFF]" />
                </div>
                <h4 className="text-[#1C1B20] mb-3">{value.title}</h4>
                <p className="text-[#6D6A73]">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 lg:py-28 bg-[#F9F8FB]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-white text-[#8E3AFF] border-[#B14EFF]/20">
              Meet Our Team
            </Badge>
            <h2 className="text-[#1C1B20] mb-4">
              The <span className="gradient-text">people</span> behind SageStone Inc
            </h2>
            <p className="text-xl text-[#6D6A73]">
              Experienced professionals dedicated to delivering exceptional results
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="overflow-hidden border-[#E7E2EE] hover:border-[#B14EFF]/30 hover:shadow-xl transition-all h-full">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8E3AFF]/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-[#1C1B20]">{member.name}</h4>
                        <p className="text-sm text-[#8E3AFF]">{member.role}</p>
                      </div>
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 rounded-lg bg-[#F3E8FF] hover:bg-[#B14EFF] flex items-center justify-center transition-colors group"
                        aria-label={`Connect with ${member.name} on LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4 text-[#8E3AFF] group-hover:text-white" aria-hidden="true" />
                      </a>
                    </div>
                    <p className="text-sm text-[#6D6A73]">{member.bio}</p>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#F3E8FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#1C1B20] mb-4">
              <span className="gradient-text">10 years</span> of proven expertise
            </h2>
            <p className="text-xl text-[#6D6A73]">
              Experience across industries that matter to your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "eCommerce & Shopify",
                items: [
                  "Customer support operations",
                  "Store management & fulfillment",
                  "Returns and refund coordination",
                  "Product catalog management"
                ]
              },
              {
                title: "Property Management",
                items: [
                  "Tenant communication",
                  "Maintenance coordination",
                  "Leasing administration",
                  "Property operations support"
                ]
              },
              {
                title: "Customer Success",
                items: [
                  "Onboarding and training",
                  "CSAT and NPS programs",
                  "Support team management",
                  "Process optimization"
                ]
              }
            ].map((area, index) => (
              <Card key={index} className="p-6 border-[#E7E2EE] hover:shadow-lg transition-shadow">
                <h4 className="text-[#1C1B20] mb-4">{area.title}</h4>
                <ul className="space-y-3">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#6D6A73]">
                      <CheckCircle2 className="w-4 h-4 text-[#8E3AFF] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 bg-[#F9F8FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl gradient-text mb-2">10</div>
              <p className="text-[#6D6A73]">Years of Experience</p>
            </div>
            <div>
              <div className="text-5xl gradient-text mb-2">500+</div>
              <p className="text-[#6D6A73]">Teams Built</p>
            </div>
            <div>
              <div className="text-5xl gradient-text mb-2">15+</div>
              <p className="text-[#6D6A73]">Countries Served</p>
            </div>
            <div>
              <div className="text-5xl gradient-text mb-2">98%</div>
              <p className="text-[#6D6A73]">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">
            Join our journey
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build something that helps your business run smarter, not harder.
          </p>
          <Button 
            size="lg"
            onClick={() => onNavigate("contact")}
            className="bg-white !text-[#8E3AFF] hover:bg-white/90 transition-lift hover-lift min-w-[44px] min-h-[44px]"
            aria-label="Start building your team"
          >
            <span className="text-[#8E3AFF]">Start your build</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#8E3AFF]" aria-hidden="true" />
          </Button>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-white border-t border-[#E7E2EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[#6D6A73]">
              <strong>About Jesel Cura & SageStone Inc:</strong> Founded by a Customer Success and Operations expert with 10 years of global experience 
              in eCommerce, property management, and customer service. SageStone Inc delivers BPO and virtual assistance services built on accountability, 
              clarity, partnership, and growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
