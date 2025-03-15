import { useState, useEffect } from "react";
import DemoCard from "./ProductCard";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, Filter } from "lucide-react"; // Added Filter Icon
import { Button } from "@/components/ui/button";
// import CartPage from "./CartPage";
import DemoCart from "./DemoCart";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false); // State for filter visibility

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const updatedProducts = data.map((item) => ({
          ...item,
          sizes: ["S", "M", "L", "XL"], // Mock Sizes
          colors: ["Red", "Blue", "Black", "White"], // Mock Colors
        }));

        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts);

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  // Filter function
  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedColor) {
      filtered = filtered.filter((product) =>
        product.colors.includes(selectedColor)
      );
    }

    if (maxPrice) {
      filtered = filtered.filter((product) => product.price <= maxPrice);
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedColor, maxPrice, searchQuery, products]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">All Products</h1>

      {/* Filter Toggle Button */}
      <div className="flex justify-center mb-4">
        <Button
          variant="outline"
          className="flex items-center gap-2 border border-gray-300 shadow-md px-4 py-2 rounded-md"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <Filter className="w-5 h-5" /> Filter
        </Button>
      </div>

      {/* Filter Section (Hidden Until Opened) */}
      {filterOpen && (
        <div className="flex flex-wrap gap-4 justify-center mb-6 bg-white p-4 rounded-lg shadow-md transition-all duration-300 ">
          {/* Category Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between w-full md:w-52 px-4 py-2 border rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-100 transition ">
              {selectedCategory || "All Categories"}
              <ChevronDown className="w-4 h-4 ml-2 text-gray-500 " />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52 border bg-white rounded-lg shadow-lg ">
              <DropdownMenuItem
                onClick={() => setSelectedCategory("")}
                className="hover:bg-gray-100 cursor-pointer "
              >
                All Categories
              </DropdownMenuItem>
              {categories.map((category, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Color Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between w-full md:w-52 px-4 py-2 border rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-100 transition ">
              {selectedColor || "All Colors"}
              <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52 border bg-white rounded-lg shadow-lg ">
              <DropdownMenuItem
                onClick={() => setSelectedColor("")}
                className="hover:bg-gray-100 cursor-pointer"
              >
                All Colors
              </DropdownMenuItem>
              {["Red", "Blue", "Black", "White"].map((color, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  {color}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Price Range Filter */}
          <div className="flex flex-col items-center gap-2 w-full md:w-40">
            <span className="text-sm font-medium">Max Price: ₹{maxPrice}</span>
            <Slider
              min={10}
              max={10000}
              value={[maxPrice]}
              onValueChange={(value) => setMaxPrice(value[0])}
              className="w-full md:w-40"
            />
          </div>

          {/* Search Filter */}
          <Input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-60 border p-2 rounded-md shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      <section className="flex">
        <section>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <DemoCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-center col-span-full">No products found.</p>
            )}
          </div>
        </section>
        {/* <CartPage /> */}
        <DemoCart />
      </section>
    </div>
  );
};

export default ProductPage;
