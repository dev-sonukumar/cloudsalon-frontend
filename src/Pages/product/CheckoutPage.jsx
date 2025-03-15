import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { clearCart } from "@/features/cart/cartSlice";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    // Basic validation
    const { fullName, email, address, city, zip, country } = billingInfo;
    if (!fullName || !email || !address || !city || !zip || !country) {
      toast.error("Please fill all the fields!");
      return;
    }

    // Fake API call simulation
    toast.success("Order placed successfully! 🎉");

    // Clear cart and redirect
    dispatch(clearCart());
    navigate("/"); // redirect to homepage or order success page
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh] text-center p-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          className="w-40 h-40 opacity-70 mb-4"
        />
        <h2 className="text-lg text-gray-600 mb-4">Your cart is empty!</h2>
        <Link
          to="/"
          className="bg-[var(--main-color)] text-white px-5 py-2 rounded hover:bg-[#E65A5A] transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-[80vh]">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout 🛍️</h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Billing Info Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <div className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={billingInfo.fullName}
              onChange={handleInputChange}
              className="w-full border rounded px-4 py-2"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={billingInfo.email}
              onChange={handleInputChange}
              className="w-full border rounded px-4 py-2"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={billingInfo.address}
              onChange={handleInputChange}
              className="w-full border rounded px-4 py-2"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={billingInfo.city}
                onChange={handleInputChange}
                className="w-full border rounded px-4 py-2"
              />

              <input
                type="text"
                name="zip"
                placeholder="ZIP / Postal Code"
                value={billingInfo.zip}
                onChange={handleInputChange}
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={billingInfo.country}
              onChange={handleInputChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.selectedVariant?.name}`}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    {item.quantity} x ₹{item.price.toFixed(2)}
                  </p>
                </div>
                <p className="font-semibold">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}

            <div className="flex justify-between pt-4 border-t font-bold text-lg">
              <span>Total:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-[#66D9EF] text-white px-4 py-2 rounded hover:bg-[#5BBCE8] transition mt-6"
            >
              Place Order
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckoutPage;
