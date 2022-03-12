import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    details: {},
    currentSize: {},
    images: [],
    collectionProducts: [],
  },
  reducers: {
    loadCollection: (state, action) => {
      state = action.payload;
    },
    updateCurrentSize: (state, action) => {
      state.currentSize = action.payload.currentSize;
      state.images = action.payload.images;
    },
    filterCollection: (state, action) => {
      state.collection = action.payload;
    },
    emptyCollection: (state) => {
      state = {
        details: {},
        currentSize: {},
        images: [],
      };
    },
  },
});

export const {
  loadCollection,
  updateCurrentSize,
  filterCollection,
  emptyCollection,
} = collectionSlice.actions;

export default collectionSlice.reducer;
