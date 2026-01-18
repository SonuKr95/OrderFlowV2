import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  role: null,
  status: "unauthenticated",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser(state, action) {
      state.email = action.payload.email;
      state.role = action.payload.loggerUserRole;
      state.status = "authenticated";
    },

    logout() {
      return initialState;
    },
  },
});

export const { setAuthUser, logout } = authSlice.actions;
export default authSlice.reducer;
