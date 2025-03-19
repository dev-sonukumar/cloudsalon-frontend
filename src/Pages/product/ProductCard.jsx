import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import { toast } from "react-hot-toast";

const ProductCard = ({ product }) => {
  console.log(product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const images = product?.images || [];
  const variants = product?.variants || [];
  const category = product?.category || [];

  const [selectedVariant, setSelectedVariant] = useState(
    variants[0] || { price: 0, discount: 0, name: "Default" }
  );

  const [selectedImage, setSelectedImage] = useState(
    images[0]?.url || "/placeholder.jpg"
  );

  const originalPrice = selectedVariant.price;
  const discountAmount = (originalPrice * selectedVariant.discount) / 100;
  const discountedPrice = originalPrice - discountAmount;

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
    handleAddToCart();
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
              alt={product?.name || "Product Image"}
              className="w-full h-60 lg:h-52 object-cover rounded-lg border shadow-md transition-all"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex flex-col justify-between w-[20%]">
            {images.length > 0 ? (
              images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.altText || `Thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(img.url)}
                  className={`w-20 lg:w-20 lg:h-16 rounded-lg cursor-pointer transition-all hover:scale-105 ${
                    selectedImage === img.url
                      ? "ring-2 ring-[var(--main-color)]"
                      : "hover:ring-2 hover:ring-[var(--main-color)]"
                  }`}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="text-center md:text-left w-full">
          {/* Product Categories */}
          <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-2">
            {category.length > 0 ? (
              category.map((cat, index) => (
                <button
                  key={index}
                  className="px-3 py-1 border border-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-all"
                >
                  {cat.name}
                </button>
              ))
            ) : (
              <p>Category</p>
            )}
          </div>

          {/* Product Name */}
          <h2 className="text-xl font-bold text-gray-800">
            {product?.name || "Product Name"}
          </h2>

          {/* Product Description */}
          <p className="text-gray-600 text-sm mt-1">
            {product?.description || "Product Description"}
          </p>

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

          {/* Variant categories */}
          {category.length > 1 && (
            <div className="mt-4 flex flex-wrap gap-3 items-center justify-center md:justify-start">
              <h2 className="font-bold mr-3">Categories:</h2>
              {category.map((cat, index) => (
                <button key={index}>{cat.name}</button>
              ))}
            </div>
          )}

          {/* Variant Selection */}
          {variants.length > 1 && (
            <div className="mt-4 flex flex-wrap gap-3 items-center justify-center md:justify-start">
              <h2 className="font-bold mr-3">Options:</h2>
              {variants.map((variant, index) => (
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
