import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Verify from "./pages/Verify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Admin Components
import AdminNavbar from "./components/admin/Navbar";
import Sidebar from "./components/admin/Sidebar";
import AdminLogin from "./components/admin/Login";
import AdminAdd from "./pages/admin/Add";
import AdminList from "./pages/admin/List";
import AdminOrders from "./pages/admin/Orders";
import ProductCategory from "./pages/ProductCategory";
import AllProducts from "./pages/AllProducts";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "₹";

const App = () => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken") ? localStorage.getItem("adminToken") : ""
  );

  useEffect(() => {
    localStorage.setItem("adminToken", adminToken);
  }, [adminToken]);

  return (
    <div className="min-h-screen">
      <ToastContainer />

      <Routes>
        {/* User Routes */}
        <Route
          path="/*"
          element={
            <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
              <Navbar />
              <SearchBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<AllProducts />} />
                <Route
                  path="/products/:category"
                  element={<ProductCategory />}
                />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/verify" element={<Verify />} />
              </Routes>
              <Footer />
            </div>
          }
        />

        {/* Admin Routes */}
        <Route
          path="admin/*"
          element={
            adminToken === "" ? (
              <AdminLogin setToken={setAdminToken} />
            ) : (
              <div className="bg-gray-50 min-h-screen">
                <AdminNavbar setToken={setAdminToken} />
                <hr />
                <div className="flex w-full">
                  <Sidebar />
                  <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
                    <Routes>
                      <Route
                        path="/"
                        element={<AdminAdd token={adminToken} />}
                      />
                      <Route
                        path="add"
                        element={<AdminAdd token={adminToken} />}
                      />
                      <Route
                        path="list"
                        element={<AdminList token={adminToken} />}
                      />
                      <Route
                        path="orders"
                        element={<AdminOrders token={adminToken} />}
                      />
                    </Routes>
                  </div>
                </div>
              </div>
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
