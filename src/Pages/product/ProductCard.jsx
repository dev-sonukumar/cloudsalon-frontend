import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import { toast } from "react-hot-toast";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // ✅ Variant and Image State with Fallbacks
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || { price: 0, discount: 0, name: "Default" }
  );
  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || "https://via.placeholder.com/150"
  );

  // ✅ Price Calculation (do this BEFORE the handler)
  const originalPrice = selectedVariant.price;
  const discountAmount = (originalPrice * selectedVariant.discount) / 100;
  const discountedPrice = originalPrice - discountAmount;

  // ✅ Add to Cart Handler
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: discountedPrice,
        selectedVariant,
        selectedImage,
      })
    );

    toast.success(
      `${product.title} (${selectedVariant.name}) added to cart! 🛒`,
      {
        duration: 3000,
        position: "top-right",
      }
    );
  };

  return (
    <div className="w-full p-6 border border-gray-200 rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Product Image Gallery */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Main Image */}
          <div className="flex justify-center">
            <img
              src={selectedImage}
              alt={product?.title}
              className="h-52 object-cover rounded-lg border shadow-md transition-all"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2 justify-center">
            {product?.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 rounded-lg cursor-pointer transition-all hover:scale-105 ${
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
          <h2 className="text-xl font-bold text-gray-800">{product?.title}</h2>
          <p className="text-gray-600 text-sm mt-1">{product?.description}</p>

          {/* Price & Discount */}
          <div className="mt-3">
            <span className="text-xl font-extrabold text-[var(--main-color)]">
              ₹{discountedPrice.toFixed(2)}
            </span>{" "}
            <span className="text-gray-500 line-through text-sm">
              ₹{originalPrice.toFixed(2)}
            </span>{" "}
            {selectedVariant.discount > 0 && (
              <span className="text-green-600 text-sm">
                ({selectedVariant.discount}% OFF)
              </span>
            )}
          </div>

          {/* Variant Selection */}
          {product?.variants?.length > 1 && (
            <div className="mt-4 flex gap-3 items-center justify-center md:justify-start">
              <h2 className="font-bold mr-3">Options:</h2>
              {product?.variants?.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVariant(variant)}
                  className={`py-2 px-5 border rounded-lg transition-all ${
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
            <Button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-[var(--main-color)] text-white font-semibold py-2 px-5 rounded-xl hover:bg-[#E65A5A] transition shadow-lg"
            >
              <FaShoppingCart className="text-lg" /> Add to Cart
            </Button>

            <Link
              to={`/checkout?product=${product?.id}&variant=${selectedVariant.name}`}
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

export default ProductCard;
