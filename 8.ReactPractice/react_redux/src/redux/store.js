import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/counter";
import authReducer from "./slices/auth";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    auth: authReducer,
  },
});
