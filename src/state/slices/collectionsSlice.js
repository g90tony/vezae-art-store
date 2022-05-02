import { createSlice } from "@reduxjs/toolkit";

export const collectionsSlice = createSlice({
  name: "collections",
  initialState: [],
  reducers: {
    fetchCollections: (state, action) => {
      state = action.payload;
      try {
        localStorage.setItem("allCollections", JSON.stringify(state));
      } catch (error) {
        console.log("There was a problem persisting all products");
      }
    },
    filterCollections: (state, action) => {
      const currentOrder = action.payload;
      switch (currentOrder) {
        case "popular":
          state = state.sort(
            (a, b) => a.recommendation_score - b.recommendation_score
          );
          break;

        case "cheap":
          state = state.sort((a, b) => {
            if (a.variants[0].price - b.variants[0].price) {
              return -1;
            } else {
              return 1;
            }
          });
          break;

        case "expensive":
          state = state.sort((a, b) => {
            if (b.variants[0].price - a.variants[0].price) {
              return -1;
            } else {
              return 1;
            }
          });
          break;

        case "newest":
          state = state.sort((a, b) => b.collection_id - a.collection_id);
          break;

        case "nasc":
          state = state.sort((a, b) => {
            if (a.title.toUpperCase() < b.title.toUpperCase()) {
              return -1;
            } else {
              return 1;
            }
          });
          break;

        case "ndes":
          state = state.sort((a, b) => {
            if (b.title.toUpperCase() < a.title.toUpperCase()) {
              return -1;
            } else {
              return 1;
            }
          });
          break;
        default:
          state = state.sort(
            (a, b) => a.recommendation_score - b.recommendation_score
          );
          break;
      }
    },
  },
  updateCollections: (state, action) => {
    state = state.map((collection) => {
      if (collection.collection_id === action.payload.collection_id) {
        collection = action.payload.collection;
      }

      return collection;
    });
  },
});

export const { fetchCollections, filterCollections, updateCollections } =
  collectionsSlice.actions;

export default collectionsSlice.reducer;
