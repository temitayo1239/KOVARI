import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} onCartClick={() => {}} />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Kovari's website and services, you accept and agree to be bound 
                  by the terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of Kovari's website materials 
                  for personal, non-commercial transitory viewing only. This is the grant of a license, 
                  not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Product Information and Pricing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We strive to provide accurate product information and pricing. However:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Product colors may vary due to monitor settings</li>
                  <li>We reserve the right to correct pricing errors</li>
                  <li>Product availability is subject to change</li>
                  <li>We may discontinue products without notice</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Order Acceptance and Fulfillment</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your receipt of an order confirmation does not signify our acceptance of your order, 
                  nor does it constitute confirmation of our offer to sell. We reserve the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Accept or decline orders in our sole discretion</li>
                  <li>Limit quantities purchased per person, household, or order</li>
                  <li>Refuse service to any person for any reason</li>
                  <li>Cancel orders due to pricing errors or product unavailability</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Payment is due at the time of purchase</li>
                  <li>We accept major credit cards and approved payment methods</li>
                  <li>You warrant that payment information provided is accurate</li>
                  <li>Fraudulent transactions will be reported to authorities</li>
                  <li>Currency is USD unless otherwise specified</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Shipping and Delivery</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Shipping times are estimates and may vary based on location and product availability. 
                  Risk of loss and title for items pass to you upon delivery to the carrier.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Returns and Exchanges</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Please refer to our Returns Policy for detailed information about returns, 
                  exchanges, and refunds. Items must be returned in original condition within 
                  the specified time frame.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When creating an account, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your password</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Prohibited Uses</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may not use our services for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Any unlawful purpose or to solicit unlawful acts</li>
                  <li>Violating any international, federal, provincial, or state regulations or laws</li>
                  <li>Infringing upon our intellectual property rights</li>
                  <li>Harassing, abusing, or harming others</li>
                  <li>Transmitting viruses or malicious code</li>
                  <li>Collecting user information without consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, 
                  is the property of Kovari and is protected by copyright and trademark laws. 
                  Unauthorized use is prohibited.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The materials on Kovari's website are provided on an 'as is' basis. 
                  Kovari makes no warranties, expressed or implied, and hereby disclaims 
                  all other warranties including implied warranties of merchantability, 
                  fitness for a particular purpose, or non-infringement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Limitations of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Kovari be liable for any damages arising out of the use 
                  or inability to use the materials on our website, even if we have been 
                  notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in accordance 
                  with the laws of California, United States, and you irrevocably submit 
                  to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to revise these terms of service at any time without notice. 
                  By using this website, you agree to be bound by the current version of these terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Email: legal@kovari.com</p>
                  <p>Phone: 1-800-KOVARI-1</p>
                  <p>Address: 123 Fashion Street, Los Angeles, CA 90210</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;