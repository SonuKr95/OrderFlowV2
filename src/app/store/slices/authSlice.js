import { createSlice } from "@reduxjs/toolkit";
import { AUTH_STATUS } from "../../../features/auth/constants/authStatus";

const initialState = {
  id: null,
  email: null,
  role: null,
  status: AUTH_STATUS.UNAUTHENTICATED,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.status = AUTH_STATUS.AUTHENTICATED;
    },

    logout() {
      return initialState;
    },
  },
});

export const { setAuthUser, logout } = authSlice.actions;
export default authSlice.reducer;
