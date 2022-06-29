/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, actions) => {
      let items = state.items;
      items.push(actions.payload);
      state.items = items;

      try {
        localStorage.setItem("cartItems", JSON.stringify(items));
      } catch (error) {
        console.error(error);
      }
    },
    updateCart: (state, actions) => {
      let items = state.items;
      items.push(actions.payload);

      try {
        localStorage.setItem("cartItems", JSON.stringify(items));
        state.items = items;
      } catch (error) {
        console.error(error);
      }
    },
    increaseCartItemQuantity: (state, actions) => {
      let index = actions.payload;
      const item = state.items[index];
      item.count++;
      console.log("not updated", state.items);

      const updatedItems = [...state.items, ...[item]];
      console.log("updated", updatedItems);

      try {
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      } catch (error) {
        console.error(error);
      }
    },
    reduceCartItemQuantity: (state, actions) => {
      let index = actions.payload;
      const item = state.items[index];
      item.count--;
      console.log("not updated", state.items);

      const updatedItems = [...state.items, ...[item]];
      console.log("updated", updatedItems);

      try {
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      } catch (error) {
        console.error(error);
      }
    },
    removeCartItem: (state, actions) => {
      let item_index = actions.payload;

      const items = state.items.filter((item, index) => index !== item_index);

      state.items = items;

      if (items.length > 0) {
        try {
          localStorage.setItem("cartItems", JSON.stringify(items));
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          localStorage.setItem("cartItems", JSON.stringify([]));
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
});

export const {
  addCart,
  updateCart,
  increaseCartItemQuantity,
  reduceCartItemQuantity,
  removeCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
