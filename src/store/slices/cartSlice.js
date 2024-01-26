import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { calculateTotalPrice } from "../../helpers/calculateTotalPrice";
import { getFromCookies, saveToCookies } from "../../helpers/browserActions";

let cart = getFromCookies("cart") || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    emptyCart: cart.length === 0,
    cartData: cart,
    totalPrice: cart.length > 0 ? calculateTotalPrice(cart) : 0,
    error: null,
  },
  reducers: {
    initializeCart: (state, actions) => {
      const cartData = actions.cartData;
      if (cartData) {
        saveToCookies("cart", cartData);
        state.cartData = cartData;
      } else if (actions.cookiesEnabled) {
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
      const existingProduct = cartData.find((item) => item.id === product.id);
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
        (item) => item.id !== actions.payload.id
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
  addCartItem,
  removeCartItem,
  totalAdd,
  totalRemove,
  addToCart,
  removeFromCart,
  setTotalPrice,
  initializeCart,
  updateCart,
} = cartSlice.actions;

export default cartSlice.reducer;
