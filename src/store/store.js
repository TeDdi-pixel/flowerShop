import { configureStore } from "@reduxjs/toolkit";
import quantitySlice from "./slices/quantitySlice";
import productInfoSlice from "./slices/productInfoSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
import cookiesSlice from "./slices/cookiesSlice";
import generatorSlice from "./slices/generator";

export default configureStore({
  reducer: {
    quantity: quantitySlice,
    productInfo: productInfoSlice,
    cart: cartSlice,
    user: userSlice,
    cookies: cookiesSlice,
    generator: generatorSlice,
  },
});
