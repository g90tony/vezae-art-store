import { createSlice } from "@reduxjs/toolkit";

export const userLocationSlice = createSlice({
  name: "userLocation",
  initialState: {},
  reducers: {
    setUserLocation: (state, action) => {
      const newUserLocation = action.payload;

      state = newUserLocation;
      try {
        localStorage.setItem("userLocation", JSON.stringify(newUserLocation));
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export const { setUserLocation } = userLocationSlice.actions;

export default userLocationSlice.reducer;
