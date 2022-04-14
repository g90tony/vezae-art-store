import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import currencyRates from "./slices/currencyRates";
import userLocationSlice from "./slices/userLocation";
import currencySelector from "./slices/currencySelector";
import productsSlice from "./slices/productsSlice";
import { searchSlice } from "./slices/searchSilce";

export default configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    userLocation: userLocationSlice,
    currencySelector: currencySelector,
    currencyRates: currencyRates,
    searchResults: searchSlice,
  },
});
