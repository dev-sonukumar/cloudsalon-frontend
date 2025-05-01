import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();
export const useShopContext = () => useContext(ShopContext);

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  // Fetch product list
  const getProductsData = async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch products");
    }
  };

  // Get user cart and merge with guest cart if exists
  const getUserCart = async (token) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        { headers: { token } }
      );

      if (data.success) {
        const serverCart = data.cartData || {};
        const guestCart = JSON.parse(localStorage.getItem("guestCart")) || {};

        const mergedCart = { ...serverCart };
        for (const id in guestCart) {
          mergedCart[id] = (mergedCart[id] || 0) + guestCart[id];
        }

        if (Object.keys(guestCart).length > 0) {
          await axios.post(
            `${backendUrl}/api/cart/merge`,
            { mergedCart },
            { headers: { token } }
          );
          localStorage.removeItem("guestCart");
        }

        setCartItems(mergedCart);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch cart");
    }
  };

  // Add item to cart
  const addToCart = async (itemId) => {
    const updatedCart = { ...cartItems };
    updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
    setCartItems(updatedCart);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { itemId },
          { headers: { token } }
        );
        toast.success("Added to cart");
      } catch (error) {
        toast.error("Failed to add to cart");
      }
    } else {
      toast.success("Added to cart (local)");
    }
  };

  // Update item quantity
  const updateQuantity = async (itemId, quantity) => {
    const updatedCart = { ...cartItems };
    updatedCart[itemId] = quantity;
    setCartItems(updatedCart);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { itemId, quantity },
          { headers: { token } }
        );
      } catch (error) {
        toast.error("Failed to update cart");
      }
    }
  };

  // Get total cart items
  const getCartCount = () =>
    Object.values(cartItems).reduce((total, qty) => total + qty, 0);

  // Get total cart amount
  const getCartAmount = () => {
    let total = 0;
    Object.entries(cartItems).forEach(([itemId, qty]) => {
      const product = products.find((p) => p._id === itemId);
      if (product) total += product.price * qty;
    });
    return total;
  };

  // Load guest cart on first mount
  useEffect(() => {
    if (!token) {
      const guestCart = localStorage.getItem("guestCart");
      if (guestCart) {
        setCartItems(JSON.parse(guestCart));
      }
    }
  }, []);

  // Sync guest cart to localStorage
  useEffect(() => {
    if (!token) {
      localStorage.setItem("guestCart", JSON.stringify(cartItems));
    }
  }, [cartItems, token]);

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (token) getUserCart(token);
  }, [token]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
