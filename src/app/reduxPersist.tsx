import { Reducer, Action } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export default (reducers: Reducer) => {
  const persistReducers = persistReducer(
    {
      key: "APMES",
      storage,
      whitelist: ["auth"],
    },
    reducers
  );
  return persistReducers;
};
