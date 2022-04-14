import { createSlice } from "@reduxjs/toolkit";

export const currencySelector = createSlice({
  name: "product",
  initialState: {
    selectedCurrency: localStorage.getItem("selectedCurrency")
      ? JSON.parse(localStorage.getItem("selectedCurrency"))
      : {},
    popularCurrencies: localStorage.getItem("popularCurrencies")
      ? JSON.parse(localStorage.getItem("popularCurrencies"))
      : [],
  },
  reducers: {
    loadPopular: (state, action) => {
      const popularCurrencies = action.payload;

      localStorage.setItem(
        "popularCurrencies",
        JSON.stringify(popularCurrencies)
      );

      state.popularCurrencies = popularCurrencies;
    },
    updateSelected: (state, action) => {
      const selectedCurrency = action.payload;

      localStorage.setItem(
        "selectedCurrency",
        JSON.stringify(selectedCurrency)
      );

      state.selectedCurrencies = selectedCurrency;
    },
  },
});

export const { loadPopular, loadCurrent, updateSelected } =
  currencySelector.actions;

export default currencySelector.reducer;
