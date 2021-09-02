import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const fetchJasonPlaceholder = createAsyncThunk(
  "table/fetchJasonPlaceholder",
  async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const db = await response.json();
      return db;
    } catch (error) {
      throw Error(error);
    }
  }
);

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchJasonPlaceholder.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchJasonPlaceholder.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchJasonPlaceholder.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export default tableSlice.reducer;
