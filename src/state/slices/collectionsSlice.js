import { createSlice } from "@reduxjs/toolkit";

export const collectionsSlice = createSlice({
  name: "collections",
  initialState: { collections: [], currentPage: 1 },
  reducers: {
    fetchCollections: (state, action) => {
      state.collections = action.payload;
    },
    fetchMoreCollections: (state, action) => {
      state.collections.push(action.payload);
      state.currentPage += 1;
    },
    updateSingleCollection: (state, action) => {
      state.collections[action.payload.collectionIndex] = action.payload.update;
    },
    filterCollections: (state, action) => {
      state.collections = action.payload;
    },
    emptyCollections: (state, action) => {
      state.collections = action.payload;
      state.currentPage = 0;
    },
  },
});

export const {
  fetchCollections,
  fetchMoreCollections,
  updateSingleCollection,
  filterCollections,
  emptyCollections,
} = collectionsSlice.actions;

export default collectionsSlice.reducer;
