import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: { products: [], currentPage: 1 },
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
    fetchMoreProducts: (state, action) => {
      state.products.push(action.payload);
      state.currentPage += 1;
    },
    updateSingleProduct: (state, action) => {
      state.products[action.payload.productIndex] = action.payload.update;
    },
    filterProducts: (state, action) => {
      state.products = action.payload;
    },
    emptyProducts: (state, action) => {
      state.products = action.payload;
      state.currentPage = 0;
    },
  },
});

export const {
  fetchProducts,
  fetchMoreProducts,
  updateSingleProduct,
  filterProducts,
  emptyProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
