import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Package, 
  RotateCcw, 
  Truck, 
  CreditCard,
  Users,
  Clock,
  Phone
} from "lucide-react";

export const CustomerCare = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi! I need help with my Kovari order.`);
    const phoneNumber = "2348185451123"; // Replace with actual WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={0} onCartClick={() => {}} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Customer Care
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're here to help you every step of the way
            </p>
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Can We Help You Today?
              </h2>
              <p className="text-gray-600 text-lg">
                Find quick answers or get in touch with our support team
              </p>
            </div>

            {/* Quick Action Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-gray-200 hover:shadow-lg transition-shadow group cursor-pointer">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center text-lg">
                    <Package className="h-6 w-6 text-brand-red mr-3 group-hover:scale-110 transition-transform" />
                    Track My Order
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    Check the status of your recent orders and track shipping progress
                  </p>
                  <Button variant="outline" className="w-full">
                    Track Order
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow group cursor-pointer">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center text-lg">
                    <RotateCcw className="h-6 w-6 text-brand-red mr-3 group-hover:scale-110 transition-transform" />
                    Start a Return
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    Need to return or exchange an item? Start the process here
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/returns">Start Return</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow group cursor-pointer">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center text-lg">
                    <HelpCircle className="h-6 w-6 text-brand-red mr-3 group-hover:scale-110 transition-transform" />
                    FAQ
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    Browse frequently asked questions for quick answers
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/faq">View FAQ</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Get in Touch
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <MessageCircle className="h-6 w-6 text-green-500 mr-3" />
                      WhatsApp Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Get instant help with quick questions via WhatsApp
                    </p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Available 24/7
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Average response: 5 minutes
                      </div>
                    </div>
                    <Button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Mail className="h-6 w-6 text-brand-red mr-3" />
                      Email Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Send us detailed questions via email for comprehensive help
                    </p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Mon-Fri, 9AM-6PM EST
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Average response: 4 hours
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/contact">Send Email</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Popular Help Topics */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Popular Help Topics
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Truck className="h-8 w-8 text-brand-red mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Shipping Info</h3>
                    <p className="text-sm text-gray-600">Delivery times, rates, and tracking</p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Package className="h-8 w-8 text-brand-red mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Size Guide</h3>
                    <p className="text-sm text-gray-600">Find your perfect fit</p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <CreditCard className="h-8 w-8 text-brand-red mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Payment Options</h3>
                    <p className="text-sm text-gray-600">Payment methods and billing</p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <RotateCcw className="h-8 w-8 text-brand-red mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Returns</h3>
                    <p className="text-sm text-gray-600">Return policy and process</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Account Help */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Account & Order Help
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Order Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <a href="#" className="hover:text-brand-red transition-colors">Wrong item received</a>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <a href="#" className="hover:text-brand-red transition-colors">Damaged item</a>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <a href="#" className="hover:text-brand-red transition-colors">Missing items from order</a>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <a href="#" className="hover:text-brand-red transition-colors">Order status questions</a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Account Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <a href="#" className="hover:text-brand-red transition-colors">Update shipping address</a>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <a href="#" className="hover:text-brand-red transition-colors">Change payment method</a>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <a href="#" className="hover:text-brand-red transition-colors">Password reset</a>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <a href="#" className="hover:text-brand-red transition-colors">Newsletter preferences</a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Product Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <a href="/size-guide" className="hover:text-brand-red transition-colors">Sizing questions</a>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <a href="#" className="hover:text-brand-red transition-colors">Care instructions</a>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <a href="#" className="hover:text-brand-red transition-colors">Material questions</a>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <a href="#" className="hover:text-brand-red transition-colors">Style recommendations</a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Support Hours */}
            <Card className="border-gray-200 bg-gray-50">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center text-xl">
                  <Clock className="h-6 w-6 text-brand-red mr-3" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Customer Service</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">WhatsApp Support</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Every Day</span>
                        <span>24/7 Automated</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Live Agent</span>
                        <span>9:00 AM - 9:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Response Time</span>
                        <span>Within 5 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerCare;