import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import authSlice from "./authSlice";
import gallerySlice from "./gallerySlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
    auth: authSlice,
    gallery: gallerySlice,
  },
});

export default store;
