import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  billingAddress: {
    address1: "",
    province: "",
    country: "",
    zip: "",
  },
};

const paymentSlice = createSlice({
  name: "paymentSlice",
  initialState,
  reducers: {
    preparePayment: (state, action) => {
      state.id = action.payload;
      // state.billingAddress = action.payload.billingAddress;

      try {
        localStorage.setItem("payment", JSON.stringify(state));
      } catch (error) {
        console.log("There was a problem persisting");
      }
    },
    updateBillingAddress: (state, action) => {
      state.billingAddress = action.payload;

      try {
        localStorage.setItem("payment", JSON.stringify(state));
      } catch (error) {
        console.log("There was a problem persisting");
      }
    },
    emptyPayment: (state) => {
      state = {};

      try {
        localStorage.setItem("payment", JSON.stringify(state));
      } catch (error) {
        console.log("There was a problem persisting");
      }
    },
  },
});

export const { preparePayment, updateBillingAddress, emptyPayment } =
  paymentSlice.actions;

export default paymentSlice.reducer;
