import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  customerId: null,
  products: [],
  quantity: [],
  taxRate: 18,
  shipping: 199,
  summary: {
    subtotal: null,
    tax: null,
    shipping: null,
    totalPayable: null,
  },
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCustomer(state, action) {
      state.customerId = action.payload;
    },
    addProduct(state, action) {
      const { product_id: id, price } = action.payload;
      state.products.push(action.payload);
      state.quantity.push({
        productId: id,
        price: price,
        count: 1,
        total: price,
      });
    },
    decreaseQuantity(state, action) {
      const product_id = action.payload;
      console.log(product_id);
      const selectedProduct = state.quantity.find((q) => {
        return q.productId === product_id;
      });
      if (selectedProduct.count === 1) {
        state.products = state.products.filter((product) => {
          return product.product_id !== product_id;
        });
        state.quantity = state.quantity.filter((q) => {
          return q.productId !== product_id;
        });

        return;
      }
      selectedProduct.count--;
      selectedProduct.total = selectedProduct.price * selectedProduct.count;
      // console.log(action.payload);
    },
    increaseQuantity(state, action) {
      const product_id = action.payload;
      console.log(product_id);
      const selectedProduct = state.quantity.find((q) => {
        return q.productId === product_id;
      });
      selectedProduct.count++;
      selectedProduct.total = selectedProduct.price * selectedProduct.count;
    },

    deleteProduct(state, action) {
      const product_id = action.payload;
      state.products = state.products.filter((product) => {
        return product.product_id !== product_id;
      });
    },
  },
});

export const { setCustomer, addProduct, decreaseQuantity, increaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
