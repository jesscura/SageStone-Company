import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { Shield, Mail } from "lucide-react";

interface PrivacyPageProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  const lastUpdated = "January 1, 2025";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F3E8FF] via-white to-[#F9F8FB] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge className="mb-6 bg-white/90 text-[#8E3AFF] border-[#B14EFF]/30">
            <Shield className="w-3 h-3 mr-1" aria-hidden="true" />
            Privacy Policy
          </Badge>
          <h1 className="text-[#1C1B20] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#6D6A73]">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp">
            <Card className="p-8 lg:p-12 border-[#E7E2EE]">
              <div className="prose prose-lg max-w-none">
                <div className="space-y-8 text-[#6D6A73]">
                  <section>
                    <h2 className="text-2xl text-[#1C1B20] mb-4">Introduction</h2>
                    <p>
                      SageStone Inc ("we," "our," or "us") respects your privacy and is committed to protecting 
                      your personal data. This Privacy Policy explains how we collect, use, disclose, and 
                      safeguard your information when you visit our website or use our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-[#1C1B20] mb-4">Information We Collect</h2>
                    <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
                    
                    <h3 className="text-lg text-[#1C1B20] mb-2">Personal Data</h3>
                    <p className="mb-4">
                      When you contact us or use our services, we may ask for personally identifiable information, such as:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Name and job title</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Company name and address</li>
                      <li>Information about your business needs</li>
                    </ul>

                    <h3 className="text-lg text-[#1C1B20] mb-2">Usage Data</h3>
                    <p>
                      We automatically collect certain information when you visit our website, including your IP address, 
                      browser type, operating system, referring URLs, access times, and pages viewed.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-[#1C1B20] mb-4">How We Use Your Information</h2>
                    <p className="mb-4">We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide, operate, and maintain our services</li>
                      <li>Respond to your inquiries and provide customer support</li>
                      <li>Send you marketing and promotional communications (with your consent)</li>
                      <li>Improve our website and services</li>
                      <li>Analyze usage patterns and trends</li>
                      <li>Protect against fraudulent or unauthorized activity</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl text-[#1C1B20] mb-4">Data Sharing and Disclosure</h2>
                    <p className="mb-4">
                      We do not sell, trade, or rent your personal information to third parties. We may share your 
                      information in the following situations:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and conducting our business</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
                      <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                      <li><strong>Protection:</strong> To protect our rights, privacy, safety, or property</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl text-[#1C1B20] mb-4">Data Security</h2>
                    <p>
                      We implement appropriate technical and organizational security measures to protect your personal 
                      data against unauthorized access, alteration, disclosure, or destruction. However, no method of 
                      transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee 
                      absolute security.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-[#1C1B20] mb-4">Data Retention</h2>
                    <p>
                      We retain your personal data only for as long as necessary to fulfill the purposes for which 
                      we collected it, including to satisfy any legal, accounting, or reporting requirements. When 
                      we no longer need your data, we will securely delete or anonymize it.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-[#1C1B20] mb-4">Your Rights</h2>
                    <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Access:</strong> Request access to your personal data</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                      <li><strong>Portability:</strong> Request transfer of your data to another organization</li>
                      <li><strong>Objection:</strong> Object to certain processing of your data</li>
                      <li><strong>Withdrawal:</strong> Withdraw consent at any time where processing is based on consent</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl text-[#1C1B20] mb-4">Cookies and Tracking Technologies</h2>
                    <p>
                      We may use cookies and similar tracking technologies to track activity on our website and 
                      hold certain information. Cookies are small data files stored on your device. You can 
                      instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                      However, if you do not accept cookies, you may not be able to use some portions of our website.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-[#1C1B20] mb-4">Third-Party Links</h2>
                    <p>
                      Our website may contain links to third-party websites. We have no control over and assume 
                      no responsibility for the content, privacy policies, or practices of any third-party sites 
                      or services. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-[#1C1B20] mb-4">Children's Privacy</h2>
                    <p>
                      Our services are not intended for individuals under the age of 18. We do not knowingly 
                      collect personal data from children. If we become aware that we have collected personal 
                      data from a child, we will take steps to delete that information.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-[#1C1B20] mb-4">Changes to This Privacy Policy</h2>
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any changes by 
                      posting the new Privacy Policy on this page and updating the "Last updated" date. You are 
                      advised to review this Privacy Policy periodically for any changes.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl text-[#1C1B20] mb-4">Contact Us</h2>
                    <p className="mb-4">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="flex items-center gap-2 p-4 bg-[#F9F8FB] rounded-lg">
                      <Mail className="w-5 h-5 text-[#8E3AFF]" aria-hidden="true" />
                      <button
                        onClick={() => onNavigate("contact")}
                        className="text-[#8E3AFF] hover:underline"
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
  );
}
