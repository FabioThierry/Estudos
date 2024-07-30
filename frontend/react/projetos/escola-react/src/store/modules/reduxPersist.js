import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "NAME_APP",
      storage,
      whitelist: ["exemple"],
    },
    reducers
  );

  return persistedReducer;
};
