import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    emptyCart: true,
    moneyCount: 0,
    cartData: { item1: 0 },
  },
  reducers: {
    setCart: (state) => {
      state.emptyCart = false;
    },
    setMoneyCount: (state, actions) => {
      state.moneyCount += actions.payload;
    },
    addCartItem: (state, actions) => {
      state.cartData += actions.payload;
    },
    removeCartItem: (state, actions) => {
      state.cartData -= actions.payload;
    },
  },
});

export const {
  setCart,
  setMoneyCount,
  addCartItem,
  removeCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
