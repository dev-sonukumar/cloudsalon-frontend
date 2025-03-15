import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "@/features/cart/cartSlice";
import { toast } from "react-hot-toast";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle remove item
  const handleRemoveItem = (item) => {
    dispatch(removeFromCart({ id: item.id })); // Dispatch with correct payload (id)
    toast.error(`${item.title} removed from cart`);
  };

  // Handle clear cart
  const handleClearCart = () => {
    dispatch(clearCart());
    toast("Cart cleared!", {
      icon: "🗑️",
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {/* If Cart is Empty */}
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty!</p>
      ) : (
        <div className="space-y-4">
          {/* List of Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded bg-white shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.selectedImage || item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">
                    Variant: {item.selectedVariant?.name || "Default"}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p className="font-bold">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemoveItem(item)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total & Clear Cart Button */}
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-bold">
              Total: ₹{totalPrice.toFixed(2)}
            </h2>
            <button
              onClick={handleClearCart}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
