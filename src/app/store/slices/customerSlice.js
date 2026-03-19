import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  customerName: null,
  cutomerPhoneNumber: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer(state, action) {
      state.customerName = action.payload.name;
      state.cutomerPhoneNumber = action.payload.phone_number;
    },
  },
});

export const { setCustomer } = customerSlice.actions;
export default customerSlice.reducer;
