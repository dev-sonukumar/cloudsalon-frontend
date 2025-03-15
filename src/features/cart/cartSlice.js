import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage or default
const storedCart = JSON.parse(localStorage.getItem("cart"));

const initialState = storedCart || {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const saveCartToLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Add to Cart
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.selectedVariant?.name === action.payload.selectedVariant?.name
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
      }

      cartSlice.caseReducers.calculateTotals(state);
      saveCartToLocalStorage(state);
    },

    // ✅ Remove From Cart

    removeFromCart: (state, action) => {
      const { id, selectedVariant } = action.payload;

      state.cartItems = state.cartItems.filter(
        (item) =>
          item.id !== id || item.selectedVariant?.name !== selectedVariant?.name
      );

      cartSlice.caseReducers.calculateTotals(state);
      saveCartToLocalStorage(state);
    },

    // ✅ Increment Quantity
    incrementQuantity: (state, action) => {
      const { id, variant } = action.payload;
      const item = state.cartItems.find(
        (item) => item.id === id && item.selectedVariant.name === variant
      );
      if (item) {
        item.quantity += 1;
      }

      cartSlice.caseReducers.calculateTotals(state);
      saveCartToLocalStorage(state);
    },

    // ✅ Decrement Quantity with Remove if quantity is 1
    decrementQuantity: (state, action) => {
      const { id, variant } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === id && item.selectedVariant.name === variant
      );

      if (itemIndex >= 0) {
        const item = state.cartItems[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Remove item if quantity is 1 and decrement is called
          state.cartItems.splice(itemIndex, 1);
        }
      }

      cartSlice.caseReducers.calculateTotals(state);
      saveCartToLocalStorage(state);
    },

    // ✅ Clear Entire Cart
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

      saveCartToLocalStorage(state);
    },

    // ✅ Calculate Totals
    calculateTotals: (state) => {
      let totalQty = 0;
      let totalAmt = 0;

      state.cartItems.forEach((item) => {
        totalQty += item.quantity;
        totalAmt += item.quantity * item.price;
      });

      state.totalQuantity = totalQty;
      state.totalAmount = totalAmt;
    },
  },
});

// ✅ Export Actions
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
