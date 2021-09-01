import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  fakeUser: {
    name: "user",
    password: "1234",
  },
};

const authSlice = createSlice({
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

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
