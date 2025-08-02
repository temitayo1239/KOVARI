import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartProvider, useCart } from "@/context/CartContext";
import { getFeaturedProducts } from "@/data/products";

const IndexContent = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartCount={getTotalItems()} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        
        <ProductGrid 
          products={featuredProducts}
          title="Premium Sweatpants. Perfected."
          subtitle="Discover our collection of premium comfort wear designed for the modern lifestyle"
        />
        
        <Newsletter />
      </main>
      
      <Footer />
      <WhatsAppButton />
      
      <Cart 
        isOpen={isCartOpen} 
        onOpenChange={setIsCartOpen} 
      />
    </div>
  );
};

const Index = () => {
  return (
    <CartProvider>
      <IndexContent />
    </CartProvider>
  );
};

export default Index;
