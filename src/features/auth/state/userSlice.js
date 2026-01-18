import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  role: null,
  status: "unauthenticated",
};

const userSlice = createSlice({
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

export const { setAuthUser, logout } = userSlice.actions;
export default userSlice.reducer;
