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
      Cookies.set("user", JSON.stringify({}), { expires: 7 });
      Cookies.set("totalPrice", JSON.stringify(0));
      Cookies.set("cart", JSON.stringify({}));
      state.userData = {};
      state.userLocalStorageData = {};
      state.userIsSignIn = false;
      localStorage.setItem('userCarts', JSON.stringify({}));
    },
  },
});

export const { setUserData, logOutUser } = userSlice.actions;

export default userSlice.reducer;
