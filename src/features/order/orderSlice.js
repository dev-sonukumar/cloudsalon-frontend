import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock fetching orders asynchronously
export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  // Simulate an API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock data (Array of orders)
  return [
    { id: 1, status: "Pending" },
    { id: 2, status: "Shipped" },
    { id: 3, status: "Delivered" },
  ];
});

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [], // ✅ Default is array
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload; // ✅ Payload is an array
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
