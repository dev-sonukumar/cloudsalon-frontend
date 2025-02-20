import DemoCard from "./DemoCard";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">All Products</h1>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {/* Category Filter */}
        <select
          className="border p-2 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Color Filter */}
        <select
          className="border p-2 rounded"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="">All Colors</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
        </select>

        {/* Price Range Filter */}
        <input
          type="range"
          min="10"
          max="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="cursor-pointer"
        />
        <span className="font-bold">${maxPrice}</span>

        {/* Search Filter */}
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <DemoCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
