import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { getAllProducts } from "@/data/products";
import { Product } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid3X3, List } from "lucide-react";
import { CartProvider, useCart } from "@/context/CartContext";
import { Cart } from "@/components/Cart";

const AllProductsContent = () => {
  const allProducts = getAllProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();
  
  // Debug logging
  console.log("AllProductsContent rendered");
  console.log("Products count:", allProducts.length);
  console.log("Products:", allProducts);
  
  // Get unique categories
  const categories = ["all", ...Array.from(new Set(allProducts.map(p => p.category)))];
  
  // Filter products based on search and category
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  console.log("Filtered products count:", filteredProducts.length);

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={getTotalItems()} onCartClick={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              All Products
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our complete collection of premium comfort wear
            </p>
            
            {/* Search and Filter Bar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              
              <div className="flex gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                  className="h-12 w-12"
                >
                  {viewMode === "grid" ? <List className="h-4 w-4" /> : <Grid3X3 className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            {/* Results Summary */}
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="px-3 py-1">
                {filteredProducts.length} Products Found
              </Badge>
              {searchTerm && (
                <Badge variant="outline" className="px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
                  Search: "{searchTerm}"
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="outline" className="px-3 py-1 bg-green-50 text-green-700 border-green-200">
                  Category: {selectedCategory}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <div className="pt-8">
        <ProductGrid 
          products={filteredProducts}
          title=""
          subtitle=""
          showFilters={true}
        />
      </div>
      
      <Footer />
      <Cart isOpen={isCartOpen} onOpenChange={setIsCartOpen} />
    </div>
  );
};

const AllProducts = () => {
  return (
    <CartProvider>
      <AllProductsContent />
    </CartProvider>
  );
};

export default AllProducts;