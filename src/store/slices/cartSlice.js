import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const calculateTotalPrice = (cartData) => {
  return cartData.reduce((total, product) => total + product.price, 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    emptyCart: true,
    moneyCount: 0,
    cartData: [],
    totalPrice: 0,
  },
  reducers: {
    setCart: (state) => {
      console.log(state.emptyCart);
      state.emptyCart = false;
      console.log(state.emptyCart);
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
      state.cartData.push(actions.payload);
      state.totalPrice = calculateTotalPrice(state.cartData);
      Cookies.set("cart", JSON.stringify(state.cartData));
      Cookies.set("totalPrice", JSON.stringify(state.totalPrice));
      state.emptyCart = false;
    },
    removeFromCart: (state, actions) => {
      const index = state.cartData.findIndex(
        (item) => item.id === actions.payload.id
      );
      if (index !== -1) {
        state.cartData.splice(index, 1);
        state.totalPrice = calculateTotalPrice(state.cartData);
        Cookies.set("cart", JSON.stringify(state.cartData));
        Cookies.set("totalPrice", JSON.stringify(state.totalPrice));
        state.emptyCart = state.cartData.length === 0;
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
} = cartSlice.actions;

export default cartSlice.reducer;
