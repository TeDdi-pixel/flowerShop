import { configureStore } from "@reduxjs/toolkit";
// import quantitySlice from "./slices/quantitySlice";
import productInfoSlice from "./slices/productInfoSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
import cookiesSlice from "./slices/cookiesSlice";
import bouquetGeneratorSlice from "./slices/generatorSlice";
import burgerMenuSlice from "./slices/burgerMenuSlice";
import imageCartFormSlice from "./slices/imageCartFormSlice";
import servicesSlice from "./slices/servicesSlice";

export default configureStore({
  reducer: {
    // quantity: quantitySlice,
    productInfo: productInfoSlice,
    cart: cartSlice,
    user: userSlice,
    cookies: cookiesSlice,
    generator: bouquetGeneratorSlice,
    burgerMenu: burgerMenuSlice,
    imageCartForm: imageCartFormSlice,
    services: servicesSlice,
  },
});
