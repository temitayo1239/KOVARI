import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Menu, X } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              KOVARI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center">
                Shop
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    All Products
                  </Link>
                  <Link to="/new-arrivals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"> 
                    New Arrivals
                  </Link>
                  <Link to="/best-sellers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Best Sellers
                  </Link>
                  <Link to="/sale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Sale
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className="relative hover:bg-gray-100"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-brand-red"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Home
              </Link>
              <div className="pl-2">
                <div className="text-gray-700 font-medium mb-2">Shop</div>
                <div className="pl-4 space-y-2">
                  <Link to="/products" className="block text-gray-600 hover:text-gray-900 transition-colors">All Products</Link>
                  <Link to="/new-arrivals" className="block text-gray-600 hover:text-gray-900 transition-colors">New Arrivals</Link>
                  <Link to="/best-sellers" className="block text-gray-600 hover:text-gray-900 transition-colors">Best Sellers</Link>
                  <Link to="/sale" className="block text-gray-600 hover:text-gray-900 transition-colors">Sale</Link>
                </div>
              </div>
              <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};