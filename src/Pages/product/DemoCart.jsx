import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const DemoCart = () => {
  // Demo products to simulate a cart
  const demoProducts = [
    {
      id: 1,
      product: "Classic Sneakers",
      variant: "Red",
      price: 1999,
      image: "https://via.placeholder.com/100x100?text=Sneakers",
    },
    {
      id: 2,
      product: "Stylish Watch",
      variant: "Black Strap",
      price: 2999,
      image: "https://via.placeholder.com/100x100?text=Watch",
    },
    {
      id: 3,
      product: "Leather Wallet",
      variant: "Brown",
      price: 999,
      image: "https://via.placeholder.com/100x100?text=Wallet",
    },
  ];

  const [cart, setCart] = useState(demoProducts);

  // Remove an item from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Calculate total
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Your Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 text-lg mb-4">Your cart is empty!</p>
            <Link
              to="/products"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.product}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.product}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Variant: {item.variant}
                      </p>
                      <p className="text-green-600 font-semibold mt-1">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 transition text-xl"
                    title="Remove from cart"
                  >
                    <FaTrashAlt />
                  </button>
                </li>
              ))}
            </ul>

            {/* Summary Section */}
            <div className="mt-6 border-t pt-6 flex justify-between items-center">
              <p className="text-xl font-semibold text-gray-700">
                Total: ₹{totalPrice}
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DemoCart;
