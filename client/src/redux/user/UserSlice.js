import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getStarted: (state) => {     
      state.isLoading = true;
      state.error = null;
    },
    getSuccess: (state, action) => {
      console.log("getSuccess action dispatched", action.payload);
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getFinally: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    updateStarted: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    updateError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateFinally: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    deleteStarted: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    deleteSuccess: (state, action) => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = null;
    },
    deleteError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteFinally: (state) => {
      state.isLoading = false;
      state.error = null;
    },
  }
});

export const {
  getStarted,
  getSuccess,
  getError,
  getFinally,
  updateStarted,
  updateSuccess,
  updateError,
  updateFinally,
  deleteStarted,
  deleteSuccess,
  deleteError,
  deleteFinally,
} = userSlice.actions;

export default userSlice.reducer;
