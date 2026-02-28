import { createSlice } from "@reduxjs/toolkit";
import { AUTH_STATUS } from "../../../features/auth/constants/authStatus";

const initialState = {
  userRole: null,
  authStatus: AUTH_STATUS.UNAUTHENTICATED,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser(state, action) {
      console.log(action);
      state.userRole = action.payload.userRole;
      state.authStatus = action.payload.authStatus;
    },

    logout() {
      return initialState;
    },
  },
});

export const { setAuthUser, logout } = authSlice.actions;
export default authSlice.reducer;
