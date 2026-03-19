import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import customerReducer from "./slices/customerSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    customer: customerReducer,
    // Add other reducers here as you build them
  },
});

export default store;
