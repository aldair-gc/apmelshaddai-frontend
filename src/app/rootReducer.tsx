import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "./auth/authSlice";

export default combineReducers({
  auth: authSlice,
})
