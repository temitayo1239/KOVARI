import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { getSaleProducts } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Tag, AlertTriangle, ShoppingBag } from "lucide-react";
import { CartProvider, useCart } from "@/context/CartContext";
import { Cart } from "@/components/Cart";

const SaleContent = () => {
  const products = getSaleProducts();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer for sale
  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7); // Sale ends in 7 days

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const totalDiscount = products.reduce((total, product) => {
    if (product.originalPrice) {
      return total + (product.originalPrice - product.price);
    }
    return total;
  }, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={getTotalItems()} onCartClick={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Tag className="h-8 w-8 text-red-500 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Sale
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Limited time offers. Premium quality at unbeatable prices. Don't miss out on these incredible deals!
            </p>
            
            {/* Countdown Timer */}
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">Sale Ends In:</span>
              </div>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">{timeLeft.days}</div>
                  <div className="text-xs text-gray-500">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">{timeLeft.hours}</div>
                  <div className="text-xs text-gray-500">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">{timeLeft.minutes}</div>
                  <div className="text-xs text-gray-500">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">{timeLeft.seconds}</div>
                  <div className="text-xs text-gray-500">Seconds</div>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                <span className="text-sm font-medium text-gray-700">
                  Limited Time
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <ShoppingBag className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  Up to 50% Off
                </span>
              </div>
              <Badge variant="outline" className="px-3 py-1 bg-red-50 text-red-700 border-red-200">
                Save ${totalDiscount}
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
      
      {/* Urgency Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Don't Miss Out!
              </h2>
              <p className="text-gray-600 mb-6">
                These prices won't last long. Once the sale ends, these items return to their original prices. 
                Secure your favorites before they're gone!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  variant="cart"
                  onClick={() => navigate('/products')}
                  className="min-w-[200px]"
                >
                  Shop Now
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/contact')}
                  className="min-w-[200px]"
                >
                  Contact Us
                </Button>
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

const Sale = () => {
  return (
    <CartProvider>
      <SaleContent />
    </CartProvider>
  );
};

export default Sale;