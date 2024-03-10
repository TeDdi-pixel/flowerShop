import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { getFromCookies, saveToCookies } from "../../helpers/storageUtils";
import { TypeInitCart, TypeProduct } from "../types/types";
import { calculateTotalPrice } from "../../helpers/calculateTotalPrice";

let cart = getFromCookies("cart") || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    emptyCart: cart.length === 0,
    cartData: cart,
    totalPrice: cart.length > 0 ? calculateTotalPrice(cart) : 0,
  },
  reducers: {
    initializeCart: (state, actions:PayloadAction<TypeInitCart>) => {
      const { cartData, cookiesEnabled } = actions.payload;
      if (cartData) {
        saveToCookies("cart", cartData);
        state.cartData = cartData;
      } else if (cookiesEnabled) {
        state.cartData = [];
      }
    },
    updateCart: (state, action) => {
      state.cartData = action.payload;
    },

    setEmptyCart: (state, action) => {
      state.emptyCart = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
      const totalPrice = state.totalPrice;
      if (totalPrice && Cookies.get("totalPrice"))
        Cookies.set("totalPrice", JSON.stringify(totalPrice));
    },
    totalAdd: (state, actions) => {
      state.totalPrice += actions.payload;
    },
    totalRemove: (state, actions) => {
      if (state.totalPrice > 0) state.totalPrice -= actions.payload;
      if (state.totalPrice == 0) state.emptyCart = true;
    },
    addToCart: (state, actions) => {
      const product = actions.payload;
      const cartData = state.cartData;      
      const existingProduct = cartData.find((item : TypeProduct) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cartData.push({ ...product, quantity: 1 });
      }
      state.totalPrice = calculateTotalPrice(cartData);
      saveToCookies("cart", cartData);
      saveToCookies("totalPrice", state.totalPrice);
      state.emptyCart = false;
    },
    removeFromCart: (state, actions) => {
      const cartData = state.cartData;
      state.cartData = cartData.filter(
        (item: TypeProduct) => item.id !== actions.payload.id
      );
      state.totalPrice = calculateTotalPrice(cartData);
      saveToCookies("cart", cartData);
      saveToCookies("totalPrice", state.totalPrice);
      state.emptyCart = cartData.length === 0;
      if (cartData.length === 0) {
        saveToCookies("cart", []);
        saveToCookies("totalPrice", state.totalPrice);
      }
    },
  },
});

export const {
  setEmptyCart,
  totalAdd,
  totalRemove,
  addToCart,
  removeFromCart,
  setTotalPrice,
  initializeCart,
  updateCart,
} = cartSlice.actions;

export default cartSlice.reducer;
