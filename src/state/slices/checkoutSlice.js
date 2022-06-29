import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  checkout: {
    id: "",
    itemsSubTotal: {
      currency: "",
      amount: "",
    },
    tax: {
      currency: "",
      amount: "",
    },
    shippingAddress: {
      address1: "",
      province: "",
      country: "",
      zip: "",
    },
  },
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    loadCheckout: (state, action) => {
      state.checkout.id = action.payload;

      try {
        localStorage.setItem("checkout", JSON.stringify(state));
      } catch (error) {
        console.log("There was a problem persisting");
      }
    },
  },
  updateLineItems: (state, action) => {
    state.itemsSubTotal = action.payload;

    try {
      localStorage.setItem("checkout", JSON.stringify(state));
    } catch (error) {
      console.log("There was a problem persisting");
    }
  },
  updateShippingAddress: (state, action) => {
    state.checkout.shippingAddress = action.payload.shippingAddress;
    state.checkout.tax = action.payload.tax;
    state.checkout.itemsSubTotal = action.payload.itemsSubTotal;
    state.email = action.payload.email;
    state.firstName = action.payload.firstName;
    state.lastName = action.payload.lastName;

    try {
      localStorage.setItem("checkout", JSON.stringify(state));
    } catch (error) {
      console.log("There was a problem persisting ");
    }
  },
});

export const { loadCheckout, updateLineItems, updateShippingAddress } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
