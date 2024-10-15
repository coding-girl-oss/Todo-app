import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"],
};

const rootReducer = combineReducers({
  todos: todosSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
export const persistor = persistStore(store);
