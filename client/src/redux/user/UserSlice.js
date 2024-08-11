// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   currentUser: null,
//   isLoading: false,
//   error: null,
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     getStarted: (state) => {     
//       state.isLoading = true;
//       state.error = null;
//     },
//     getSuccess: (state, action) => {
//       console.log("getSuccess action dispatched", action.payload);
//       state.currentUser = action.payload;
//       state.isLoading = false;
//       state.error = null;
//     },
//     getError: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     getFinally: (state) => {
//       state.isLoading = false;
//       state.error = null;
//     },
//     updateStarted: (state) => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     updateSuccess: (state, action) => {
//       state.currentUser = action.payload;
//       state.isLoading = false;
//       state.error = null;
//     },
//     updateError: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     updateFinally: (state) => {
//       state.isLoading = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase('persist/REHYDRATE', (state, action) => {
//       console.log('Rehydrating:', action.payload);
//       if (action.payload && action.payload.user) {
//         return {
//           ...state,
//           ...action.payload.user,
//         };
//       }
//     });
//   },  
// });

// export const {
//   getStarted,
//   getSuccess,
//   getError,
//   getFinally,
//   updateStarted,
//   updateSuccess,
//   updateError,
//   updateFinally,
// } = userSlice.actions;

// export default userSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from 'redux-persist';

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
} = userSlice.actions;

export default userSlice.reducer;
