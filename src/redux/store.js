import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import authSlice from "./authSlice";
import gallerySlice from "./gallerySlice";
import tableSlice from "./tableSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
    auth: authSlice,
    gallery: gallerySlice,
    table: tableSlice,
  },
});

export default store;
