import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const cookiesSlice = createSlice({
  name: "cookies",
  initialState: {
    cookiesEnabled: !!Cookies.get("user"),
    cookiesMessage : true,
  },
  reducers: {
    enableCookies: (state) => {
      state.cookiesEnabled = true;
    },
    closeCookiesMessage: (state) => {
      state.cookiesMessage = false;
    },
  },
});

export const { enableCookies, closeCookiesMessage } = cookiesSlice.actions;

export default cookiesSlice.reducer;
