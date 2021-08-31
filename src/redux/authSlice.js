import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
    login: (state, action) => {
      state.isLoggedIn = true;
    },
  },
});

export const { logout, login } = auth.actions;

export default auth.reducer;
