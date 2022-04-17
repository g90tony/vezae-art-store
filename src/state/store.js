import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import currencyRates from "./slices/currencyRates";
import userLocationSlice from "./slices/userLocation";
import currencySelector from "./slices/currencySelector";
import productsSlice from "./slices/productsSlice";
import { searchSlice } from "./slices/searchSilce";

function loadState(stateName, returnType) {
  if (typeof window === undefined) {
    return returnType;
  }

  return localStorage.getItem(stateName)
    ? JSON.parse(localStorage.getItem(stateName))
    : returnType;
}

const preloadedState = {
  cart: {
    items: loadState("cartItems", []),
  },
  userLocation: loadState("userLocation", []),
  currencyRates: loadState("currencyRates", []),
  currencySelector: {
    selectedCurrency: loadState("selectedCurrency", {}),
    popularCurrencies: loadState("popularCurrencies", []),
  },
};

export default configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    userLocation: userLocationSlice,
    currencySelector: currencySelector,
    currencyRates: currencyRates,
    searchResults: searchSlice,
  },
  preloadedState: preloadedState,
});
