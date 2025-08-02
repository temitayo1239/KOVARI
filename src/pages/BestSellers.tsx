import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { getBestSellers } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Award, Heart, TrendingUp } from "lucide-react";
import { CartProvider, useCart } from "@/context/CartContext";
import { Cart } from "@/components/Cart";

const BestSellersContent = () => {
  const products = getBestSellers();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={getTotalItems()} onCartClick={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-green-500 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Best Sellers
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Customer favorites. The most loved pieces in our collection that have earned the trust of thousands.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">
                  Top Rated
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Heart className="h-4 w-4 text-red-500" />
                <span className="text-sm font-medium text-gray-700">
                  Customer Favorites
                </span>
              </div>
              <Badge variant="outline" className="px-3 py-1 bg-green-50 text-green-700 border-green-200">
                {products.length} Best Sellers
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
                onClick={() => navigate('/new-arrivals')}
                className="min-w-[200px]"
              >
                Check New Arrivals
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
      
      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 text-lg">
                Real reviews from real customers who love our best sellers
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The Essential Comfort Joggers are absolutely perfect. I wear them everywhere - from workouts to casual outings. The quality is unmatched!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">Sarah M.</p>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I've tried many brands, but Kovari's Olive Cargo Joggers are in a league of their own. The fit is perfect and they look so stylish!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">Mike R.</p>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The Classic White Tee is my go-to. It's so comfortable and the quality is amazing. I've bought multiple colors!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">Emma L.</p>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <Cart isOpen={isCartOpen} onOpenChange={setIsCartOpen} />
    </div>
  );
};

const BestSellers = () => {
  return (
    <CartProvider>
      <BestSellersContent />
    </CartProvider>
  );
};

export default BestSellers;