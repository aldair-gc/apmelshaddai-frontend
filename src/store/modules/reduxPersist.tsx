import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers: any) => {
  const persistReducers = persistReducer(
    {
      key: "apmelshaddai",
      storage,
      whitelist: ["auth"]
    },
    reducers
  );
  return persistReducers;
}
