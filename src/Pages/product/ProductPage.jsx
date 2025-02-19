import { useState } from "react";

const ProductPage = () => {
  const products = [
    {
      name: "Smart Watch",
      category: "Electronics",
      variants: [
        { id: 1, name: "Basic", price: 1999, image: "/images/watch-basic.jpg" },
        { id: 2, name: "Pro", price: 2999, image: "/images/watch-pro.jpg" },
        { id: 3, name: "Ultra", price: 3999, image: "/images/watch-ultra.jpg" },
      ],
    },
    {
      name: "Wireless Headphones",
      category: "Accessories",
      variants: [
        {
          id: 4,
          name: "Standard",
          price: 1499,
          image: "/images/headphones-standard.jpg",
        },
        {
          id: 5,
          name: "Premium",
          price: 2499,
          image: "/images/headphones-premium.jpg",
        },
      ],
    },
    {
      name: "Laptop",
      category: "Electronics",
      variants: [
        {
          id: 6,
          name: "Core i5",
          price: 49999,
          image: "/images/laptop-i5.jpg",
        },
        {
          id: 7,
          name: "Core i7",
          price: 69999,
          image: "/images/laptop-i7.jpg",
        },
      ],
    },
  ];

  const [selectedProducts, setSelectedProducts] = useState(
    products.map((product) => ({
      product,
      selectedVariant: product.variants[0],
    }))
  );
  const [cart, setCart] = useState([]);

  const addToCart = (product, variant) => {
    setCart([...cart, { product, variant }]);
  };

  const buyNow = (product, variant) => {
    console.log(
      "Buying now:",
      product.name,
      variant.name,
      "Price:",
      variant.price
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {selectedProducts.map(({ product, selectedVariant }, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <img
              src={selectedVariant.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="text-lg font-semibold text-green-600">
              ₹{selectedVariant.price}
            </p>

            <label className="block text-gray-700 font-medium mt-2">
              Choose Variant:
            </label>
            <select
              className="w-full p-2 border rounded-md"
              value={selectedVariant.id}
              onChange={(e) => {
                const updatedProducts = [...selectedProducts];
                updatedProducts[index].selectedVariant = product.variants.find(
                  (v) => v.id === parseInt(e.target.value)
                );
                setSelectedProducts(updatedProducts);
              }}
            >
              {product.variants.map((variant) => (
                <option key={variant.id} value={variant.id}>
                  {variant.name}
                </option>
              ))}
            </select>

            <div className="mt-4 flex gap-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => addToCart(product, selectedVariant)}
              >
                Add to Cart
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={() => buyNow(product, selectedVariant)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-10 border-t pt-6">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="mt-4">
            {cart.map((item, index) => (
              <li key={index} className="border p-2 rounded-md mb-2">
                {item.product.name} ({item.variant.name}) - ₹
                {item.variant.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
