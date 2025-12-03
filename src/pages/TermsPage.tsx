import { Badge } from "../components/ui/badge";
import { SEO } from "../components/SEO";
import { Card } from "../components/ui/card";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { FileText, Mail } from "lucide-react";

interface TermsPageProps {
  onNavigate: (page: string) => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  const lastUpdated = "January 1, 2025";

  return (
    <>
      <SEO
        title="Terms of Service | Service Agreement & Legal Terms | SageStone Inc"
        description="Review SageStone Inc's Terms of Service. Understand our service agreements, payment terms, confidentiality policies, and legal obligations."
        keywords="terms of service, service agreement, legal terms, BPO contract, service level agreement"
        canonical="https://www.sagestoneinc.com/terms"
        ogTitle="Terms of Service | SageStone Inc Service Agreement"
        ogDescription="Review our Terms of Service to understand service agreements, payment terms, confidentiality, and legal obligations."
      />
      <div className="min-h-screen bg-[var(--dark-bg)]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--dark-bg)] via-[var(--dark-bg-secondary)] to-[var(--dark-bg)] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge className="mb-6 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/30">
            <FileText className="w-3 h-3 mr-1" aria-hidden="true" />
            Terms of Service
          </Badge>
          <h1 className="text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-[var(--dark-text-muted)]">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-[var(--dark-bg)]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <Card className="p-8 lg:p-12 bg-[var(--dark-bg-secondary)]/60 backdrop-blur-sm border-[var(--dark-surface)] shadow-lg">
              <div className="prose prose-lg max-w-none">
                <div className="space-y-8 text-[var(--dark-text-muted)]">
                  <section>
                    <h2 className="text-2xl text-white mb-4">Agreement to Terms</h2>
                    <p>
                      By accessing or using the services provided by SageStone Inc ("Company," "we," "our," or "us"), 
                      you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of 
                      these Terms, you may not access our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Description of Services</h2>
                    <p className="mb-4">
                      SageStone Inc provides business process outsourcing (BPO) and virtual operations services, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Customer support outsourcing</li>
                      <li>Virtual assistant services</li>
                      <li>eCommerce and Shopify support</li>
                      <li>Back-office operations</li>
                      <li>Property coordination services</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Service Agreements</h2>
                    <p>
                      Specific service engagements will be governed by separate service agreements or statements 
                      of work that outline the scope, pricing, deliverables, and other terms specific to your 
                      engagement. In the event of any conflict between these Terms and a specific service agreement, 
                      the service agreement shall prevail.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Client Responsibilities</h2>
                    <p className="mb-4">As a client of SageStone Inc, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate and complete information necessary for service delivery</li>
                      <li>Grant appropriate access to systems, tools, and resources as needed</li>
                      <li>Respond to reasonable requests for information or clarification in a timely manner</li>
                      <li>Pay all fees as outlined in your service agreement</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Not use our services for any unlawful or prohibited purpose</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Payment Terms</h2>
                    <p className="mb-4">
                      Payment terms will be specified in your service agreement. Unless otherwise agreed:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Invoices are due within 15 days of receipt</li>
                      <li>Late payments may incur interest at 1.5% per month or the maximum rate permitted by law</li>
                      <li>We reserve the right to suspend services for overdue accounts</li>
                      <li>All fees are non-refundable unless otherwise specified in your service agreement</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Confidentiality</h2>
                    <p className="mb-4">
                      Both parties agree to maintain the confidentiality of any proprietary or confidential 
                      information shared during the course of the engagement. This includes, but is not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Business processes and procedures</li>
                      <li>Customer data and information</li>
                      <li>Financial information</li>
                      <li>Trade secrets and intellectual property</li>
                      <li>Any information marked as confidential</li>
                    </ul>
                    <p className="mt-4">
                      Confidentiality obligations shall survive the termination of any service agreement.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Intellectual Property</h2>
                    <p>
                      All intellectual property rights in our services, including processes, methodologies, 
                      and proprietary tools, remain the property of SageStone Inc. Work product created 
                      specifically for you as part of a service engagement shall be owned as specified in 
                      your service agreement.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Limitation of Liability</h2>
                    <p className="mb-4">
                      To the maximum extent permitted by applicable law:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>SageStone Inc shall not be liable for any indirect, incidental, special, consequential, 
                          or punitive damages arising from or related to these Terms or our services</li>
                      <li>Our total liability shall not exceed the amounts paid by you in the twelve (12) months 
                          preceding the claim</li>
                      <li>We do not guarantee specific results or outcomes from our services</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Indemnification</h2>
                    <p>
                      You agree to indemnify, defend, and hold harmless SageStone Inc, its officers, directors, 
                      employees, and agents from any claims, damages, losses, or expenses (including reasonable 
                      attorneys' fees) arising from your use of our services, violation of these Terms, or 
                      infringement of any third-party rights.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Termination</h2>
                    <p className="mb-4">
                      Either party may terminate services as follows:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>With 30 days' written notice for convenience (unless otherwise specified in your service agreement)</li>
                      <li>Immediately upon material breach that is not cured within 15 days of written notice</li>
                      <li>Immediately if the other party becomes insolvent or files for bankruptcy</li>
                    </ul>
                    <p className="mt-4">
                      Upon termination, you shall pay for all services rendered up to the termination date.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Dispute Resolution</h2>
                    <p>
                      Any disputes arising from these Terms or our services shall first be attempted to be 
                      resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved 
                      through binding arbitration in accordance with the rules of the American Arbitration 
                      Association, with the arbitration taking place in the jurisdiction of SageStone Inc's 
                      principal place of business.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Governing Law</h2>
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of the United 
                      States and the state in which SageStone Inc is incorporated, without regard to its 
                      conflict of law provisions.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Modifications to Terms</h2>
                    <p>
                      We reserve the right to modify these Terms at any time. Changes will be effective upon 
                      posting to our website. Your continued use of our services following any changes constitutes 
                      acceptance of the modified Terms. We encourage you to review these Terms periodically.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Severability</h2>
                    <p>
                      If any provision of these Terms is found to be unenforceable or invalid, that provision 
                      shall be limited or eliminated to the minimum extent necessary, and the remaining provisions 
                      shall remain in full force and effect.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Entire Agreement</h2>
                    <p>
                      These Terms, together with any applicable service agreements, constitute the entire 
                      agreement between you and SageStone Inc regarding our services and supersede all prior 
                      agreements, communications, and proposals, whether oral or written.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-white mb-4">Contact Us</h2>
                    <p className="mb-4">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="flex items-center gap-2 p-4 bg-[var(--dark-bg)]/50 rounded-lg">
                      <Mail className="w-5 h-5 text-[var(--color-primary-400)]" aria-hidden="true" />
                      <button
                        onClick={() => onNavigate("contact")}
                        className="text-[var(--color-primary-400)] hover:underline"
                      >
                        Contact Us
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    </div>
    </>
  );
}
