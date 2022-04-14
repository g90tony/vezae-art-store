import { createSlice } from "@reduxjs/toolkit";

export const userLocationSlice = createSlice({
  name: "userLocation",
  initialState: localStorage.getItem("userLocation")
    ? JSON.parse(localStorage.getItem("userLocation"))
    : {},
  reducers: {
    setUserLocation: (state, action) => {
      const newUserLocation = action.payload;

      localStorage.setItem("userLocation", JSON.stringify(newUserLocation));
      state = newUserLocation;
    },
  },
});

export const { setUserLocation } = userLocationSlice.actions;

export default userLocationSlice.reducer;
