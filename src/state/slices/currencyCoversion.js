import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: localStorage.getItem("currencyRates")
    ? JSON.parse(localStorage.getItem("currencyRates"))
    : [],
  reducers: {
    loadCurrenciesData: (state, action) => {
      localStorage.setItem("currencyRates", JSON.stringify(action.payload));
      state = action.payload;
    },
    updateConversion: (state, action) => {
      const { payload } = action;
      const updated_rates = [...state, ...payload];

      localStorage.setItem("currencyRates", JSON.stringify(updated_rates));
      state = updated_rates;
    },
  },
});

export const { loadCurrenciesData } = collectionSlice.actions;

export default collectionSlice.reducer;
