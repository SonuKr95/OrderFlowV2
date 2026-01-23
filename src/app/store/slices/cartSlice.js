import { createSlice } from "@reduxjs/toolkit";

function findProduct(product_id, productsArray) {
  const selectedProduct = productsArray.find((p) => {
    return p.product_id === product_id;
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
        product_id,
        sku,
        name,
        price,
        quantityCount = 1,
      } = action.payload;
      const total = price * quantityCount;

      const ProductAlreadyExisted = findProduct(product_id, state.products);
      if (ProductAlreadyExisted) {
        ProductAlreadyExisted.quantityCount++;
        ProductAlreadyExisted.total = calculateTotal(
          ProductAlreadyExisted.price,
          ProductAlreadyExisted.quantityCount,
        );
        return;
      }
      state.products.push({
        product_id,
        sku,
        name,
        price,
        quantityCount,
        total,
      });
    },
    decreaseQuantity(state, action) {
      const product = findProduct(action.payload, state.products);
      if (!product) return;
      if (product.quantityCount === 1) {
        state.products = state.products.filter((p) => {
          return p.product_id !== action.payload;
        });
        return;
      }
      product.quantityCount--;
      product.total = calculateTotal(product.price, product.quantityCount);
    },
    increaseQuantity(state, action) {
      const product = findProduct(action.payload, state.products);
      if (!product) return;
      product.quantityCount++;
      product.total = calculateTotal(product.price, product.quantityCount);
    },

    deleteProduct(state, action) {
      const product_id = action.payload;
      state.products = state.products.filter((product) => {
        return product.product_id !== product_id;
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
