import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Cloud Salon",
    email: "contact@cloudsalon.in",
    role: "user", // Change to "admin" for testing admin panel visibility
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
