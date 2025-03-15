import { useState } from "react";
import { products } from "@/data/products";
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

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // 'lowToHigh' or 'highToLow'

  // Filter products by search
  const filteredProducts = products.filter((product) => {
    const productName = product?.name || "";
    return productName.toLowerCase().includes(search.toLowerCase());
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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

      {/* Product Grid */}
      <div className="p-4 grid grid-cols-1  gap-8">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductPage;
