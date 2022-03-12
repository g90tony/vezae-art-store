import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    products: [],
    collections: [],
    loadingComplete: false,
  },
  reducers: {
    loadProductsResults: (state, action) => {
      state.products = action.payload;

      state.loadingComplete =
        state.products.length !== 0 && state.collections.length !== 0
          ? true
          : false;
    },
    loadCollectionsResults: (state, action) => {
      state.collections = action.payload;

      state.loadingComplete =
        state.products.length !== 0 && state.collections.length !== 0
          ? true
          : false;
    },
  },
});

export const { loadProductsResults, loadCollectionsResults } =
  searchSlice.actions;

export default searchSlice.reducer;
