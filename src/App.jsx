import React from "react";
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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";
import HairStyle from "./pages/categoriesPages/HairStyle";
import Makeup from "./pages/categoriesPages/Makeup";
import Threading from "./pages/categoriesPages/Threading";
import Facial from "./pages/categoriesPages/Facial";
import Waxing from "./pages/categoriesPages/Waxing";
import ManicurePedicure from "./pages/categoriesPages/ManicurePedicure";
import Combo from "./pages/categoriesPages/Combo";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/hair-style" element={<HairStyle />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/threading" element={<Threading />} />
        <Route path="/facial" element={<Facial />} />
        <Route path="/waxing" element={<Waxing />} />
        <Route path="/manicure-pedicure" element={<ManicurePedicure />} />
        <Route path="/combo" element={<Combo />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
