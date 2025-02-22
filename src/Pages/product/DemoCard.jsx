import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { heroImage1 } from "@/utils/ImgUtils";
import { ChevronDown } from "lucide-react";

const DemoCard = () => {
  // Dummy product data with variant prices & discounts
  const product = {
    id: 1,
    title: "Cloud Salon",
    description:
      "Comfortable and trendy sneakers for everyday wear. Perfect for all occasions.",
    image: "https://via.placeholder.com/150", // Dummy image
    variants: [
      { name: "Red", price: 1999, discount: 10 }, // 10% discount
      { name: "Blue", price: 2099, discount: 15 }, // 15% discount
      { name: "Black", price: 1899, discount: 5 }, // 5% discount
    ],
  };

  // State for selected variant
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  // Calculate discounted price
  const originalPrice = selectedVariant.price;
  const discountAmount = (originalPrice * selectedVariant.discount) / 100;
  const discountedPrice = originalPrice - discountAmount;

  const addToCart = () => {
    alert(
      `Added ${product.title} - ${selectedVariant.name} (₹${discountedPrice}) to cart!`
    );
  };

  return (
    <div className="w-full p-6 border border-gray-200 rounded-lg bg-white shadow-md">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={heroImage1}
            alt={product.title}
            className="md:w-48 object-cover rounded-lg border shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-gray-600 text-sm mt-1">{product.description}</p>

          {/* Price & Discount */}
          <div className="mt-3">
            <span className="text-xl font-extrabold text-[var(--main-color)]">
              ₹{discountedPrice.toFixed(2)}
            </span>{" "}
            <span className="text-gray-500 line-through text-sm">
              ₹{originalPrice}
            </span>{" "}
            <span className="text-green-600 text-sm">
              ({selectedVariant.discount}% OFF)
            </span>
          </div>

          {/* Variant Selection (Dropdown) */}
          <div className="mt-4 flex items-center justify-center md:justify-start">
            <h2 className="font-bold mr-3">Options:</h2>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-36 px-4 py-2 border rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-100 transition">
                {selectedVariant.name}
                <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-36 border bg-white rounded-lg shadow-lg">
                {product.variants.map((variant, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => setSelectedVariant(variant)}
                    className="hover:bg-gray-100 cursor-pointer"
                  >
                    {variant.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-3 justify-center md:justify-start">
            <Button
              onClick={addToCart}
              className="flex items-center gap-2 bg-[var(--main-color)] text-white font-semibold py-2 px-5 rounded-xl hover:bg-[#E65A5A] transition shadow-lg"
            >
              <FaShoppingCart className="text-lg" /> Add to Cart
            </Button>

            <Link
              to={`/checkout?product=${product.id}&variant=${selectedVariant.name}`}
              className="bg-[#66D9EF] text-white font-semibold py-2 px-5 rounded-xl hover:bg-[#5BBCE8] transition shadow-lg"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
