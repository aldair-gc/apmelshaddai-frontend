import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface User {
  name: string,
  id: number,
  email: string,
}

interface Auth {
  user: User,
  token: string,
  isLoggedIn: boolean,
  isLoading: boolean
}

const initialState: Auth = {
  user: { name: "", id: 0, email: "" },
  token: "",
  isLoggedIn: false,
  isLoading: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authRequest: (state) => {
      state.isLoading = true;
    },
    authSuccess: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    authFailure: (state) => {
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = { name: "", id: 0, email: "" };
      state.token = "";
      state.isLoggedIn = false;
      state.isLoading = false;
    }
  },
})

export const { authRequest, authSuccess, authFailure, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
