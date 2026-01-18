import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here as you build them
  },
});

export default store;
