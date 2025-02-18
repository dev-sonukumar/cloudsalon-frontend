import { useState, useEffect } from "react";
import {
  ShoppingBag,
  Heart,
  Users,
  Settings,
  Edit,
  DollarSign,
} from "lucide-react";
import axios from "axios";

const UserDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false); // Change to true for admin
  const [orders, setOrders] = useState([
    { id: 1, status: "Pending" },
    { id: 2, status: "Shipped" },
    { id: 3, status: "Delivered" },
  ]);
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ]);
  const [userDetails, setUserDetails] = useState({
    name: "Cloud Salon",
    email: "contact@cloudsalon.in",
    role: "user", // Change to "admin" for admin features
  });

  // Fetch data on component mount (simulated with dummy data for now)
  useEffect(() => {
    // In the future, replace with actual API calls
    if (userDetails.role === "admin") {
      setIsAdmin(true);
    }
  }, [userDetails]);

  // Handle Logout
  const handleLogout = () => {
    // Clear user session (mock example, implement real logout logic)
    localStorage.removeItem("userToken");
    window.location.href = "/login"; // Redirect to login page
  };

  // Handle item removal from wishlist
  const handleRemoveFromWishlist = (itemId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto  bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Dashboard Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-white">
          <h1 className="text-3xl font-semibold">
            Welcome, {userDetails.name}
          </h1>
          <p className="mt-2 text-sm">
            Here’s an overview of your account activity
          </p>
        </div>

        {/* Dashboard Content */}
        <div className="px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Order History */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Order History</h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="flex justify-between items-center"
                  >
                    <p>Order #{order.id}</p>
                    <span
                      className={`text-sm ${
                        order.status === "Pending"
                          ? "text-yellow-500"
                          : order.status === "Shipped"
                          ? "text-blue-500"
                          : "text-green-500"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Wishlist */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
              <ul className="space-y-4">
                {wishlistItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <Heart className="text-red-500" />
                      <span>{item.name}</span>
                    </div>
                    <button
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="text-sm text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admin Features */}
            {isAdmin && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Admin Features</h2>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-2">
                    <Users className="text-indigo-500" />
                    <span>Manage Users</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Edit className="text-indigo-500" />
                    <span>Manage Products</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <DollarSign className="text-green-500" />
                    <span>View Sales & Revenue</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Quick Links */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
              <ul>
                <li className="flex items-center space-x-2 py-2">
                  <Settings className="text-indigo-500" />
                  <span>Account Settings</span>
                </li>
                <li className="flex items-center space-x-2 py-2">
                  <Edit className="text-indigo-500" />
                  <span>Update Payment Methods</span>
                </li>
                <li className="flex items-center space-x-2 py-2">
                  <ShoppingBag className="text-green-500" />
                  <span>Track Orders</span>
                </li>
                <li className="flex items-center space-x-2 py-2">
                  <Heart className="text-red-500" />
                  <span>View Wishlist</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-8 text-center">
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
