import { Link } from "react-router-dom";

const CartPage = ({ cart = [], setCart }) => {
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

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
                className="flex justify-between items-center border p-3 rounded-md"
              >
                <div>
                  <h3 className="font-semibold">
                    {item.product?.name} ({item.variant?.name})
                  </h3>
                  <p className="text-green-600">₹{item.variant?.price}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between text-lg font-semibold">
            <p>Total: ₹{totalPrice}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
