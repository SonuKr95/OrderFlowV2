import { createSlice } from "@reduxjs/toolkit";

function findProduct(id, productsArray) {
  const selectedProduct = productsArray.find((p) => {
    return p.id === id;
  });
  return selectedProduct;
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

const initialState = {
  customerId: null,
  products: [],
  taxRate: 18,
  shipping: 199,
  paymentMethod: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCustomer(state, action) {
      state.customerId = action.payload;
    },
    addProduct(state, action) {
      const {
        id,
        sku,
        name,
        selling_price,
        quantityCount = 1,
      } = action.payload;
      const total = selling_price * quantityCount;

      const ProductAlreadyExisted = findProduct(id, state.products);
      if (ProductAlreadyExisted) {
        ProductAlreadyExisted.quantityCount++;
        ProductAlreadyExisted.total = calculateTotal(
          ProductAlreadyExisted.selling_price,
          ProductAlreadyExisted.quantityCount,
        );
        return;
      }
      state.products.push({
        id,
        sku,
        name,
        selling_price,
        quantityCount,
        total,
      });
    },
    decreaseQuantity(state, action) {
      console.log(action.payload);
      const product = findProduct(action.payload, state.products);
      if (!product) return;
      if (product.quantityCount === 1) {
        state.products = state.products.filter((p) => {
          return p.id !== action.payload;
        });
        return;
      }
      product.quantityCount--;
      product.total = calculateTotal(
        product.selling_price,
        product.quantityCount,
      );
    },
    increaseQuantity(state, action) {
      const product = findProduct(action.payload, state.products);
      if (!product) return;
      product.quantityCount++;
      product.total = calculateTotal(
        product.selling_price,
        product.quantityCount,
      );
    },

    deleteProduct(state, action) {
      const product_id = action.payload;
      state.products = state.products.filter((product) => {
        return product.id !== product_id;
      });
    },

    selectPaymentMethod(state, action) {
      state.paymentMethod = action.payload;
    },
  },
});

export const {
  setCustomer,
  addProduct,
  decreaseQuantity,
  increaseQuantity,
  selectPaymentMethod,
} = cartSlice.actions;
export default cartSlice.reducer;
