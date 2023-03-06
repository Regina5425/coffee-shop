import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./slices/coffeeSlice";

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
