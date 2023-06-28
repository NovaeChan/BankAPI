import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    firstName: "",
    lastName: "",
  }

const userSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
      setUser(state, action) {
        state.user = action.payload;
      },
      setFirstName(state, action) {
        state.firstName = action.payload
      },
      setLastName(state, action) {
        state.lastName = action.payload
      },
      setLoading(state, action) {
        state.isLoading = action.payload;
      },
      setError(state, action) {
        state.error = action.payload;
      }
    }
});

export const { setUser, setLoading, setError, setFirstName, setLastName } = userSlice.actions;

export const userReducer = userSlice.reducer;