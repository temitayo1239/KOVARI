import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle, Clock, Users } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi! I'd like to get in touch regarding Kovari products.`);
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're here to help – drop us a message!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Have questions about our products, need sizing help, or want to collaborate? 
                    We'd love to hear from you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="cart"
                    disabled={isSubmitting}
                    className="w-full h-12"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Other Ways to Reach Us
                  </h2>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center text-lg">
                        <Mail className="h-5 w-5 text-brand-red mr-3" />
                        Email Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-2">
                        Get in touch via email for detailed inquiries
                      </p>
                      <a 
                        href="mailto:kovariclothing@gmail.com" 
                        className="text-brand-red hover:underline font-medium"
                      >
                        kovariclothing@gmail.com
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center text-lg">
                        <MessageCircle className="h-5 w-5 text-green-500 mr-3" />
                        WhatsApp
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Quick questions? Chat with us on WhatsApp
                      </p>
                      <Button
                        onClick={handleWhatsAppClick}
                        variant="outline"
                        className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat on WhatsApp
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center text-lg">
                        <Clock className="h-5 w-5 text-brand-red mr-3" />
                        Support Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
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
                    </CardContent>
                  </Card>

                  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center text-lg">
                        <Users className="h-5 w-5 text-brand-red mr-3" />
                        Follow Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Stay connected for updates and style inspiration
                      </p>
                      <div className="flex space-x-4">
                        <a href="https://www.instagram.com/livekovari?igsh=MW8wYzJ4cXFuNTVjeQ==" className="text-gray-600 hover:text-brand-red transition-colors">
                          Instagram
                        </a>
                        <a href="#" className="text-gray-600 hover:text-brand-red transition-colors">
                          Twitter
                        </a>
                        <a href="#" className="text-gray-600 hover:text-brand-red transition-colors">
                          TikTok
                        </a>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        #Kovari #ShopNow #MinimalStreetwear
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visit Our Showroom
              </h2>
              <p className="text-gray-600 text-lg">
                Experience Kovari products in person at our flagship location
              </p>
            </div>

            {/* Google Map Placeholder */}
            <div className="bg-gray-300 rounded-lg h-80 flex items-center justify-center mb-8">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Google Map Integration</p>
                <p className="text-sm">Location: </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  <br />
                  
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+234 818 545 1123</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">
                  Mon-Sat: 10AM-8PM<br />
                  Sun: 12PM-6PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg">
                Quick answers to common questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What's your return policy?</h3>
                <p className="text-gray-600 mb-6">
                  We offer a 30-day return policy for unworn items in original condition 
                  with tags attached. Free returns for exchanges.
                </p>

                <h3 className="font-semibold text-gray-900 mb-3">How do I find my size?</h3>
                <p className="text-gray-600 mb-6">
                  Check our detailed size guide on each product page. If you're between sizes, 
                  we recommend sizing up for a more relaxed fit.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do you ship internationally?</h3>
                <p className="text-gray-600 mb-6">
                  Yes! We ship to over 50 countries worldwide. Shipping costs and delivery 
                  times vary by location.
                </p>

                <h3 className="font-semibold text-gray-900 mb-3">How do I care for my Kovari pieces?</h3>
                <p className="text-gray-600 mb-6">
                  Machine wash cold, tumble dry low. Avoid bleach and fabric softeners to 
                  maintain the premium feel and longevity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;