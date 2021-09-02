import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imgData: [],
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    gettingData: (state, action) => {
      state.imgData = action.payload.imgData;
    },
  },
});

export const { gettingData } = gallerySlice.actions;

export default gallerySlice.reducer;
