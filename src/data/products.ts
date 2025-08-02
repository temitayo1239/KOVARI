import { Product } from "@/types";
import graySweatpants from "@/assets/product-gray-sweatpants.jpg";
import blackSweatpants from "@/assets/product-black-sweatpants.jpg";
import navySweatpants from "@/assets/product-navy-sweatpants.jpg";
import premiumBlackJoggers from "@/assets/product-premium-black-joggers.jpg";
import charcoalHoodie from "@/assets/product-charcoal-hoodie.jpg";
import creamSweatshirt from "@/assets/product-cream-sweatshirt.jpg";
import navyTrackPants from "@/assets/product-navy-track-pants.jpg";
import oliveCargoJoggers from "@/assets/product-olive-cargo-joggers.jpg";
import whiteTee from "@/assets/product-white-tee.jpg";
import burgundyZipHoodie from "@/assets/product-burgundy-zip-hoodie.jpg";
import stoneDenimJoggers from "@/assets/product-stone-denim-joggers.jpg";
import forestCrewneck from "@/assets/product-forest-crewneck.jpg";
import taupeCargoShorts from "@/assets/product-taupe-cargo-shorts.jpg";
import slateOversizedHoodie from "@/assets/product-slate-oversized-hoodie.jpg";
import rustLongSleeve from "@/assets/product-rust-long-sleeve.jpg";

export const products: Product[] = [
  // NEW ARRIVALS (4 products)
  {
    id: "1",
    name: "Premium Black Joggers",
    price: 129,
    originalPrice: 159,
    image: premiumBlackJoggers,
    description: "Luxurious black joggers crafted from premium cotton blend. Features tapered fit, ribbed cuffs, and signature Kovari branding. Perfect for both lounging and street style.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Jet Black", "Charcoal", "Dark Gray"],
    category: "Joggers",
    featured: true,
    isNew: true,
    onSale: true
  },
  {
    id: "2",
    name: "Charcoal Essential Hoodie",
    price: 149,
    image: charcoalHoodie,
    description: "The perfect everyday hoodie in sophisticated charcoal. Made from organic cotton fleece with kangaroo pocket and adjustable drawstring hood.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Black", "Stone Gray"],
    category: "Hoodies",
    featured: true,
    isNew: true
  },
  {
    id: "3",
    name: "Cream Oversized Sweatshirt",
    price: 119,
    image: creamSweatshirt,
    description: "Relaxed oversized fit sweatshirt in warm cream tone. Soft brushed interior and dropped shoulders for the ultimate comfort experience.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Cream", "Oatmeal", "Vanilla"],
    category: "Sweatshirts",
    featured: false,
    isNew: true
  },
  {
    id: "4",
    name: "Navy Performance Track Pants",
    price: 139,
    image: navyTrackPants,
    description: "Athletic-inspired track pants with moisture-wicking technology. Features side stripe detail and tapered leg opening for a modern silhouette.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Black", "Forest Green"],
    category: "Track Pants",
    featured: false,
    isNew: true
  },

  // BEST SELLERS (4 products)
  {
    id: "5",
    name: "Essential Comfort Joggers",
    price: 89,
    originalPrice: 120,
    image: graySweatpants,
    description: "Our signature joggers crafted from premium cotton blend. Designed for all-day comfort with a modern tapered fit that transitions seamlessly from workout to street.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Heather Gray", "Black", "Navy"],
    category: "Sweatpants",
    featured: true,
    isBestSeller: true,
    onSale: true
  },
  {
    id: "6",
    name: "Olive Cargo Joggers",
    price: 159,
    image: oliveCargoJoggers,
    description: "Street-ready cargo joggers with functional pockets and adjustable ankle cuffs. Perfect blend of utility and style in versatile olive tone.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Olive", "Black", "Khaki"],
    category: "Cargo Pants",
    featured: true,
    isBestSeller: true
  },
  {
    id: "7",
    name: "Classic White Tee",
    price: 59,
    image: whiteTee,
    description: "Premium heavyweight cotton t-shirt in classic white. Pre-shrunk fabric with reinforced seams for lasting quality and perfect fit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Gray"],
    category: "T-Shirts",
    featured: false,
    isBestSeller: true
  },
  {
    id: "8",
    name: "Performance Sweatpants",
    price: 95,
    originalPrice: 130,
    image: blackSweatpants,
    description: "Engineered for movement with moisture-wicking fabric and reinforced seams. The perfect blend of athletic performance and streetwear aesthetics.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Jet Black", "Charcoal", "Stone Gray"],
    category: "Sweatpants",
    featured: true,
    isBestSeller: true
  },

  // SALE ITEMS (4 products)
  {
    id: "9",
    name: "Burgundy Zip Hoodie",
    price: 99,
    originalPrice: 149,
    image: burgundyZipHoodie,
    description: "Premium zip-up hoodie in rich burgundy. Features metal zippers, side pockets, and fitted silhouette. Perfect for layering.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Burgundy", "Navy", "Forest Green"],
    category: "Hoodies",
    featured: false,
    onSale: true
  },
  {
    id: "10",
    name: "Stone Wash Denim Joggers",
    price: 109,
    originalPrice: 159,
    image: stoneDenimJoggers,
    description: "Vintage-inspired denim joggers with stone wash finish. Combines the comfort of joggers with the classic appeal of denim.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Stone Wash", "Dark Denim", "Light Blue"],
    category: "Denim",
    featured: false,
    onSale: true
  },
  {
    id: "11",
    name: "Forest Green Crewneck",
    price: 79,
    originalPrice: 119,
    image: forestCrewneck,
    description: "Sustainable organic cotton crewneck in earthy forest green. Soft, comfortable, and environmentally conscious choice.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Forest Green", "Sage", "Olive"],
    category: "Sweatshirts",
    featured: false,
    onSale: true
  },
  {
    id: "12",
    name: "Taupe Cargo Shorts",
    price: 69,
    originalPrice: 99,
    image: taupeCargoShorts,
    description: "Summer-ready cargo shorts with multiple pockets and relaxed fit. Perfect for warm weather adventures in versatile taupe color.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Taupe", "Khaki", "Stone"],
    category: "Shorts",
    featured: false,
    onSale: true
  }
];

export const getFeaturedProducts = () => products.filter(product => product.featured);
export const getProductById = (id: string) => products.find(product => product.id === id);
export const getNewArrivals = () => products.filter(product => product.isNew);
export const getBestSellers = () => products.filter(product => product.isBestSeller);
export const getSaleProducts = () => products.filter(product => product.onSale);
export const getAllProducts = () => products;