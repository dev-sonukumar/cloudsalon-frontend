import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api_product } from "@/utils/api";

const ProductPage = () => {
  // State setup
  const [products, setProducts] = useState([]); // Corrected initialization
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Fixed naming
  const [sortOrder, setSortOrder] = useState(""); // 'lowToHigh' or 'highToLow'

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(api_product);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by search query
  const filteredProducts = products.filter((product) => {
    const productName = product?.name || "";
    return productName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Sort products by price
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = Number(a.price);
    const priceB = Number(b.price);

    if (sortOrder === "lowToHigh") {
      return priceA - priceB;
    } else if (sortOrder === "highToLow") {
      return priceB - priceA;
    }
    return 0; // No sorting applied
  });

  return (
    <section className="container py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8 text-center">
        Explore Our Products
      </h2>

      {/* Search & Sort Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Search Input */}
        <div className="w-full md:w-1/2">
          <Input
            type="text"
            placeholder="Search for products..."
            value={searchQuery} // Fixed controlled component value
            onChange={(e) => setSearchQuery(e.target.value)} // Fixed handler
          />
        </div>

        {/* Sort Dropdown */}
        <div className="w-full md:w-1/4">
          <Select
            value={sortOrder}
            onValueChange={(value) => setSortOrder(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lowToHigh">Price: Low to High</SelectItem>
              <SelectItem value="highToLow">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Loading and Error States */}
      {loading && (
        <p className="text-center text-gray-500">Loading products...</p>
      )}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {/* Product Grid */}
      <div className="p-4 grid grid-cols-1 gap-8">
        {sortedProducts.length > 0 && !loading
          ? sortedProducts.map((product, index) => (
              <motion.div
                key={product._id || product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))
          : !loading &&
            !error && (
              <p className="text-center col-span-full text-gray-500">
                No products found.
              </p>
            )}
      </div>
    </section>
  );
};

export default ProductPage;
