import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  customerId: null,
  products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCustomer(state, action) {
      state.customerId = action.payload;
    },
    setProduct(state, action) {
      console.log(action.payload);
      state.products.push(action.payload);
    },
  },
});

export const { setCustomer, setProduct } = cartSlice.actions;
export default cartSlice.reducer;
