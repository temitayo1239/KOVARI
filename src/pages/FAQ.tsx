import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Package, CreditCard, Truck, RotateCcw, Users } from "lucide-react";

export const FAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={0} onCartClick={() => {}} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Find quick answers to common questions about Kovari
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* General Questions */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <HelpCircle className="h-6 w-6 text-brand-red mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">General Questions</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="general-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    What is Kovari?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Kovari is a premium streetwear brand specializing in high-quality sweatpants and comfortable athletic wear. 
                    We focus on creating minimalist, stylish pieces that combine comfort with modern aesthetics for the contemporary lifestyle.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    What makes Kovari sweatpants special?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Our sweatpants are crafted from premium cotton blends with attention to every detail. Features include:
                    reinforced stitching, tapered fit design, adjustable drawstrings, and pre-shrunk fabric for lasting comfort and style.
                    Each piece is designed for both lounging and active wear.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Are your products unisex?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! Our sweatpants feature a unisex design that works for all body types. We focus on comfortable, 
                    relaxed fits that look great on everyone. Check our size guide to find your perfect fit.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Do you have a physical store?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We currently operate online-only, which allows us to offer premium quality at better prices. 
                    However, we do have a showroom in New York where you can experience our products by appointment. 
                    Contact us to schedule a visit.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Ordering & Payment */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <CreditCard className="h-6 w-6 text-brand-red mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Ordering & Payment</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="payment-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, 
                    and Shop Pay. All payments are processed securely through encrypted connections.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Do you offer payment plans?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! We partner with Klarna and Afterpay to offer flexible payment options. You can split your purchase 
                    into 4 interest-free payments. This option is available at checkout for qualifying orders.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Can I modify or cancel my order?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    You can modify or cancel your order within 2 hours of placing it by contacting our customer service team. 
                    After 2 hours, orders enter our fulfillment process and cannot be modified, but you can always return items 
                    using our 30-day return policy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Do you offer student or military discounts?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! We offer a 10% discount for students and military personnel. Verify your status through our 
                    partnership with SheerID at checkout, or contact customer service with valid ID for assistance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Shipping & Delivery */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Truck className="h-6 w-6 text-brand-red mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Shipping & Delivery</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="shipping-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How long does shipping take?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Domestic shipping takes 5-7 business days for standard delivery, 2-3 days for express, and next day for overnight. 
                    International shipping varies by location: Canada (7-10 days), Europe (10-14 days), 
                    Australia/Asia (12-16 days). All orders include tracking.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Do you offer free shipping?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! We offer free standard shipping on all orders over $75 within the United States. 
                    Orders under $75 have a $6.99 shipping fee. Express and overnight shipping have additional charges.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Do you ship internationally?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, we ship to over 50 countries worldwide. International shipping rates start at $15.99 depending on location. 
                    Customers are responsible for any customs duties or taxes. We use DHL and FedEx for international shipments.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    My tracking says delivered but I don't have my package. What should I do?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    First, check with neighbors, building management, or family members. Sometimes packages are left in safe locations. 
                    If you still can't locate it, contact us within 7 days and we'll work with the carrier to investigate. 
                    We'll resolve the issue with a replacement or refund.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Returns & Exchanges */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <RotateCcw className="h-6 w-6 text-brand-red mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Returns & Exchanges</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="returns-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    What is your return policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We offer a 30-day return policy for unworn items in original condition with tags attached. 
                    Returns are free for exchanges and store credit. Refunds to original payment method incur a $6.99 processing fee 
                    unless the item arrived damaged or defective.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="returns-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How do I start a return?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Log into your account and select "Return Items" from your order history, or email support@kovari.com. 
                    We'll send you a prepaid return label within 24 hours. Pack the items in any box and send them back using our label.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="returns-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How long do refunds take?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Once we receive your return, refunds are processed within 3-5 business days. 
                    The money appears in your account 1-5 business days after processing, depending on your bank. 
                    Store credit is issued immediately upon processing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="returns-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Can I exchange for a different size or color?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Absolutely! Size and color exchanges are completely free. We'll ship your new item immediately and 
                    you can return the original when it arrives. This way you get your new item faster without waiting for processing.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Product Care */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Package className="h-6 w-6 text-brand-red mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Product Care</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="care-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How should I care for my Kovari sweatpants?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Machine wash cold in gentle cycle, tumble dry on low heat. Avoid bleach and fabric softeners as they can 
                    break down the fabric fibers. For best results, wash with similar colors and turn inside out before washing. 
                    Iron on low heat if needed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="care-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Will my sweatpants shrink?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Our sweatpants are pre-shrunk during manufacturing to minimize shrinkage. When cared for properly 
                    (cold wash, low heat dry), you should expect minimal to no shrinkage. Avoid hot water and high heat to maintain fit.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="care-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    My sweatpants have a stain. How do I remove it?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Treat stains immediately with cold water. For oil-based stains, use a small amount of dish soap. 
                    For protein stains (food, sweat), use an enzyme-based stain remover. Always test cleaning products on a 
                    hidden area first. Avoid bleach or harsh chemicals that could damage the fabric.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Customer Service */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-brand-red mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Customer Service</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="service-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How can I contact customer service?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    You can reach us via email at support@kovari.com, through our contact form on the website, 
                    or via WhatsApp for quick questions. Our team responds within 24 hours, usually much faster. 
                    We're available Monday-Friday, 9AM-6PM EST.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="service-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Do you have a loyalty program?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! Join Kovari Collective to earn points on every purchase, get early access to new releases, 
                    and receive exclusive member discounts. You'll earn 1 point per $1 spent and get $5 off for every 100 points earned. 
                    Sign up is free on our website.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="service-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How do I stay updated on new releases?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Subscribe to our newsletter for first access to new drops, exclusive discounts, and style inspiration. 
                    You can also follow us on Instagram @kovari and TikTok @kovariwear for behind-the-scenes content and styling tips. 
                    Newsletter subscribers get early access 24 hours before general release.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="service-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Can I become a brand ambassador?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We're always looking for authentic brand advocates! If you love Kovari and have an engaged social media following, 
                    email us at partnerships@kovari.com with your social handles and why you'd be a great fit. 
                    We offer product gifting and commission opportunities for qualified ambassadors.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Still Have Questions */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our customer service team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-block bg-brand-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Contact Support
                </a>
                <a 
                  href="mailto:support@kovari.com" 
                  className="inline-block border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;