import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { getNewArrivals } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Clock } from "lucide-react";
import { CartProvider, useCart } from "@/context/CartContext";
import { Cart } from "@/components/Cart";

const NewArrivalsContent = () => {
  const products = getNewArrivals();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={getTotalItems()} onCartClick={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-blue-500 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                New Arrivals
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Fresh styles just dropped. Discover our latest premium designs that blend comfort with contemporary style.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">
                  Just Released
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  Trending Now
                </span>
              </div>
              <Badge variant="outline" className="px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
                {products.length} New Items
              </Badge>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="cart"
                onClick={() => navigate('/products')}
                className="min-w-[200px]"
              >
                View All Products
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/sale')}
                className="min-w-[200px]"
              >
                Check Sale Items
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <div className="pt-8">
        <ProductGrid 
          products={products}
          title=""
          subtitle=""
          showFilters={true}
        />
      </div>
      
      {/* Newsletter Signup for New Arrivals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Be the first to know about new arrivals, exclusive drops, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
              />
              <Button variant="cart" className="min-w-[120px]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <Cart isOpen={isCartOpen} onOpenChange={setIsCartOpen} />
    </div>
  );
};

const NewArrivals = () => {
  return (
    <CartProvider>
      <NewArrivalsContent />
    </CartProvider>
  );
};

export default NewArrivals;