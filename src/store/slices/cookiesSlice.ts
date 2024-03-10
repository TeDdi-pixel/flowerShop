import { createSlice } from "@reduxjs/toolkit";
import { getFromCookies, saveToCookies } from "../../helpers/storageUtils";

export const cookiesSlice = createSlice({
  name: "cookies",
  initialState: {
    cookiesEnabled: !!getFromCookies("user"),
    cookiesMessage: true,
    cookiesError: false,
    cookiesErrorMessage: false,
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
    setError: (state, action) => {
      state.cookiesError = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.cookiesErrorMessage = action.payload;
    },
  },
});

export const { enableCookies, closeCookiesMessage, setError, setErrorMessage } =
  cookiesSlice.actions;

export default cookiesSlice.reducer;
