import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    isAuth: false,
    isRemember: false,
    error: null,
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        loginPending: (state) => {
            state.isLoading = true
        },
        loginSuccess: (state) => {
            state.isLoading = false,
            state.isAuth = true
        },
        loginError: (state) => {
            state.isLoading = false,
            state.isAuth = false
        },
        loginRemember: (state, action) => {
            state.isRemember = action.payload
        },
        logOut: (state) => {
            state.isAuth = false
        }
    }
})

export const { loginPending, loginSuccess, loginError, loginRemember, logOut } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;