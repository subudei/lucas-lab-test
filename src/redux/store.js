import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import auth from "./authSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: auth,
  },
});

export default store;
