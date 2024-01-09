import { configureStore } from "@reduxjs/toolkit";
import quantitySlice from "./slices/quantitySlice";
import productInfoSlice from "./slices/productInfoSlice";

export default configureStore({
  reducer: {
    quantity: quantitySlice,
    productInfo: productInfoSlice,
  },
});
