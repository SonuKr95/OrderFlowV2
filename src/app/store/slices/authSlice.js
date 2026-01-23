import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  role: null,
  status: "unauthenticated",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.status = action.payload.status;
    },

    logout() {
      return initialState;
    },
  },
});

export const { setAuthUser, logout } = authSlice.actions;
export default authSlice.reducer;
