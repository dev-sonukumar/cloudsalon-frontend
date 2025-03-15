import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "@/features/cart/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  // ✅ Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ✅ Handle remove item

  const handleRemoveItem = (item) => {
    dispatch(
      removeFromCart({
        id: item.id,
        selectedVariant: item.selectedVariant, // ✅ This needs to match reducer
      })
    );
    toast.error(`${item.title} removed from cart`);
  };

  // ✅ Handle clear cart with confirmation
  const handleClearCart = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear the cart?"
    );
    if (confirmClear) {
      dispatch(clearCart());
      toast("Cart cleared!", {
        icon: "🗑️",
      });
    }
  };

  // ✅ Handle increment/decrement quantity
  const handleIncrement = (item) => {
    dispatch(
      incrementQuantity({ id: item.id, variant: item.selectedVariant.name })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        decrementQuantity({ id: item.id, variant: item.selectedVariant.name })
      );
    } else {
      handleRemoveItem(item);
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart 🛒</h1>

      {/* ✅ Empty Cart State */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="w-40 h-40 mb-4 opacity-70"
          />
          <p className="text-gray-600 text-lg mb-4">Your cart is empty!</p>
          <Link
            to="/"
            className="bg-[var(--main-color)] text-white px-5 py-2 rounded hover:bg-[#E65A5A] transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {/* ✅ Cart Items */}
          {cartItems.map((item, idx) => (
            <motion.div
              key={`${item.id}-${item.selectedVariant?.name}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row justify-between items-center border p-4 rounded-lg bg-white shadow-md gap-4"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <img
                  src={item.selectedImage || item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md border"
                />
                <div className="text-left">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-sm text-gray-500">
                    Variant: {item.selectedVariant?.name || "Default"}
                  </p>
                  <p className="text-sm mt-1 text-green-600 font-bold">
                    ₹{item.price.toFixed(2)} each
                  </p>
                </div>
              </div>

              {/* Quantity Control */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDecrement(item)}
                  className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center text-lg font-bold"
                >
                  -
                </button>
                <span className="min-w-[24px] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleIncrement(item)}
                  className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center text-lg font-bold"
                >
                  +
                </button>
              </div>

              {/* Subtotal & Remove */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-xl font-semibold text-[var(--main-color)]">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          ))}

          {/* ✅ Cart Summary */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t pt-6">
            <h2 className="text-2xl font-bold text-[var(--main-color)] mb-4 md:mb-0">
              Total: ₹{totalPrice.toFixed(2)}
            </h2>
            <div className="flex gap-3">
              <button
                onClick={handleClearCart}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="bg-[#66D9EF] text-white px-4 py-2 rounded hover:bg-[#5BBCE8] transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CartPage;
