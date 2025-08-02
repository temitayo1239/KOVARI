import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import lifestyleImage1 from "@/assets/about-lifestyle-1.jpg";
import lifestyleImage2 from "@/assets/about-lifestyle-2.jpg";

export const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={0} onCartClick={() => {}} />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={lifestyleImage1}
            alt="Kovari Lifestyle"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            About
            <span className="block text-brand-red">Kovari</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Where comfort meets elegance in every thread
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-brand-red mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Born from a Simple Vision
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Kovari was founded on the belief that everyday comfort shouldn't compromise style. 
                  In 2020, our founder recognized a gap in the market – premium loungewear that 
                  could seamlessly transition from home to street, from workout to weekend.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  What started as a quest for the perfect pair of sweatpants has evolved into 
                  a movement celebrating mindful comfort and effortless elegance.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every Kovari piece is designed with intention – to elevate your everyday 
                  moments and empower you to feel confident in your own skin.
                </p>
              </div>
              <div className="order-first md:order-last">
                <img
                  src={lifestyleImage2}
                  alt="Kovari Morning Routine"
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We Stand For
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our values guide every decision, from design to delivery
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comfort First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe comfort is not a luxury—it's essential. Every fabric, every cut, 
                  every detail is crafted with your comfort in mind.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Uncompromising Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Premium materials, meticulous construction, and rigorous testing ensure 
                  every piece meets our exacting standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Minimal Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clean lines, timeless design, and versatile pieces that transcend trends. 
                  Less is more, but better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 text-white rounded-2xl p-12 md:p-16">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Founder's Vision
                </h2>
                <blockquote className="text-xl md:text-2xl leading-relaxed italic mb-8">
                  "I envisioned a brand that wouldn't make you choose between looking good and feeling good. 
                  Kovari represents the modern individual who values both style and substance, 
                  who understands that true luxury lies in the details you can't see but can definitely feel."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div>
                    <p className="font-semibold text-lg">Pedro</p>
                    <p className="text-gray-400">Founder & Creative Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Commitment
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quality isn't just a promise—it's our obsession
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Sustainable Practices
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We source our materials responsibly and partner with factories that share our 
                  commitment to ethical manufacturing and environmental stewardship.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Organic and recycled materials wherever possible
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Carbon-neutral shipping and packaging
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Fair wages and safe working conditions
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Every piece undergoes rigorous testing and quality checks before it reaches you. 
                  We stand behind our products with confidence.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Durability testing for long-lasting wear
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Color-fastness and shrink resistance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Lifetime warranty on construction defects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Kovari Movement
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the perfect balance of comfort, style, and quality. 
              Discover why thousands choose Kovari for their everyday moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="cart" 
                className="min-w-[200px]"
                onClick={() => window.location.href = '/'}
              >
                Shop Collection
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="min-w-[200px] bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;