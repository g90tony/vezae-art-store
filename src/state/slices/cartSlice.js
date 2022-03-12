import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    sumTotal: 0,
  },
  reducers: {
    addItem: (state, actions) => {
      state.items.push(actions.payload.items);
    },
    removeItem: (state, actions) => {
      let updatedItemList = state.items.slice(actions.payload.itemIndex, 1);

      state.items = updatedItemList;
    },
    increaseItemQuantity: (state, actions) => {
      const itemIndex = actions.payload;
      let itemToUpdate = state.items[itemIndex];

      itemToUpdate.quantity += 1;
      state.items[itemIndex] = itemToUpdate;
    },
    decreaseItemQuantity: (state, actions) => {
      const itemIndex = actions.payload;
      let itemToUpdate = state.items[itemIndex];

      itemToUpdate.quantity -= 1;
      state.items[itemIndex] = itemToUpdate;
    },
    updateSubTotal: (state, actions) => {
      state.updateSubTotal = actions.payload.newSubTotal;
    },
  },
});
