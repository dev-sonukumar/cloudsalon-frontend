import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Create Context
export const ShopContext = createContext();

// Custom Hook
export const useShopContext = () => {
  return useContext(ShopContext);
};

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

  // Fetch products
  const getProductsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/product/list`);
      if (data.success) {
        setProducts(data.products.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch products");
    }
  };

  // Fetch user cart
  const getUserCart = async (token) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        { headers: { token } }
      );
      if (data.success) {
        setCartItems(data.cartData);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch cart");
    }
  };

  // Add to cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      return toast.error("Select Product Size");
    }

    const cartData = { ...cartItems };
    cartData[itemId] = cartData[itemId] || {};
    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.error(error);
        toast.error("Failed to add to cart");
      }
    }
  };

  // Update quantity
  const updateQuantity = async (itemId, size, quantity) => {
    const cartData = { ...cartItems };
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.error(error);
        toast.error("Failed to update cart");
      }
    }
  };

  // Cart total items
  const getCartCount = () => {
    let totalCount = 0;
    Object.values(cartItems).forEach((item) => {
      Object.values(item).forEach((qty) => {
        totalCount += qty;
      });
    });
    return totalCount;
  };

  // Cart total amount
  const getCartAmount = () => {
    let totalAmount = 0;
    Object.entries(cartItems).forEach(([itemId, sizes]) => {
      const product = products.find((p) => p._id === itemId);
      if (product) {
        Object.values(sizes).forEach((qty) => {
          totalAmount += product.price * qty;
        });
      }
    });
    return totalAmount;
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (token) {
      getUserCart(token);
    }
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
