import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  checkout: {
    checkoutItemIds: [],
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
    loadCheckout: (state, { payload }) => {
      state = payload;

      try {
        localStorage.setItem("checkout", JSON.stringify(state));
      } catch (error) {
        console.error("There was a problem persisting");
      }
    },
    updateLineItems: (state, action) => {
      state = action.payload;

      try {
        localStorage.setItem("checkout", JSON.stringify(state));
      } catch (error) {
        console.error("There was a problem persisting");
      }
    },
    updateShippingAddress: (state, action) => {
      state = action.payload;

      try {
        localStorage.setItem("checkout", JSON.stringify(state));
      } catch (error) {
        console.error("There was a problem persisting ");
      }
    },
    emptyCheckout: (state) => {
      state = {};

      try {
        localStorage.setItem("checkout", JSON.stringify(state));
      } catch (error) {
        console.error("There was a problem persisting ");
      }
    },
  },
});

export const {
  loadCheckout,
  updateLineItems,
  updateShippingAddress,
  emptyCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
