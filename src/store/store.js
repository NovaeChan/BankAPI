import { configureStore } from '@reduxjs/toolkit';
import {loginReducer} from "../reducers/login"
import { userReducer } from "../reducers/user.js"
import tokenReducer from "../reducers/token";
import thunk from "redux-thunk"

const middleware = [thunk]

export const store = configureStore({
    reducer: {
      login: loginReducer,
      userProfile: userReducer,
      token: tokenReducer
    },
    middleware
  })