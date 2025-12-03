import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare } from "lucide-react";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <>
      <SEO
        title="Contact Us | Get Your Free BPO Consultation | SageStone Inc"
        description="Ready to scale your business? Contact SageStone Inc for a free consultation. We'll create a tailored plan for your customer support, virtual assistant, or eCommerce needs. Response within 24 hours."
        keywords="contact BPO agency, free consultation, virtual assistant inquiry, customer support quote, outsourcing consultation"
        canonical="https://www.sagestoneinc.com/contact"
        ogTitle="Contact SageStone Inc | Free BPO Consultation"
        ogDescription="Get your free consultation today. Tell us about your business needs and we'll create a tailored plan. Response within 24 hours."
      />
      <div className="min-h-screen bg-[var(--dark-bg)]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--dark-bg)] via-[var(--dark-bg-secondary)] to-[var(--dark-bg)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/30">
              BPO Consultation | Virtual Assistant Inquiry | Outsourcing Contact
            </Badge>
            <h1 className="text-white mb-6">
              Let's build something <span className="text-[var(--color-primary-400)]">that scales</span>
            </h1>
            <p className="text-xl text-[var(--dark-text-muted)] leading-relaxed">
              Tell us what your business needs. We'll reply within one business day 
              with a tailored plan and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28 bg-[var(--dark-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-white mb-6">Send us a message</h2>
              <Card className="p-8 bg-[var(--dark-bg-secondary)]/60 backdrop-blur-sm border-[var(--dark-surface)] shadow-lg">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-white">
                        First Name *
                      </label>
                      <Input 
                        id="firstName"
                        placeholder="John"
                        required
                        className="rounded-lg border-[var(--dark-surface)] bg-[var(--dark-bg)]/50 text-white placeholder:text-[var(--dark-text-muted)] focus:border-[var(--color-primary-400)] focus:ring-[var(--color-primary-400)]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-white">
                        Last Name *
                      </label>
                      <Input 
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="rounded-lg border-[var(--dark-surface)] bg-[var(--dark-bg)]/50 text-white placeholder:text-[var(--dark-text-muted)] focus:border-[var(--color-primary-400)] focus:ring-[var(--color-primary-400)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white">
                      Work Email *
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="rounded-lg border-[var(--dark-surface)] bg-[var(--dark-bg)]/50 text-white placeholder:text-[var(--dark-text-muted)] focus:border-[var(--color-primary-400)] focus:ring-[var(--color-primary-400)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-white">
                      Company
                    </label>
                    <Input 
                      id="company"
                      placeholder="Your Company Inc"
                      className="rounded-lg border-[var(--dark-surface)] bg-[var(--dark-bg)]/50 text-white placeholder:text-[var(--dark-text-muted)] focus:border-[var(--color-primary-400)] focus:ring-[var(--color-primary-400)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-white">
                      What service are you interested in?
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-lg border-[var(--dark-surface)] bg-[var(--dark-bg)]/50 text-white focus:border-[var(--color-primary-400)] focus:ring-[var(--color-primary-400)] px-3 py-2"
                    >
                      <option value="">Select a service</option>
                      <option value="customer-support">Customer Support Outsourcing</option>
                      <option value="virtual-assistant">Virtual Assistance</option>
                      <option value="ecommerce">eCommerce & Shopify Management</option>
                      <option value="back-office">Back-Office Solutions</option>
                      <option value="property">Property Operations Support</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-white">
                      Tell us about your needs *
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="What challenges are you looking to solve? What does your ideal team look like?"
                      rows={5}
                      required
                      className="rounded-lg border-[var(--dark-surface)] bg-[var(--dark-bg)]/50 text-white placeholder:text-[var(--dark-text-muted)] focus:border-[var(--color-primary-400)] focus:ring-[var(--color-primary-400)] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[var(--color-primary-400)] hover:bg-primary text-white transition-all hover:scale-105 min-w-[44px] min-h-[44px]"
                    aria-label="Send your message"
                  >
                    Send message
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Button>

                  <p className="text-sm text-[var(--dark-text-muted)] text-center">
                    We'll reply within one business day with a tailored plan
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-white mb-6">Get in touch</h2>
              
              <div className="space-y-6 mb-12">
                <Card className="p-6 bg-[var(--dark-bg-secondary)]/60 backdrop-blur-sm border-[var(--dark-surface)] hover:border-[var(--color-primary-400)]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary-400)]/20 to-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-[var(--color-primary-400)]" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">Email</h4>
                      <a href="mailto:hello@sagestoneinc.com" className="text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors">
                        hello@sagestoneinc.com
                      </a>
                      <p className="text-sm text-[var(--dark-text-muted)] mt-1">
                        For general inquiries and support
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-[var(--dark-bg-secondary)]/60 backdrop-blur-sm border-[var(--dark-surface)] hover:border-[var(--color-primary-400)]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary-400)]/20 to-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-[var(--color-primary-400)]" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">Phone</h4>
                      <a href="tel:+12149452234" className="text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors">
                        +1 (214) 945-2234
                      </a>
                      <p className="text-sm text-[var(--dark-text-muted)] mt-1">
                        Monday - Friday, 9am - 6pm PST
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-[var(--dark-bg-secondary)]/60 backdrop-blur-sm border-[var(--dark-surface)] hover:border-[var(--color-primary-400)]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary-400)]/20 to-accent/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-6 h-6 text-[var(--color-primary-400)]" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">Schedule a Call</h4>
                      <p className="text-[var(--dark-text-muted)] mb-2">
                        Book a 30-minute discovery call
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[var(--color-primary-400)] text-[var(--color-primary-400)] hover:bg-[var(--color-primary-400)]/10 min-w-[44px] min-h-[44px]"
                        aria-label="Book a call now"
                      >
                        Book now
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-[var(--dark-bg-secondary)]/60 backdrop-blur-sm border-[var(--dark-surface)] hover:border-[var(--color-primary-400)]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary-400)]/20 to-accent/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-[var(--color-primary-400)]" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">Response Time</h4>
                      <p className="text-[var(--dark-text-muted)]">
                        Within one business day<br />
                        Monday - Friday, 9am - 6pm PST
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Quick Links */}
              <div className="bg-[var(--dark-bg-secondary)]/60 backdrop-blur-sm rounded-2xl p-8 border border-[var(--dark-surface)]">
                <h4 className="text-white mb-4">Looking for something specific?</h4>
                <div className="space-y-3">
                  <button 
                    onClick={() => onNavigate("services")}
                    className="w-full flex items-center justify-between text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors"
                  >
                    <span>View our services overview</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onNavigate("pricing")}
                    className="w-full flex items-center justify-between text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors"
                  >
                    <span>View pricing details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onNavigate("case-studies")}
                    className="w-full flex items-center justify-between text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors"
                  >
                    <span>Read our case studies</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onNavigate("careers")}
                    className="w-full flex items-center justify-between text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors"
                  >
                    <span>Join our team (we're hiring!)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[var(--dark-bg-secondary)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              Common <span className="text-[var(--color-primary-400)]">questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How quickly can we get started?",
                a: "Most teams are fully operational within 2 weeks of our first call."
              },
              {
                q: "What industries do you work with?",
                a: "eCommerce, property management, SaaS, and service-based companies."
              },
              {
                q: "Do you work with Shopify stores?",
                a: "Yes! We specialize in Shopify support and eCommerce operations."
              },
              {
                q: "What's your pricing model?",
                a: "Transparent monthly pricing starting at $1,200. No hidden fees."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 bg-[var(--dark-bg-secondary)]/60 backdrop-blur-sm border-[var(--dark-surface)]">
                <h4 className="text-white mb-2">{faq.q}</h4>
                <p className="text-sm text-[var(--dark-text-muted)]">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-[var(--dark-bg)] border-t border-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[var(--dark-text-muted)]">
              <strong className="text-white">Contact SageStone Inc BPO:</strong> Get in touch for virtual assistant services, customer support outsourcing, 
              eCommerce and Shopify support, back-office solutions, and property operations management. 
              We reply within one business day with a tailored plan for your business.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
