import { configureStore, createNextState } from "@reduxjs/toolkit";
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

  try {
    if (localStorage.getItem(stateName)) {
      return JSON.parse(localStorage.getItem(stateName));
    } else {
      returnType === "array"
        ? localStorage.setItem(stateName, JSON.stringify([]))
        : localStorage.setItem(stateName, JSON.stringify({}));

      return returnType === "array" ? [] : {};
    }
  } catch (error) {
    console.log(`There was a problem setting up ${stateName}'s state`);
    returnType === "array"
      ? localStorage.setItem(stateName, JSON.stringify([]))
      : localStorage.setItem(stateName, JSON.stringify({}));
  }
}

const preloadedState = {
  cart: {
    items: loadState("cartItems", "array"),
  },
  userLocation: loadState("userLocation", "array"),
  currencyRates: loadState("currencyRates", "array"),
  currencySelector: {
    selectedCurrency: loadState("selectedCurrency", "object"),
    popularCurrencies: loadState("popularCurrencies", "array"),
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
