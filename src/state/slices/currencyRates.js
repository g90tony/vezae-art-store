import { createSlice } from "@reduxjs/toolkit";

export const currencyRates = createSlice({
  name: "collection",
  initialState: [],
  reducers: {
    loadCurrenciesData: (state, action) => {
      localStorage.setItem("currencyRates", JSON.stringify(action.payload));
      state = action.payload;
    },
    updateConversion: (state, action) => {
      const { payload } = action;
      const updated_rates = [...state, ...payload];

      state = updated_rates;

      try {
        localStorage.setItem("currencyRates", JSON.stringify(updated_rates));
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export const { loadCurrenciesData } = currencyRates.actions;

export default currencyRates.reducer;
