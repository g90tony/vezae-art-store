import { configureStore } from "@reduxjs/toolkit";
import collectionSlice from "./slices/collectionSlice";
import collectionsSlice from "./slices/collectionsSlice";
import productSlice from "./slices/productSlice";
import productsSlice from "./slices/productsSlice";
import { searchSlice } from "./slices/searchSilce";

export default configureStore({
  reducer: {
    products: productsSlice,
    collections: collectionsSlice,
    viewProduct: productSlice,
    viewCollection: collectionSlice,
    searchResults: searchSlice,
  },
});
