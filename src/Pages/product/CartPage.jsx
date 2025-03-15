import { useState } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  // Demo products for cart
  const demoProducts = [
    {
      product: { id: 1, name: "Classic Sneakers" },
      variant: { name: "Red", price: 1999 },
    },
    {
      product: { id: 2, name: "Stylish Watch" },
      variant: { name: "Black Strap", price: 2999 },
    },
    {
      product: { id: 3, name: "Leather Wallet" },
      variant: { name: "Brown", price: 999 },
    },
  ];

  // Initialize cart state with demo products
  const [cart, setCart] = useState(demoProducts);

  // Remove item from cart
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Calculate total price
  const totalPrice = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + (item.variant?.price || 0), 0)
    : 0;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">
          Your cart is empty.{" "}
          <Link to="/products" className="text-blue-500">
            Go Shopping
          </Link>
        </p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-3 rounded-md shadow-sm bg-white"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {item.product?.name}{" "}
                    <span className="text-sm text-gray-500">
                      ({item.variant?.name})
                    </span>
                  </h3>
                  <p className="text-green-600 font-semibold">
                    ₹{item.variant?.price}
                  </p>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total & Checkout */}
          <div className="mt-6 flex justify-between text-lg font-semibold">
            <p>Total: ₹{totalPrice}</p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
