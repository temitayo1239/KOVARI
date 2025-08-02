import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw, CheckCircle, XCircle, Package, Clock, AlertTriangle } from "lucide-react";

export const Returns = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={0} onCartClick={() => {}} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Returns & Exchanges
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We want you to love your Kovari purchase. If not, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                30-Day Return Policy
              </h2>
              <p className="text-gray-600 text-lg">
                Simple, hassle-free returns and exchanges within 30 days of purchase
              </p>
            </div>

            {/* Policy Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center text-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    What's Eligible
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-left">
                    <li>• Unworn items with tags attached</li>
                    <li>• Original packaging included</li>
                    <li>• Purchased within 30 days</li>
                    <li>• Items in original condition</li>
                    <li>• Valid proof of purchase</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center text-lg">
                    <XCircle className="h-6 w-6 text-red-500 mr-3" />
                    What's Not Eligible
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-left">
                    <li>• Worn or washed items</li>
                    <li>• Items without tags</li>
                    <li>• Damaged or altered items</li>
                    <li>• Items purchased over 30 days ago</li>
                    <li>• Sale items (final sale only)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center text-lg">
                    <RotateCcw className="h-6 w-6 text-brand-red mr-3" />
                    Free Exchanges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-left">
                    <li>• Size exchanges are free</li>
                    <li>• Color exchanges are free</li>
                    <li>• We cover return shipping</li>
                    <li>• New item ships immediately</li>
                    <li>• Easy online exchange process</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Return Process Steps */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                How to Return Your Order
              </h2>

              <div className="space-y-8">
                <Card className="border-gray-200">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                          1
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Start Your Return
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Log into your account and select "Return Items" from your order history, 
                          or contact our customer service team at support@kovari.com.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">
                            <strong>Need help?</strong> Our team is available Mon-Fri, 9AM-6PM EST
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                          2
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Get Your Return Label
                        </h3>
                        <p className="text-gray-600 mb-4">
                          We'll email you a prepaid return shipping label within 24 hours. 
                          Print it out and attach it to your package.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">
                            <strong>Free returns:</strong> We cover all return shipping costs for exchanges and store credit
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                          3
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Pack & Ship
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Pack your items in the original packaging (or any box), attach the return label, 
                          and drop it off at any UPS location or schedule a pickup.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">
                            <strong>Track your return:</strong> Use the tracking number to monitor your return package
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                          4
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Get Your Refund
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Once we receive your return, we'll process your refund within 3-5 business days. 
                          Refunds go back to your original payment method.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">
                            <strong>Processing time:</strong> Credit cards: 3-5 days | PayPal: 1-2 days | Store credit: Instant
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Return Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Package className="h-6 w-6 text-brand-red mr-3" />
                    Exchange Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Size Exchange</h3>
                      <p className="text-gray-600 text-sm">
                        Need a different size? We'll ship your new size immediately and 
                        you can return the original when it arrives.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Color Exchange</h3>
                      <p className="text-gray-600 text-sm">
                        Want a different color? Same deal - we'll send the new color 
                        right away with free return shipping.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Store Credit</h3>
                      <p className="text-gray-600 text-sm">
                        Get instant store credit and use it whenever you're ready. 
                        Credit never expires and can be used on any item.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Clock className="h-6 w-6 text-brand-red mr-3" />
                    Timeline & Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">Return initiated</span>
                      <span className="text-gray-600">Same day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">Return label sent</span>
                      <span className="text-gray-600">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">Package received</span>
                      <span className="text-gray-600">3-5 business days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">Refund processed</span>
                      <span className="text-gray-600">1-3 business days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">Money in account</span>
                      <span className="text-gray-600">1-5 business days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <AlertTriangle className="h-6 w-6 text-brand-red mr-3" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Can I return sale items?
                    </h3>
                    <p className="text-gray-600">
                      Sale items marked as "Final Sale" cannot be returned. All other sale items 
                      follow our standard return policy.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      What if my item arrives damaged?
                    </h3>
                    <p className="text-gray-600">
                      If your item arrives damaged, contact us immediately at support@kovari.com 
                      with photos. We'll send a replacement and provide a prepaid return label.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Can I return items to a physical store?
                    </h3>
                    <p className="text-gray-600">
                      Currently, all returns must be processed through our online return system. 
                      We don't accept returns at physical retail locations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      What about international returns?
                    </h3>
                    <p className="text-gray-600">
                      International customers are responsible for return shipping costs. We recommend 
                      using a trackable shipping method. Refunds will be processed once we receive the item.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our customer service team is here to help with any return questions or concerns.
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
                  Email Us Directly
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

export default Returns;