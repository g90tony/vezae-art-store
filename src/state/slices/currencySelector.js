import { createSlice } from "@reduxjs/toolkit";

export const currencySelector = createSlice({
  name: "product",
  initialState: {
    selectedCurrency: {},
    popularCurrencies: [],
  },
  reducers: {
    loadPopular: (state, action) => {
      const popularCurrencies = action.payload;

      state.popularCurrencies = popularCurrencies;

      localStorage.setItem(
        "popularCurrencies",
        JSON.stringify(popularCurrencies)
      );
    },
    updateSelected: (state, action) => {
      const selectedCurrency = action.payload;

      state.selectedCurrency = selectedCurrency;

      localStorage.setItem(
        "selectedCurrency",
        JSON.stringify(selectedCurrency)
      );
    },
  },
});

export const { loadPopular, loadCurrent, updateSelected } =
  currencySelector.actions;

export default currencySelector.reducer;
