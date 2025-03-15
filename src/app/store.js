import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";
import userReducer from "@/features/user/userSlice"; // Import the new reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Handles cart state/actions
    orders: orderReducer, // Handles order state/actions
    user: userReducer, // Add to the store
  },
});

export default store;
