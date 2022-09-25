import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

import combineReducers from "./modules/combineReducers";
import persistedReducers from "./modules/reduxPersist";

const store = configureStore({
  reducer: persistedReducers(combineReducers)
});

// store.subscribe(() => console.log(store.getState()));
// store.dispatch(auth.actions.toggle());

export const persistor = persistStore(store);
export default store;
