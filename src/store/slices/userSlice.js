import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const userCookie = Cookies.get("user");
const userLocalStorage = localStorage.getItem("user");
let userLocalStorageData = userLocalStorage ? JSON.parse(userLocalStorage) : {};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userIsSignIn:
      userLocalStorageData && "user" in userLocalStorageData ? true : false,

    userData: userCookie
      ? JSON.parse(userCookie)
      : localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {},

    userLocalStorageData: userLocalStorage ? JSON.parse(userLocalStorage) : {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    logOutUser: (state) => {
      localStorage.setItem("user", JSON.stringify({}));
      Cookies.remove("user");
      Cookies.remove("totalPrice");
      Cookies.remove("cart");
      state.userData = {};
      state.userLocalStorageData = {};
      state.userIsSignIn = false;
      localStorage.removeItem('userCarts');
    },
  },
});

export const { setUserData, logOutUser } = userSlice.actions;

export default userSlice.reducer;
