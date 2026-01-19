import { createSelector } from "@reduxjs/toolkit";
const selectCartItems = (state) => state.cart.quantity;

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((acc, item) => acc + item.price * item.count, 0),
);
