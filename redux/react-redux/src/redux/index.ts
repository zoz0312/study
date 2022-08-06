import { combineReducers } from "redux";
import counter from "./counter.toolkit";
import { configureStore } from "@reduxjs/toolkit";
import errorMiddleware from "./middleware/error";

const rootReducer = combineReducers({
  counter,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(errorMiddleware),
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
