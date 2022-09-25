import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "../../../services/axios";

export const auth = createSlice(
  {
    name: "state",
    initialState: {
      isLoggedIn: false,
      token: false,
      user: {},
      isLoading: false,
    },
    reducers: {
      login_request: state => { state.isLoading = true },
      login_success: (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoading = false;
      },
      login_failure: state => {
        state.isLoading = false;
      },
    },
  },
);

export const { login_request, login_success, login_failure } = auth.actions;

export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;

export const loginRequest = (payload: any) => async (dispatch) => {

  try {
    const request = await axios.post("/token", payload);
    if (request) {
      login_success(request.data);
      console.log(request.data)
      toast.success("User logged in");
    };
  } catch (err) {
    toast.error("invalid email or password");
  }
}

export default auth.reducer;
