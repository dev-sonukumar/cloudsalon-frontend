import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import ContactUs from "./Pages/ContactUS";
import Faq from "./Pages/Faq";
import Navbar from "./Pages/Navbar";
import NotFound from "./Pages/NotFound";
import Services from "./Pages/Services";
import AdminPanel from "./Pages/admin/AdminPanel";
import AdminProfile from "./Pages/admin/AdminProfile";
import CartPage from "./Pages/product/CartPage";
import FaceThreading from "./Pages/product/productService/FaceThreading";
import Facial from "./Pages/product/productService/Facial";
import HairStyle from "./Pages/product/productService/HairStyle";
import Makeup from "./Pages/product/productService/Makeup";
import ManicurePedicure from "./Pages/product/productService/ManicurePedicure";
import Waxing from "./Pages/product/productService/Waxing";
import ProfilePage from "./Pages/user/ProfilePage";
import UserDashboard from "./Pages/user/UserDashboard";
import BisFaqManager from "./components/admin/BisFaqManager";
import Dashboard from "./components/admin/Dashboard";
import Footer from "./components/common/Footer";
import Home from "./components/layout/Home";
import { Provider } from "react-redux";
import store from "./app/store";
import { Toaster } from "react-hot-toast";
import CheckoutPage from "./Pages/product/CheckoutPage";

// Layout Component for Public Pages
const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-grow">
      <Outlet />
    </div>
    <Footer />
  </div>
);

// Layout for Admin Panel (Allows Nested Routes)
const AdminLayout = () => (
  <div>
    <AdminPanel />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Public Layout with Navbar & Footer
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "services/hair-style", element: <HairStyle /> },
      { path: "services/makeup", element: <Makeup /> },
      { path: "services/face-threading", element: <FaceThreading /> },
      { path: "services/facial", element: <Facial /> },
      { path: "services/waxing", element: <Waxing /> },
      { path: "services/manicure-pedicure", element: <ManicurePedicure /> },
      { path: "userdashboard", element: <UserDashboard /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "faqs", element: <Faq /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "contact", element: <ContactUs /> },
      { path: "*", element: <NotFound /> }, // Catch-all route
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />, // Admin Panel Layout
    children: [
      { index: true, element: <Dashboard /> }, // Default admin route
      { path: "profile", element: <AdminProfile /> },
      { path: "bisfaq", element: <BisFaqManager /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* Toast container */}
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
    />
    <RouterProvider router={router} />
  </Provider>
);
