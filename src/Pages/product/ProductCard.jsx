import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import { toast } from "react-hot-toast";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Variant and Image State with Fallbacks
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || { price: 0, discount: 0, name: "Default" }
  );
  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || "https://via.placeholder.com/150"
  );

  // ✅ Price Calculation
  const originalPrice = selectedVariant.price;
  const discountAmount = (originalPrice * selectedVariant.discount) / 100;
  const discountedPrice = originalPrice - discountAmount;

  // ✅ Handlers
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.name,
        price: discountedPrice,
        selectedVariant,
        selectedImage,
      })
    );

    toast.success(
      `${product.name} (${selectedVariant.name}) added to cart! 🛒`,
      {
        duration: 3000,
        position: "top-right",
      }
    );
  };

  const handleBuyNow = () => {
    handleAddToCart(); // Add to cart first (optional)
    navigate(
      `/checkout?product=${product?.id}&variant=${selectedVariant.name}`
    );
  };

  return (
    <div className="w-full p-3 lg:p-6 border bg-gray-50 border-gray-200 rounded-lg shadow-md lg:transition-transform lg:hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Product Image Gallery */}
        <div className="flex flex-row gap-2 w-full lg:w-[40%]">
          {/* Main Image */}
          <div className="flex justify-center w-[80%]">
            <img
              src={selectedImage}
              alt={product?.title}
              className="w-full h-60 lg:h-52 object-cover rounded-lg border shadow-md transition-all"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex flex-col justify-between w-[20%]">
            {product?.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 lg:w-20 lg:h-16 rounded-lg cursor-pointer transition-all hover:scale-105 ${
                  selectedImage === img
                    ? "ring-2 ring-[var(--main-color)]"
                    : "hover:ring-2 hover:ring-[var(--main-color)]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="text-center md:text-left w-full">
          {/* Product Categories
          <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="px-3 py-1 border border-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-all"
              >
                {cat.name}
                {console.log(cat.name)}
              </button>
            ))}
          </div> */}
          {/* Product Name */}
          <h2 className="text-xl font-bold text-gray-800">{product?.name}</h2>

          {/* Product Description */}
          <p className="text-gray-600 text-sm mt-1">{product?.description}</p>

          {/* Pricing */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xl font-extrabold text-[var(--main-color)]">
              ₹{discountedPrice.toFixed(2)}
            </span>
            <span className="text-gray-500 line-through text-sm">
              ₹{originalPrice.toFixed(2)}
            </span>
            {selectedVariant.discount > 0 && (
              <span className="text-green-600 text-sm">
                ({selectedVariant.discount}% OFF)
              </span>
            )}
          </div>

          {/* Variant categories*/}
          {product?.categories?.length > 1 && (
            <div className="mt-4 flex flex-wrap gap-3 items-center justify-center md:justify-start">
              <h2 className="font-bold mr-3">categories:</h2>
              {product?.categories?.map((cat, index) => (
                <button key={index}>{cat.name}</button>
              ))}
            </div>
          )}
          {/* Variant Selection */}
          {product?.variants?.length > 1 && (
            <div className="mt-4 flex flex-wrap gap-3 items-center justify-center md:justify-start">
              <h2 className="font-bold mr-3">Options:</h2>
              {product?.variants?.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVariant(variant)}
                  className={`py-1 px-5 border rounded-lg transition-all ${
                    selectedVariant.name === variant.name
                      ? "border-2 border-[var(--main-color)] bg-[var(--main-color)] text-white"
                      : "hover:border-2 hover:border-[var(--main-color)]"
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3 justify-center md:justify-start">
            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="flex items-center gap-2 hover:bg-[var(--main-color)] text-white font-semibold py-5 rounded-xl bg-[#E65A5A] transition shadow-lg"
            >
              <FaShoppingCart className="text-lg" /> Add to Cart
            </Button>

            {/* Buy Now Button */}
            <Button
              onClick={handleBuyNow}
              className="flex items-center gap-2 hover:bg-[var(--main-color2)] text-white hover:text-black font-semibold py-5 rounded-xl bg-[var(--secondary-color)] transition shadow-lg"
            >
              <FaShoppingCart className="text-lg" /> Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
