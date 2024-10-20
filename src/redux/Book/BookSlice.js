import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBookAsync = createAsyncThunk(
  "book/getBookAsync",
  async (query) => {
    const res = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    const data = res.data;
    return data.items
  }
);

export const BookSlice = createSlice({
  name: "book",
  initialState: {
    item: [],
    modalStatus: false,
    error:null,
    status: "idle"
  },
  reducers: {
    changeStatus: (state) =>{
        state.modalStatus = !state.modalStatus
    }
  },
  extraReducers: (builder) => {
    builder
     .addCase(getBookAsync.pending, (state) => {
      state.status = "loading"
    })
    .addCase(getBookAsync.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.item = action.payload;
      })
    .addCase(getBookAsync.rejected, (state, action) => {
      state.status = "error"
      state.error = action.error.message
    });
  },
});
export const {changeStatus} = BookSlice.actions
export default BookSlice.reducer;
