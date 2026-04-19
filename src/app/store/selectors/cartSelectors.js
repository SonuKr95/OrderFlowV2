export const selectCart = (state) => state.cart;

export const selectCartProducts = (state) => state.cart.products;

export const selectSubtotal = (state) =>
  state.cart.products.reduce((sum, p) => sum + p.total, 0);

export const selectTax = (state) => {
  const subtotal = selectSubtotal(state);
  const taxRate = state.cart.taxRate;

  // Formula: (Inclusive Total * Tax Rate) / (100 + Tax Rate)
  return (subtotal * taxRate) / (100 + taxRate);
};

export const selectItemTotal = (state) => {
  const subtotal = selectSubtotal(state);
  const tax = selectTax(state);

  return subtotal - tax;
};
