import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getStarted: (state) => {
            state.isLoading = true
            state.error = null
        },
        getSuccess: (state, action) => {
            state.currentUser = action.payload
            state.isLoading = false
            state.error = null
        },
        getError: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        getFinally: (state, action) => {
            state.isLoading = false
            state.error = null
        },
    }
})

export const { getStarted, getSuccess, getError, getFinally } = userSlice.actions;

export default userSlice.reducer