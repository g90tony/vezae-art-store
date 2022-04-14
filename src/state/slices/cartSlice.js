import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  reducers: {
    addCart: (state, actions) => {
      let items = state.items;
      items.push(actions.payload);

      try {
        localStorage.setItem("cartItems", JSON.stringify(items));
        state.items = items;
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
    updateCartItem: (state, actions) => {
      const updatedItems = state.items.map((item) => {
        if (
          item.product_item === actions.payload.id &&
          item.size === actions.payload.size
        ) {
          item.count = actions.payload.newCount;
          return item;
        }
      });

      try {
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        state.items = updatedItems;
      } catch (error) {
        console.error(error);
      }
    },
    removeCartItem: (state, action) => {
      const editedItems = state.items.filter((c) => {
        if (
          c.product_id !== action.payload.id &&
          c.size !== action.payload.size
        ) {
          return c;
        }
      });

      if (editedItems.length > 0) {
        try {
          localStorage.setItem("cartItems", JSON.stringify(editedItems));
          state.items = editedItems;
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

export const { addCart, updateCart, updateCartItem, removeCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
