import { brand1 } from "@/utils/ImgUtils";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const DemoCard = () => {
  // Dummy product data with variant prices & discounts
  const product = {
    id: 1,
    title: "Stylish Sneakers",
    description:
      "Comfortable and trendy sneakers for everyday wear. Comfortable and trendy sneakers for everyday wear.Comfortable and trendy sneakers for everyday wear.Comfortable and trendy sneakers for everyday wear. ",
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
    <div className="w-full py-4 px-6  shadow-lg hover:shadow-2xl transition  rounded-xl ">
      <div className="container  flex flex-col md:flex-row gap-6 items-center  rounded-xl ">
        {/* Product Image */}
        <section className="flex justify-center">
          <img
            src={brand1}
            alt={product.title}
            className=" md:w-60 object-cover rounded-2xl border shadow-md"
          />
        </section>

        {/* Product Details */}
        <section className="flex-1">
          <div className="mb-3">
            <h2 className="text-xl md:text-xl font-extrabold text-[#FF6B6B]">
              {product.title}
            </h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </div>

          {/* Product Variants */}
          <div className="flex gap-3 flex-wrap">
            {product.variants.map((variant, index) => (
              <button
                key={index}
                onClick={() => setSelectedVariant(variant)}
                className={`px-4 py-2 rounded-xl border shadow-lg transition ${
                  selectedVariant.name === variant.name
                    ? "bg-[var(--main-color)] text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>

          {/* Updated Price with Discount */}
          <div className="mt-4">
            <h2 className="text-md md:text-xl font-extrabold text-[var(--main-color)]">
              ₹{discountedPrice.toFixed(2)}{" "}
              <span className="text-gray-500 line-through text-sm">
                ₹{originalPrice}
              </span>{" "}
              <span className="text-green-600 text-sm">
                ({selectedVariant.discount}% OFF)
              </span>
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 flex gap-3">
            <button
              onClick={addToCart}
              className="flex items-center gap-2 bg-[#FF6B6B] text-white font-semibold py-2 px-5 rounded-xl hover:bg-[#E65A5A] transition shadow-lg"
            >
              <FaShoppingCart className="text-lg" /> Add to Cart
            </button>

            <Link
              to={`/checkout?product=${product.id}&variant=${selectedVariant.name}`}
              className="bg-[#66D9EF] text-white font-semibold py-2 px-5 rounded-xl hover:bg-[#5BBCE8] transition shadow-lg"
            >
              Buy Now
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DemoCard;
