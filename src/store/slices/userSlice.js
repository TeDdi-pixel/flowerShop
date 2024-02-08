import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  getFromCookies,
  getFromLocalStorage,
  saveToCookies,
  saveToLocalStorage,
} from "../../helpers/browserActions";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userIsSignIn: getFromLocalStorage("user"),
    userData: getFromCookies("user") || getFromLocalStorage("user")?.user?.uid,
    storageUserData: getFromLocalStorage("user"),
  },
  reducers: {
    setUserData: (state, action) => {
      if (action.payload) {
        state.userData = action.payload;
        state.storageUserData = getFromLocalStorage("user");
        if (state.storageUserData) saveToCookies("user", action.payload);
      }
    },
    setUserIsSignedIn: (state, action) => {
      if (action.payload) state.userIsSignIn = action.payload;
      else state.userIsSignIn = false;
    },
    setStorageUserData: (state, action) => {
      state.storageUserData = action.payload;
      saveToLocalStorage("user", action.payload);
    },
    logOutUser: (state) => {
      state.userData = null;
      localStorage.removeItem("user");
      const user = getFromCookies("user");
      if (user) saveToCookies("user", {});
      else Cookies.remove("user");
      Cookies.remove("cart");
      Cookies.remove("totalPrice");
    },
  },
});

export const {
  setStorageUserData,
  setUserData,
  logOutUser,
  setUserIsSignedIn,
} = userSlice.actions;

export default userSlice.reducer;
