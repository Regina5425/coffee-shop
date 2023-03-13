import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./slices/coffeeSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    cart: cartReducer,
  },
});
