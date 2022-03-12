import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    details: {},
    currentSize: {},
    images: [],
  },
  reducers: {
    loadProduct: (state, action) => {
      state = action.payload;
    },
    updateCurrentSize: (state, action) => {
      state.currentSize = action.payload.currentSize;
      state.images = action.payload.images;
    },
    filterProduct: (state, action) => {
      state.product = action.payload;
    },
    emptyProduct: (state) => {
      state = {
        details: {},
        currentSize: {},
        images: [],
      };
    },
  },
});

export const { loadProduct, updateCurrentSize, filterProduct, emptyProduct } =
  productSlice.actions;

export default productSlice.reducer;
