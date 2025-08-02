import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Globe, Clock, Package, MapPin } from "lucide-react";

export const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={0} onCartClick={() => {}} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shipping Information
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Fast, reliable delivery to your doorstep
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Shipping Options
              </h2>
              <p className="text-gray-600 text-lg">
                Choose the delivery speed that works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center text-xl">
                    <Truck className="h-6 w-6 text-brand-red mr-3" />
                    Standard Shipping
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">FREE</div>
                  <p className="text-gray-600 mb-4">On orders over $75</p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Delivery:</strong> 5-7 business days</p>
                    <p><strong>Cost:</strong> $6.99 (under $75)</p>
                    <p><strong>Tracking:</strong> Included</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow border-brand-red">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center text-xl">
                    <Clock className="h-6 w-6 text-brand-red mr-3" />
                    Express Shipping
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-brand-red mb-2">$12.99</div>
                  <p className="text-gray-600 mb-4">Most popular</p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Delivery:</strong> 2-3 business days</p>
                    <p><strong>Cost:</strong> $12.99</p>
                    <p><strong>Tracking:</strong> Real-time updates</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center text-xl">
                    <Package className="h-6 w-6 text-brand-red mr-3" />
                    Overnight
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">$24.99</div>
                  <p className="text-gray-600 mb-4">Next day delivery</p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Delivery:</strong> Next business day</p>
                    <p><strong>Cost:</strong> $24.99</p>
                    <p><strong>Tracking:</strong> Real-time updates</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* International Shipping */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                International Shipping
              </h2>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Globe className="h-6 w-6 text-brand-red mr-3" />
                    Worldwide Delivery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Shipping Zones & Times</h3>
                      <div className="space-y-3 text-gray-600">
                        <div className="flex justify-between">
                          <span>Canada</span>
                          <span>7-10 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Europe</span>
                          <span>10-14 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Australia/New Zealand</span>
                          <span>12-16 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Asia</span>
                          <span>10-15 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rest of World</span>
                          <span>15-21 business days</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">International Rates</h3>
                      <div className="space-y-3 text-gray-600">
                        <div className="flex justify-between">
                          <span>Canada</span>
                          <span>$15.99</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Europe</span>
                          <span>$19.99</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Australia/New Zealand</span>
                          <span>$24.99</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Asia</span>
                          <span>$22.99</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rest of World</span>
                          <span>$29.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Note:</strong> International customers are responsible for any customs duties, 
                      taxes, or fees imposed by their country. These charges are not included in your order total.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Shipping Partners */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Shipping Partners
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-2">UPS</div>
                  <p className="text-gray-600 text-sm">Domestic & International</p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-2">FedEx</div>
                  <p className="text-gray-600 text-sm">Express Delivery</p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-2">USPS</div>
                  <p className="text-gray-600 text-sm">Standard Shipping</p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-2">DHL</div>
                  <p className="text-gray-600 text-sm">International Express</p>
                </div>
              </div>
            </div>

            {/* Important Information */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="h-6 w-6 text-brand-red mr-3" />
                  Important Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Processing Time</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Orders placed before 2 PM EST ship same day</li>
                      <li>• Weekend orders ship the following Monday</li>
                      <li>• Holiday processing may take 1-2 additional days</li>
                      <li>• You'll receive tracking info within 24 hours</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Delivery Notes</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Signature required for orders over $150</li>
                      <li>• We ship to residential and business addresses</li>
                      <li>• PO Boxes accepted for standard shipping only</li>
                      <li>• Address changes must be made within 2 hours of order</li>
                    </ul>
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

export default ShippingInfo;