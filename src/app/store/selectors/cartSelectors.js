export const selectCart = (state) => state.cart;

export const selectCartProducts = (state) => state.cart.products;

export const selectSubtotal = (state) =>
  state.cart.products.reduce((sum, p) => sum + p.total, 0);

// export const selectTax = (state) =>
//   (selectSubtotal(state) * state.cart.taxRate) / 100;

// export const selectTotalPayable = (state) =>
//   selectSubtotal(state) + selectTax(state) + state.cart.shipping;
