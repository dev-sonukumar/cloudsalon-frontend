import { useState, useEffect } from "react";
import {
  ShoppingBag,
  Heart,
  Settings,
  Edit,
  LogOut,
  Menu,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "@/features/order/orderSlice";

// ShadCN components
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    orders,
    status: orderStatus,
    error: orderError,
  } = useSelector((state) => state.orders);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (orderStatus === "idle") {
      dispatch(fetchOrders());
    }
  }, [orderStatus, dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  const handleLinkClick = (path) => {
    navigate(path);
  };

  // Sidebar links for users only
  const userLinks = [
    { label: "Account Settings", icon: Settings, path: "/account-settings" },
    { label: "Payment Methods", icon: Edit, path: "/payment-methods" },
    { label: "Manage Addresses", icon: MapPin, path: "/manage-addresses" },
    { label: "Track Orders", icon: ShoppingBag, path: "/track-orders" },
    { label: "Wishlist", icon: Heart, path: "/wishlist" },
  ];

  return (
    <div className="container flex min-h-screen bg-gray-50">
      {/* Sidebar (Desktop) */}
      <aside className="hidden lg:block w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-8">Dashboard</h2>

          <nav className="space-y-4">
            {userLinks.map(({ label, icon: Icon, path }) => (
              <div
                key={label}
                onClick={() => handleLinkClick(path)}
                className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-indigo-600 transition"
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </div>
            ))}
          </nav>

          <Button
            variant="destructive"
            className="mt-10 w-full flex gap-2"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Sidebar (Mobile) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 left-4 z-50 lg:hidden"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-8">
              Dashboard
            </h2>

            <nav className="space-y-4">
              {userLinks.map(({ label, icon: Icon, path }) => (
                <div
                  key={label}
                  onClick={() => handleLinkClick(path)}
                  className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-indigo-600 transition"
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </div>
              ))}
            </nav>

            <Button
              variant="destructive"
              className="mt-10 w-full flex gap-2"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-10"
        >
          <h1 className="text-2xl md:text-4xl font-extrabold text-indigo-600">
            Welcome, {user?.name || "User"}!
          </h1>
          <p className="text-sm mt-2 text-gray-500">
            Here's an overview of your account activity.
          </p>
        </motion.div>

        {/* Order History */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className=""
        >
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Order History</h2>

            {orderStatus === "loading" && (
              <p className="text-gray-500 text-sm">Loading orders...</p>
            )}

            {orderStatus === "succeeded" && (
              <>
                {orders.length === 0 ? (
                  <p className="text-gray-500 text-sm">No orders found.</p>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="flex justify-between items-center border-b pb-2"
                      >
                        <p className="text-sm">Order #{order.id}</p>
                        <span
                          className={`text-sm font-medium ${
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
                )}
              </>
            )}

            {orderStatus === "failed" && (
              <p className="text-red-500 text-sm">
                Failed to load orders. {orderError || "Please try again."}
              </p>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default UserDashboard;
