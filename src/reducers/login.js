import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    isAuth: false,
    isRemember: false,
    error: null,
    token: null,
    logged: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      setUsername(state, action) {
        state.username = action.payload;
      },
      setPassword(state, action) {
        state.password = action.payload;
      },
      setLoading(state, action) {
        state.isLoading = action.payload;
      },
      setError(state, action) {
        state.error = action.payload;
      },
      setToken(state, action) {
        state.token = action.payload;
      },
      setLoggedIn(state, action) {
        state.logged = action.payload
      }
    }
});

export const { setUsername, setPassword, setLoading, setError, setToken, setLoggedIn } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;