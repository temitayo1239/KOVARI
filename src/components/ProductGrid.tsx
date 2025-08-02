import { useState } from "react";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
}

type SortOption = "newest" | "price-low" | "price-high" | "name";

export const ProductGrid = ({ products, title, subtitle, showFilters = false }: ProductGridProps) => {
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSort = (option: SortOption) => {
    setSortBy(option);
    let sorted = [...products];
    
    switch (option) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }
    
    setFilteredProducts(sorted);
  };

  const getProductCount = () => products.length;
  const getNewCount = () => products.filter(p => p.isNew).length;
  const getSaleCount = () => products.filter(p => p.onSale).length;
  const getBestSellerCount = () => products.filter(p => p.isBestSeller).length;

  return (
    <section id="shop" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            )}
            
            {/* Product Stats */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="outline" className="px-3 py-1">
                {getProductCount()} Total Products
              </Badge>
              {getNewCount() > 0 && (
                <Badge variant="outline" className="px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
                  {getNewCount()} New
                </Badge>
              )}
              {getBestSellerCount() > 0 && (
                <Badge variant="outline" className="px-3 py-1 bg-green-50 text-green-700 border-green-200">
                  {getBestSellerCount()} Best Sellers
                </Badge>
              )}
              {getSaleCount() > 0 && (
                <Badge variant="outline" className="px-3 py-1 bg-red-50 text-red-700 border-red-200">
                  {getSaleCount()} On Sale
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Sorting Controls */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select value={sortBy} onValueChange={(value: SortOption) => handleSort(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showFilters ? filteredProducts : products).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🛍️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Check back soon for new arrivals!</p>
            <Button 
              className="mt-4"
              onClick={() => window.location.href = '/products'}
            >
              View All Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};