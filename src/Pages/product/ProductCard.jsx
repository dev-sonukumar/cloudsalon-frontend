import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");

  return (
    <div className="bg-gradient-to-br from-[#FFE4E1] to-[#E0F7FA] border border-gray-200 rounded-2xl shadow-lg p-5 hover:shadow-2xl transition-all transform hover:scale-105 flex flex-col items-center text-center">
      {/* Product Image */}
      <div className="bg-white p-3 rounded-xl w-full flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-40 h-40 object-contain rounded-md"
        />
      </div>

      {/* Product Details */}
      <h2 className="text-lg font-bold mt-3 text-gray-800">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-xl font-semibold text-[#FF6B6B] mt-1">
        ${product.price}
      </p>

      {/* Variant Selection */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="mt-2 w-full">
          <label className="block text-sm font-medium text-gray-700">
            Size:
          </label>
          <select
            className="w-full p-2 border rounded-lg bg-white text-gray-700 focus:outline-none"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {product.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-4 flex gap-3 w-full">
        <button
          onClick={() =>
            alert(`Added ${product.title} - ${selectedSize} to cart!`)
          }
          className="bg-[#66D9EF] text-white font-semibold py-2 rounded-xl hover:bg-[#5BBCE8] transition w-1/2"
        >
          Add to Cart
        </button>

        <Link
          to={`/checkout?product=${product.id}&size=${selectedSize}`}
          className="bg-[#FF6B6B] text-white font-semibold py-2 rounded-xl hover:bg-[#E65A5A] transition w-1/2"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
