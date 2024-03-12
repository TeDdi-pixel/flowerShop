import { createSlice } from "@reduxjs/toolkit";
import { getFromCookies, saveToCookies } from "../../helpers/storageUtils";

export const cookiesSlice = createSlice({
  name: "cookies",
  initialState: {
    cookiesEnabled: !!getFromCookies("user"),
    cookiesMessage: true,
  },
  reducers: {
    enableCookies: (state) => {
      state.cookiesEnabled = true;
      saveToCookies("cart", []);
      const user = getFromCookies("user");
      if (user) saveToCookies("user", user);
      else if (state.cookiesEnabled) saveToCookies("user", {});
    },
    closeCookiesMessage: (state) => {
      state.cookiesMessage = false;
    },
  },
});

export const { enableCookies, closeCookiesMessage } = cookiesSlice.actions;

export default cookiesSlice.reducer;
