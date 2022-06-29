import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  billingAddress: {
    address1: "",
    province: "",
    country: "",
    zip: "",
  },
  generatedKey: false,
};

const paymentSlice = createSlice({
  name: "paymentSlice",
  initialState,
  reducers: {
    preparePayment: (state, action) => {
      state.id = action.payload.vaultID;
      state.billingAddress = action.payload.billingAddress;

      try {
        localStorage.setItem("payment", JSON.stringify(state));
      } catch (error) {
        console.log("There was a problem persisting");
      }
    },
  },
});

export const { preparePayment } = paymentSlice.actions;

export default paymentSlice.reducer;
