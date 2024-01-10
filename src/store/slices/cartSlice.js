import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    emptyCart: true,
    cookiesEnabled: false,
    moneyCount: 0,
  },
  reducers: {
    setCart: (state) => (state.emptyCart = false),
    setCookies: (state) => (state.cookiesEnabled = true),
    setMoneyCount: (state, actions) => (state.moneyCount += actions.payload),
  },
});

export const { setCart, setCookies, setMoneyCount } = cartSlice.actions;

export default cartSlice.reducer;
