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
    signOutSuccess: (state) => {
      state.currentUser = null;
      state.error = null;
      state.isLoading = false
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
  deleteStarted,
  deleteSuccess,
  deleteError,
  signOutSuccess
} = userSlice.actions;

export default userSlice.reducer;
