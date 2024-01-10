import { configureStore } from "@reduxjs/toolkit";
import quantitySlice from "./slices/quantitySlice";
import productInfoSlice from "./slices/productInfoSlice";
import cartSlice from "./slices/cartSlice";

export default configureStore({
  reducer: {
    quantity: quantitySlice,
    productInfo: productInfoSlice,
    cart: cartSlice,
  },
});
