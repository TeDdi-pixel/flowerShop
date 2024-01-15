import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const calculateTotalPrice = (cartData) => {
  return cartData.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

const cookiesCart = Cookies.get("cart");

let cart = [];
let totalPrice = 0;
console.log("cookiesCart:", cookiesCart); 
if (cookiesCart) {
  try {
    cart = JSON.parse(cookiesCart);
    totalPrice = calculateTotalPrice(cart);
  } catch (error) {
    console.error("Invalid cart data:", cookiesCart);
    cart = [];
    totalPrice = 0;
  }
}
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    emptyCart: cart && cart.length > 0 ? false : true,
    moneyCount: 0,
    cartData: cart && Array.isArray(cart) ? cart : [],
    totalPrice: totalPrice,
  },
  reducers: {
    initializeCart: (state,actions) => {
      const cartData = actions.payload;
      if (
        cartData !== null &&
        cartData !== undefined &&
        Array.isArray(cartData) &&
        cartData.length > 0
      ) {
        Cookies.set("cart", JSON.stringify(cartData));
        state.cartData = cartData;
      }
    },
    updateCart: (state, action) => {
      state.cartData = action.payload;
    },

    setCart: (state) => {
      state.emptyCart = false;
    },
    setMoneyCount: (state, actions) => {
      state.moneyCount += actions.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
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
      const existingProduct = state.cartData.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartData.push({ ...product, quantity: 1 });
      }
      state.totalPrice = calculateTotalPrice(state.cartData);
      Cookies.set("cart", JSON.stringify(state.cartData));
      Cookies.set("totalPrice", JSON.stringify(state.totalPrice));
      state.emptyCart = false;
    },
    removeFromCart: (state, actions) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== actions.payload.id
      );
      state.totalPrice = calculateTotalPrice(state.cartData);
      Cookies.set("cart", JSON.stringify(state.cartData));
      Cookies.set("totalPrice", JSON.stringify(state.totalPrice));
      state.emptyCart = state.cartData.length === 0;
      if (state.cartData.length === 0) {
        Cookies.set("cart", JSON.stringify([]));
        Cookies.set("totalPrice", JSON.stringify(state.totalPrice));
      }
    },
  },
});

export const {
  setCart,
  setMoneyCount,
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
